---
id: google-sheets-integration
title: "Google Sheets"
sidebar_label: "Google Sheets"
sidebar_position: 4
description: "Hướng dẫn kết nối Google Sheets với ScaleFlow qua Google OAuth và sử dụng spreadsheet qua AI Agent (MCP)."
displayed_sidebar: scaleFlowSidebar
---

# Tích hợp Google Sheets

Kết nối **Google Sheets** cho phép ScaleFlow và AI Agent đọc, ghi và quản lý dữ liệu spreadsheet mà bạn đã cấp quyền. Agent có thể **đọc range**, **thêm hàng**, **cập nhật ô** hoặc **tạo spreadsheet mới** qua công cụ MCP.

Dùng integration này khi muốn:

- Lưu lead, ticket hoặc ghi chú cuộc trò chuyện vào spreadsheet dùng chung.
- Để AI Agent đọc bảng giá, tồn kho hoặc dữ liệu FAQ lưu trong sheet.
- Tự động hóa báo cáo định kỳ (đọc range -> tóm tắt -> ghi kết quả).

---

## Trước khi bắt đầu

Hãy chuẩn bị:

- Tài khoản **Google** (Gmail hoặc Google Workspace) có quyền với các spreadsheet cần dùng.
- Quyền quản lý integration trong **ScaleFlow** (bạn thấy menu **Integrations** và có thể nhấp **Connect**).
- Một spreadsheet đã tạo trong Google Sheets (hoặc để agent tạo spreadsheet mới qua MCP).
- Khoảng **5-10 phút** cho lần kết nối đầu tiên.

> **Quyền truy cập tệp:** ScaleFlow dùng phạm vi tệp **Google Drive** — chỉ có thể truy cập spreadsheet bạn **chọn qua Google Picker** khi cấu hình agent hoặc các tệp **do integration tạo**. Spreadsheet chưa được chọn hoặc chia sẻ sẽ trả lỗi quyền.

---

## Tổng quan các bước

| Bước | Nơi thực hiện | Việc cần làm |
|------|-------|------------|
| 1 | ScaleFlow | **Integrations -> Google Sheets -> Connect** |
| 2 | Google | Đăng nhập và **Allow** quyền đọc/ghi sheet |
| 3 | ScaleFlow | Xác nhận kết nối **Connected** và chạy **Test connection** |
| 4 | ScaleFlow | (Tùy chọn) Mở tab **Display** và đổi tên kết nối |
| 5 | ScaleFlow | Gắn kết nối với **AI Agent** và chọn spreadsheet |
| 6 | ScaleFlow | Viết Instructions và chạy **Test Version** |

---

## Bước 1 - Kết nối Google Sheets trong ScaleFlow

1. Trong ScaleFlow, mở menu bên trái -> **Integrations**.

2. Tìm thẻ **Google Sheets** bên dưới **Third-party Integrations** -> nhấp **Manage Integration**.

   ![Thẻ tích hợp Google Sheets](/static/img/open-google-sheets.png)

3. Trên màn hình thiết lập, xem lại **Permissions required**:
   - **Read spreadsheet rows** — đọc dữ liệu cho quy trình và agent.
   - **Append new rows** — thêm hàng từ tự động hóa.

   ![Quyền thiết lập Google Sheets](/static/img/required-googl-sheets.png)

4. Nhấp **Continue with Google**.

5. Trong cửa sổ Google, chọn tài khoản Google dùng cho spreadsheet.

6. Nhấp **Allow** để cấp cho ScaleFlow các quyền được yêu cầu.

7. Sau khi xác thực, bạn được chuyển về ScaleFlow. Kết nối xuất hiện với trạng thái **Connected**.

   ![Danh sách kết nối Google Sheets](/static/img/list-connect-google-sheets.png)

---

## Bước 2 - Quản lý kết nối

Mở **Integrations -> Google Sheets** và chọn một kết nối.

### Tab Display

- **Connection name** — thay đổi tên hiển thị (ví dụ: `Google Sheets — Sales`, `Google Sheets — Ops`).
- **Google account metadata** (chỉ đọc):
  - **Account name**
  - **Google email**
  - **Connected on**

![Tab Display Google Sheets](/static/img/display-google-sheets.png)

### Tab AI and Automation

Tab này hiển thị:

- Tổng quan quy trình spreadsheet với AI.
- **Google Sheets actions** — danh sách công cụ MCP.
- **Recommended setup flows** — thu thập lead, báo cáo AI, hàng đợi duyệt thủ công.

![Tab AI and Automation Google Sheets](/static/img/google-sheets-ai-automation-tab.png)

