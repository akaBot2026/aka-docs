---
id: user-management
title: Quản lý User
sidebar_label: Quản lý User
sidebar_position: 2
description: Hướng dẫn thân thiện với người mới bắt đầu để mời user, quản lý tài khoản và gán role trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Quản lý User

User Management là nơi admin thêm người vào ScaleFlow và quản lý quyền truy cập.

Dùng khi đồng đội mới gia nhập, ai đó đổi team hoặc user không còn được truy cập workspace.

## User Management dùng để làm gì

Trong **Organization -> User Management**, bạn có thể:

- Xem tất cả user trong organization
- Tìm user
- Di chuyển qua danh sách user có phân trang
- Mời một hoặc nhiều thành viên qua email
- Thêm user thủ công
- Sửa thông tin cơ bản của user
- Gán hoặc cập nhật role
- Mở trang chi tiết user
- Xóa user

## Quyền truy cập

Nếu thiếu nút, hãy liên hệ admin workspace để cập nhật quyền.

## Mở User Management

![Mở Organization và User Management từ thanh bên](/static/img/open-user-manage.png)

1. Trong thanh bên trái, mở **Organization**.
2. Chọn **User Management**.
3. Bạn sẽ thấy bảng với các cột:
   - Email
   - Name
   - Roles
   - Status
   - Created At
   - Actions

   ![Trang danh sách quản lý user](/static/img/list-user.png)

## Tìm user nhanh

Dùng ô tìm kiếm ở đầu trang:

![Tìm user](/static/img/search-user.png)

- Nhập từ khóa (ví dụ email hoặc tên)
- Kết quả tự động làm mới sau một khoảng chờ ngắn
- Nhấp **Clear Filter** để đặt lại tìm kiếm

Bảng dùng phân trang. Bạn có thể đổi page và page size từ các điều khiển của bảng.

## Mời user qua email

Mời là lựa chọn dễ nhất khi thêm đồng đội.

   ![Mở mời user](/static/img/open-invite-user.png)

1. Nhấp **Invite Users**.
2. Nhập một hoặc nhiều địa chỉ email.
3. Bạn có thể thêm email bằng:
   - Nhấn **Enter**
   - Gõ dấu phẩy
   - Gõ dấu cách
   - Dán nhiều email cùng lúc

   ![Hộp thoại mời user team](/static/img/invite-team-user.png)

4. Nhấp **Invite**.

Quan trọng:

- Email không hợp lệ hoặc trùng bị chặn trong hộp thoại.
- Link mời có hiệu lực **7 ngày**.
- Sau khi chấp nhận lời mời, user có thể đăng nhập. Nếu công ty dùng SSO, họ nên dùng tùy chọn SSO được giải thích trong [Đăng ký tài khoản](../getting-started/account-registration).

## Thêm user thủ công

Chỉ dùng tạo thủ công khi tổ chức muốn admin tạo tài khoản trực tiếp.

![Mở Add User](/static/img/open-add-user.png)

1. Nhấp **+ Add User**.
2. Điền trường bắt buộc:
   - Email
   - First Name
   - Last Name
   - Password

   ![Hộp thoại Add User](/static/img/create-user.png)

3. Nhấp **Create User**.

Quy tắc validation:

- Email phải hợp lệ
- First và last name là bắt buộc
- Password phải có ít nhất 6 ký tự

## Sửa user
![Sửa, xóa và gán role user](/static/img/edit-user.png)
1. Trên dòng user, nhấp biểu tượng **Edit**.
2. Cập nhật thông tin user.

![Hộp thoại sửa user](/static/img/dialog-edit-user.png)

3. Nhấp **Save Changes**.

Ghi chú:

- Email chỉ đọc trong chế độ edit.
- Thao tác này cập nhật trường profile (không gán role).

## Gán role cho user

1. Trên dòng user, nhấp biểu tượng **Assign Role** (khiên).
2. Chọn một hoặc nhiều role.
3. Nhấp **Save**.

Ghi chú:

- Gán role được xử lý trong hộp thoại riêng.
- Với tài khoản owner, gán role bị tắt từ danh sách.
- Nếu không chắc chọn role nào, xem lại [Roles & Permissions](./roles-permissions).

## Mở trang chi tiết user

Trong cột Email, nhấp email user để mở trang chi tiết.

![Chi tiết user](/static/img/detail-user.png)

Bạn có thể xem:

- Thông tin nhận diện
- Thông tin liên hệ
- Trạng thái và ngày tham gia
- Chi tiết profile liên quan workspace

## Xóa user
![Mở xóa](/static/img/open-delete-user.png)
1. Trên dòng user, nhấp biểu tượng **Delete**.
2. Xác nhận trong hộp thoại.

![Hộp thoại xác nhận xóa user](/static/img/delete-user.png)

3. User được xóa sau khi xác nhận thành công.

Hãy dùng thao tác này cẩn thận vì có thể ảnh hưởng quyền truy cập và việc sở hữu workflow.

## Ví dụ onboarding thực tế

1. Một nhân viên hỗ trợ mới gia nhập công ty.
2. Admin mời user bằng email công việc.
3. User đăng nhập SSO từ [Đăng ký tài khoản](../getting-started/account-registration).
4. Admin gán role `Support Agent`.
5. Admin thêm user vào team đúng trong [Quản lý Team](./team-management).
6. User bắt đầu xử lý cuộc trò chuyện trong [Inbox](../operations/inbox-usage).

## Ví dụ offboarding

1. Một nhân viên rời công ty.
2. Admin xóa hoặc tắt quyền truy cập.
3. Admin kiểm tra ticket đang mở được giao cho user đó.
4. Ticket và cuộc trò chuyện được giao lại cho user hoặc team khác.

## Khắc phục sự cố

### Không thấy User Management

- Bạn có thể không có quyền xem user.
- Hỏi admin cấp quyền xem user trong organization.

### Có thể xem bảng nhưng không mời/thêm/sửa/xóa được

- Bạn có thể chỉ có quyền xem.
- Hỏi admin cấp quyền quản lý user.

### Không thể gán role

- Bạn cần quyền gán role.
- Hỏi admin cấp quyền gán role.

### Thay đổi không hiển thị ngay

- Danh sách thường tự làm mới sau thao tác thành công.
- Nếu cần, làm mới trang và tìm lại.
