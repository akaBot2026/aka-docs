---
title: "Điều kiện để nộp đề nghị"
description: "Không nộp được nếu biểu mẫu chưa đủ, hóa đơn trùng, thiếu chứng từ bắt buộc, chưa đối soát xong, hoặc (ở mức Chặn) vượt ngân sách."
id: submission
sidebar_label: Điều kiện để nộp đề nghị
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Điều kiện để nộp đề nghị

Không nộp được nếu biểu mẫu chưa đủ, hóa đơn trùng, thiếu chứng từ bắt buộc, chưa đối soát xong, hoặc (ở mức Chặn) vượt ngân sách.

**Mức độ yêu cầu:** Bắt buộc


Máy chủ trả về mã lỗi cụ thể; giao diện kiểm tra theo cùng quy tắc ở bước Xem lại.

- **Biểu mẫu** (mã lỗi API `FORM_INCOMPLETE`): thiếu câu trả lời bắt buộc (kể cả Dự án chịu chi phí khi ngân sách theo dự án), không có chi phí hoặc người thụ hưởng, phân bổ chia nhiều dòng không khớp số tiền, hoặc cùng một hóa đơn ở hai dòng chi phí.
- **Chứng từ** (mã lỗi API `BUNDLE_INCOMPLETE`): thiếu mục chứng từ bắt buộc hoặc quy tắc đối soát bắt buộc chưa đạt; khi loại đề nghị có đối soát, chi phí chưa từng đối soát (hoặc không có tệp), đang đối soát, đối soát lỗi, hoặc đã sửa sau lần đối soát cuối (kết quả cũ bị bỏ qua) cũng chặn. Hóa đơn lấy từ Quản lý hóa đơn được tính là đã đính kèm vào mục chứng từ hóa đơn.
- **Ngân sách** (mã lỗi API `BUDGET_OVERRUN`): chỉ chặn khi Kiểm tra ngân sách của loại đề nghị đặt là **Chặn**; mức **Cảnh báo** chỉ hiện hộp thoại với nút "Vẫn gửi".
- **Quyết toán tạm ứng** (mã lỗi API `CLAIM_EXCEEDS_ADVANCE`): số tiền đề nghị quyết toán vượt số tạm ứng còn lại.
- **Loại đã tắt** (mã lỗi API `REQUEST_TYPE_DISABLED`): loại đề nghị đã bị tắt thì không nộp được đề nghị mới.
- **Tổng tiền**: tổng người thụ hưởng phải bằng tổng chi phí; giao diện khóa **Nộp đề nghị** và báo "Tổng tiền người thụ hưởng phải bằng tổng chi phí."
- **Khi lưu bản nháp**: một chi phí chỉ có một hóa đơn (mã lỗi API `MULTIPLE_INVOICES`), và hóa đơn không được là chứng từ chung (mã lỗi API `SHARED_INVOICE`).

Chỉ người tạo nộp được, từ bản nháp hoặc đề nghị đã bị trả lại.


## Được dùng trong các hướng dẫn

- [Quy tắc vượt ngân sách](../budget/overrun.md) — Mỗi loại đề nghị đặt Kiểm tra ngân sách là Tắt, Cảnh báo hoặc Chặn; mặc định Cảnh báo, và loại Thanh toán đang để Cảnh báo.
- [Điều kiện để đi tiếp trong quy trình tạo đề nghị](draft-validation.md) — Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".
- [Đối soát chứng từ của một chi phí](../../guides/reconciliation/how-to/check-expense.md) — Với loại đề nghị bật đối soát, bấm Đối soát ở dòng chi phí (hoặc Đối soát hàng loạt) rồi đọc kết quả; hệ thống cũng tự đối soát ở vài thời điểm.
- [Sửa và nộp lại đề nghị bị trả lại](../../guides/requests/how-to/resubmit-returned.md) — Mở đề nghị bị trả lại, bấm Sửa và gửi lại, chỉnh theo lý do rồi Nộp đề nghị; chỉ bước bị trả lại được mở lại.
- [Nộp đề nghị](../../guides/requests/how-to/submit.md) — Ở bước Xem lại bấm Nộp đề nghị; hệ thống mở bước duyệt đầu tiên và niêm phong phiếu.
