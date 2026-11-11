---
title: "Điều kiện tạo ĐNTT từ hóa đơn"
description: "Chỉ chọn được hóa đơn Sẵn sàng, tối đa 50 hóa đơn mỗi đề nghị, và chỉ với loại đề nghị có dùng hóa đơn."
id: create-request-rules
sidebar_label: Điều kiện tạo ĐNTT từ hóa đơn
sidebar_position: 3
---

# Điều kiện tạo ĐNTT từ hóa đơn

Chỉ chọn được hóa đơn Sẵn sàng, tối đa 50 hóa đơn mỗi đề nghị, và chỉ với loại đề nghị có dùng hóa đơn.

**Mức độ yêu cầu:** Bắt buộc


- Chỉ hóa đơn ở trạng thái **Sẵn sàng** mới có ô chọn; hóa đơn đã nằm trong một ĐNTT khác (ví dụ đề nghị bị từ chối) vẫn chọn lại được nếu đang Sẵn sàng. Nếu khi gửi có hóa đơn chưa sẵn sàng, hệ thống báo "Có hóa đơn chưa đọc xong".
- Tối đa 50 hóa đơn mỗi đề nghị; đủ 50 thì các ô còn lại bị khóa.
- Hộp thoại **Chọn loại yêu cầu** chỉ liệt kê loại đề nghị đã phát hành có dùng hóa đơn trong bảng kê chi phí. Không có loại nào: nút **Tạo ĐNTT** bị khóa với gợi ý "Không có loại yêu cầu nào hỗ trợ hóa đơn".
- Không tạo được ĐNTT với hóa đơn đang nằm trong một đề nghị còn hiệu lực; hệ thống báo "Hóa đơn đã nằm trong ĐNTT …".
- Hóa đơn đã nằm trong ĐNTT thì phần thông tin hóa đơn bị khóa, không sửa được ("Hóa đơn đã nằm trong ĐNTT nên không thể sửa.").


## Được dùng trong các hướng dẫn

- [Chọn hóa đơn và tạo đề nghị thanh toán](../../guides/invoices/how-to/create-request.md) — Tích các hóa đơn Sẵn sàng ở Quản lý hóa đơn, bấm Tạo ĐNTT, chọn Loại yêu cầu và bấm Tạo ĐNTT; mỗi hóa đơn thành một khoản chi trong bản nháp.
- [Xem kết quả kiểm tra và xử lý hóa đơn bị dừng](../../guides/invoices/how-to/review-check.md) — Mở hóa đơn, xem bước kiểm tra nào dừng; bấm Thử lại khi Gián đoạn, hoặc nhập tay thông tin hóa đơn rồi Lưu khi Cần nhập tay.
