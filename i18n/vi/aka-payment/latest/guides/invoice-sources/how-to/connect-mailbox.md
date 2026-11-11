---
title: "Thêm hòm thư nhận hóa đơn qua IMAP"
description: "Chọn đơn vị, bấm Thêm hòm thư ở thẻ Email, nhập địa chỉ, chọn cách đăng nhập (mật khẩu ứng dụng hoặc OAuth), Kiểm tra kết nối rồi Thêm."
id: connect-mailbox
sidebar_label: Thêm hòm thư nhận hóa đơn qua IMAP
sidebar_position: 5
---

# Thêm hòm thư nhận hóa đơn qua IMAP

Chọn đơn vị, bấm Thêm hòm thư ở thẻ Email, nhập địa chỉ, chọn cách đăng nhập (mật khẩu ứng dụng hoặc OAuth), Kiểm tra kết nối rồi Thêm.

**Quyền cần có:** admin


## Các bước

1. Mở **Quản trị** → **Hóa đơn đầu vào**; ở ô **Đơn vị**, chọn đơn vị sẽ nhận hóa đơn từ hòm thư này.
2. Ở thẻ **Email**, nếu đang **Đã tắt** thì bật công tắc (phần thiết lập và danh sách hòm thư chỉ hiện khi bật), chọn **Tần suất đồng bộ** (Thời gian thực, Mỗi 5/15/30 phút, Mỗi giờ), rồi bấm **Lưu thay đổi** ở đầu trang (công tắc áp dụng cho tất cả đơn vị).
3. Dưới **Hòm thư nhận hóa đơn**, bấm **Thêm hòm thư**. Hộp thoại **Thêm hòm thư nhận hóa đơn** mở ra; nhập **Địa chỉ email**.
4. Hòm thư đăng nhập IMAP bằng cách nào?
5. Bấm **Kiểm tra kết nối** và chờ "Kết nối thành công" (không bắt buộc nhưng nên làm; nút chỉ bấm được khi đã điền đủ thông tin).
6. Bấm **Thêm**. Hòm thư hiện trong danh sách với trạng thái (Đã kết nối, Lỗi xác thực, Không kết nối được, Chưa đồng bộ); nút bút chì (**Sửa**) và thùng rác (**Gỡ**) ở cuối dòng.
7. Sau khi thêm, hệ thống quét hòm thư theo **Tần suất đồng bộ**. Lần quét đầu chỉ ghi lại vị trí hiện tại của hòm thư: thư đã có trước đó không được nhập, chỉ thư đến sau mới được đọc. Mỗi tệp đính kèm có định dạng được nhận (XML, PDF, ảnh) thành một hóa đơn nguồn **Email** trong **Quản lý hóa đơn**, thuộc đơn vị của hòm thư, rồi đi qua các bước kiểm tra như hóa đơn tải lên.
8. Muốn quét ngay không chờ lịch, quản trị viên hoặc người vận hành bấm **Kiểm tra email ngay** trên thẻ **Email** ở đầu **Quản lý hóa đơn**. Khi xong, thẻ báo "Hoàn tất: đã đọc N thư, thêm M tệp đính kèm."

Unverified: bước 7–8 mô tả tính năng chưa phát hành (tính đến ngày 2026-11-09); hiện hóa đơn qua email chưa về danh sách. Bản sắp tới cũng bỏ "Thời gian thực" khỏi tần suất Email và đổi hộp thoại thêm hòm thư (chọn Microsoft / Google / OAuth, nhập JSON ứng dụng, "Đăng nhập bằng Microsoft"); bước 2–6 sẽ được cập nhật khi tính năng phát hành.

## Xử lý lỗi

- "Lỗi xác thực": sai mật khẩu, Client ID hoặc Client secret. "Không kết nối được": sai máy chủ hoặc cổng. "Máy chủ IMAP không được phép" / "Máy chủ IMAP này không được phép.": máy chủ bị hệ thống chặn (ví dụ địa chỉ nội bộ), dùng máy chủ khác.
- "Hòm thư này đã được khai báo.": địa chỉ đã có trong danh sách.
- "Chưa cấu hình khóa mã hóa mật khẩu. Liên hệ quản trị hệ thống.": cần đội vận hành hệ thống cấu hình, quản trị viên tổ chức không tự sửa được.
- Không thấy nút Thêm hòm thư mà thấy "Chọn một đơn vị ở trên để thêm.": chọn một đơn vị ở bước 1.


## Chọn phương thức

### Hòm thư đăng nhập IMAP bằng cách nào?

- **password**: Máy chủ thư cho đăng nhập IMAP bằng mật khẩu hoặc mật khẩu ứng dụng — [Đăng nhập hòm thư bằng mật khẩu ứng dụng](mailbox-password.md)
- **oauth**: Hòm thư Microsoft 365, Gmail (Google Workspace) hoặc máy chủ định danh riêng chỉ cho đăng nhập OAuth — [Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)](mailbox-oauth.md)

## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Tính năng sử dụng

- [Quản trị nguồn hóa đơn đầu vào](../features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.

## Các phương thức khả dụng

- [Đăng nhập hòm thư bằng mật khẩu ứng dụng](mailbox-password.md) — Trong hộp thoại thêm hòm thư, chọn Cách đăng nhập: Mật khẩu ứng dụng, nhập máy chủ IMAP, cổng, tên đăng nhập và mật khẩu ứng dụng.
- [Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)](mailbox-oauth.md) — Chọn OAuth - Microsoft 365, OAuth - Google hoặc OAuth - máy chủ định danh khác, làm theo Các bước thiết lập, nhập Client ID, Client secret; Google cần Đăng nhập bằng Google.

## Được dùng trong các hướng dẫn

- [Nhận hóa đơn qua hòm thư email (IMAP)](../connect-mailbox.md) — Quản trị viên muốn hệ thống tự đọc hóa đơn đính kèm trong hòm thư nhận hóa đơn của đơn vị, qua IMAP bằng mật khẩu ứng dụng hoặc OAuth.
- [Bật/tắt nguồn hóa đơn và lưu thiết lập](configure.md) — Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi.
