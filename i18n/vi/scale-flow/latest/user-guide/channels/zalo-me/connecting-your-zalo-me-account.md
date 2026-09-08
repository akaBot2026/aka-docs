---
id: connecting-your-zalo-me-account
title: Zalo Me
sidebar_label: Zalo Me
sidebar_position: 1
description: "Hướng dẫn từng bước để kết nối tài khoản Zalo cá nhân với ScaleFlow bằng đăng nhập QR."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối tài khoản Zalo Me

**Zalo Me** kết nối **tài khoản Zalo cá nhân** (không phải Official Account) với ScaleFlow bằng **đăng nhập QR**.

Dùng Zalo Me khi bạn cần một listener Zalo cá nhân cho các cuộc trò chuyện trực tiếp. Với hoạt động nhắn tin hướng đến doanh nghiệp ở quy mô lớn, hãy ưu tiên [Zalo OA](../zalo/connecting-your-zalo-oa-account).

Sau khi kết nối, tin nhắn xuất hiện trong [Inbox](../../operations/inbox-usage).

---

## Trước khi bắt đầu

- Một tài khoản Zalo cá nhân trên điện thoại đã cài ứng dụng Zalo.
- Quyền quản lý **Channels** trong ScaleFlow.
- Ứng dụng Zalo sẵn sàng để quét mã QR.

---

## Bước 1: Mở trang kênh Zalo Me

1. Trong ScaleFlow, mở **Channels**.
2. Chọn **Zalo Me** từ danh sách kênh.
3. Nhấp **Connect**.

![Mở Channels từ thanh điều hướng chính](/static/img/open-channel.png)

> **Gợi ý ảnh:** Trang **Channels → Zalo Me** với nút **Connect**.

---

## Bước 2: Quét mã QR

1. ScaleFlow hiển thị mã QR.
2. Mở **ứng dụng Zalo** trên điện thoại.
3. Quét mã QR.
4. Phê duyệt kết nối trên thiết bị khi được yêu cầu.

![Mở kết nối Zalo](/static/img/connect-zalo-oa-1.png)

![Mở kết nối Zalo](/static/img/connect-zalo-oa-2.png)

![Mở kết nối Zalo](/static/img/connect-zalo-oa-3.png)
---

## Bước 3: Xác nhận trong ScaleFlow

1. Quay lại trang kênh Zalo Me.
2. Xác nhận tài khoản xuất hiện trong **Connected accounts**.
3. Trạng thái phải hiển thị **active**.

Kết nối thành công khi thẻ tài khoản có **Test**, **Reconnect** và **Delete**.

![Mở kết nối Zalo](/static/img/connect-zalo-oa-success.png)
---

## Quản lý kết nối

| Thao tác | Khi nào dùng |
|--------|-------------|
| **Test** | Xác minh ScaleFlow vẫn có thể truy cập tài khoản Zalo Me này |
| **Reconnect** | Quét mã QR mới nếu phiên đã hết hạn |
| **Delete** | Xóa tài khoản khỏi ScaleFlow |

---

## Xác nhận kết nối hoạt động

1. Nhấp **Test** trên tài khoản đã kết nối.
2. Gửi tin nhắn đến tài khoản Zalo đã kết nối từ một người dùng Zalo khác.
3. Mở [Inbox](../../operations/inbox-usage) và xác nhận tin nhắn xuất hiện.

---

## Khắc phục sự cố

### Mã QR hết hạn

- Nhấp **Connect** hoặc **Reconnect** để tạo mã QR mới và quét lại.

### Kết nối nhầm tài khoản cá nhân

- **Delete** kết nối rồi kết nối lại bằng thông tin đăng nhập điện thoại / Zalo chính xác.

### Khi nào nên dùng Zalo OA

- Nhiều nhân viên cần xử lý cùng một inbox doanh nghiệp.
- Bạn cần sự hiện diện thương hiệu Official Account.
- Xem [Kết nối Zalo OA](../zalo/connecting-your-zalo-oa-account).

---

## Đọc tiếp

- [Tích hợp kênh](../channel-integration) — tổng quan về tất cả kênh
- [Kết nối Zalo OA](../zalo/connecting-your-zalo-oa-account) — Official Account doanh nghiệp
- [Sử dụng Inbox](../../operations/inbox-usage) — xử lý cuộc trò chuyện
