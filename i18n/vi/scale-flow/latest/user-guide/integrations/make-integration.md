---
id: make-integration
title: "Make"
sidebar_label: "Make"
sidebar_position: 5
description: "Giới thiệu về Make và hướng dẫn từng bước để kết nối Make với ScaleFlow bằng API token, rồi sử dụng scenario qua AI Agent (MCP)."
displayed_sidebar: scaleFlowSidebar
---

# Tích hợp Make

Kết nối **Make** (nền tảng tự động hóa trực quan, trước đây là Integromat) cho phép ScaleFlow làm việc với **scenario** trong tổ chức Make của bạn. AI Agent có thể **khám phá**, **kiểm tra** và **chạy** scenario qua công cụ MCP (Model Context Protocol).

Dùng integration này khi muốn:

- Để AI Agent ScaleFlow điều phối các quy trình đã xây dựng trong Make.
- Kết hợp cuộc trò chuyện khách hàng (Inbox, Smart Assistant) với tự động hóa đa ứng dụng trong Make (CRM, nhắn tin, vận hành và nhiều nội dung khác).
- Tận dụng hơn 3.000 integration dựng sẵn của Make mà không cần xây connector tùy chỉnh.

---

## Make là gì?

**Make** (trước đây là **Integromat**) là nền tảng tự động hóa trực quan trên cloud. Bạn kéo thả **module** trên canvas để kết nối ứng dụng, dịch vụ và API mà không cần viết code.

Trong Make, mỗi flow tự động hóa được gọi là một **scenario**. Một scenario có thể:

- Nhận sự kiện từ một ứng dụng (ví dụ: biểu mẫu mới gửi, email đến hoặc webhook).
- Xử lý hoặc chuyển đổi dữ liệu (lọc, ánh xạ trường, điều kiện if/else).
- Gửi kết quả đến ứng dụng khác (CRM, Google Sheets, Slack, email, database và nhiều dịch vụ khác).

Make hỗ trợ sẵn **hơn 3.000 ứng dụng và dịch vụ**. Doanh nghiệp thường dùng Make để:

- Đồng bộ dữ liệu giữa CRM, ERP và công cụ marketing.
- Tự động tạo ticket, gửi cảnh báo nội bộ hoặc email cho khách hàng.
- Xử lý đơn hàng, hóa đơn và báo cáo theo lịch.
- Kết nối hệ thống nội bộ qua HTTP, webhook hoặc API tùy chỉnh.

### Thuật ngữ Make cần biết

| Thuật ngữ | Ý nghĩa |
|------|---------|
| **Scenario** | Flow tự động hóa trực quan trong Make, gồm các module được kết nối. |
| **Module** | Một bước trong scenario (ví dụ: đọc Google Sheet, gửi Slack, gọi webhook). |
| **Organization** | Workspace của bạn trong Make, chứa scenario, team và quyền truy cập. |
| **API token** | Thông tin xác thực cho phép hệ thống bên ngoài (như ScaleFlow) gọi Make API thay mặt organization. |
| **Cloud instance** | Khu vực máy chủ Make (ví dụ `eu1`, `us1`), tùy theo tài khoản hoặc organization. |

> **Lưu ý:** Make **không thay thế ScaleFlow**. Make mạnh về tự động hóa đa ứng dụng; ScaleFlow mạnh về cuộc trò chuyện khách hàng, Inbox, AI Agent và điều phối đội hỗ trợ.

---

## Make và ScaleFlow phối hợp như thế nào?

Hai nền tảng bổ trợ cho nhau:

| | **ScaleFlow** | **Make** |
|---|---------------|----------|
| **Vai trò chính** | Tập hợp tin nhắn đa kênh, Inbox, AI Agent, ticket và contact | Tự động hóa quy trình trên nhiều ứng dụng và API |
| **Dữ liệu điển hình** | Cuộc trò chuyện khách hàng, ngữ cảnh hỗ trợ, Knowledge | CRM, sheet, email, Slack, ERP, webhook |
| **Ai thực hiện** | Nhân viên hỗ trợ, AI Assistant, AI Agent | Scenario chạy tự động hoặc được agent kích hoạt |

Khi Make được kết nối với ScaleFlow:

1. **ScaleFlow** xử lý cuộc trò chuyện khách hàng (LINE, WhatsApp, Facebook và nhiều kênh khác).
2. **AI Agent** trong ScaleFlow quyết định khi nào cần hành động bên ngoài.
3. Agent gọi **công cụ MCP** để liệt kê, kiểm tra hoặc **chạy scenario Make**.
4. **Make** thực hiện tự động hóa trong CRM, sheet, email, Slack hoặc hệ thống khác.
5. Kết quả quay lại để agent tiếp tục trả lời khách hàng hoặc cập nhật công việc nội bộ.

