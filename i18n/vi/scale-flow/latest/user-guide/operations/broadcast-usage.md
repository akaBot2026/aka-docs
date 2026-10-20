---
id: broadcast-usage
title: Broadcasts
sidebar_label: Broadcasts
sidebar_position: 7
description: Hướng dẫn thân thiện với người mới bắt đầu để gửi một tin nhắn đến nhiều khách hàng bằng Broadcasts và Campaigns.
displayed_sidebar: scaleFlowSidebar
---

# Broadcasts

**Broadcasts** giúp bạn gửi một tin nhắn đến nhiều khách hàng cùng lúc — ví dụ khuyến mãi, thông báo khai trương hoặc nhắc thanh toán.

Bạn không cần nhắn từng người. Chọn một kênh, chọn người nhận, viết (hoặc chọn) tin nhắn, rồi gửi ngay hoặc gửi sau.

---

## Khi nào dùng Broadcasts

Dùng Broadcasts khi muốn:

- Thông báo chương trình giảm giá hoặc sản phẩm mới cho một nhóm khách hàng
- Gửi cùng một lời nhắc đến nhiều contact
- Chạy tin nhắn lặp lại (ví dụ mỗi thứ Hai) dưới dạng **Campaign**
- Xem có bao nhiêu người đã nhận, mở hoặc trả lời

**Ví dụ hằng ngày:** Một cửa hàng muốn thông báo giảm giá cuối tuần cho người theo dõi Zalo OA. Nhân viên tạo Broadcast, chọn template Zalo, chọn danh sách contact, gửi tin nhắn thử cho chính mình trước rồi publish.

---

## Trước khi bắt đầu

| Bạn cần | Vì sao |
|----------|-----|
| Ít nhất một **kênh đã kết nối** (Zalo OA, WhatsApp, Messenger hoặc kênh active khác) | Broadcasts gửi qua kênh đó |
| [Danh sách contact](../settings/workspace-tags) hoặc quy tắc audience rõ ràng | Để biết ai sẽ nhận tin |
| Với Zalo / WhatsApp / Messenger | **Template tin nhắn đã được phê duyệt** trên kênh đó (các kênh này thường không cho gửi hàng loạt văn bản tự do) |
| Quyền quản lý Broadcasts | Hỏi admin nếu thiếu menu |

Ngoài ra, hãy chuẩn bị [Contacts](./contact-management) để tên, số điện thoại và danh sách luôn cập nhật.

---

## Mở Broadcasts

1. Trong thanh bên trái, nhấp **Broadcasts**.
2. Bạn sẽ thấy hai tab:
   - **Broadcasts** — từng lượt gửi riêng lẻ
   - **Campaigns** — lịch lặp lại (mỗi lượt chạy tạo một broadcast liên quan)
![Mở Broadcasts](/static/img/open-broadcast.png)
---

## Tạo Broadcast (5 bước)

Nhấp **Create Broadcast**. ScaleFlow dẫn bạn qua năm màn hình. Dùng **Next** để tiếp tục, **Back** để quay lại và **Save as Draft** nếu muốn hoàn tất sau.

### Bước 1 — Chọn Channel

1. Chọn **Channel** sẽ gửi tin nhắn.
2. Nếu thấy cảnh báo chưa có kênh kết nối, trước tiên đến [Channels](../channels/channel-integration) và kết nối một kênh.
3. Kiểm tra các gợi ý về chất lượng hoặc quota của kênh (ví dụ chất lượng Zalo OA).

![Chọn channel Broadcasts](/static/img/select-channel-broadcasts.png)

### Bước 2 — Cấu hình Broadcast

1. Nhập **Broadcast Name** rõ ràng (ví dụ: `Flash Sale June 2026`).
2. Chọn **When to Send**:
   - **Send Now** — bắt đầu ngay sau khi publish
   - **Send Later** — chọn ngày và giờ
   - **Send Recurring Campaign** — lặp theo lịch (tạo một **Campaign**)

Với lượt gửi lặp lại, bạn có thể chọn Daily, Weekly, Monthly hoặc Custom, rồi đặt ngày bắt đầu, giờ gửi, các ngày trong tuần (nếu cần) và thời điểm dừng.

**Mẹo đơn giản:**

- Lịch dùng timezone của workspace (xem [Tenant](../organization/tenant-management)).
- Thời gian “send later” nên cách hiện tại ít nhất khoảng **15 phút**.
- ScaleFlow chốt audience tại thời điểm gửi (và bỏ qua người đã opt out khi áp dụng).

![Cấu hình Broadcast](/static/img/configure-broadcas.png)

### Bước 3 — Xác định Audience

Chọn người nhận tin nhắn:

| Chế độ | Ý nghĩa |
|------|----------------|
| **By List** | Chọn một hoặc nhiều [List](../settings/workspace-tags) contact đã tạo |
| **By Condition** | Xây dựng quy tắc như “Lifecycle stage là Customer” và “Connected channel là Zalo” (các quy tắc kết hợp bằng AND) |

Theo dõi **Estimated Reach** để biết gần đúng số người được đưa vào.

