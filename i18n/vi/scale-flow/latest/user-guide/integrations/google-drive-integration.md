---
id: google-drive-integration
title: "Google Drive"
sidebar_label: "Google Drive"
sidebar_position: 3
description: "Hướng dẫn kết nối Google Drive với ScaleFlow qua Google OAuth, sử dụng Knowledge và làm việc với AI Agent (MCP)."
displayed_sidebar: scaleFlowSidebar
---

# Tích hợp Google Drive

Kết nối **Google Drive** cho phép ScaleFlow chỉ truy cập **các tệp bạn chọn** thông qua Google Picker. Bạn có thể:

- Đồng bộ tài liệu vào **Knowledge** để AI đọc nội dung (FAQ, catalog, chính sách).
- Gắn Drive với **AI Agent** để agent **liệt kê tệp** và **xem metadata** qua công cụ MCP.

Dùng integration này khi muốn:

- Để đội ngũ lưu tài liệu trên Drive và Smart Assistant trả lời dựa trên các tệp đó.
- Để agent tìm đúng tệp hoặc thư mục trên Drive trong quy trình vận hành.
- Tránh cấp quyền cho toàn bộ Drive — chỉ mở các tệp được chọn rõ ràng.

---

## Google Drive và Google Sheets

| | Google Drive | Google Sheets |
|---|--------------|---------------|
| Mục đích chính | Tài liệu (PDF, Word và nhiều loại khác) | Spreadsheet, dữ liệu hàng/cột |
| Đọc nội dung cho AI | Qua **Knowledge** (đồng bộ tệp) | Qua MCP `read_rows` hoặc Knowledge |
| Công cụ MCP | `list_files`, `get_file` (metadata) | `read_rows`, `append_row` và nhiều công cụ khác |
| Tài liệu riêng | Hướng dẫn này | [Tích hợp Google Sheets](./google-sheets-integration) |

---

## Trước khi bắt đầu

Hãy chuẩn bị:

- Tài khoản **Google** hoặc **Google Workspace** có các tệp cần dùng.
- Quyền quản lý integration trong **ScaleFlow**.
- Các tệp đã được tải lên Google Drive (PDF, DOCX, TXT và nhiều loại khác).
- Khoảng **5-10 phút** cho lần kết nối đầu tiên.

> **Phạm vi truy cập (drive.file):** ScaleFlow **không** nhìn thấy toàn bộ Drive. ScaleFlow chỉ có thể truy cập các tệp bạn **chọn qua Google Picker** khi tạo Knowledge hoặc cấu hình agent. Không thể đọc các tệp chưa được chọn.

---

## Tổng quan các bước

| Bước | Nơi thực hiện | Việc cần làm |
|------|-------|------------|
| 1 | ScaleFlow | **Integrations -> Google Drive -> Connect** |
| 2 | Google | Đăng nhập và **Allow** quyền truy cập |
| 3 | ScaleFlow | Chạy **Test connection** và xác nhận trạng thái **Connected** |
| 4 | ScaleFlow | Tạo nguồn **Knowledge** từ Google Drive **hoặc** gắn Drive với **AI Agent** |
| 5 | ScaleFlow | Chọn tệp qua **Google Picker** -> đồng bộ / kiểm tra |

---

## Bước 1 - Kết nối Google Drive trong ScaleFlow

1. Mở menu bên trái -> **Integrations**.

   ![Menu Integrations của ScaleFlow](/static/img/integration-connection.png)

2. Tìm thẻ **Google Drive** -> nhấp **Connect**.
3. Trên màn hình thiết lập, xem lại **Permissions required**:
   - **Access only the files and folders you choose in Google Picker** — chỉ các tệp bạn chọn để tự động hóa và đồng bộ knowledge.

   ![Quyền thiết lập Google Drive](/static/img/google-drive-setup-permissions.png)

4. Nhấp **Continue with Google**.

5. Chọn tài khoản Google và nhấp **Allow**.

   ![Xác nhận OAuth Google Drive](/static/img/connect-google-drive-1.png)

6. Sau khi xác thực, kết nối xuất hiện với trạng thái **Connected**.

   ![Danh sách kết nối Google Drive](/static/img/google-drive-connections-list.png)

---

## Bước 2 - Quản lý kết nối

Mở **Integrations -> Google Drive** và chọn một kết nối.

### Tab Display

- **Connection name** — đổi tên kết nối (ví dụ: `Google Drive — Marketing`, `Google Drive — Support`).
- **Google account metadata** (chỉ đọc): Tên tài khoản, email Google, Connected on.

![Tab Display Google Drive](/static/img/google-drive-display-tab.png)

### Tab AI and Automation

- Tổng quan quy trình Drive với AI.
- **Google Drive actions** — công cụ MCP.
- **Recommended setup flows**: Document Discovery, Metadata Sync, Knowledge Source Sync.

![Tab AI and Automation Google Drive](/static/img/google-drive-ai-automation-tab.png)

