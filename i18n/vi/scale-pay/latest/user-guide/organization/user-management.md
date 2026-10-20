---
id: user-management
title: Quản lý User
sidebar_label: Quản lý User
sidebar_position: 2
description: Hướng dẫn dành cho người mới bắt đầu để mời người dùng, quản lý tài khoản và gán vai trò trong ScalePay.
displayed_sidebar: scalePaySidebar
---

# Quản lý User

Quản lý người dùng là nơi quản trị viên thêm người vào ScalePay và quản lý quyền truy cập của họ.

Sử dụng mục này khi một đồng đội mới tham gia, ai đó chuyển nhóm hoặc một người dùng không còn được truy cập workspace.

## User Management được dùng để làm gì

Trong **Organization -> User Management**, bạn có thể:

- Xem tất cả người dùng trong tổ chức
- Tìm kiếm người dùng
- Di chuyển qua danh sách người dùng được phân trang
- Mời một hoặc nhiều thành viên nhóm qua email
- Thêm người dùng thủ công
- Chỉnh sửa thông tin cơ bản của người dùng
- Gán hoặc cập nhật vai trò
- Mở trang chi tiết người dùng
- Xóa người dùng

## Quyền truy cập và quyền hạn

Nếu thiếu một nút, hãy liên hệ quản trị viên workspace để cập nhật quyền của bạn.

## Mở User Management

![Mở Organization và Quản lý người dùng từ thanh bên](/static/img/sp_um.png)

1. Trong tab hồ sơ, mở **Organization**.
2. Chọn **User Management**.
3. Bạn sẽ thấy một bảng có các cột:
   - Email
   - Name
   - Roles
   - Status
   - Created At
   - Actions

## Tìm người dùng nhanh chóng

Sử dụng hộp tìm kiếm ở đầu trang:

![Tìm người dùng](/static/img/sp_search.png)

- Nhập từ khóa (ví dụ: email hoặc tên)
- Kết quả tự động làm mới sau một khoảng trễ ngắn

Bảng sử dụng phân trang. Bạn có thể thay đổi trang và kích thước trang từ các điều khiển của bảng.

## Mời người dùng qua email

Lời mời là tùy chọn dễ nhất khi thêm đồng đội.

   ![Mở mời người dùng](/static/img/sp_invite.png)

1. Nhấp vào **Invite Users**.
2. Nhập một hoặc nhiều địa chỉ email.
3. Bạn có thể thêm email bằng cách:
   - Nhấn **Enter**
   - Nhập dấu phẩy
   - Nhập dấu cách
   - Dán nhiều email cùng lúc

   ![Hộp thoại mời thành viên nhóm](/static/img/sp_ivb.png)

4. Nhấp vào **Send Invite**.

Quan trọng:

- Email không hợp lệ hoặc trùng lặp sẽ bị chặn trong hộp thoại.
- Liên kết lời mời có hiệu lực trong **7 days**.
- Sau khi chấp nhận lời mời, người dùng có thể đăng nhập. Nếu công ty sử dụng SSO, họ nên dùng tùy chọn SSO được giải thích trong [Đăng ký tài khoản](../getting-started/account-registration).

## Thêm người dùng thủ công

Chỉ sử dụng cách tạo thủ công khi tổ chức muốn quản trị viên tạo tài khoản trực tiếp.

![Mở Thêm người dùng](/static/img/sp_add.png)


1. Nhấp vào **+ Add User**.
2. Điền các trường bắt buộc:
   - Email
   - First Name
   - Last Name
   - Password

   ![Mở Thêm người dùng](/static/img/sp_add_user.png)

3. Nhấp vào **Create User**.

Quy tắc xác thực:

- Email phải hợp lệ
- Bắt buộc có tên và họ
- Mật khẩu phải có ít nhất 6 ký tự

## Chỉnh sửa người dùng
![Chỉnh sửa, xóa và gán vai trò cho người dùng](/static/img/sp_edit_us.png)
1. Trong hàng của người dùng, nhấp vào biểu tượng **Edit**.
2. Cập nhật thông tin người dùng.

![Hộp thoại chỉnh sửa người dùng](/static/img/edit_user_dialog.png)

3. Nhấp vào **Save Changes**.

Lưu ý:

- Email ở chế độ chỉ đọc khi chỉnh sửa.
- Thao tác này cập nhật các trường hồ sơ (không cập nhật việc gán vai trò).

## Gán vai trò cho người dùng

1. Trong hàng của người dùng, nhấp vào biểu tượng **Assign Role** (hình khiên).
2. Chọn một hoặc nhiều vai trò.
3. Nhấp vào **Save**.

Lưu ý:

- Việc gán vai trò được xử lý trong một hộp thoại riêng.
- Với tài khoản owner, việc gán vai trò bị vô hiệu hóa từ danh sách.
- Nếu không chắc nên chọn vai trò nào, hãy xem [Vai trò & Quyền](./roles-permissions).

## Mở trang chi tiết người dùng

Từ 3 chấm trên mỗi hàng, nhấp vào đây để mở trang chi tiết.

![Chi tiết người dùng](/static/img/detail_us.png)

Bạn có thể xem xét:

- Thông tin nhận diện
- Thông tin liên hệ
- Trạng thái và ngày tham gia
- Thông tin hồ sơ liên quan đến workspace

## Xóa người dùng

1. Trong hàng của người dùng, nhấp vào biểu tượng **Delete**.
2. Xác nhận trong hộp thoại.

![Hộp thoại xác nhận xóa người dùng](/static/img/remove_user.png)

3. Người dùng sẽ bị xóa sau khi xác nhận thành công.

Hãy cẩn thận khi thực hiện thao tác này vì nó có thể ảnh hưởng đến quyền truy cập và quyền sở hữu quy trình.

## Ví dụ onboarding thực tế

1. Một nhân viên hỗ trợ mới gia nhập công ty.
2. Quản trị viên mời người dùng bằng email công việc.
3. Người dùng đăng nhập bằng SSO từ [Đăng ký tài khoản](../getting-started/account-registration).
4. Quản trị viên gán vai trò `Support Agent` cho người dùng.
5. Quản trị viên thêm người dùng vào nhóm phù hợp trong [Quản lý nhóm](./team-management).
6. Người dùng bắt đầu xử lý các cuộc trò chuyện trong [Inbox](../operations/inbox-usage).

## Ví dụ offboarding

1. Một nhân viên rời công ty.
2. Quản trị viên xóa hoặc vô hiệu hóa quyền truy cập của họ.
3. Quản trị viên kiểm tra các ticket đang mở được giao cho người dùng đó.
4. Ticket và cuộc trò chuyện được gán lại cho người dùng hoặc nhóm khác.

## Xử lý sự cố

### Tôi không thấy User Management

- Bạn có thể không có quyền xem người dùng.
- Yêu cầu quản trị viên cấp quyền xem người dùng của tổ chức.

### Tôi có thể xem bảng nhưng không thể mời/thêm/chỉnh sửa/xóa

- Bạn có thể chỉ có quyền xem.
- Yêu cầu quản trị viên cấp quyền quản lý người dùng.

### Tôi không thể gán vai trò

- Bạn cần quyền gán vai trò.
- Yêu cầu quản trị viên cấp quyền gán vai trò.

### Các thay đổi của tôi không hiển thị ngay

- Danh sách thường tự động làm mới sau khi thao tác thành công.
- Nếu cần, làm mới trang và tìm kiếm lại.
