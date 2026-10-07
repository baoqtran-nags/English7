# Trợ Lý Tiếng Anh Lớp 7 - Thầy Thomas 👨‍🏫

Ứng dụng ôn tập tiếng Anh dành cho học sinh Lớp 7 với hình tượng **Thầy Thomas** thân thiện, kiên nhẫn và dễ hiểu.

---

## 🌟 Tính Năng Nổi Bật

1. **Bộ đề ngữ pháp 15 câu (3 thì trọng tâm Lớp 7)**:
   - Thì Hiện tại đơn (Present Simple)
   - Thì Quá khứ đơn (Past Simple)
   - Thì Hiện tại tiếp diễn (Present Continuous)
   - Đủ 3 thể: Khẳng định (+), Phủ định (-), Nghi vấn (?) với Động từ To be & Động từ thường.
   - Chấm điểm tự động và lời giải chi tiết (Dấu hiệu nhận biết, cấu trúc ngữ pháp, dịch nghĩa tiếng Việt).
   - Tự động tạo đề ngẫu nhiên bằng Gemini AI hoặc chọn từ 3 bộ đề chọn lọc tích hợp sẵn.

2. **Ôn tập 100 Động từ bất quy tắc (Chuẩn ZIM Academy)**:
   - Bảng 4 cột: V1 - V2 - V3 - Nghĩa.
   - **Tra cứu nhanh (Quick Lookup)**: Tìm kiếm tức thì theo V1, V2, V3 hoặc nghĩa tiếng Việt không cần cuộn trang.
   - **Lưu từ yêu thích (Bookmarks)**: Đánh dấu sao các từ khó để ôn kỹ.
   - **Phát âm chuẩn (Audio Pronunciation)**: Đọc liên tục 3 cột (V1 - V2 - V3) với phiên âm IPA.

3. **Chế độ bảo vệ mắt (Eye-Care Mode)**:
   - **🌿 Giấy Kem Dịu Nhẹ (Mặc định)**: Tông màu ấm tự nhiên, giảm độ chói và 65% ánh sáng xanh khi học lâu trên điện thoại và laptop.
   - **🍃 Xanh Mát Sage**: Giảm mỏi võng mạc, thư giãn mắt khi đọc nhiều tài liệu.
   - **🌙 Ban Đêm Êm Dịu**: Tông xám ấm chống lóa trong không gian thiếu sáng.

4. **Phòng Hỏi Đáp Cùng Thầy Thomas**:
   - Trực tiếp giải đáp mọi thắc mắc bài tập với phong cách sư phạm gần gũi.
   - Tích hợp bộ giải thích thông minh hoạt động mượt mà cả ở chế độ tĩnh (GitHub Pages) lẫn máy chủ backend.

---

## 🚀 Hướng Dẫn Kích Hoạt GitHub Pages (Khắc Phục Lỗi Deploy)

Nếu workflow GitHub Actions của bạn bị báo lỗi đỏ ❌, hãy làm theo 2 bước đơn giản sau:

### Bước 1: Cấu hình GitHub Pages trong Repository Settings (BẮT BUỘC)
1. Mở repository của bạn trên GitHub (ví dụ: `https://github.com/baoqtran-nags/...`).
2. Bấm vào tab **Settings** (ở thanh menu trên cùng).
3. Ở cột menu bên trái, chọn mục **Pages**.
4. Tại phần **Build and deployment** -> **Source**:
   - Chọn chuyển từ `"Deploy from a branch"` sang **`"GitHub Actions"`**.
   *(Lưu ý: Nếu không chọn GitHub Actions, GitHub sẽ từ chối quyền deploy của workflow và báo lỗi đỏ).*

### Bước 2: Đẩy code mới lên GitHub
Dự án đã được cấu hình sẵn file `.github/workflows/deploy.yml` với cờ `--legacy-peer-deps` và file `package-lock.json` hoàn chỉnh.

Chạy các lệnh sau trong terminal của bạn:
```bash
git add .
git commit -m "fix: resolve deployment config and package lock for github pages"
git push origin main
```

Sau khi push, vào tab **Actions** trên GitHub, bạn sẽ thấy workflow chuyển sang màu xanh ✅ và link trang web sẽ hiển thị ngay tại mục **Settings -> Pages**!

---

## 💻 Chạy Ứng Dụng Trên Máy Local

1. Cài đặt thư viện:
```bash
npm install --legacy-peer-deps
```

2. Khởi chạy môi trường phát triển:
```bash
npm run dev
```
Truy cập: `http://localhost:3000`

3. Build cho môi trường production:
```bash
npm run build
```
Thư mục xuất ra là `/dist`, có thể tải lên bất kỳ nền tảng lưu trữ tĩnh nào (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
