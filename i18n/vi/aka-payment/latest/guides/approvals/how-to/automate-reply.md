---
title: "Tạo quy tắc tự động xử lý việc được giao cho tôi"
description: "Ở Việc cần xử lý bấm Tự động hóa, rồi Tạo tự động hóa để tự duyệt, từ chối hoặc ủy quyền theo điều kiện."
id: automate-reply
sidebar_label: Tạo quy tắc tự động xử lý việc được giao cho tôi
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Tạo quy tắc tự động xử lý việc được giao cho tôi

Ở Việc cần xử lý bấm Tự động hóa, rồi Tạo tự động hóa để tự duyệt, từ chối hoặc ủy quyền theo điều kiện.


## Các bước

1. Ở **Việc cần xử lý**, bấm **Tự động hóa** (tab **Quy tắc** và **Lịch sử**).
2. Bấm **Tạo tự động hóa**; biểu mẫu hiện ngay trên trang với công tắc **Đang bật**.
3. Ở dòng **Khi** chọn loại đề nghị (mặc định "Mọi loại đề nghị") và bấm **Thêm điều kiện** nếu muốn lọc (mỗi điều kiện phải có giá trị so sánh); không có điều kiện thì quy tắc chạy với mọi công việc trong phạm vi.
4. Ở dòng **Thì** chọn **duyệt đề nghị**, **từ chối đề nghị** hoặc **ủy quyền cho** (phải chọn người nhận trước khi bật quy tắc) và nhập **Lý do** (không bắt buộc). Hành động được ghi nhận là quyết định của chính bạn.
5. Bấm **Lưu** (hoặc **Hủy**). Trong danh sách, dùng công tắc Đang bật / Đang tắt, **Đưa lên trên** / **Đưa xuống dưới** để đổi thứ tự (quy tắc đầu tiên thỏa điều kiện được áp dụng) và **Xóa tự động hóa**.
6. Xem kết quả ở tab **Lịch sử** (Thời điểm, Đề nghị, Hành động, Kết quả: Đã thực hiện, Đã bỏ qua, Bị từ chối), lọc theo từng tự động hóa.

## Xử lý lỗi

- Quy tắc bị bỏ qua khi bước phải do bạn ký trực tiếp, khi quy tắc không chỉ định người nhận, hoặc khi đề nghị do chính bạn tạo (quy tắc không tự duyệt đề nghị của bạn). Chuỗi ủy quyền tự động dừng sau vài lần chuyển để hai quy tắc không ủy quyền qua lại mãi.


## Được dùng trong các hướng dẫn

- [Tự động xử lý việc giao cho tôi](../automate-reply.md) — Người duyệt muốn hệ thống tự duyệt, từ chối hoặc ủy quyền thay mình khi có việc khớp điều kiện.
