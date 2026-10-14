---
id: webhooks
title: Gửi kết quả bằng Webhook
sidebar_label: Webhook
sidebar_position: 1
description: Tự động gửi kết quả sang hệ thống khác và kiểm tra từng lần gửi.
displayed_sidebar: akaXtractSidebar
---

# Gửi kết quả bằng Webhook

Webhook gửi kết quả của từng tài liệu đã xử lý đến một URL mà bạn cung cấp.

**Trước khi bắt đầu:** bạn cần quyền quản lý Webhook, một Pipeline xử lý tài liệu thật và địa chỉ của bên nhận.

## Thiết lập Webhook

1. Mở Pipeline, chọn `Webhook` và bật `Enable Webhook`.
2. Nhập `Callback URL` và chọn `HTTP Method` mà bên nhận yêu cầu. Dùng địa chỉ hợp lệ mà chính sách mạng cho phép. Nên dùng HTTPS.
3. Tùy chọn: chọn `Add Header` để thêm header, ví dụ `x-api-key` để xác thực. Tên header không được trùng.
4. Tùy chọn: định dạng lại dữ liệu. `Body (Custom JSON)` phải là một đối tượng JSON hợp lệ. Dùng `Quick Insert` để thêm placeholder. `Result Mapping (TypeScript)` thay đổi kết quả trước khi gửi. Để trống để gửi kết quả gốc.
5. Chọn `Save Webhook`, rồi mở lại để kiểm tra giá trị đã lưu.

![Cấu hình Webhook với Enable Webhook, Callback URL, HTTP Method, Headers và Result Mapping](/static/img/scale-xtract-webhook-config-full.png)

![Quick Insert placeholder và Body (Custom JSON)](/static/img/scale-xtract-webhook-config-body.png)

**Kết quả:** cấu hình đã được lưu. Lưu không gửi thử.

Các placeholder gồm `$jobId`, `$fileId`, `$pipelineId`, `$pipelineVersion`, `$status`, `$result`, `$metadata`, `$errorCode`, `$errorMessage`, `$retryCount` và `$completedAt`.

## Khi nào Webhook được gửi

- Webhook gửi kết quả và các lỗi xử lý.
- Nếu Pipeline cần duyệt thủ công, kết quả được gửi sau khi người duyệt chọn `Confirm`. Kết quả bị từ chối không được gửi.
- `Test Pipeline` không gửi Webhook.

## Kiểm tra các lần gửi

Mở `Webhook History`, lọc theo Job ID, trạng thái hoặc method, rồi chọn `View` để xem yêu cầu, phản hồi, trạng thái HTTP và lỗi nếu có.

![Thẻ Webhook History với các lần gửi](/static/img/scale-xtract-webhook-history.png)

![Hộp thoại Webhook Call Details](/static/img/scale-xtract-webhook-call-details.png)

| Trạng thái | Ý nghĩa |
| --- | --- |
| `SUCCESS` | Bên nhận trả về trạng thái HTTP 2xx. Hãy kiểm tra bản ghi của bên nhận để xác nhận |
| `FAILED` | Một lần gửi bị lỗi |
| `EXHAUSTED` | Đã dùng hết các lần thử |

Nếu bên nhận trả về mã trạng thái khác 2xx, AkaXtract tự động thử lại tối đa 3 lần, mỗi lần cách nhau 1 phút. Hãy sửa địa chỉ hoặc xác thực, và thống nhất với đội tích hợp cách gửi lại và đối soát.

:::note
Một kết quả có thể được gửi nhiều lần, vì vậy hãy để bên nhận xử lý dữ liệu trùng. Không Retry một Job đã thành công chỉ để gửi lại Webhook.
:::
