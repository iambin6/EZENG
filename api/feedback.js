export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "AI chưa được cấu hình. Hãy thêm OPENAI_API_KEY trong Vercel Environment Variables." });
  }

  const { mode, text, level = "A1", scenario = "", context = "" } = req.body || {};
  if (!text || typeof text !== "string" || text.length > 6000) {
    return res.status(400).json({ error: "Vui lòng gửi nội dung hợp lệ (tối đa 6000 ký tự)." });
  }

  let instructions;
  if (mode === "writing") {
    instructions = `Bạn là giáo viên tiếng Anh thân thiện với người học Việt Nam ở trình độ CEFR ${level}.
Phân tích đoạn viết của người học. Trả lời bằng tiếng Việt, dễ hiểu, không phán xét, theo các mục:
1) Bản gốc (trích ngắn)
2) Bản sửa đúng ngữ pháp/chính tả
3) Bản tự nhiên hơn như người bản xứ
4) Giải thích 2-5 lỗi quan trọng bằng tiếng Việt, kèm ví dụ ngắn
5) Đánh giá nhanh 4 tiêu chí: Grammar, Vocabulary, Coherence, Task response (mỗi tiêu chí /5; ghi rõ đây là ước lượng học tập, không phải điểm thi chính thức).
Không bịa lỗi nếu câu đã đúng. Giữ nguyên ý người học.`;
  } else if (mode === "conversation") {
    instructions = `Bạn là bạn luyện hội thoại tiếng Anh và giáo viên thân thiện cho người Việt trình độ CEFR ${level}.
Tình huống: ${scenario}
Lời mở đầu/ngữ cảnh: ${context}
Người học vừa trả lời: ${text}
Hãy trả lời ngắn gọn theo đúng vai hội thoại bằng tiếng Anh (1-3 câu), sau đó thêm mục "Quick feedback (Vietnamese):" giải thích tối đa 2 điểm về ngữ pháp/từ vựng và gợi ý một cách nói tự nhiên hơn nếu cần. Đừng biến hội thoại thành bài giảng dài.`;
  } else {
    return res.status(400).json({ error: "Unsupported mode" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          { role: "system", content: instructions },
          { role: "user", content: text }
        ]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI API error:", data?.error?.message || response.status);
      return res.status(502).json({ error: "Dịch vụ AI tạm thời không phản hồi. Hãy thử lại sau." });
    }

    const feedback = data?.choices?.[0]?.message?.content?.trim();
    if (!feedback) return res.status(502).json({ error: "AI không trả về nội dung." });
    return res.status(200).json({ feedback });
  } catch (error) {
    console.error("AI request failed:", error);
    return res.status(500).json({ error: "Không thể kết nối dịch vụ AI." });
  }
}
