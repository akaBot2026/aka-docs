---
id: ai-assistant
title: AI Assistant
sidebar_label: AI Assistant
sidebar_position: 4
description: Hướng dẫn thân thiện với người mới bắt đầu về AI Assistant, Smart Assistant, trả lời tự động, tóm tắt và bàn giao cho nhân viên.
displayed_sidebar: scaleFlowSidebar
---

# AI Assistant

AI Assistant là khu vực AI chính cho Inbox. Tính năng giúp đội ngũ trả lời nhanh hơn, tóm tắt cuộc trò chuyện, tiếp tục các tác vụ hỗ trợ đơn giản và biết khi nào nhân viên cần can thiệp.

Hãy hình dung AI Assistant như một thành viên hữu ích trong đội, có thể đọc cuộc trò chuyện gần đây, dùng Knowledge doanh nghiệp và hỗ trợ khách hàng theo các quy tắc bạn đặt.

## AI Assistant, Inbox Assistant và Inbox Copilot

Trong hướng dẫn này, **AI Assistant** là tên chung cho mọi trợ lý AI liên quan đến inbox (Smart Assistant, Smart Reply, Smart Summary, Smart Writing và Follow-up Assistant). Chúng tôi dùng một nhãn rõ ràng để người đọc biết các tính năng này thuộc cùng khu vực “hỗ trợ AI cho cuộc trò chuyện”.

Trong giao diện ScaleFlow, bạn mở các cài đặt này dưới **AI** → **Inbox Assistant**. Tên menu đó là nhãn sản phẩm cho cùng một bộ khả năng.

Bạn vẫn có thể thấy **Inbox Copilot** ở một số nơi—thường là tên nội bộ trong URL ứng dụng (ví dụ `/ai/inbox-copilot`), identifier kỹ thuật hoặc ảnh chụp/tên tệp cũ. **Inbox Copilot và Inbox Assistant trỏ đến cùng các trang cài đặt**, không phải hai sản phẩm khác nhau. Nếu cách gọi khác nhau, hãy theo **AI** → **Inbox Assistant** là đúng.

## AI Assistant có thể làm gì

AI Assistant gồm nhiều trợ lý:

- **Smart Assistant**: tự động trả lời khách hàng bằng [AI Agent](./ai-agent-usage) đã publish.
- **Smart Reply**: tạo bản nháp trả lời đề xuất trong Inbox để nhân viên xem và gửi.
- **Smart Summary**: viết bản tóm tắt ngắn về cuộc trò chuyện cho đội.
- **Smart Writing**: cải thiện, viết lại, dịch hoặc làm trau chuốt tin nhắn đã nhập.
- **Follow-up Assistant**: gửi follow-up khi cuộc trò chuyện không hoạt động trong một khoảng thời gian.
- **Close Conversation**: tự đóng chat nhàn rỗi và có thể thêm ghi chú đóng nội bộ cho đội.

Smart Assistant là tính năng cốt lõi cho hỗ trợ khách hàng tự động. Đây là phần có thể tiếp tục cuộc trò chuyện, dùng Knowledge và thực hiện action được hỗ trợ như tạo ticket khi cần.

## Khi nào dùng AI Assistant

Dùng AI Assistant khi:

- Khách hàng thường hỏi cùng một câu.
- Đội ngũ muốn trả lời đầu tiên nhanh hơn.
- Muốn AI trả lời ngoài giờ làm việc.
- Nhân viên cần tóm tắt nhanh trước khi tiếp nhận cuộc trò chuyện.
- Muốn xử lý vấn đề đơn giản tự động và chuyển vấn đề phức tạp cho người thật.

Ví dụ: Khách hỏi "Chính sách đổi trả là gì?" Smart Assistant kiểm tra chính sách trong Knowledge và trả lời rõ ràng. Nếu khách nói "Tôi chưa nhận được tiền hoàn", Smart Assistant có thể tạo Ticket để nhân viên điều tra.

## Trước khi bật

Để có kết quả tốt nhất, chuẩn bị trước:

1. Thêm thông tin doanh nghiệp hữu ích vào [Knowledge](./knowledge-usage), như FAQ, giá, chính sách giao hàng, hoàn tiền và chi tiết sản phẩm.
2. Tạo và kiểm tra [AI Agent](./ai-agent-usage) hiểu cách doanh nghiệp nên trả lời.
3. Kết nối ít nhất một kênh khách hàng trong [Tích hợp kênh](../channels/channel-integration), như Zalo OA hoặc Facebook Messenger.
4. Làm quen workspace khách hàng hằng ngày trong [Sử dụng Inbox](../operations/inbox-usage).

## Mở cài đặt AI Assistant

![Danh sách Inbox Assistant](/static/img/open-ai-assistant.png)

