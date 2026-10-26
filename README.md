# EZENG — English, at your pace 🌱

Ứng dụng web học tiếng Anh toàn diện, tự nhiên và thực tế: luyện phản xạ 4 kỹ năng, ghi nhớ từ vựng qua flashcard thông minh, hội thoại theo tình huống thực tế và theo dõi tiến độ cá nhân.

---

## ✨ Tính năng nổi bật

### 1. ✍️ Góc luyện tập 4 kỹ năng (Practice)
- **🎧 Listening (Nghe hiểu)**: Nghe phát âm chuẩn qua Web Speech API và làm bài tập trắc nghiệm.
- **📖 Reading (Đọc hiểu)**: Đọc đoạn văn ngắn, phân tích ngữ cảnh, lưu từ vựng mới ngay chỉ với một chạm.
- **🎙️ Speaking (Luyện nói)**: Nhận diện giọng nói qua microphone với Web Speech Recognition và nhận phản hồi tự đánh giá tức thì.
- **✍️ Writing (Luyện viết)**: Viết đoạn văn ngắn và nhận nhận xét, sửa lỗi ngữ pháp kèm gợi ý tự nhiên hơn từ AI.

### 2. 🗂️ Sổ từ vựng & Flashcards thông minh (Vocabulary)
- Thêm từ vựng nhanh với phiên âm IPA, nghĩa tiếng Việt và câu ví dụ ngữ cảnh.
- Ôn tập bằng **Flashcard lật 2 mặt**, hỗ trợ phát âm giọng bản xứ.
- Đánh dấu mức độ nhớ ("Đã nhớ ✓" hoặc "Cần ôn lại") để tự động lập chu kỳ ôn tập.
- Bộ lọc và tìm kiếm từ vựng tiện lợi.

### 3. 🪜 Lộ trình chuẩn CEFR từ A1 đến C2 (CEFR Path)
- Bao phủ đầy đủ 6 cấp độ: **A1 (Beginner)**, **A2 (Elementary)**, **B1 (Intermediate)**, **B2 (Upper intermediate)**, **C1 (Advanced)**, **C2 (Proficiency)**.
- Mục tiêu học tập, chủ điểm ngữ pháp cốt lõi và bài kiểm tra nhanh cho từng cấp độ.

### 4. 💬 Hội thoại theo tình huống thực tế (Scenarios)
- Đa dạng ngữ cảnh thực tế: Gọi đồ tại quán café, phỏng vấn xin việc, thủ tục khách sạn/du lịch, trao đổi bài học ở trường, trò chuyện cùng bạn bè, hỏi đường.
- Tương tác nhập vai đàm thoại cùng AI thông minh hoặc tự luyện tập phản xạ.

### 5. 📝 Ngân hàng câu hỏi & Luyện câu sai (Question Bank)
- Lọc câu hỏi theo kỹ năng (Grammar, Vocabulary, Reading) và trình độ (A1–C2).
- Chế độ **"Chỉ câu sai"** giúp củng cố những điểm ngữ pháp và từ vựng còn yếu.
- Điểm số và giải thích chi tiết đáp án ngay sau mỗi câu.

### 6. 📊 Bảng điều khiển tiến độ (Dashboard)
- Biểu đồ tiến độ chi tiết theo từng kỹ năng: Listening, Speaking, Reading, Writing.
- Biểu đồ cột hoạt động trong 7 ngày gần nhất.
- Đếm chuỗi ngày học liên tục (Streak 🔥) và tùy chỉnh mục tiêu bài học mỗi ngày.
- Danh sách tổng hợp các câu sai cần ôn lại và lịch sử hoạt động gần đây.
- Hỗ trợ **Xuất dữ liệu tiến độ ra file JSON** để sao lưu.

---

## 🚀 Hướng dẫn cài đặt & Chạy ứng dụng

### 1. Chạy trực tiếp trên trình duyệt (Offline / Standalone)
Không cần cài đặt phức tạp, bạn chỉ cần mở file `index.html` bằng trình duyệt web hiện đại (Google Chrome, Microsoft Edge, Firefox, Safari):
- Mọi dữ liệu (tiến độ, từ vựng, chuỗi ngày học) được tự động lưu trên `localStorage` của trình duyệt.
- Các tính năng cơ bản (Nghe, Nói, Đọc, Flashcard, Quiz) hoạt động 100% không cần backend.

### 2. Triển khai với AI đầy đủ trên Vercel (Khuyên dùng)
Hệ thống đi kèm serverless function `api/feedback.js` kết nối OpenAI để sửa bài viết và tương tác hội thoại tự nhiên:

1. Đẩy mã nguồn lên kho lưu trữ GitHub của bạn.
2. Import dự án vào [Vercel](https://vercel.com).
3. Cài đặt các biến môi trường (Environment Variables) trong Vercel Project Settings:
   - `OPENAI_API_KEY`: Khóa API OpenAI của bạn.
   - `OPENAI_MODEL`: *(Tùy chọn)* Mặc định là `gpt-4o-mini`.
4. Bấm **Deploy**. Vercel sẽ tự động cấu hình ứng dụng tĩnh và endpoint `/api/feedback`.

---

## 🛠️ Công nghệ sử dụng
- **Frontend**: Pure HTML5, Modern CSS (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+).
- **Web APIs**: Web Speech API (`SpeechSynthesisUtterance`, `SpeechRecognition`), LocalStorage API, Blob API.
- **Backend / AI**: Vercel Serverless Functions (Node.js ESM), OpenAI API (`gpt-4o-mini`).
- **Thiết kế**: Giao diện tối giản, gam màu mộc mạc thư thái, chuẩn Responsive trên thiết bị di động & máy tính.

---

🌱 *EZENG — Học đều một chút mỗi ngày.*
