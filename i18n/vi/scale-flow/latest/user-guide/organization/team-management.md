---
id: team-management
title: Quản lý Team
sidebar_label: Quản lý Team
sidebar_position: 3
description: Hướng dẫn thân thiện với người mới bắt đầu để tạo team và sắp xếp công việc nhân viên trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Quản lý Team

Team giúp sắp xếp user thành các nhóm làm việc như Support, Sales, Admissions, Billing hoặc Technical Support.

Dùng team khi cuộc trò chuyện hoặc ticket nên được giao cho một nhóm thay vì một người.

## Team Management dùng để làm gì

Trong **Organization -> Team Management**, bạn có thể:

- Xem tất cả team trong workspace
- Tìm team theo tên
- Tạo team mới
- Sửa thông tin team
- Thêm hoặc xóa thành viên team
- Xóa team khi không còn cần

## Quyền truy cập

Nếu thiếu nút, hãy liên hệ admin workspace để cập nhật quyền.

## Mở Team Management
![Mở team](/static/img/open-team.png)
1. Trong thanh bên trái, mở **Organization**.
2. Chọn **Team Management**.
3. Bạn sẽ thấy danh sách team với thông tin chính như:
   - Tên team
   - Mô tả
   - Số thành viên
   - Trạng thái
   - Ngày tạo
   - Thao tác (nếu có quyền manage)

![Tổng quan danh sách team](/static/img/list-team.png)

## Tạo team mới

Tạo team khi nhiều user có cùng trách nhiệm.

 ![Nút Add team](/static/img/add-team-1.png)

1. Nhấp **+ Add Team**.
2. Điền trường bắt buộc:
   - Team name
3. Tùy chọn thêm:
   - Description
   - Initial members

   ![Hộp thoại Add team](/static/img/add-team.png)

4. Nhấp **Create Team**.

Mẹo:

- Dùng quy ước đặt tên rõ ràng (ví dụ: `Support - APAC`, `Sales - SMB`).
- Tạo team nhỏ hơn theo workflow để tăng tính sở hữu.

## Thêm hoặc xóa thành viên team

1. Trên dòng team, nhấp biểu tượng **Edit**.
2. Trong **Manage Members**, mở bộ chọn thành viên.
3. Thêm user vào danh sách hoặc xóa user không còn thuộc team.
4. Nhấp **Save Changes**.

Ghi chú:

- Có thể chuyển user giữa các team theo chính sách tổ chức.
- Cập nhật thành viên mỗi khi trách nhiệm thay đổi.

Ví dụ: Nếu một nhân viên hỗ trợ chuyển sang team Billing, xóa họ khỏi `Customer Support` và thêm vào `Billing Support`.

## Sửa chi tiết team

  ![Nút sửa team](/static/img/edit-team-1.png)

1. Trên dòng team, nhấp biểu tượng **Edit**.
2. Cập nhật các trường như:
   - Team name
   - Description
   - Members

   ![Hộp thoại xác nhận sửa team](/static/img/edit-team.png)

3. Nhấp **Save Changes**.

## Xóa team

1. Trên dòng team, nhấp biểu tượng **Delete**.
2. Xác nhận thao tác trong hộp thoại.

![Hộp thoại xác nhận xóa team](/static/img/delete-team.png)

3. Team được xóa sau khi xác nhận thành công.

Hãy dùng thao tác này cẩn thận. Trước khi xóa, đảm bảo thành viên được chuyển sang team khác nếu workflow yêu cầu.

## Team liên kết với Inbox và Tickets như thế nào

- Trong [Inbox](../operations/inbox-usage), cuộc trò chuyện có thể giao cho team khi bất kỳ ai trong nhóm đều có thể hỗ trợ.
- Trong [Tickets](../operations/ticket-usage), ticket có thể giao cho team khi bước tiếp theo thuộc về nhóm đó.
- Trong [User Management](./user-management), user phải tồn tại trước khi thêm vào team.

## Quy trình thực tế

1. Admin tạo team tên `Refund Support`.
2. Admin thêm nhân viên có thể xem xét yêu cầu hoàn tiền.
3. Smart Assistant tạo ticket khi khách hàng yêu cầu hoàn tiền.
4. Ticket được giao cho `Refund Support`.
5. Bất kỳ thành viên team nào cũng có thể nhận và giải quyết.

## Ghi chú về hành vi UI hiện tại

- Trạng thái team (**Active/Inactive**) hiển thị trong danh sách.
- Trạng thái team hiện chỉ đọc trên trang này.
- Chỉnh sửa team thực hiện trong modal (không có trang chi tiết team riêng).
- Danh sách hỗ trợ phân trang (điều khiển page và page size).

## Khắc phục sự cố

### Không thấy Team Management

- Bạn có thể không có quyền xem team.
- Hỏi admin cấp quyền xem team trong organization.

### Có thể xem team nhưng không tạo hoặc sửa được

- Bạn có thể chỉ có quyền xem.
- Hỏi admin cấp quyền quản lý team.

### Không thể gán thành viên

- Quản lý thành viên thuộc quyền manage.
- Hỏi admin cấp quyền quản lý team.

### Thay đổi không hiển thị ngay

- Chờ vài giây rồi làm mới trang.
- Mở lại team để xác nhận thay đổi đã lưu.
- Nếu cần, đăng xuất rồi đăng nhập lại.
