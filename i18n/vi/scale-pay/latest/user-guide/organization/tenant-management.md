---
id: tenant-management
title: Quản lý Tenant
sidebar_label: Quản lý Tenant
sidebar_position: 5
description: Hướng dẫn dành cho người mới bắt đầu để hiểu và cập nhật thông tin workspace ScalePay.
displayed_sidebar: scalePaySidebar
---

# Quản lý Tenant

Tenant là workspace ScalePay của công ty bạn. Đây là không gian dùng chung nơi người dùng, channel, thiết lập AI, cuộc trò chuyện, liên hệ và ticket của bạn thuộc về.

Hầu hết người dùng không cần quản lý cài đặt tenant mỗi ngày. Trang này chủ yếu dành cho chủ sở hữu workspace và quản trị viên.

## Tenant Management được dùng để làm gì

Trong **Organization -> Tenant Management**, bạn có thể:

- Xem thông tin nhận diện workspace.
- Xem thông tin chủ sở hữu.
- Cập nhật **Company Name** nếu bạn có quyền.
- Xem xét trạng thái workspace.
- Sao chép ID khi bộ phận hỗ trợ yêu cầu.

ID là mã duy nhất ScalePay sử dụng để nhận diện workspace của bạn. Thông thường bạn chỉ cần mã này khi liên hệ bộ phận hỗ trợ.

Nếu trang ở chế độ chỉ đọc hoặc bị chặn, hãy yêu cầu quản trị viên kiểm tra quyền truy cập tổ chức của bạn.

## Mở Tenant Management

1. Trong thanh bên trái, chọn **Tenant Setting**.
3. Bạn sẽ thấy hai thẻ thông tin:
   - **Identity**
   - **Ownership**

![Tổng quan Quản lý tenant](/static/img/sp_tenant.png)

## Tìm hiểu thông tin trên màn hình

### Identity

Bạn có thể xem xét:

- **Tenant Name** (chỉ đọc)
- **Tenant ID** (chỉ đọc, có biểu tượng sao chép)
- **Company Name**
  - Có thể chỉnh sửa khi bạn có quyền quản lý
  - Chỉ đọc khi bạn không có quyền

### Ownership

Bạn có thể xem xét:

- **Owner Email** (chỉ đọc)
- **Owner ID** (chỉ đọc, có biểu tượng sao chép)
- Huy hiệu **Status**:
  - `Active`
  - `Pending`
  - `Disabled`

### Ngày tháng

Ở cuối trang, bạn có thể xem xét:

- **Created At**
- **Updated At**

Đây là các trường thông tin và không thể chỉnh sửa.

## Ví dụ thực tế

Công ty bạn đổi tên thương hiệu công khai từ "ABC Services" thành "ABC Care". Chủ sở hữu workspace mở Quản lý tenant, cập nhật **Company Name** và lưu để thông tin tổ chức luôn hiện hành.

## Liên kết với các trang thiết lập khác

- Sử dụng [User Management](./user-management) để thêm người vào workspace.
- Sử dụng [Team Management](./team-management) để tổ chức nhân viên.
- Sử dụng [Roles & Permissions](./roles-permission) để kiểm soát quyền truy cập.

## Lưu ý

- Trang này không tạo hoặc xóa tenant.
- Chỉ **Company Name** có thể chỉnh sửa trên màn hình này.
- Các nút lưu và loại bỏ chỉ hiển thị với người dùng có quyền quản lý.
- Biểu tượng sao chép xuất hiện cho các trường ID để hỗ trợ khi bộ phận hỗ trợ yêu cầu thông tin workspace.

## Xử lý sự cố

### Tôi không thấy Quản lý Tenant trong Organization

- Yêu cầu quản trị viên cấp quyền xem tenant.

### Tôi có thể mở trang nhưng không thể chỉnh sửa bất kỳ nội dung nào

- Bạn có thể chỉ có quyền xem.
- Yêu cầu quản trị viên cấp quyền quản lý tenant nếu cần cập nhật.

### Tôi đã nhấp vào Save nhưng thay đổi không hiển thị

- Chờ vài giây để dữ liệu làm mới.
- Mở lại trang hoặc làm mới trình duyệt.
- Xác nhận thông báo thành công xuất hiện sau khi lưu.

### Tôi thấy "Failed to load tenant information."

- Làm mới trang và thử lại.
- Nếu vấn đề vẫn tiếp diễn, hãy liên hệ bộ phận hỗ trợ và cung cấp Tenant ID nếu có.
