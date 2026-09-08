---
id: connecting-your-zalo-oa-account
title: Zalo OA
sidebar_label: Zalo OA
sidebar_position: 1
description: "Hướng dẫn từng bước để kết nối Zalo Official Account với ScaleFlow, giúp tin nhắn khách hàng xuất hiện trong Inbox."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối tài khoản Zalo OA

**Zalo OA** (Zalo Official Account) là tài khoản doanh nghiệp trên Zalo, cho phép công ty nhận và gửi tin nhắn với khách hàng.

Dùng Zalo OA khi khách hàng thường liên hệ với bạn qua Zalo — ví dụ phòng khám, trường học, cửa hàng thương mại điện tử hoặc doanh nghiệp dịch vụ địa phương.

Sau khi kết nối, tin nhắn xuất hiện trong [Inbox](../../operations/inbox-usage). Nhân viên và [AI Assistant](../../scaleflow-ai/ai-assistant) có thể trả lời từ một workspace.

---

## Trước khi bắt đầu

- Bạn có thể đăng nhập tài khoản Zalo quản lý Zalo OA.
- Bạn biết Zalo OA nào doanh nghiệp muốn kết nối.
- Zalo OA đã sẵn sàng cho nhắn tin doanh nghiệp (một số quyền có thể yêu cầu OA đã xác minh hoặc nâng cấp).
- Bạn có quyền quản lý **Channels** trong ScaleFlow.

Nếu doanh nghiệp chưa có Zalo OA, xem [Tạo tài khoản Zalo OA](#create-a-zalo-oa-account) bên dưới.

---

## Bước 1: Mở trang kênh Zalo

1. Trong ScaleFlow, mở **Channels**.
2. Chọn **Zalo OA** từ danh sách kênh.
3. Kiểm tra khu vực **Connected accounts**.
4. Nếu chưa có tài khoản nào được kết nối, nhấp **Connect**.

![Nhấp Connect để bắt đầu kết nối Zalo OA](/static/img/zalo-connect-button.png)

---

## Bước 2: Đăng nhập Zalo

Sau khi nhấp **Connect**, Zalo mở cửa sổ đăng nhập.

1. Đăng nhập bằng tài khoản Zalo quản lý Zalo OA doanh nghiệp.
2. Nếu Zalo hiển thị mã QR, mở ứng dụng Zalo trên điện thoại và quét mã.
3. Tiếp tục cho đến khi Zalo hiển thị màn hình quyền.

![Màn hình mã QR đăng nhập Zalo](/static/img/zalo-login-qr.png)

> **Mẹo:** Nếu xuất hiện nhầm tài khoản Zalo, hãy đóng cửa sổ và đăng nhập lại bằng tài khoản chính xác.

---

## Bước 3: Chọn đúng Zalo OA và phê duyệt quyền truy cập

1. Kiểm tra cẩn thận tên Zalo OA đã chọn.
2. Đảm bảo đây là OA doanh nghiệp muốn dùng trong ScaleFlow.
3. Xem lại các quyền được yêu cầu.
4. Phê duyệt yêu cầu để tiếp tục.

![Màn hình phê duyệt quyền Zalo OA](/static/img/zalo-permission-approval.png)

Quyền này cho phép ScaleFlow nhận và quản lý cuộc trò chuyện của khách hàng từ Zalo OA đó. Không phê duyệt nếu OA đã chọn không phải tài khoản doanh nghiệp của bạn.

---

## Bước 4: Chờ thông báo thành công

1. Xác nhận thông báo cho biết Zalo Official Account đã được kết nối thành công.
2. Nhấp **Close** hoặc đóng cửa sổ.
3. Quay lại trang kênh ScaleFlow.

![Thông báo xác thực Zalo thành công](/static/img/zalo-auth-success.png)

---

## Bước 5: Xác nhận tài khoản trong ScaleFlow

Zalo OA đã kết nối sẽ xuất hiện trong **Connected accounts**.

Kết nối thành công khi:

- Thẻ Zalo OA xuất hiện.
- Trạng thái hiển thị **active**.
- Có các thao tác **Test**, **Reconnect** và **Delete**.

![Zalo OA đã kết nối thành công trong ScaleFlow](/static/img/zalo-connected-success.png)

---

## Tạo tài khoản Zalo OA

Nếu cần Official Account mới:

1. Truy cập website [Zalo Official Account](https://oa.zalo.me/).
2. Đăng nhập bằng tài khoản Zalo sẽ quản lý tài khoản doanh nghiệp.
3. Tạo Official Account mới.
4. Chọn loại tài khoản phù hợp với doanh nghiệp.
5. Điền tên doanh nghiệp, thông tin liên hệ và các thông tin bắt buộc.
6. Gửi để xem xét nếu Zalo yêu cầu xác minh.
7. Sau khi tài khoản sẵn sàng, quay lại ScaleFlow và kết nối.

Nếu không chắc ai sở hữu Zalo OA, hãy hỏi đội marketing, hỗ trợ hoặc admin trước khi kết nối.

---

## Quản lý kết nối

| Thao tác | Khi nào dùng |
|--------|-------------|
| **Test** | Kiểm tra ScaleFlow vẫn có thể truy cập Zalo OA này |
| **Reconnect** | Kết nối hết hạn hoặc ngừng hoạt động |
| **Delete** | Xóa OA khỏi ScaleFlow (tin nhắn mới sẽ không còn đến Inbox) |

---

## Xác nhận kết nối hoạt động

1. Nhấp **Test** trên tài khoản đã kết nối.
2. Gửi tin nhắn thật đến Zalo OA từ ứng dụng Zalo.
3. Mở [Inbox](../../operations/inbox-usage) và xác nhận tin nhắn xuất hiện.

---

## Khắc phục sự cố

### Kết nối nhầm Zalo OA

- **Delete** kết nối, sau đó **Connect** lại bằng thông tin đăng nhập Zalo chính xác.

### Tin nhắn không xuất hiện trong Inbox

- Chạy **Test** và **Reconnect**.
- Xác nhận OA vẫn đang hoạt động trên Zalo.
- Hỏi admin xem quyền kênh đã đúng chưa.

### Zalo OA và Zalo Me

- **Zalo OA** — Official Account doanh nghiệp (hướng dẫn này).
- **Zalo Me** — Zalo cá nhân qua đăng nhập QR. Xem [Kết nối Zalo Me](../zalo-me/connecting-your-zalo-me-account).

---

## Đọc tiếp

- [Tích hợp kênh](../channel-integration) — tổng quan về tất cả kênh
- [Sử dụng Inbox](../../operations/inbox-usage) — trả lời khách hàng
- [AI Assistant](../../scaleflow-ai/ai-assistant) — bật trả lời tự động
