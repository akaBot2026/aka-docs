---
id: ai-agent-usage
title: Sử dụng AI Agent
sidebar_label: Sử dụng AI Agent
sidebar_position: 1
description: Hướng dẫn thân thiện với người mới bắt đầu để tạo, hướng dẫn, kiểm tra và publish AI Agent cho ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng AI Agent

**AI Agent** là worker AI phía sau [AI Assistant](./ai-assistant). Agent làm theo Instructions của bạn, đọc [Knowledge](./knowledge-usage) và hỗ trợ khách hàng trong Inbox.

Bạn có thể hình dung AI Agent như một đồng đội hỗ trợ đã được đào tạo. Agent không thay thế nhân viên. Agent xử lý câu hỏi đơn giản, thu thập thông tin cơ bản và chuyển case phức tạp cho người thật.

## Khi nào dùng AI Agent

Dùng AI Agent khi:

- Khách hàng thường hỏi lại các câu như giá, giờ mở cửa, bảo hành, giao hàng hoặc chính sách đổi trả.
- Bạn muốn câu trả lời nhất quán từ thông tin doanh nghiệp đã phê duyệt.
- Bạn muốn AI tạo ticket hoặc hỗ trợ nhân viên với tác vụ cơ bản.
- Bạn muốn kiểm tra hành vi AI an toàn trước khi dùng với khách hàng thật.

Ví dụ: Một trường học tạo AI Agent tên `Admissions Assistant`. Agent trả lời câu hỏi về học phí, hồ sơ, hạn chót và giờ làm việc. Khi phụ huynh yêu cầu xem xét học bổng đặc biệt, agent tạo ticket cho đội tuyển sinh.

## Mở AI Agent

1. Trong thanh bên trái, mở **AI Agent**.
2. Chọn **Agents**.
3. Bạn sẽ thấy danh sách agent hiện có.

![Trang danh sách AI Agent](/static/img/list-agent.png)

Nếu không thấy các nút như **Add Agent**, **Import Agent** hoặc **Save Draft**, hãy yêu cầu admin cập nhật quyền.

## Tạo AI Agent đầu tiên

![Tạo agent](/static/img/create-agent.png)

1. Nhấp **Add Agent**.
2. Trong hộp thoại **Create agent**, chọn template:
   - **Basic support**
   - **Contact resolution**
   - **Custom**
3. Nhập:
   - **Name** (bắt buộc)
   - **Description** (tùy chọn)
4. Nhấp **Create**.
5. Hệ thống chuyển đến trang chi tiết agent để thiết lập.

Nếu không chắc, chọn **Basic support**. Đây là điểm bắt đầu dễ nhất cho đội mới.

## Hiểu các phần thiết lập

Trang chi tiết agent được sắp xếp thành các phần thiết lập đơn giản.

### 1. Basic information

![Phần Basic information](/static/img/basic-information.png)

Dùng phần này để đặt tên agent và chọn model AI agent sẽ dùng.

- **Agent Name**: chọn tên rõ ràng, chẳng hạn `Customer Support Assistant`.
- **Description**: giải thích agent sẽ hỗ trợ việc gì.
- **Model**: chọn bộ não AI. Nếu không chắc, dùng model admin khuyến nghị.

Ví dụ mô tả đơn giản:

> Hỗ trợ khách hàng với các câu hỏi phổ biến về sản phẩm, giao hàng, bảo hành và đổi trả. Tạo ticket khi nhân viên cần xem xét case.

### 2. Knowledge

![Phần Knowledge](/static/img/knowledge.png)

Knowledge là thông tin agent dùng để trả lời chính xác. Thêm FAQ, chính sách, chi tiết sản phẩm, tài liệu hoặc trang website.

1. Trên trang chi tiết agent, trong phần **Knowledge**, nhấp **Add Knowledge**.
2. Trong hộp thoại **Add knowledge base**, chọn cách tiếp tục:
   - **Create new**: bắt đầu knowledge base mới và thêm nguồn (tệp, Drive hoặc web) trong flow mở ra. Xem [Sử dụng Knowledge](./knowledge-usage) để tạo và đồng bộ tài liệu.
   - **Choose existing**: chọn một hoặc nhiều knowledge base đã tạo trong thư viện.
3. Nhấp **Next** để tiếp tục (hoặc **Cancel** để đóng mà không đổi).

![Add knowledge base: Create new hoặc Choose existing](/static/img/add-knowledge-agent.png)

4. Nếu chọn **Choose existing**, màn hình **Select existing knowledge** mở ra. Dùng **Search knowledge bases...** nếu danh sách dài. Nhấp từng dòng để chọn hoặc bỏ chọn. Footer cho biết số lượng đã chọn.
5. Nhấp **Add selected** để gắn chúng vào agent này (hoặc **Cancel** để quay lại).

![Chọn knowledge hiện có và Add selected](/static/img/select-knowledge-agent.png)

6. Xác nhận các knowledge base đã chọn xuất hiện trong phần **Knowledge** trên trang agent. Bạn có thể lặp lại **Add Knowledge** để gắn thêm base theo thời gian.

Nếu chưa tạo Knowledge, hãy làm theo [Sử dụng Knowledge](./knowledge-usage) trước.

### 3. Integrations

![Phần Integration](/static/img/integration.png)

