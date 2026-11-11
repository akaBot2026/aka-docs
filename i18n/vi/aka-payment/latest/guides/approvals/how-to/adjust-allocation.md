---
title: "Điều chỉnh phân bổ ngân sách khi duyệt"
description: "Ở đề nghị đang chờ bạn duyệt, mở dòng chi phí trong Bảng kê chi phí, bấm Sửa phân bổ, đổi khoản mục, đơn vị hoặc dự án rồi Lưu."
id: adjust-allocation
sidebar_label: Điều chỉnh phân bổ ngân sách khi duyệt
sidebar_position: 2
---

# Điều chỉnh phân bổ ngân sách khi duyệt

Ở đề nghị đang chờ bạn duyệt, mở dòng chi phí trong Bảng kê chi phí, bấm Sửa phân bổ, đổi khoản mục, đơn vị hoặc dự án rồi Lưu.


## Các bước

1. Mở **Việc cần xử lý** → tab **Chờ xử lý** và bấm vào đề nghị để mở trang chi tiết.
2. Ở mục **Bảng kê chi phí**, mở dòng chi phí cần sửa để xem chi tiết.
3. Bấm **Sửa phân bổ**.
4. Đổi **Khoản mục ngân sách**, **Bộ phận chịu chi phí** (và **Dự án chịu chi phí** khi ngân sách theo dự án). Nếu loại đề nghị cho chia nhiều dòng phân bổ, sửa các dòng sao cho tổng bằng số tiền chi phí (mỗi dòng số tiền lớn hơn 0, không trùng khoản mục và bộ phận với dòng khác); nếu không, số tiền giữ nguyên.
5. Bấm **Lưu** (hoặc **Hủy** để bỏ). Nếu vượt ngân sách ở mức cảnh báo, xác nhận **Vẫn lưu**.
6. Duyệt tiếp như bình thường ở [Duyệt một việc được giao](approve-task.md). Nếu phân bổ thực sự thay đổi: lịch sử ghi "đã điều chỉnh phân bổ ngân sách" kèm phân bổ cũ → mới, biểu mẫu đề nghị được niêm phong lại với phân bổ mới (các chữ ký giữ nguyên), và người tạo nhận thông báo (trừ khi bạn chính là người tạo).

## Xử lý lỗi

- "Không thể lưu khi phân bổ vượt ngân sách còn lại.": loại đề nghị đặt Kiểm tra ngân sách là Chặn; chọn khoản mục khác trong phần **Sửa phân bổ** hoặc giảm số tiền. Xem [Quy tắc vượt ngân sách](../../../reference/budget/overrun.md).
- Không thấy **Sửa phân bổ**: nút chỉ có khi bạn là người được giao bước đang mở, đề nghị đang xử lý, loại đề nghị có phần phân bổ và bước đó được bật **Điều chỉnh phân bổ ngân sách**. Nếu bước chưa có quyền này, quản trị viên bật nó ở [Thiết lập và phát hành loại đề nghị](../../config/how-to/publish-request-type.md) (**Luồng phê duyệt** → chọn bước → **Thiết lập nâng cao**) rồi phát hành. Quyền lấy theo phiên bản loại đề nghị mà đề nghị đã nộp: đề nghị đang xử lý theo phiên bản cũ vẫn không có nút này.


## Lưu ý

- **[Quy tắc vượt ngân sách](../../../reference/budget/overrun.md)**\
  Mỗi loại đề nghị đặt Kiểm tra ngân sách là Tắt, Cảnh báo hoặc Chặn; mặc định Cảnh báo, và loại Thanh toán đang để Cảnh báo.

## Được dùng trong các hướng dẫn

- [Quy tắc vượt ngân sách](../../../reference/budget/overrun.md) — Mỗi loại đề nghị đặt Kiểm tra ngân sách là Tắt, Cảnh báo hoặc Chặn; mặc định Cảnh báo, và loại Thanh toán đang để Cảnh báo.
- [Sửa khoản mục ngân sách của đề nghị đang duyệt](../adjust-allocation.md) — Người duyệt muốn chuyển chi phí của đề nghị sang khoản mục, đơn vị hoặc dự án khác trước khi duyệt.
- [Duyệt một việc được giao](approve-task.md) — Mở Việc cần xử lý và bấm Duyệt trên dòng, hoặc mở đề nghị và bấm Duyệt ở thẻ Việc của bạn; bước bắt buộc ký thì ký bằng mật khẩu ký.
- [Thiết lập và phát hành loại đề nghị](../../config/how-to/publish-request-type.md) — Mở loại đề nghị, chỉnh các tab, bấm Lưu rồi Phát hành; phát hành lỗi thì hiện danh sách vấn đề cần sửa.
