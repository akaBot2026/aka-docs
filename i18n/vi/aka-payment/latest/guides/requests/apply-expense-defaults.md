---
title: "Áp dụng cùng khoản mục ngân sách và bộ phận chịu chi phí cho tất cả chi phí"
description: "Người tạo muốn mọi dòng chi phí của đề nghị dùng chung Khoản mục ngân sách, Bộ phận chịu chi phí (và Dự án) mà không chọn từng dòng."
id: apply-expense-defaults
sidebar_label: Áp dụng cùng khoản mục ngân sách và bộ phận chịu chi phí cho tất cả chi phí
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Áp dụng cùng khoản mục ngân sách và bộ phận chịu chi phí cho tất cả chi phí

Người tạo muốn mọi dòng chi phí của đề nghị dùng chung Khoản mục ngân sách, Bộ phận chịu chi phí (và Dự án) mà không chọn từng dòng.

**Khi nào sử dụng:**

- Người dùng có nhiều dòng chi phí cùng khoản mục ngân sách và bộ phận chịu chi phí.
- Người dùng muốn áp một phân bổ cho mọi dòng chi phí, kể cả dòng thêm sau.


Điền phần phân bổ một lần cho cả đề nghị; các dòng đã có và dòng thêm sau đều lấy theo, vẫn sửa được từng dòng.


## Các cách thực hiện

- [Áp dụng phân bổ cho tất cả chi phí](how-to/apply-expense-defaults.md) — Ở bước Bảng kê chi phí, mở Áp dụng cho tất cả chi phí, chọn khoản mục, bộ phận (và dự án) rồi bấm Áp dụng.

## Trước khi bắt đầu

- **[Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md)** — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng\
  Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".

## Các bước

[Áp dụng phân bổ cho tất cả chi phí](how-to/apply-expense-defaults.md)

1. Kiểm tra [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md).
   Trang "Tạo đề nghị thanh toán" hiển thị số chứng từ (ví dụ TT.19102026.00001) và nhãn "Bản nháp" ở góc phải thanh Quy trình tạo.
   Nếu chưa đáp ứng: làm theo [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) bên dưới.
2. [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng
   1. Bấm **Tạo đề nghị thanh toán** ở đầu trang (mở loại đề nghị mặc định); mũi tên bên cạnh mở danh sách các loại đề nghị đang bật để tìm và chọn (dữ liệu mẫu: Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác; danh sách thực tế do quản trị viên cấu hình). Một bản nháp được tạo ngay.
      ![Đầu trang Đề nghị của tôi: (1) nút Tạo đề nghị thanh toán và danh sách loại đề nghị mở từ mũi tên bên cạnh (Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. Ở bước **1 Tổng quan**, nhập **Mục đích yêu cầu** (2); kiểm tra **Người yêu cầu** (là bạn), **Đơn vị duyệt** (đơn vị của bạn), **Đối tượng thanh toán** (đã điền sẵn) và các trường khác như Ngày yêu cầu, Số chứng từ, Công ty, Kỳ ngân sách, Thời hạn thanh toán, Mô tả yêu cầu. Đơn vị duyệt cũng là Bộ phận chịu chi phí mặc định của các dòng chi phí.
      ![Bước 1 Tổng quan của bản nháp: (2) ô Mục đích yêu cầu; Người yêu cầu, Đơn vị duyệt, Kỳ ngân sách và Đối tượng thanh toán đã điền sẵn; (3) nút Tiếp tục](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Bấm **Tiếp tục** (3) để sang bước **2 Bảng kê chi phí**.
3. [Áp dụng phân bổ cho tất cả chi phí](how-to/apply-expense-defaults.md)
   1. Ở bước **2 Bảng kê chi phí**, bấm mũi tên cạnh **Thêm chi phí** (trên điện thoại: menu ⋯) rồi chọn **Áp dụng cho tất cả chi phí**. Mục này chỉ có khi loại đề nghị có phần phân bổ (Khoản mục ngân sách).
   2. Trong hộp thoại, chọn các giá trị của phần phân bổ, ví dụ **Khoản mục ngân sách**, **Bộ phận chịu chi phí**, **Dự án chịu chi phí** (chỉ hiện khi ngân sách quản lý theo dự án) hoặc **Cán bộ nhân viên**. Không trường nào bắt buộc; trường để trống không thay đổi chi phí nào.
   3. Bấm **Áp dụng**. Giá trị được ghi lên mọi dòng chi phí. Không bị ghi đè: trường bạn đã tự sửa trên dòng, và trường đã có giá trị trước khi mở **Quy trình tạo** lần này (trường trống thì được điền). Dòng thêm sau (thủ công, từ hóa đơn hoặc nhập bộ chứng từ) bắt đầu với các giá trị này.
   4. Kiểm tra dòng tóm tắt dưới tiêu đề bảng **Bảng kê chi phí** (biểu tượng và giá trị của từng trường); bấm biểu tượng cài đặt ở cuối dòng để mở lại hộp thoại.

## Nếu có sự cố

### [Áp dụng phân bổ cho tất cả chi phí](how-to/apply-expense-defaults.md)

- Giá trị chỉ giữ trong lần mở **Quy trình tạo** hiện tại: mở lại bản nháp thì hộp thoại trống (các giá trị đã ghi lên chi phí vẫn còn). Vẫn sửa được từng dòng riêng; mỗi dòng vẫn phải đủ trường bắt buộc: xem [Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md).
