---
id: notification-unsubscribe
title: Tùy chọn thông báo email
sidebar_label: Hủy đăng ký thông báo
sidebar_position: 4
description: Hướng dẫn thân thiện với người mới bắt đầu về trang công khai để hủy đăng ký email và thông báo trong ứng dụng.
displayed_sidebar: scaleFlowSidebar
---

# Tùy chọn thông báo email (Hủy đăng ký)

Đôi khi ScaleFlow gửi cảnh báo email cho đội ngũ (ví dụ khi cuộc trò chuyện được giao hoặc ticket cập nhật). Nếu muốn nhận ít email hơn, người dùng có thể dùng **liên kết hủy đăng ký** đặc biệt trong tin nhắn.

Trang này là **công khai** — hoạt động mà không cần đăng nhập ScaleFlow, miễn là liên kết còn hợp lệ.

---

## Ai sử dụng trang này

- **Thành viên đội ngũ** nhận email vận hành từ ScaleFlow
- **Admin** giúp đồng nghiệp tắt thông báo sau khi nghỉ phép hoặc đổi role

Trang này khác với cài đặt thông báo trong ứng dụng ScaleFlow (biểu tượng chuông). Trang hủy đăng ký chỉ dành cho liên kết được gửi qua email.

---

## Mở trang

1. Mở email từ ScaleFlow.
2. Nhấp liên kết **notification preferences** hoặc **unsubscribe**.
3. Trình duyệt mở trang ScaleFlow có logo và hai công tắc chính.

Liên kết chứa **token** riêng tư. Không chia sẻ công khai.

> **Gợi ý ảnh:** Trang unsubscribe với logo ScaleFlow, tiêu đề và 2 toggle Allow notifications / Email.

---

## Chọn tùy chọn

| Công tắc | Tác dụng |
|--------|----------------|
| **Allow notifications** | Công tắc chính — tắt nghĩa là không có email thông báo |
| **Email** | Kênh email — chỉ hoạt động khi Allow notifications bật |

Các lựa chọn thường gặp:

- Giữ cả hai **on** — cảnh báo email bình thường
- Tắt **Email** nhưng giữ Allow on — hiếm; thường tắt cả hai
- Tắt **Allow notifications** — dừng cảnh báo email từ liên kết này

Nhấp **Save preferences** (hoặc **Save configuration**) khi hoàn tất.

> **Gợi ý ảnh:** Hai toggle và nút Save ở cuối form.

---

## Sau khi lưu

Bạn sẽ thấy màn hình thành công xác nhận tùy chọn đã được cập nhật.

Nếu cần nhận cảnh báo lại, hãy hỏi admin workspace — có thể cần email mời mới hoặc liên kết mới.

---

## Thông báo lỗi theo ngôn ngữ đơn giản

| Nội dung hiển thị | Ý nghĩa | Việc cần làm |
|--------------|---------------|------------|
| Invalid link | Token thiếu hoặc hết hạn | Yêu cầu email mới từ ScaleFlow hoặc hỏi admin |
| Link already used | Token đã được lưu một lần và không thể dùng lại | Dùng email mới nhất hoặc yêu cầu admin gửi lại |
| Could not save | Lỗi server hoặc mạng tạm thời | Thử lại sau vài phút |

---

## Mẹo cho admin

1. Nói cho nhân viên mới biết họ có thể giảm email mà không mất quyền truy cập Inbox.
2. Hủy đăng ký ảnh hưởng **email thông báo**, không ảnh hưởng khả năng đăng nhập và làm việc trong ScaleFlow.
3. Để kiểm soát chi tiết (chỉ một số loại event), dùng cài đặt thông báo trong ứng dụng khi có.

---

## Hướng dẫn liên quan

- [Quản lý User](../organization/user-management)
- [Sử dụng Profile](../organization/profile-usage)
- [Sử dụng Inbox](../operations/inbox-usage)
