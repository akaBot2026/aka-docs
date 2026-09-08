---
id: flow-usage
title: Flow
sidebar_label: Flows
sidebar_position: 4
description: Hướng dẫn từng bước để tạo, kiểm tra, publish và deploy Flows trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng Flow

**Flows** cho phép bạn thiết kế trực quan các **kịch bản tương tác với khách hàng** bằng cách kéo thả các step trên canvas — không cần code.

Ví dụ về Flow đơn giản:

1. Khách hàng gửi tin nhắn đầu tiên → hệ thống gửi tin nhắn chào mừng.
2. AI trả lời các câu hỏi thường gặp.
3. Chờ khách hàng trả lời → kết thúc cuộc trò chuyện hoặc bàn giao cho nhân viên.

Dùng Flows khi cần một **quy trình rõ ràng, từng bước** thay vì chỉ bật trả lời AI chung.

---

## Flows khác AI Agent và AI Assistant như thế nào

Ba thành phần này phối hợp nhưng có vai trò khác nhau:

| | **Flows** | **AI Agent** | **AI Assistant** |
|---|-----------|--------------|------------------|
| **Là gì** | Kịch bản tự động hóa (khi chạy + chuyện gì xảy ra tiếp theo) | Worker AI được huấn luyện để trả lời theo cách xác định | Tính năng Inbox giúp nhân viên trả lời nhanh |
| **Phù hợp nhất với** | Chào khách, chờ trả lời, phân nhánh theo tình huống | AI hiểu sản phẩm, chính sách và integration bên ngoài | Nhân viên cần gợi ý hoặc trả lời tự động trong Inbox |
| **Kết nối thế nào** | Flow có thể gọi AI Agent đã tạo | Được chọn trong step **AI Agent** của Flow | Bổ trợ Flows; nhân viên vẫn có thể can thiệp thủ công khi cần |

**Ví dụ đơn giản:** Bạn tạo AI Agent tên `Product Advisor`. Flow `Zalo Welcome` sẽ: nhận tin nhắn mới → gửi lời chào → gọi Agent để trả lời → chờ khách nhắn lại.

---

## Trước khi bắt đầu

Bạn nên có:

- Quyền mở **Flows** trong menu bên trái (nếu không thấy, hỏi administrator).
- Ít nhất **một kênh chat** đã kết nối (Zalo, Messenger, WhatsApp và các kênh khác) — xem [Tích hợp kênh](../channels/channel-integration).
- (Khuyến nghị) [AI Agent](../scaleflow-ai/ai-agent-usage) và [Knowledge](../scaleflow-ai/knowledge-usage) nếu Flow dùng AI hoặc truy vấn tài liệu.

Dự kiến khoảng **15–30 phút** cho Flow đầu tiên.

---

## Mở màn hình Flows

1. Trong menu bên trái, chọn **Flows**.
2. Bên trong có hai phần:
   - **Flows** — danh sách scenario đang thiết kế.
   - **Runs** — các phiên bản **đã deploy trực tiếp** cho khách hàng thật.

![Menu Flows](/static/img/open-flows.png)

**Tham khảo nhanh:**

- **Flows** = bản nháp trên giấy.
- **Runs** = bản nháp đã dán lên tường và đang chạy với khách hàng thật.

---

## Bước 1 — Tạo Flow mới

1. Trên trang **Flows**, nhấp **Create a Flow...**
2. Điền:
   - **Title** (bắt buộc) — ví dụ: `Welcome and FAQ`
   - **Subtitle** (tùy chọn) — mô tả ngắn để đồng đội hiểu Flow làm gì
3. Chọn **Flow Mode**:
   - **Conversational** — dùng khi Flow có tin nhắn, chat hoặc Inbox. **Hầu hết đội nên chọn tùy chọn này.**
   - **Worker** — dành cho tác vụ nền ít tương tác chat trực tiếp hơn (nâng cao hơn).
