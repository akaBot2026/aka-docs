---
title: "Khôi phục phiên bản loại đề nghị"
description: "Mở loại đề nghị, bấm Lịch sử và Khôi phục ở phiên bản muốn quay lại, rồi Lưu và Phát hành để áp dụng."
id: restore-request-type
sidebar_label: Khôi phục phiên bản loại đề nghị
sidebar_position: 4
---

# Khôi phục phiên bản loại đề nghị

Mở loại đề nghị, bấm Lịch sử và Khôi phục ở phiên bản muốn quay lại, rồi Lưu và Phát hành để áp dụng.

## Trước khi bắt đầu

- **[Điều kiện phát hành loại đề nghị](../../../reference/config/publish-validation.md)**\
  Phát hành không thành công kèm danh sách vấn đề theo tab (Thiết lập, Luồng đề nghị, Luồng phê duyệt); phát hành khi loại đề nghị không có thay đổi thì không tạo phiên bản mới.


## Các bước

1. Ở **Cấu hình** → **Loại đề nghị**, mở loại cần khôi phục.
2. Bấm **Lịch sử** ở góc trên bên phải; ngăn "Lịch sử phiên bản" liệt kê các bản đã phát hành (v16, v15, …) kèm người phát hành và thời gian.

   ![Ngăn Lịch sử phiên bản: mỗi bản đã phát hành ghi phiên bản, thời gian và người phát hành, với (3) nút Khôi phục](/static/img/aka-payment-latest-config-request-type-history.webp)

3. Bấm **Khôi phục** (3) ở phiên bản muốn quay lại. Việc này chỉ nạp nội dung phiên bản đó vào bản nháp (thay các chỉnh sửa chưa lưu) và hiện "Đã khôi phục phiên bản N. Lưu rồi phát hành để áp dụng."; chưa tạo phiên bản nào.
4. Kiểm tra lại các tab, bấm **Lưu**, rồi **Phát hành** (xác nhận) để phiên bản khôi phục thành phiên bản mới được dùng cho các đề nghị tạo mới.

## Xử lý lỗi

- "Không tải được phiên bản này. Hãy thử lại.": nạp phiên bản thất bại, bản nháp giữ nguyên.
- Phát hành lại vẫn phải qua kiểm tra: xem [Điều kiện phát hành loại đề nghị](../../../reference/config/publish-validation.md). Chỉ muốn bỏ chỉnh sửa chưa phát hành thì dùng **Hủy thay đổi**.


## Được dùng trong các hướng dẫn

- [Quay lại phiên bản cũ của loại đề nghị](../restore-request-type.md) — Quản trị viên muốn lấy lại cấu hình loại đề nghị từ một phiên bản đã phát hành.
- [Thiết lập và phát hành loại đề nghị](publish-request-type.md) — Mở loại đề nghị, chỉnh các tab, bấm Lưu rồi Phát hành; phát hành lỗi thì hiện danh sách vấn đề cần sửa.