![Xác định Audience](/static/img/define-audience.png)

### Bước 4 — Tạo Content

Cách viết phụ thuộc vào kênh:

| Kênh | Cách tạo tin nhắn |
|---------|---------------------------|
| **Zalo OA** | Chọn **ZBS template**, ánh xạ trường cá nhân (tên, mã đơn, …), xem trước |
| **WhatsApp** | Chọn **template** đã được phê duyệt, ánh xạ biến, media header tùy chọn |
| **Messenger** | Chọn template **Utility** hoặc **Marketing**, sau đó ánh xạ biến |
| **Các kênh đã kết nối khác** | Thường là **Manual Message** (văn bản + ảnh tùy chọn) với cá nhân hóa như `{{firstName}}` |

Nhập `{{` hoặc dùng **Insert Variable** khi cần thông tin riêng của khách hàng.

![Tạo Content](/static/img/build-content.png)

### Bước 5 — Xem lại và kiểm tra

1. Kiểm tra bản tóm tắt: channel, thời gian, audience và content.
2. Bên dưới **Send a Test Message**, chọn **Test Contact** (không nhất thiết phải nằm trong audience).
3. Nhấp **Send Test Message** và xác nhận bạn đã nhận được tin trên kênh đó.
4. Nhấp **Create Broadcast**.

Khi tạo thành công, bạn có thể **Close** hoặc **Publish Now**.

![Xem lại và kiểm tra](/static/img/review-broadcast.png)

---

## Quản lý Broadcast hiện có

Mở broadcast từ danh sách. Bạn sẽ thấy bốn phần:

| Phần | Bạn làm gì ở đó |
|---------|-------------------|
| **Overview** | Xem kết quả: Sent, Delivered, Read, Replied, Failed; tìm người nhận; **Export CSV** |
| **Settings** | Xem hoặc sửa tên và lịch (chỉ khi còn được chỉnh sửa) |
| **Audience** | Xem lại những người được nhắm đến |
| **Content** | Xem lại tin nhắn / template |

Các thao tác phổ biến (tùy trạng thái):

- **Publish** — bắt đầu lượt gửi nháp hoặc đã lên lịch
- **Pause** / **Resume** — tạm dừng hoặc tiếp tục
- **Cancel** — dừng broadcast
- **Resend** — gửi lại (có thể chọn có bao gồm người đã nhận hay không)
- **Delete** — xóa
- **Duplicate** — sao chép từ danh sách để tạo broadcast tương tự nhanh hơn

Thông thường chỉ được chỉnh sửa khi trạng thái là **Draft** hoặc **Scheduled**. Nếu không, thiết lập ở chế độ chỉ đọc.

![Chi tiết broadcast](/static/img/detail-broadcast.png)
---

## Campaigns (broadcast lặp lại)

Nếu chọn **Send Recurring Campaign**, ScaleFlow tạo một **Campaign**.

Trong tab **Campaigns**, bạn có thể:

- Xem thời gian chạy tiếp theo và gần nhất
- Mở campaign để xem **Campaign Overview** (biểu đồ hiệu suất qua các lượt chạy)
- Mở **Campaign Runs** để xem từng lượt gửi

Publish, cancel hoặc delete từ chi tiết campaign khi cần.

![Chi tiết broadcast](/static/img/campaings.png)

---

## Trạng thái theo ngôn ngữ đơn giản

| Trạng thái | Ý nghĩa |
|---------|---------|
| **Draft** | Đã lưu nhưng chưa publish |
| **Scheduled** | Đang chờ thời gian gửi |
| **Sending** | Đang gửi |
| **Paused** | Tạm dừng |
| **Sent** | Đã gửi xong |
| **Failed** | Có lỗi — xem chi tiết hoặc thử lại |
| **Stopped** / **Cancelled** | Đã dừng thủ công |

Dòng người nhận cũng có thể hiển thị Delivered, Read, Replied, Pending hoặc Skipped.

---

## Mẹo để có kết quả tốt hơn

1. Luôn **gửi thử** trước khi publish cho nhiều người.
2. Giữ danh sách sạch trong [Contacts](./contact-management) để đúng người nhận tin.
3. Với Zalo / WhatsApp / Messenger, chuẩn bị template sớm — việc phê duyệt có thể mất thời gian bên ngoài ScaleFlow.
4. Lần đầu dùng Broadcasts, hãy bắt đầu với danh sách nhỏ.
5. Sau khi gửi, xem [Analytics](./analytics-usage) (tab Broadcast) cùng các chỉ số Overview.

---

## Hướng dẫn liên quan

- [Tích hợp kênh](../channels/channel-integration)
- [Quản lý Contact](./contact-management)
- [Thẻ và danh sách workspace](../settings/workspace-tags)
- [Analytics](./analytics-usage)
- [Inbox](./inbox-usage) — khách hàng có thể trả lời; phản hồi xuất hiện trong Inbox
- Hướng dẫn template theo kênh đã được gỡ bỏ. Hãy chuẩn bị template bắt buộc trực tiếp trên nhà cung cấp kênh trước khi gửi broadcast.