1. Trong thanh bên trái, mở **AI**.
2. Chọn **Inbox Assistant**.
3. Chọn assistant muốn cấu hình, như **Smart Assistant**, **Smart Summary**, **Smart Writing** hoặc **Follow-up Assistant**.
4. Nhấp **Save changes** sau khi sửa.

Nếu không thấy trang hoặc không lưu được, hỏi admin kiểm tra quyền Inbox hoặc AI.

## Thiết lập Smart Assistant

![Trang cài đặt Smart Assistant](/static/img/setting-smart-assistant.png)

Smart Assistant dùng AI Agent để tự động trả lời khách hàng.

1. Mở **AI** -> **Inbox Assistant**.
2. Chọn **Smart Assistant**.
3. Chọn **Agent** sẽ trả lời khách hàng.
4. Chọn **Agent version**. Sau khi agent được kiểm tra và publish, **ưu tiên version mới nhất**: chọn **Latest** (hoặc số version publish cao nhất) để phản hồi dùng Instructions, liên kết Knowledge và bản sửa mới nhất. Ghim version cũ có thể khiến Smart Assistant dùng hành vi lỗi thời cho đến khi ai đó cập nhật cài đặt này.
5. Chọn khi nào Smart Assistant chạy:
   - **Always**: AI có thể trả lời bất kỳ lúc nào.
   - **Outside working hours**: AI trả lời khi nhân viên không làm việc.
   - **Custom**: chọn khoảng thời gian riêng.
6. Đặt **Messages used** ở mức thực tế, chẳng hạn 8-12, để AI hiểu ngữ cảnh gần đây.
7. Bật **Enabled**.
8. Viết Instructions cuộc trò chuyện đơn giản.
9. Nhấp **Save changes**.

Ví dụ Instructions đơn giản:

> Trả lời lịch sự và ngắn gọn. Chỉ dùng Knowledge đã phê duyệt. Nếu khách hỏi về hoàn tiền, vấn đề đơn hàng, khiếu nại hoặc thông tin tài khoản riêng tư, hãy tạo ticket hoặc chuyển cuộc trò chuyện cho nhân viên.

## Thiết lập Smart Reply

Smart Reply dành cho trả lời có người hỗ trợ. Tính năng không tự động gửi tin. Tính năng tạo bản nháp trong composer Inbox để nhân viên xem, sửa và gửi.

![Trang cài đặt Smart Reply](/static/img/setup-smart-reply.png)

1. Mở **AI** -> **Inbox Assistant**.
2. Chọn **Smart Reply**.
3. Chọn model và đặt Instructions viết rõ ràng (giọng điệu, ngôn ngữ, phạm vi cho phép).
4. Bật **Enabled**.
5. Nhấp **Save changes**.

Ví dụ Instructions Smart Reply:

> Soạn câu trả lời ngắn, thân thiện bằng tiếng Việt. Dùng chính sách doanh nghiệp từ Knowledge khi có. Nếu thiếu thông tin, hỏi một câu làm rõ thay vì đoán.

## Thiết lập Smart Summary

Smart Summary viết bản tóm tắt ngắn của cuộc trò chuyện dài để đồng đội tiếp theo nhanh chóng nắm bắt.

1. Mở **AI** → **Inbox Assistant** → **Smart Summary**.
2. Chọn **model**.
3. Đặt **Messages used** (số tin gần đây cần đọc — thường 8–12).
4. Viết **instructions** (ví dụ: gạch đầu dòng, vấn đề khách hàng, điều đã hứa).
5. Bật **Enabled** → **Save changes**.

Trong **Inbox**, mở cuộc trò chuyện và chạy Smart Summary khi cần tóm tắt (nhãn nút chính xác có thể hiển thị là **Summary** hoặc tương tự trên thanh công cụ cuộc trò chuyện).

![Trang cài đặt Smart Summary](/static/img/smart-summary.png)

## Thiết lập Smart Writing

Smart Writing giúp nhân viên trau chuốt văn bản đã nhập — dịch, rút ngắn, làm thân thiện hơn và nhiều việc khác. Bạn xây dựng một **menu action** để đội thấy trong composer Inbox.

1. Mở **AI** → **Inbox Assistant** → **Smart Writing**.
2. Chọn **model** và **Messages used** cho ngữ cảnh.
3. Trong phần action, thêm mục:
   - **Action** — một lệnh (ví dụ “Translate to English”) với prompt riêng
   - **Group** — thư mục chứa nhiều action (ví dụ “Tone” → Friendly / Formal)
4. Với mỗi action, đặt **display name**, **icon** và **prompt**.
5. Kéo để sắp xếp. Bật **Enabled** → **Save changes**.

Trong Inbox, bôi đen văn bản trong ô reply và mở menu **Smart Writing** để chọn action.

![Trang cài đặt Smart Writing](/static/img/smart-writing.png)

