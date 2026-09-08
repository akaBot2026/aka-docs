---
id: document-upload
title: Nhập tài liệu
sidebar_label: Nhập tài liệu
sidebar_position: 2
description: Tải đơn đặt hàng, phiếu nhập hàng và hóa đơn lên Scale Pay để AI trích xuất và đối soát.
displayed_sidebar: scalePaySidebar
---

# Nhập tài liệu

Hướng dẫn này chỉ cho bạn cách tải lên, xem xét và chỉnh sửa tài liệu (đơn đặt hàng (PO), phiếu nhập hàng (GR) và hóa đơn) trong Scale Pay. Tải tài liệu lên theo đúng thứ tự để Scale Pay có thể ánh xạ và đối soát chúng chính xác. Sau khi trích xuất, bạn có thể xem xét dữ liệu đã trích xuất, sửa lỗi và theo dõi trạng thái tài liệu cho đến khi hoàn tất đối soát.

Hướng dẫn này chỉ cho bạn cách tải tài liệu vào Scale Pay và cách quản lý chúng sau đó.

## Thứ tự tải lên

Scale Pay xử lý tài liệu theo trình tự sau:

1. **Purchase Order (PO)** — đơn đặt hàng ban đầu từ nhà cung cấp.
2. **Good Receipt (GR)** — bằng chứng hàng hóa hoặc dịch vụ đã được nhận.
3. **Invoice** — hóa đơn từ nhà cung cấp.

Bạn phải tải PO và GR lên, sau đó chờ đến khi trạng thái của chúng chuyển thành **Ready** trước khi tải hóa đơn tương ứng lên.

## Nhập tài liệu

1. Trong thanh điều hướng, bạn sẽ thấy ba tab:
   - **Purchase Order**
   - **Good Receipt**
   - **Invoice**

## Bước 1: Tải Purchase Order lên

1. Chọn tab **Purchase Order**.
2. Nhấp vào **Upload** hoặc kéo thả tệp vào khu vực tải lên.
3. Bạn có thể tải nhiều tệp cùng lúc.
4. Định dạng tệp được hỗ trợ: **image**, **PDF**, **CSV**.

Sau khi tải lên, Scale Pay tự động chạy quá trình trích xuất bằng AI trên từng tệp.

![Tải tài liệu lên](/static/img/sp_upload_po.png)

## Bước 2: Tải Good Receipt lên

1. Chọn tab **Good Receipt**.
2. Tải các tệp GR lên theo cách tương tự.
3. Chờ đến khi trạng thái của cả PO và GR chuyển thành **Ready**.

Chỉ khi PO và GR ở trạng thái **Ready**, bạn mới có thể tiếp tục tải hóa đơn lên để đối soát.

![Tải tài liệu lên](/static/img/sp_uploadgr.png)

## Bước 3: Tải Invoice lên

1. Chọn tab **Invoice**.
2. Tải các tệp hóa đơn lên.
3. Scale Pay sẽ tự động trích xuất dữ liệu và cố gắng đối soát với PO và GR tương ứng.

![Tải tài liệu lên](/static/img/sp_uploadinv.png)

## Bước 4: Xem xét dữ liệu đã trích xuất

Sau khi hoàn tất trích xuất, nhấp vào **file ID** để mở chế độ xem chi tiết.

![Chi tiết tài liệu](/static/img/sp_details.png)

Chế độ xem chi tiết hiển thị hai bảng:

- **Left panel**: tài liệu gốc đã tải lên.
- **Right panel**: thông tin được AI trích xuất.

![Chi tiết tài liệu](/static/img/sp_detail.png)

## Trạng thái tài liệu

Mỗi tài liệu đã tải lên đều có một trạng thái. Di chuột qua thẻ trạng thái để xem chi tiết.

| Trạng thái | Ý nghĩa |
|---|---|
| **Ready** | Trích xuất thành công và tài liệu đang chờ ánh xạ và đối soát. Scale Pay sẽ chỉ tiếp tục với automap và auto match khi trạng thái là Ready. |
| **Unqualified** | Tệp được đánh dấu là không đạt điều kiện. Di chuột qua thẻ trạng thái để xem lý do. |
| **Duplicate** | Một tệp có cùng mã định danh đã tồn tại trong hệ thống. |
| **Mismatched** | Không thể đối soát tài liệu với bất kỳ PO hoặc GR nào. |
| **Pending Approval** | Tài liệu đã được đối soát nhưng đang chờ phê duyệt thủ công. |

## Chỉnh sửa dữ liệu đã trích xuất thủ công

Với các trạng thái sau, bạn có thể chỉnh sửa thủ công kết quả đã trích xuất:

- **Unqualified**
- **Ready**
- **Mismatched**
- **Pending Approval**

Để chỉnh sửa:

1. Kích hoạt chế độ xem tài liệu chi tiết bằng cách nhấp vào file ID.
2. Nhấp vào biểu tượng **pencil (edit)**.
3. Cập nhật các trường đã trích xuất trong bảng bên phải.
4. Lưu thay đổi.

![Chỉnh sửa dữ liệu đã trích xuất](/static/img/sp_edit_inv.png)

## Việc cần làm tiếp theo

Sau khi tất cả tài liệu được tải lên và có trạng thái **Ready**, Scale Pay sẽ tự động ánh xạ và đối soát chúng.

Đi tới [Quản lý matching set](./auto-mapping-matching.md) để xem xét các kết quả đã đối soát, xử lý ngoại lệ và xuất dữ liệu.

## Các vấn đề thường gặp và cách khắc phục nhanh

### Tôi chưa thể tải hóa đơn lên

- Kiểm tra xem trạng thái của PO và GR tương ứng có phải là **Ready** hay không.
- Nếu một trong hai tài liệu vẫn đang được xử lý hoặc không đạt điều kiện, hãy chờ hoặc khắc phục vấn đề trước.

### Tệp của tôi được đánh dấu là Duplicate

- Một tệp có cùng key đã tồn tại.
- Kiểm tra xem tệp đã được tải lên trước đó chưa, hoặc đổi tên và tải lại nếu đây là một tài liệu khác.

### Tôi không thấy biểu tượng chỉnh sửa

- Biểu tượng chỉnh sửa chỉ khả dụng với các trạng thái: Unqualified, Ready, Mismatched và Pending Approval.
- Nếu trạng thái là Processing hoặc một trạng thái bị khóa khác, hãy chờ đến khi hoàn tất trích xuất.