### Thao tác nhanh

| Thao tác | Khi nào dùng |
|--------|----------------|
| **Test connection** | Sau khi kết nối hoặc khi nghi ngờ token đã hết hạn |
| **Reconnect** | Google đã thu hồi quyền truy cập |
| **Disconnect** / **Delete** | Dừng hoặc xóa kết nối |

---

## Bước 3 - Dùng Google Drive làm Knowledge (Đọc nội dung tài liệu)

Đây là cách tiếp cận phổ biến nhất: AI **đọc nội dung tệp** (FAQ, catalog) qua Knowledge, không phải qua Drive MCP.

1. Mở **AI -> Knowledge** -> **Add knowledge**.
2. Chọn **Source type: Google Drive**.
3. Chọn **Google Drive connection** (có trạng thái Connected).
4. Nhấp **Select files** và chọn một hoặc nhiều tệp qua Google Picker.
5. Nhấp **Add knowledge**.
6. Trên trang chi tiết Knowledge, nhấp **Sync knowledge** / **Synchronize** để ScaleFlow nạp nội dung.

![Nguồn Google Drive của Knowledge](/static/img/knowledge-google-drive.png)

7. Gắn nguồn Knowledge với một **AI Agent** (tab Capabilities -> Knowledge).
8. Agent dùng công cụ `queryKnowledge` để trả lời dựa trên tài liệu đã đồng bộ.

Xem thêm: [Sử dụng Knowledge](../scaleflow-ai/knowledge-usage).

> **Lưu ý:** Picker trong Knowledge chọn **tệp** (không phải thư mục). Mỗi lần thêm tệp mới, hãy đồng bộ Knowledge lại.

---

## Bước 4 - Gắn Google Drive với AI Agent (MCP)

Dùng cách này khi agent cần **tìm tệp** hoặc **xem metadata** (tên, loại, ngày sửa đổi gần nhất, liên kết) — **không phải** đọc trực tiếp nội dung PDF/DOC qua MCP.

1. Mở **AI -> Agents** và chọn một agent.
2. Mở tab **Capabilities** -> thêm integration **Google Drive**.
3. Nhấp **Select files** và chọn tệp hoặc thư mục qua Google Picker.

   ![Chọn tệp Google Drive cho agent](/static/img/google-drive-agent-picker.png)

4. Nhấp **Save Draft** -> **Test Version**.

> Drive MCP **không thay thế Knowledge**: nếu muốn agent trả lời từ nội dung tài liệu, hãy dùng Knowledge (Bước 3). MCP chỉ hỗ trợ khám phá và metadata.

![Kiểm tra tệp Google Drive](/static/img/test-google-drive.png)

---

## Bước 5 - Runbook mẫu để kiểm tra agent

Dán nội dung sau vào trường **Runbook** (sau khi chọn tệp trong Capabilities):

```markdown
#GoogleDrive: You can look up Google Drive through google_drive_list_files and google_drive_get_file.

## Rules
- When the user asks "what files are there" or "find a document" -> use google_drive_list_files (pageSize: 10).
- When the user asks for details about a file -> use google_drive_get_file with fileId.
- When the user asks for DOCUMENT CONTENT (FAQ, policy) -> use queryKnowledge from attached Knowledge, do NOT guess from Drive metadata.
- Do not invent file names or links.

## Test prompts
- "List the Drive files I connected"
- "When was [file name] last modified?"
```

**Prompt kiểm tra gợi ý:**

| Mục tiêu | Câu hỏi |
|------|----------|
| Liệt kê tệp | *"Show me the list of Google Drive files I connected."* |
| Metadata | *"What type is [file name] and what is the view link?"* |
| Nội dung tài liệu | *"According to the FAQ document, what is the return policy?"* -> yêu cầu Knowledge đã đồng bộ |

---

## Công cụ MCP - Agent có thể làm gì?

![Các thao tác MCP Google Drive](/static/img/action-googlr-drive.png)

### Liệt kê tệp (`google_drive_list_files`)

Liệt kê các tệp và thư mục mà kết nối có thể truy cập.

| Tham số | Mô tả |
|-----------|-------------|
| `query` | Truy vấn tìm kiếm (ví dụ: `name contains "FAQ"`). Mặc định: `trashed = false` |
| `pageSize` | Số lượng kết quả (mặc định: 10) |
| `pageToken` | Token phân trang cho trang tiếp theo |

Trả về: `files` (id, name, mimeType, size, modifiedTime), `nextPageToken`.

### Lấy metadata tệp (`google_drive_get_file`)

Trả về metadata của một tệp hoặc thư mục.

| Tham số | Bắt buộc | Mô tả |
|-----------|----------|-------------|
| `fileId` | Có | File ID trên Drive |

Trả về: `id`, `name`, `mimeType`, `size`, `modifiedTime`, `webViewLink`, `iconLink`.

