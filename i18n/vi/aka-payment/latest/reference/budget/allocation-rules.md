---
title: "Quy tắc nhập phân bổ ngân sách"
description: "Số tiền không âm; mỗi tổ hợp chỉ một dòng trong một lô; một lô tối đa 5000 dòng; ghi chú tối đa 1024 ký tự."
id: allocation-rules
sidebar_label: Quy tắc nhập phân bổ ngân sách
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Quy tắc nhập phân bổ ngân sách

Số tiền không âm; mỗi tổ hợp chỉ một dòng trong một lô; một lô tối đa 5000 dòng; ghi chú tối đa 1024 ký tự.

**Mức độ yêu cầu:** Bắt buộc


Số tiền phải là số không âm. Khi bật phân bổ theo dự án, mỗi dòng phải có dự án (ô Dự án bắt buộc trong bảng "Phân bổ mới"); dòng thiếu một thông tin phân bổ đang bật (ví dụ Dự án) không lưu được. Hai dòng cùng tổ hợp (kỳ, khoản mục, đơn vị, dự án) trong một lô thì không lưu được. Một lô tối đa 5000 dòng. Khi nhập Excel, kỳ có dạng MM-YYYY và ghi chú tối đa 1024 ký tự; nút "Áp dụng N dòng" chỉ dùng được khi không còn dòng lỗi. Cũng không tạo được phân bổ trùng tổ hợp đã có; hệ thống báo phân bổ đã tồn tại.


## Được dùng trong các hướng dẫn

- [Phân bổ ngân sách cho một kỳ](../../guides/budget/how-to/allocate.md) — Ở Quản lý ngân sách → Phân bổ ngân sách chọn năm, tháng, đơn vị (và dự án), bấm Phân bổ để nhập số tiền theo khoản mục và đơn vị.
- [Nhập phân bổ ngân sách từ Excel](../../guides/budget/how-to/import-allocations.md) — Ở Phân bổ ngân sách, tải tệp mẫu, điền, bấm Import từ Excel, xem trước rồi Áp dụng.
