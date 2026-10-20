---
id: inbox-usage
title: Inbox
sidebar_label: Inbox
sidebar_position: 1
description: Hướng dẫn thân thiện với người mới bắt đầu để nhận, trả lời, giao và theo dõi cuộc trò chuyện khách hàng trong Inbox.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng Inbox

Inbox là nơi chính để đội ngũ đọc và trả lời tin nhắn khách hàng.

Tin nhắn đến từ các kênh đã kết nối như Zalo OA, Facebook Messenger, WhatsApp và Telegram. Nếu bật [AI Assistant](../scaleflow-ai/ai-assistant), AI có thể hỗ trợ trả lời, tóm tắt hoặc bàn giao cuộc trò chuyện cho nhân viên.

## Inbox dùng để làm gì

Dùng Inbox để:

- Xem tất cả cuộc trò chuyện khách hàng tại một nơi.
- Trả lời khách hàng.
- Thêm ghi chú nội bộ chỉ đội ngũ thấy.
- Giao cuộc trò chuyện cho user, team hoặc AI Assistant.
- Tạo hoặc xem ticket liên quan đến khách hàng.
- Kiểm tra chi tiết contact trong khi chat.

Ví dụ: Khách hàng gửi tin nhắn Facebook hỏi về giao hàng. Tin nhắn xuất hiện trong Inbox. AI Assistant đề xuất câu trả lời. Nhân viên xem lại, gửi và cập nhật stage của contact.

## Mở Inbox

![Tổng quan Inbox với bố cục 3 cột](/static/img/open-inbox.png)

1. Trong thanh bên trái, nhấp **Inbox**.
2. Trang mở theo bố cục 3 cột:
   - Bên trái: danh mục inbox
   - Ở giữa: danh sách cuộc trò chuyện
   - Bên phải: cuộc trò chuyện đang hoạt động + panel contact

Nếu không mở được Inbox, hãy yêu cầu admin kiểm tra quyền truy cập Inbox.

## Tin nhắn đến từ đâu

Inbox nhận tin nhắn từ các kênh doanh nghiệp kết nối trong [Tích hợp kênh](../channels/channel-integration).

Ví dụ phổ biến:

- Tin nhắn Zalo OA từ khách hàng Việt Nam.
- Tin nhắn Facebook Messenger từ page doanh nghiệp.
- Tin nhắn WhatsApp từ khách hàng dùng số doanh nghiệp.
- Tin nhắn Telegram gửi đến bot doanh nghiệp.

Nếu tin nhắn không xuất hiện trong Inbox, trước tiên hãy test hoặc reconnect kênh.

## Hiểu các danh mục bên trái

![Hiểu các danh mục bên trái](/static/img/left-categories-panel.png)

Danh mục Inbox hiển thị trong panel bên trái:

- **My inbox**
  - **Assigned to me**
  - **Assigned to my team**
  - **Mentions**
  - **Unassigned**
- **Lifecycle stages** (danh sách động từ tag workspace)
- **Company inbox**
  - **All**

Bắt đầu với **Assigned to me** nếu là nhân viên. Dùng **Unassigned** khi nhận việc mới.

## Làm việc với danh sách cuộc trò chuyện

Trong panel giữa, bạn có thể:

- **Search** cuộc trò chuyện theo từ khóa
- **Sort** theo mới nhất hoặc cũ nhất
- **Filter** theo:
  - Channel
  - Contact labels
  - Lifecycle stage
- Cuộn để tự động tải thêm cuộc trò chuyện

![Danh sách cuộc trò chuyện với tìm kiếm, sắp xếp và bộ lọc](/static/img/conversation-list-search-sort-filter.png)

Nhấp bất kỳ dòng cuộc trò chuyện nào để mở.

## Mở và hiểu một cuộc trò chuyện

Mỗi dòng có thể hiển thị:

- Avatar contact và badge kênh
- Tiêu đề cuộc trò chuyện/tên contact
- Bản xem trước tin nhắn gần nhất
- Thời gian tương đối (ví dụ "5m ago")
- Badge contact/lifecycle

## Dùng header cuộc trò chuyện (đầu khu vực chat)

![Dùng header cuộc trò chuyện](/static/img/conversation-header-actions.png)

Khi cuộc trò chuyện mở, header cho phép bạn:

- Chọn một kênh cụ thể hoặc giữ **All channels**
- Đổi lifecycle stage cho contact
- Chuyển nhanh sang lifecycle stage tiếp theo
- Giao/bỏ giao cuộc trò chuyện cho:
  - User
  - Team
  - AI Assistant
- Hiện/ẩn panel thông tin contact bên phải

Giao cho **AI Assistant** khi muốn AI tiếp tục hỗ trợ cuộc trò chuyện theo cài đặt assistant. Giao cho **user** hoặc **team** khi người thật nên sở hữu bước tiếp theo.

## Trả lời khách hàng hoặc thêm ghi chú nội bộ

![Trả lời khách hàng hoặc thêm ghi chú nội bộ](/static/img/reply_internal_note.png)

Ở khu vực nhập phía dưới:

1. Chọn tab:
   - **Reply**: gửi tin nhắn cho khách hàng
   - **Internal note**: chỉ thêm ghi chú nội bộ
2. Nhập tin nhắn.
3. (Tùy chọn) Đính kèm tệp bằng nút upload.
4. Nhấp **Send** (hoặc **Add Note** trong tab Internal note).

Nếu mở được cuộc trò chuyện nhưng không thể nhập/gửi, bạn đang ở chế độ chỉ đọc cho cuộc trò chuyện đó.

## AI Assistant hỗ trợ trong Inbox như thế nào

