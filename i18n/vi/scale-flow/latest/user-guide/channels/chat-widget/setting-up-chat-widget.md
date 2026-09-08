---
id: setting-up-chat-widget
title: Chat Widget
sidebar_label: Chat Widget
sidebar_position: 1
description: Hướng dẫn từng bước để thêm chat widget vào website trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Thiết lập Chat Widget

**Chat Widget** là một **hộp trò chuyện nhỏ** được nhúng vào website. Khi khách truy cập mở website, nhấp biểu tượng trò chuyện và gửi tin nhắn, tin nhắn đó sẽ xuất hiện trong **Inbox** của ScaleFlow giống như tin nhắn từ Zalo hoặc Messenger.

Bạn **không cần viết code** để cấu hình widget trong ScaleFlow. Bước duy nhất có thể cần người có quyền truy cập website là **dán một script snippet** vào website — ScaleFlow cung cấp sẵn snippet để sao chép.

---

## Chat Widget có thể làm gì?

- Khách hàng trò chuyện trực tiếp trên website mà không cần cài ứng dụng.
- Tin nhắn xuất hiện trong [Inbox](../../operations/inbox-usage) — nhân viên trả lời tại một nơi.
- Bạn có thể bật [AI Assistant](../../scaleflow-ai/ai-assistant) để tự động trả lời bằng AI.
- Bạn có thể dùng [Flows](../../operations/flow-usage) để chào khách hàng, hỏi nhu cầu và chuyển đến AI hoặc nhân viên.
- Tùy chỉnh logo, màu sắc và lời chào để phù hợp với thương hiệu.
- (Tùy chọn) Hiển thị thêm nút liên hệ cho Zalo, Messenger, WhatsApp và các kênh khác nếu những kênh đó đã được kết nối.

---

## Khi nào nên dùng Chat Widget?

Hãy dùng khi:

- Bạn có **website** (landing page, cửa hàng trực tuyến, trang giới thiệu công ty).
- Bạn muốn khách hàng **đặt câu hỏi trên web** thay vì gọi điện hoặc tìm Zalo/Facebook.
- Bạn muốn thu thập **số điện thoại / email** trước khi trò chuyện (bật trong phần cài đặt).
- Bạn muốn có **một Inbox** cho cả web và các kênh khác.

**Ví dụ:** Một phòng gym có website mô tả các gói hội viên. Khách truy cập nhấp chat và hỏi về giá — tin nhắn được đưa vào Inbox và AI hoặc nhân viên lễ tân trả lời.

---

## Trước khi bắt đầu

| Yêu cầu | Ghi chú |
|-------------|-------|
| Quyền quản lý **Channels** trong ScaleFlow | Không thấy menu? Hãy hỏi administrator |
| **Website URL** nơi sẽ nhúng widget | Ví dụ: `www.yourcompany.com` |
| (Khuyến nghị) [Knowledge](../../scaleflow-ai/knowledge-usage) + [AI Agent](../../scaleflow-ai/ai-agent-usage) | Để AI trả lời FAQ trên widget |
| Người có quyền **chỉnh sửa website** | Hoặc tự dán script nếu bạn dùng Wix / WordPress / Shopify |

Dự kiến khoảng **20–40 phút** cho lần thiết lập đầu tiên.

---

## Bước 1 — Mở trang Chat Widget

1. Đăng nhập ScaleFlow.
2. Menu bên trái → **Channels**.
3. Chọn **Chat Widget**.

![Mở Chat Widget trong Channels](/static/img/chat-widget-open-channels.png)

4. Nhấp **Create widget**.

Nếu bạn đã có widget, bạn sẽ thấy **Your widgets** — nhấp **Edit** để cập nhật cài đặt hoặc **Copy script** để lấy lại mã nhúng.

---

## Bước 2 — Hoàn thành 4 màn hình thiết lập

Trình hướng dẫn thiết lập có **4 bước**. **Bản xem trước** bên phải luôn hiển thị thay đổi của bạn trên một widget mẫu.

