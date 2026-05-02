---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Agent.
displayed_sidebar: agentSidebar
---

# Akabot Agent 2.2.0.7 — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Hành động nhanh trên biểu tượng khay** — Bắt đầu, dừng hoặc kiểm tra trạng thái bất kỳ workflow nào được gán trực tiếp từ khay hệ thống.
- **Kích hoạt REST cục bộ** — Mở một endpoint HTTP cục bộ có thể cấu hình để ứng dụng desktop và script có thể khởi chạy attended run theo chương trình.
- **Động cơ tác vụ nhận thức** — Vòng lặp suy luận tích hợp cho workflow agent cần lập kế hoạch và điều chỉnh các bước tại thời gian chạy.

### Cải tiến
- Giảm thời gian khởi động agent từ khoảng 4 giây xuống dưới 1 giây trên máy có SSD.
- Khoảng thời gian heartbeat hiện có thể cấu hình (mặc định 30 giây, tối thiểu 5 giây).
- Cải thiện logic kết nối lại khi kết nối với Center bị mất trong lúc chạy.

### Sửa lỗi
- Khắc phục sự cố agent không tiếp tục sau khi máy tỉnh dậy từ chế độ ngủ Windows.
- Giải quyết lỗi selector tự động hóa giao diện người dùng không khớp trên các ứng dụng có cây truy cập động.
- Sửa lỗi phím nóng kích hoạt attended xung đột với phím tắt toàn cục của Microsoft Teams.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Trợ lý kích hoạt attended** — Bong bóng nổi hiển thị các tác vụ attended đang chờ và nút chạy một lần nhấp.
- **Bộ nhớ đệm gói ngoại tuyến** — Agent giờ có thể chạy phiên bản gói đã đồng bộ lần cuối khi Center không thể truy cập.
- **Thông tin đăng nhập riêng cho mỗi tiến trình** — Mỗi tiến trình có thể tham chiếu vào mục Credential Store riêng mà không chia sẻ.

### Cải tiến
- Tải gói từ Center giờ sử dụng delta sync — chỉ các tệp thay đổi được truyền.
- Nhật ký giờ được ghi không đồng bộ để tránh chặn việc thực thi activity trên ổ đĩa chậm.

### Sửa lỗi
- Sửa lỗi khóa tệp ngăn cản xoay vòng nhật ký trên agent chạy workflow unattended 24/7.
- Sửa một trường hợp biên giới khiến agent ghi nhận trùng tên máy sau khi thay đổi hostname hệ điều hành.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Kiến trúc dịch vụ Agent 3.0** — Agent giờ cài đặt như một dịch vụ Windows chuẩn với tùy chọn mạo danh phiên người dùng.
- **Lưu trữ phần tử an toàn** — Các selector UI nhạy cảm có thể được mã hóa và lưu trữ trong kho chứng chỉ nền tảng.
- **Bảng lịch sử chạy** — Hiển thị nhúng 50 lần thực thi cục bộ gần nhất với trạng thái, thời lượng và truy cập nhật ký.

### Thay đổi phá vỡ
- Agent v2.x không thể kết nối với Center v3.0. Cả hai phải được nâng cấp cùng nhau.
- Trình khởi chạy `.exe` cũ bị thay thế bằng bộ cài dịch vụ Windows.

### Sửa lỗi
- Khắc phục lỗi thất bại gián đoạn trong driver tự động hóa SAP GUI khi ở thiết lập DPI cao.
- Sửa lỗi crash khi workflow cố truy cập chia sẻ mạng trong quá trình khởi động agent.
