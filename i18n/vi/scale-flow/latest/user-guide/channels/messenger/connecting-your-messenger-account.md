---
id: connecting-your-messenger-account
title: Messenger
sidebar_label: Messenger
sidebar_position: 1
description: "Hướng dẫn từng bước để kết nối Facebook Messenger với ScaleFlow, giúp tin nhắn từ Page xuất hiện trong Inbox."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối tài khoản Messenger

**Messenger** (Facebook Messenger) cho phép khách hàng nhắn tin cho Facebook Page của bạn. Kết nối Messenger sẽ đưa các cuộc trò chuyện đó vào [Inbox](../../operations/inbox-usage) của ScaleFlow.

---

## Trước khi bắt đầu

- Quyền truy cập vào **Facebook Page** (hoặc tài khoản Meta Business) muốn kết nối.
- Quyền admin hoặc quyền đầy đủ cần thiết trên Page để cấp quyền cho ứng dụng bên thứ ba.
- Quyền quản lý **Channels** trong ScaleFlow.

---

## Bước 1: Mở trang kênh Messenger

1. Trong ScaleFlow, mở **Channels**.
2. Chọn **Messenger** từ danh sách kênh.
3. Xem lại **Channel setup** và **Connected accounts**.

![Mở Channels từ thanh điều hướng chính](/static/img/open-message.png)

---

## Bước 2: Bắt đầu kết nối

1. Nhấp **Connect**.
2. Cửa sổ đăng nhập Facebook / Meta sẽ mở.

---

## Bước 3: Đăng nhập và phê duyệt quyền truy cập

1. Đăng nhập bằng tài khoản Facebook quản lý Page doanh nghiệp của bạn.
2. Chọn đúng **Facebook Page** nếu được hỏi.
3. Xem lại các quyền ScaleFlow yêu cầu.
4. Nhấp **Continue** / **Allow** để phê duyệt.


![Mở Channels từ thanh điều hướng chính](/static/img/approve-facebook.png)

---

## Bước 4: Xác nhận trong ScaleFlow

1. Quay lại ScaleFlow (cửa sổ có thể tự động đóng).
2. Chờ xác nhận kết nối.
3. Xác nhận Page xuất hiện trong **Connected accounts** với trạng thái **active**.

Nếu quy trình mất quá nhiều thời gian, nhấp **Cancel** và thử **Connect** lại.

![Xác nhận trong ScaleFlow](/static/img/connect-message-success.png)
---

## Quản lý kết nối

| Thao tác | Khi nào dùng |
|--------|-------------|
| **Test** | Xác minh Messenger vẫn có thể truy cập |
| **Reconnect** | Cấp quyền lại sau khi token hết hạn hoặc Page thay đổi |
| **Delete** | Xóa Page khỏi ScaleFlow (tin nhắn Messenger mới sẽ dừng) |

---

## Xác nhận kết nối hoạt động

1. Nhấp **Test** trên tài khoản đã kết nối.
2. Gửi tin nhắn đến Facebook Page từ tài khoản Facebook hoặc Messenger cá nhân.
3. Mở [Inbox](../../operations/inbox-usage) và xác nhận tin nhắn xuất hiện với nhãn **Messenger**.

---

## Mẫu tin nhắn (cho Broadcasts)

Sau khi Page được kết nối, bạn có thể quản lý **Messenger message templates** dùng để gửi hàng loạt trong [Broadcasts](../../operations/broadcast-usage).

1. Mở **Channels → Messenger**.
2. Mở Page / thông tin chi tiết kênh đã kết nối.
3. Mở khu vực **Templates**.
4. Tìm kiếm hoặc lọc theo trạng thái (**Approved**, **Pending**, **Rejected**) và ngôn ngữ.
5. Tạo template mới, mở template để xem chi tiết hoặc xóa template không còn cần.

Chỉ các template **Approved** mới sẵn sàng để dùng khi bạn tạo nội dung broadcast Messenger.

> **Gợi ý ảnh:** Trang chi tiết Facebook/Messenger với bảng Templates (Status, Template name, Language, Category) và nút tạo template mới.

---

## Khắc phục sự cố

### Kết nối nhầm Facebook Page

- **Delete** kết nối rồi **Connect** lại, chọn đúng Page.

### Tin nhắn không xuất hiện trong Inbox

- Chạy **Reconnect** và hoàn tất cấp quyền Meta lại.
- Xác nhận Page đã được publish và Messenger đã được bật cho Page.
- Kiểm tra tính năng nhắn tin không bị hạn chế trong cài đặt Meta Business.

### Cửa sổ kết nối bị chặn

- Cho phép popup của ScaleFlow trong trình duyệt.
- Thử trình duyệt khác hoặc tắt các extension chặn popup OAuth.

---

## Đọc tiếp

- [Tích hợp kênh](../channel-integration) — tổng quan về tất cả kênh
- [Sử dụng Inbox](../../operations/inbox-usage) — trả lời khách hàng
- [AI Assistant](../../scaleflow-ai/ai-assistant) — bật Smart Assistant
