---
title: "Điều kiện phát hành loại đề nghị"
description: "Phát hành không thành công kèm danh sách vấn đề theo tab (Thiết lập, Luồng đề nghị, Luồng phê duyệt); phát hành khi loại đề nghị không có thay đổi thì không tạo phiên bản mới."
id: publish-validation
sidebar_label: Điều kiện phát hành loại đề nghị
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Điều kiện phát hành loại đề nghị

Phát hành không thành công kèm danh sách vấn đề theo tab (Thiết lập, Luồng đề nghị, Luồng phê duyệt); phát hành khi loại đề nghị không có thay đổi thì không tạo phiên bản mới.

**Mức độ yêu cầu:** Bắt buộc


Việc kiểm tra chỉ diễn ra khi bấm Phát hành; trình sửa không báo lỗi trước. Khi không phát hành được, trang hiện "Chưa thể phát hành loại đề nghị này." và không ghi phiên bản nào. Các nhóm vấn đề chính:

- **Thiết lập**: Mã và Tên không được trống; mã không trùng loại khác; Mẫu số chứng từ phải chứa `{NNNNN}` ("Mẫu số chứng từ phải chứa `{NNNNN}` để mỗi đề nghị có một số riêng.").
- **Luồng phê duyệt**: ít nhất một bước; mỗi bước có tên, mã không trùng; nhóm hoặc trường chọn người được giao phải còn tồn tại; trường bổ sung của bước phải có tên, lựa chọn hoặc danh mục; điều kiện phải có vế hoàn chỉnh và ít nhất một nhánh; không có bước nào sau bước kết thúc.
- **Luồng đề nghị**: chứng từ bắt buộc phải có tên, không trùng và đã chọn loại chứng từ; bật tra cứu hóa đơn thì bộ chứng từ phải có hóa đơn; quy tắc đối soát có tên không trùng và hướng dẫn kiểm tra dùng ít nhất một biến hợp lệ; chứng từ mà quy tắc bắt buộc dùng phải là chứng từ bắt buộc (hệ thống tự đánh dấu khi phát hành); quy tắc dùng chung đã lưu trữ hoặc đã xóa phải được gỡ liên kết; không thiếu trường hệ thống, không trùng mã trường; trường phụ thuộc phải trỏ tới trường hoặc thiết lập ngân sách có thật; mục lặp phải có trường khoản mục ngân sách và bộ phận chịu chi phí.

Khi đối soát chạy qua AkaPay còn có giới hạn riêng: 2 đến 6 loại chứng từ, ít nhất một quy tắc bắt buộc, tối đa 20 quy tắc. Phát hành khi không có gì thay đổi so với phiên bản mới nhất không tạo phiên bản mới mà giữ nguyên phiên bản đó.


## Được dùng trong các hướng dẫn

- [Điều kiện lưu quy tắc dùng chung](global-rule-rules.md) — Mã 1–32 ký tự (chữ, số, _ . -) không đổi sau khi tạo; mã và tên không trùng; hướng dẫn phải dùng biến có thật; sửa áp dụng ngay cho mọi loại đề nghị đang liên kết.
- [Thiết lập và phát hành loại đề nghị](../../guides/config/how-to/publish-request-type.md) — Mở loại đề nghị, chỉnh các tab, bấm Lưu rồi Phát hành; phát hành lỗi thì hiện danh sách vấn đề cần sửa.
- [Khôi phục phiên bản loại đề nghị](../../guides/config/how-to/restore-request-type.md) — Mở loại đề nghị, bấm Lịch sử và Khôi phục ở phiên bản muốn quay lại, rồi Lưu và Phát hành để áp dụng.
