---
id: analytics-usage
title: Analytics
sidebar_label: Analytics
sidebar_position: 5
description: Hướng dẫn thân thiện với người mới bắt đầu để hiểu hoạt động hỗ trợ khách hàng qua Analytics.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng Analytics

Analytics giúp bạn hiểu những gì đang diễn ra trong hoạt động hỗ trợ khách hàng. Tính năng hiển thị hoạt động tin nhắn, cuộc trò chuyện, ticket, contact và broadcast theo thời gian.

Dùng Analytics khi muốn trả lời các câu hỏi như:

- Tuần này chúng ta có nhận nhiều tin nhắn khách hàng hơn không?
- Kênh nào bận rộn nhất?
- Có bao nhiêu ticket được tạo hoặc giải quyết?
- Có nhiều khách hàng đang chờ hỗ trợ không?
- Số contact có tăng theo thời gian không?
- Broadcast gần nhất hoạt động như thế nào?

## Analytics theo dõi gì

Analytics giúp bạn theo dõi hoạt động vận hành theo thời gian, gồm:

- Contact mới
- Tin nhắn nhận/gửi
- Cuộc trò chuyện được tạo/cập nhật
- Hoạt động ticket (đã tạo, đã giải quyết, mở lại, giao, thay đổi mức ưu tiên)
- Hoạt động vòng đời contact
- Hoạt động campaign broadcast

## Mở Analytics

1. Trong thanh bên trái, nhấp **Analytics**.
2. Chọn một trong các phần:
   - **Overview**
   - **Conversation**
   - **Message**
   - **Ticket**
   - **Contact**
   - **Broadcast**

Nếu không thấy Analytics, hãy yêu cầu admin xem lại quyền truy cập role.

## Dùng thanh công cụ (đầu trang)

### 1) Khoảng thời gian

Bạn có thể chọn:

- **Today**
- **Current month**
- **Select month** (hiển thị bộ chọn tháng)
- **Yesterday**
- **Last 7 days**
- **Last 14 days**
- **Last 30 days**

### 2) Reset

- Nhấp **Reset** để đưa bộ lọc về mặc định:
  - Trong **Overview**: đặt lại thành `Today`
  - Trong các tab khác: đặt lại thành `Current month`

### 3) Export (Excel)

- Trong các tab **Conversation / Message / Ticket / Contact**, nhấp **Export**.
- Hệ thống tự động tải tệp Excel.
- **Overview** không hiển thị Export.

## Hiểu từng tab Analytics

### 1. Overview

Overview hiển thị các thẻ tổng quan và biểu đồ xu hướng:

- **New Contacts**
- **New Messages** (bao gồm kênh đứng đầu)
- **New Conversations** (bao gồm kênh đứng đầu)
- **Tickets** (đã giải quyết + mở lại/mới)

![Tab analytics Overview](/static/img/overview.png)

Bên dưới các thẻ, bạn sẽ thấy 4 biểu đồ xu hướng:

- New Contacts
- New Messages
- New Conversations
- Tickets (New, Reopened, Resolved)

### 2. Conversation

Dùng tab này để hiểu khối lượng và người sở hữu cuộc trò chuyện.

Biểu đồ gồm:

- **Conversation Created**
- **Conversation Status Changed**
- **Conversation Assigned**

![Tab analytics Conversation](/static/img/conversation.png)

Mỗi biểu đồ có thể có các bộ lọc:

- **Dimension** (ví dụ Channel type, Channel, New status, Assignee)
- **Value** (chọn một giá trị hoặc **All**)

Nếu chọn **All** ở dimension dạng enum, bạn có thể đổi kiểu hiển thị:

- **Grouped**
- **Stacked**

### 3. Message

Dùng tab này để hiểu hoạt động tin nhắn đến và đi.

Biểu đồ gồm:

- **Message Received**
- **Message Sent**

![Tab analytics Message](/static/img/message.png)

Bạn có thể lọc theo các dimension như:

- Channel type
- Channel

### 4. Ticket

