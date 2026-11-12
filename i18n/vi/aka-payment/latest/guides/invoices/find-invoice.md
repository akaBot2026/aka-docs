---
title: "Tìm và xem một hóa đơn đầu vào"
description: "Người dùng muốn tìm một hóa đơn đã tiếp nhận (tải lên, email, Cổng HĐĐT, AkaConnect, AkaPay) và xem tệp gốc, thông tin đã đọc, nguồn."
id: find-invoice
sidebar_label: Tìm và xem một hóa đơn đầu vào
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Tìm và xem một hóa đơn đầu vào

Người dùng muốn tìm một hóa đơn đã tiếp nhận (tải lên, email, Cổng HĐĐT, AkaConnect, AkaPay) và xem tệp gốc, thông tin đã đọc, nguồn.

**Khi nào sử dụng:**

- Người dùng cần kiểm tra một hóa đơn của nhà cung cấp đã về hệ thống chưa.
- Người dùng muốn xem các hóa đơn chưa lập đề nghị thanh toán.
- Người dùng muốn tra một hóa đơn đầu vào theo số hóa đơn, nhà cung cấp hoặc mã số thuế.
- Người dùng muốn xem các hóa đơn đã về qua tải lên, email, Cổng HĐĐT, AkaConnect hoặc AkaPay.


Màn hình Quản lý hóa đơn liệt kê mọi hóa đơn đầu vào bạn được phép xem, kèm nguồn, trạng thái và đề nghị đã dùng hóa đơn.


## Các cách thực hiện

- [Lọc danh sách và mở một hóa đơn](how-to/find-invoice.md) — Ở Quản lý hóa đơn, chọn tab, tìm theo số hóa đơn/nhà cung cấp/MST, lọc theo ngày, trạng thái, nguồn, số tiền (và đơn vị nếu là quản trị) rồi mở hóa đơn.

## Trước khi bắt đầu

- **[Ai thấy và thao tác được hóa đơn đầu vào](../../reference/invoices/access.md)**\
  Hóa đơn thuộc đơn vị của người tải lên; đơn vị đó và các đơn vị cấp trên thấy được. Quản trị viên và người vận hành thấy mọi đơn vị.

## Các bước

[Lọc danh sách và mở một hóa đơn](how-to/find-invoice.md)

1. [Lọc danh sách và mở một hóa đơn](how-to/find-invoice.md)
   1. Mở **Quản lý hóa đơn** ở thanh bên. Đầu trang có một thẻ cho mỗi nguồn đang bật, với lần đồng bộ gần nhất; không nguồn nào bật thì không có thẻ nào.
   2. Chọn tab **Chưa tạo ĐNTT**, **Đã tạo ĐNTT** hoặc **Tất cả**. Quản trị viên và người vận hành chọn đơn vị ở ô chọn đơn vị ở góc trên bên phải (bỏ chọn = mọi đơn vị).
   3. Gõ vào ô tìm kiếm (số hóa đơn, nhà cung cấp, MST), lọc **Nhà cung cấp** (ô "Tên hoặc MST") và **Ngày hóa đơn**. Bấm **Thêm bộ lọc** để lọc **Trạng thái**, **Nguồn**, **Số tiền** (Từ–Đến, hoặc < 10 tr, 10–30 tr, > 30 tr), rồi bấm **Áp dụng** (**Xóa** để bỏ lọc).
   4. Rê chuột lên số hóa đơn để xem nhanh thông tin đã đọc, **Thông tin từ nguồn** (nguồn nhận) và mục **Kiểm tra** (Là hóa đơn, Đọc hóa đơn, Tra cứu cổng thuế: Đạt, Không đạt, hoặc "Không kiểm tra" khi nguồn không bật tra cứu).
   5. Bấm vào dòng để mở trang chi tiết hóa đơn. Bên trái là tệp gốc: tệp XML hiện dạng văn bản; ảnh và PDF có thu nhỏ/phóng to, **Vừa chiều rộng**, **Vừa trang**. Góc trên bên phải có nút **Tải xuống**. Bên phải là thẻ **Thông tin hóa đơn** (nhãn nguồn ở góc thẻ), sửa được rồi bấm **Lưu**. Khung kiểm tra ở trên thẻ chỉ hiện khi hóa đơn Bị từ chối, Gián đoạn, đã ghi đè, hoặc có kết quả tra cứu Cổng HĐĐT. Bấm mũi tên ‹ cạnh tiêu đề để quay lại danh sách.

## Nếu có sự cố

### [Lọc danh sách và mở một hóa đơn](how-to/find-invoice.md)

- "Không tìm thấy hóa đơn": hóa đơn không tồn tại hoặc thuộc đơn vị bạn không thấy. Xem [Ai thấy và thao tác được hóa đơn đầu vào](../../reference/invoices/access.md).
