---
id: connecting-your-hubspot-account
title: HubSpot
sidebar_label: HubSpot
sidebar_position: 7
description: "Hướng dẫn từng bước để kết nối HubSpot với ScaleFlow và đồng bộ contact, ticket, dành cho người dùng không chuyên kỹ thuật."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối HubSpot với ScaleFlow

Hướng dẫn này chỉ cho bạn cách kết nối tài khoản **HubSpot** với **ScaleFlow** để có thể:

- Đồng bộ **contact** và **ticket** từ HubSpot vào ScaleFlow.
- Xem đầy đủ ngữ cảnh khách hàng khi trả lời trên các kênh (LINE, WhatsApp, Facebook và nhiều kênh khác).
- Dùng AI và quy trình tự động hóa dựa trên dữ liệu CRM.

Bạn **không cần** sao chép API key hoặc cấu hình cài đặt kỹ thuật phức tạp. Chỉ cần đăng nhập HubSpot và cấp quyền truy cập.

---

## HubSpot và ScaleFlow phối hợp như thế nào

- **HubSpot**: nơi lưu thông tin khách hàng, giai đoạn pipeline, ticket hỗ trợ và lịch sử tương tác CRM.
- **ScaleFlow**: nơi tập hợp cuộc trò chuyện từ nhiều kênh, trả lời khách hàng và phối hợp với đội hỗ trợ hoặc AI Assistant.

Sau khi kết nối:

- Contact và ticket từ HubSpot có thể được đồng bộ vào ScaleFlow.
- Agent có thể xem ngữ cảnh khách hàng phong phú hơn khi trả lời.
- Bạn có thể xây dựng quy trình AI Agent dựa trên dữ liệu HubSpot (ví dụ: chào lead mới, gửi nhắc lịch họp, tiếp cận lại khách hàng cũ).


---

## Trước khi bắt đầu

Hãy chuẩn bị:

- Tài khoản **HubSpot** đang hoạt động, có quyền cấp quyền cho ứng dụng bên thứ ba (thường là admin hoặc super admin).
- Tài khoản **ScaleFlow** có quyền quản lý integration:
  - Bạn thấy menu **Integrations** ở thanh bên trái.
  - Bạn có thể nhấp **Add connection** trên trang HubSpot.
- Khoảng **5-10 phút** cho lần thiết lập đầu tiên.

> **Lưu ý:** Kết nối HubSpot dùng đăng nhập OAuth an toàn. Bạn sẽ được chuyển đến HubSpot để cấp quyền rồi quay lại ScaleFlow. Không cần thiết lập API key.

---

## Tổng quan các bước

| Bước | Nơi thực hiện | Việc cần làm |
|------|-----------|--------------|
| 1 | ScaleFlow | Mở trang HubSpot và nhấp **Add connection** |
| 2 | ScaleFlow | Chọn môi trường **Production** hoặc **Sandbox** |
| 3 | HubSpot | Đăng nhập và **authorize** quyền truy cập ScaleFlow |
| 4 | ScaleFlow | Xác minh kết nối ở trạng thái **active** |
| 5 | ScaleFlow | (Tùy chọn) Cấu hình đồng bộ dữ liệu và ánh xạ trường |
| 6 | ScaleFlow | (Tùy chọn) Thiết lập AI Agent với dữ liệu HubSpot |

---

## Bước 1: Mở HubSpot trong ScaleFlow

1. Đăng nhập **ScaleFlow**.
2. Trong menu bên trái, chọn **Integrations**.
3. Trong danh sách provider, tìm **HubSpot** (biểu tượng HubSpot màu cam).
4. Nhấp **HubSpot** để mở trang quản lý kết nối.
5. Nhấp **Add connection**.


![Mở Hubspot](/static/img/open-hubspot.png)

---

## Bước 2: Chọn môi trường kết nối

Trang thiết lập giải thích các quyền ScaleFlow cần:

- Đọc thông tin tài khoản HubSpot (email, domain).
- Xem, tạo và chỉnh sửa dữ liệu contact.
- Đồng bộ dữ liệu contact giữa HubSpot và ScaleFlow.

Chọn **một trong hai môi trường**:

| Tùy chọn | Khi nào dùng |
|----------|--------------|
| **HubSpot Production** | Dữ liệu khách hàng và doanh nghiệp thật. *(Khuyến nghị cho hoạt động hằng ngày)* |
| **HubSpot Sandbox** | Môi trường kiểm thử. Dữ liệu thử vẫn có thể đồng bộ vào ScaleFlow, nên chỉ dùng để thử nghiệm. |

> **Quan trọng:** Nếu công ty dùng cả Production và Sandbox, hãy tạo **hai kết nối riêng** với tên rõ ràng (ví dụ: `HubSpot Production`, `HubSpot Sandbox`).
 
