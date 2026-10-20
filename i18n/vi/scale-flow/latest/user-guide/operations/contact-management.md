---
id: contact-management
title: Contact
sidebar_label: Contact
sidebar_position: 2
description: Hướng dẫn thân thiện với người mới bắt đầu để tạo, sắp xếp, nhập và sử dụng contact khách hàng trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Quản lý Contact

Contact là hồ sơ khách hàng. Một contact lưu thông tin quan trọng của khách hàng ở một nơi, chẳng hạn tên, số điện thoại, email, nhãn, lifecycle stage và lịch sử cuộc trò chuyện.

Dùng Contacts khi muốn đội ngũ hiểu khách hàng là ai trước khi trả lời trong [Inbox](./inbox-usage) hoặc xử lý [Ticket](./ticket-usage).

## Contacts dùng để làm gì

Trong khu vực **Contacts**, bạn có thể:

- Xem tất cả contact trong một bảng
- Tìm contact theo tên, email hoặc số điện thoại
- Lọc contact theo nhãn, lead source, lead stage, lifecycle stage, list và mức ưu tiên
- Thêm contact mới thủ công
- Nhập hàng loạt contact từ CSV hoặc XLSX
- Export một hoặc nhiều contact ra CSV
- Mở trang chi tiết contact và cập nhật thuộc tính
- Sắp xếp contact bằng tag (label, list, tag lead/lifecycle)
- [Gộp contact trùng lặp](./contact-merge) vào một hồ sơ

Ví dụ: Hôm nay khách hàng nhắn qua Zalo và tuần sau nhắn qua Facebook. Thông tin contact giúp đội ngũ nhận ra cả hai cuộc trò chuyện thuộc cùng một người.

## Mở workspace Contacts

1. Trong menu bên trái, nhấp **Contacts** để mở trang Contacts.

![Mở trang Contacts từ điều hướng](/static/img/open-contact.png)
2. Bạn sẽ thấy:
   - **All Contacts**
   - **Tags**
   - **New contact** nếu role có thể quản lý contact
   - **Import contacts** nếu role có thể quản lý contact

Nếu thiếu các nút như **New contact**, **Import contacts** hoặc thao tác sửa/xóa tag, hãy yêu cầu admin cấp quyền quản lý contact.


Bạn có thể mở biểu mẫu **New contact** theo hai cách. Cả hai đều dẫn đến cùng một màn hình.

**Tùy chọn 1 — từ All Contacts**

1. Đến **Contacts** → **All Contacts**.
2. Nhấp **Add contact** trên thanh công cụ trang (phía trên bảng contact).

![Thêm contact từ All Contacts](/static/img/add-contact.png)

**Tùy chọn 2 — từ thanh bên**

1. Trong menu bên trái, bên dưới **Contacts**, nhấp **New contact**.

![Mở New contact từ thanh bên](/static/img/new-contact-1.png)

Sau khi biểu mẫu mở:

1. Điền thông tin contact:
   - First name / Last name
   - Phone number
   - Email
   - Labels
   - Lifecycle stage
   - Country
2. Điền thông tin bổ sung (tùy chọn):
   - Company name
   - Job title
   - Lead stage
   - Lead source
   - Priority
   - Subscriber (on/off)
   - Lists
3. Nhấp **Save**.


Quan trọng: phải nhập ít nhất một trong hai trường **First name** hoặc **Last name**.

Dùng tạo thủ công khi thêm từng khách hàng, chẳng hạn khách VIP, đối tác hoặc lead từ cuộc gọi.

## Tìm contact nhanh

Trên trang **All Contacts**:

- Dùng ô tìm kiếm để tìm theo tên, email hoặc số điện thoại.

![Bộ lọc contact trên All Contacts](/static/img/list-contact.png)

- Dùng filter chip để thu hẹp kết quả:
  - Label
  - Lead source
  - Lead stage
  - Lifecycle stage
  - List
  - Priority
- Dùng **Reset** để xóa tất cả bộ lọc.

## Cập nhật contact từ trang chi tiết

1. Mở contact từ bảng.
2. Trong **Contact property**, nhấp biểu tượng bút chì trên trường muốn sửa.
3. Thay đổi giá trị và xác nhận.

Các trường có thể sửa trong triển khai hiện tại gồm:
- First name, last name
- Email, phone number
- Job title, company name
- Lead stage, lead source, lifecycle stage
- Priority, country
- Last channel và last contact

Bạn cũng có thể:
- Thêm/xóa **Labels**
- Thêm/xóa **Lists**
- Nhấp **Send message** để mở cuộc trò chuyện liên quan trong Inbox (nếu có)

## Nhập hàng loạt contact (CSV/XLSX)

Dùng import khi đã có nhiều contact trong spreadsheet.


