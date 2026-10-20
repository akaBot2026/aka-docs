---
id: roles-permissions
title: Roles & Permissions
sidebar_label: Roles & Permissions
sidebar_position: 4
description: Hướng dẫn dành cho người mới bắt đầu về vai trò, quyền và kiểm soát quyền truy cập an toàn trong ScalePay.
displayed_sidebar: scalePaySidebar
---

# Roles & Permissions

Vai trò quyết định mỗi người dùng có thể xem và thực hiện những gì trong ScalePay. Quyền là các quy tắc truy cập riêng lẻ bên trong một vai trò.

Ví dụ đơn giản: Một nhân viên hỗ trợ có thể cần Inbox và Tickets. Quản lý có thể cần thêm Analytics và User Management. Chủ sở hữu có thể cần mọi quyền.

## Roles & Permissions được dùng để làm gì

Trong **Organization -> Roles & Permissions**, bạn có thể:

- Xem tất cả vai trò
- Tìm kiếm vai trò theo tên
- Tạo vai trò mới
- Sao chép quyền từ một vai trò hiện có
- Chỉnh sửa mô tả vai trò
- Cấu hình quyền của vai trò theo nhóm tính năng
- Xóa các vai trò tùy chỉnh không còn cần thiết

## Trước khi bắt đầu

- Nếu bạn không thấy trang này, hãy yêu cầu quản trị viên cấp quyền xem vai trò.
- Nếu bạn có thể mở trang nhưng không thể lưu hoặc xóa, tài khoản của bạn có thể chỉ có quyền xem.
- Lập kế hoạch vai trò dựa trên trách nhiệm công việc thực tế, không dựa trên sở thích cá nhân.

## Mở Roles & Permissions

![Mở vai trò](/static/img/sp_roles.png)

1. Trong thanh bên trái, mở **Organization**.
2. Chọn **Roles & Permissions**.
3. Bạn sẽ thấy các thẻ vai trò (ví dụ: Owner, Tenant admin, AP Manager, AP specialist, Purchaser và các vai trò tùy chỉnh).

## Tìm hiểu thẻ vai trò

Mỗi thẻ vai trò hiển thị:

- Tên vai trò
- Mô tả vai trò (nếu có)
- Huy hiệu quyền
- Thời điểm sửa đổi gần nhất

Hành vi quan trọng trong giao diện hiện tại:

- Vai trò **Owner** có toàn bộ quyền và không thể chỉnh sửa hoặc xóa.
- Các vai trò có huy hiệu **System** được bảo vệ:
  - Không thể xóa
  - Cập nhật quyền ở chế độ chỉ đọc
- Có thể quản lý vai trò tùy chỉnh từ menu 3 chấm: **Edit** / **Delete**.

## Tạo vai trò mới

Tạo một vai trò khi một nhóm người dùng cần cùng một quyền truy cập.

![Nút tạo vai trò](/static/img/sp_create.png)

1. Nhấp vào **Create new role**.
2. Trong **Role details**:
   - Nhập **Role name** (bắt buộc)
   - Nhập **Description** (tùy chọn)
   - Tùy chọn: chọn **Copy permissions from role** để sao chép một bộ quyền từ vai trò khác

   ![Hộp thoại tạo vai trò](/static/img/sp_box.png)

3. Nhấp vào **Continue**.
4. Trong **Add permissions**, chọn các quyền bạn muốn.

![Thêm quyền](/static/img/sp_permission.png)

5. Nhấp vào **Create role** để hoàn tất.

Lưu ý:

- Không thể thay đổi tên vai trò sau khi tạo.
- Sao chép quyền từ một vai trò hiện có giúp rút ngắn thời gian thiết lập.

Ví dụ về vai trò:

- `AP manager`: dashboard, matching set.
- `Accountant`: upload document, trigger manual match.
- `Approver`: approve, reject matching sets.

## Chỉnh sửa vai trò hiện có

Bạn có thể chỉnh sửa các vai trò tùy chỉnh (không phải Owner, không phải System):

