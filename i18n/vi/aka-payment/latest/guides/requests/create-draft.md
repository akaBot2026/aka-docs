---
title: "Tạo đề nghị thanh toán"
description: "Người dùng muốn lập một đề nghị thanh toán mới và lưu thành bản nháp."
id: create-draft
sidebar_label: Tạo đề nghị thanh toán
sidebar_position: 7
---

# Tạo đề nghị thanh toán

Người dùng muốn lập một đề nghị thanh toán mới và lưu thành bản nháp.

**Khi nào sử dụng:** Người dùng cần thanh toán một khoản chi và muốn tạo đề nghị.


Bắt đầu một đề nghị mới từ đầu, điền thông tin, chi phí và hình thức thanh toán. Cách khác để bắt đầu: chọn hóa đơn trong Quản lý hóa đơn rồi bấm [Tạo ĐNTT](../invoices/create-request.md) (mỗi hóa đơn là một khoản chi điền sẵn), hoặc nhờ trợ lý AI ([Tạo đề nghị bằng trợ lý](../assistant/create-draft.md)).


## Các cách thực hiện

- [Tạo đề nghị và điền đến bước Xem lại](how-to/create-draft.md) — Sau khi mở đề nghị mới, thêm chi phí ở Bảng kê chi phí, điền thanh toán rồi đến bước Xem lại.

## Được dùng trong các hướng dẫn

- [Tạo ĐNTT từ hóa đơn đã có trong Quản lý hóa đơn](../invoices/create-request.md) — Người dùng muốn chọn nhiều hóa đơn đã đọc sẵn trong Quản lý hóa đơn và lập một đề nghị thanh toán, mỗi hóa đơn là một khoản chi.
- [Chọn hóa đơn và tạo đề nghị thanh toán](../invoices/how-to/create-request.md) — Tích các hóa đơn Sẵn sàng ở Quản lý hóa đơn, bấm Tạo ĐNTT, chọn Loại yêu cầu và bấm Tạo ĐNTT; mỗi hóa đơn thành một khoản chi trong bản nháp.
- [AkaPayment](../../index.md) — Lập, duyệt và theo dõi đề nghị thanh toán; tiếp nhận hóa đơn đầu vào, đối soát chứng từ và quản lý ngân sách, có trợ lý AI.

## Trước khi bắt đầu

- **[Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md)**\
  Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".

## Các bước

[Tạo đề nghị và điền đến bước Xem lại](how-to/create-draft.md)