> **Không có công cụ MCP để đọc nội dung tệp.** Để AI đọc tệp PDF/Word, hãy dùng đồng bộ Knowledge.

---

## Lấy File ID từ Google Drive

Mở tệp trong trình duyệt. URL thường có dạng:

```text
https://drive.google.com/file/d/1ABC...xyz/view
```

Phần nằm giữa `/d/` và `/view` là **fileId**.

Trong hầu hết trường hợp, agent lấy `fileId` từ kết quả **List Files** — bạn không cần sao chép thủ công.

---

## Quy trình được khuyến nghị

### 1. Trợ lý khám phá tài liệu

Agent gọi **List Files** để tìm tệp theo tên hoặc ngữ cảnh cuộc trò chuyện -> trả `webViewLink` cho người dùng.

### 2. Đồng bộ metadata tài liệu

Agent đọc **Get File Metadata** (ngày sửa đổi gần nhất, loại tệp) -> ghi vào ticket hoặc sheet khác.

### 3. Đồng bộ nguồn Knowledge

Admin chọn tệp hoặc thư mục FAQ trên Drive -> tạo Knowledge -> đồng bộ định kỳ -> Smart Assistant trả lời qua `queryKnowledge`.

---

## Quy trình thực tế

1. Admin kết nối Google Drive (tài khoản Marketing).
2. Admin tạo Knowledge `Gym FAQ` — chọn 5 tệp PDF từ Drive -> **Sync knowledge**.
3. Admin tạo agent `Gym Sales`, gắn Knowledge và (tùy chọn) integration Drive.
4. Agent trả lời câu hỏi sản phẩm từ Knowledge; khi cần liên kết tệp nguồn, agent dùng metadata MCP.
5. Khi thêm tệp FAQ mới -> thêm tệp vào Knowledge và đồng bộ lại.

---

## Khắc phục nhanh

### Google Picker không mở

- Xác nhận kết nối Drive có trạng thái **Connected**.
- Thử **Reconnect** và chấp nhận quyền lại.
- Kiểm tra trình duyệt không chặn popup.

### Agent/Knowledge không thấy tệp

- Tệp phải được **chọn qua Picker** — không phải mọi tệp trên Drive đều tự động hiển thị.
- Chọn lại tệp trong Knowledge hoặc Capabilities của agent.

### Đồng bộ Knowledge thất bại

- Tệp có thể quá lớn hoặc định dạng không được hỗ trợ — thử PDF/DOCX/TXT.
- Quyền truy cập tệp đã mất -> **Reconnect** và chọn lại tệp.

### List files của MCP trả về rỗng

- Chưa chọn tệp trong Capabilities của agent hoặc chưa mở tệp nào qua Picker.
- Thử một `query` cụ thể, chẳng hạn `name contains "FAQ"`.

### Lỗi refresh token

- Đến [quyền tài khoản Google](https://myaccount.google.com/permissions), xóa quyền ScaleFlow rồi **Reconnect**.

### Agent trả lời sai nội dung tài liệu

- Drive MCP chỉ cung cấp metadata — bạn cần **Knowledge đã đồng bộ** và Instructions sử dụng `queryKnowledge`.

---

## Thực hành tốt nhất

- Đặt tên kết nối theo đội: `Google Drive — Support`.
- Chia Knowledge theo chủ đề (FAQ, Pricing, Policy) thay vì một nguồn knowledge quá lớn.
- Đồng bộ lại Knowledge sau khi cập nhật tệp trên Drive.
- Dùng Drive MCP để **tìm tệp / metadata**; dùng Knowledge để **đọc nội dung**.
- Chỉ chọn các tệp cần thiết — giảm rủi ro và giúp dễ kiểm tra quyền truy cập.

---

## Danh sách ảnh chụp màn hình gợi ý

| Tệp | Nội dung cần chụp |
|------|-----------------|
| `google-drive-integration-card.png` | Thẻ Google Drive + Connect |
| `google-drive-setup-permissions.png` | Màn hình thiết lập + Continue with Google |
| `google-drive-connections-list.png` | Danh sách kết nối đã kết nối |
| `google-drive-display-tab.png` | Tab Display |
| `google-drive-ai-automation-tab.png` | Tab AI and Automation |
| `google-drive-agent-picker.png` | Capabilities của agent + Select files |
| `google-drive-mcp-tools.png` | List Files / Get File Metadata |

Ảnh dùng lại: `integration-connection.png`, `connect-google-drive.png`, `knowledge-google-drive.png`.

---

## Đọc tiếp

- [Sử dụng Knowledge](../scaleflow-ai/knowledge-usage) — tạo và đồng bộ Knowledge từ Drive.
- [Tích hợp Google Sheets](./google-sheets-integration) — làm việc với spreadsheet.
- [Sử dụng AI Agent](../scaleflow-ai/ai-agent-usage) — cấu hình và kiểm tra agent.
- [Sử dụng Integration](./integration-usage) — quản lý integrations trong ScaleFlow.
