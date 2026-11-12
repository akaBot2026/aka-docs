---
title: "Kết nối hòm thư Gmail/Outlook qua AkaConnect"
description: "Bật Kết nối AkaConnect, chọn đơn vị, bấm Thêm kết nối và hoàn tất kết nối hòm thư Gmail hoặc Outlook trong cửa sổ AkaConnect bật lên."
id: connect-akaconnect
sidebar_label: Kết nối hòm thư Gmail/Outlook qua AkaConnect
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Kết nối hòm thư Gmail/Outlook qua AkaConnect

Bật Kết nối AkaConnect, chọn đơn vị, bấm Thêm kết nối và hoàn tất kết nối hòm thư Gmail hoặc Outlook trong cửa sổ AkaConnect bật lên.

**Quyền cần có:** admin


## Các bước

1. Mở **Quản trị** → **Hóa đơn đầu vào**; ở ô **Đơn vị**, chọn đơn vị sẽ nhận hóa đơn.
2. Ở thẻ **Kết nối AkaConnect**, bật công tắc nếu đang **Đã tắt**, chọn **Tần suất đồng bộ** (Mỗi 5/15/30 phút hoặc Mỗi giờ), **Định dạng chấp nhận**, **Dung lượng tối đa mỗi tệp** và **Kiểm tra trên Cổng HĐĐT** nếu cần, rồi bấm **Lưu thay đổi** ở đầu trang.
3. Dưới **Kết nối thư**, bấm **Thêm kết nối**. Cửa sổ AkaConnect bật lên; trang hiện "Đang chờ hoàn tất kết nối...".
4. Trong cửa sổ AkaConnect (cần đang đăng nhập AkaConnect), tạo kết nối như trong AkaConnect, chỉ với bộ kết nối Gmail hoặc Outlook: đặt tên, chọn cách xác thực, đăng nhập hòm thư nhận hóa đơn và cấp quyền, rồi **Kiểm Tra và Tạo**. Chi tiết: Tạo kết nối trong AkaConnect (scaleconnect).
5. Khi AkaConnect báo xong hoặc cửa sổ đóng, danh sách **Kết nối thư** tải lại; kết nối mới mang tên mặc định Gmail hoặc Outlook, kèm trạng thái và thời điểm đồng bộ lần cuối. Ở cuối dòng: nút bút chì (**Sửa**) mở hộp thoại **Sửa kết nối** để đổi **Tên kết nối**; nút con mắt (**Mở trong AkaConnect**, chỉ hiện khi AkaConnect đã được cấu hình cho hệ thống) mở kết nối bên AkaConnect; thùng rác (**Gỡ**) ngừng nhận hóa đơn và xóa kết nối cả trong AkaConnect.

## Xử lý lỗi

- "Trình duyệt đã chặn cửa sổ kết nối.": bấm **Mở trang kết nối** hoặc cho phép cửa sổ bật lên.
- "Loại kết nối này chưa được hỗ trợ. Chỉ hỗ trợ Gmail và Outlook.": chọn lại Gmail hoặc Outlook.
- "Kết nối này đã được thêm.": hòm thư đã có trong danh sách.
- "Phiên kết nối đã hết hạn, vui lòng thử lại." (phiên chỉ giữ 10 phút) hoặc "Bạn đã hủy việc kết nối.": bấm **Thêm kết nối** lại.
- "Không thể kết nối. Vui lòng thử lại sau.": có thể AkaConnect chưa được cấu hình cho hệ thống; liên hệ đội vận hành hệ thống.
- Kết nối báo **Đăng nhập thất bại**: ủy quyền lại kết nối bên AkaConnect (nút con mắt mở thẳng kết nối), xem Ủy quyền lại kết nối (scaleconnect).


## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Tính năng sử dụng

- [Quản trị nguồn hóa đơn đầu vào](../features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.

## Được dùng trong các hướng dẫn

- [Nhận hóa đơn từ Gmail/Outlook qua AkaConnect](../connect-akaconnect.md) — Quản trị viên muốn nhận hóa đơn đính kèm thư từ hòm thư Gmail hoặc Outlook đã kết nối qua AkaConnect, không cần khai báo IMAP.
- [Bật/tắt nguồn hóa đơn và lưu thiết lập](configure.md) — Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi.