## Thiết lập Follow-up Assistant

Follow-up Assistant nhắc các cuộc trò chuyện im lặng sau khi không có phản hồi một thời gian.

1. Mở **AI** → **Inbox Assistant** → **Follow-up Assistant**.
2. Đặt **Quiet duration (hours)** — thời gian chờ (1–23 giờ trong form).
3. Đặt **Messages used** cho ngữ cảnh.
4. Chọn **model** và bật **Enabled**.
5. Chọn **Action**:
   - **Send message** — AI gửi follow-up (viết Instructions về giọng điệu và nội dung)
   - **Notify** — cảnh báo đội thay vì nhắn khách
6. **Save changes**.

![Cài đặt Follow-up Assistant](/static/img/follow-up.png)

## Thiết lập Closure Assistant

Closure Assistant giúp dọn dẹp chat đã hoàn tất — tùy chọn tự đóng sau thời gian không hoạt động và thêm ghi chú đóng nội bộ.

1. Mở **AI** → **Inbox Assistant** → **Closure Assistant** (cũng có thể đến từ cài đặt cuộc trò chuyện **Organization** → **Tenant**).
2. Chọn **model** và **Messages used**.
3. **Auto-close** (tùy chọn):
   - Bật **Auto-close enabled**
   - Đặt **schedule** (khi auto-close có thể chạy)
   - Đặt **Close after** + đơn vị (phút, giờ hoặc ngày không hoạt động)
4. **Closing note** (tùy chọn):
   - Bật **Closing note enabled**
   - Viết Instructions cho ghi chú nội bộ AI để lại cho đội
5. **Save changes**.

Nhân viên vẫn có thể đóng cuộc trò chuyện thủ công trong Inbox; assistant này tự động dọn các thread không hoạt động.

![Cài đặt Closure Assistant](/static/img/closure-assistant.png)

## AI Assistant hoạt động trong thực tế như thế nào

### Ví dụ 1: Câu hỏi sản phẩm cơ bản

1. Khách gửi tin nhắn Zalo: "Sản phẩm này có size M không?"
2. Tin nhắn xuất hiện trong [Inbox](../operations/inbox-usage).
3. Smart Assistant kiểm tra [Knowledge](./knowledge-usage) đã kết nối.
4. Smart Assistant trả lời các size còn hàng.
5. Nhân viên có thể xem lại cuộc trò chuyện sau nếu cần.

### Ví dụ 2: AI bàn giao cho nhân viên

1. Khách nói: "Tôi đã thanh toán nhưng chưa nhận được đơn."
2. Smart Assistant nhận ra cần người kiểm tra.
3. Smart Assistant tạo hoặc gợi ý [Ticket](../operations/ticket-usage).
4. Ticket được giao cho user hoặc team.
5. Nhân viên tiếp tục cuộc trò chuyện và cập nhật ticket đến khi giải quyết.

### Ví dụ 3: Ngoài giờ làm việc

1. Khách nhắn lúc 22:30.
2. Smart Assistant trả lời thông tin đã phê duyệt và hỏi mã đơn.
3. Ticket được tạo cho đội buổi sáng.
4. Nhân viên bắt đầu ngày hôm sau với tóm tắt cuộc trò chuyện và lịch sử ticket sẵn sàng.

## Dùng AI Assistant trong Inbox

![AI assistant trong composer Inbox](/static/img/ai-assistant-inbox.png)

1. Mở **Inbox**.
2. Chọn cuộc trò chuyện khách hàng.
3. Quyết định workflow cần dùng:
   - **Smart Assistant**: flow hỗ trợ tự động (AI có thể trả lời theo cài đặt Smart Assistant).
   - **Smart Reply**: flow hỗ trợ bản nháp (nhân viên nhấp AI để tạo gợi ý rồi xem và gửi).
4. Nếu xuất hiện bản nháp, kiểm tra sự thật, giọng điệu và chi tiết chính sách trước khi gửi.
5. Gửi nguyên trạng hoặc sửa cho đúng ngữ cảnh khách hàng.

AI có thể hỗ trợ nhưng nhân viên vẫn nên xem các câu trả lời quan trọng, đặc biệt về hoàn tiền, khiếu nại, câu hỏi pháp lý hoặc thông tin khách hàng nhạy cảm.

## Điều gì xảy ra trong các trường hợp phổ biến

### Case 1: Smart Assistant bật nhưng chưa kết nối Knowledge

- AI vẫn có thể trả lời bằng ngữ cảnh cuộc trò chuyện và Instructions, nhưng câu trả lời thường kém chính xác và ít đặc thù doanh nghiệp hơn.
- Rủi ro trả lời chung chung hoặc không đầy đủ tăng lên.
- Thực hành tốt nhất: kết nối [Knowledge](./knowledge-usage) trước, rồi kiểm tra lại trước khi mở rộng.