### Thao tác nhanh

| Thao tác | Khi nào dùng |
|--------|----------------|
| **Test connection** | Sau khi kết nối hoặc khi nghi ngờ token đã hết hạn |
| **Reconnect** | Google đã thu hồi quyền hoặc bạn cần đăng nhập lại |
| **Disconnect** | Tạm dừng kết nối |
| **Delete** | Xóa kết nối khỏi ScaleFlow |

![Thao tác trên kết nối Google Sheets](/static/img/google-sheets-connection-actions.png)

---

## Bước 3 - Gắn Google Sheets với AI Agent

1. Mở **AI -> Agents** và chọn agent (hoặc tạo agent mới).
2. Trong thanh bên phải, mở tab **Capabilities**.
3. Bên dưới **Integrations**, thêm kết nối **Google Sheets**.
4. Nhấp **Select spreadsheets** và chọn một hoặc nhiều spreadsheet qua **Google Picker**.

   ![Chọn spreadsheet Google Sheets cho agent](/static/img/google-sheets-agent-picker.png)

5. Nhấp **Save Draft** -> **Test Version**.

   ![Kiểm tra Google Sheets](/static/img/test-google-sheet.png)

> **Quan trọng:** Agent chỉ có thể làm việc với spreadsheet được chọn ở bước 4 (hoặc spreadsheet agent tạo qua MCP). Nếu bỏ qua việc chọn tệp, nhiều công cụ sẽ trả về *No spreadsheet ID provided or configured*.

---

## Bước 4 - Viết Instructions để kiểm tra agent

Dán nội dung sau vào trường **Runbook / Instructions** (giữ tone/format hiện có và thêm block này):

```markdown
#GoogleSheets: You can access Google Sheets through MCP tools.

## Rules
- When the user asks for spreadsheet data -> use google_sheets__read_rows with an A1 notation range (for example Sheet1!A1:D20).
- When the user provides information to save -> use google_sheets__append_row with sheetName and values.
- Only use google_sheets__update_values, google_sheets__clear_values, and google_sheets__delete_sheet when the user explicitly requests it.
- Do not invent data — always read from the sheet before answering questions about numbers.

## Default sheet for testing
- spreadsheetId: (fill in the ID from the Google Sheets URL, or let the agent use the spreadsheet selected in Capabilities)
- sheetName: Sheet1
- test read range: Sheet1!A1:C10
```

**Prompt kiểm tra gợi ý:**

| Mục tiêu | Câu hỏi kiểm tra |
|------|---------------|
| Đọc dữ liệu | *"Read the first 10 rows in Sheet1 and summarize them for me."* |
| Thêm hàng | *"Add a new row: Name=John A, Email=test@example.com, Source=Chat."* |
| Metadata | *"What tabs (sheets) does this spreadsheet have?"* |

---

## Công cụ MCP - Agent có thể làm gì?

![Các thao tác MCP Google Sheets](/static/img/google-sheet-action.png)

### Đọc hàng (`google_sheets__read_rows`)

Đọc dữ liệu từ một range theo ký hiệu A1.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `range` | Có | Ví dụ: `Sheet1!A1:D20`, `Leads!A:E` |
| `spreadsheetId` | Không | ID spreadsheet; để trống nếu đã chọn trong Capabilities của agent |

### Thêm hàng (`google_sheets__append_row`)

Thêm hàng mới ở cuối sheet.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `sheetName` | Có | Tên tab, ví dụ `Sheet1`, `Leads` |
| `values` | Có | Mảng giá trị cột, ví dụ `["John A", "test@example.com", "Chat"]` |
| `spreadsheetId` | Không | Như trên |

### Cập nhật giá trị (`google_sheets__update_values`)

Ghi đè giá trị trong một range.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `range` | Có | Range theo ký hiệu A1 |
| `values` | Có | Mảng 2 chiều, ví dụ `[["A1", "B1"], ["A2", "B2"]]` |
| `spreadsheetId` | Không | Như trên |

### Xóa giá trị (`google_sheets__clear_values`)

Xóa nội dung trong một range (giữ nguyên cấu trúc sheet).

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `range` | Có | Range theo ký hiệu A1 |
| `spreadsheetId` | Không | Như trên |

### Lấy Spreadsheet (`google_sheets__get_spreadsheet`)

Trả metadata: tên tệp, danh sách tab, ID sheet.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `spreadsheetId` | Không* | *Bắt buộc nếu chưa cấu hình trong agent |

### Tạo Spreadsheet (`google_sheets__create_spreadsheet`)

