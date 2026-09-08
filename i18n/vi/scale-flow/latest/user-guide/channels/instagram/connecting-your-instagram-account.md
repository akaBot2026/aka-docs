---
id: connecting-your-instagram-account
title: Instagram
sidebar_label: Instagram
sidebar_position: 1
description: Hướng dẫn từng bước để kết nối tin nhắn Instagram với ScaleFlow, giúp các cuộc trò chuyện của khách hàng xuất hiện trong Inbox.
displayed_sidebar: scaleFlowSidebar
---

# Kết nối tài khoản Instagram

**Instagram** cho phép khách hàng nhắn tin cho doanh nghiệp của bạn trên Instagram. Kết nối tài khoản sẽ đưa các cuộc trò chuyện đó vào [Inbox](../../operations/inbox-usage) của ScaleFlow, để đội ngũ (và AI) có thể trả lời cùng một nơi như Zalo hoặc Messenger.

Bạn không cần viết code. ScaleFlow mở cửa sổ đăng nhập Meta / Instagram, bạn phê duyệt quyền truy cập và tài khoản sẽ xuất hiện trong **Connected accounts**.

---

## Trước khi bắt đầu

- Quyền truy cập vào **tài khoản Instagram chuyên nghiệp** (hoặc thiết lập Meta Business) muốn kết nối
- Quyền quản lý tài khoản Instagram đó / Facebook Page được liên kết khi Meta yêu cầu
- Quyền quản lý **Channels** trong ScaleFlow

Dự kiến khoảng **10–20 phút** cho lần kết nối đầu tiên.

---

## Bước 1 — Mở trang kênh Instagram

1. Đăng nhập ScaleFlow.
2. Mở **Channels** trong menu bên trái.
3. Chọn **Instagram**.
4. Xem khu vực **Channel setup** và danh sách **Connected accounts**.

![Mở Instagram](/static/img/open-insta.png)

---

## Bước 2 — Nhấp Connect

1. Nhấp **Connect**.
2. Chờ ScaleFlow hiển thị trạng thái như **Redirecting…**, **Connecting…** hoặc **Waiting for authorization…**.
3. Nếu đổi ý, nhấp **Cancel**.

Cửa sổ Meta / Instagram sẽ mở để bạn đăng nhập và phê duyệt.


---

## Bước 3 — Đăng nhập và phê duyệt

1. Đăng nhập bằng tài khoản Meta / Facebook quản lý hoạt động Instagram của doanh nghiệp.
2. Chọn đúng tài khoản Instagram (và Page liên quan nếu được hỏi).
3. Xem lại các quyền ScaleFlow yêu cầu.
4. Nhấp **Continue** / **Allow** để hoàn tất.

Khi thành công, ScaleFlow hiển thị thông báo thành công và tài khoản xuất hiện trong **Connected accounts**.

![Đăng nhập](/static/img/connect-insta-3.png)

---

## Bước 4 — Kiểm tra kết nối

1. Trên dòng Instagram trong **Connected accounts**, nhấp **Test**.
2. Chờ **Testing…** hoàn tất.
3. Gửi một tin nhắn Direct Message thử thật đến Instagram doanh nghiệp từ một tài khoản cá nhân khác.
4. Mở [Inbox](../../operations/inbox-usage) và xác nhận tin nhắn đến với nhãn Instagram.

![Kiểm tra kết nối](/static/img/connect-insta-success.png)
---

## Quản lý tài khoản Instagram đã kết nối

| Thao tác | Khi nào dùng |
|--------|----------------|
| **Test** | Kiểm tra ScaleFlow còn truy cập được Instagram hay không |
| **Reconnect** | Đăng nhập lại nếu tin nhắn ngừng đến |
| Rename (nếu có) | Đặt tên nội bộ rõ ràng cho kết nối |
| **Delete** | Xóa kết nối (tin nhắn Instagram mới sẽ không còn đến Inbox) |

Mẹo khi danh sách trống: nếu thấy **No connected accounts here**, nhấp **Connect** để thêm tài khoản đầu tiên.

---

## Sau khi kết nối Instagram

1. Thêm FAQ vào [Knowledge](../../scaleflow-ai/knowledge-usage) để AI có thể trả lời các câu hỏi phổ biến về sản phẩm.
2. Bật [AI Assistant](../../scaleflow-ai/ai-assistant) khi bạn sẵn sàng nhận hỗ trợ trong Inbox.
3. (Tùy chọn) Trong [Chat Widget](../chat-widget/setting-up-chat-widget), bạn có thể hiển thị Instagram như một nút liên hệ bổ sung nếu Instagram đã được kết nối.

---

## Khắc phục sự cố

### Cửa sổ kết nối không mở

- Cho phép cửa sổ bật lên của ScaleFlow trong trình duyệt, sau đó thử **Connect** lại.

### Kết nối nhầm tài khoản Instagram

- Dùng **Delete**, sau đó **Connect** lại và cẩn thận chọn đúng tài khoản.

### Tin nhắn không xuất hiện trong Inbox

1. Nhấp **Test**, sau đó **Reconnect** nếu kiểm tra thất bại.
2. Xác nhận tính năng nhắn tin Instagram đã được bật cho tài khoản chuyên nghiệp ở phía Meta.
3. Gửi DM thử khác và làm mới Inbox.

### Tôi không thấy Channels hoặc Connect

- Yêu cầu admin cấp quyền quản lý kênh.

---

## Hướng dẫn liên quan

- [Tích hợp kênh](../channel-integration)
- [Messenger](../messenger/connecting-your-messenger-account) — thường được quản lý trong cùng hệ sinh thái Meta Business
- [Inbox](../../operations/inbox-usage)
- [Chat Widget](../chat-widget/setting-up-chat-widget)
