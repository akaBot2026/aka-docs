---
id: channel-integration
title: Kênh
sidebar_label: Kênh
sidebar_position: 1
description: Tổng quan thân thiện với người mới bắt đầu về cách kết nối Zalo OA, LINE, WhatsApp, Messenger, Telegram và nhiều kênh khác với ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Tích hợp kênh

Kênh là nơi khách hàng nhắn tin cho doanh nghiệp của bạn — Zalo OA, Facebook Messenger, WhatsApp, LINE, Telegram và nhiều kênh khác.

Kết nối một kênh cho phép ScaleFlow tập hợp các tin nhắn đó vào một [Inbox](../operations/inbox-usage) dùng chung. Sau đó, nhân viên và [AI Assistant](../scaleflow-ai/ai-assistant) có thể cùng trả lời khách hàng từ một nơi.

---

## Những điều cần biết trước khi bắt đầu

- Bạn cần quyền truy cập vào tài khoản doanh nghiệp của kênh muốn kết nối.
- Bạn cần quyền trong ScaleFlow để quản lý kênh.
- Hãy kết nối các kênh trước khi bật hỗ trợ AI tự động.
- Sau khi kết nối, hãy gửi một tin nhắn thử để xác nhận tin nhắn xuất hiện trong Inbox.

---

## Các kênh được hỗ trợ và hướng dẫn thiết lập

Đây là các kênh hiện có thể kết nối trong ScaleFlow. Mỗi dòng liên kết đến một **hướng dẫn từng bước riêng**.

| Kênh | Hướng dẫn thiết lập |
|---------|-------------|
| **Zalo OA** | [Kết nối tài khoản Zalo OA](./zalo/connecting-your-zalo-oa-account) |
| **Zalo Me** | [Kết nối tài khoản Zalo Me](./zalo-me/connecting-your-zalo-me-account) |
| **Messenger (Facebook)** | [Kết nối tài khoản Messenger](./messenger/connecting-your-messenger-account) |
| **WhatsApp Business API** | [Kết nối tài khoản WhatsApp Business API](./whatsapp/connecting-your-whatsapp-business-api-account) |
| **LINE Business** | [Kết nối tài khoản LINE Business](./line/connecting-your-line-business-account) |
| **Telegram** | [Kết nối Telegram Bot](./telegram/connecting-your-telegram-bot) |
| **Instagram** | [Kết nối tài khoản Instagram](./instagram/connecting-your-instagram-account) |
| **Chat Widget** | [Thiết lập Chat Widget](./chat-widget/setting-up-chat-widget) |

Một số tên kênh khác có thể xuất hiện trong danh sách (ví dụ SMS, WeChat, Viber, TikTok) với trạng thái **Sắp ra mắt** và hiện chưa thể kết nối.

---

## Mở trang Channels

Hầu hết quy trình kết nối bắt đầu từ **Channels**. Mở **Channels** từ thanh điều hướng chính, sau đó chọn một kênh trong danh sách.

![Mở Channels từ thanh điều hướng chính](/static/img/open-channel.png)

Chọn kênh cần dùng và làm theo hướng dẫn tương ứng trong bảng trên.

---

## Quản lý tài khoản đã kết nối

Sau khi kết nối, mỗi tài khoản sẽ xuất hiện trong **Connected accounts** trên trang của kênh đó.

| Thao tác | Tác dụng |
|--------|----------------|
| **Test** | Kiểm tra kênh còn có thể truy cập hay không |
| **Reconnect** | Đăng nhập lại hoặc làm mới thông tin xác thực nếu kết nối ngừng hoạt động |
| **Delete** | Xóa kết nối (tin nhắn mới từ kênh đó sẽ không còn đến Inbox) |

Các thao tác này hoạt động giống nhau trên Zalo, Messenger, WhatsApp, LINE, Telegram và các kênh được hỗ trợ khác.

---

## Cách xác nhận kết nối hoạt động

1. Nhấp **Test** trên tài khoản vừa kết nối.
2. Gửi một tin nhắn thử thật từ kênh đó (ứng dụng điện thoại, Messenger, WhatsApp, v.v.).
3. Mở [Inbox](../operations/inbox-usage) và xác nhận tin nhắn đến với nhãn kênh chính xác.

Mẹo kiểm thử riêng cho từng kênh (ví dụ bot Telegram và ảnh chụp Inbox) có trong từng hướng dẫn riêng ở trên.

---

## Quy trình thực tế

1. Khách hàng gửi tin nhắn đến Zalo OA của bạn: "Bạn có bảo hành không?"
2. Tin nhắn xuất hiện trong [Inbox](../operations/inbox-usage).
3. [AI Assistant](../scaleflow-ai/ai-assistant) kiểm tra Knowledge về bảo hành và trả lời.
4. Nếu khách hàng cần xử lý sửa chữa, nhân viên tạo một [Ticket](../operations/ticket-usage).
5. Ticket được xử lý cho đến khi việc sửa chữa hoàn tất.

---

## Việc cần làm tiếp theo

Sau khi đã kết nối ít nhất một kênh:

1. Thêm câu trả lời về doanh nghiệp vào [Knowledge](../scaleflow-ai/knowledge-usage).
2. Xây dựng [AI Agent](../scaleflow-ai/ai-agent-usage) đầu tiên.
3. Bật [AI Assistant](../scaleflow-ai/ai-assistant) khi bạn sẵn sàng.

### Tất cả hướng dẫn thiết lập kênh

- [Zalo OA](./zalo/connecting-your-zalo-oa-account)
- [Zalo Me](./zalo-me/connecting-your-zalo-me-account)
- [Messenger](./messenger/connecting-your-messenger-account)
- [WhatsApp Business API](./whatsapp/connecting-your-whatsapp-business-api-account)
- [LINE Business](./line/connecting-your-line-business-account)
- [Telegram](./telegram/connecting-your-telegram-bot)
- [Instagram](./instagram/connecting-your-instagram-account)
- [Chat Widget](./chat-widget/setting-up-chat-widget)

### Mẫu tin nhắn (cho Broadcasts)

Các hướng dẫn về mẫu riêng cho từng kênh đã được gỡ bỏ. Hãy chuẩn bị mẫu trực tiếp trong nhà cung cấp của từng kênh trước khi chạy Broadcasts.

### Hướng dẫn liên quan

- [Sử dụng Inbox](../operations/inbox-usage) — xử lý tin nhắn sau khi các kênh được kết nối
- [Sử dụng Integration](../integrations/integration-usage) — kết nối HubSpot, Google Drive, Make và nhiều dịch vụ khác

---

## Khắc phục nhanh

### Tin nhắn không xuất hiện trong Inbox

1. Mở trang kênh và nhấp **Test**.
2. Thử **Reconnect** và hoàn tất cấp quyền lại.
3. Xác nhận tài khoản kênh vẫn đang hoạt động ở phía nhà cung cấp.
4. Xem phần khắc phục sự cố trong hướng dẫn riêng của kênh.

### Tôi không thấy menu Channels

- Yêu cầu admin cấp quyền quản lý kênh.

### Kết nối nhầm tài khoản

- Dùng **Delete**, sau đó làm lại hướng dẫn thiết lập từ bảng trên.