```text
Customer → ScaleFlow (Inbox / AI Agent)
                    │
                    ▼
              MCP tools (List / Inspect / Run Scenario)
                    │
                    ▼
              Make scenario → CRM / Sheet / Slack / Email / ...
                    │
                    ▼
              Result → Agent / staff continue handling the request
```

**Ví dụ thực tế:**

- Khách hàng hỏi trạng thái đơn hàng trên LINE -> AI Agent thu thập mã đơn -> chạy scenario Make để tra Shopify/ERP -> trả lời trong Inbox.
- Ticket mới được tạo -> agent kích hoạt scenario Make để gửi cảnh báo Slack cho đội vận hành.
- Khách hàng xác nhận lịch hẹn -> scenario Make tạo sự kiện Google Calendar và ghi contact vào HubSpot.

Integration này đặc biệt hữu ích khi doanh nghiệp **đã có scenario Make** và muốn AI ScaleFlow dùng lại chúng thay vì xây lại từ đầu.

---

## Trước khi bắt đầu

Hãy chuẩn bị:

- Tài khoản **Make** có quyền truy cập organization muốn kết nối.
- Quyền quản lý integration trong **ScaleFlow** (bạn thấy menu **Integrations** và có thể nhấp **Connect**).
- **API token** Make — ScaleFlow dùng xác thực token, **không phải** OAuth.
- Khoảng **5-10 phút** cho lần kết nối đầu tiên.

> **Lưu ý:** Mỗi kết nối ScaleFlow gắn với **một Make organization**. Nếu có Production, Staging hoặc nhiều team/khu vực, hãy tạo **kết nối riêng** cho từng organization.

---

## Tổng quan các bước

| Bước | Nơi thực hiện | Việc cần làm |
|------|-------|------------|
| 1 | Make | Tạo và sao chép **API token** |
| 2 | ScaleFlow | Mở trang Make trong **Integrations** và nhấp **Connect** |
| 3 | ScaleFlow | Dán token và xác nhận kết nối |
| 4 | ScaleFlow | Xem chi tiết workspace và **Test connection** |
| 5 | ScaleFlow | (Tùy chọn) Gắn kết nối Make với **AI Agent** để dùng công cụ MCP |

---

## Bước 1 - Lấy API Token trong Make

