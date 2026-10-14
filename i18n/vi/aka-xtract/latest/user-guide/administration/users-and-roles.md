---
id: users-and-roles
title: Người dùng và vai trò
sidebar_label: Người dùng và vai trò
sidebar_position: 1
description: Mời hoặc thêm thành viên, tạo vai trò và gán quyền.
displayed_sidebar: akaXtractSidebar
---

# Người dùng và vai trò

<a id='members'></a>

## Mời hoặc thêm thành viên

**Trước khi bắt đầu:** bạn cần quyền quản lý người dùng, và quyền gán vai trò nếu bạn đặt vai trò. Thành viên thuộc công ty ScaleX, không phải danh sách riêng chỉ dành cho tài liệu.

1. Mở `Profile & Setting` -> `User Management`. Hãy tìm kiếm trước để tránh trùng.
2. Chọn cách thêm thành viên:

| Cách | Thực hiện | Kết quả |
| --- | --- | --- |
| Mời | `Invite Users`, nhập `Email Addresses` cách nhau bằng dấu phẩy, khoảng trắng hoặc xuống dòng, chọn vai trò, rồi `Send Invitations` | Lời mời hiển thị `pending`. Người nhận hoàn tất lời mời trong hệ thống tài khoản và đăng nhập, và vai trò được áp dụng khi đăng nhập |
| Thêm trực tiếp | `Add User`, nhập `Email`. Với tài khoản mới, nhập thêm `First Name`, `Last Name` và `Password` ít nhất 6 ký tự. Chọn vai trò, rồi `Create User` | Tài khoản ScaleX đã có sẽ vào công ty ngay. Người dùng mới phải đổi mật khẩu ở lần đăng nhập đầu tiên |

![Thẻ User Management](/static/img/scale-xtract-user-management.png)

![Hộp thoại Invite Users](/static/img/scale-xtract-invite-users.png)

![Hộp thoại Add User](/static/img/scale-xtract-add-user.png)

Nếu người dùng đã được thêm nhưng vai trò chưa được lưu, hãy dùng `Assign Role` thay vì tạo lại tài khoản.

:::note
Thành viên chưa có vai trò thì không xử lý được tài liệu. Lời mời nhiều địa chỉ có thể thành công một phần, vì vậy hãy kiểm tra từng địa chỉ trước khi gửi lại. Xóa thành viên sẽ gỡ người đó khỏi **công ty** hoặc hủy lời mời đang chờ. Bạn không thể xóa chính mình, và Owner được bảo vệ. Vì công ty có thể dùng chung với các ứng dụng khác, việc gỡ có thể ảnh hưởng nhiều hơn AkaXtract.
:::

<a id='roles'></a>

## Tạo vai trò

1. Mở `Profile & Setting` -> `Roles & Permissions` và chọn `Create new role`.
2. Nhập `Role name` duy nhất và mô tả tùy chọn. Để bắt đầu từ một vai trò có sẵn, dùng `Copy permissions from role`. Chọn `Continue`.
3. Chọn các quyền và chọn `Create role`.

![Thẻ Roles & Permissions](/static/img/scale-xtract-roles-permissions.png)

![Hộp thoại Create new role](/static/img/scale-xtract-create-role.png)

Vai trò mới chỉ được chọn sẵn quyền xem hạn mức. Một số quyền quản lý đã bao gồm các quyền xem mà chúng phụ thuộc.

## Gán và sửa vai trò

1. Trong `User Management`, mở menu của thành viên và chọn `Assign Role`.
2. Chọn vai trò và lưu. Thao tác này thay thế tập vai trò đã chọn, vì vậy hãy giữ các vai trò vẫn còn cần. Nhờ thành viên tải lại trang hoặc đăng nhập lại.

Với vai trò tùy chỉnh, bạn sửa được quyền và mô tả, không sửa được tên. Với vai trò hệ thống khác Owner, bạn chỉ đổi được quyền xem hạn mức. Không sửa được vai trò Owner, vai trò này dành riêng cho chủ sở hữu công ty. Không xóa được vai trò hệ thống.

:::warning
Xóa vai trò tùy chỉnh sẽ gỡ các lần gán và có thể làm người dùng mất quyền truy cập. Hãy kiểm tra các thành viên trước.
:::