4. Nhấp **Create Flow**.

Bạn vào **Flow editor** với phiên bản đầu tiên có nhãn **v1 Draft**.

![Hộp thoại Create Flow](/static/img/dialog-create-flows.png)

---

## Bước 2 — Thiết kế scenario

### Hai chế độ xem trên thanh công cụ

| Chế độ xem | Khi nào dùng |
|------|----------------|
| **Flow** | Sửa các step theo thứ tự — chế độ đơn giản nhất |
| **Graph** | Xem sơ đồ tổng thể — hữu ích khi Flow có nhiều nhánh |

### Đặt “Khi nào Flow này chạy?”

Ở đầu Flow, bên dưới **When this happens**:

1. Chọn một **event** — phổ biến nhất: **Message Received** (tin nhắn mới đến).
   - Nhóm khác: Conversation, Ticket, Contact — dùng cho quy trình nội bộ.
2. (Tùy chọn) Chọn **channel** — chỉ chạy trên Zalo, Messenger, v.v.
3. (Tùy chọn) Thêm **conditions** — ví dụ chỉ chạy khi người gửi là khách hàng.

![Cấu hình trigger Flow](/static/img/flows-trigger.png)

### Thêm step (kéo từ palette)

**Action step — thường dùng nhất**

| Step trên màn hình | Tác dụng |
|----------------|--------------|
| **Send Text Message** | Gửi tin nhắn văn bản cho khách hàng |
| **AI Agent** | Cho AI Agent dựng sẵn trả lời hoặc xử lý yêu cầu |
| **Query Knowledge** | Tìm kiếm kho tài liệu (FAQ, chính sách và nhiều nội dung khác) |
| **Wait for Reply** | Tạm dừng và chờ khách hàng (hoặc nhân viên) trả lời |

**Control step — cho Flow phức tạp hơn**

| Step trên màn hình | Tác dụng |
|----------------|--------------|
| **If** | Nếu… thì làm A, nếu không thì làm B |
| **Loop** | Lặp lại một nhóm step |
| **Wait** | Tạm dừng trong một khoảng thời gian (ví dụ 10 giây) |
| **End** | Kết thúc Flow |
| **Comment** | Ghi chú cho đồng đội — **không gửi cho khách hàng** |

> Các step nâng cao như **HTTP Request** và **Sub Workflow** dành cho đội cần integration với hệ thống bên ngoài. Ban đầu bạn có thể bỏ qua.

![Flow editor](/static/img/flows-editor.png)

### Xác thực trước khi lưu

Nếu thiếu thông tin (chưa chọn Agent, nội dung tin nhắn trống, điều kiện If chưa đầy đủ, v.v.), màn hình **hiển thị lỗi** trên step liên quan. Mở step đó và điền các trường bắt buộc trước khi kiểm tra hoặc publish.

---

## Bước 3 — Lưu và publish

Flows dùng **versioning** giống các bản phát hành phần mềm:

| Trạng thái | Ý nghĩa |
|---------|---------|
| **Draft** | Đang chỉnh sửa; **chưa dùng với khách hàng thật** |
| **Published** | Snapshot bị khóa, sẵn sàng deploy |

**Cách publish:**

1. Hoàn tất draft (thay đổi thường được lưu tự động).
2. Mở menu → chọn **Publish...**
3. (Tùy chọn) Thêm **Version Message** — ví dụ: `v1 — welcome + FAQ`
4. Nhấp **Publish**.

Để lặp lại: tạo **draft mới** từ version đã publish, chỉnh sửa rồi Publish thành v2, v3, v.v.

![Publish Flow](/static/img/flows-publish.png)

---

## Bước 4 — Kiểm tra Flow trước khi chạy thật

**Luôn kiểm tra trước** — tránh gửi tin nhắn sai cho khách hàng.