| Bước | Tên màn hình | Bạn thực hiện |
|------|-------------|-------------|
| 1 | **Branding** | Logo, màu sắc, lời chào, giao diện |
| 2 | **Basic settings** | Kiểu hiển thị, ngôn ngữ, website được phép |
| 3 | **Engagement and channels** | Thu thập thông tin khách hàng, liên kết kênh khác |
| 4 | **Deploy** | Sao chép script và thêm vào website |

Sau mỗi bước, nhấp **Next** (hoặc nút lưu tương đương) để tiếp tục.

---

### Bước 2.1 — Branding

Đây là những gì **khách hàng nhìn thấy** trên website.

**Thông tin cơ bản**

| Trường | Giá trị gợi ý |
|-------|-----------------|
| **Company logo** | Logo công ty (PNG/JPG, khoảng 128×128 px) |
| **Live chat display name** | Tên hiển thị, ví dụ: `Customer Support` |
| **Sender display name** | Tên người gửi, ví dụ: `Support Team` |
| **Welcome message** | Lời chào khi khách hàng mở cửa sổ chat |

**Giao diện widget**

- Chọn **Style presets** nếu không muốn tùy chỉnh chi tiết.
- Hoặc chọn **Custom** để đặt màu sắc, nền, bán kính góc và biểu tượng nút chat.
- **Pop-up message**: tin nhắn ngắn bên cạnh nút chat để mời khách truy cập (có thể xuất hiện sau vài giây trên trang).

**Khung soạn tin nhắn**

| Trường | Ý nghĩa |
|-------|---------|
| **Placeholder** | Gợi ý trong hộp chat, ví dụ: `Type your question...` |
| **Disclaimer** | Ghi chú bên dưới hộp chat (thay dòng “Powered by ScaleFlow” nếu bạn điền nội dung) |
| **Attachments** | Cho phép khách hàng đính kèm tệp |
| **Multi-line Input** | Enter gửi tin nhắn; Shift+Enter thêm dòng mới |

![Bước Branding](/static/img/chat-widget-branding.png)

---

### Bước 2.2 — Basic settings

**Kiểu hiển thị widget**

| Tùy chọn | Mô tả |
|--------|-------------|
| **Support widget** | **Khuyến nghị** — biểu tượng chat ở góc màn hình, quen thuộc và dễ nhấp |
| **Navigator widget** | Thanh chat phía dưới (có thể không có trong một số môi trường) |

**Ngôn ngữ**

- Chọn các ngôn ngữ widget được hỗ trợ (tiếng Việt, tiếng Anh và các ngôn ngữ khác).
- Kéo để sắp xếp lại — **ngôn ngữ ở trên cùng là mặc định**.

**Allowed Domains** — **bắt buộc**

Nhập **địa chỉ website** được phép hiển thị widget, ví dụ:

- `yourcompany.com`
- `www.yourcompany.com`

Chỉ các website này mới có thể tải widget — điều này ngăn người khác sao chép script của bạn sang các website không liên quan.

**Giới hạn sử dụng**

Giúp giảm spam. Nếu không chắc, bạn có thể giữ **giá trị mặc định** — hệ thống đề xuất các giá trị phù hợp.

![Allowed Domains](/static/img/chat-widget-domains.png)

---

### Bước 2.3 — Engagement and channels

**Thu thập dữ liệu khách hàng**

- Bật nếu muốn khách hàng **nhập tên / điện thoại / email** trước khi trò chuyện.
- Chọn các trường bắt buộc: số điện thoại và/hoặc email.

**Kênh nhắn tin bên ngoài**

- Hiển thị thêm các nút Zalo, Messenger, WhatsApp **trên widget**.
- Chỉ những kênh **đã được kết nối** trong [Tích hợp kênh](../channel-integration) mới có thể bật.
- Nếu chưa kết nối, nhấp **Connect** và làm theo hướng dẫn cho kênh đó trước.

![Cài đặt Engagement](/static/img/chat-widget-engagement.png)

