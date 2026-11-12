---
title: "Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)"
description: "Chọn OAuth - Microsoft 365, OAuth - Google hoặc OAuth - máy chủ định danh khác, làm theo Các bước thiết lập, nhập Client ID, Client secret; Google cần Đăng nhập bằng Google."
id: mailbox-oauth
sidebar_label: Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)
sidebar_position: 7
displayed_sidebar: akaPaymentSidebar
---

# Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)

Chọn OAuth - Microsoft 365, OAuth - Google hoặc OAuth - máy chủ định danh khác, làm theo Các bước thiết lập, nhập Client ID, Client secret; Google cần Đăng nhập bằng Google.

**Quyền cần có:** admin


## Các bước

1. Ở **Cách đăng nhập**, chọn **OAuth - Microsoft 365**, **OAuth - Google** hoặc **OAuth - máy chủ định danh khác**. Hộp thoại hiện **Các bước thiết lập** cho lựa chọn đó.
2. Tạo OAuth client ở phía nhà cung cấp theo **Các bước thiết lập**: Microsoft Entra (App registrations, quyền IMAP.AccessAsApp, cấp quyền hòm thư trong Exchange Online); Google Cloud Console (OAuth client loại Web application, thêm **Redirect URL** hiển thị trong hộp thoại vào authorized redirect URIs); máy chủ khác (client theo luồng client-credentials có quyền đọc hòm thư qua IMAP).
3. Nhập thông tin client: Microsoft 365 cần **Directory (tenant) ID**, **Client ID**, **Client secret** (nếu ô **Máy chủ IMAP** còn trống thì tự điền outlook.office365.com, cổng 993); Google cần **Client ID**, **Client secret** (máy chủ imap.gmail.com cố định, ô máy chủ và cổng bị ẩn); máy chủ khác cần **Token URL** (bắt đầu bằng https://), **Client ID**, **Client secret**, **Scope (không bắt buộc)** cùng **Máy chủ IMAP** và **Cổng** ở đầu hộp thoại.
4. Riêng Google: bấm **Đăng nhập bằng Google** (chỉ bấm được khi đã có địa chỉ email, Client ID và Client secret), đăng nhập đúng tài khoản của địa chỉ email và đồng ý cấp quyền trong cửa sổ bật lên, chờ "Đã đăng nhập bằng Google". Chưa đăng nhập thì chưa bấm được **Kiểm tra kết nối** và **Thêm**.

## Xử lý lỗi

- "Trình duyệt đã chặn cửa sổ đăng nhập.": bấm **Mở trang đăng nhập** hoặc cho phép cửa sổ bật lên.
- "Phiên đăng nhập Google được thực hiện cho địa chỉ email khác.": đăng nhập lại bằng đúng tài khoản của địa chỉ đã nhập.
- "Google không trả về token dài hạn…": gỡ quyền của ứng dụng trong tài khoản Google rồi đăng nhập lại.
- "Google từ chối client ID hoặc client secret.": kiểm tra lại thông tin client trong Google Cloud Console.
- "Token URL này không được phép.": dùng Token URL HTTPS khác.
- Khi sửa: để trống **Client secret** thì giữ secret đã lưu, trừ khi đổi Client ID, Token URL hoặc máy chủ; với Google, đổi địa chỉ email hoặc Client ID thì phải bấm **Đăng nhập bằng Google** lại.


## Tính năng sử dụng

- [Quản trị nguồn hóa đơn đầu vào](../features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.

## Được dùng trong các hướng dẫn

- [Thêm hòm thư nhận hóa đơn qua IMAP](connect-mailbox.md) — Chọn đơn vị, bấm Thêm hòm thư ở thẻ Email, nhập địa chỉ, chọn cách đăng nhập (mật khẩu ứng dụng hoặc OAuth), Kiểm tra kết nối rồi Thêm.
