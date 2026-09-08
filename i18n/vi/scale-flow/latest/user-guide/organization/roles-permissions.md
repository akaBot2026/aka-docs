---
id: roles-permissions
title: Roles & Permissions
sidebar_label: Roles & Permissions
sidebar_position: 4
description: Hướng dẫn thân thiện với người mới bắt đầu về role, quyền và kiểm soát truy cập an toàn trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Roles & Permissions

Role quyết định mỗi user có thể xem và làm gì trong ScaleFlow. Permission là các quy tắc truy cập riêng bên trong role.

Ví dụ đơn giản: Nhân viên hỗ trợ có thể cần Inbox và Tickets. Quản lý có thể cần thêm Analytics và User Management. Owner có thể cần mọi thứ.

## Roles & Permissions dùng để làm gì

Trong **Organization -> Roles & Permissions**, bạn có thể:

- Xem tất cả role
- Tìm role theo tên
- Tạo role mới
- Sao chép permission từ role hiện có
- Sửa mô tả role
- Cấu hình permission theo nhóm tính năng
- Xóa custom role không còn cần

## Trước khi bắt đầu

- Nếu không thấy trang này, yêu cầu admin cấp quyền xem role.
- Nếu mở được trang nhưng không thể lưu hoặc xóa, tài khoản có thể chỉ có quyền xem.
- Lập role dựa trên trách nhiệm công việc thực tế, không dựa trên sở thích cá nhân.

## Mở Roles & Permissions

![Mở role](/static/img/open-role.png)

1. Trong thanh bên trái, mở **Organization**.
2. Chọn **Roles & Permissions**.
3. Bạn sẽ thấy các thẻ role (ví dụ: Owner, Administrator, Supervisor, Member, Guest và custom role).

## Hiểu thẻ role

Mỗi thẻ role hiển thị:

- Tên role
- Mô tả role (nếu có)
- Badge permission
- Thời gian sửa gần nhất

Hành vi quan trọng trong UI hiện tại:

- Role **Owner** có toàn bộ quyền và không thể sửa hoặc xóa.
- Role có badge **System** được bảo vệ:
  - Không thể xóa
  - Permission chỉ đọc
- Custom role có thể quản lý từ menu 3 chấm: **Edit** / **Delete**.

## Tạo role mới

Tạo role khi một nhóm user cần cùng quyền truy cập.

![Nút tạo role](/static/img/create-new-role.png)

1. Nhấp **Create new role**.
2. Trong **Role details**:
   - Nhập **Role name** (bắt buộc)
   - Nhập **Description** (tùy chọn)
   - Tùy chọn: chọn **Copy permissions from role** để sao chép bộ permission từ role khác

   ![Hộp thoại tạo role](/static/img/create-role.png)

3. Nhấp **Continue**.
4. Trong **Add permissions**, chọn permission muốn cấp.

![Thêm permission](/static/img/list-permission.png)

5. Nhấp **Create role** để hoàn tất.

Ghi chú:

- Không thể đổi Role name sau khi tạo.
- Sao chép permission từ role hiện có giúp thiết lập nhanh hơn.

Ví dụ role:

- `Support Agent`: Inbox, Contacts và Tickets.
- `Support Lead`: quyền Support Agent cộng với Analytics và giao team.
- `AI Manager`: AI Assistant, AI Agent, Knowledge và Models.

## Sửa role hiện có

Bạn có thể sửa custom role (không phải Owner, không phải System):

![Sửa role](/static/img/edit-role.png)

1. Nhấp thẻ role hoặc mở menu 3 chấm và chọn **Edit**.
2. Cập nhật mô tả trong **Edit role**.
3. Nhấp **Continue** để chuyển đến permission.
4. Cập nhật permission.
5. Nhấp **Save changes**.

## Cấu hình permission (chế độ đơn giản)

Trong bước permission, bạn có thể:

- Dùng ô tìm kiếm để lọc nhanh
- Dùng **Select all** cho tất cả permission đang hiển thị
- Chọn theo nhóm tính năng (Inbox, Contacts, Tickets, Organization, ...)
- Chọn permission riêng lẻ

### Hành vi tự động thêm/xóa

Khi chọn hoặc bỏ chọn một số permission, ScaleFlow có thể tự động thêm hoặc xóa permission liên quan.

Đây là hành vi dự kiến để tránh thiết lập quyền thiếu hoặc xung đột.

### Lưu ý về permission Storage

Permission Storage bị tắt cho đến khi role có ít nhất một permission thuộc nhóm tính năng cốt lõi (như Inbox, Contacts, Tickets, AI, Channels, Integrations hoặc Organization).

## Xóa role

![Hộp thoại xóa role](/static/img/delete-role.png)

1. Mở menu 3 chấm trên thẻ role.
2. Chọn **Delete**.
3. Xác nhận trong hộp thoại.

Kiểm tra kỹ trước khi xóa vì user được gán role đó có thể mất quyền truy cập.

## Gán role cho user

Tạo role và gán role là hai bước riêng:

![Gán role cho user](/static/img/edit-delete-user.png)

1. Tạo hoặc cập nhật role trong **Roles & Permissions**.
2. Mở **Organization -> User Management**.
3. Trên dòng user cần chọn, nhấp **Assign Role** (biểu tượng khiên).

![Hộp thoại gán role](/static/img/assign-role.png)

4. Chọn một hoặc nhiều role rồi lưu.

Ghi chú:

- Không thể gán lại user trong role Owner từ danh sách user.
- Nếu không thấy **Assign Role**, hãy yêu cầu admin cấp quyền gán role.

## Thiết lập gợi ý cho đội không chuyên kỹ thuật

- Giữ nguyên role system mặc định.
- Tạo custom role dựa trên trách nhiệm thật (ví dụ: Support Agent, Team Lead, QA).
- Bắt đầu bằng cách sao chép role tương tự rồi xóa permission không cần.
- Kiểm tra với một user trước khi áp dụng cho cả đội.

## Ví dụ thiết lập thực tế

1. Admin tạo role `Support Agent`.
2. Admin cấp quyền Inbox, Contacts và Tickets.
3. Admin gán role cho năm nhân viên hỗ trợ trong [User Management](./user-management).
4. Admin tạo role `AI Manager` riêng cho người quản lý [AI Assistant](../scaleflow-ai/ai-assistant), [AI Agent](../scaleflow-ai/ai-agent-usage) và [Knowledge](../scaleflow-ai/knowledge-usage).
5. Nhân viên chỉ thấy các trang cần cho công việc.

## Khắc phục sự cố

### Không thấy trang Roles & Permissions

- Tài khoản có thể không có quyền xem role.
- Liên hệ admin để yêu cầu quyền.

### Mở được trang nhưng không thể lưu thay đổi

- Bạn có thể chỉ có quyền xem.
- Hoặc đang sửa role System được bảo vệ (chỉ đọc).
- Nếu cần cập nhật, hãy yêu cầu admin cấp quyền quản lý role.

### Không thể chọn một số permission Storage

- Trước tiên chọn ít nhất một permission từ nhóm tính năng cốt lõi.
- Sau đó quay lại chọn permission Storage.

### Tôi vô tình xóa role

- Tạo lại role với permission giống hoặc tương đương.
- Đến **User Management** và gán lại role cho các user bị ảnh hưởng.