---

### Bước 2.4 — Deploy

Bước này đưa widget **lên website đang hoạt động**.

**Trong ScaleFlow:**

1. Đi đến bước **Deploy**.
2. Nhấp **Copy** để sao chép **script snippet**.
3. Làm theo 5 bước trên màn hình:

| Bước | Việc cần làm |
|------|------------|
| 1 | Mở trang quản trị website (WordPress, Wix, Shopify hoặc hỏi IT) |
| 2 | Dán script vào phần **&lt;head&gt;** của trang (thường có nhãn “Header”, “Custom code” hoặc “HTML head”) |
| 3 | Lưu và **tải lại** website |
| 4 | Nhấp **Verify installation** — xác nhận script nằm trên domain đã khai báo |
| 5 | Mở website và gửi **tin nhắn thử** qua widget |

**Cần trợ giúp với website?**

- Sao chép script và gửi cho **web developer / IT** cùng lời nhắn: *“Vui lòng dán đoạn này vào phần head của website.”*
- Màn hình Deploy có hướng dẫn cho **Wix**, **Shopify** và **WordPress** — mở liên kết phù hợp nếu website của bạn dùng nền tảng đó.

![Deploy — sao chép script](/static/img/chat-widget-deploy.png)

---

## Bước 3 — Xác nhận tin nhắn đến Inbox

1. Mở website đã nhúng widget (trên máy tính hoặc điện thoại).

![Tin nhắn widget trong Inbox](/static/img/chat-widget-inbox-1.png)

2. Nhấp biểu tượng chat → gửi tin nhắn thử: `Hello, I would like to ask for information`.
3. Trong ScaleFlow, mở [Inbox](../../operations/inbox-usage).
4. Xác nhận cuộc trò chuyện mới xuất hiện với nhãn **Chat Widget**.

![Tin nhắn widget trong Inbox](/static/img/chat-widget-inbox.png)

---

## Bước 4 — (Khuyến nghị) Bật trả lời AI tự động

Widget chỉ là **điểm bắt đầu** — AI trả lời khi bạn bật **Smart Assistant**:

1. Tạo [Knowledge](../../scaleflow-ai/knowledge-usage) (FAQ, chính sách và nhiều nội dung khác).
2. Tạo [AI Agent](../../scaleflow-ai/ai-agent-usage) và Publish agent.
3. Đi đến **AI → Inbox Assistant → Smart Assistant** — chọn Agent và bật trả lời tự động. Xem [AI Assistant](../../scaleflow-ai/ai-assistant).

Tin nhắn từ widget được xử lý **giống như tin nhắn từ Zalo hoặc Messenger**.

---

## Bước 5 — (Tùy chọn) Dùng Flows cho kịch bản phức tạp hơn

Nếu cần một flow cố định **chào mừng → kiểm tra tin nhắn khách hàng → gọi AI**, hãy tạo một [Flow](../../operations/flow-usage):

- **Trigger:** Message Received
- **Channel:** chọn **Chat Widget**
- Thêm các step: Send Message, AI Agent, Wait for Reply và các step khác

Ví dụ: khách hàng gửi “Tôi muốn được tư vấn hội viên” → Flow chào khách → Agent đề xuất một gói.

---

## Quản lý widget hiện có

Trong **Channels → Chat Widget**:

| Nút | Khi nào dùng |
|--------|----------------|
| **Edit** | Thay đổi logo, màu sắc, lời chào, domain và nhiều nội dung khác |
| **Copy script** | Lấy lại mã nhúng (sau khi đổi máy tính hoặc làm mất script) |
| **Delete** | Xóa widget (widget sẽ ngừng hoạt động trên website) |

**Lưu ý:** Các thay đổi trong ScaleFlow thường **cập nhật trên website ngay lập tức** — bạn không cần dán script mới trừ khi thay đổi widget hoặc domain.

---

## Ví dụ thực tế — Cửa hàng trực tuyến

