---
title: "Nhập bộ chứng từ thành các dòng chi phí"
description: "Ở bước Bảng kê chi phí, chọn Nhập bộ chứng từ và tải nhiều tệp, một PDF hoặc một tệp zip; hệ thống tách thành các dòng chi phí."
id: import-bundle
sidebar_label: Nhập bộ chứng từ thành các dòng chi phí
sidebar_position: 8
displayed_sidebar: akaPaymentSidebar
---

# Nhập bộ chứng từ thành các dòng chi phí

Ở bước Bảng kê chi phí, chọn Nhập bộ chứng từ và tải nhiều tệp, một PDF hoặc một tệp zip; hệ thống tách thành các dòng chi phí.

## Trước khi bắt đầu

- **[Giới hạn khi tải chứng từ](../../../reference/extraction/file-limits.md)**\
  Thêm từ hóa đơn tối đa 50 hóa đơn mỗi lần; nhập bộ chứng từ tối đa 50 tệp và 100 MB; tệp tải cho trợ lý tối đa 10 MB.


## Các bước

1. Ở bước **2 Bảng kê chi phí**, bấm mũi tên cạnh **Thêm chi phí** rồi chọn **Nhập bộ chứng từ**.
2. Kéo thả hoặc **chọn tệp**: nhiều tệp cùng lúc, hoặc một tệp .zip (zip được mở ngay trong trình duyệt; tệp không thuộc loại chấp nhận bị bỏ qua và được liệt kê). Chấp nhận .pdf, .docx, .xml, .png, .jpg, .jpeg, .webp, .gif, .zip. Một PDF duy nhất sẽ được tách thành từng chứng từ.
3. Bấm **Nhập**. Nút đổi thành "Đang tách chứng từ…", hộp thoại ghi "Có thể mất vài phút. Cửa sổ này tự đóng khi tách xong, kể cả khi bạn tải lại trang."
4. Khi hộp thoại tự đóng, kiểm tra các dòng chi phí mới ("Đã tạo N khoản chi"): mỗi hóa đơn là một dòng với số hóa đơn, ngày, mô tả và số tiền đã đọc; phần phân bổ bắt đầu như dòng thêm tay (khoản mục của dòng đầu tiên, bộ phận theo Đơn vị duyệt, hoặc giá trị đang đặt ở [Áp dụng phân bổ cho tất cả chi phí](apply-expense-defaults.md)) và mỗi dòng mang sẵn chứng từ chung.
   - Cách ghép: hóa đơn XML và PDF cùng số là một dòng; chứng từ chỉ liên quan một hóa đơn (cùng số vé, số đặt chỗ, hợp đồng hoặc số hóa đơn, hoặc đúng số tiền của nó) được gắn vào dòng đó; chứng từ liên quan nhiều hóa đơn được gắn vào mọi dòng; nếu không có hóa đơn nào thì mỗi tệp là một dòng.
5. Đọc cảnh báo phía trên bảng (nếu có): trang không nhận diện được, chứng từ không rõ loại, hóa đơn không đọc được ("hãy nhập khoản chi đó bằng tay"), tệp không đọc được và bị bỏ qua; xử lý tay các mục đó.

## Xử lý lỗi

- Quá 50 tệp hoặc 100 MB thì nút Nhập bị khóa: xem [Giới hạn khi tải chứng từ](../../../reference/extraction/file-limits.md). Lỗi của lượt tách: bộ chứng từ quá nhiều trang, không phải PDF, không nhận diện được chứng từ nào, đề nghị đã được nộp trước khi tách xong, hoặc xử lý quá lâu (thử lại).


## Điều kiện cần kiểm tra

- [Đang mở một đề nghị nháp](../../../troubleshooting/requests/draft-open.md) — Một đề nghị đang ở trạng thái Bản nháp trong quy trình tạo và đã có số chứng từ.

## Được dùng trong các hướng dẫn

- [Nhập cả bộ chứng từ một lần](../import-bundle.md) — Người dùng có nhiều hóa đơn và chứng từ kèm theo và muốn tạo các dòng chi phí cùng lúc.
- [Tạo đề nghị và điền đến bước Xem lại](create-draft.md) — Sau khi mở đề nghị mới, thêm chi phí ở Bảng kê chi phí, điền thanh toán rồi đến bước Xem lại.
