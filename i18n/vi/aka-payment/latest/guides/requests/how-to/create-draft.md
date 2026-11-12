---
title: "Tạo đề nghị và điền đến bước Xem lại"
description: "Sau khi mở đề nghị mới, thêm chi phí ở Bảng kê chi phí, điền thanh toán rồi đến bước Xem lại."
id: create-draft
sidebar_label: Tạo đề nghị và điền đến bước Xem lại
sidebar_position: 7
displayed_sidebar: akaPaymentSidebar
---

# Tạo đề nghị và điền đến bước Xem lại

Sau khi mở đề nghị mới, thêm chi phí ở Bảng kê chi phí, điền thanh toán rồi đến bước Xem lại.

## Trước khi bắt đầu

- **[Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../../reference/requests/draft-validation.md)**\
  Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".


## Các bước

1. Ở bước **2 Bảng kê chi phí**, bấm **Thêm chi phí** để thêm dòng thủ công, hoặc mũi tên bên cạnh: [Thêm chi phí từ hóa đơn](add-invoice-expense.md), [Nhập bộ chứng từ thành các dòng chi phí](import-bundle.md), [Áp dụng phân bổ cho tất cả chi phí](apply-expense-defaults.md). Có thể đính kèm cho cả đề nghị bằng [Đính kèm chứng từ chung cho cả đề nghị](add-shared-documents.md).

   ![Bước 2 Bảng kê chi phí: (1) nút Thêm chi phí và menu mũi tên bên cạnh với Thêm từ hóa đơn, Nhập bộ chứng từ, Đối soát hàng loạt, Áp dụng cho tất cả chi phí, Kiểm tra ngân sách](/static/img/aka-payment-latest-requests-create-draft-expenses.webp)

2. Với dòng thêm thủ công, nhập **Mô tả chi phí** và **Tổng tiền**; mở dòng để kiểm tra mục **Phân bổ**: **Khoản mục ngân sách** (điền sẵn theo dòng đầu tiên hoặc khoản mục đang hoạt động đầu tiên), **Bộ phận chịu chi phí** (điền sẵn theo Đơn vị duyệt), **Dự án chịu chi phí** (chỉ khi ngân sách quản lý theo dự án), Cán bộ nhân viên. Đính kèm hóa đơn bằng **Đính kèm hóa đơn**.
3. Bấm **Tiếp tục**. Bản nháp tự lưu khi bạn sửa (nhãn "Đang lưu..." rồi "Đã lưu" cạnh tên loại đề nghị).
4. Ở bước **3 Thanh toán**, chọn **Hình thức thanh toán** (4) trong các hình thức loại đề nghị cho phép (Chuyển khoản, Tiền mặt, Bù trừ công nợ; mặc định Chuyển khoản).

   ![Bước 3 Thanh toán: (4) ô Hình thức thanh toán, (5) nút Điền theo bảng kê trên bảng Người thụ hưởng, (6) dòng Tổng người thụ hưởng và nút Tiếp tục](/static/img/aka-payment-latest-requests-create-draft-payment.webp)

5. Điền bảng **Người thụ hưởng**: bấm **Điền theo bảng kê** (5) để tạo sẵn một dòng cho mỗi bên nhận từ các chi phí, hoặc **Thêm người thụ hưởng**; biểu tượng sách ở đầu dòng chọn tài khoản đã lưu trong danh bạ thanh toán. Chuyển khoản cần Số tài khoản, Tên người nhận, Tên ngân hàng và Số tiền; Tiền mặt và Bù trừ công nợ cần Tên người nhận, Số CMND/CCCD và Số tiền.
6. Kiểm tra **Tổng người thụ hưởng** bằng **Tổng chi phí** rồi bấm **Tiếp tục** (6).
7. Ở bước **4 Xem lại** (nhãn "Sẵn sàng nộp"), đọc mục **Kiểm tra** (từng chi phí và chứng từ bắt buộc), bản xem trước "Giấy đề nghị thanh toán" và **Bộ hồ sơ**; nếu loại đề nghị có đối soát, bước này tự đối soát các chi phí có tệp mà chưa đối soát hoặc đã đổi. Có thể **Tạo bảng kê** hoặc **Tải lên bản đã sửa** nếu loại đề nghị dùng bảng kê Excel. Nộp đề nghị ở [Nộp đề nghị](submit.md).

## Xử lý lỗi

- Báo "Vui lòng sửa các trường được đánh dấu trước khi tiếp tục": xem [Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../../reference/requests/draft-validation.md).
- Dòng báo "Hóa đơn này đã có ở dòng …": một hóa đơn chỉ được thanh toán một lần; gỡ hóa đơn trùng.


## Hướng dẫn chuẩn bị

- [Mở đề nghị mới và điền bước Tổng quan](start-draft.md) — Bấm Tạo đề nghị thanh toán, điền bước Tổng quan rồi Tiếp tục để tới Bảng kê chi phí.

## Kết quả

- [Đề nghị nháp sẵn sàng nộp](../../../troubleshooting/requests/draft-ready.md) — Ở bước Xem lại, đề nghị hiện trạng thái "Sẵn sàng nộp" và không còn điểm kiểm tra nào chặn.

## Được dùng trong các hướng dẫn

- [Tạo đề nghị thanh toán](../create-draft.md) — Người dùng muốn lập một đề nghị thanh toán mới và lưu thành bản nháp.
- [Chọn hóa đơn và tạo đề nghị thanh toán](../../invoices/how-to/create-request.md) — Tích các hóa đơn Sẵn sàng ở Quản lý hóa đơn, bấm Tạo ĐNTT, chọn Loại yêu cầu và bấm Tạo ĐNTT; mỗi hóa đơn thành một khoản chi trong bản nháp.
- [Nhân bản một đề nghị](clone-request.md) — Ở Đề nghị của tôi, bấm biểu tượng sao chép (Nhân bản) ở dòng để mở bản nháp mới từ đề nghị cũ, nhất là đề nghị đã bị từ chối.
- [Đề nghị nháp sẵn sàng nộp](../../../troubleshooting/requests/draft-ready.md) — Ở bước Xem lại, đề nghị hiện trạng thái "Sẵn sàng nộp" và không còn điểm kiểm tra nào chặn.
