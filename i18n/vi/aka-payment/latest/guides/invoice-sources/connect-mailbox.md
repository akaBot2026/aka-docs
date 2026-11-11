---
title: "Nhận hóa đơn qua hòm thư email (IMAP)"
description: "Quản trị viên muốn hệ thống tự đọc hóa đơn đính kèm trong hòm thư nhận hóa đơn của đơn vị, qua IMAP bằng mật khẩu ứng dụng hoặc OAuth."
id: connect-mailbox
sidebar_label: Nhận hóa đơn qua hòm thư email (IMAP)
sidebar_position: 5
---

# Nhận hóa đơn qua hòm thư email (IMAP)

Quản trị viên muốn hệ thống tự đọc hóa đơn đính kèm trong hòm thư nhận hóa đơn của đơn vị, qua IMAP bằng mật khẩu ứng dụng hoặc OAuth.

**Khi nào sử dụng:**

- Nhà cung cấp gửi hóa đơn điện tử về một địa chỉ email chung của công ty.
- Quản trị viên muốn hóa đơn trong email tự vào Quản lý hóa đơn, không cần ai tải lên.
- Quản trị viên muốn lấy tệp hóa đơn đính kèm từ hòm thư công ty qua IMAP.

**Quyền cần có:** admin


Mỗi hòm thư thuộc một đơn vị; hóa đơn đính kèm nhận từ hòm thư được gán cho đơn vị đó. Hòm thư Gmail hoặc Outlook cũng có thể kết nối qua AkaConnect ([Nhận hóa đơn từ Gmail/Outlook qua AkaConnect](connect-akaconnect.md)).

Chỉ thư đến sau lần quét đầu tiên mới được đọc; thư cũ trong hòm thư không được nhập.

Unverified: việc đọc thư và đưa tệp đính kèm vào Quản lý hóa đơn chưa được phát hành (tính đến 2026-11-09); hiện hòm thư lưu và kiểm tra kết nối được nhưng hóa đơn chưa về danh sách.


## Các cách thực hiện

- [Thêm hòm thư nhận hóa đơn qua IMAP](how-to/connect-mailbox.md) — Chọn đơn vị, bấm Thêm hòm thư ở thẻ Email, nhập địa chỉ, chọn cách đăng nhập (mật khẩu ứng dụng hoặc OAuth), Kiểm tra kết nối rồi Thêm.

## Xem thêm

- [Nhận hóa đơn từ Gmail/Outlook qua AkaConnect](connect-akaconnect.md) — Quản trị viên muốn nhận hóa đơn đính kèm thư từ hòm thư Gmail hoặc Outlook đã kết nối qua AkaConnect, không cần khai báo IMAP.

## Được dùng trong các hướng dẫn

