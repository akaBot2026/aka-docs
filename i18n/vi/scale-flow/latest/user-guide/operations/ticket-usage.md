---
id: ticket-usage
title: Ticket
sidebar_label: Ticket
sidebar_position: 3
description: Hướng dẫn thân thiện với người mới bắt đầu để tạo, giao và giải quyết ticket hỗ trợ khách hàng trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng Ticket

**Ticket** là một vấn đề hoặc nhiệm vụ khách hàng có thể theo dõi. Dùng ticket khi cuộc trò chuyện cần theo dõi tiếp, người phụ trách, hạn hoàn tất, ghi chú nội bộ hoặc kết quả rõ ràng.

Inbox dùng để trò chuyện với khách hàng. Ticket dùng để đảm bảo công việc quan trọng không bị quên.

## Khi nào dùng ticket

Dùng ticket khi vấn đề cần được theo dõi ngoài một câu trả lời đơn lẻ, chẳng hạn:

- Vấn đề khách hàng kéo dài
- Case cần bàn giao cho đội
- Công việc cần người phụ trách và hạn hoàn tất
- Vấn đề cần ghi chú nội bộ hoặc tệp đính kèm
- Hoàn tiền, khiếu nại, vấn đề giao hàng, case sửa chữa hoặc kiểm tra tài khoản

Ví dụ: Khách hàng hỏi "Đơn hàng của tôi ở đâu?" Nhân viên có thể trả lời trực tiếp trong Inbox. Nhưng nếu đơn bị thất lạc và nhân viên kho phải điều tra, hãy tạo ticket.

## AI làm việc với ticket như thế nào

[AI Assistant](../scaleflow-ai/ai-assistant) có thể hỗ trợ xử lý ticket theo nhiều cách:

- Nhận ra khi cuộc trò chuyện cần nhân viên theo dõi.
- Tạo hoặc gợi ý ticket khi [AI Agent](../scaleflow-ai/ai-agent-usage) cho phép.
- Tóm tắt cuộc trò chuyện để nhân viên nhanh chóng hiểu vấn đề.
- Hỗ trợ soạn câu trả lời cho nhân viên trong khi xử lý ticket.

AI không nên đưa ra quyết định cuối cùng cho các case nhạy cảm như hoàn tiền, khiếu nại pháp lý hoặc vấn đề tài khoản riêng tư, trừ khi doanh nghiệp đã phê duyệt rõ quy trình đó.

## Tạo ticket ở đâu

Để mở trang quản lý ticket, nhấp **Tickets** trong thanh bên (điều hướng chính).

![Mở trang Tickets từ điều hướng](/static/img/open-ticket.png)

Bạn có thể tạo ticket từ hai nơi:

1. **Trang Tickets**  
   Đến **Tickets** và nhấp **Create Ticket**.

![Tạo ticket từ ticket](/static/img/create-ticket-ticket.png)

2. **Màn hình cuộc trò chuyện (Inbox)**  
   Mở cuộc trò chuyện, đến phần ticket rồi nhấp **Create**.

![Tạo ticket từ Inbox](/static/img/create-ticket-inbox.png)

## Tạo ticket

Khi tạo ticket, điền:

![Màn hình tạo ticket](/static/img/create-ticket.png)

- **Title** (bắt buộc)
- **Description** (tùy chọn)
- **Priority** (bắt buộc): `Low`, `Medium`, `High`, `Urgent`
- **Status** (tùy chọn, mặc định là `New`)
- **Type** (tùy chọn)
- **Due date** (tùy chọn)
- **Assign to me** (toggle tùy chọn)

Sau khi lưu, hệ thống tạo ticket ID (ví dụ: `#123`) và mở màn hình chi tiết.

Mẹo cho người mới: Luôn viết tiêu đề rõ ràng. Tiêu đề tốt ngắn nhưng cụ thể, chẳng hạn "Khách báo mất gói hàng" hoặc "Yêu cầu hoàn tiền cho đơn 10245".

