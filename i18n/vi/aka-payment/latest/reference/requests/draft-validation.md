---
title: "Điều kiện để đi tiếp trong quy trình tạo đề nghị"
description: "Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo \"Vui lòng sửa các trường được đánh dấu\"."
id: draft-validation
sidebar_label: Điều kiện để đi tiếp trong quy trình tạo đề nghị
sidebar_position: 2
---

# Điều kiện để đi tiếp trong quy trình tạo đề nghị

Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".

**Mức độ yêu cầu:** Bắt buộc


Trường bắt buộc do cấu hình loại đề nghị quyết định; dưới đây là loại "Thanh toán" theo dữ liệu mẫu.

- **Bước 1 Tổng quan**: bắt buộc Mục đích yêu cầu, Người yêu cầu, Đơn vị duyệt, Đối tượng thanh toán.
- **Bước 2 Bảng kê chi phí**: cần ít nhất một dòng chi phí. Mỗi dòng bắt buộc Mô tả chi phí, Tổng tiền, Khoản mục ngân sách, Bộ phận chịu chi phí, và Dự án chịu chi phí khi ngân sách quản lý theo dự án. Dòng có hóa đơn còn bắt buộc Loại hóa đơn, Số hóa đơn, Loại thuế, Tổng tiền thanh toán. Một hóa đơn không được nằm ở hai dòng ("Hóa đơn này đã có ở dòng …"). Thiếu chứng từ bắt buộc ("Thiếu chứng từ bắt buộc: …") hoặc quy tắc đối soát bắt buộc không đạt cũng chặn Tiếp tục; đối soát đang chạy thì không chặn ở bước này (chỉ chặn khi nộp). Với loại đề nghị chia một chi phí thành nhiều dòng phân bổ: mỗi dòng phân bổ cần khoản mục, bộ phận (và dự án nếu bắt buộc), số tiền lớn hơn 0, không trùng tổ hợp, và tổng các dòng phân bổ bằng số tiền chi phí.
- **Bước 3 Thanh toán**: bắt buộc Hình thức thanh toán và ít nhất một người thụ hưởng. Chuyển khoản cần Số tài khoản, Tên người nhận, Tên ngân hàng, Số tiền; với hình thức không dùng tài khoản ngân hàng (Tiền mặt, Bù trừ công nợ), phải có Tên người nhận, Số CMND/CCCD, Số tiền. Tổng người thụ hưởng phải bằng tổng chi phí: bước 3 hiện "Tổng tiền người thụ hưởng phải bằng tổng chi phí." và nút **Nộp đề nghị** ở bước 4 bị khóa với cùng lý do.
- **Bước 4 Xem lại** chỉ mở khi bước 3 hợp lệ; khi đủ điều kiện, nhãn trạng thái hiện "Sẵn sàng nộp". Điều kiện nộp: [Điều kiện để nộp đề nghị](submission.md).


## Được dùng trong các hướng dẫn

- [Đối soát chứng từ của một chi phí](../../guides/reconciliation/how-to/check-expense.md) — Với loại đề nghị bật đối soát, bấm Đối soát ở dòng chi phí (hoặc Đối soát hàng loạt) rồi đọc kết quả; hệ thống cũng tự đối soát ở vài thời điểm.
- [Áp dụng phân bổ cho tất cả chi phí](../../guides/requests/how-to/apply-expense-defaults.md) — Ở bước Bảng kê chi phí, mở Áp dụng cho tất cả chi phí, chọn khoản mục, bộ phận (và dự án) rồi bấm Áp dụng.
- [Tạo đề nghị và điền đến bước Xem lại](../../guides/requests/how-to/create-draft.md) — Sau khi mở đề nghị mới, thêm chi phí ở Bảng kê chi phí, điền thanh toán rồi đến bước Xem lại.
- [Mở đề nghị mới và điền bước Tổng quan](../../guides/requests/how-to/start-draft.md) — Bấm Tạo đề nghị thanh toán, điền bước Tổng quan rồi Tiếp tục để tới Bảng kê chi phí.
