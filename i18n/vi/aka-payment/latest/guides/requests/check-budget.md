---
title: "Xem chi phí có vượt ngân sách không"
description: "Người dùng muốn biết đề nghị đang soạn có vượt ngân sách đã phân bổ không."
id: check-budget
sidebar_label: Xem chi phí có vượt ngân sách không
sidebar_position: 5
displayed_sidebar: akaPaymentSidebar
---

# Xem chi phí có vượt ngân sách không

Người dùng muốn biết đề nghị đang soạn có vượt ngân sách đã phân bổ không.

**Khi nào sử dụng:**

- Người dùng lo chi phí vượt ngân sách trước khi nộp.
- Người dùng muốn xem ngân sách còn lại cho các dòng chi phí trong bản nháp.


Kiểm tra theo từng khoản mục ngân sách và bộ phận chịu chi phí.


## Các cách thực hiện

- [Kiểm tra ngân sách trước khi nộp](how-to/check-budget.md) — Ở bước Bảng kê chi phí, chọn Kiểm tra ngân sách để xem chi phí có vượt phân bổ không.

## Trước khi bắt đầu

- **[Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md)** — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng\
  Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".

## Các bước

[Kiểm tra ngân sách trước khi nộp](how-to/check-budget.md)

1. Kiểm tra [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md).
   Trang "Tạo đề nghị thanh toán" hiển thị số chứng từ (ví dụ TT.19102026.00001) và nhãn "Bản nháp" ở góc phải thanh Quy trình tạo.
   Nếu chưa đáp ứng: làm theo [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) bên dưới.
2. [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md) — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng
   1. Bấm **Tạo đề nghị thanh toán** ở đầu trang (mở loại đề nghị mặc định); mũi tên bên cạnh mở danh sách các loại đề nghị đang bật để tìm và chọn (dữ liệu mẫu: Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác; danh sách thực tế do quản trị viên cấu hình). Một bản nháp được tạo ngay.
      ![Đầu trang Đề nghị của tôi: (1) nút Tạo đề nghị thanh toán và danh sách loại đề nghị mở từ mũi tên bên cạnh (Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. Ở bước **1 Tổng quan**, nhập **Mục đích yêu cầu** (2); kiểm tra **Người yêu cầu** (là bạn), **Đơn vị duyệt** (đơn vị của bạn), **Đối tượng thanh toán** (đã điền sẵn) và các trường khác như Ngày yêu cầu, Số chứng từ, Công ty, Kỳ ngân sách, Thời hạn thanh toán, Mô tả yêu cầu. Đơn vị duyệt cũng là Bộ phận chịu chi phí mặc định của các dòng chi phí.
      ![Bước 1 Tổng quan của bản nháp: (2) ô Mục đích yêu cầu; Người yêu cầu, Đơn vị duyệt, Kỳ ngân sách và Đối tượng thanh toán đã điền sẵn; (3) nút Tiếp tục](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Bấm **Tiếp tục** (3) để sang bước **2 Bảng kê chi phí**.
3. [Kiểm tra ngân sách trước khi nộp](how-to/check-budget.md)
   1. Ở bước **2 Bảng kê chi phí**, bấm mũi tên cạnh **Thêm chi phí** (trên điện thoại: menu ⋯) rồi chọn **Kiểm tra ngân sách**. Mục này chỉ có khi loại đề nghị bật kiểm tra ngân sách.
   2. Đọc hộp thoại "Kết quả kiểm tra ngân sách": với mỗi Khoản mục và Đơn vị (và Dự án khi ngân sách theo dự án) có Phân bổ, Đã sử dụng, Đề nghị này và phần Vượt, kèm nhãn "Vượt ngân sách".
   3. Nếu vượt, mở "N dòng chi phí" bên dưới (có gợi ý "Chuyển khoản mục cho dòng chi phí" để đổi khoản mục) hoặc giữ nguyên nếu chấp nhận vượt ngân sách.
   4. Bấm **Đóng**.

## Lưu ý

- **[Quy tắc vượt ngân sách](../../reference/budget/overrun.md)**\
  Mỗi loại đề nghị đặt Kiểm tra ngân sách là Tắt, Cảnh báo hoặc Chặn; mặc định Cảnh báo, và loại Thanh toán đang để Cảnh báo.