![Mở Hubspot](/static/img/open-hubspot.png)


Sau khi chọn môi trường, nhấp **Continue on HubSpot**.

---

## Bước 3: Đăng nhập HubSpot và cấp quyền

1. Trình duyệt mở popup **HubSpot**.
2. Nếu cần, đăng nhập bằng email và mật khẩu HubSpot.
3. HubSpot hiển thị các quyền ScaleFlow yêu cầu. Xem lại rồi nhấp **Connect** / **Authorize**.
4. Sau khi thành công, popup đóng và bạn quay lại ScaleFlow.

![Chọn Hubspot](/static/img/choose-account-hubspot.png)
### Nếu popup bị chặn

- Trình duyệt có thể chặn cửa sổ mới. Nhấp biểu tượng popup bị chặn trên thanh địa chỉ và chọn **Always allow**.
- Nhấp lại **Continue on HubSpot**.

### Nếu bạn không có quyền cấp quyền

Liên hệ admin HubSpot để có quyền cài đặt/cấp quyền ứng dụng hoặc nhờ admin hoàn tất bước cấp quyền giúp bạn.

---

## Bước 4: Xác nhận kết nối thành công

Quay lại **Integrations -> HubSpot** trong ScaleFlow.

Kết nối thành công khi bạn thấy:

- Một dòng kết nối mới trong danh sách (ví dụ: `HubSpot Production`).
- Trạng thái **Connected** (active/connected).
- HubSpot Company ID hiển thị bên dưới tên kết nối.

![Kết nối Hubspot thành công](/static/img/connect-hubspot-success.png)

### Các thao tác trên thẻ kết nối

| Thao tác | Khi nào dùng |
|-----|--------------|
| **Test** | Xác minh ScaleFlow vẫn có thể giao tiếp với HubSpot. |
| **Reconnect** | Cần dùng khi phải cấp quyền lại hoặc quyền truy cập đã hết hạn. |
| **Disconnect** | Tạm dừng đồng bộ nhưng giữ cấu hình. |
| **Delete** | Xóa vĩnh viễn kết nối (không thể hoàn tác). |

Nhấp biểu tượng mũi tên hoặc **Manage connection** để mở trang chi tiết.

---

## Bước 5: Quản lý kết nối - 3 tab chính

Trang chi tiết kết nối HubSpot có **3 tab**:

1. **Display**
2. **AI and Automation**
3. **Data sync**

---

### Tab Display

Tại đây bạn có thể:

- **Đổi tên kết nối** (ví dụ từ `HubSpot Production` thành `HubSpot - Sales Team`) để dễ nhận biết.
- Xem thông tin HubSpot chỉ đọc:
  - Tên công ty đã đồng bộ
  - Company ID
  - Môi trường (Production hoặc Sandbox)

> **Lưu ý:** Metadata công ty lấy từ HubSpot. Khi HubSpot cập nhật, ScaleFlow tự động phản ánh các cập nhật đó. Không cần chỉnh sửa metadata thủ công.

![Hiển thị Hubspot](/static/img/display-hubspot.png)

---

### Tab Data sync

Đây là nơi theo dõi và kiểm soát đồng bộ.

#### Tổng quan đồng bộ

Bạn sẽ thấy:

- **Total synced contacts**
- **Total synced tickets**
- **Last sync time**

Cần dữ liệu mới nhất từ HubSpot ngay lập tức? Nhấp **Sync now**.

> **Lưu ý:** **Sync now** chỉ có khi trạng thái kết nối là **active**.

![Đồng bộ dữ liệu Hubspot](/static/img/data-sync-hubspot.png)

#### Cấu hình cách đồng bộ

Theo mặc định, ScaleFlow đồng bộ bằng cài đặt tiêu chuẩn. Bạn có thể tinh chỉnh:

| Phần | Ý nghĩa |
|-----|---------|
| **Customer data sync** | Chọn trường khách hàng nào (tên, email, điện thoại, v.v.) được đồng bộ từ HubSpot sang ScaleFlow. |
| **Ticket field mapping** | Xác định cách trường ticket HubSpot (trạng thái, mức ưu tiên, trường tùy chỉnh) xuất hiện trong ScaleFlow. |

Nhấp **Configure** trên từng phần để mở hộp thoại ánh xạ. Thay đổi chỉ áp dụng cho dữ liệu **mới hoặc được cập nhật** sau khi lưu.

#### Hoạt động đồng bộ gần đây

Bạn có thể xem các lượt đồng bộ gần đây, gồm thời gian bắt đầu, thời gian kết thúc, số bản ghi và trạng thái (success/running/error).

Nếu danh sách trống, nhấp **Sync now** một lần để bắt đầu.


---

### Tab AI and Automation

