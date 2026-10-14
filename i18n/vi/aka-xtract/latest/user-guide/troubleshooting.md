---
id: troubleshooting
title: Khắc phục sự cố
sidebar_label: Khắc phục sự cố
sidebar_position: 6
description: Tìm nguyên nhân của một lỗi hoặc sự cố và cách xử lý tiếp theo.
displayed_sidebar: akaXtractSidebar
---

# Khắc phục sự cố

Tìm sự cố của bạn theo thông báo trên màn hình hoặc theo những gì bạn thấy.

## Sự cố thường gặp nhất

| Bạn thấy | Cách xử lý |
| --- | --- |
| `Publish this Pipeline before uploading Documents.` | Hãy công bố một phiên bản trước. Chỉ lưu Draft là chưa đủ. Xem [Kiểm thử và công bố](./pipelines/test-and-publish.md) |
| Thiếu một loại tài liệu trong kết quả | `Document Type Key` không khớp chính xác với loại mà bước phân loại trả về. Xem [Tạo Pipeline](./pipelines/create-a-pipeline.md) |
| Tệp Excel không được xử lý | Chuyển sang PDF hoặc CSV. Xem [Tệp được hỗ trợ và giới hạn](./documents/upload-and-track.md#files-and-limits) |
| Không xuất được tài liệu | Chỉ xuất được tài liệu `Confirmed`. Mở Review và chọn `Confirm` |
| Chỉnh sửa trong Review bị mất | Chỉnh sửa chỉ được lưu khi bạn chọn `Confirm`. Xem [Review](./documents/review-and-export.md#review) |

## Đăng nhập và quyền truy cập

| Sự cố | Nguyên nhân có thể | Cách xử lý |
| --- | --- | --- |
| `Sign-in is not configured`, hoặc không đăng nhập được | Môi trường này chưa được thiết lập đăng nhập | Liên hệ hỗ trợ, kèm thời điểm và địa chỉ ứng dụng |
| Thiếu menu hoặc bị từ chối truy cập | Sai công ty, thiếu quyền hoặc đã bị gỡ khỏi công ty | Kiểm tra công ty, rồi nhờ quản trị viên kiểm tra vai trò của bạn |
| Đã thêm thành viên nhưng không có quyền truy cập | Vai trò chưa được lưu | Dùng lại `Assign Role`. Không tạo lại tài khoản |

## Pipeline

| Sự cố | Nguyên nhân có thể | Cách xử lý |
| --- | --- | --- |
| `Pipeline name ... already exists` | Tên đã được Pipeline khác dùng | Đổi tên, hoặc mở Pipeline hiện có |
| `Select an API Key for the selected AI Model to continue.` | Mô hình của nhà cung cấp khác chưa có khóa | Chọn khóa của nhà cung cấp đó trong Pipeline. Khóa ở trang `API Keys` không dùng được ở đây |
| Mô hình không khả dụng | Mô hình đã bị gỡ hoặc tắt | Chọn mô hình được phép, kiểm tra khóa và kiểm thử lại |
| Không tiếp tục được trong wizard | Thiếu tên hoặc mô hình, JSON sai, có classification prompt nhưng thiếu schema, thiếu hoặc trùng khóa mapping, ngưỡng hoặc thời gian lưu trữ sai | Sửa bước được báo. JSON phải là đối tượng hợp lệ, ngưỡng từ 0 đến 100, thời gian lưu trữ từ 1 đến 180 ngày |
| Pipeline đã có Draft | Mỗi Pipeline chỉ có một Draft | Mở Draft hiện có trong bộ chọn phiên bản |
| `Pipeline draft changed after preflight` | Cấu hình thay đổi sau lần kiểm tra | Lưu, kiểm tra lại và kiểm thử |

## Tài liệu, Review và Job

| Sự cố | Nguyên nhân có thể | Cách xử lý |
| --- | --- | --- |
| `File exceeds the configured size limit`, hoặc loại tệp không được hỗ trợ | Tệp quá lớn hoặc loại tệp không được xử lý | Dùng loại tệp được hỗ trợ và dưới 25 MB. Chuyển Excel sang PDF hoặc CSV |
| Tải lên thành công nhưng Job lỗi | Lỗi xử lý hoặc lỗi dịch vụ | Đọc `Error Message` trong `Jobs`, khắc phục và thử lại nếu trạng thái cho phép |
| Hạn mức đã vượt, hết hạn hoặc chưa cấu hình | Không còn hạn mức | Kiểm tra `Quota & Usage` và liên hệ quản trị viên |
| Độ tin cậy cao nhưng vẫn là `To Review` | Tự động duyệt tắt, có cảnh báo hoặc không có dữ liệu | Đọc cảnh báo và duyệt kết quả. Không hạ ngưỡng để bỏ qua bước duyệt |
| Không sửa hoặc lưu được trong Review | Người duyệt khác đã tiếp quản, hoặc phiên bị gián đoạn | Tải lại và trao đổi. Thay đổi chưa xác nhận sẽ không được lưu |
| Job `Completed` nhưng không xuất được | Document `Rejected` hoặc đã mở lại, hoặc bạn thiếu quyền | Kiểm tra trạng thái Document |
| Không Retry hoặc Cancel được | Trạng thái đã đổi, hoặc bạn thiếu quyền | Làm mới `Jobs`. Chỉ Retry Job `Failed` hoặc `Timed Out`. Job `Waiting for Review` không hủy được |
| Tài liệu biến mất | Bộ lọc, sai Pipeline hoặc công ty, đã xóa, hoặc hết thời gian lưu trữ | Xóa bộ lọc và kiểm tra công ty, Pipeline và thời gian lưu trữ |

## Tích hợp

| Sự cố | Nguyên nhân có thể | Cách xử lý |
| --- | --- | --- |
| Webhook hiển thị `FAILED` hoặc `EXHAUSTED` | URL, xác thực, mẫu dữ liệu hoặc bên nhận có vấn đề | Chọn `View` trong `Webhook History` và làm việc với đội bên nhận |
| ScaleConnect không mở | Trình duyệt chặn popup | Cho phép popup với ứng dụng và chọn lại `Connect Service` |
| Kết nối đã liên kết với Pipeline khác | Một kết nối chỉ liên kết với một Pipeline trong công ty | Kiểm tra liên kết hiện tại, và thống nhất cách ngắt hoặc chuyển có kiểm soát |
| API key không hoạt động | Khóa `Deactive`, hết hạn, bị thu hồi hoặc phạm vi là Pipeline khác | Kiểm tra trạng thái, thời hạn và phạm vi. Cấp khóa mới nếu khóa bị thu hồi hoặc mất |

## Liên hệ hỗ trợ

Gửi thời điểm xảy ra, công ty, Pipeline và phiên bản, Job ID, tên tệp, định dạng và kích thước, trạng thái, và thông báo đã xóa dữ liệu nhạy cảm. Không gửi API key, mật khẩu, token, giá trị header hoặc tài liệu thật, trừ khi dùng kênh đã được duyệt.
