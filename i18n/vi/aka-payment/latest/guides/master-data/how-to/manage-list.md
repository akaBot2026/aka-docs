---
title: "Thêm hoặc sửa một bản ghi danh mục"
description: "Mở danh mục (Cấu hình → Danh mục dùng chung, hoặc Quản lý ngân sách → Khoản mục ngân sách / Dự án), bấm nút Thêm hoặc Sửa bản ghi ở dòng, rồi Lưu."
id: manage-list
sidebar_label: Thêm hoặc sửa một bản ghi danh mục
sidebar_position: 2
---

# Thêm hoặc sửa một bản ghi danh mục

Mở danh mục (Cấu hình → Danh mục dùng chung, hoặc Quản lý ngân sách → Khoản mục ngân sách / Dự án), bấm nút Thêm hoặc Sửa bản ghi ở dòng, rồi Lưu.

## Trước khi bắt đầu

- **[Quy tắc trùng trong danh mục dùng chung](../../../reference/master-data/duplicates.md)**\
  Không tạo được nhà cung cấp trùng mã số thuế, tài khoản thụ hưởng trùng số tài khoản và ngân hàng, hay loại chi phí trùng mã; hệ thống chỉ ra bản ghi đã có.


## Các bước

1. Mở danh mục: ở thanh bên, mục **Cấu hình** → **Danh mục dùng chung** rồi chọn danh mục (1) (Nhà cung cấp, Ngân hàng, Loại chi phí, Tài khoản thụ hưởng…); riêng **Khoản mục ngân sách** và **Dự án** nằm ở mục **Quản lý ngân sách**.

   ![Danh mục Nhà cung cấp: (1) mục Nhà cung cấp trong Danh mục dùng chung ở thanh bên, (2) ô Tìm kiếm, (3) nút Thêm nhà cung cấp cạnh mũi tên thao tác; bảng Tên, Mã số thuế, Điện thoại, Địa chỉ, Trạng thái](/static/img/aka-payment-latest-master-data-supplier-list.webp)

2. Dùng ô **Tìm kiếm** (2) để tìm bản ghi đã có (Nhà cung cấp và Tài khoản thụ hưởng cần gõ vài ký tự; Tài khoản thụ hưởng lọc thêm theo loại).
3. Bấm nút **Thêm …** (3) trên thanh công cụ (ví dụ **Thêm nhà cung cấp**: Tên, Mã số thuế, Địa chỉ, Điện thoại, Email và **Thêm tài khoản mới** cho tài khoản thụ hưởng; **Thêm khoản mục** / **Thêm dự án**: Tên, Mô tả), hoặc biểu tượng bút **Sửa bản ghi** ở dòng; bấm **Lưu**.
4. Để bỏ khỏi danh sách chọn mà không xóa, dùng **Ngừng sử dụng** ở dòng (và **Sử dụng lại** để bật lại); loại chứng từ Hóa đơn không ngừng sử dụng được.
5. Menu mũi tên cạnh nút Thêm có **Xuất Excel**; tùy danh mục còn có **Nhập từ Excel** (tài khoản thụ hưởng của nhân viên), **Nhập loại tài liệu** (Loại chứng từ, từ tệp JSON) và **Đồng bộ dữ liệu hệ thống** (các danh mục hệ thống như tiền tệ, ngân hàng, loại thuế).

## Xử lý lỗi

- Trùng mã số thuế, tài khoản hoặc mã loại chi phí: xem [Quy tắc trùng trong danh mục dùng chung](../../../reference/master-data/duplicates.md).


## Được dùng trong các hướng dẫn

- [Cập nhật danh mục dùng chung](../manage-list.md) — Quản trị viên muốn thêm hoặc sửa bản ghi danh mục: nhà cung cấp, ngân hàng, loại chi phí, hay khoản mục ngân sách và dự án.
- [Phân bổ ngân sách cho một kỳ](../../budget/how-to/allocate.md) — Ở Quản lý ngân sách → Phân bổ ngân sách chọn năm, tháng, đơn vị (và dự án), bấm Phân bổ để nhập số tiền theo khoản mục và đơn vị.