![AI assistant trong composer Inbox](/static/img/ai-assistant-inbox.png)

Khi bật AI Assistant:

- **Smart Assistant** có thể tự động trả lời khi được cấu hình.
- **Smart Summary** có thể tóm tắt cuộc trò chuyện cho nhân viên.
- **Smart Writing** có thể cải thiện bản nháp bạn đã nhập.
- **Follow-up Assistant** có thể gửi follow-up sau một khoảng thời gian không có hoạt động.

AI có thể tự động trả lời khi Smart Assistant được bật, lịch cho phép và cuộc trò chuyện khớp với Instructions.

AI nên bàn giao cho người thật khi:

- Khách hàng tức giận hoặc khiếu nại.
- Khách yêu cầu hoàn tiền, hủy hoặc ngoại lệ.
- Yêu cầu cần kiểm tra tài khoản hoặc đơn hàng riêng tư.
- Câu trả lời không có trong Knowledge.
- Cần ticket để theo dõi tiếp.

Để bật hoặc tắt hành vi AI, đến [AI Assistant](../scaleflow-ai/ai-assistant) và thay đổi công tắc **Enabled** hoặc lịch.

## Trả lời một tin nhắn cụ thể

Trên mỗi tin nhắn, mở menu thao tác để:

- Copy message
- Reply cho đúng tin nhắn đó (trả lời dạng trích dẫn)
- Copy message link

![Menu thao tác tin nhắn trong cuộc trò chuyện](/static/img/action-message.png)

Sau khi chọn reply, bản xem trước reply xuất hiện phía trên ô nhập. Bạn có thể xóa trước khi gửi.

## Dùng panel contact (bên phải)

Panel bên phải hiển thị chi tiết contact của cuộc trò chuyện đang hoạt động.

Các tab chính:

- **Contact**: các trường hồ sơ contact cốt lõi
- **Tickets**: xem ticket liên quan và tạo ticket mới
- **Attachments**: tệp liên quan đến contact

![Panel hồ sơ contact trong Inbox](/static/img/profile-inbox.png)

Bạn cũng có thể mở trang contact đầy đủ bằng biểu tượng liên kết ngoài trong header panel.

![Mở rộng contact](/static/img/expand-contact.png)

## Test chat (mô phỏng an toàn)

![Test chat](/static/img/test-chat.png)

Trong thao tác header Inbox, biểu tượng bình mở **Test Chat** (nếu role cho phép).

Dùng để mô phỏng tin nhắn khách hàng cho kiểm thử nội bộ:

- Tin nhắn chỉ dành cho kiểm thử
- Không ảnh hưởng khách hàng thật
- Tin nhắn kiểm thử đầu tiên có thể tự động tạo cuộc trò chuyện test trong Inbox

Dùng Test Chat trước khi bật Smart Assistant cho khách hàng thật.

## Quy trình từ chat đến ticket

Dùng ticket khi cuộc trò chuyện cần theo dõi ngoài một câu trả lời đơn giản.

Trước khi chờ ticket tự động tạo, hãy đảm bảo thao tác ticket đã bật trong cấu hình AI Agent.

![Bật thao tác ticket trong cài đặt AI Agent](/static/img/setting-ticket-inbox.png)

Checklist quan trọng để tự động tạo ticket:

- Trong [AI Agent](../scaleflow-ai/ai-agent-usage), mở **Advanced actions** và bật thao tác ticket (create/update ticket).
- Trong Instructions của agent, thêm quy tắc rõ ràng như: khiếu nại/hoàn tiền/bồi thường/vấn đề thanh toán -> tạo ticket và bàn giao cho nhân viên.
- Publish version của agent sau khi đổi thao tác/Instructions.
- Trong [AI Assistant](../scaleflow-ai/ai-assistant), đảm bảo **Smart Assistant** được bật và đang dùng version đã publish.

Ví dụ:

1. Khách hàng hỏi qua Zalo: "Gói hàng của tôi bị mất."
2. Smart Assistant hỏi mã đơn.
3. Khách hàng cung cấp mã đơn.
4. AI tạo hoặc đề xuất một [Ticket](./ticket-usage).
5. Nhân viên được giao điều tra.
6. Nhân viên cập nhật trạng thái ticket cho đến khi vấn đề được giải quyết.
7. Nhân viên trả lời khách hàng trong Inbox và đóng cuộc trò chuyện.

![AI tạo ticket từ cuộc trò chuyện trong Inbox](/static/img/ai-create-ticket.png)

Nếu AI nói cần hỗ trợ của người nhưng không tạo ticket, trước tiên kiểm tra checklist thiết lập ở trên. Hầu hết trường hợp là thao tác ticket đã tắt hoặc version agent trong Smart Assistant chưa được publish lại sau khi thay đổi.

## Quy trình hằng ngày được khuyến nghị

1. Bắt đầu từ **Assigned to me**.
2. Mở một cuộc trò chuyện và xem thông tin contact trước.
3. Dùng **Reply** cho tin nhắn khách hàng và **Internal note** cho ngữ cảnh đội.
4. Đặt lifecycle stage và assignment trước khi chuyển sang cuộc trò chuyện tiếp theo.
5. Dùng bộ lọc khi hàng đợi lớn (channel + lifecycle stage thường là đủ).

## Đọc tiếp

- Cần kết nối nguồn tin nhắn? Xem [Tích hợp kênh](../channels/channel-integration).
- Cần AI tự động trả lời? Xem [AI Assistant](../scaleflow-ai/ai-assistant).
- Cần theo dõi vấn đề khách hàng? Xem [Sử dụng Ticket](./ticket-usage).