## Trạng thái ticket trong ScaleFlow

ScaleFlow hỗ trợ các trạng thái:

- **New**
- **In Progress**
- **Waiting for Customer**
- **Waiting for Internal**
- **On Hold**
- **Resolved**
- **Reopened**
- **Closed**

Hướng dẫn trạng thái đơn giản:

- Dùng **New** khi vấn đề vừa được tạo.
- Dùng **In Progress** khi có người đang chủ động xử lý.
- Dùng **Waiting for Customer** khi cần khách hàng trả lời.
- Dùng **Waiting for Internal** khi cần đội khác hỗ trợ.
- Dùng **Resolved** khi vấn đề đã được giải quyết.
- Dùng **Closed** khi không cần làm gì thêm.

## Quản lý ticket sau khi tạo

Trong chi tiết ticket, người dùng có thể:

![Màn hình chi tiết ticket](/static/img/detail-ticket.png)

- Cập nhật tiêu đề và mô tả
- Thay đổi trạng thái, mức ưu tiên, loại và hạn hoàn tất
- Giao ticket cho **User**, **Team** hoặc **AI agent**
- Thêm **internal notes** để đội phối hợp
- Tải lên và mở tệp đính kèm
- Xem timeline và lịch sử cập nhật

Dùng internal note cho ngữ cảnh chỉ nhân viên được xem, chẳng hạn "Kho đang kiểm tra camera" hoặc "Quản lý đã duyệt đổi hàng."

## Tìm ticket nhanh

Trong danh sách Tickets, dùng:

- Tìm kiếm theo từ khóa
- Bộ lọc: Status, Priority, Assignee, Due date (và Type khi có)
- Cột bảng cho ID, vấn đề, contact, người phụ trách và cập nhật gần nhất
- Export CSV (nếu role cho phép)

## Xóa ticket

Người dùng có quyền quản lý có thể xóa ticket từ danh sách.  
Nếu ticket liên kết với hệ thống bên ngoài, xóa ticket cũng xóa các bản ghi bên ngoài đã liên kết.

Tránh xóa ticket trừ khi chắc chắn ticket được tạo nhầm. Với công việc bình thường, hãy đóng ticket.

## Quy trình đầy đủ: từ chat đến ticket đến giải quyết

1. Khách hàng gửi tin nhắn qua Zalo: "Đơn hàng của tôi bị hư hỏng khi nhận."
2. Tin nhắn xuất hiện trong [Inbox](./inbox-usage).
3. Smart Assistant hỏi mã đơn và ảnh nếu thiết lập cho phép.
4. AI hoặc nhân viên tạo Ticket.
5. Ticket được giao cho đội hỗ trợ.
6. Nhân viên thêm internal note và kiểm tra đơn hàng.
7. Nhân viên trả lời khách hàng trong Inbox.
8. Trạng thái ticket chuyển từ **New** sang **In Progress** rồi **Resolved**.
9. Đóng cuộc trò chuyện khi khách hàng xác nhận vấn đề đã được giải quyết.

## Quy trình gợi ý cho đội

1. Tạo ticket ngay khi vấn đề cần theo dõi.
2. Đặt mức ưu tiên và hạn hoàn tất sớm.
3. Giao người phụ trách rõ ràng (user/team/AI).
4. Dùng internal note cho ngữ cảnh bàn giao.
5. Chuyển trạng thái từng bước cho đến **Resolved** hoặc **Closed**.
6. Mở lại khi vấn đề đã giải quyết quay trở lại.

## Đọc tiếp

- Tìm hiểu cách cuộc trò chuyện đến [Sử dụng Inbox](./inbox-usage).
- Tìm hiểu AI có thể tạo hoặc hỗ trợ ticket như thế nào trong [AI Assistant](../scaleflow-ai/ai-assistant).
- Tìm hiểu cách xây dựng worker AI trong [Sử dụng AI Agent](../scaleflow-ai/ai-agent-usage).