Integrations cho phép agent làm việc với công cụ doanh nghiệp đã kết nối như HubSpot, Google Drive, Google Sheets hoặc Make.

Chỉ dùng khi agent cần thông tin từ các công cụ đó hoặc cần thực hiện hành động đã phê duyệt. Người mới có thể bắt đầu không dùng integration rồi thêm sau.

Hướng dẫn thiết lập:

- [Sử dụng Integration](../integrations/integration-usage) — tổng quan và quản lý kết nối
- [Tích hợp Google Drive](../integrations/google-drive-integration)
- [Tích hợp Google Sheets](../integrations/google-sheets-integration)
- [Tích hợp Make](../integrations/make-integration)
- [Kết nối Freshdesk](../integrations/connecting-your-freshdesk-account)

### 4. Instructions

Instructions cho agent biết cách hành xử.

![Cách trả lời](/static/img/instruction-1.png)

Viết quy tắc bằng ngôn ngữ đơn giản:

- Lịch sự và ngắn gọn.
- Chỉ dùng Knowledge đã phê duyệt.
- Mỗi lần hỏi một câu.
- Không đoán giá, chính sách hoặc lời hứa.
- Chuyển cho nhân viên với khiếu nại, hoàn tiền, câu hỏi pháp lý hoặc thông tin nhạy cảm.

![Điều cần tránh](/static/img/instruction-2.png)

Dùng phần "avoid" cho các chủ đề agent không nên tự xử lý.

![Thoát cuộc trò chuyện](/static/img/instruction-3.png)

Dùng phần handoff để giải thích khi nào người thật nên tiếp tục.

### 5. Advanced actions

![Advanced actions](/static/img/advanced.png)

Advanced actions là các tác vụ agent có thể thực hiện khi được cho phép, chẳng hạn:

- Gửi tin nhắn văn bản.
- Giao cuộc trò chuyện.
- Tìm hoặc thêm contact.
- Tạo hoặc cập nhật ticket.

Bắt đầu với ít action hơn. Chỉ thêm khi đã kiểm tra.

## Kiểm tra trước khi publish

![Action agent](/static/img/action-agent.png)

Dùng quy trình an toàn:

1. Cấu hình các phần cần thiết.
2. Nhấp **Save Draft**.
3. Nhấp **Test Version**.
4. Hỏi các câu hỏi thật của khách hàng.
5. Cải thiện Knowledge hoặc Instructions nếu câu trả lời chưa tốt.
6. Chỉ nhấp **Publish Version** khi hài lòng.

Kiểm tra không ảnh hưởng khách hàng thật. Kiểm tra giúp phát hiện Instructions chưa rõ trước khi agent dùng trong Inbox.

## Kết nối AI Agent với AI Assistant

Sau khi publish:

1. Mở [AI Assistant](./ai-assistant).
2. Chọn **Smart Assistant**.
3. Chọn agent này.
4. Quyết định khi nào agent chạy.
5. Bật **Enabled** và lưu.

## Quy trình thực tế

1. Admin tạo Knowledge với FAQ, chính sách giao hàng và chính sách đổi trả.
2. Admin tạo AI Agent tên `Shop Support Assistant`.
3. Admin kết nối Knowledge với agent.
4. Admin kiểm tra các câu như "Giao hàng mất bao lâu?"
5. Admin publish agent.
6. Admin bật Smart Assistant trong [AI Assistant](./ai-assistant).
7. Khách hàng nhận câu trả lời nhanh hơn trong [Inbox](../operations/inbox-usage).
8. Vấn đề phức tạp trở thành [Tickets](../operations/ticket-usage) cho nhân viên.

## Import agent hiện có

![Import agent](/static/img/import-agent.png)

Chỉ dùng import nếu đội đã có tệp agent được export.

1. Trên trang danh sách agent, nhấp **Import Agent**.
2. Chọn tệp đã export.
3. Trong hộp thoại **Import agent**, xem lại thông tin đã import.
4. Cập nhật **Name** và **Description** nếu cần.
5. Nhấp **Import Agent**.

## Xem lại hoạt động AI

Với version đã publish, mở **Execution tasks** để:

- Xem thời điểm agent chạy.
- Kiểm tra lượt chạy thành công hay thất bại.
- Hiểu vì sao câu trả lời được tạo.

Hữu ích khi khách hàng hỏi: "Tại sao AI trả lời như vậy?"

## Thực hành tốt nhất

- Đặt tên agent rõ theo mục đích, như `Support Assistant` hoặc `Sales FAQ Assistant`.
- Giữ agent tập trung. Một agent không nên xử lý mọi quy trình doanh nghiệp cùng lúc.
- Kiểm tra bằng câu hỏi thật trước khi publish.
- Cập nhật Knowledge trước khi thiếu câu trả lời.
- Dùng ticket cho công việc cần nhân viên theo dõi.

## Khắc phục nhanh

### Không thấy Agents hoặc không mở được chi tiết agent

- Hỏi admin cấp quyền xem AI Agent.

### Có thể xem nhưng không tạo/sửa/publish/xóa

- Hỏi admin cấp quyền quản lý AI Agent.

### Không thể dùng Import Agent

- Hỏi admin bạn có quyền upload tệp không.

### Không thấy execution tasks

- **Execution tasks** chỉ có với version **đã publish**.
