---
id: connecting-your-freshdesk-account
title: "Freshdesk"
sidebar_label: "Freshdesk"
sidebar_position: 2
description: "Hướng dẫn từng bước để kết nối Freshdesk với ScaleFlow và đồng bộ ticket, contact, dành cho người dùng không chuyên kỹ thuật."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối Freshdesk với ScaleFlow

Hướng dẫn này chỉ cho bạn cách kết nối tài khoản **Freshdesk** với **ScaleFlow** để có thể:

- Nhận và xem ticket hỗ trợ khách hàng trực tiếp trong ScaleFlow.
- Đồng bộ contact và lịch sử trò chuyện giữa hai hệ thống.

Bạn không cần nền tảng kỹ thuật. Chỉ cần làm theo từng bước theo thứ tự.

---

## 1. Freshdesk và ScaleFlow phối hợp như thế nào?

- **Freshdesk**: Hệ thống quản lý ticket hỗ trợ khách hàng.
- **ScaleFlow**: Workspace nơi bạn tập hợp tin nhắn và cuộc trò chuyện từ nhiều kênh (LINE, WhatsApp, Facebook và nhiều kênh khác), rồi giao việc cho đội hỗ trợ hoặc AI Assistant.

Sau khi kết nối:

- Ticket tạo trong Freshdesk có thể được đồng bộ vào ScaleFlow.
- Thông tin khách hàng (email, tên và các thông tin khác) được chia sẻ giữa hai hệ thống để đội ngũ có đầy đủ bối cảnh.
- Bạn có thể dùng AI và tự động hóa trong ScaleFlow dựa trên dữ liệu Freshdesk.

---

## 2. Trước khi bắt đầu

Hãy chuẩn bị:

- Tài khoản **Freshdesk** có quyền admin hoặc đủ quyền để:
  - Mở **Profile Settings** để lấy API key.
  - Mở **Admin** để cấu hình webhook nếu cần.
- Tài khoản **ScaleFlow** có quyền quản lý integration:
  - Bạn thấy menu **Integrations** ở thanh bên trái.
  - Bạn có thể mở trang **Freshdesk** trong Integrations.
- Khoảng **10-20 phút** cho lần thiết lập đầu tiên.

---

## 3. Tổng quan các bước

| Bước | Nơi thực hiện | Việc cần làm |
|------|-------|------------|
| 1 | ScaleFlow | Mở trang tích hợp Freshdesk và nhấp **Add connection** |
| 2 | Freshdesk | Lấy **Domain** và **API Key** Freshdesk |
| 3 | ScaleFlow | Điền thông tin kết nối và bật hoặc tắt tùy chọn đồng bộ |
| 4 | ScaleFlow | Lưu và xác minh kết nối |
| 5 | ScaleFlow + Freshdesk | (Tùy chọn) Cấu hình cách đồng bộ dữ liệu và ánh xạ trường |
| 6 | ScaleFlow | Kiểm tra đồng bộ và dùng trong công việc hằng ngày |

---

## 4. Bước 1 - Mở trang Freshdesk trong ScaleFlow

1. Đăng nhập **ScaleFlow**.
2. Trong menu bên trái, chọn **Integrations**.
3. Trong danh sách integration, tìm **Freshdesk** (biểu tượng Freshdesk màu xanh).
4. Nhấp **Freshdesk** để mở trang quản lý kết nối.
5. Nếu đây là kết nối đầu tiên, nhấp **Add connection**.

![Mở Freshdesk](/static/img/connect-freshdesk.png)

---

## 5. Bước 2 - Lấy Domain và API Key từ Freshdesk

Đây là phần quan trọng nhất. Bạn cần:

- **Domain** Freshdesk (ví dụ: `yourcompany.freshdesk.com`).
- **API Key** của tài khoản Freshdesk.

### 5.1. Lấy domain Freshdesk

1. Đăng nhập **Freshdesk** trong trình duyệt.
2. Xem thanh địa chỉ của trình duyệt (URL).
3. Bạn sẽ thấy nội dung tương tự:
   - `https://yourcompany.freshdesk.com`
4. Phần `yourcompany.freshdesk.com` là **Domain** cần dùng.

![Domain Freshdesk](/static/img/domain-freshdesk.png)

### 5.2. Lấy API Key Freshdesk

1. Trong Freshdesk, nhấp **avatar** hoặc **username** ở góc trên bên phải.
2. Chọn **Profile Settings**.
3. Trên trang profile, cuộn xuống **Your API Key**.
4. Nhấp **Copy** để sao chép API key.

![API key](/static/img/your-api-key.png)

Nếu không chắc, trang kết nối Freshdesk trong ScaleFlow có liên kết **View the Guide** mở hướng dẫn chính thức của Freshdesk về cách tìm API key.