1. Đăng nhập Make tại [https://make.com](https://make.com).
2. Nhấp **avatar** ở góc trên bên phải -> chọn **Profile**.

   ![Menu Profile của Make](/static/img/profile-make.png)

3. Trong thanh bên trái, chọn **API access** (hoặc **API**, tùy phiên bản UI).

   ![Thanh bên API access của Make](/static/img/make-api-access.png)

4. Nhấp **Add token** và đặt tên rõ ràng, chẳng hạn `ScaleFlow Production`.

   ![Hộp thoại Add token của Make](/static/img/add-token-make.png)

5. Sao chép token ngay sau khi tạo — Make thường **chỉ hiển thị token một lần**.

   ![Sao chép API token Make](/static/img/copy-token-make.png)

> **Bảo mật:** Token cấp quyền truy cập vào Make organization của bạn. Không chia sẻ công khai hoặc dán vào chat/email không mã hóa. Nếu token bị lộ, hãy xóa token cũ trong Make, tạo token mới rồi **Reconnect** trong ScaleFlow.

---

## Bước 2 - Kết nối Make trong ScaleFlow

1. Trong ScaleFlow, mở menu bên trái -> **Integrations**.

   ![Menu Integrations của ScaleFlow](/static/img/open-make.png)

2. Tìm thẻ **Make** bên dưới **Third-party Integrations** -> nhấp **Connect**.

   ![Thẻ integration Make](/static/img/add-connection-make.png)

3. Trên màn hình thiết lập:
   - Đọc **How to get your Make API token** (có thể mở rộng trực tiếp trên biểu mẫu).
   - Dán **API token** vào trường **API token**.

   ![Biểu mẫu thiết lập Make trong ScaleFlow](/static/img/paste-token-make.png)

4. Nhấp **Connect**.

ScaleFlow sẽ:

- Xác thực token với Make API.
- Tự động phát hiện **cloud instance** (ví dụ `eu1`, `eu2`, `us1`, `us2`).
- Lấy thông tin **organization** và **user**, rồi đặt **workspace label** theo tên Make organization.

Sau khi kết nối thành công, bạn được chuyển đến danh sách kết nối Make.

![Danh sách kết nối Make](/static/img/list-make-connection.png)

---

## Bước 3 - Quản lý kết nối

Mở **Integrations -> Make** và chọn một kết nối để xem chi tiết. Có hai tab chính:

### Tab Display

Dùng tab này để:

- **Đổi workspace label** trong ScaleFlow (ví dụ: `Make Production`, `Make Staging EU`).
- Xem thông tin **chỉ đọc** từ Make:
  - **Organization** và **Organization ID**
  - **Cloud instance** (Make host, ví dụ `eu1.make.com`)
  - **API token owner** (người tạo token)
  - **Connected on** (thời điểm kết nối)

![Tab Display kết nối Make](/static/img/display-make.png)

Trường organization và instance lấy từ token đã xác thực và không thể chỉnh sửa trực tiếp trong ScaleFlow.

### Tab AI and Automation

Tab này hiển thị:

- Tổng quan về cách dùng Make với AI Agent.
- **Scenario tools for AI agents** — các công cụ MCP Make cung cấp.
- **Recommended automation patterns** — flow gợi ý như khám phá scenario, cầu nối webhook và điều phối agent đa ứng dụng.

![Tab AI and Automation kết nối Make](/static/img/ai-automation-make.png)

Nhấp **Build an AI agent** để tạo agent mới và gắn integration.

### Thao tác nhanh trên danh sách kết nối

| Thao tác | Khi nào dùng |
|--------|----------------|
| **Test connection** | Sau khi kết nối hoặc khi nghi ngờ token đã hết hạn/bị thu hồi |
| **Reconnect** | Khi cần nhập token Make mới |
| **Disconnect** | Tạm dừng kết nối (trạng thái chuyển thành Disconnected) |
| **Delete** | Xóa vĩnh viễn kết nối khỏi ScaleFlow (có hộp thoại xác nhận) |

![Thao tác nhanh kết nối Make](/static/img/action-make.png)

---

## Bước 4 - Gắn Make với AI Agent

Để agent thực sự gọi scenario Make, hãy thêm kết nối vào agent:

1. Mở **AI -> Agents** và chọn agent (hoặc tạo agent mới).
2. Trong phần **Integrations**, nhấp để thêm kết nối.
3. Chọn kết nối **Make** đang active.

   ![Phần Integrations của AI Agent với Make](/static/img/add-make.png)

4. Nhấp **Save Draft** -> **Test Version** và xác nhận agent gọi đúng scenario.

   ![Kiểm tra AI Agent với công cụ Make](/static/img/test-make.png)

5. Nhấp **Publish Version** khi hài lòng.

Xem thêm: [Sử dụng AI Agent](../scaleflow-ai/ai-agent-usage) và [Sử dụng Integration](./integration-usage).

---

## Công cụ MCP - Agent có thể làm gì với Make?

Khi kết nối Make active, ScaleFlow cung cấp các công cụ sau cho AI Agent:

![Công cụ scenario MCP của Make](/static/img/scenario-tool.png)

### Liệt kê Visual Scenario (`make_list_scenarios`)

Liệt kê các scenario trong Make organization đã liên kết.

| Tham số | Mô tả |
|-----------|-------------|
| `limit` | Số scenario tối đa trả về (mặc định: 10) |
| `offset` | Số scenario bỏ qua để phân trang (mặc định: 0) |

**Ví dụ sử dụng:** Agent khảo sát các scenario active trước khi đề xuất hoặc kích hoạt flow phù hợp.

### Kiểm tra Scenario (`make_get_scenario`)

Hiển thị chi tiết một scenario theo ID.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `scenarioId` | Có | ID scenario trong Make (dạng số) |

**Ví dụ sử dụng:** Agent đọc cấu trúc scenario, input bắt buộc và trạng thái trước khi chạy.

### Chạy Scenario (`make_run_scenario`)

Chạy một scenario **active** trong Make.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `scenarioId` | Có | ID scenario cần chạy |
| `data` | Không | Object input khi scenario yêu cầu tham số |
| `responsive` | Không | `true` (mặc định): chờ scenario hoàn tất (tối đa khoảng 40 giây) và trả trạng thái; `false`: trả `executionId` ngay lập tức |
| `callbackUrl` | Không | URL nhận callback POST cho lượt chạy không responsive; bị bỏ qua khi `responsive` là `true` |

**Ví dụ sử dụng:** Agent chạy scenario để đồng bộ dữ liệu CRM, gửi thông báo Slack hoặc kích hoạt chuỗi module Make sau khi thu thập đủ thông tin từ khách hàng.

> **Mẹo về Instructions:** Trong **Instructions** của agent, nêu rõ khi nào được chạy scenario, những scenario ID nào được phép hoặc cách agent chọn scenario (ví dụ: luôn `list` trước và chỉ `run` các scenario đã phê duyệt).

---

## Mẫu tự động hóa được khuyến nghị

### 1. Khám phá toàn cảnh scenario

Agent gọi **List Visual Scenarios** để lập bản đồ các scenario active, sau đó trả lời hoặc điều hướng theo ngữ cảnh cuộc trò chuyện.

### 2. Cầu nối webhook đến scenario

Sự kiện từ ScaleFlow (tin nhắn mới, ticket, contact) được chuyển tiếp đến scenario Make qua HTTP/webhook — hữu ích khi scenario Make đã có module Webhooks.

### 3. Điều phối agent đa ứng dụng

Agent ScaleFlow xử lý cuộc trò chuyện; khi cần thao tác CRM, sheet, email hoặc công cụ khác, agent gọi **Run Scenario** để Make xử lý phần còn lại trên hơn 3.000 ứng dụng.

---

## Quy trình thực tế

1. Admin tạo Make API token cho organization Production.
2. Admin kết nối Make trong ScaleFlow và **Test connection** thành công.
3. Admin tạo AI Agent tên `Operations Assistant` và gắn kết nối Make.
4. Admin viết Instructions: agent được phép liệt kê scenario và chỉ được chạy các scenario ID cụ thể sau khi khách hàng xác nhận.
5. Admin chạy **Test Version** bằng câu hỏi mẫu rồi **Publish**.
6. Agent được gắn vào [Smart Assistant](../scaleflow-ai/ai-assistant) hoặc flow Inbox.
7. Khi Make token hết hạn, admin **Reconnect** và kiểm tra lại.

---

## Khắc phục nhanh

### Lỗi: Make API token is required

- Trường token trống hoặc chỉ có khoảng trắng. Dán lại toàn bộ token.

### Lỗi: Invalid Make API token

- Token sai, đã bị xóa trong Make hoặc thuộc organization không thể truy cập.
- Tạo token mới trong Make rồi **Reconnect** trong ScaleFlow.

### Kết nối thành công nhưng thiếu công cụ MCP

- Mở tab **AI and Automation**. Nếu trống, dùng **Test connection** hoặc **Reconnect**.
- Đảm bảo trạng thái là **Connected**, không phải **Error** hoặc **Disconnected**.

### Agent không thể chạy scenario

- Scenario trong Make phải ở trạng thái **active** (ON).

  ![Toggle scenario active của Make](/static/img/on-scenarios.png)

- Xác nhận `scenarioId` chính xác (từ **Inspect Scenario** hoặc URL trình chỉnh sửa Make).
- Nếu scenario yêu cầu input, truyền đủ giá trị bắt buộc trong `data`.
- Với scenario chạy lâu, cân nhắc `responsive: false` và `callbackUrl`.

### Nhiều organization hoặc khu vực (EU, US)

- ScaleFlow tự động phát hiện instance (`eu1`, `eu2`, `us1`, `us2`) khi xác thực token.
- Mỗi organization nên có **kết nối ScaleFlow riêng** với workspace label rõ ràng.

### Thiếu menu Integrations

- Yêu cầu administrator cấp quyền xem hoặc quản lý integration.

---

## Thực hành tốt nhất

- Dùng tên kết nối rõ ràng như `Make Production` và `Make Staging EU`.
- Tạo token riêng cho ScaleFlow và revoke token khi không còn cần.
- Chạy **Test connection** ngay sau khi kết nối hoặc thay đổi token.
- Trong Instructions của agent, giới hạn các scenario được phép chạy để tránh vô tình kích hoạt tự động hóa nhạy cảm.
- Trong Make, tắt hoặc xóa scenario kiểm thử không còn cần.

---

## Đọc tiếp

- [Sử dụng Integration](./integration-usage) — quản lý integrations trong ScaleFlow.
- [Tích hợp Google Drive](./google-drive-integration) — kết nối Drive và chọn tệp.
- [Sử dụng AI Agent](../scaleflow-ai/ai-agent-usage) — tạo, kiểm tra và publish agent.
- [AI Assistant](../scaleflow-ai/ai-assistant) — bật Smart Assistant cho khách hàng.
- [Tích hợp kênh](../channels/channel-integration) — kết nối kênh nhắn tin khách hàng.