1. Admin tạo widget có tên `Order Support Chat`.
2. Branding: logo cửa hàng, giao diện xanh dương, lời chào *“Chào bạn! Bạn cần trợ giúp về đơn hàng hay sản phẩm?”*
3. Basic: Support widget, ngôn ngữ tiếng Việt, domain `yourshop.com`.
4. Engagement: bật thu thập điện thoại; hiển thị nút Zalo (Zalo OA đã kết nối).
5. Deploy: IT dán script vào Shopify.
6. Verify → gửi tin nhắn thử → xem tin nhắn trong Inbox.
7. Bật Smart Assistant với Agent FAQ sản phẩm.

---

## Khắc phục sự cố

### Biểu tượng chat không xuất hiện trên website

- Bạn đã **lưu** và **tải lại** trang chưa?
- Domain website có **khớp** với Allowed Domains không? (`www.` và không có `www.` là khác nhau — thêm cả hai nếu cần).
- Nhấp **Verify installation** ở bước Deploy.
- Thử chế độ ẩn danh hoặc điện thoại khác.

### Widget xuất hiện nhưng báo không được phép

- Website hiện tại không nằm trong **Allowed Domains** — thêm domain và lưu widget.

### Đã gửi tin nhắn nhưng không thấy gì trong Inbox

- Xác nhận bạn đã đăng nhập đúng **tenant** / công ty trong ScaleFlow.
- Gửi thêm một tin nhắn thử; chờ vài giây và làm mới Inbox.
- Hỏi administrator về quyền truy cập Inbox.

### Không thể sao chép hoặc xác minh script

- Tải lại trang Deploy.
- Kiểm tra kết nối mạng; thử trình duyệt khác.

### Muốn thêm Zalo vào widget nhưng không thể bật

- Trước tiên, bạn phải [kết nối Zalo OA](../zalo/connecting-your-zalo-oa-account) (hoặc kênh tương ứng), sau đó quay lại bật trong bước Engagement.

### AI không trả lời trên widget

- Smart Assistant đã được bật chưa? Agent đã được **Publish** chưa?
- Xem [AI Assistant](../../scaleflow-ai/ai-assistant) — widget dùng cùng cơ chế với các kênh khác.

---

## Thực hành tốt nhất

- **Support widget** + màu sắc phù hợp website → tạo thêm niềm tin.
- Giữ **Welcome message** ngắn gọn, rõ ràng (1–2 câu).
- Luôn thêm **domain chính xác** trước khi Deploy.
- **Kiểm tra trên điện thoại** — nhiều khách hàng trò chuyện bằng điện thoại.
- Bật thu thập điện thoại/email nếu cần theo dõi tiếp; tắt nếu muốn trò chuyện nhanh và ít rào cản hơn.
- Thêm nút Zalo/Messenger nếu khách hàng thích các ứng dụng đó.

---

## Checklist ảnh chụp màn hình

| Tên tệp | Nội dung cần chụp |
|-----------|-----------------|
| `chat-widget-open-channels.png` | Menu Channels → Chat Widget |
| `chat-widget-create.png` | Nút Create widget |
| `chat-widget-branding.png` | Bước Branding + bản xem trước |
| `chat-widget-domains.png` | Allowed Domains |
| `chat-widget-engagement.png` | Thu thập dữ liệu + kênh bên ngoài |
| `chat-widget-deploy.png` | Copy script + Verify |
| `chat-widget-live-site.png` | Widget trên website đang hoạt động |
| `chat-widget-inbox.png` | Cuộc trò chuyện widget trong Inbox |

---

## Đọc tiếp

- [Tích hợp kênh](../channel-integration) — tổng quan về tất cả kênh
- [Inbox](../../operations/inbox-usage) — trả lời khách hàng từ widget
- [AI Assistant](../../scaleflow-ai/ai-assistant) — bật trả lời AI tự động
- [AI Agent](../../scaleflow-ai/ai-agent-usage) — tạo Agent cho widget
- [Flows](../../operations/flow-usage) — tự động hóa khi tin nhắn đến từ Chat Widget
