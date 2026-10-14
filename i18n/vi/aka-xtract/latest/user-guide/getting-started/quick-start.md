---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 1
description: Xử lý tài liệu đầu tiên bằng cách tạo Pipeline, công bố, tải tài liệu lên, duyệt kết quả và xuất dữ liệu.
displayed_sidebar: akaXtractSidebar
---

# Quick Start

Xử lý tài liệu đầu tiên của bạn trong khoảng 10 phút.

**Trước khi bắt đầu**
- Một tài khoản có thể quản lý và công bố Pipeline, như Owner, Administrator hoặc Supervisor.
- Một tài liệu mẫu: PDF, PNG, JPG/JPEG hoặc XML, tối đa 25 MB.
- Còn hạn mức.

## Bước 1: Đăng nhập

Mở địa chỉ ứng dụng do quản trị viên cung cấp, nhập `Username or email`, chọn `Sign In` và hoàn tất các bước xác thực.

![Trang đăng nhập AkaXtract](/static/img/scale-xtract-login.png)

**Kết quả:** tên công ty hiển thị ở đầu trang.

## Bước 2: Tạo Pipeline từ tài liệu mẫu

1. Mở `Pipelines` -> `Create Pipeline` -> `Create Auto`.
2. Nhập `Pipeline Name` và giữ mô hình tích hợp sẵn `AkaXtract AI`. Mô hình này không cần khóa API.
3. Tắt `Auto-Approve Results` để bạn duyệt kết quả đầu tiên.
4. Chọn `Sample Document` và chọn `Generate`. Việc này có thể mất vài phút.
5. Ở `Review Generated Configuration`, kiểm tra các prompt, schema và mapping, rồi chọn `Create Draft`.

![Menu Create Pipeline gồm Create Manual và Create Auto](/static/img/scale-xtract-create-pipeline-menu.png)

![Form Create Pipeline with AI](/static/img/scale-xtract-create-auto-form.png)

![Review Generated Configuration](/static/img/scale-xtract-create-auto-review.png)

**Kết quả:** Pipeline mở ra dưới dạng Draft v1.

## Bước 3: Kiểm thử và công bố

1. Chọn `More Pipeline Actions` -> `Test Pipeline`.
2. Chọn `Test Document` -> `Run Test`, rồi đối chiếu `Extraction Result` với tài liệu mẫu.
3. Trong Draft, chọn `Publish Version`.

![Menu thao tác của Draft với mục Test Pipeline](/static/img/scale-xtract-test-pipeline-menu.png)

![Trang Test Pipeline với Configuration is ready to test, Test Document và Run Test](/static/img/scale-xtract-test-pipeline-ready.png)

![Extraction Result với nút Run Another Test](/static/img/scale-xtract-test-pipeline-result.png)

![Thẻ Pipeline Setting của phiên bản Published](/static/img/scale-xtract-pipeline-setting-auto.png)

**Kết quả:** phiên bản 1 hiển thị `Published`.

## Bước 4: Tải tài liệu lên

Mở Pipeline, chọn `Documents` -> `Upload Document`, chọn tệp và chọn `Upload Document` lần nữa.

![Hộp thoại Upload Document](/static/img/scale-xtract-upload-document-xml.png)

**Kết quả:** tài liệu xuất hiện trong danh sách. Sau khi xử lý, trạng thái là `To Review`.

## Bước 5: Duyệt và xác nhận

1. Mở menu của tài liệu và chọn `Review`.
2. Kiểm tra cảnh báo ở đầu màn hình, đối chiếu các trường trích xuất với tài liệu gốc và sửa giá trị sai.
3. Chọn `Confirm`.

![Menu của dòng tài liệu với mục Review](/static/img/scale-xtract-document-row-menu.png)

![Màn hình Review với cảnh báo xử lý, Reject và Confirm](/static/img/scale-xtract-review-with-warning.png)

![Màn hình Review sau khi tài liệu được xác nhận](/static/img/scale-xtract-review-confirmed.png)

**Kết quả:** xuất hiện thông báo `Document confirmed successfully.` và trạng thái tài liệu là `Confirmed`.

## Bước 6: Xuất dữ liệu

Mở menu của tài liệu, chọn `Export...`, chọn định dạng và chọn `Export`.

![Danh sách Documents với tài liệu Confirmed](/static/img/scale-xtract-documents-confirmed.png)

![Hộp thoại Export Document](/static/img/scale-xtract-export-document.png)

**Kết quả:** trình duyệt tải về dữ liệu đã trích xuất.

## Bước tiếp theo

- [Tạo Pipeline](../pipelines/create-a-pipeline.md): tự cấu hình từng bước.
- [Webhook](../integrations/webhooks.md): gửi kết quả đã xác nhận sang hệ thống khác.
- [Khắc phục sự cố](../troubleshooting.md): xử lý Job lỗi hoặc thông báo lỗi.
