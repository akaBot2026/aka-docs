---
title: "Lập chi phí từ hóa đơn có sẵn"
description: "Người dùng có hóa đơn (XML, PDF, ảnh) hoặc hóa đơn đã có trong Quản lý hóa đơn và muốn mỗi hóa đơn thành một dòng chi phí đã điền sẵn."
id: add-invoice-expense
sidebar_label: Lập chi phí từ hóa đơn có sẵn
sidebar_position: 3
---

# Lập chi phí từ hóa đơn có sẵn

Người dùng có hóa đơn (XML, PDF, ảnh) hoặc hóa đơn đã có trong Quản lý hóa đơn và muốn mỗi hóa đơn thành một dòng chi phí đã điền sẵn.

**Khi nào sử dụng:**

- Người dùng có tệp hóa đơn điện tử và không muốn nhập tay.
- Người dùng đang soạn đề nghị và muốn lấy hóa đơn đã đọc sẵn trong Quản lý hóa đơn.
- Người dùng muốn đọc hóa đơn thành một dòng chi phí.


Mỗi hóa đơn (tải lên hoặc chọn từ Quản lý hóa đơn) trở thành một dòng chi phí trong đề nghị đang soạn.


## Các cách thực hiện

- [Thêm chi phí từ hóa đơn](how-to/add-invoice-expense.md) — Ở bước Bảng kê chi phí, chọn Thêm từ hóa đơn, tải hóa đơn lên hoặc chọn từ danh sách Quản lý hóa đơn; mỗi hóa đơn thành một dòng chi phí.

## Được dùng trong các hướng dẫn

- [Tải hóa đơn đầu vào lên Quản lý hóa đơn](../invoices/upload.md) — Người dùng muốn đưa tệp hóa đơn (XML, PDF, ảnh, zip) vào kho Quản lý hóa đơn để hệ thống tự đọc và kiểm tra, trước khi lập đề nghị.

## Trước khi bắt đầu

- **[Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md)** — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng\
  Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".
- **[Giới hạn khi tải chứng từ](../../reference/extraction/file-limits.md)**\
  Thêm từ hóa đơn tối đa 50 hóa đơn mỗi lần; nhập bộ chứng từ tối đa 50 tệp và 100 MB; tệp tải cho trợ lý tối đa 10 MB.

## Các bước

[Thêm chi phí từ hóa đơn](how-to/add-invoice-expense.md)

1. Kiểm tra [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md).
   Trang "Tạo đề nghị thanh toán" hiển thị số chứng từ (ví dụ TT.19102026.00001) và nhãn "Bản nháp" ở góc phải thanh Quy trình tạo.
   Nếu chưa đáp ứng: làm theo [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) bên dưới.
