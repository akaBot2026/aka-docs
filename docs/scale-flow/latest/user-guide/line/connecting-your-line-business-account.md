---
id: connecting-your-line-business-account
title: "Kết nối tài khoản LINE Business"
sidebar_label: "Kết nối LINE Business"
sidebar_position: 1
description: "Hướng dẫn từng bước kết nối LINE Official Account với ScaleFlow để nhận và trả lời tin nhắn khách hàng."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối tài khoản LINE Business

Làm theo từng bước bên dưới để kết nối tài khoản LINE doanh nghiệp với ScaleFlow.

Sau khi kết nối xong, tin nhắn khách gửi đến tài khoản LINE của doanh nghiệp sẽ hiện trong [Hộp thư đến (Inbox)](./inbox-usage). Từ đó, nhân viên hoặc [Trợ lý AI](./ai-assistant) có thể trả lời khách ở một chỗ.

---

## LINE Business là gì?

**LINE Official Account** (hay **tài khoản chính thức LINE**) là tài khoản LINE dành cho doanh nghiệp — giống như fanpage Facebook nhưng trên LINE. Khách hàng có thể nhắn tin, hỏi giá, đặt hàng hoặc nhận thông báo qua tài khoản này.

**ScaleFlow** kết nối với LINE thông qua **Messaging API** — tính năng cho phép nhận và gửi tin nhắn từ tài khoản chính thức. Bạn sẽ lấy hai mã từ trang quản lý LINE (**Channel secret** và **Channel access token**), rồi dán vào ScaleFlow.

---

## Trước khi bắt đầu

Hãy chuẩn bị sẵn:

- Một **tài khoản LINE** dùng để quản lý doanh nghiệp (thường là tài khoản của chủ shop, marketing hoặc CSKH).
- Quyền **quản lý kênh (Channels)** trong ScaleFlow. Nếu không thấy nút **Kết nối**, hãy nhờ quản trị viên cấp quyền.
- Khoảng **15–30 phút** cho lần kết nối đầu tiên (tạo tài khoản LINE OA nếu chưa có, bật Messaging API, copy mã).

> **Lưu ý:** Hai mã bạn sẽ copy (**Channel secret** và **Channel access token**) giống như mật khẩu. Không gửi cho người lạ hoặc đăng công khai. Chỉ dán vào ScaleFlow khi đang kết nối.

---

## Tổng quan các bước

| Bước | Làm ở đâu | Việc cần làm |
|------|-----------|--------------|
| 1 | ScaleFlow | Mở trang LINE Business và bấm **Kết nối** |
| 2 | LINE | Tạo hoặc chọn Official Account |
| 3 | LINE | Bật Messaging API, copy **Channel secret** |
| 4 | LINE | Bật Webhook, tắt tin trả lời tự động |
| 5 | LINE | Copy **Channel access token** (dùng lâu dài) |
| 6 | ScaleFlow | Dán hai mã, **Xác minh**, rồi **Tạo kết nối** |
| 7 | ScaleFlow | Chọn có đồng bộ danh bạ hay không |
| 8 | ScaleFlow + LINE app | Gửi tin thử và kiểm tra Inbox |

---

## Bước 1: Mở trang LINE trong ScaleFlow

1. Đăng nhập ScaleFlow.
2. Ở menu chính bên trái, chọn **Channels** (Kênh).
3. Trong danh sách kênh, chọn **LINE Business**.
4. Bấm nút **Kết nối** (góc phải phần thiết lập kênh).

ScaleFlow sẽ mở trang hướng dẫn chi tiết **Kết nối LINE Business**.

![Mở Channels và chọn LINE Business](/static/img/connect-channel-1.png)

![Trang thiết lập LINE Business với nút Kết nối](/static/img/connect-channel-2.png)

---

## Bước 2: Tạo hoặc chọn LINE Official Account

Việc này làm trên trang của LINE, không phải trong ScaleFlow.

