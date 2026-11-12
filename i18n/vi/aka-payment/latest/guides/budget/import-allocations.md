---
title: "Nhập phân bổ ngân sách bằng Excel"
description: "Người dùng muốn nạp phân bổ ngân sách hàng loạt từ tệp Excel."
id: import-allocations
sidebar_label: Nhập phân bổ ngân sách bằng Excel
sidebar_position: 4
---

# Nhập phân bổ ngân sách bằng Excel

Người dùng muốn nạp phân bổ ngân sách hàng loạt từ tệp Excel.

**Khi nào sử dụng:** Người quản lý ngân sách có bảng Excel phân bổ cả kỳ.


Phân bổ theo kỳ, khoản mục và đơn vị cho nhiều dòng một lần.


## Các cách thực hiện

- [Nhập phân bổ ngân sách từ Excel](how-to/import-allocations.md) — Ở Phân bổ ngân sách, tải tệp mẫu, điền, bấm Import từ Excel, xem trước rồi Áp dụng.

## Trước khi bắt đầu

- **[Quy tắc nhập phân bổ ngân sách](../../reference/budget/allocation-rules.md)**\
  Số tiền không âm; mỗi tổ hợp chỉ một dòng trong một lô; một lô tối đa 5000 dòng; ghi chú tối đa 1024 ký tự.

## Các bước

[Nhập phân bổ ngân sách từ Excel](how-to/import-allocations.md)

1. [Nhập phân bổ ngân sách từ Excel](how-to/import-allocations.md)
   1. Ở thanh bên, mục **Quản lý ngân sách**, mở **Phân bổ ngân sách**.
   2. Bấm mũi tên cạnh **Phân bổ** rồi chọn **Tải file mẫu**.
   3. Điền tệp mẫu trong Excel và lưu (kỳ dạng MM-YYYY).
   4. Bấm mũi tên cạnh **Phân bổ** rồi chọn **Import từ Excel** và chọn tệp .xlsx hoặc .csv (không đọc được thì báo "Không đọc được file này dưới dạng Excel hoặc CSV.").
   5. Nếu tệp không theo mẫu, trang hiện "File không theo mẫu. Chọn cột tương ứng cho từng trường." — chọn cột cho từng trường rồi bấm **Xem trước**.
   6. Đọc bản xem trước: "N mới · N cập nhật · N lỗi", trạng thái từng dòng (Mới, Cập nhật, Lỗi); bật **Chỉ hiện dòng lỗi** hoặc **Tải danh sách lỗi** để sửa tệp; **Quay lại** để đổi cách ánh xạ.
   7. Bấm **Áp dụng N dòng**; nút bị khóa khi còn dòng lỗi, không có dòng nào, hoặc vượt giới hạn dòng mỗi lần.

## Nếu có sự cố

### [Nhập phân bổ ngân sách từ Excel](how-to/import-allocations.md)

- Thông báo lỗi theo dòng: bắt buộc, kỳ phải dạng MM-YYYY, không có khoản mục đang hoạt động tên này, không có đơn vị nào có mã hoặc tên này, không có dự án đang hoạt động tên này, số tiền phải ≥ 0, ghi chú tối đa 1024 ký tự, nhiều bản ghi trùng tên, trùng tổ hợp với dòng phía trên. Xem thêm [Quy tắc nhập phân bổ ngân sách](../../reference/budget/allocation-rules.md).
