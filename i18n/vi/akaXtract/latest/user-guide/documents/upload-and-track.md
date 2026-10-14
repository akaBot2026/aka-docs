---
id: upload-and-track
title: Tải tài liệu lên và theo dõi Job
sidebar_label: Tải lên và theo dõi
sidebar_position: 1
description: Tải tài liệu lên, xem tệp được hỗ trợ, theo dõi, thử lại hoặc hủy Job.
displayed_sidebar: akaXtractSidebar
---

# Tải tài liệu lên và theo dõi Job

## Tải tài liệu lên

**Trước khi bắt đầu:** Pipeline cần có phiên bản Published, và bạn cần quyền gửi tài liệu cùng đủ hạn mức.

1. Mở Pipeline và chọn `Documents` -> `Upload Document`.
2. Chọn `Document File` và chọn `Upload Document`. Tải lên từng tệp một. Một tệp có thể chứa nhiều tài liệu.

![Thẻ Documents của một Pipeline](/static/img/scale-xtract-documents-list.png)

![Hộp thoại Upload Document](/static/img/scale-xtract-upload-document.png)

**Kết quả:** tài liệu xuất hiện trong danh sách và việc xử lý bắt đầu. Thông báo tải lên không có nghĩa là trích xuất đã thành công.

Dùng tìm kiếm, trạng thái, khoảng ngày và `Filter` để tìm tài liệu. Xóa bộ lọc nếu bạn không thấy tài liệu mới.

<a id='files-and-limits'></a>

## Tệp được hỗ trợ và giới hạn

| Mục | Chi tiết |
| --- | --- |
| Loại tệp được xử lý | PDF, PNG, JPG/JPEG, TIFF, TXT, DOCX, XML, CSV |
| Excel (XLS, XLSX) | Chưa được xử lý. Hãy chuyển tệp sang PDF hoặc CSV trước khi tải lên |
| Kích thước tệp tối đa | 25 MB |
| Tên tệp | Tối đa 255 ký tự. Tệp không được rỗng |
| Nhiều tài liệu trong một tệp | Có hỗ trợ, kể cả nhiều loại tài liệu khác nhau |
| Mẫu cho `Create Auto` | PDF, PNG, JPG/JPEG hoặc XML, tối đa 25 MB |

:::note
Tệp được nhận vẫn có thể không xem trước hoặc không trích xuất được. Xem trước chủ yếu hoạt động với PDF, hình ảnh và XML. Không đổi đuôi tệp để vượt qua bước kiểm tra. Hãy chuẩn bị lại tệp bị mã hóa, hỏng hoặc quá lớn bằng công cụ mà tổ chức cho phép.
:::

## Theo dõi Job

Mở `Jobs` để xem mọi lượt xử lý. Tìm theo Job ID hoặc tên tài liệu, và lọc theo Pipeline, phiên bản hoặc trạng thái. Chọn `Refresh Jobs` để cập nhật danh sách.

![Danh sách Jobs](/static/img/scale-xtract-jobs-list.png)

![Bộ lọc trạng thái Job](/static/img/scale-xtract-jobs-status-filter.png)

| Trạng thái Job | Ý nghĩa và bước tiếp theo |
| --- | --- |
| `Uploading` | Đang nhận tệp. Hãy chờ |
| `Upload Failed` | Kiểm tra tệp và kết nối, rồi tải lại |
| `Processing`, `Running`, `Waiting for External Service` | Job đang chạy. Hãy chờ trước khi gửi lại |
| `Waiting for Review` | Người duyệt cần xác nhận kết quả. Tìm Document ở trạng thái `To Review` hoặc `Reviewing` |
| `Completed` | Lượt chạy đã kết thúc. Document hiển thị `Confirmed` hoặc `Rejected` |
| `Failed`, `Timed Out` | Đọc `Error Message`, khắc phục nguyên nhân rồi thử lại |
| `Cancelled` | Job đã bị hủy và không thể thử lại |

Trạng thái Document mô tả tài liệu và kết quả của nó. Trạng thái Job mô tả lượt chạy. Document có thể ở trạng thái `Uploading`, `Upload Failed`, `Processing`, `To Review`, `Reviewing`, `Confirmed`, `Rejected`, `Failed` hoặc `Cancelled`.

## Thử lại hoặc hủy Job

- **Thử lại** Job `Failed` hoặc `Timed Out`: khắc phục nguyên nhân, mở menu của dòng và chọn `Retry`. Job quay lại `Processing` và giữ phiên bản Pipeline. Nếu việc sửa cần cấu hình mới được công bố, hãy tải tài liệu lên lại dưới dạng Job mới.
- **Hủy** Job ở trạng thái `Uploading`, `Processing`, `Running` hoặc `Waiting for External Service`: chọn `Cancel`, nhập `Cancellation Reason` nếu cần và chọn `Cancel Job`.

:::note
Job ở trạng thái `Waiting for Review` không hủy được. Hãy quyết định kết quả trong Review. Job `Completed` không hủy được, và hủy Job không thu hồi yêu cầu đã gửi đến nhà cung cấp AI.
:::

Nếu một thao tác thất bại, hãy làm mới trạng thái trước vì Job có thể đã chuyển trạng thái.