1. Mở trình duyệt, vào [LINE Official Account Manager](https://manager.line.biz/) (trang quản lý tài khoản chính thức LINE).
2. Đăng nhập bằng tài khoản LINE của bạn.
3. Nếu **chưa có** tài khoản doanh nghiệp:
   - Bấm tạo Official Account mới.
   - Điền tên doanh nghiệp, loại hình, thông tin liên hệ theo hướng dẫn trên màn hình.
   - Chờ LINE duyệt nếu được yêu cầu.
4. Nếu **đã có** tài khoản: chọn đúng Official Account mà khách hàng sẽ nhắn tin.

> **Quan trọng:** Hãy chọn đúng tài khoản LINE của doanh nghiệp bạn. Nếu công ty có nhiều tài khoản LINE, hỏi team marketing hoặc CSKH xem tài khoản nào đang dùng để chăm sóc khách.

![Danh sách Official Account trên LINE Official Account Manager](/static/img/list-account-line.png)

---

## Bước 3: Bật Messaging API và lấy Channel secret

Vẫn trên **LINE Official Account Manager**:

1. Mở Official Account bạn đã chọn ở bước 2.
2. Vào **Settings** (Cài đặt) → **Messaging API**.
3. Bấm **Enable Messaging API** (Bật Messaging API).
4. LINE sẽ hỏi chọn **Provider** (nhóm dự án trên LINE Developers):
   - Chọn Provider có sẵn, **hoặc**
   - Tạo Provider mới và đặt tên dễ nhớ (ví dụ tên công ty).
5. **Ghi nhớ tên Provider** — bạn sẽ cần ở bước 5.
6. Sau khi bật xong, trên cùng trang sẽ có mục **Channel secret**. Bấm **Copy** để sao chép.

Quay lại ScaleFlow (trang hướng dẫn kết nối), tìm **Bước 2** và dán **Channel secret** vào ô tương ứng.

![Bật Messaging API trên LINE Official Account Manager](/static/img/copy-channel-secret.png)

![Dán Channel secret vào ScaleFlow — Bước 2](/static/img/paste-channel-secret.png)

---

## Bước 4: Cài đặt phản hồi (Response settings)

Để tin nhắn khách đi vào ScaleFlow thay vì bị LINE trả lời tự động:

1. Trên **LINE Official Account Manager**, vào **Settings** → **Response settings** (Cài đặt phản hồi).
2. Bật **Webhooks** (Cho phép webhook).
3. Trên cùng trang, **tắt Auto-response messages** (Tin trả lời tự động).

> **Lưu ý:** Bật Webhook để LINE chuyển tin nhắn sang ScaleFlow. Tắt trả lời tự động để khách không nhận hai câu trả lời cùng lúc (một từ LINE, một từ bạn).

![Bật Webhook và tắt Auto-response](/static/img/response-setting.png)

> **Lưu ý:** ScaleFlow **tự đăng ký địa chỉ webhook** khi bạn tạo kết nối.

---

## Bước 5: Lấy Channel access token

Bước này làm trên **LINE Developers Console**.

1. Mở [LINE Developers Console](https://developers.line.biz/console/).
2. Đăng nhập cùng tài khoản LINE.
3. Ở menu bên trái, chọn **Provider** mà bạn đã dùng ở bước 3.
4. Chọn **channel** (kênh) gắn với Official Account của bạn.
5. Mở tab **Messaging API**.
6. Kéo xuống mục **Channel access token**.
7. Bấm **Issue** (Tạo mới) hoặc **Copy** nếu đã có sẵn token **long-lived** (dùng lâu dài).
8. Copy toàn bộ chuỗi ký tự.

Quay lại ScaleFlow, ở **Bước 4** dán mã vào ô **Channel access token (long-lived)**.

![Chọn Provider và channel trên LINE Developers Console](/static/img/provider-line.png)

![Copy Channel access token long-lived](/static/img/copy-channel-line-token.png)

![Dán access token vào ScaleFlow — Bước 4](/static/img/paste-access-token.png)

> **📷 Ghi chú chèn ảnh:** Chụp **Bước 4** trên ScaleFlow với ô access token đã điền.

---

## Bước 6: Xác minh và tạo kết nối trong ScaleFlow

Khi đã dán đủ **Channel secret** và **Channel access token**:

1. Nhìn cột bên phải màn hình ScaleFlow, mục **Trạng thái kết nối**.
2. Bấm **Xác minh thiết lập** (Verify Setup).
3. Đợi vài giây. Nếu thành công, bạn sẽ thấy thông báo xanh với **tên tài khoản LINE** và mã **@...** (ví dụ `@myshop`).
4. Kiểm tra tên có đúng tài khoản doanh nghiệp không.
5. Bấm **Tạo kết nối** (Create Connection).

![Nút Xác minh thiết lập trước khi xác minh](/static/img/verify-setup.png)

![Xác minh thành công — hiện tên Official Account](/static/img/verify-success-line.png)

### Nếu xác minh không thành công

Thông báo lỗi thường do:

- Dán thiếu hoặc dán nhầm mã (copy lại từ đầu).
- Dùng nhầm loại kênh **LINE Login** thay vì **Messaging API** — hãy kiểm tra lại bước 3.
- Token hết hạn — tạo token **long-lived** mới ở bước 5.

Sửa xong, bấm **Xác minh thiết lập** lại. Nếu bạn đổi một trong hai mã sau khi đã xác minh, cần xác minh lại trước khi tạo kết nối.

---

## Bước 7: Chọn đồng bộ danh bạ (tuỳ chọn)

Sau khi **Tạo kết nối** thành công, ScaleFlow hiện cửa sổ **Chọn tùy chọn đồng bộ danh bạ**.

### Đồng bộ danh bạ là gì?

Nếu bật **Đồng bộ danh bạ**, ScaleFlow sẽ lấy danh sách người **đang theo dõi** Official Account LINE của bạn và thêm vào mục [Liên hệ (Contacts)](./contact-management).

- **Nên bật** nếu bạn muốn có sẵn danh sách khách đã follow OA.
- **Có thể tắt** nếu chỉ cần nhận tin khi khách chủ động nhắn — khi đó liên hệ vẫn được tạo tự động mỗi lần có tin nhắn mới.

### Lưu ý về tài khoản LINE miễn phí hoặc chưa xác minh

Một số tài khoản LINE **miễn phí** hoặc **chưa được LINE xác minh** không cho phép đồng bộ hàng loạt người theo dõi. Khi đó ScaleFlow báo không thể đồng bộ.

**Bạn vẫn dùng được Inbox bình thường.** Chỉ cần:

1. **Tắt** công tắc **Đồng bộ danh bạ**.
2. Bấm **Tiếp tục** để hoàn tất.

Muốn đồng bộ sau này: nâng cấp hoặc xác minh Official Account trên [LINE Official Account Manager](https://manager.line.biz/), rồi thử lại.

![Cửa sổ chọn đồng bộ danh bạ](/static/img/sync-contact.png)

### Nếu liên hệ đã tồn tại trong ScaleFlow

Khi bật đồng bộ, bạn chọn cách xử lý khi trùng khách:

| Lựa chọn | Ý nghĩa |
|----------|------------------|
| **Gộp (Merge)** | Giữ thông tin cũ, chỉ điền thêm chỗ còn trống từ LINE. *(Khuyên dùng)* |
| **Thay thế (Replace)** | Ghi đè thông tin cũ bằng dữ liệu từ LINE. |
| **Bỏ qua (Skip)** | Không đụng liên hệ trùng, chỉ thêm người mới. |

---

## Bước 8: Kiểm tra kết nối đã thành công

Quay về **Channels** → **LINE Business**, kéo xuống mục **Tài khoản đã kết nối**.

Kết nối thành công khi:

- Thấy thẻ (card) tài khoản LINE với đúng tên Official Account.
- Trạng thái hiển thị **active** (đang hoạt động).
- Có các nút **Kiểm tra**, **Kết nối lại**, **Xóa**.

![Tài khoản LINE đã kết nối trong ScaleFlow](/static/img/active-line.png)

### Các nút trên thẻ tài khoản

| Nút | Dùng khi nào |
|-----|--------------|
| **Kiểm tra (Test)** | Muốn chắc ScaleFlow vẫn nói chuyện được với LINE. |
| **Kết nối lại (Reconnect)** | Kết nối bị lỗi hoặc bạn đổi mã trên LINE — mở lại trang hướng dẫn để nhập mã mới. |
| **Xóa (Delete)** | Ngừng dùng LINE trên ScaleFlow — tin mới sẽ không vào Inbox nữa. |

---

## Bước 9: Gửi tin thử và mở Inbox

Cách chắc chắn nhất là thử như khách hàng thật:

1. Trên điện thoại, mở app **LINE**.
2. Tìm Official Account doanh nghiệp (quét QR hoặc tìm theo tên / mã @).
3. Gửi một tin nhắn thử, ví dụ: *"Xin chào, tôi muốn hỏi về sản phẩm"*.
4. Trong ScaleFlow, mở [Inbox](./inbox-usage).
5. Tìm hội thoại mới — tin nhắn vừa gửi phải xuất hiện ở đây, có nhãn **LINE**.

![Khách nhắn tin trên app LINE](/static/img/phone-line.png)

![Cùng tin nhắn hiện trong Inbox ScaleFlow](/static/img/inbox-line.png)

Bạn cũng có thể bấm **Kiểm tra** trên thẻ tài khoản LINE — nếu thành công sẽ có thông báo xanh.

---

## Quy trình hàng ngày sau khi kết nối

1. Khách nhắn tin qua LINE Official Account.
2. Tin hiện trong **Inbox** ScaleFlow.
3. Nhân viên trả lời trực tiếp, hoặc bật [Trợ lý AI](./ai-assistant) để hỗ trợ trả lời.
4. Nếu cần theo dõi việc xử lý, tạo [Ticket](./ticket-usage) từ hội thoại.

---

## Câu hỏi thường gặp

### Tôi không thấy nút Kết nối?

Tài khoản ScaleFlow của bạn có thể chưa có quyền quản lý kênh. Liên hệ quản trị viên công ty.

### Tôi có nhiều Official Account LINE, kết nối được không?

Mỗi Official Account kết nối một lần. Bạn có thể kết nối nhiều tài khoản LINE khác nhau nếu doanh nghiệp có nhiều OA.

### Tôi đổi Channel secret hoặc access token trên LINE thì sao?

Vào **Channels** → **LINE Business** → chọn **Kết nối lại** trên thẻ tài khoản → làm lại từ bước dán mã và **Xác minh**.

### Không đồng bộ được danh bạ có sao không?

Không sao cho việc nhắn tin. Inbox vẫn nhận tin bình thường. Liên hệ được tạo khi khách nhắn. Chỉ không có sẵn toàn bộ danh sách người follow từ trước.

### Tin khách vẫn không vào Inbox?

Thử lần lượt:

1. Bấm **Kiểm tra** trên thẻ tài khoản LINE.
2. Kiểm tra **Webhooks** đã bật và **Auto-response** đã tắt trên LINE (bước 4).
3. Bấm **Kết nối lại** và xác minh lại mã.
4. Nhờ quản trị viên ScaleFlow hỗ trợ nếu vẫn lỗi.

---

## Việc nên làm tiếp theo

Sau khi LINE đã chạy ổn:

1. Thêm câu trả lời mẫu, chính sách, FAQ vào [Knowledge](./knowledge-usage) để AI trả lời chính xác hơn.
2. Thiết lập [AI Agent](./ai-agent-usage) nếu muốn tự động hóa.
3. Bật [Trợ lý AI](./ai-assistant) khi sẵn sàng.

---

## Liên kết tham khảo từ LINE (khi cần đọc thêm)

Các trang chính thức của LINE (tiếng Anh / tiếng Nhật chủ yếu):

- [LINE Official Account Manager](https://manager.line.biz/)
- [LINE Developers Console](https://developers.line.biz/console/)
- [Hướng dẫn Messaging API của LINE](https://developers.line.biz/en/docs/messaging-api/getting-started)

Trong ScaleFlow, trang hướng dẫn kết nối cũng có các liên kết này ở mục **Liên kết tham khảo** bên phải.
