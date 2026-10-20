---
id: data-masking
title: Data Masking
sidebar_label: Data Masking
sidebar_position: 6
description: Hướng dẫn thân thiện với người mới bắt đầu để ẩn thông tin contact nhạy cảm (điện thoại, email, tên) đối với các role được chọn.
displayed_sidebar: scaleFlowSidebar
---

# Data Masking

**Data Masking** giúp bạn ẩn thông tin khách hàng nhạy cảm khỏi những người không cần xem giá trị đầy đủ.

Ví dụ, nhân viên tập sự vẫn có thể làm việc trong Inbox nhưng số điện thoại có thể hiển thị `*******89` thay vì toàn bộ số. Admin vẫn có thể xem mọi thứ nếu role không nằm trong danh sách bị mask.

---

## Data Masking dùng để làm gì

Dùng khi muốn:

- Bảo vệ số điện thoại hoặc email khách hàng khỏi việc xem tùy tiện
- Giới hạn những gì một số role có thể thấy trên thẻ contact
- Tuân thủ quy định riêng tư nội bộ mà không xóa người dùng khỏi ScaleFlow

Các trường bị mask liên quan đến **cách dữ liệu được hiển thị**. Thông tin vẫn có thể tồn tại trong hệ thống để người được phép xem.

---

## Trước khi bắt đầu

- Bạn cần quyền quản lý **Data Masking**
- [Roles](./roles-permissions) nên đã tồn tại (để chọn ai thấy giá trị bị mask)
- Quyết định trường nào quan trọng nhất: phone, email, first name, last name

---

## Mở Data Masking

1. Trong thanh bên trái, mở **Organization**.
2. Chọn **Data Masking**.
3. Đọc mô tả ngắn: kiểm soát cách dữ liệu contact nhạy cảm hiển thị trên workspace.

![Mở Data Masking](/static/img/open-data-working.png)

---

## Thêm quy tắc masking

1. Nhấp **Add Rule**.
2. Trong **Add Masking Rule**:
   - Chọn **Contact Property** (Phone Number, Email, First Name hoặc Last Name)
   - Chọn **Masking Style** (ẩn toàn bộ, ẩn một phần hoặc biến thể email/phone)
   - Nếu chọn kiểu một phần, đặt số ký tự/chữ số cần ẩn và phía bắt đầu
   - Kiểm tra **Preview** trực tiếp để biết giá trị sẽ hiển thị như thế nào
   - Chọn **Masked Roles** — các role sẽ thấy phiên bản đã mask
   - Bật **Rule Enabled** khi muốn kích hoạt
3. Lưu quy tắc.

![Thêm quy tắc masking](/static/img/dialog-add-masking.png)

---

## Sửa hoặc xóa quy tắc

- Dùng **Edit** để thay đổi trường, kiểu, role hoặc công tắc enabled.
- Dùng **Delete** và xác nhận **Delete Masking Rule?** khi không còn cần quy tắc.
- Dùng **Search Masking Rules** khi danh sách dài lên.

---

## Cảnh báo quan trọng (đọc một lần)

Nếu một role vừa:

- nằm trong **Masked Roles**, vừa
- được phép quản lý contact đầy đủ,

role đó có thể gặp khó khăn khi tạo hoặc cập nhật contact vì giá trị bị ẩn. Nên dùng masking cho role chỉ cần xem hoặc trả lời, không dùng cho admin quản lý contact đầy đủ.

---

## Ví dụ hằng ngày

Công ty tuyển nhân viên theo mùa. Admin tạo quy tắc:

- Property: **Phone Number**
- Style: mask một phần (chỉ hiển thị các chữ số cuối)
- Masked roles: **Agent**

Agent vẫn có thể hỗ trợ khách hàng trong Inbox nhưng không thể tùy tiện sao chép số điện thoại đầy đủ. Quản lý có role không bị mask vẫn thấy toàn bộ số khi cần.

---

## Mẹo

1. Bắt đầu với **một trường** (thường là phone hoặc email) và kiểm tra bằng role người dùng mẫu.
2. Luôn dùng **Preview** — dễ hơn đoán.
3. Xem lại quy tắc khi thêm [Roles](./roles-permissions) mới.
4. Nói cho đội ngũ biết cần làm gì nếu cần giá trị đầy đủ (hỏi lead, escalates, v.v.).

---

## Hướng dẫn liên quan

- [Roles và quyền](./roles-permissions)
- [Quản lý User](./user-management)
- [Quản lý Contact](../operations/contact-management)
- [Quản lý Tenant](./tenant-management)