### Case 2: Có Knowledge nhưng nội dung cũ hoặc chưa sync

- AI có thể dùng thông tin cũ hoặc bỏ sót tệp mới upload.
- Chỉ upload tệp là chưa đủ; chạy sync trong Knowledge và xác minh tài liệu đã sẵn sàng.
- Nếu chính sách mới thay đổi, cập nhật tệp và sync lại trước khi dùng trả lời tự động.

### Case 3: Smart Assistant bật nhưng chưa chọn version agent đã publish

- Auto-reply có thể không chạy như mong đợi cho cuộc trò chuyện khách.
- Publish version [AI Agent](./ai-agent-usage) đã kiểm tra, sau đó chọn version đó (hoặc **Latest**) trong cài đặt Smart Assistant.
- Nếu vừa cải thiện agent nhưng phản hồi vẫn cũ, xác nhận không bị ghim version cũ—chọn **Latest** hoặc version publish mới nhất.


### Case 4: Khách nhắn trong thời gian chưa cấu hình

- Nếu Smart Assistant đặt **Outside working hours** hoặc **Custom**, tính năng chỉ chạy trong cửa sổ thời gian cho phép.
- Ngoài cửa sổ đó, nhân viên tiếp tục thủ công hoặc dùng Smart Reply để tạo bản nháp có hỗ trợ.

### Case 5: Smart Reply bật nhưng đội ngũ mong auto-reply hoàn toàn

- Smart Reply chỉ đề xuất bản nháp; nhân viên vẫn quyết định và nhấn gửi.
- Nếu cần xử lý cuộc trò chuyện tự động, hãy cấu hình và bật Smart Assistant.

### Case 6: Chủ đề rủi ro cao (hoàn tiền, pháp lý, khiếu nại)

- AI không nên tự quyết định cuối cùng trong tình huống rủi ro.
- Thêm quy tắc handoff rõ trong Instructions agent: tạo ticket, escalate hoặc chuyển cho nhân viên.
- Giữ người thật trong vòng xác nhận cuối với chủ đề nhạy cảm.

## Bật hoặc tắt hỗ trợ tự động

Dùng công tắc **Enabled** trên từng trang cài đặt assistant.

- Bật khi assistant đã sẵn sàng và được kiểm tra.
- Tắt khi muốn nhân viên xử lý cuộc trò chuyện thủ công.
- Bắt đầu với nhóm kiểm thử nhỏ hoặc kênh ít rủi ro trước khi dùng cho mọi cuộc trò chuyện.

## Thiết lập gợi ý cho người mới

1. Chuẩn bị một Knowledge base nhỏ với 20 câu hỏi hàng đầu của khách.
2. Tạo AI Agent tên `Customer Support Assistant`.
3. Kiểm tra agent bằng 5-10 câu hỏi khách hàng thật.
4. Trước tiên bật Smart Assistant ngoài giờ làm việc.
5. Xem lại cuộc trò chuyện trong vài ngày.
6. Mở rộng sang nhiều kênh hoặc thời gian dài hơn khi câu trả lời đáng tin.

## Khắc phục sự cố

### Smart Assistant không trả lời

- Đảm bảo **Enabled** đã bật.
- Đảm bảo đã chọn AI Agent.
- Đảm bảo agent đã chọn có version publish và **Agent version** là **Latest** hoặc version mới cụ thể mong muốn (không phải pin cũ).
- Kiểm tra lịch có cho AI chạy ở thời điểm hiện tại không.
- Xác nhận cuộc trò chuyện nằm trong cửa sổ chạy khi dùng **Outside working hours** hoặc **Custom**.

### Nút Smart Reply bị thiếu hoặc không tạo bản nháp

- Đảm bảo **Smart Reply** đã bật trong **AI -> Inbox Assistant**.
- Kiểm tra model/provider khả dụng và cấu hình đúng.
- Xác minh tài khoản có quyền dùng tính năng Inbox AI.
- Làm mới Inbox và mở lại cuộc trò chuyện sau khi lưu cài đặt.

### AI trả lời không rõ hoặc sai

- Cập nhật Instructions trong Smart Assistant.
- Cải thiện thông tin nguồn trong [Knowledge](./knowledge-usage).
- Kiểm tra và publish lại [AI Agent](./ai-agent-usage) liên quan, sau đó trong Smart Assistant đặt **Agent version** thành **Latest** (hoặc version publish mới nhất) để Inbox dùng bản cập nhật.

### AI không nên trả lời một chủ đề cụ thể

- Thêm quy tắc rõ trong Instructions của AI Agent.
- Yêu cầu AI tạo ticket hoặc chuyển cho nhân viên với chủ đề đó.
- Thêm ví dụ, chẳng hạn "Khiếu nại hoàn tiền phải do nhân viên xử lý."