Khi HubSpot đã kết nối, bạn có thể dùng dữ liệu CRM cho quy trình AI:

- **Get started** - tạo AI Agent mới gắn với kết nối HubSpot này.
- **Suggested flows** - các ý tưởng tích hợp sẵn như:
  - Theo dõi phân loại lead
  - Nhắc lịch họp
  - Cập nhật giai đoạn vòng đời khách hàng
  - Campaign tiếp cận lại
  - Theo dõi sau demo
  - Trợ lý chuyển giao khách hàng

![Tự động hóa AI Hubspot](/static/img/ai-automation-hubspot.png)

Về chi tiết thiết lập AI Agent, xem [AI Agent](../scaleflow-ai/ai-agent-usage) và [AI Assistant](../scaleflow-ai/ai-assistant).

---

## Bước 6: Dùng HubSpot trong hoạt động hằng ngày

Quy trình gợi ý sau khi kết nối ổn định:

1. Khách hàng gửi tin nhắn qua LINE, WhatsApp, Facebook hoặc kênh khác -> tin nhắn xuất hiện trong [Inbox](../operations/inbox-usage).
2. ScaleFlow khớp hoặc đồng bộ dữ liệu contact từ HubSpot -> bạn có thể xem email, giai đoạn CRM và lịch sử liên quan.
3. Nhân viên trả lời khách hàng; nếu cần theo dõi tiếp, tạo [Ticket](../operations/ticket-usage).
4. Dữ liệu contact cập nhật trong HubSpot được đồng bộ về ScaleFlow theo lịch hoặc khi bạn nhấp **Sync now**.

---

## Câu hỏi thường gặp

### Tôi không thấy menu Integrations hoặc nút Add connection

Tài khoản ScaleFlow có thể không có quyền quản lý integration. Hãy liên hệ administrator của công ty.

### Nên chọn Production hay Sandbox?

- **Production** - cho khách hàng và dữ liệu doanh nghiệp thật.
- **Sandbox** - chỉ để kiểm thử, tránh đồng bộ dữ liệu thử vào môi trường làm việc.

### Trạng thái báo Reauthorization required

Quyền truy cập HubSpot có thể đã hết hạn hoặc bị thu hồi. Mở kết nối HubSpot -> nhấp **Reconnect** -> đăng nhập HubSpot và cấp quyền lại.

### Tôi đã nhấp Sync now nhưng không thấy contact/ticket

Thử checklist sau:

1. Xác nhận trạng thái kết nối là **active**.
2. Nhấp **Test** trên thẻ kết nối.
3. Mở tab **Data sync** và kiểm tra hoạt động gần đây có lỗi không.
4. Đảm bảo tài khoản HubSpot đã chọn thực sự có dữ liệu (ít nhất vài contact hoặc ticket).
5. Nếu vẫn chưa giải quyết được, liên hệ administrator ScaleFlow.

### Có thể kết nối nhiều tài khoản HubSpot không?

Có. Mỗi lần nhấp **Add connection** tạo một kết nối riêng (ví dụ một Production và một Sandbox hoặc hai portal HubSpot khác nhau).

### Tôi muốn tạm dừng đồng bộ

Nhấp **Disconnect** trên thẻ kết nối. Để xóa vĩnh viễn, dùng **Delete** (không thể hoàn tác).

### Thông tin công ty trong ScaleFlow khác HubSpot

HubSpot là nguồn dữ liệu chuẩn cho metadata công ty. Xác minh giá trị trong HubSpot; ScaleFlow sẽ cập nhật ở lần đồng bộ tiếp theo.

---

## Bước tiếp theo được khuyến nghị

Sau khi HubSpot đã kết nối và ổn định:

1. Chạy **Sync now** lần đầu để tải contact và ticket hiện có.
2. (Tùy chọn) Cấu hình **field mapping** nếu đội ngũ cần thêm trường HubSpot tùy chỉnh.
3. Thêm nội dung FAQ/chính sách vào [Knowledge](../scaleflow-ai/knowledge-usage) để cải thiện chất lượng phản hồi AI.
4. Tạo [AI Agent](../scaleflow-ai/ai-agent-usage) bằng một trong các flow gợi ý trong **AI and Automation**.
5. Kết hợp với các kênh nhắn tin như [LINE](../channels/line/connecting-your-line-business-account) hoặc [WhatsApp](../channels/whatsapp/connecting-your-whatsapp-business-api-account) để tập trung cuộc trò chuyện.

---

## Tài liệu tham khảo

- [HubSpot — Trang đăng nhập](https://app.hubspot.com/login)
- [Tổng quan Integration ScaleFlow](./integration-usage)

Trong ScaleFlow, trang quản lý HubSpot cũng có liên kết **View guide** trỏ đến tài liệu này.
