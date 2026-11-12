---
title: "Định dạng, dung lượng và trùng lặp khi tải hóa đơn"
description: "Nhận XML, PDF, ảnh PNG/JPEG/HEIC/HEIF (hoặc zip chứa chúng), tối đa 200 tệp, mỗi tệp 10 MB mặc định; tệp trùng trong đơn vị không tải lên được."
id: file-types
sidebar_label: Định dạng, dung lượng và trùng lặp khi tải hóa đơn
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Định dạng, dung lượng và trùng lặp khi tải hóa đơn

Nhận XML, PDF, ảnh PNG/JPEG/HEIC/HEIF (hoặc zip chứa chúng), tối đa 200 tệp, mỗi tệp 10 MB mặc định; tệp trùng trong đơn vị không tải lên được.

**Mức độ yêu cầu:** Bắt buộc


- **Định dạng**: .xml, .pdf, .png, .jpg, .jpeg, .heic, .heif, hoặc tệp .zip chứa các tệp đó (zip được mở ra ngay trong hộp thoại). GIF và WebP luôn không được nhận. Quản trị viên có thể thu hẹp định dạng ở **Định dạng chấp nhận** (XML, PDF, Ảnh) của nguồn **Người dùng tải lên**. Sai định dạng: "Định dạng không hỗ trợ. Hãy dùng XML, PDF, PNG, JPEG, HEIC hoặc HEIF."
- **Dung lượng**: mỗi tệp tối đa 10 MB theo mặc định; quản trị viên chọn 5, 10 hoặc 15 MB ở **Dung lượng tối đa mỗi tệp**. Vượt: "Kích thước vượt quá N MB".
- **Số lượng**: tối đa 200 tệp mỗi lần; tệp thừa báo "Vượt quá giới hạn 200 tệp".
- **Trùng lặp**: tệp giống hệt một hóa đơn mà đơn vị đã có thì không được thêm; hộp thoại báo "Đã có trong hộp thư" kèm nút **Xem** mở hóa đơn cũ, và bản tải lên trùng bị loại bỏ.
- **Nguồn tắt**: khi nguồn **Người dùng tải lên** đang tắt, không tải lên được và hệ thống báo "Nguồn tải lên đang tắt. Bật lại trong Quản trị › Hóa đơn đầu vào".


## Được dùng trong các hướng dẫn

- [Tải tệp hóa đơn lên Quản lý hóa đơn](../../guides/invoices/how-to/upload.md) — Ở Quản lý hóa đơn, bấm Tải lên trên thẻ Người dùng tải lên, chọn tệp XML/PDF/ảnh hoặc zip rồi bấm Tải lên; hệ thống tự đọc từng hóa đơn.