![Nút import contact](/static/img/button-import-contact.png)

Đến **Contacts** -> **Import contacts** và làm theo 4 bước:

![Import contact](/static/img/import-contact.png)

1. **Prepare**
   - Đọc checklist import
   - Tải CSV/XLSX mẫu nếu cần
2. **Upload**
   - Tải lên hoặc kéo thả tệp `.csv` hoặc `.xlsx`
3. **Match**
   - Ghép các cột trong tệp với trường ScaleFlow
   - Chọn thao tác cho mỗi cột:
     - **Overwrite**
     - **Update blank only**
     - **Add appendix**
     - **Content mapping** (dùng để phát hiện contact hiện có)
4. **Define**
   - Tùy chọn thêm tất cả contact đã nhập vào các list đã chọn
   - Xem lại tóm tắt rồi nhấp **Import contacts**

Sau khi import, ScaleFlow cho biết có bao nhiêu contact được tạo và bao nhiêu contact được cập nhật.

Ví dụ đơn giản: Đội sales có 500 lead trong Excel. Import tệp, ghép các cột như tên, điện thoại và email, rồi đưa tất cả contact đã nhập vào list `May Campaign`.

## Export contact

![Export contact](/static/img/export-contact.png)

Từ **All Contacts**:
- Dùng thao tác trên dòng để export một contact
- Dùng menu thao tác phía trên để export contact ra CSV

## Xóa contact

![Delete contact](/static/img/delete-contact.png)

- Chọn một hoặc nhiều contact rồi nhấp **Delete selected**
- Bạn cũng có thể xóa từ thao tác trên dòng

Lưu ý: hiện chưa thể xóa một số contact nếu họ đã có cuộc trò chuyện.

## Quản lý tag (Labels, Lists, Lead/Lifecycle tags)

Quản lý tag hiện nằm trong **Settings**, không còn ở tab Contacts.

### Mở quản lý tag

1. Đến **Settings**.
2. Trong **Tags**, mở trang của một loại tag cụ thể:
   - **Labels**
   - **Lists**
   - **Lead stages**
   - **Lead sources**
   - **Lifecycle stages**
   - **Ticket types**

Lưu ý: URL cũ **Contacts -> Tags** hiện là đường dẫn legacy và chuyển hướng đến **Settings -> Labels**.

### Có thể làm gì trên từng trang loại tag

![Quản lý tag với bộ lọc loại](/static/img/list-tags-contact.png)

- Tìm tag trong trang loại hiện tại
- Tạo tag mới cho loại đó
- Sửa **display name** và **color** của tag hiện có
- Xóa tag
- Sắp xếp lại tag bằng kéo thả (lưu theo thứ tự hiển thị)

![Hộp thoại tạo tag mới](/static/img/create-tag.png)

Hành vi quan trọng trong triển khai hiện tại:

- Mỗi trang đã được giới hạn vào một loại tag (không có bộ lọc type trong trang).
- Tag mới tự tạo `name` nội bộ từ display name; flow edit cập nhật display name/color.
- Reorder chỉ chạy cập nhật cho các mục thực sự thay đổi thứ tự.
- Thao tác create/edit/delete/reorder yêu cầu quyền quản lý contact.

## Contacts liên kết với các tính năng khác như thế nào

- [Inbox](./inbox-usage): nhân viên thấy thông tin contact khi trả lời.
- [Tickets](./ticket-usage): ticket có thể liên kết với khách hàng.
- [Analytics](./analytics-usage): hoạt động contact giúp quản lý hiểu tăng trưởng và dịch chuyển khách hàng.
- [AI Assistant](../scaleflow-ai/ai-assistant): AI có thể dùng ngữ cảnh cuộc trò chuyện và chi tiết contact khi thiết lập cho phép.
- [Gộp contact](./contact-merge): kết hợp hồ sơ trùng lặp thành một.

## Hướng dẫn liên quan

- [Gộp contact](./contact-merge)
- [Thẻ và danh sách workspace](../settings/workspace-tags)

## Quy trình thực tế

1. Khách hàng mới gửi tin nhắn từ Facebook.
2. ScaleFlow tạo hoặc liên kết contact.
3. Nhân viên mở panel contact trong Inbox.
4. Nhân viên thêm nhãn như `Interested in premium plan`.
5. Nếu cần theo dõi tiếp, nhân viên tạo ticket.
6. Đồng đội tiếp theo có thể xem lịch sử contact trước khi trả lời.

## Giới hạn hiện tại của trang

Trong chi tiết contact, các tab trung tâm sau hiện là phần placeholder:
- Associations
- Remarks
- Media

Bố cục được hiển thị nhưng dữ liệu nghiệp vụ đầy đủ cho các tab này chưa được triển khai hoàn chỉnh.