![Chỉnh sửa vai trò ](/static/img/sp_edit_roles.png)

1. Nhấp vào thẻ vai trò hoặc mở menu 3 chấm rồi chọn **Edit**.
2. Cập nhật mô tả trong **Edit role**.
3. Nhấp vào **Continue** để chuyển đến phần quyền.
4. Cập nhật các quyền.
5. Nhấp vào **Save changes**.

## Cấu hình quyền (chế độ xem đơn giản)

Trong bước quyền, bạn có thể:

- Sử dụng hộp tìm kiếm để lọc nhanh
- Sử dụng **Select all** cho tất cả quyền đang hiển thị
- Chọn theo nhóm tính năng (Dashboard, document, integration access,...)
- Chọn từng quyền riêng lẻ

### Hành vi tự động thêm/xóa

Khi bạn chọn hoặc bỏ chọn một số quyền, ScalePay có thể tự động thêm hoặc xóa các quyền liên quan.

Đây là hành vi dự kiến nhằm ngăn việc thiết lập quyền truy cập không đầy đủ hoặc xung đột.

### Lưu ý về quyền Storage

Quyền Storage vẫn bị vô hiệu hóa cho đến khi vai trò có ít nhất một quyền từ nhóm tính năng cốt lõi (chẳng hạn Dashboard, document, integration access, matching set, organization, pipeline,...).

## Xóa vai trò

![Hộp thoại xóa vai trò](/static/img/sp_remove.png)

1. Mở menu 3 chấm trên thẻ vai trò.
2. Chọn **Delete**.
3. Xác nhận trong hộp thoại.

Hãy kiểm tra cẩn thận trước khi xóa vì người dùng được gán vai trò đó có thể mất quyền truy cập.

## Gán vai trò cho người dùng

Tạo vai trò và gán vai trò là hai bước riêng biệt:

![Người dùng được gán vai trò](/static/img/sp_assign.png)

1. Tạo hoặc cập nhật vai trò trong **Roles & Permissions**.
2. Mở **Organization -> User Management**.
3. Trên hàng của người dùng mục tiêu, nhấp vào **Assign Role** (biểu tượng khiên).

![Hộp thoại gán vai trò](/static/img/sp_box_assign.png)

4. Chọn một hoặc nhiều vai trò, sau đó lưu.

Lưu ý:

- Không thể gán lại người dùng có vai trò Owner từ danh sách người dùng.
- Nếu bạn không thấy **Assign Role**, hãy yêu cầu quản trị viên cấp quyền gán vai trò.

## Thiết lập đề xuất cho nhóm không chuyên kỹ thuật

- Giữ nguyên các vai trò hệ thống mặc định.
- Tạo vai trò tùy chỉnh dựa trên trách nhiệm công việc thực tế (ví dụ: Team leader,...).
- Bắt đầu bằng cách sao chép một vai trò tương tự, sau đó xóa các quyền không cần thiết.
- Kiểm tra với một người dùng trước khi áp dụng cho toàn bộ nhóm.


## Xử lý sự cố

### Tôi không thấy trang Roles & Permissions

- Tài khoản của bạn có thể không có quyền xem vai trò.
- Liên hệ quản trị viên để yêu cầu quyền truy cập.

### Tôi có thể mở trang nhưng không thể lưu thay đổi

- Bạn có thể chỉ có quyền xem.
- Hoặc bạn đang chỉnh sửa một vai trò System được bảo vệ (chỉ đọc).
- Yêu cầu quản trị viên cấp quyền quản lý vai trò nếu cần cập nhật.

### Tôi không thể chọn một số quyền Storage

- Trước tiên, hãy chọn ít nhất một quyền từ nhóm tính năng cốt lõi.
- Sau đó quay lại để chọn quyền Storage.

### Tôi đã vô tình xóa một vai trò

- Tạo lại vai trò với các quyền giống hoặc tương đương.
- Đi tới **User Management** và gán lại vai trò cho những người dùng bị ảnh hưởng.
