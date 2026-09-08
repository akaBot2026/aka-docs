---
id: connecting-your-line-business-account
title: LINE Business
sidebar_label: LINE Business
sidebar_position: 1
description: "Hướng dẫn từng bước để kết nối LINE Official Account với ScaleFlow, giúp bạn nhận và trả lời tin nhắn khách hàng."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối tài khoản LINE Business

Làm theo các bước dưới đây để kết nối tài khoản LINE doanh nghiệp với ScaleFlow.

Sau khi kết nối hoàn tất, tin nhắn khách hàng gửi đến tài khoản LINE doanh nghiệp sẽ xuất hiện trong [Inbox](../../operations/inbox-usage). Từ đó, nhân viên hoặc [AI Assistant](../../scaleflow-ai/ai-assistant) có thể trả lời tại một nơi.

---

## LINE Business là gì?

**LINE Official Account** là tài khoản LINE dành cho doanh nghiệp, tương tự fan page Facebook nhưng trên LINE. Khách hàng có thể gửi tin nhắn, hỏi giá, đặt hàng hoặc nhận cập nhật thông qua tài khoản này.

**ScaleFlow** kết nối với LINE qua **Messaging API**, cho phép nhận và gửi tin nhắn từ Official Account. Bạn sẽ sao chép hai thông tin xác thực từ các trang quản trị LINE, gồm **Channel secret** và **Channel access token**, rồi dán chúng vào ScaleFlow.

---

## Trước khi bắt đầu

Hãy chuẩn bị:

- Một **tài khoản LINE** dùng để quản lý doanh nghiệp, thường do chủ cửa hàng, đội marketing hoặc đội hỗ trợ khách hàng sở hữu.
- Quyền quản lý **Channels** trong ScaleFlow. Nếu không thấy nút **Connect**, hãy hỏi administrator để được cấp quyền.
- Khoảng **15-30 phút** cho lần thiết lập đầu tiên, đặc biệt nếu bạn vẫn cần tạo LINE Official Account, bật Messaging API và sao chép thông tin xác thực.

> **Lưu ý:** Hai thông tin xác thực bạn sao chép, **Channel secret** và **Channel access token**, hoạt động như mật khẩu. Không chia sẻ chúng công khai hoặc gửi cho người không được phép. Chỉ dán chúng vào ScaleFlow trong quá trình thiết lập.

---

## Tổng quan các bước

| Bước | Nơi thực hiện | Việc cần làm |
|------|-------|------------|
| 1 | ScaleFlow | Mở trang LINE Business và nhấp **Connect** |
| 2 | LINE | Tạo hoặc chọn một Official Account |
| 3 | LINE | Bật Messaging API và sao chép **Channel secret** |
| 4 | LINE | Bật Webhook và tắt trả lời tự động |
| 5 | LINE | Sao chép **Channel access token** (long-lived) |
| 6 | ScaleFlow | Dán cả hai thông tin xác thực, nhấp **Verify**, rồi **Create connection** |
| 7 | ScaleFlow | Chọn có đồng bộ contact hay không |
| 8 | ScaleFlow + ứng dụng LINE | Gửi tin nhắn thử và kiểm tra Inbox |

---

## Bước 1: Mở trang LINE trong ScaleFlow

1. Đăng nhập ScaleFlow.
2. Trong menu chính bên trái, chọn **Channels**.
3. Trong danh sách kênh, chọn **LINE Business**.
4. Nhấp nút **Connect** ở khu vực phía trên bên phải của phần cài đặt kênh.

ScaleFlow mở trang hướng dẫn chi tiết **Connect LINE Business**.

![Mở Channels và chọn LINE Business](/static/img/connect-channel-1.png)

![Trang cài đặt LINE Business với nút Connect](/static/img/connect-channel-2.png)

---

## Bước 2: Tạo hoặc chọn LINE Official Account

Bước này được thực hiện trên website LINE, không phải trong ScaleFlow.

