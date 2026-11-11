---
title: "Nhập cả bộ chứng từ một lần"
description: "Người dùng có nhiều hóa đơn và chứng từ kèm theo và muốn tạo các dòng chi phí cùng lúc."
id: import-bundle
sidebar_label: Nhập cả bộ chứng từ một lần
sidebar_position: 8
---

# Nhập cả bộ chứng từ một lần

Người dùng có nhiều hóa đơn và chứng từ kèm theo và muốn tạo các dòng chi phí cùng lúc.

**Khi nào sử dụng:**

- Người dùng có cả thư mục hóa đơn và hợp đồng cần đưa vào một đề nghị.
- Người dùng có nhiều chứng từ và muốn tạo các dòng chi phí trong một lần.


Tải một bộ tệp hoặc một tệp zip để tạo nhiều dòng chi phí.


## Các cách thực hiện

- [Nhập bộ chứng từ thành các dòng chi phí](how-to/import-bundle.md) — Ở bước Bảng kê chi phí, chọn Nhập bộ chứng từ và tải nhiều tệp, một PDF hoặc một tệp zip; hệ thống tách thành các dòng chi phí.

## Trước khi bắt đầu

- **[Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md)** — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng\
  Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".
- **[Giới hạn khi tải chứng từ](../../reference/extraction/file-limits.md)**\
  Thêm từ hóa đơn tối đa 50 hóa đơn mỗi lần; nhập bộ chứng từ tối đa 50 tệp và 100 MB; tệp tải cho trợ lý tối đa 10 MB.

## Các bước

[Nhập bộ chứng từ thành các dòng chi phí](how-to/import-bundle.md)

1. Kiểm tra [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md).
   Trang "Tạo đề nghị thanh toán" hiển thị số chứng từ (ví dụ TT.19102026.00001) và nhãn "Bản nháp" ở góc phải thanh Quy trình tạo.
   Nếu chưa đáp ứng: làm theo [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) bên dưới.
2. [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng
   1. Bấm **Tạo đề nghị thanh toán** ở đầu trang (mở loại đề nghị mặc định); mũi tên bên cạnh mở danh sách các loại đề nghị đang bật để tìm và chọn (dữ liệu mẫu: Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác; danh sách thực tế do quản trị viên cấu hình). Một bản nháp được tạo ngay.
      ![Đầu trang Đề nghị của tôi: (1) nút Tạo đề nghị thanh toán và danh sách loại đề nghị mở từ mũi tên bên cạnh (Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. Ở bước **1 Tổng quan**, nhập **Mục đích yêu cầu** (2); kiểm tra **Người yêu cầu** (là bạn), **Đơn vị duyệt** (đơn vị của bạn), **Đối tượng thanh toán** (đã điền sẵn) và các trường khác như Ngày yêu cầu, Số chứng từ, Công ty, Kỳ ngân sách, Thời hạn thanh toán, Mô tả yêu cầu. Đơn vị duyệt cũng là Bộ phận chịu chi phí mặc định của các dòng chi phí.
      ![Bước 1 Tổng quan của bản nháp: (2) ô Mục đích yêu cầu; Người yêu cầu, Đơn vị duyệt, Kỳ ngân sách và Đối tượng thanh toán đã điền sẵn; (3) nút Tiếp tục](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Bấm **Tiếp tục** (3) để sang bước **2 Bảng kê chi phí**.
3. [Nhập bộ chứng từ thành các dòng chi phí](how-to/import-bundle.md)
   1. Ở bước **2 Bảng kê chi phí**, bấm mũi tên cạnh **Thêm chi phí** rồi chọn **Nhập bộ chứng từ**.
   2. Kéo thả hoặc **chọn tệp**: nhiều tệp cùng lúc, hoặc một tệp .zip (zip được mở ngay trong trình duyệt; tệp không thuộc loại chấp nhận bị bỏ qua và được liệt kê). Chấp nhận .pdf, .docx, .xml, .png, .jpg, .jpeg, .webp, .gif, .zip. Một PDF duy nhất sẽ được tách thành từng chứng từ.
   3. Bấm **Nhập**. Nút đổi thành "Đang tách chứng từ…", hộp thoại ghi "Có thể mất vài phút. Cửa sổ này tự đóng khi tách xong, kể cả khi bạn tải lại trang."
   4. Khi hộp thoại tự đóng, kiểm tra các dòng chi phí mới ("Đã tạo N khoản chi"): mỗi hóa đơn là một dòng với số hóa đơn, ngày, mô tả và số tiền đã đọc; phần phân bổ bắt đầu như dòng thêm tay (khoản mục của dòng đầu tiên, bộ phận theo Đơn vị duyệt, hoặc giá trị đang đặt ở [Áp dụng phân bổ cho tất cả chi phí](how-to/apply-expense-defaults.md)) và mỗi dòng mang sẵn chứng từ chung.
   5. Đọc cảnh báo phía trên bảng (nếu có): trang không nhận diện được, chứng từ không rõ loại, hóa đơn không đọc được ("hãy nhập khoản chi đó bằng tay"), tệp không đọc được và bị bỏ qua; xử lý tay các mục đó.

## Nếu có sự cố

### [Nhập bộ chứng từ thành các dòng chi phí](how-to/import-bundle.md)

- Quá 50 tệp hoặc 100 MB thì nút Nhập bị khóa: xem [Giới hạn khi tải chứng từ](../../reference/extraction/file-limits.md). Lỗi của lượt tách: bộ chứng từ quá nhiều trang, không phải PDF, không nhận diện được chứng từ nào, đề nghị đã được nộp trước khi tách xong, hoặc xử lý quá lâu (thử lại).
