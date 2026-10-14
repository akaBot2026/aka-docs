---
id: test-and-publish
title: Kiểm thử và công bố Pipeline
sidebar_label: Kiểm thử và công bố
sidebar_position: 2
description: Kiểm thử Pipeline, công bố phiên bản, cập nhật, sao chép, xuất và nhập Pipeline.
displayed_sidebar: akaXtractSidebar
---

# Kiểm thử và công bố Pipeline

Pipeline mới là một Draft. Draft chưa nhận tài liệu cho đến khi bạn kiểm thử và công bố.

## Kiểm thử

1. Mở Draft và chọn `More Pipeline Actions` -> `Test Pipeline`. Chờ thông báo `Configuration is ready to test.`
2. Chọn `Test Document`, chọn một tệp mẫu, rồi chọn `Run Test`. `Test Status` chuyển từ `PROCESSING` sang `COMPLETED`.
3. Đối chiếu `Extraction Result` với tài liệu gốc. Dùng `Run Another Test` để lặp lại.

![Menu thao tác của Draft với mục Test Pipeline](/static/img/scale-xtract-test-pipeline-menu.png)

![Trang Test Pipeline với Configuration is ready to test, Test Document và Run Test](/static/img/scale-xtract-test-pipeline-ready.png)

![Test Status hiển thị PROCESSING](/static/img/scale-xtract-test-pipeline-processing.png)

![Extraction Result với nút Run Another Test](/static/img/scale-xtract-test-pipeline-result.png)

**Kết quả:** bạn thấy dữ liệu đã trích xuất, hoặc một lỗi cần sửa trong Draft.

Kiểm thử không gửi Webhook. Dữ liệu kiểm thử được giữ 7 ngày.

## Công bố

Trong Draft, chọn `Publish Version`.

![Thẻ Pipeline Setting của phiên bản Published](/static/img/scale-xtract-pipeline-setting.png)

**Kết quả:** phiên bản hiển thị `Published`. Phiên bản này chỉ đọc và nhận tài liệu.

## Cập nhật Pipeline đã công bố

1. Chọn phiên bản Published và chọn `Create Draft`.
2. Chỉnh sửa Draft, rồi kiểm thử và công bố.

Để xem cấu hình của một phiên bản đã công bố, chọn `View Details` ở một mục trong `Pipeline Setting`.

![Màn xem Pipeline Details với model, thời gian lưu trữ và cảnh báo vòng đời dữ liệu](/static/img/scale-xtract-pipeline-details-view.png)

![Màn xem Approval Rules của phiên bản đã công bố](/static/img/scale-xtract-approval-rules-view.png)

Mỗi Pipeline chỉ có một Draft, vì vậy hãy mở Draft hiện có nếu đã có. Job mới dùng phiên bản đang được công bố tại thời điểm gửi tài liệu. Job đã có giữ phiên bản của nó và không được xử lý lại.

## Sao chép, xuất và nhập

Nút `...` cạnh `Create Draft` mở menu gồm `Copy Pipeline ID`, `Clone Pipeline`, `Data Retention` và `Delete Pipeline`. `Copy Pipeline ID` sao chép ID của Pipeline. Trong Draft, menu có `Test Pipeline` thay cho `Clone Pipeline`.

![Menu thao tác của Pipeline](/static/img/scale-xtract-pipeline-actions-menu.png)

![Thông báo đã sao chép Pipeline ID](/static/img/scale-xtract-pipeline-id-copied.png)

| Thao tác | Cách thực hiện | Kết quả |
| --- | --- | --- |
| Sao chép | `Clone Pipeline`, rồi nhập tên mới | Một Draft v1 mới từ phiên bản Published hiện tại |
| Xuất | `Export v…` | Cấu hình đã lưu dạng JSON, không kèm tài liệu hay kết quả |
| Nhập | Ở trang `Pipelines`, chọn `Import Pipeline...` và chọn một tệp JSON do AkaXtract xuất (tối đa 5 MB) | Một Draft v1 mới |

![Hộp thoại Clone Pipeline](/static/img/scale-xtract-clone-pipeline.png)

Sau khi sao chép hoặc nhập, hãy chọn lại mô hình hoặc khóa không tồn tại ở công ty đích, rồi kiểm thử và công bố.

:::note
Kiểm thử không chứng minh rằng bên nhận Webhook hoặc nguồn ScaleConnect hoạt động. Hãy kiểm tra trong phần [Tích hợp](../integrations/webhooks.md).
:::