Dùng tab này để hiểu khối lượng hỗ trợ và việc giải quyết vấn đề.

Biểu đồ gồm:

- **Ticket Created**
- **Ticket Resolved**
- **Ticket Reopened**
- **Ticket Assigned**
- **Ticket Priority Changed**

![Tab analytics Ticket](/static/img/ticket.png)

Dimension phổ biến gồm:

- Ticket type
- Contact
- Assignee
- New priority

### 5. Contact

Dùng tab này để hiểu tăng trưởng khách hàng và thay đổi contact.

Biểu đồ gồm:

- **Contact Created**
- **Contact Identity Linked**

![Tab analytics Contact](/static/img/contact.png)

Dimension phổ biến:

- Lifecycle stage

### 6. Broadcast

Dùng tab này sau khi gửi [Broadcasts](./broadcast-usage). Tab giúp bạn xem tin nhắn hàng loạt hoạt động ra sao theo thời gian (ví dụ lượt gửi, phân phối và hoạt động liên quan).

![Tab analytics Broadcast](/static/img/analytic-broadcast.png)

Để xem chi tiết cấp người nhận của một lượt gửi, mở trang **Overview** của broadcast đó trong Broadcasts (Sent / Delivered / Read / Replied / Failed).

## Cách đọc nhanh biểu đồ

- Trục ngang = thời gian
- Trục dọc = số sự kiện
- Di chuột lên cột/đường để xem giá trị chính xác
- Dùng **Dimension + Value** để trả lời câu hỏi cụ thể (ví dụ "Có bao nhiêu ticket được mở lại cho một loại ticket?")

## Ví dụ thực tế

### Xem xét hỗ trợ hằng tuần

1. Mở **Overview**.
2. Chọn **Last 7 days**.
3. Kiểm tra tin nhắn hoặc ticket có tăng không.
4. Mở **Ticket** để xem case đã giải quyết và mở lại.
5. Export báo cáo cho cuộc họp đội hằng tuần.

### Kiểm tra hiệu suất kênh

1. Mở **Message**.
2. Chọn **Last 30 days**.
3. Lọc theo loại kênh.
4. So sánh hoạt động Zalo, Facebook, WhatsApp hoặc Telegram.
5. Quyết định nơi cần bố trí nhân viên nhiều nhất.

## Quy trình gợi ý

1. Bắt đầu với **Overview** để phát hiện thay đổi bất thường.
2. Chuyển đến tab chi tiết (Conversation, Message, Ticket, Contact).
3. Ban đầu giữ khoảng thời gian nhỏ (Today / Last 7 days) để phát hiện mẫu nhanh hơn.
4. Dùng bộ lọc dimension để cô lập một kênh/đội/trạng thái.
5. Export Excel khi cần chia sẻ với quản lý hoặc đưa vào báo cáo hằng tuần.

## Analytics liên kết với các tính năng khác như thế nào

- [Inbox](./inbox-usage) tạo hoạt động cuộc trò chuyện và tin nhắn.
- [Tickets](./ticket-usage) tạo hoạt động ticket.
- [Contacts](./contact-management) tạo hoạt động contact.
- [Broadcasts](./broadcast-usage) tạo hoạt động broadcast.
- [AI Assistant](../scaleflow-ai/ai-assistant) có thể giảm khối lượng thủ công, còn Analytics giúp theo dõi tác động vận hành.

## Khắc phục nhanh

### Không thấy menu Analytics

- Hỏi admin để được cấp quyền Analytics.

### Không thấy nút Export

- Export chỉ xuất hiện trong các tab **Conversation / Message / Ticket / Contact**.
- Export được ẩn trong **Overview** theo thiết kế.

### Đã nhấp Export nhưng không tải được tệp

- Kiểm tra quyền tải xuống/hạn chế popup của trình duyệt.
- Thử lại sau khi thu hẹp khoảng thời gian.

### Biểu đồ trống

- Đổi khoảng thời gian sang giai đoạn chắc chắn có hoạt động.
- Xóa bộ lọc bằng cách đặt **Value = All**.
