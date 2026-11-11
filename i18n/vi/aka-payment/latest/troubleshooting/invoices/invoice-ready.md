---
title: "Hóa đơn ở trạng thái Sẵn sàng"
description: "Hóa đơn đã qua các bước kiểm tra (hoặc được ghi đè, nhập tay) và ở trạng thái Sẵn sàng, chọn được để tạo ĐNTT."
id: invoice-ready
sidebar_label: Hóa đơn ở trạng thái Sẵn sàng
sidebar_position: 2
---

# Hóa đơn ở trạng thái Sẵn sàng

Hóa đơn đã qua các bước kiểm tra (hoặc được ghi đè, nhập tay) và ở trạng thái Sẵn sàng, chọn được để tạo ĐNTT.

**Kiểm tra:** Ở Quản lý hóa đơn, cột Trạng thái của hóa đơn hiện "Sẵn sàng" và ô chọn đầu dòng không bị khóa.


![Tiêu đề trang chi tiết hóa đơn với nhãn trạng thái Sẵn sàng được đánh dấu](/static/img/aka-payment-latest-invoices-invoice-ready.webp)

Hóa đơn tự đi qua các trạng thái Đã nhận → Đang phân loại → Đang đọc → Đang tra cứu (chỉ khi nguồn bật Kiểm tra trên Cổng HĐĐT) → Sẵn sàng, không cần ai thao tác. Nếu dừng ở "Cần nhập tay", "Gián đoạn" hoặc "Bị từ chối" thì phải xử lý thủ công (nhập tay, **Thử lại** hoặc **Ghi đè**) mới chuyển sang Sẵn sàng.


## Cách khắc phục

- [Xem kết quả kiểm tra và xử lý hóa đơn bị dừng](../../guides/invoices/how-to/review-check.md) — Mở hóa đơn, xem bước kiểm tra nào dừng; bấm Thử lại khi Gián đoạn, hoặc nhập tay thông tin hóa đơn rồi Lưu khi Cần nhập tay.
- [Ghi đè kết quả kiểm tra hóa đơn](../../guides/invoices/how-to/overrule-check.md) — Trên hóa đơn Bị từ chối hoặc Gián đoạn, bấm Ghi đè, nhập lý do (không bắt buộc) và xác nhận; hóa đơn đi tiếp, người ghi đè và lý do được lưu.

## Được dùng trong các hướng dẫn

- [Chọn hóa đơn và tạo đề nghị thanh toán](../../guides/invoices/how-to/create-request.md) — Tích các hóa đơn Sẵn sàng ở Quản lý hóa đơn, bấm Tạo ĐNTT, chọn Loại yêu cầu và bấm Tạo ĐNTT; mỗi hóa đơn thành một khoản chi trong bản nháp.
- [Ghi đè kết quả kiểm tra hóa đơn](../../guides/invoices/how-to/overrule-check.md) — Trên hóa đơn Bị từ chối hoặc Gián đoạn, bấm Ghi đè, nhập lý do (không bắt buộc) và xác nhận; hóa đơn đi tiếp, người ghi đè và lý do được lưu.
- [Xem kết quả kiểm tra và xử lý hóa đơn bị dừng](../../guides/invoices/how-to/review-check.md) — Mở hóa đơn, xem bước kiểm tra nào dừng; bấm Thử lại khi Gián đoạn, hoặc nhập tay thông tin hóa đơn rồi Lưu khi Cần nhập tay.
