---
title: "Bật/tắt nguồn nhận hóa đơn đầu vào"
description: "Quản trị viên muốn chọn nguồn nào đưa hóa đơn vào Quản lý hóa đơn (tải lên, email, Cổng HĐĐT, AkaConnect, AkaPay) và đặt định dạng, tần suất, kiểm tra trên Cổng HĐĐT."
id: configure
sidebar_label: Bật/tắt nguồn nhận hóa đơn đầu vào
sidebar_position: 2
---

# Bật/tắt nguồn nhận hóa đơn đầu vào

Quản trị viên muốn chọn nguồn nào đưa hóa đơn vào Quản lý hóa đơn (tải lên, email, Cổng HĐĐT, AkaConnect, AkaPay) và đặt định dạng, tần suất, kiểm tra trên Cổng HĐĐT.

**Khi nào sử dụng:**

- Người dùng báo không tải hóa đơn lên được vì nguồn tải lên đang tắt.
- Quản trị viên muốn hóa đơn được tra cứu trên Cổng HĐĐT ngay khi nhận.
- Quản trị viên muốn chọn kênh nhận hóa đơn và tần suất đồng bộ.

**Quyền cần có:** admin


Trang Quản trị → Hóa đơn đầu vào quyết định nguồn nào đang bật và mỗi nguồn nhận tệp gì, đồng bộ bao lâu một lần.


## Các cách thực hiện

- [Bật/tắt nguồn hóa đơn và lưu thiết lập](how-to/configure.md) — Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi.

## Các bước

[Bật/tắt nguồn hóa đơn và lưu thiết lập](how-to/configure.md)

Điều kiện khả dụng: kiểm tra yêu cầu về gói và quyền

1. [Bật/tắt nguồn hóa đơn và lưu thiết lập](how-to/configure.md)
   1. Mở **Quản trị** → **Hóa đơn đầu vào** (trên máy tính).
   2. Ở ô **Đơn vị**, để **Tất cả đơn vị** để sửa mặc định của tổ chức, hoặc chọn một đơn vị để đặt riêng tần suất và lịch tải cho đơn vị đó.
   3. Bật hoặc tắt công tắc của từng thẻ nguồn (nhãn **Đang bật** / **Đã tắt**): **Người dùng tải lên**, **Email**, **Tải định kỳ từ TCT**, **Kết nối AkaConnect**, **Tài khoản AkaPay**.
   4. Với các nguồn nhận tệp (Người dùng tải lên, Email, AkaConnect), chọn **Định dạng chấp nhận** (XML, PDF, Ảnh) và **Dung lượng tối đa mỗi tệp** (5, 10 hoặc 15 MB).
   5. Bật **Kiểm tra trên Cổng HĐĐT** ("Tự động kiểm tra sau khi tải lên" / "sau khi nhận") ở các nguồn cần tra cứu tình trạng hóa đơn và người bán ngay khi nhận.
   6. Chọn **Tần suất đồng bộ** cho Email (Thời gian thực, Mỗi 5/15/30 phút, Mỗi giờ), AkaConnect và AkaPay (Mỗi 5/15/30 phút, Mỗi giờ; không có Thời gian thực) và **Lịch tải** cho **Tải định kỳ từ TCT**. Ở một đơn vị, bấm **Dùng mặc định** để bỏ giá trị riêng.
   7. Bấm **Lưu thay đổi**. Nếu đang chọn một đơn vị mà đã đổi mục áp dụng cho cả tổ chức, hộp thoại **Áp dụng cho tất cả đơn vị?** liệt kê thay đổi; bấm **Lưu và áp dụng cho tất cả**. Thông báo "Đã lưu cấu hình nguồn hóa đơn".

## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Nếu có sự cố

### [Bật/tắt nguồn hóa đơn và lưu thiết lập](how-to/configure.md)

- Mục nào chung cho tổ chức, mục nào riêng đơn vị: [Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../reference/invoice-sources/unit-scope.md).
- Bật nguồn chưa đủ để nhận hóa đơn qua email, Cổng HĐĐT, AkaConnect, AkaPay: còn phải khai báo hòm thư hoặc tài khoản, xem [Thêm hòm thư nhận hóa đơn qua IMAP](how-to/connect-mailbox.md), [Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế](how-to/connect-tax-portal.md), [Kết nối hòm thư Gmail/Outlook qua AkaConnect](how-to/connect-akaconnect.md), [Kết nối tài khoản AkaPay bằng API key](how-to/connect-akapay.md).