---

## 6. Bước 3 - Điền thông tin kết nối trong ScaleFlow

Quay lại tab trình duyệt **ScaleFlow** trên trang kết nối Freshdesk.

1. Ở phía trên, bạn sẽ thấy:
   - Logo và tên **Freshdesk**.
   - Mô tả ngắn: "Configure authentication with API key and ticket webhook endpoint."
2. Bên dưới là các trường nhập.

### 6.1. Điền thông tin cơ bản

- **Connection name**  
  Nhập tên dễ nhận biết, chẳng hạn `Main Freshdesk` hoặc `Freshdesk Support`.  
  Đây là tên hiển thị trong danh sách kết nối ScaleFlow.

- **Domain**  
  Dán domain từ bước 5.1, ví dụ: `yourcompany.freshdesk.com`.

- **API Key**  
  Dán API key đã sao chép ở bước 5.2.

- **Default requester email (optional)**  
  Bạn có thể nhập email dùng chung như `support@yourcompany.com`.  
  Freshdesk dùng địa chỉ này làm địa chỉ mặc định khi ticket cần email của requester.

![Dán API key](/static/img/paste-api-key-freshdesk.png)

### 6.2. Cài đặt đồng bộ

Bên dưới, bạn sẽ thấy phần **Sync settings** với các công tắc:

- **Sync from ScaleFlow to Freshdesk**  
  Bật nếu muốn các mục tạo trong ScaleFlow (contact, request) được gửi đến Freshdesk.

- **Sync from Freshdesk to ScaleFlow**  
  Bật nếu muốn ticket và contact từ Freshdesk chuyển vào ScaleFlow.

- **Sync contacts**  
  Cho phép chia sẻ thông tin contact giữa hai hệ thống.

- **Sync tickets**  
  Cho phép chia sẻ ticket và lịch sử trò chuyện giữa hai hệ thống.

Bạn có thể:

- Bật cả hai chiều (ScaleFlow ↔ Freshdesk) nếu muốn mọi thứ luôn đồng bộ.
- Chỉ bật một chiều nếu ScaleFlow chỉ nên đọc từ Freshdesk hoặc chỉ đẩy dữ liệu sang đó.

![Cài đặt đồng bộ Freshdesk](/static/img/sync-freshdesk.png)

Khi hoàn tất:

1. Xem lại tên kết nối, domain, API key và các công tắc đồng bộ.
2. Nhấp **Save**.

---

## 7. Bước 4 - Xác minh kết nối và xem lại thông tin Webhook

Sau khi lưu thành công, ScaleFlow sẽ:

- Tạo hoặc cập nhật kết nối Freshdesk.
- Kiểm tra API key có hợp lệ hay không.

Nếu API key đúng:

- Bạn sẽ thấy thông báo thành công ở góc màn hình.
- ScaleFlow mở trang **connection details** với các tab như:
  - **Display**
  - **Data sync**
  - **AI and automation** (khi có)

Trong tab **Display**, panel bên phải hiển thị:

- **Connection metadata**:
  - Domain đang dùng.
  - Email mặc định.
  - Ngày tạo kết nối.
  - **Webhook endpoint** - URL Freshdesk dùng để gửi thông báo.

![Hiển thị kết nối](/static/img/webhook-freshdesk.png)

Trong hầu hết trường hợp, ScaleFlow xử lý thiết lập webhook tự động. Bạn chỉ cần đảm bảo trạng thái kết nối là **Connected** và đồng bộ hoạt động bình thường.

Nếu API key sai hoặc thiếu thông tin bắt buộc:

- Bạn sẽ thấy thông báo lỗi.
- Kiểm tra:
  - Domain có chính xác không? (Thiếu `.freshdesk.com` hoặc gõ sai là lỗi thường gặp.)
  - Bạn đã sao chép đầy đủ API key chưa? (Không thiếu ký tự ở đầu hoặc cuối.)
  - Đã điền tên kết nối chưa?

---

## 8. Bước 5 - Cấu hình cách đồng bộ dữ liệu (Tùy chọn)

Sau khi thiết lập kết nối, bạn có thể tinh chỉnh **dữ liệu nào được đồng bộ và cách ánh xạ trường** giữa Freshdesk và ScaleFlow.

Đi đến tab hoặc phần có các tiêu đề như:

- **Freshdesk data sync overview**
- **Contact field mapping**
- **Ticket field mapping**

Tại đây, bạn có thể:

- Xem tổng số **contact** và **ticket** đã đồng bộ.
- Bật hoặc tắt nhóm đồng bộ.
- Chọn trường Freshdesk nào ánh xạ với trường ScaleFlow nào (ví dụ: Email, Name, Phone number, Ticket tags và nhiều trường khác).

![Đồng bộ ticket](/static/img/sync-ticket.png)

