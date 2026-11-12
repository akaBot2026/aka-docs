---
title: "Điều kiện lưu quy tắc dùng chung"
description: "Mã 1–32 ký tự (chữ, số, _ . -) không đổi sau khi tạo; mã và tên không trùng; hướng dẫn phải dùng biến có thật; sửa áp dụng ngay cho mọi loại đề nghị đang liên kết."
id: global-rule-rules
sidebar_label: Điều kiện lưu quy tắc dùng chung
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Điều kiện lưu quy tắc dùng chung

Mã 1–32 ký tự (chữ, số, _ . -) không đổi sau khi tạo; mã và tên không trùng; hướng dẫn phải dùng biến có thật; sửa áp dụng ngay cho mọi loại đề nghị đang liên kết.

**Mức độ yêu cầu:** Bắt buộc


- Chỉ người vận hành và quản trị viên quản lý quy tắc dùng chung.
- **Mã**: 1–32 ký tự, chỉ chữ, số, `_`, `.`, `-`; gợi ý sẵn mã tiếp theo; không sửa được sau khi tạo; mã của quy tắc đã lưu trữ vẫn được tính là đã dùng ("Mã quy tắc … đã được dùng.").
- **Tên** không trùng quy tắc dùng chung khác, kể cả quy tắc đã lưu trữ ("Tên quy tắc … đã được dùng."); khi đổi tên, không trùng quy tắc riêng của loại đề nghị đang liên kết ("Tên … trùng với quy tắc riêng của: …").
- **Tên** và **Hướng dẫn kiểm tra** bắt buộc; hướng dẫn phải dùng ít nhất một biến `{{input.…}}` hoặc `{{doc.…}}`; loại chứng từ và trường được nhắc tới phải có trong danh mục Loại chứng từ.
- Hai người cùng sửa: lần lưu sau không thành công ("Quy tắc … đã được sửa bởi người khác. Hãy tải lại rồi sửa tiếp.").
- Sửa một quy tắc đang dùng áp dụng ngay cho mọi loại đề nghị liên kết (hộp thoại hỏi lại "Lưu và áp dụng"). Lưu trữ quy tắc đang dùng: các loại đó vẫn đối soát theo quy tắc nhưng không phát hành được cho tới khi gỡ liên kết (xem [Điều kiện phát hành loại đề nghị](publish-validation.md)).
- Khi nhập tệp JSON, quy tắc được khớp theo mã (đã có thì cập nhật, kể cả quy tắc đã lưu trữ; chưa có thì tạo). Cả tệp không nhập được khi có hai quy tắc cùng mã hoặc cùng tên, tên đã thuộc mã khác trong thư viện ("Tên quy tắc … đã được dùng bởi mã …"), hướng dẫn không hợp lệ, hoặc không phải bản xuất hợp lệ ("Tệp không phải bản xuất quy tắc dùng chung hợp lệ.").


## Được dùng trong các hướng dẫn

- [Tạo và sửa quy tắc đối soát dùng chung](../../guides/config/how-to/manage-reconciliation-rule.md) — Cấu hình → Quy tắc dùng chung: Thêm quy tắc dùng chung (Mã, Tên, Hướng dẫn kiểm tra), Sửa, Lưu trữ hoặc Khôi phục; liên kết vào loại đề nghị ở tab Luồng đề nghị.