Tạo spreadsheet mới (ScaleFlow có quyền truy cập vì ứng dụng đã tạo tệp).

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `title` | Có | Tên tệp mới |

### Thêm Sheet (`google_sheets__add_sheet`)

Thêm tab mới vào spreadsheet hiện có.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `title` | Có | Tên tab mới |
| `spreadsheetId` | Không | Như trên |

### Xóa Sheet (`google_sheets__delete_sheet`)

Xóa một tab khỏi spreadsheet.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `sheetId` | Có | ID tab dạng số (lấy từ **Get Spreadsheet**) |
| `spreadsheetId` | Không | Như trên |

---

## Lấy Spreadsheet ID từ URL Google

Mở spreadsheet trong trình duyệt. URL có dạng:

```text
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```

Phần nằm giữa `/d/` và `/edit` là **spreadsheetId**:

```text
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

Trong hầu hết trường hợp, bạn **không cần** sao chép thủ công — chỉ cần chọn spreadsheet qua **Select spreadsheets** trong Capabilities của agent.

---

## Quy trình được khuyến nghị

### 1. Thu thập lead vào sheet

Khách hàng trò chuyện -> agent thu thập tên, email và nguồn -> **Append Row** vào tab `Leads`.

### 2. Workspace báo cáo AI

Agent **Read Rows** từ bảng KPI -> tóm tắt cho người dùng -> **Update Values** vào ô báo cáo cuối tháng.

### 3. Hàng đợi duyệt thủ công

Agent chuẩn bị một dòng dữ liệu -> ghi vào sheet cần duyệt -> đội ngũ phê duyệt trực tiếp trong Google Sheets.

---

## Quy trình thực tế

1. Admin kết nối Google Sheets bằng tài khoản Google của đội Sales.
2. Admin tạo agent `Lead Capture` và chọn spreadsheet `Leads 2026` trong Capabilities.
3. Admin viết Instructions: thêm một hàng mỗi khi có lead mới.
4. Admin chạy **Test Version** -> **Publish** -> gắn agent với Smart Assistant.
5. Khi Google thu hồi quyền, admin **Reconnect** và chạy **Test connection**.

---

## Khắc phục nhanh

### Lỗi: No spreadsheet ID provided or configured

- Trong agent -> **Capabilities** -> chọn ít nhất một spreadsheet qua **Select spreadsheets**.
- Hoặc truyền `spreadsheetId` rõ ràng trong Instructions hoặc lần gọi công cụ.

### Lỗi: Insufficient permissions / 403

- Spreadsheet chưa được chọn qua Google Picker trong agent.
- Hoặc tệp thuộc tài khoản Google khác — kết nối lại bằng tài khoản chính xác.
- Thử **Reconnect** integration và chọn lại spreadsheet.

### Lỗi: Spreadsheet not found / 404

- Xác nhận spreadsheetId chính xác.
- Tệp có thể đã bị xóa hoặc người dùng mất quyền truy cập.

### Lỗi: Google OAuth không trả refresh token

- Đến [Google Account -> Security -> Third-party apps](https://myaccount.google.com/permissions) và xóa quyền ScaleFlow.
- **Reconnect** và chấp nhận lại toàn bộ quyền (Google sẽ cấp refresh token mới).

### Agent không gọi công cụ Sheets

- Xác nhận tab **Capabilities** có kết nối Google Sheets.
- Instructions phải nói rõ khi nào dùng công cụ đọc/thêm.
- Nhấp **Save Draft** trước khi chạy Test Version.

### Thiếu menu Integrations

- Hỏi administrator để được cấp quyền quản lý integration.

---

## Thực hành tốt nhất

- Dùng tên kết nối rõ ràng theo đội hoặc mục đích (`Google Sheets — Marketing`).
- Dùng các tab riêng (`Leads`, `Report`) thay vì ghi đè `Sheet1` mặc định.
- Chỉ bật công cụ ghi/xóa (`update`, `clear`, `delete sheet`) khi thực sự cần.
- Kiểm tra trên bản sao spreadsheet trước khi dùng tệp production.
- Kết nối lại định kỳ nếu đội ngũ thay đổi tài khoản Google Workspace.

---

## Đọc tiếp

- [Sử dụng Integration](./integration-usage) — quản lý integrations trong ScaleFlow.
- [Tích hợp Google Drive](./google-drive-integration) — tài liệu và Knowledge từ Drive.
- [Sử dụng AI Agent](../scaleflow-ai/ai-agent-usage) — tạo, kiểm tra và publish agent.
- [Tích hợp kênh](../channels/channel-integration) — kết nối kênh nhắn tin khách hàng.
