---
id: sign-in-and-roles
title: Đăng nhập, điều hướng và vai trò
sidebar_label: Đăng nhập và vai trò
sidebar_position: 2
description: Đăng nhập, thiết lập tùy chọn cá nhân, làm quen giao diện và xem các vai trò mặc định.
displayed_sidebar: akaXtractSidebar
---

# Đăng nhập, điều hướng và vai trò

## Đăng nhập

1. Mở địa chỉ ứng dụng do quản trị viên cung cấp.
2. Nhập `Username or email` và chọn `Sign In`. Bạn cũng có thể chọn `Google` ở mục `Or sign in with`. Người dùng mới chọn `Register`. `Remember me` giúp trình duyệt ghi nhớ phiên.
3. Kiểm tra tên công ty ở đầu trang. Chỉ tiếp tục khi công ty đúng.

Nếu bạn chưa có tài khoản hoặc chưa là thành viên của công ty, hãy nhờ quản trị viên [mời hoặc thêm bạn](../administration/users-and-roles.md#members).

## Hồ sơ và tùy chọn cá nhân

| Việc cần làm | Cách thực hiện |
| --- | --- |
| Đổi ngôn ngữ hoặc giao diện | Mở menu avatar. Trình duyệt lưu lựa chọn của bạn |
| Xem hồ sơ | Mở `Profile & Setting`. `Change Password`, khi có, mở cổng ScaleX trong thẻ mới |
| Đổi công ty | Dùng tùy chọn công ty trong menu avatar và xác nhận. Bạn sẽ đăng nhập lại, vì vậy hãy hoàn tất công việc chưa lưu trước |
| Đăng xuất | Chọn `Logout`, nhất là trên máy dùng chung |

![Thẻ Profile trong Profile & Setting](/static/img/scale-xtract-profile.png)

## Điều hướng

| Menu | Dùng để |
| --- | --- |
| `Pipelines` | Tạo và quản lý Pipeline cùng các phiên bản |
| `Jobs` | Theo dõi xử lý, xem lỗi, thử lại, hủy hoặc xóa Job |
| `AI Providers` | Xem nhà cung cấp và mô hình AI, quản lý mô hình tùy chỉnh |
| `AI Models` | Quản lý khóa nhà cung cấp AI (tiêu đề trang `AI Model API Keys`) |
| `API Keys` | Cấp khóa cho hệ thống bên ngoài |
| `API Integration` | Đọc tài liệu API kèm ví dụ |
| `Profile & Setting` | Xem hồ sơ; quản lý người dùng, vai trò và hạn mức |

Bên trong một Pipeline có các thẻ `Pipeline Setting`, `Documents`, `ScaleConnect`, `Webhook` và `Webhook History`.

## Vai trò mặc định

Đây là các vai trò hệ thống. Với vai trò hệ thống khác Owner, bạn chỉ đổi được quyền xem hạn mức. Để cấp tổ hợp quyền khác, hãy [tạo vai trò tùy chỉnh](../administration/users-and-roles.md#roles).

| Vai trò | Được phép | Không được phép |
| --- | --- | --- |
| `Owner` | Mọi thao tác trong workspace | Gán cho thành viên khác như một vai trò thông thường |
| `Administrator` | Quản lý xử lý, mô hình, tích hợp và tổ chức | Chuyển quyền sở hữu công ty |
| `Supervisor` | Quản lý và công bố Pipeline, quản lý Webhook, thử lại hoặc hủy Job, duyệt kết quả | Quản lý khóa AI, API Keys hoặc ScaleConnect |
| `Member` | Xem tài nguyên, gửi tài liệu, theo dõi Job | Duyệt, công bố hoặc sửa cấu hình |
| `Guest` | Xem tài nguyên và kết quả | Tải lên, duyệt hoặc sửa |

:::note
Duyệt, gửi tài liệu, xuất dữ liệu và công bố đều cần quyền riêng. Mở Review cần quyền duyệt, kể cả khi bạn chỉ muốn xem. Người không có quyền này có thể xuất kết quả đã xác nhận từ danh sách Documents.
:::
