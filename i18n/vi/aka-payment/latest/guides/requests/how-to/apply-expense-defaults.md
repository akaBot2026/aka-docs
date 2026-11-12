---
title: "Áp dụng phân bổ cho tất cả chi phí"
description: "Ở bước Bảng kê chi phí, mở Áp dụng cho tất cả chi phí, chọn khoản mục, bộ phận (và dự án) rồi bấm Áp dụng."
id: apply-expense-defaults
sidebar_label: Áp dụng phân bổ cho tất cả chi phí
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Áp dụng phân bổ cho tất cả chi phí

Ở bước Bảng kê chi phí, mở Áp dụng cho tất cả chi phí, chọn khoản mục, bộ phận (và dự án) rồi bấm Áp dụng.


## Các bước

1. Ở bước **2 Bảng kê chi phí**, bấm mũi tên cạnh **Thêm chi phí** (trên điện thoại: menu ⋯) rồi chọn **Áp dụng cho tất cả chi phí**. Mục này chỉ có khi loại đề nghị có phần phân bổ (Khoản mục ngân sách).
2. Trong hộp thoại, chọn các giá trị của phần phân bổ, ví dụ **Khoản mục ngân sách**, **Bộ phận chịu chi phí**, **Dự án chịu chi phí** (chỉ hiện khi ngân sách quản lý theo dự án) hoặc **Cán bộ nhân viên**. Không trường nào bắt buộc; trường để trống không thay đổi chi phí nào.
3. Bấm **Áp dụng**. Giá trị được ghi lên mọi dòng chi phí. Không bị ghi đè: trường bạn đã tự sửa trên dòng, và trường đã có giá trị trước khi mở **Quy trình tạo** lần này (trường trống thì được điền). Dòng thêm sau (thủ công, từ hóa đơn hoặc nhập bộ chứng từ) bắt đầu với các giá trị này.
4. Kiểm tra dòng tóm tắt dưới tiêu đề bảng **Bảng kê chi phí** (biểu tượng và giá trị của từng trường); bấm biểu tượng cài đặt ở cuối dòng để mở lại hộp thoại.

## Xử lý lỗi

- Giá trị chỉ giữ trong lần mở **Quy trình tạo** hiện tại: mở lại bản nháp thì hộp thoại trống (các giá trị đã ghi lên chi phí vẫn còn). Vẫn sửa được từng dòng riêng; mỗi dòng vẫn phải đủ trường bắt buộc: xem [Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../../reference/requests/draft-validation.md).


## Điều kiện cần kiểm tra

- [Đang mở một đề nghị nháp](../../../troubleshooting/requests/draft-open.md) — Một đề nghị đang ở trạng thái Bản nháp trong quy trình tạo và đã có số chứng từ.

## Được dùng trong các hướng dẫn

- [Áp dụng cùng khoản mục ngân sách và bộ phận chịu chi phí cho tất cả chi phí](../apply-expense-defaults.md) — Người tạo muốn mọi dòng chi phí của đề nghị dùng chung Khoản mục ngân sách, Bộ phận chịu chi phí (và Dự án) mà không chọn từng dòng.
- [Thêm chi phí từ hóa đơn](add-invoice-expense.md) — Ở bước Bảng kê chi phí, chọn Thêm từ hóa đơn, tải hóa đơn lên hoặc chọn từ danh sách Quản lý hóa đơn; mỗi hóa đơn thành một dòng chi phí.
- [Tạo đề nghị và điền đến bước Xem lại](create-draft.md) — Sau khi mở đề nghị mới, thêm chi phí ở Bảng kê chi phí, điền thanh toán rồi đến bước Xem lại.
- [Nhập bộ chứng từ thành các dòng chi phí](import-bundle.md) — Ở bước Bảng kê chi phí, chọn Nhập bộ chứng từ và tải nhiều tệp, một PDF hoặc một tệp zip; hệ thống tách thành các dòng chi phí.
