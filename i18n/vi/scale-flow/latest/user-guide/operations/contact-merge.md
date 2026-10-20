---
id: contact-merge
title: Gộp contact
sidebar_label: Gộp contact
sidebar_position: 8
description: Hướng dẫn thân thiện với người mới bắt đầu để gộp các hồ sơ khách hàng trùng thành một contact.
displayed_sidebar: scaleFlowSidebar
---

# Gộp Contact

Đôi khi cùng một khách hàng xuất hiện dưới dạng **hai hoặc nhiều contact** — ví dụ một hồ sơ từ Zalo và một hồ sơ từ Facebook, hoặc hai lần import có cùng số điện thoại.

**Merge** kết hợp chúng thành **một** contact để đội ngũ thấy một lịch sử và một bộ thông tin duy nhất.

---

## Khi nào nên gộp

Hãy gộp khi chắc chắn hai hồ sơ thuộc về **cùng một người**, chẳng hạn:

- Cùng số điện thoại trên các contact khác nhau
- Cùng email trên các contact khác nhau
- Khách hàng cho biết họ đã nhắn tin từ hai kênh

**Không gộp** nếu chưa chắc — hoàn tác khó hơn việc chờ và xác nhận.

---

## Cách ScaleFlow tìm contact trùng

ScaleFlow có thể gợi ý contact trùng khi các trường khớp nhau (ví dụ số điện thoại hoặc email). Bạn có thể thấy gợi ý gộp:

- Trên trang **chi tiết contact**
- Trong **panel contact** bên trong [Inbox](./inbox-usage)

Nhấp **Review merge** (hoặc tương tự) để mở màn hình gộp.

![Contact trùng](/static/img/duplicates-contact.png)

---

## Mở trang gộp

1. Đến **Contacts** và mở contact chính muốn giữ (contact **primary**).
2. Bắt đầu gộp từ gợi ý hoặc mở liên kết gộp với các contact trùng đã chọn.
3. Bạn đến trang **Merge contacts** với:
   - **Bên trái:** danh sách contact trùng sẽ đưa vào
   - **Bên phải:** bản xem trước kết quả gộp

![Trang Merge](/static/img/merge-page.png)

---

## Chọn contact cần giữ

- Contact mở đầu tiên thường là **primary** (contact tồn tại sau khi gộp).
- Đánh dấu các contact **secondary** muốn gộp vào primary.
- ScaleFlow có thể tự chọn tất cả contact trùng theo số điện thoại/email được phát hiện để bạn không bỏ sót.

---

## Chọn giá trị tốt nhất cho từng trường

Với mỗi thông tin (tên, điện thoại, email, công ty, stage, label, …), chọn giá trị của contact nào sẽ được giữ.

| Tình huống | Quy tắc đơn giản |
|-----------|-------------|
| Một bên trống | Chọn bên có dữ liệu |
| Hai bên có số điện thoại khác nhau | Hỏi khách hàng số nào hiện tại rồi chọn dòng đó |
| Cả hai có label / list | Bản xem trước hiển thị kết quả kết hợp — kiểm tra trước khi xác nhận |

Dùng panel xem trước để đọc hồ sơ cuối cùng trước khi xác nhận.

---

## Xác nhận gộp

1. Xem lại bản xem trước lần cuối.
2. Nhấp **Merge** (hoặc **Confirm merge**).
3. Chờ thông báo thành công.
4. Bạn được đưa về contact đã gộp duy nhất.

Cuộc trò chuyện và lịch sử từ contact secondary được chuyển vào contact primary.

---

## Sau khi gộp

- Mở contact đã gộp trong **Contacts** hoặc từ **Inbox**.
- Kiểm tra label, lifecycle stage và cuộc trò chuyện đã liên kết.
- Nếu [Broadcasts](./broadcast-usage) hoặc list đang dùng contact trùng cũ, xác nhận audience vẫn chính xác.

---

## Mẹo

1. Gộp vào giờ ít bận nếu khách hàng đang chat — nhân viên cần biết thread nào tiếp tục.
2. Sửa lỗi trong điện thoại/email **trước** khi gộp nếu có thể; dữ liệu sai tạo gợi ý trùng giả.
3. Hướng dẫn đội ngũ gộp thay vì tạo hồ sơ trùng thứ ba.

---

## Hướng dẫn liên quan

- [Quản lý Contact](./contact-management)
- [Inbox](./inbox-usage)
