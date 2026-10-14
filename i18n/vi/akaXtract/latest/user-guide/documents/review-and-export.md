---
id: review-and-export
title: Duyệt và xuất kết quả
sidebar_label: Duyệt và xuất
sidebar_position: 2
description: Duyệt dữ liệu trích xuất, xác nhận hoặc từ chối, và xuất kết quả đã xác nhận.
displayed_sidebar: akaXtractSidebar
---

# Duyệt và xuất kết quả

<a id='review'></a>

## Duyệt tài liệu

**Trước khi bắt đầu:** bạn cần quyền duyệt và một tài liệu ở trạng thái `To Review`. Nếu người khác đang duyệt, bạn chỉ xem được.

1. Trong `Documents`, mở menu của tài liệu và chọn `Review`.

   ![Menu của dòng tài liệu với mục Review](/static/img/scale-xtract-document-row-menu.png)

2. Đối chiếu các trường trích xuất ở bên trái với tài liệu gốc ở bên phải. Kiểm tra cảnh báo ở đầu màn hình và `Confidence` tổng thể. Một cảnh báo, ví dụ kết quả của mô hình không khớp schema, nghĩa là tài liệu cần được duyệt.

   ![Màn hình Review với cảnh báo xử lý, Reject và Confirm](/static/img/scale-xtract-review-with-warning.png)

3. Sửa giá trị sai hoặc thiếu. Với trường dạng bảng, sửa ô và thêm hoặc xóa dòng.
4. Chọn `Confirm` để lưu các chỉnh sửa.

**Kết quả:** xuất hiện thông báo `Document confirmed successfully.` Document là `Confirmed` và Job là `Completed`.

![Màn hình Review sau khi tài liệu được xác nhận, có Reopen for Review](/static/img/scale-xtract-review-confirmed.png)

| Thao tác | Kết quả |
| --- | --- |
| `Confirm` | Lưu các chỉnh sửa. Document `Confirmed`, Job `Completed` |
| `Reject` | Document `Rejected`, Job `Completed`. Kết quả bị từ chối không xuất được, và các chỉnh sửa của bạn không được gửi đi |
| `Reopen for Review` | Dùng cho tài liệu `Confirmed` hoặc `Rejected`. Tài liệu quay lại trạng thái duyệt và Job chuyển thành `Waiting for Review`. Kết quả đã xác nhận trước đó bị xóa cho đến khi bạn xác nhận lại |

![Màn hình Review: trường dữ liệu bên trái, tài liệu gốc bên phải](/static/img/scale-xtract-review-document.png)

Các công cụ khác trên màn hình này: `View JSON` mở hộp `Extracted data (JSON)` với nút `Copy JSON`, và `Download` tải về tệp nguồn, không phải dữ liệu trích xuất. Với XML, dùng `Visual View` hoặc `Raw XML`.

![Hộp thoại Extracted data (JSON)](/static/img/scale-xtract-view-json.png)

:::warning
Chọn `Confirm` trước khi rời màn hình. Rời màn hình sẽ nhả quyền chỉnh sửa, và thay đổi chưa xác nhận không được lưu. Nếu bạn không hoạt động khoảng 2 phút, người duyệt khác có thể tiếp quản.
:::

:::note
Mở lại một kết quả không thu hồi dữ liệu đã được tải xuống hoặc đã gửi đi. Hãy thông báo cho bên nhận và đối soát riêng.
:::

<a id='export'></a>

## Xuất tài liệu

1. Trong `Documents`, tìm dòng `Confirmed`, mở menu và chọn `Export...`.

   ![Danh sách Documents với tài liệu Confirmed](/static/img/scale-xtract-documents-confirmed.png)

2. Chọn `Export Format`: XML, CSV, XLSX hoặc JSON, rồi chọn `Export`.

![Hộp thoại Export Document](/static/img/scale-xtract-export-document.png)

**Kết quả:** trình duyệt tải về dữ liệu đã trích xuất, không phải tài liệu nguồn, dưới dạng các bản ghi trường, giá trị, độ tin cậy và nguồn. Tệp CSV có các cột `Field`, `Value`, `Confidence` và `Source`.

Chỉ xuất được tài liệu `Confirmed`, và chỉ khi kết quả cuối vẫn còn.
