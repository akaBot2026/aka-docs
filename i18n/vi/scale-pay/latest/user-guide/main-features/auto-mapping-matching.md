---
id: auto-mapping-matching
title: Quản lý Matching Sets
sidebar_label: Quản lý Matching Sets
sidebar_position: 3
description: Xem xét các bộ tài liệu được ánh xạ tự động, theo dõi tiến trình đối soát tự động, điều chỉnh đối soát thủ công và phê duyệt hoặc từ chối kết quả đã đối chiếu.
displayed_sidebar: scalePaySidebar
---

# Quản lý Matching Sets

Hướng dẫn này chỉ cho bạn cách xem xét các bộ tài liệu đã ánh xạ, theo dõi việc đối soát tự động, điều chỉnh thủ công và hoàn tất kết quả đối soát trong Scale Pay.

## Mở Matching Sets

1. Trong thanh điều hướng, nhấp vào tab **Matching sets**
2. Bạn sẽ thấy danh sách các matching set được tạo từ những tài liệu đã tải lên.

![Danh sách matching set](/static/img/sp_matchingsets.png)

## Automap

Automap tuân theo các quy tắc ánh xạ được cấu hình trong [Pipeline Setting](./pipeline-setting.md) của bạn.

Khi các tài liệu có cùng mapping key, Scale Pay sẽ tự động nhóm chúng vào một matching set. Mỗi set hiển thị:

- **Matching key**: giá trị được tự động tạo dùng để nhóm tài liệu (ví dụ: số PO, số hóa đơn hoặc số tham chiếu).
- **File count**: số lượng tài liệu bên trong set.

![Danh sách matching set](/static/img/sp_listing_matchingset.png)

## Auto match

Auto match cũng tuân theo các quy tắc đối soát được cấu hình trong [Pipeline Setting](./pipeline-setting.md) của bạn.

Sau khi automap hoàn tất, Scale Pay bắt đầu so sánh các trường giữa những tài liệu trong từng set.

Khi hệ thống đang đối chiếu, trạng thái của matching set hiển thị **Matching**.

## Chi tiết matching set

Nhấp vào **matching key** để mở chế độ xem chi tiết matching set. Tại đây bạn có thể thấy:

- Tất cả tài liệu trong set.
- Các giá trị đã trích xuất cho từng trường.
- Tóm tắt kết quả đối soát
- Kết quả đối soát theo từng trường (khớp hoặc không khớp).

![Chi tiết matching set](/static/img/sp_matchingresult_summary.png)

![Chi tiết matching set](/static/img/sp_table.png)


## Ánh xạ thủ công và đối soát lại

Nếu một matching set đang chờ xem xét, bạn có thể thêm hoặc xóa tệp thủ công.

Để ánh xạ thủ công một tệp vào matching set hiện có:

1. Mở chế độ xem chi tiết matching set.
2. Nhấp vào **Add file** bên cạnh thanh tìm kiếm.
3. Chọn tài liệu bạn muốn thêm hoặc tải lên từ thiết bị của mình
4. Xác nhận để đưa tài liệu vào set hiện tại.
5. ScalePay sẽ tự động phân loại loại tài liệu và thêm vào matching set.
6. Kích hoạt rematch để xem kết quả đối soát mới nhất.

![Đối soát lại](/static/img/sp_rematch.png)

**Lưu ý**: Bạn chỉ có thể chọn các tài liệu (đã tồn tại trong hệ thống) có trạng thái READY.

Ánh xạ thủ công hữu ích khi:

- Một tệp không được tự động ánh xạ vì key bị thiếu hoặc không chính xác.
- Bạn cần kết hợp tài liệu từ các lô khác nhau.
- Bạn muốn điều chỉnh set trước khi chạy đối soát.

## Chỉnh sửa và đối soát lại

Đối với matching set có trạng thái **Pending Approval** hoặc **Mismatched**, bạn có thể chỉnh sửa dữ liệu đã trích xuất thủ công và kích hoạt rematch.

Để chỉnh sửa:

1. Mở chế độ xem chi tiết matching set.
2. Tìm tài liệu bạn muốn sửa.
3. Nhấp vào biểu tượng **pencil (edit)**.
4. Cập nhật giá trị.
5. Lưu thay đổi.

![Nút đối soát lại](/static/img/sp_edit_matchingset.png)

Sau khi lưu, nhấp vào **Rematch** để chạy lại công cụ đối soát với dữ liệu đã cập nhật.

![Đối soát lại](/static/img/sp_rematch.png)

Lưu ý:

- Bạn chỉ có thể chỉnh sửa khi trạng thái set cho phép thay đổi (pending_approval, mismatched).
- Nếu trạng thái bị khóa, hãy chờ quy trình hiện tại hoàn tất hoặc yêu cầu quản trị viên cấp quyền.

## Phê duyệt hoặc từ chối

Người dùng có quyền **Approve** hoặc **Reject** có thể hoàn tất kết quả đối soát.

Để phê duyệt hoặc từ chối một matching set:

1. Mở chế độ xem chi tiết matching set.
2. Xem xét cẩn thận các kết quả đối soát.
3. Nhấp vào **Approve** hoặc **Reject**.
4. Nhập lý do cho quyết định của bạn.

![Phê duyệt từ chối](/static/img/sp_approve_reject.png)
![Phê duyệt từ chối](/static/img/sp_reason.png)
Lưu ý:

- Sau khi được phê duyệt, kết quả đối soát trở thành kết quả cuối cùng và có thể được xuất hoặc gửi đến các hệ thống đầu ra.
- Nếu kết quả đối soát bị từ chối, trạng thái của kết quả sẽ là rejected và người dùng không thể thực hiện thao tác nào trên đó.
- Lý do bạn nhập được ghi lại trong nhật ký hoạt động để phục vụ kiểm toán.

## Việc cần làm tiếp theo

Sau khi các matching set được phê duyệt, bạn có thể xuất kết quả hoặc đẩy chúng đến các hệ thống đã kết nối thông qua bộ cấu hình outbound được thiết lập trong [Pipeline Setting](./pipeline-setting.md).

Nếu cần xem xét các quy tắc đối soát hoặc cập nhật cài đặt trích xuất, hãy quay lại [Pipeline Setting](./pipeline-setting.md).

## Các vấn đề thường gặp và cách khắc phục nhanh

### Một số tệp không được tự động ánh xạ

- Kiểm tra xem mapping key có tồn tại trong tất cả tài liệu hay không.
- Sử dụng ánh xạ thủ công để nhóm chúng vào set chính xác.

### Kết quả đối soát hiển thị Mismatched nhưng tôi nghĩ lẽ ra phải khớp

- Mở chế độ xem chi tiết matching set.
- Chỉnh sửa các giá trị đã trích xuất nếu chúng không chính xác.
- Nhấp vào **Rematch** để tính toán lại.

### Tôi không thấy các nút Approve hoặc Reject

- Vai trò của bạn có thể không có quyền bắt buộc.
- Yêu cầu quản trị viên cấp quyền Approve hoặc Reject trong [Roles & Permissions](../organization/roles-permission).

### Set bị mắc kẹt ở trạng thái Matching

- Chờ một lát nếu hệ thống vẫn đang xử lý.
- Nếu vẫn bị kẹt, kiểm tra xem tất cả tài liệu có trạng thái **Ready** hay không.
- Bạn cũng có thể thử đối soát lại thủ công.