1. Trên thanh công cụ, chuyển sang chế độ **Test**.
2. Hệ thống xác thực Flow; nếu đạt, panel kiểm tra mở ở bên phải.
3. Trong panel:
   - **Chat** — gửi tin nhắn kiểm tra (cho trigger dựa trên tin nhắn).
   - **Ticket** — kiểm tra các event liên quan đến ticket.
   - **Step list** — xem step nào đã chạy và thành công hay thất bại.

4. Nếu kết quả chưa đúng, quay lại, sửa draft và kiểm tra lại.

![Panel kiểm tra Flow](/static/img/flows-test-panel.png)

> **Mẹo:** Nếu Flow dừng ở **Wait for Reply** và muốn bắt đầu lại, nhấp **Stop test**, sau đó gửi tin nhắn kiểm tra mới.

---

## Bước 5 — Deploy Run trực tiếp

**Run** là version Flow **đã publish** đang chạy với khách hàng thật.

1. Đến **Flows → Runs** hoặc từ editor chọn **Deploy a Run...**
2. Chọn **Flow** và **published version**.
3. Xem lại bản tóm tắt.
4. Nhập **Run title** (ví dụ: `Zalo Welcome — June`).
5. Nhấp **Deploy**.

Sau khi deploy, các thao tác chính:

| Nút | Khi nào dùng |
|--------|----------------|
| **Start** | Bắt đầu — Flow phản hồi khi event khớp xảy ra |
| **Pause Intake** | Dừng nhận trigger mới; run đang xử lý có thể hoàn tất |
| **Upgrade / Downgrade** | Chuyển sang version publish mới hơn (hoặc cũ hơn) |
| **Delete** | Xóa Run — Flow không còn chạy cho khách hàng |

![Deploy Run](/static/img/flows-deploy-run.png)
![Deploy Run 1](/static/img/flows-deploy-run-1.png)
![Deploy Run 2](/static/img/flows-deploy-run-2.png)

---

## Bước 6 — Theo dõi sau khi deploy

Mở một Run trong **Runs** để xem:

- **Status** — Running, Stopped, Starting, v.v.
- **History** — mỗi lần Flow được trigger
- **Success rate**, thời gian xử lý, số lần thất bại
- **Force Stop** — dừng mọi execution Flow đang chạy (bao gồm execution đang chờ trả lời)

Nhấp một execution cụ thể để kiểm tra chi tiết từng step.

![Chi tiết Run](/static/img/flows-run-detail.png)

---

## Flow mẫu để tham khảo

### 1. Welcome + FAQ

1. **Trigger:** Message Received (tất cả kênh hoặc chỉ Zalo).
2. **Send Text Message:** `Hello! How can I help you today?`
3. **AI Agent:** chọn FAQ Agent (version publish mới nhất).
4. **Wait for Reply** (nếu cần cuộc trò chuyện tiếp tục).
5. **End** — hoàn tất.

### 2. Complaint → thu thập thông tin

1. **Trigger:** Message Received + điều kiện tin nhắn chứa “complaint” hoặc “refund”.
2. **AI Agent:** hỏi chi tiết đơn hàng và lý do.
3. **Send Text Message:** xác nhận đã ghi nhận yêu cầu và nhân viên sẽ theo dõi.
4. (Tùy chọn) Agent có thể tạo Ticket nếu đã cấu hình.

### 3. Chỉ tra cứu tài liệu

1. **Trigger:** Message Received.
2. **Query Knowledge:** chọn knowledge base FAQ sản phẩm.
3. **AI Agent** hoặc **Send Text Message:** trả lời dựa trên kết quả truy vấn.

---

## Ví dụ đầu-cuối

Giả sử một cửa hàng điện tử dùng Zalo OA:

1. Admin [kết nối Zalo OA](../channels/zalo/connecting-your-zalo-oa-account).
2. Tạo [Knowledge](../scaleflow-ai/knowledge-usage) từ tệp FAQ sản phẩm.
3. Tạo [AI Agent](../scaleflow-ai/ai-agent-usage) tên `Product Advisor` với Knowledge đó.
4. Tạo Flow `Zalo Welcome` — trigger khi tin nhắn đến trên Zalo.
5. **Test** trong editor → **Publish** v1 → **Deploy Run** → **Start**.
6. Khách nhắn trên Zalo → nhận lời chào + phản hồi AI → nhân viên thấy trong [Inbox](./inbox-usage).

---

## Khắc phục sự cố

### Flow không chạy với khách hàng thật

- Bạn đã nhấp **Start** trên Run chưa? Trạng thái phải là **Running**, không phải **Stopped**.
- Bạn đã **Publish** và **Deploy** chưa? Chỉ sửa draft **không** thay đổi nội dung khách hàng thấy.
- Channel trigger có khớp không? (ví dụ Flow chỉ Zalo nhưng khách nhắn Messenger).
- Thử lại bằng chế độ **Test** trong editor.

### Test hoạt động nhưng khách hàng thật không thấy

- Sau khi publish version mới, **Upgrade** Run lên version đó (hoặc deploy Run mới).
- Xác nhận Run vẫn ở trạng thái **Started**.

### Không thể publish hoặc test

- Mở từng step có cảnh báo và điền trường bắt buộc: chọn Agent, viết nội dung, chọn Knowledge, đặt thời gian chờ, v.v.

### Flow bị kẹt chờ trả lời

- Trong **Test:** gửi trả lời trong chat kiểm tra hoặc **Stop test** rồi thử lại.
- Với khách hàng thật: khách cần gửi tin nhắn khác; xác minh kênh chat vẫn kết nối.

### Không thể xóa Flow

- Trước tiên hãy dừng hoặc xóa tất cả **Runs** gắn với Flow đó.

---

## Thực hành tốt nhất

- **Bắt đầu nhỏ:** một tin nhắn chào + một AI Agent là đủ cho version đầu.
- **Luôn kiểm tra** trước khi deploy.
- Dùng tên Flow và ghi chú version rõ ràng — đồng đội sẽ cảm ơn bạn.
- Với chat khách hàng → chọn **Conversational**.
- Cập nhật Flow bằng cách publish version mới rồi **Upgrade** Run — đừng chỉ sửa draft mà quên deploy.

---

## Checklist ảnh chụp màn hình (cho đội nội dung)

| Tên tệp | Nội dung cần chụp |
|-----------|-----------------|
| `open-flows.png` | Menu Flows + phần Flows / Runs |
| `dialog-create-flows.png` | Hộp thoại Create New Flow |
| `flows-trigger.png` | Trigger Message Received + channel |
| `flows-editor.png` | Editor với nhiều step |
| `flows-publish.png` | Hộp thoại Publish |
| `flows-test-panel.png` | Chế độ Test với chat và step list |
| `flows-deploy-run.png` | Hộp thoại Deploy a Run |
| `flows-deploy-run-1.png` | Deploy Run — bước bổ sung |
| `flows-deploy-run-2.png` | Deploy Run — xác nhận |
| `flows-run-detail.png` | Trang chi tiết Run khi đang chạy |

---

## Đọc tiếp

- [Sử dụng AI Agent](../scaleflow-ai/ai-agent-usage) — xây dựng worker AI dùng trong step **AI Agent**
- [Sử dụng Knowledge](../scaleflow-ai/knowledge-usage) — thêm FAQ và tài liệu cho **Query Knowledge**
- [Tích hợp kênh](../channels/channel-integration) — Zalo, Messenger, WhatsApp và nhiều kênh khác
- [Sử dụng Inbox](./inbox-usage) — xem cuộc trò chuyện trong khi Flows chạy
- [AI Assistant](../scaleflow-ai/ai-assistant) — hỗ trợ AI cho nhân viên trong Inbox
