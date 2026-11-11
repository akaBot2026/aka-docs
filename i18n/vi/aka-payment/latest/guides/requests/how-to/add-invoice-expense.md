---
title: "Thêm chi phí từ hóa đơn"
description: "Ở bước Bảng kê chi phí, chọn Thêm từ hóa đơn, tải hóa đơn lên hoặc chọn từ danh sách Quản lý hóa đơn; mỗi hóa đơn thành một dòng chi phí."
id: add-invoice-expense
sidebar_label: Thêm chi phí từ hóa đơn
sidebar_position: 2
---

# Thêm chi phí từ hóa đơn

Ở bước Bảng kê chi phí, chọn Thêm từ hóa đơn, tải hóa đơn lên hoặc chọn từ danh sách Quản lý hóa đơn; mỗi hóa đơn thành một dòng chi phí.

## Trước khi bắt đầu

- **[Giới hạn khi tải chứng từ](../../../reference/extraction/file-limits.md)**\
  Thêm từ hóa đơn tối đa 50 hóa đơn mỗi lần; nhập bộ chứng từ tối đa 50 tệp và 100 MB; tệp tải cho trợ lý tối đa 10 MB.


## Các bước

1. Ở bước **2 Bảng kê chi phí**, bấm mũi tên cạnh **Thêm chi phí** rồi chọn **Thêm từ hóa đơn** (chỉ có khi loại đề nghị dùng hóa đơn). Hộp thoại **Thêm hóa đơn** ghi "Mỗi hóa đơn thành một dòng chi phí".
2. Tab **Tải lên**: kéo thả hoặc chọn tệp hóa đơn (XML hóa đơn điện tử, PDF, .docx hoặc ảnh chụp; nhiều tệp cùng lúc, tối đa 50).
3. Hoặc tab **Chọn từ danh sách**: danh sách hóa đơn của Quản lý hóa đơn đã đọc xong và chưa nằm trong đề nghị nào ("N hóa đơn chưa dùng"), với Số HĐ, Nhà cung cấp, ngày, tổng tiền và cột **GDT** (kết quả tra cứu Cổng HĐĐT: Hợp lệ, Không hợp lệ, Cần xem lại). Tìm theo số HĐ, nhà cung cấp hoặc MST, rồi tích chọn các hóa đơn cần lấy (tối đa 50 mỗi lần; hóa đơn đã có trong bản nháp này không hiện lại). Danh sách trống thì ghi "Chưa có hóa đơn nào" ([Tải hóa đơn lên Quản lý hóa đơn](../../invoices/upload.md) để có hóa đơn ở đây).
4. Bấm **Thêm N dòng chi phí**. Hộp thoại hiện "Đang tải lên x/y…" hoặc "Đang thêm x/y…" và tự đóng khi xong. Tệp tải lên được đọc sau đó (dòng hiện "Đang đọc…", vài chục giây với PDF); hóa đơn chọn từ danh sách đến kèm dữ liệu đã đọc sẵn.
5. Mở dòng (mũi tên đầu dòng): nhãn "Đã tách từ hóa đơn" cùng tên tệp; các mục **Hóa đơn**, **Nhà cung cấp**, **Phân bổ** có trường được điền tự động, đánh dấu biểu tượng AI ("Thông tin do AI trích xuất"). Mô tả chi phí và số tiền cũng được điền; giá trị bạn đã nhập không bị ghi đè.
6. Kiểm tra và sửa các trường: chọn **Loại thuế** nếu thấy "Hóa đơn ghi thuế suất …, không khớp loại thuế nào"; chọn **Nhà cung cấp** nếu thấy "Hóa đơn ghi nhà cung cấp: …" (người có quyền cấu hình thấy thêm liên kết **Thêm NCC mới**). **Khoản mục ngân sách** và **Bộ phận chịu chi phí** đã điền sẵn (theo dòng đầu tiên và Đơn vị duyệt, hoặc theo [Áp dụng phân bổ cho tất cả chi phí](apply-expense-defaults.md)).
7. Nếu loại đề nghị bật đối soát, hệ thống tự đối soát lại khi hóa đơn điền xong; xem [Đối soát chứng từ của một chi phí](../../reconciliation/how-to/check-expense.md).

## Xử lý lỗi

- "Không tải lên được …", "Không đọc được …" hoặc "Không thêm được hóa đơn …": dòng vẫn được giữ; điền tay hoặc bấm **Đính kèm hóa đơn** để đính lại. Giới hạn tệp: [Giới hạn khi tải chứng từ](../../../reference/extraction/file-limits.md).
- Hóa đơn chọn từ danh sách chỉ được gắn với đề nghị khi đề nghị được nộp; trước đó nó vẫn là "chưa dùng" (chỉ ẩn trong chính bản nháp này), và gỡ dòng thì hóa đơn tự trở lại danh sách chưa dùng.


## Điều kiện cần kiểm tra

- [Đang mở một đề nghị nháp](../../../troubleshooting/requests/draft-open.md) — Một đề nghị đang ở trạng thái Bản nháp trong quy trình tạo và đã có số chứng từ.

## Được dùng trong các hướng dẫn

- [Lập chi phí từ hóa đơn có sẵn](../add-invoice-expense.md) — Người dùng có hóa đơn (XML, PDF, ảnh) hoặc hóa đơn đã có trong Quản lý hóa đơn và muốn mỗi hóa đơn thành một dòng chi phí đã điền sẵn.
- [Đính kèm chứng từ chung cho cả đề nghị](add-shared-documents.md) — Ở bước Bảng kê chi phí, bấm Chứng từ chung và đính kèm tài liệu dùng cho mọi dòng chi phí.
- [Tạo đề nghị và điền đến bước Xem lại](create-draft.md) — Sau khi mở đề nghị mới, thêm chi phí ở Bảng kê chi phí, điền thanh toán rồi đến bước Xem lại.
