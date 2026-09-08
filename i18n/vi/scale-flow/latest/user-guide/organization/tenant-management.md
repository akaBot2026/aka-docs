---
id: tenant-management
title: Quản lý Tenant
sidebar_label: Quản lý Tenant
sidebar_position: 5
description: Hướng dẫn thân thiện với người mới bắt đầu để hiểu và cập nhật thông tin workspace ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Quản lý Tenant

Tenant là workspace ScaleFlow của công ty. Đây là không gian dùng chung nơi user, kênh, thiết lập AI, cuộc trò chuyện, contact và ticket thuộc về.

Hầu hết user không cần quản lý cài đặt tenant hằng ngày. Trang này chủ yếu dành cho owner và admin workspace.

## Tenant Management dùng để làm gì

Trong **Organization -> Tenant Management**, bạn có thể:

- Xem thông tin nhận diện workspace.
- Xem thông tin owner.
- Cập nhật **Company Name** nếu có quyền.
- Xem lại trạng thái workspace.
- Sao chép ID khi support yêu cầu.

ID là mã duy nhất ScaleFlow dùng để nhận diện workspace. Thường chỉ cần ID khi liên hệ support.

Nếu trang ở chế độ chỉ đọc hoặc bị chặn, hãy yêu cầu admin xem lại quyền organization.

## Mở Tenant Management

![Tổng quan Tenant Management](/static/img/open-tenant.png)

1. Trong thanh bên trái, mở **Organization**.
2. Chọn **Tenant Management**.
3. Bạn sẽ thấy hai thẻ thông tin:
   - **Identity**
   - **Ownership**

![Tổng quan Tenant Management](/static/img/tenant-manage.png)

## Hiểu thông tin trên màn hình

### Identity

Bạn có thể xem:

- **Tenant Name** (chỉ đọc)
- **Tenant ID** (chỉ đọc, có biểu tượng copy)
- **Company Name**
  - Có thể sửa khi có quyền quản lý
  - Chỉ đọc khi không có quyền

### Ownership

Bạn có thể xem:

- **Owner Email** (chỉ đọc)
- **Owner ID** (chỉ đọc, có biểu tượng copy)
- Badge **Status**:
  - `Active`
  - `Pending`
  - `Disabled`

### Ngày tháng

Ở cuối trang, bạn có thể xem:

- **Created At**
- **Updated At**

Đây là các trường thông tin và không thể sửa.

## Cập nhật Company Name

1. Trong trường **Company Name**, nhập giá trị mới.
2. Nhấp **Save**.
3. Chờ thông báo thành công: **Tenant updated successfully**.

Nếu cập nhật thất bại, bạn sẽ thấy: **Failed to update tenant**.

## Hủy thay đổi

Nếu đã đổi **Company Name** nhưng không muốn lưu:

1. Nhấp **Discard Changes**.
2. Trường được đặt lại về giá trị mới nhất đã lưu từ server.

## Ví dụ thực tế

Công ty đổi tên thương hiệu công khai từ "ABC Services" thành "ABC Care". Owner workspace mở Tenant Management, cập nhật **Company Name** và lưu để thông tin organization luôn mới.

## Liên kết với các trang thiết lập khác

- Dùng [User Management](./user-management) để thêm người vào workspace.
- Dùng [Team Management](./team-management) để sắp xếp nhân viên.
- Dùng [Roles & Permissions](./roles-permissions) để kiểm soát quyền truy cập.
- Dùng [Tích hợp kênh](../channels/channel-integration) để kết nối các kênh tin nhắn khách hàng.

## Ghi chú

- Trang này không tạo hoặc xóa tenant.
- Chỉ **Company Name** có thể sửa từ màn hình này.
- Nút lưu và hủy chỉ hiển thị với user có quyền quản lý.
- Biểu tượng copy xuất hiện cho trường ID để hỗ trợ khi support yêu cầu thông tin workspace.

## Khắc phục sự cố

### Không thấy Tenant Management trong Organization

- Hỏi admin cấp quyền xem tenant.

### Có thể mở trang nhưng không sửa được gì

- Có thể bạn chỉ có quyền xem.
- Nếu cần cập nhật, hỏi admin cấp quyền quản lý tenant.

### Đã nhấp Save nhưng thay đổi không hiển thị

- Chờ vài giây để dữ liệu làm mới.
- Mở lại trang hoặc làm mới trình duyệt.
- Xác nhận thông báo thành công xuất hiện sau khi lưu.

### Thấy "Failed to load tenant information."

- Làm mới trang và thử lại.
- Nếu vấn đề vẫn tiếp diễn, liên hệ support và cung cấp Tenant ID nếu có.
