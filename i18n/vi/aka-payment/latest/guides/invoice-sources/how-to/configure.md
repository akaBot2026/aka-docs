---
title: "Bật/tắt nguồn hóa đơn và lưu thiết lập"
description: "Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi."
id: configure
sidebar_label: Bật/tắt nguồn hóa đơn và lưu thiết lập
sidebar_position: 2
---

# Bật/tắt nguồn hóa đơn và lưu thiết lập

Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi.

**Quyền cần có:** admin


## Các bước

1. Mở **Quản trị** → **Hóa đơn đầu vào** (trên máy tính).
2. Ở ô **Đơn vị**, để **Tất cả đơn vị** để sửa mặc định của tổ chức, hoặc chọn một đơn vị để đặt riêng tần suất và lịch tải cho đơn vị đó.
3. Bật hoặc tắt công tắc của từng thẻ nguồn (nhãn **Đang bật** / **Đã tắt**): **Người dùng tải lên**, **Email**, **Tải định kỳ từ TCT**, **Kết nối AkaConnect**, **Tài khoản AkaPay**.
4. Với các nguồn nhận tệp (Người dùng tải lên, Email, AkaConnect), chọn **Định dạng chấp nhận** (XML, PDF, Ảnh) và **Dung lượng tối đa mỗi tệp** (5, 10 hoặc 15 MB).
5. Bật **Kiểm tra trên Cổng HĐĐT** ("Tự động kiểm tra sau khi tải lên" / "sau khi nhận") ở các nguồn cần tra cứu tình trạng hóa đơn và người bán ngay khi nhận.
6. Chọn **Tần suất đồng bộ** cho Email (Thời gian thực, Mỗi 5/15/30 phút, Mỗi giờ), AkaConnect và AkaPay (Mỗi 5/15/30 phút, Mỗi giờ; không có Thời gian thực) và **Lịch tải** cho **Tải định kỳ từ TCT**. Ở một đơn vị, bấm **Dùng mặc định** để bỏ giá trị riêng.
7. Bấm **Lưu thay đổi**. Nếu đang chọn một đơn vị mà đã đổi mục áp dụng cho cả tổ chức, hộp thoại **Áp dụng cho tất cả đơn vị?** liệt kê thay đổi; bấm **Lưu và áp dụng cho tất cả**. Thông báo "Đã lưu cấu hình nguồn hóa đơn".

## Xử lý lỗi

- Mục nào chung cho tổ chức, mục nào riêng đơn vị: [Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../../reference/invoice-sources/unit-scope.md).
- Bật nguồn chưa đủ để nhận hóa đơn qua email, Cổng HĐĐT, AkaConnect, AkaPay: còn phải khai báo hòm thư hoặc tài khoản, xem [Thêm hòm thư nhận hóa đơn qua IMAP](connect-mailbox.md), [Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế](connect-tax-portal.md), [Kết nối hòm thư Gmail/Outlook qua AkaConnect](connect-akaconnect.md), [Kết nối tài khoản AkaPay bằng API key](connect-akapay.md).


## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Kết quả

- [Nguồn Người dùng tải lên đang bật](../../../troubleshooting/invoice-sources/upload-enabled.md) — Nguồn hóa đơn Người dùng tải lên đang bật, nên người dùng tải được tệp hóa đơn lên trang Quản lý hóa đơn.

## Tính năng sử dụng

- [Quản trị nguồn hóa đơn đầu vào](../features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.

## Được dùng trong các hướng dẫn

- [Bật/tắt nguồn nhận hóa đơn đầu vào](../configure.md) — Quản trị viên muốn chọn nguồn nào đưa hóa đơn vào Quản lý hóa đơn (tải lên, email, Cổng HĐĐT, AkaConnect, AkaPay) và đặt định dạng, tần suất, kiểm tra trên Cổng HĐĐT.
- [Tải tệp hóa đơn lên Quản lý hóa đơn](../../invoices/how-to/upload.md) — Ở Quản lý hóa đơn, bấm Tải lên trên thẻ Người dùng tải lên, chọn tệp XML/PDF/ảnh hoặc zip rồi bấm Tải lên; hệ thống tự đọc từng hóa đơn.
- [Nguồn Người dùng tải lên đang bật](../../../troubleshooting/invoice-sources/upload-enabled.md) — Nguồn hóa đơn Người dùng tải lên đang bật, nên người dùng tải được tệp hóa đơn lên trang Quản lý hóa đơn.
