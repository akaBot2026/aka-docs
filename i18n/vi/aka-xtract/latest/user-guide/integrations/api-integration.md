---
id: api-integration
title: Tích hợp API
sidebar_label: Tích hợp API
sidebar_position: 3
description: Tạo API key, gửi tài liệu đến AkaXtract và đọc kết quả từ hệ thống của bạn.
displayed_sidebar: akaXtractSidebar
---

# Tích hợp API

Dùng API để gửi tài liệu vào một Pipeline từ hệ thống của bạn và đọc dữ liệu đã trích xuất. Trang `API Integration` trong ứng dụng là tài liệu tham chiếu API. Trang này liệt kê từng endpoint kèm yêu cầu, phản hồi và ví dụ cURL có thể sao chép. Trang hướng dẫn này nói về API key và cách các lời gọi kết hợp với nhau.

## Tạo API key

Việc này cần quyền quản lý API key.

1. Mở `API Keys` và chọn `Create API Key`.
2. Nhập `Key Name` (tối đa 100 ký tự) và chọn `Active` hoặc `Deactive`. Khóa `Deactive` không gọi được dịch vụ.
3. Ở `Pipeline Scope`, chọn `Specific pipelines` và chọn các Pipeline mà khóa cần. `Full access`, được hộp thoại chọn sẵn, bao gồm mọi Pipeline trong công ty, vì vậy chỉ dùng khi thật cần thiết.
4. Tùy chọn: đặt `Expires At`. Để trống nếu khóa không hết hạn.
5. Chọn `Create API Key`. Trong `API Key Created`, sao chép khóa và lưu vào công cụ quản lý bí mật của tổ chức, rồi chọn `I Have Copied the Key`.

![Trang API Keys với bộ lọc trạng thái](/static/img/scale-xtract-api-keys-list.png)

![Hộp thoại Create API Key](/static/img/scale-xtract-create-api-key.png)

![Hộp thoại API Key Created (khóa đã được ẩn trong ảnh)](/static/img/scale-xtract-api-key-created.png)

:::warning
Khóa đầy đủ chỉ hiển thị một lần và không thể xem lại. Không gửi khóa đầy đủ trong yêu cầu hỗ trợ.
:::

Để thay đổi khóa, chọn `Edit`. Nếu khóa bị lộ hoặc không còn cần, chọn `Revoke`. Khóa đã thu hồi không khôi phục được, vì vậy hãy cấp khóa mới. Khóa quá hạn hiển thị `Expired`.

## Xác thực

Các yêu cầu gửi đến API của AkaXtract mang header `x-api-key: <khóa API của bạn>`. URL gốc là `https://api.xtract.akanext.com`.

## Gửi tài liệu và nhận kết quả

1. **Tạo URL tải lên có chữ ký sẵn (presigned URL)** bằng `POST /core/api/v1/jobs/presigned-url`. Phản hồi chứa chính sách tải lên (upload policy).
2. **Tải tệp lên** kho lưu trữ đám mây bằng một yêu cầu POST `multipart/form-data` đến `policy.url`. Gửi toàn bộ `policy.fields` của bước 1 và đặt trường `file` ở **cuối cùng**. Yêu cầu này gửi thẳng đến nhà cung cấp lưu trữ, không đi qua AkaXtract.
3. **Xác nhận tải lên** bằng **Confirm Upload and Start Processing**. Bước này tạo Job và bắt đầu xử lý.
4. **Theo dõi Job.** Dùng **Stream Job Status Events** (Server-Sent Events). Đây là cách được khuyến nghị. Cũng hỗ trợ cách gọi định kỳ (polling).
5. **Đọc kết quả** bằng **Get Job Processing Result**.

![Trang API Integration](/static/img/scale-xtract-api-integration.png)

![Tham chiếu Upload Binary File to Storage](/static/img/scale-xtract-api-upload-storage.png)

Mở `API Integration` trong ứng dụng để xem đường dẫn, yêu cầu và phản hồi của từng endpoint, và dùng `Copy Path` và `Copy cURL` để sao chép ví dụ.

Để xem cùng luồng này mà không cần viết mã, hãy tải một tài liệu lên ở thẻ `Documents` của Pipeline, rồi mở tài liệu và chọn `View JSON`.

Nếu Pipeline cần duyệt thủ công, Job chờ người duyệt. Kết quả đã xác nhận có sẵn sau `Confirm`.

## Giới hạn

- Kích thước tệp tối đa: 25 MB.
- Số trang mỗi tệp phụ thuộc mô hình.
- Một tệp có thể chứa nhiều tài liệu.

Để nhận kết quả mà không gọi API, hãy dùng [Webhook](./webhooks.md).