2. [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng
   1. Bấm **Tạo đề nghị thanh toán** ở đầu trang (mở loại đề nghị mặc định); mũi tên bên cạnh mở danh sách các loại đề nghị đang bật để tìm và chọn (dữ liệu mẫu: Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác; danh sách thực tế do quản trị viên cấu hình). Một bản nháp được tạo ngay.
      ![Đầu trang Đề nghị của tôi: (1) nút Tạo đề nghị thanh toán và danh sách loại đề nghị mở từ mũi tên bên cạnh (Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. Ở bước **1 Tổng quan**, nhập **Mục đích yêu cầu** (2); kiểm tra **Người yêu cầu** (là bạn), **Đơn vị duyệt** (đơn vị của bạn), **Đối tượng thanh toán** (đã điền sẵn) và các trường khác như Ngày yêu cầu, Số chứng từ, Công ty, Kỳ ngân sách, Thời hạn thanh toán, Mô tả yêu cầu. Đơn vị duyệt cũng là Bộ phận chịu chi phí mặc định của các dòng chi phí.
      ![Bước 1 Tổng quan của bản nháp: (2) ô Mục đích yêu cầu; Người yêu cầu, Đơn vị duyệt, Kỳ ngân sách và Đối tượng thanh toán đã điền sẵn; (3) nút Tiếp tục](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Bấm **Tiếp tục** (3) để sang bước **2 Bảng kê chi phí**.
3. [Thêm chi phí từ hóa đơn](how-to/add-invoice-expense.md)
   1. Ở bước **2 Bảng kê chi phí**, bấm mũi tên cạnh **Thêm chi phí** rồi chọn **Thêm từ hóa đơn** (chỉ có khi loại đề nghị dùng hóa đơn). Hộp thoại **Thêm hóa đơn** ghi "Mỗi hóa đơn thành một dòng chi phí".
   2. Tab **Tải lên**: kéo thả hoặc chọn tệp hóa đơn (XML hóa đơn điện tử, PDF, .docx hoặc ảnh chụp; nhiều tệp cùng lúc, tối đa 50).
   3. Hoặc tab **Chọn từ danh sách**: danh sách hóa đơn của Quản lý hóa đơn đã đọc xong và chưa nằm trong đề nghị nào ("N hóa đơn chưa dùng"), với Số HĐ, Nhà cung cấp, ngày, tổng tiền và cột **GDT** (kết quả tra cứu Cổng HĐĐT: Hợp lệ, Không hợp lệ, Cần xem lại). Tìm theo số HĐ, nhà cung cấp hoặc MST, rồi tích chọn các hóa đơn cần lấy (tối đa 50 mỗi lần; hóa đơn đã có trong bản nháp này không hiện lại). Danh sách trống thì ghi "Chưa có hóa đơn nào" ([Tải hóa đơn lên Quản lý hóa đơn](../invoices/upload.md) để có hóa đơn ở đây).
   4. Bấm **Thêm N dòng chi phí**. Hộp thoại hiện "Đang tải lên x/y…" hoặc "Đang thêm x/y…" và tự đóng khi xong. Tệp tải lên được đọc sau đó (dòng hiện "Đang đọc…", vài chục giây với PDF); hóa đơn chọn từ danh sách đến kèm dữ liệu đã đọc sẵn.
   5. Mở dòng (mũi tên đầu dòng): nhãn "Đã tách từ hóa đơn" cùng tên tệp; các mục **Hóa đơn**, **Nhà cung cấp**, **Phân bổ** có trường được điền tự động, đánh dấu biểu tượng AI ("Thông tin do AI trích xuất"). Mô tả chi phí và số tiền cũng được điền; giá trị bạn đã nhập không bị ghi đè.
   6. Kiểm tra và sửa các trường: chọn **Loại thuế** nếu thấy "Hóa đơn ghi thuế suất …, không khớp loại thuế nào"; chọn **Nhà cung cấp** nếu thấy "Hóa đơn ghi nhà cung cấp: …" (người có quyền cấu hình thấy thêm liên kết **Thêm NCC mới**). **Khoản mục ngân sách** và **Bộ phận chịu chi phí** đã điền sẵn (theo dòng đầu tiên và Đơn vị duyệt, hoặc theo [Áp dụng phân bổ cho tất cả chi phí](how-to/apply-expense-defaults.md)).
   7. Nếu loại đề nghị bật đối soát, hệ thống tự đối soát lại khi hóa đơn điền xong; xem [Đối soát chứng từ của một chi phí](../reconciliation/how-to/check-expense.md).

## Nếu có sự cố

### [Thêm chi phí từ hóa đơn](how-to/add-invoice-expense.md)

- "Không tải lên được …", "Không đọc được …" hoặc "Không thêm được hóa đơn …": dòng vẫn được giữ; điền tay hoặc bấm **Đính kèm hóa đơn** để đính lại. Giới hạn tệp: [Giới hạn khi tải chứng từ](../../reference/extraction/file-limits.md).
- Hóa đơn chọn từ danh sách chỉ được gắn với đề nghị khi đề nghị được nộp; trước đó nó vẫn là "chưa dùng" (chỉ ẩn trong chính bản nháp này), và gỡ dòng thì hóa đơn tự trở lại danh sách chưa dùng.