- [Quản trị nguồn hóa đơn đầu vào](features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.
- [Nhận hóa đơn từ Gmail/Outlook qua AkaConnect](connect-akaconnect.md) — Quản trị viên muốn nhận hóa đơn đính kèm thư từ hòm thư Gmail hoặc Outlook đã kết nối qua AkaConnect, không cần khai báo IMAP.

## Các bước

[Thêm hòm thư nhận hóa đơn qua IMAP](how-to/connect-mailbox.md)

Điều kiện khả dụng: kiểm tra yêu cầu về gói và quyền

1. [Thêm hòm thư nhận hóa đơn qua IMAP](how-to/connect-mailbox.md)
   1. Mở **Quản trị** → **Hóa đơn đầu vào**; ở ô **Đơn vị**, chọn đơn vị sẽ nhận hóa đơn từ hòm thư này.
   2. Ở thẻ **Email**, nếu đang **Đã tắt** thì bật công tắc (phần thiết lập và danh sách hòm thư chỉ hiện khi bật), chọn **Tần suất đồng bộ** (Thời gian thực, Mỗi 5/15/30 phút, Mỗi giờ), rồi bấm **Lưu thay đổi** ở đầu trang (công tắc áp dụng cho tất cả đơn vị).
   3. Dưới **Hòm thư nhận hóa đơn**, bấm **Thêm hòm thư**. Hộp thoại **Thêm hòm thư nhận hóa đơn** mở ra; nhập **Địa chỉ email**.
   4. Hòm thư đăng nhập IMAP bằng cách nào?
      - **password**: Máy chủ thư cho đăng nhập IMAP bằng mật khẩu hoặc mật khẩu ứng dụng — [Đăng nhập hòm thư bằng mật khẩu ứng dụng](how-to/mailbox-password.md); kiểm tra yêu cầu về gói và quyền
        - Lưu ý: [Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../reference/invoice-sources/unit-scope.md) — Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.
        1. [Đăng nhập hòm thư bằng mật khẩu ứng dụng](how-to/mailbox-password.md)
           1. Ở **Cách đăng nhập**, chọn **Mật khẩu ứng dụng** (lựa chọn mặc định khi thêm hòm thư mới).
           2. Ở hai ô ngay dưới **Địa chỉ email**, nhập **Máy chủ IMAP** (ví dụ imap.congty.vn) và kiểm tra **Cổng** (điền sẵn 993).
           3. Nhập **Tên đăng nhập** nếu khác địa chỉ email (để trống thì mặc định là địa chỉ email).
           4. Nhập **Mật khẩu ứng dụng** của hòm thư. Khi sửa hòm thư, để trống để giữ mật khẩu đã lưu; chỉ giữ được khi hòm thư vẫn đăng nhập bằng mật khẩu và không đổi máy chủ, nếu không hộp thoại báo "Nhập mật khẩu: không giữ được mật khẩu đã lưu khi đổi máy chủ."
      - **oauth**: Hòm thư Microsoft 365, Gmail (Google Workspace) hoặc máy chủ định danh riêng chỉ cho đăng nhập OAuth — [Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)](how-to/mailbox-oauth.md); kiểm tra yêu cầu về gói và quyền
        - Lưu ý: [Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../reference/invoice-sources/unit-scope.md) — Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.
        1. [Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)](how-to/mailbox-oauth.md)
           1. Ở **Cách đăng nhập**, chọn **OAuth - Microsoft 365**, **OAuth - Google** hoặc **OAuth - máy chủ định danh khác**. Hộp thoại hiện **Các bước thiết lập** cho lựa chọn đó.
           2. Tạo OAuth client ở phía nhà cung cấp theo **Các bước thiết lập**: Microsoft Entra (App registrations, quyền IMAP.AccessAsApp, cấp quyền hòm thư trong Exchange Online); Google Cloud Console (OAuth client loại Web application, thêm **Redirect URL** hiển thị trong hộp thoại vào authorized redirect URIs); máy chủ khác (client theo luồng client-credentials có quyền đọc hòm thư qua IMAP).
           3. Nhập thông tin client: Microsoft 365 cần **Directory (tenant) ID**, **Client ID**, **Client secret** (nếu ô **Máy chủ IMAP** còn trống thì tự điền outlook.office365.com, cổng 993); Google cần **Client ID**, **Client secret** (máy chủ imap.gmail.com cố định, ô máy chủ và cổng bị ẩn); máy chủ khác cần **Token URL** (bắt đầu bằng https://), **Client ID**, **Client secret**, **Scope (không bắt buộc)** cùng **Máy chủ IMAP** và **Cổng** ở đầu hộp thoại.
           4. Riêng Google: bấm **Đăng nhập bằng Google** (chỉ bấm được khi đã có địa chỉ email, Client ID và Client secret), đăng nhập đúng tài khoản của địa chỉ email và đồng ý cấp quyền trong cửa sổ bật lên, chờ "Đã đăng nhập bằng Google". Chưa đăng nhập thì chưa bấm được **Kiểm tra kết nối** và **Thêm**.
   5. Bấm **Kiểm tra kết nối** và chờ "Kết nối thành công" (không bắt buộc nhưng nên làm; nút chỉ bấm được khi đã điền đủ thông tin).
   6. Bấm **Thêm**. Hòm thư hiện trong danh sách với trạng thái (Đã kết nối, Lỗi xác thực, Không kết nối được, Chưa đồng bộ); nút bút chì (**Sửa**) và thùng rác (**Gỡ**) ở cuối dòng.
   7. Sau khi thêm, hệ thống quét hòm thư theo **Tần suất đồng bộ**. Lần quét đầu chỉ ghi lại vị trí hiện tại của hòm thư: thư đã có trước đó không được nhập, chỉ thư đến sau mới được đọc. Mỗi tệp đính kèm có định dạng được nhận (XML, PDF, ảnh) thành một hóa đơn nguồn **Email** trong **Quản lý hóa đơn**, thuộc đơn vị của hòm thư, rồi đi qua các bước kiểm tra như hóa đơn tải lên.
   8. Muốn quét ngay không chờ lịch, quản trị viên hoặc người vận hành bấm **Kiểm tra email ngay** trên thẻ **Email** ở đầu **Quản lý hóa đơn**. Khi xong, thẻ báo "Hoàn tất: đã đọc N thư, thêm M tệp đính kèm."

## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Nếu có sự cố

### [Thêm hòm thư nhận hóa đơn qua IMAP](how-to/connect-mailbox.md)

- "Lỗi xác thực": sai mật khẩu, Client ID hoặc Client secret. "Không kết nối được": sai máy chủ hoặc cổng. "Máy chủ IMAP không được phép" / "Máy chủ IMAP này không được phép.": máy chủ bị hệ thống chặn (ví dụ địa chỉ nội bộ), dùng máy chủ khác.
- "Hòm thư này đã được khai báo.": địa chỉ đã có trong danh sách.
- "Chưa cấu hình khóa mã hóa mật khẩu. Liên hệ quản trị hệ thống.": cần đội vận hành hệ thống cấu hình, quản trị viên tổ chức không tự sửa được.
- Không thấy nút Thêm hòm thư mà thấy "Chọn một đơn vị ở trên để thêm.": chọn một đơn vị ở bước 1.

### [Đăng nhập hòm thư bằng OAuth (Microsoft 365, Google, máy chủ khác)](how-to/mailbox-oauth.md)

- "Trình duyệt đã chặn cửa sổ đăng nhập.": bấm **Mở trang đăng nhập** hoặc cho phép cửa sổ bật lên.
- "Phiên đăng nhập Google được thực hiện cho địa chỉ email khác.": đăng nhập lại bằng đúng tài khoản của địa chỉ đã nhập.
- "Google không trả về token dài hạn…": gỡ quyền của ứng dụng trong tài khoản Google rồi đăng nhập lại.
- "Google từ chối client ID hoặc client secret.": kiểm tra lại thông tin client trong Google Cloud Console.
- "Token URL này không được phép.": dùng Token URL HTTPS khác.
- Khi sửa: để trống **Client secret** thì giữ secret đã lưu, trừ khi đổi Client ID, Token URL hoặc máy chủ; với Google, đổi địa chỉ email hoặc Client ID thì phải bấm **Đăng nhập bằng Google** lại.
