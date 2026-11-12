---
title: "Ghi đè kết quả kiểm tra hóa đơn"
description: "Trên hóa đơn Bị từ chối hoặc Gián đoạn, bấm Ghi đè, nhập lý do (không bắt buộc) và xác nhận; hóa đơn đi tiếp, người ghi đè và lý do được lưu."
id: overrule-check
sidebar_label: Ghi đè kết quả kiểm tra hóa đơn
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Ghi đè kết quả kiểm tra hóa đơn

Trên hóa đơn Bị từ chối hoặc Gián đoạn, bấm Ghi đè, nhập lý do (không bắt buộc) và xác nhận; hóa đơn đi tiếp, người ghi đè và lý do được lưu.

## Trước khi bắt đầu

- **[Ai thấy và thao tác được hóa đơn đầu vào](../../../reference/invoices/access.md)**\
  Hóa đơn thuộc đơn vị của người tải lên; đơn vị đó và các đơn vị cấp trên thấy được. Quản trị viên và người vận hành thấy mọi đơn vị.


## Các bước

1. Ở **Quản lý hóa đơn**, mở hóa đơn có trạng thái **Bị từ chối** hoặc **Gián đoạn**.
2. Trong khung kiểm tra, bấm **Ghi đè**. Hộp thoại **Ghi đè kết quả kiểm tra** mở ra.
3. Nhập **Lý do (không bắt buộc)**, tối đa 500 ký tự.
4. Bấm **Ghi đè**. Khung kiểm tra hiện nhãn **Đã ghi đè** "bởi … lúc …" và lý do; danh sách cũng có nhãn Đã ghi đè.
5. Xem trạng thái mới: nếu lý do là "Không phải hóa đơn" hoặc dừng ở bước phân loại, hóa đơn được đọc tiếp (Đang đọc); nếu lý do là "Không hợp lệ trên cổng thuế" hoặc dừng ở bước tra cứu, hóa đơn thành **Sẵn sàng**; nếu dừng ở bước đọc, hóa đơn thành **Cần nhập tay**, nhập tay theo [Xem kết quả kiểm tra và xử lý hóa đơn bị dừng](review-check.md).
6. Sau khi ghi đè "Không phải hóa đơn", hệ thống đọc tệp như một hóa đơn; nếu không đọc được gì, hóa đơn vẫn có thể thành **Sẵn sàng** với **Thông tin hóa đơn** trống. Kiểm tra thẻ này, điền các trường rồi bấm **Lưu** trước khi tạo đề nghị.

## Xử lý lỗi

- Người dùng xem được hóa đơn nào thì ghi đè được hóa đơn đó, không cần quyền riêng. Xem [Ai thấy và thao tác được hóa đơn đầu vào](../../../reference/invoices/access.md).
- Nút Ghi đè chỉ có khi hóa đơn Bị từ chối hoặc Gián đoạn; ở trạng thái khác thao tác bị từ chối và trang tải lại ("Hóa đơn vừa thay đổi trạng thái. Đã tải lại.").


## Kết quả

- [Hóa đơn ở trạng thái Sẵn sàng](../../../troubleshooting/invoices/invoice-ready.md) — Hóa đơn đã qua các bước kiểm tra (hoặc được ghi đè, nhập tay) và ở trạng thái Sẵn sàng, chọn được để tạo ĐNTT.

## Được dùng trong các hướng dẫn

- [Xử lý hóa đơn bị từ chối, gián đoạn hoặc cần nhập tay](../review-check.md) — Người dùng muốn biết vì sao hóa đơn chưa Sẵn sàng và xử lý: thử lại, nhập tay thông tin, hoặc ghi đè kết quả kiểm tra.
- [Xem kết quả kiểm tra và xử lý hóa đơn bị dừng](review-check.md) — Mở hóa đơn, xem bước kiểm tra nào dừng; bấm Thử lại khi Gián đoạn, hoặc nhập tay thông tin hóa đơn rồi Lưu khi Cần nhập tay.
- [Hóa đơn ở trạng thái Sẵn sàng](../../../troubleshooting/invoices/invoice-ready.md) — Hóa đơn đã qua các bước kiểm tra (hoặc được ghi đè, nhập tay) và ở trạng thái Sẵn sàng, chọn được để tạo ĐNTT.