Ánh xạ trường giúp:

- Giữ dữ liệu ở đúng nơi và dễ đọc.
- Tránh mất thông tin khi dữ liệu di chuyển giữa hai hệ thống.

---

## 9. Bước 6 - Xác nhận đồng bộ hoạt động

Để đảm bảo mọi thứ đang chạy đúng:

1. Quay lại **Freshdesk** trong **Integrations** của ScaleFlow.
2. Mở kết nối Freshdesk vừa tạo.
3. Chuyển sang tab **Data sync**.
4. Tại đây bạn sẽ thấy:
   - Thời gian đồng bộ gần nhất.
   - Số contact hoặc ticket đã đồng bộ.
   - Danh sách hoạt động đồng bộ gần đây.

![Đồng bộ dữ liệu Freshdesk](/static/img/data-sync-freshdesk.png)

Nếu mọi thứ hoạt động:

- Bạn sẽ thấy các mục như "Sync started" và "Completed", cùng số lượng mục đã nhập.

Nếu không thấy dữ liệu:

- Nhấp **Sync now** nếu nút này có sẵn.
- Xem lại các công tắc đồng bộ từ bước 6.2.
- Đảm bảo tài khoản Freshdesk có dữ liệu mẫu (ít nhất vài ticket hoặc contact).

---

## 10. Dùng Freshdesk và ScaleFlow trong công việc hằng ngày

Sau khi thiết lập, quy trình hằng ngày điển hình như sau:

1. Khách hàng gửi yêu cầu qua các kênh như LINE, WhatsApp hoặc email.
2. Một số ticket được tạo hoặc quản lý trong Freshdesk.
3. Dữ liệu từ Freshdesk được đồng bộ vào **ScaleFlow**:
   - Xuất hiện trong **Tickets**, **Contacts** hoặc trong ngữ cảnh cuộc trò chuyện.
4. Đội hỗ trợ có thể:
   - Xem ngữ cảnh khách hàng trong ScaleFlow, bao gồm thông tin từ Freshdesk.
   - Trả lời khách hàng trực tiếp trên các kênh nhắn tin.
   - Dùng [AI Assistant](../scaleflow-ai/ai-assistant) hoặc [AI Agent](../scaleflow-ai/ai-agent-usage) để tự động hóa khi cần.

---

## 11. Câu hỏi thường gặp

### Tôi không thấy menu Integrations hoặc không thể mở trang Freshdesk

Tài khoản ScaleFlow có thể không có quyền quản lý integration. Hãy liên hệ administrator của công ty.

### Domain Freshdesk của tôi khác ví dụ trong hướng dẫn. Tôi vẫn dùng được không?

Có, miễn là domain vẫn theo định dạng `yourcompany.freshdesk.com`. Sao chép đúng giá trị từ trình duyệt và dán vào ScaleFlow, không thêm khoảng trắng.

### Tôi nên làm gì nếu API key bị lộ?

1. Quay lại Freshdesk -> **Profile Settings** và tạo API key mới hoặc làm theo hướng dẫn bảo mật của Freshdesk.
2. Cập nhật API key mới trong ScaleFlow ở tab **Display** của kết nối Freshdesk.

### Vì sao tôi không thấy ticket nào trong ScaleFlow?

Thử lần lượt:

1. Mở tab **Data sync** và kiểm tra có lần đồng bộ nào hoàn tất thành công chưa.
2. Xác nhận các công tắc sau đã bật:
   - **Sync from Freshdesk to ScaleFlow**
   - **Sync tickets**
3. Đảm bảo tài khoản Freshdesk có ticket thật, không phải môi trường trống.
4. Nếu vấn đề vẫn tiếp diễn, hãy liên hệ administrator ScaleFlow.

### Làm thế nào để tạm dừng đồng bộ?

Bạn có thể:

- Mở tab **Display** của kết nối Freshdesk.
- Tắt các công tắc đồng bộ liên quan, chẳng hạn **Sync tickets**.
- Hoặc **disconnect** integration nếu không muốn dùng nữa.

---

## 12. Bước tiếp theo được khuyến nghị

Sau khi Freshdesk đã kết nối và ổn định:

1. Thiết lập [Knowledge](../scaleflow-ai/knowledge-usage) với hướng dẫn, chính sách và FAQ để AI hiểu ngữ cảnh hỗ trợ.
2. Tạo [AI Agent](../scaleflow-ai/ai-agent-usage) để tự động phân loại ticket, đề xuất câu trả lời hoặc chuyển yêu cầu đến đúng đội.
3. Kết nối các kênh như [LINE](../channels/line/connecting-your-line-business-account) và [WhatsApp](../channels/whatsapp/connecting-your-whatsapp-business-api-account) để mọi cuộc trò chuyện đến một nơi.
