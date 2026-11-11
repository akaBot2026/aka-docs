---
title: "Quy tắc khi duyệt, từ chối, trả lại, ủy quyền"
description: "Trả lại bắt buộc có lý do; Ủy quyền bắt buộc chọn người nhận khác; Từ chối không bắt buộc nhập lý do; Duyệt có thể yêu cầu ký."
id: action-rules
sidebar_label: Quy tắc khi duyệt, từ chối, trả lại, ủy quyền
sidebar_position: 2
---

# Quy tắc khi duyệt, từ chối, trả lại, ủy quyền

Trả lại bắt buộc có lý do; Ủy quyền bắt buộc chọn người nhận khác; Từ chối không bắt buộc nhập lý do; Duyệt có thể yêu cầu ký.

**Mức độ yêu cầu:** Bắt buộc


Mỗi thao tác mở hộp thoại có nút Hủy và Xác nhận. **Trả lại**: "Lý do" bắt buộc ("Vui lòng nhập lý do trả lại đề nghị."). **Từ chối**: "Lý do" không bắt buộc; từ chối là quyết định cuối, muốn làm lại phải dùng "Nhân bản". **Ủy quyền**: bắt buộc chọn "Ủy quyền cho"; không ủy quyền được cho chính mình, cho người đã được giao bước đó, cho người không có trong danh bạ người dùng, hoặc cho người tạo đề nghị khi bước bật "Bỏ qua khi người duyệt là người đề nghị". **Duyệt**: nếu bước yêu cầu ký thì phải ký bằng mật khẩu ký (xem [Duyệt một việc được giao](../../guides/approvals/how-to/approve-task.md)); sai mật khẩu 5 lần thì khóa 15 phút; thiếu ảnh chữ ký hoặc mật khẩu ký thì không duyệt được. Chỉ người đang được giao bước đang mở mới thao tác được.


## Được dùng trong các hướng dẫn

- [Duyệt một việc được giao](../../guides/approvals/how-to/approve-task.md) — Mở Việc cần xử lý và bấm Duyệt trên dòng, hoặc mở đề nghị và bấm Duyệt ở thẻ Việc của bạn; bước bắt buộc ký thì ký bằng mật khẩu ký.
- [Ủy quyền một việc cho người khác](../../guides/approvals/how-to/delegate-task.md) — Mở đề nghị, bấm Ủy quyền, chọn người nhận và Xác nhận.
- [Từ chối một đề nghị](../../guides/approvals/how-to/reject-request.md) — Mở đề nghị đang chờ bạn và bấm Từ chối ở thẻ Việc của bạn, nhập lý do nếu muốn rồi Xác nhận; quyết định này là cuối cùng.
- [Trả lại đề nghị cho người tạo](../../guides/approvals/how-to/return-request.md) — Mở đề nghị, bấm Trả lại, nhập lý do bắt buộc và Xác nhận; người tạo sửa rồi nộp lại.
- [Đã có chữ ký và mật khẩu ký](../../troubleshooting/profile/signing-ready.md) — Hồ sơ cá nhân đã có ảnh chữ ký và mật khẩu ký, cần cho bước duyệt bắt buộc ký.