1. Mở trình duyệt và truy cập [LINE Official Account Manager](https://manager.line.biz/).
2. Đăng nhập bằng tài khoản LINE.
3. Nếu bạn **chưa có** tài khoản doanh nghiệp:
   - Tạo một Official Account mới.
   - Nhập tên doanh nghiệp, danh mục doanh nghiệp và thông tin liên hệ theo hướng dẫn trên màn hình.
   - Chờ LINE phê duyệt nếu được yêu cầu.
4. Nếu bạn **đã có** tài khoản, chọn đúng Official Account mà khách hàng sẽ nhắn tin.

> **Quan trọng:** Hãy chắc chắn bạn chọn đúng tài khoản LINE doanh nghiệp. Nếu công ty có nhiều tài khoản LINE, hãy xác nhận với đội marketing hoặc hỗ trợ khách hàng tài khoản nào đang được dùng để giao tiếp với khách hàng.

![Danh sách Official Account trong LINE Official Account Manager](/static/img/list-account-line.png)

---

## Bước 3: Bật Messaging API và sao chép Channel Secret
hiện đang được dùng để giao tiếp với khách hàng.
Vẫn trong **LINE Official Account Manager**:

1. Mở Official Account đã chọn ở bước 2.
2. Đi đến **Settings** -> **Messaging API**.
3. Nhấp **Enable Messaging API**.
4. LINE sẽ yêu cầu bạn chọn một **Provider** trong LINE Developers:
   - Chọn Provider hiện có, **hoặc**
   - Tạo Provider mới và đặt tên rõ ràng, chẳng hạn tên công ty.
5. **Ghi nhớ tên Provider** vì bạn sẽ cần tên này ở bước 5.
6. Sau khi Messaging API được bật, tìm **Channel secret** trên cùng trang và nhấp **Copy**.

Quay lại ScaleFlow, tìm **Step 2** và dán **Channel secret** vào trường tương ứng.

![Bật Messaging API trong LINE Official Account Manager](/static/img/copy-channel-secret.png)

![Dán Channel secret vào ScaleFlow - Step 2](/static/img/paste-channel-secret.png)

---

## Bước 4: Cấu hình Response Settings

Để đảm bảo tin nhắn khách hàng được gửi đến ScaleFlow thay vì được LINE tự động trả lời:

1. Trong **LINE Official Account Manager**, đi đến **Settings** -> **Response settings**.
2. Bật **Webhooks**.
3. Trên cùng trang, tắt **Auto-response messages**.

> **Lưu ý:** Webhook cho phép LINE chuyển tiếp tin nhắn khách hàng đến ScaleFlow. Tắt trả lời tự động giúp khách hàng không nhận hai câu trả lời cùng lúc, một từ LINE và một từ đội ngũ của bạn.

![Bật Webhook và tắt Auto-response](/static/img/response-setting.png)

> **Lưu ý:** ScaleFlow **tự động đăng ký URL webhook** khi bạn tạo kết nối.

---

## Bước 5: Lấy Channel Access Token

Bước này được thực hiện trong **LINE Developers Console**.

1. Mở [LINE Developers Console](https://developers.line.biz/console/).
2. Đăng nhập bằng cùng tài khoản LINE.
3. Trong menu bên trái, chọn **Provider** đã dùng ở bước 3.
4. Chọn **channel** được liên kết với Official Account.
5. Mở tab **Messaging API**.
6. Cuộn xuống **Channel access token**.
7. Nhấp **Issue** để tạo token mới hoặc nhấp **Copy** nếu đã có token **long-lived**.
8. Sao chép toàn bộ giá trị token.

Quay lại ScaleFlow và trong **Step 4**, dán giá trị vào **Channel access token (long-lived)**.

![Chọn Provider và channel trong LINE Developers Console](/static/img/provider-line.png)

![Sao chép Channel access token long-lived](/static/img/copy-channel-line-token.png)

![Dán access token vào ScaleFlow - Step 4](/static/img/paste-access-token.png)

> **📷 Ghi chú ảnh:** Chụp **Step 4** trong ScaleFlow khi trường access token đã được điền.

---

## Bước 6: Xác minh và tạo kết nối trong ScaleFlow

Sau khi dán cả **Channel secret** và **Channel access token**:

1. Xem panel bên phải trong ScaleFlow, bên dưới **Connection status**.
2. Nhấp **Verify Setup**.
3. Chờ vài giây. Nếu thiết lập đúng, bạn sẽ thấy xác nhận màu xanh hiển thị **tên LINE account** và ID **@...**, ví dụ `@myshop`.
4. Xác nhận tên hiển thị khớp với tài khoản doanh nghiệp chính xác.
5. Nhấp **Create Connection**.

![Nút Verify Setup trước khi xác minh](/static/img/verify-setup.png)

![Xác minh thành công hiển thị tên Official Account](/static/img/verify-success-line.png)

### Nếu xác minh thất bại

Các nguyên nhân phổ biến gồm:

- Một trong các thông tin xác thực bị dán sai hoặc thiếu. Hãy sao chép lại cả hai giá trị từ LINE.
- Bạn đã chọn channel **LINE Login** thay vì channel **Messaging API**. Kiểm tra lại bước 3.
- Token đã hết hạn. Tạo token **long-lived** mới ở bước 5.

Sau khi khắc phục, nhấp lại **Verify Setup**. Nếu thay đổi một trong hai thông tin xác thực sau khi xác minh thành công, bạn phải xác minh lại trước khi tạo kết nối.

---

## Bước 7: Chọn tùy chọn đồng bộ Contact

Sau khi **Create Connection** thành công, ScaleFlow hiển thị hộp thoại **Choose contact sync options**.

### Contact sync là gì?

Nếu bật **Contact Sync**, ScaleFlow sẽ nhập danh sách những người hiện đang **follow** LINE Official Account của bạn và thêm họ vào [Contacts](../../operations/contact-management).

- **Khuyến nghị** nếu bạn muốn có danh sách người theo dõi hiện tại trong Contacts.
- **Tùy chọn** nếu bạn chỉ cần nhận tin nhắn khi khách hàng chủ động liên hệ. Khi đó, ScaleFlow vẫn tự động tạo contact khi có tin nhắn mới đến.

### Lưu ý về tài khoản LINE miễn phí hoặc chưa được xác minh

Một số tài khoản LINE **miễn phí** hoặc **chưa được xác minh** không cho phép đồng bộ hàng loạt người theo dõi. Khi đó, ScaleFlow cho biết tính năng đồng bộ contact không khả dụng.

**Inbox vẫn hoạt động bình thường.** Chỉ cần:

1. Tắt toggle **Contact Sync**.
2. Nhấp **Continue** để hoàn tất.

Nếu muốn đồng bộ sau, hãy nâng cấp hoặc xác minh Official Account trong [LINE Official Account Manager](https://manager.line.biz/) rồi thử lại.

![Hộp thoại tùy chọn đồng bộ contact](/static/img/sync-contact.png)

### Nếu contact đã tồn tại trong ScaleFlow

Khi bật đồng bộ, hãy chọn cách ScaleFlow xử lý contact trùng lặp:

| Tùy chọn | Ý nghĩa |
|--------|---------|
| **Merge** | Giữ thông tin hiện có và chỉ điền các trường còn thiếu từ LINE. *(Khuyến nghị)* |
| **Replace** | Ghi đè thông tin hiện có bằng dữ liệu từ LINE. |
| **Skip** | Giữ nguyên contact trùng lặp và chỉ thêm người mới. |

---

## Bước 8: Xác nhận kết nối đang hoạt động

Quay lại **Channels** -> **LINE Business** và cuộn đến **Connected accounts**.

Kết nối thành công khi:

- Bạn thấy thẻ tài khoản LINE với đúng tên Official Account.
- Trạng thái hiển thị **active**.
- Thẻ có các nút **Test**, **Reconnect** và **Delete**.

![Tài khoản LINE đã kết nối trong ScaleFlow](/static/img/active-line.png)

### Các nút trên thẻ tài khoản

| Nút | Khi nào dùng |
|--------|----------------|
| **Test** | Khi muốn xác nhận ScaleFlow vẫn có thể giao tiếp với LINE. |
| **Reconnect** | Khi kết nối gặp vấn đề hoặc bạn đã thay đổi thông tin xác thực trên LINE và cần nhập lại giá trị mới. |
| **Delete** | Khi muốn ngừng sử dụng tài khoản LINE này trong ScaleFlow. Tin nhắn mới sẽ không còn đến Inbox. |

---

## Bước 9: Gửi tin nhắn thử và mở Inbox

Cách tốt nhất để xác nhận thiết lập là kiểm tra như một khách hàng thật:

1. Trên điện thoại, mở ứng dụng **LINE**.
2. Tìm Official Account doanh nghiệp bằng cách quét mã QR hoặc tìm theo tên hay ID `@`.
3. Gửi tin nhắn thử, ví dụ: *"Xin chào, tôi muốn hỏi về sản phẩm của bạn."*
4. Trong ScaleFlow, mở [Inbox](../../operations/inbox-usage).
5. Tìm cuộc trò chuyện mới. Tin nhắn vừa gửi sẽ xuất hiện ở đó với nhãn **LINE**.

![Khách hàng gửi tin nhắn trong ứng dụng LINE](/static/img/phone-line.png)

![Tin nhắn tương tự xuất hiện trong ScaleFlow Inbox](/static/img/inbox-line.png)

Bạn cũng có thể nhấp **Test** trên thẻ tài khoản LINE. Nếu thành công, ScaleFlow hiển thị thông báo xác nhận màu xanh.

---

## Quy trình hằng ngày sau khi thiết lập

1. Khách hàng gửi tin nhắn qua LINE Official Account của bạn.
2. Tin nhắn xuất hiện trong **Inbox** của ScaleFlow.
3. Nhân viên có thể trả lời trực tiếp hoặc bật [AI Assistant](../../scaleflow-ai/ai-assistant) để hỗ trợ trả lời.
4. Nếu cần theo dõi tiếp, tạo [Ticket](../../operations/ticket-usage) từ cuộc trò chuyện.

---

## Câu hỏi thường gặp

### Tôi không thấy nút Connect

Tài khoản ScaleFlow của bạn có thể không có quyền quản lý kênh. Hãy liên hệ administrator của công ty.

### Chúng tôi có nhiều LINE Official Accounts. Có thể kết nối nhiều hơn một tài khoản không?

Mỗi Official Account được kết nối riêng. Bạn có thể kết nối nhiều tài khoản LINE nếu doanh nghiệp sử dụng nhiều Official Account.

### Điều gì xảy ra nếu tôi thay đổi Channel secret hoặc access token trên LINE?

Đi đến **Channels** -> **LINE Business**, nhấp **Reconnect** trên thẻ tài khoản, sau đó lặp lại các bước dán thông tin xác thực và **Verify**.

### Contact sync không hoạt động có phải là vấn đề không?

Không. Tính năng nhắn tin vẫn hoạt động bình thường. Inbox tiếp tục nhận tin nhắn và contact được tạo khi khách hàng nhắn cho bạn. Hạn chế duy nhất là toàn bộ danh sách người theo dõi hiện có sẽ không được nhập trước.

### Tin nhắn khách hàng vẫn không xuất hiện trong Inbox

Thử lần lượt các bước sau:

1. Nhấp **Test** trên thẻ tài khoản LINE.
2. Xác nhận **Webhooks** đã bật và **Auto-response** đã tắt trên LINE như mô tả ở bước 4.
3. Nhấp **Reconnect** và xác minh lại thông tin xác thực.
4. Nếu vấn đề vẫn tiếp diễn, hãy nhờ administrator ScaleFlow hỗ trợ.

---

## Bước tiếp theo được khuyến nghị

Khi LINE đã hoạt động chính xác:

1. Thêm câu trả lời mẫu, chính sách và FAQ vào [Knowledge](../../scaleflow-ai/knowledge-usage) để AI trả lời chính xác hơn.
2. Thiết lập [AI Agent](../../scaleflow-ai/ai-agent-usage) nếu muốn tự động hóa nhiều hơn.
3. Bật [AI Assistant](../../scaleflow-ai/ai-assistant) khi bạn sẵn sàng.

---

## Liên kết tham khảo về LINE

Tài nguyên LINE chính thức, phần lớn có sẵn bằng tiếng Anh hoặc tiếng Nhật:

- [LINE Official Account Manager](https://manager.line.biz/)
- [LINE Developers Console](https://developers.line.biz/console/)
- [Hướng dẫn bắt đầu LINE Messaging API](https://developers.line.biz/en/docs/messaging-api/getting-started)

Trong ScaleFlow, các tài nguyên tương tự cũng được hiển thị trong phần **Reference links** ở bên phải trang hướng dẫn kết nối.
