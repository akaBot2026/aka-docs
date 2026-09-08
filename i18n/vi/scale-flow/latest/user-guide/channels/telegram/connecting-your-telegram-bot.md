---
id: connecting-your-telegram-bot
title: Telegram
sidebar_label: Telegram
sidebar_position: 1
description: "Hướng dẫn từng bước để tạo Telegram bot bằng BotFather và kết nối bot với ScaleFlow."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối Telegram Bot

Telegram sử dụng một **bot** — tài khoản đặc biệt có thể nhận và gửi tin nhắn cho doanh nghiệp. ScaleFlow kết nối bằng **Bot Token** từ Telegram **@BotFather**.

Hãy xem Bot Token như mật khẩu. Nếu bị lộ, mở **@BotFather**, chọn bot của bạn và dùng **`/revoke`** để cấp token mới.

Sau khi kết nối, các cuộc trò chuyện của khách hàng với bot sẽ xuất hiện trong [Inbox](../../operations/inbox-usage).

---

## Trước khi bắt đầu

- Một tài khoản Telegram (ứng dụng điện thoại hoặc máy tính).
- Quyền quản lý **Channels** trong ScaleFlow.
- Khoảng **10 phút** để tạo bot và kết nối.

---

## Bước 1: Mở trang kênh Telegram trong ScaleFlow

1. Trong ScaleFlow, mở **Channels**.
2. Chọn **Telegram** từ danh sách kênh.
3. Trong **Channel setup**, đọc checklist rồi nhấp **Connect**.

Bạn sẽ xác nhận bot trong **Connected accounts** ở phía dưới — đây cũng là nơi có **Test**, **Reconnect** và **Delete**.

![Thiết lập kênh Telegram với Connect và Connected accounts](/static/img/connect_tele.png)

---

## Bước 2: Tìm BotFather chính thức trong Telegram

Tạo bot trong ứng dụng Telegram, không phải bên trong ScaleFlow.

1. Mở ứng dụng Telegram.
2. Tìm kiếm **`@BotFather`**.
3. Mở **BotFather** có **dấu kiểm màu xanh đã xác minh**. Bỏ qua các tài khoản không chính thức.

![Tìm @BotFather chính thức trong Telegram](/static/img/telegram-search-botfather.png)

---

## Bước 3: Tạo bot và sao chép Bot Token

1. Bắt đầu trò chuyện với **@BotFather**.
2. Gửi **`/newbot`** và trả lời các câu hỏi (tên hiển thị và username).
3. Username phải kết thúc bằng **`bot`** (ví dụ `MyShopSupport_bot`).
4. Khi tạo thành công, BotFather gửi **HTTP API token** của bạn (chuỗi dài có dấu hai chấm `:`). **Sao chép toàn bộ token** và giữ bí mật.

![Tin nhắn thành công của BotFather với Bot Token](/static/img/telegram-botfather-token.png)

---

## Bước 4: Dán token vào ScaleFlow và xác minh

Cửa sổ **Connect Telegram Bot** vẫn sẽ mở. Nếu đã đóng, nhấp **Connect** lại.

1. Dán token vào **Bot Token**.
2. Tùy chọn: dùng liên kết **How to get a token? @BotFather**.
3. Nhấp **Verify Token**.

![Connect Telegram Bot: nhập token và Verify Token](/static/img/telegram-modal-enter-token.png)

---

## Bước 5: Xác nhận tên bot và hoàn tất

Nếu token hợp lệ, bạn sẽ thấy thông báo màu xanh **Bot Found** và handle của bot (ví dụ `@YourBot_bot`).

1. Kiểm tra handle khớp với bot đã tạo.
2. Nhấp **Connect** để lưu.

![Xác nhận Bot Found trước khi Connect](/static/img/telegram-modal-bot-found.png)

---

## Bước 6: Xác nhận trong ScaleFlow

Trong **Channels → Telegram**, bot sẽ xuất hiện trong **Connected accounts** với trạng thái **active**.

![Telegram — Connected accounts sau khi kết nối thành công](/static/img/telegram-connected-accounts.png)

---

## Xác nhận kết nối hoạt động (khách hàng + Inbox)

Cùng một cuộc trò chuyện xuất hiện ở hai nơi: khách hàng trò chuyện với **bot** trong Telegram, còn đội ngũ làm việc từ **Inbox** của ScaleFlow (tin nhắn có nhãn **Telegram**).

1. Trên điện thoại, mở Telegram, bắt đầu trò chuyện với bot và gửi **`/start`** cùng một câu hỏi ngắn.
2. Trong ScaleFlow, mở [Inbox](../../operations/inbox-usage), chọn cuộc trò chuyện và xác nhận văn bản xuất hiện.
3. Trả lời từ ô **Reply** hoặc dùng **AI Smart Writing** khi đã bật.

![Khách hàng gửi tin nhắn cho bot trong ứng dụng Telegram](/static/img/telegram-test-chat-mobile.png)

![Cùng chuỗi trò chuyện trong ScaleFlow Inbox với nhãn Telegram](/static/img/telegram-test-chat-inbox.png)

---

## Quản lý kết nối

| Thao tác | Khi nào dùng |
|--------|-------------|
| **Test** | Xác minh bot có thể truy cập |
| **Reconnect** | Nhập token mới sau khi revoke hoặc thay đổi bot |
| **Delete** | Xóa bot khỏi ScaleFlow |

---

## Khắc phục sự cố

### Verify Token thất bại

- Sao chép **toàn bộ** token từ BotFather (không có khoảng trắng thừa).
- Tạo token mới bằng **`/revoke`** trong BotFather nếu không chắc.

### Tin nhắn không xuất hiện trong Inbox

- Nhấp **Test** trên tài khoản đã kết nối.
- Xác nhận khách hàng nhắn đúng handle `@YourBot_bot`.
- Thử **Reconnect** bằng token mới.

---

## Đọc tiếp

- [Tích hợp kênh](../channel-integration) — tổng quan về tất cả kênh
- [Sử dụng Inbox](../../operations/inbox-usage) — xử lý cuộc trò chuyện
- [AI Assistant](../../scaleflow-ai/ai-assistant) — bật trả lời tự động