1. [Mở đề nghị mới và điền bước Tổng quan](how-to/start-draft.md)
   1. Bấm **Tạo đề nghị thanh toán** ở đầu trang (mở loại đề nghị mặc định); mũi tên bên cạnh mở danh sách các loại đề nghị đang bật để tìm và chọn (dữ liệu mẫu: Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác; danh sách thực tế do quản trị viên cấu hình). Một bản nháp được tạo ngay.
      ![Đầu trang Đề nghị của tôi: (1) nút Tạo đề nghị thanh toán và danh sách loại đề nghị mở từ mũi tên bên cạnh (Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. Ở bước **1 Tổng quan**, nhập **Mục đích yêu cầu** (2); kiểm tra **Người yêu cầu** (là bạn), **Đơn vị duyệt** (đơn vị của bạn), **Đối tượng thanh toán** (đã điền sẵn) và các trường khác như Ngày yêu cầu, Số chứng từ, Công ty, Kỳ ngân sách, Thời hạn thanh toán, Mô tả yêu cầu. Đơn vị duyệt cũng là Bộ phận chịu chi phí mặc định của các dòng chi phí.
      ![Bước 1 Tổng quan của bản nháp: (2) ô Mục đích yêu cầu; Người yêu cầu, Đơn vị duyệt, Kỳ ngân sách và Đối tượng thanh toán đã điền sẵn; (3) nút Tiếp tục](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Bấm **Tiếp tục** (3) để sang bước **2 Bảng kê chi phí**.
2. [Tạo đề nghị và điền đến bước Xem lại](how-to/create-draft.md)
   1. Ở bước **2 Bảng kê chi phí**, bấm **Thêm chi phí** để thêm dòng thủ công, hoặc mũi tên bên cạnh: [Thêm chi phí từ hóa đơn](how-to/add-invoice-expense.md), [Nhập bộ chứng từ thành các dòng chi phí](how-to/import-bundle.md), [Áp dụng phân bổ cho tất cả chi phí](how-to/apply-expense-defaults.md). Có thể đính kèm cho cả đề nghị bằng [Đính kèm chứng từ chung cho cả đề nghị](how-to/add-shared-documents.md).
      ![Bước 2 Bảng kê chi phí: (1) nút Thêm chi phí và menu mũi tên bên cạnh với Thêm từ hóa đơn, Nhập bộ chứng từ, Đối soát hàng loạt, Áp dụng cho tất cả chi phí, Kiểm tra ngân sách](/static/img/aka-payment-latest-requests-create-draft-expenses.webp)
   2. Với dòng thêm thủ công, nhập **Mô tả chi phí** và **Tổng tiền**; mở dòng để kiểm tra mục **Phân bổ**: **Khoản mục ngân sách** (điền sẵn theo dòng đầu tiên hoặc khoản mục đang hoạt động đầu tiên), **Bộ phận chịu chi phí** (điền sẵn theo Đơn vị duyệt), **Dự án chịu chi phí** (chỉ khi ngân sách quản lý theo dự án), Cán bộ nhân viên. Đính kèm hóa đơn bằng **Đính kèm hóa đơn**.
   3. Bấm **Tiếp tục**. Bản nháp tự lưu khi bạn sửa (nhãn "Đang lưu..." rồi "Đã lưu" cạnh tên loại đề nghị).
   4. Ở bước **3 Thanh toán**, chọn **Hình thức thanh toán** (4) trong các hình thức loại đề nghị cho phép (Chuyển khoản, Tiền mặt, Bù trừ công nợ; mặc định Chuyển khoản).
      ![Bước 3 Thanh toán: (4) ô Hình thức thanh toán, (5) nút Điền theo bảng kê trên bảng Người thụ hưởng, (6) dòng Tổng người thụ hưởng và nút Tiếp tục](/static/img/aka-payment-latest-requests-create-draft-payment.webp)
   5. Điền bảng **Người thụ hưởng**: bấm **Điền theo bảng kê** (5) để tạo sẵn một dòng cho mỗi bên nhận từ các chi phí, hoặc **Thêm người thụ hưởng**; biểu tượng sách ở đầu dòng chọn tài khoản đã lưu trong danh bạ thanh toán. Chuyển khoản cần Số tài khoản, Tên người nhận, Tên ngân hàng và Số tiền; Tiền mặt và Bù trừ công nợ cần Tên người nhận, Số CMND/CCCD và Số tiền.
   6. Kiểm tra **Tổng người thụ hưởng** bằng **Tổng chi phí** rồi bấm **Tiếp tục** (6).
   7. Ở bước **4 Xem lại** (nhãn "Sẵn sàng nộp"), đọc mục **Kiểm tra** (từng chi phí và chứng từ bắt buộc), bản xem trước "Giấy đề nghị thanh toán" và **Bộ hồ sơ**; nếu loại đề nghị có đối soát, bước này tự đối soát các chi phí có tệp mà chưa đối soát hoặc đã đổi. Có thể **Tạo bảng kê** hoặc **Tải lên bản đã sửa** nếu loại đề nghị dùng bảng kê Excel. Nộp đề nghị ở [Nộp đề nghị](how-to/submit.md).

## Nếu có sự cố

### [Tạo đề nghị và điền đến bước Xem lại](how-to/create-draft.md)

- Báo "Vui lòng sửa các trường được đánh dấu trước khi tiếp tục": xem [Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md).
- Dòng báo "Hóa đơn này đã có ở dòng …": một hóa đơn chỉ được thanh toán một lần; gỡ hóa đơn trùng.
