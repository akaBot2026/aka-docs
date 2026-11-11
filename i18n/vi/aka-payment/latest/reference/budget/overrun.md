---
title: "Quy tắc vượt ngân sách"
description: "Mỗi loại đề nghị đặt Kiểm tra ngân sách là Tắt, Cảnh báo hoặc Chặn; mặc định Cảnh báo, và loại Thanh toán đang để Cảnh báo."
id: overrun
sidebar_label: Quy tắc vượt ngân sách
sidebar_position: 3
---

# Quy tắc vượt ngân sách

Mỗi loại đề nghị đặt Kiểm tra ngân sách là Tắt, Cảnh báo hoặc Chặn; mặc định Cảnh báo, và loại Thanh toán đang để Cảnh báo.

**Mức độ yêu cầu:** Lưu ý


Ba mức: **Tắt**, **Cảnh báo** (mặc định), **Chặn**. Ở mức **Cảnh báo**, hộp thoại "Kết quả kiểm tra ngân sách" ghi "Chi phí vượt ngân sách đã phân bổ. Có thể gửi nhưng cần cân nhắc." Ở mức **Chặn**, không nộp được đề nghị (mã lỗi API `BUDGET_OVERRUN`; xem [Điều kiện để nộp đề nghị](../requests/submission.md)). Cùng quy tắc áp dụng khi người duyệt điều chỉnh phân bổ ([Điều chỉnh phân bổ ngân sách khi duyệt](../../guides/approvals/how-to/adjust-allocation.md)): mức **Chặn** không cho lưu ("Không thể lưu khi phân bổ vượt ngân sách còn lại."), mức **Cảnh báo** hỏi lại với nút "Vẫn lưu". Mức này đặt ở Cấu hình → Loại đề nghị → Thiết lập → Cách hoạt động → Kiểm tra ngân sách.


## Được dùng trong các hướng dẫn

- [Điều chỉnh phân bổ ngân sách khi duyệt](../../guides/approvals/how-to/adjust-allocation.md) — Ở đề nghị đang chờ bạn duyệt, mở dòng chi phí trong Bảng kê chi phí, bấm Sửa phân bổ, đổi khoản mục, đơn vị hoặc dự án rồi Lưu.
- [Kiểm tra ngân sách trước khi nộp](../../guides/requests/how-to/check-budget.md) — Ở bước Bảng kê chi phí, chọn Kiểm tra ngân sách để xem chi phí có vượt phân bổ không.
