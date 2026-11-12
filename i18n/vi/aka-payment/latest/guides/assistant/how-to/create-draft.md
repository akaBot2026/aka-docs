---
title: "Lập đề nghị bằng trợ lý AI"
description: "Mở Trợ lý AI, chọn kỹ năng /hoa-don, /ban-ke hoặc /nhap-tay, thả hóa đơn hoặc bản kê, trả lời biểu mẫu và bấm Đồng ý ở thẻ xác nhận."
id: create-draft
sidebar_label: Lập đề nghị bằng trợ lý AI
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Lập đề nghị bằng trợ lý AI

Mở Trợ lý AI, chọn kỹ năng /hoa-don, /ban-ke hoặc /nhap-tay, thả hóa đơn hoặc bản kê, trả lời biểu mẫu và bấm Đồng ý ở thẻ xác nhận.

## Trước khi bắt đầu

- **[Giới hạn khi tải chứng từ](../../../reference/extraction/file-limits.md)**\
  Thêm từ hóa đơn tối đa 50 hóa đơn mỗi lần; nhập bộ chứng từ tối đa 50 tệp và 100 MB; tệp tải cho trợ lý tối đa 10 MB.


## Các bước

1. Bấm nút ✨ **Trợ lý AI** ở đầu trang (hoặc bong bóng nổi, tùy cách hiển thị) để mở khung chat "Tôi có thể giúp gì cho bạn?".
2. Chọn gợi ý **Lập đề nghị từ hóa đơn** (/hoa-don), **Lập đề nghị từ bản kê và hóa đơn** (/ban-ke) hoặc **Lập đề nghị bằng hỏi đáp** (/nhap-tay, khi không có tệp); hoặc bấm **+** → **Kỹ năng**, hoặc gõ / trong ô nhập của khung chat. Lệnh được ghi vào ô nhập; viết thêm yêu cầu nếu cần rồi gửi.
3. Đính kèm tệp bằng **+** → **Đính kèm tệp** hoặc kéo thả vào khung chat (mỗi tệp tối đa 10 MB, tệp được giữ tạm 24 giờ).
4. Theo dõi các thẻ trợ lý hiện trong khung chat: phân loại tệp (theo tên tệp, rồi theo nội dung nếu chưa rõ), đọc từng hóa đơn, với /ban-ke thì đọc bản kê và ghép mỗi hóa đơn với một dòng. Trả lời khi trợ lý hỏi loại đề nghị, hóa đơn không khớp dòng nào, hoặc hiện biểu mẫu **Điền thông tin còn thiếu** (bấm **Gửi** hoặc **Bỏ qua**). Người đề nghị, đơn vị, ngày đề nghị, kỳ ngân sách và giá trị mặc định được tự điền như khi lập trên màn hình.
5. Ở thẻ "Xác nhận: Tạo đề nghị nháp", kiểm tra loại đề nghị, các khoản chi (tối đa 50), phần "Thông tin từ ứng dụng (không phải từ trợ lý)" và các giá trị "Chưa khớp" (sẽ để trống để bạn chọn lại); khi nút còn ghi **Chờ đọc hóa đơn** thì đợi đọc xong. Bấm **Đồng ý** để trợ lý tạo bản nháp, hoặc **Hủy**.
6. Bấm **Mở đề nghị** để mở bản nháp và kiểm tra trước khi nộp; trợ lý không nộp thay khi bạn chưa đồng ý và không bao giờ ký. Thẻ hóa đơn đơn lẻ cũng có nút **Tạo đề nghị từ hóa đơn này**.

## Xử lý lỗi

- "Không tạo được đề nghị. Tệp có thể đã hết hạn" hoặc tệp không còn sau 24 giờ: thả lại tệp vào khung chat. "Đã tạo đề nghị nhưng chưa gắn được tệp hóa đơn": tải hóa đơn lên trong đề nghị. Quá 50 tệp đang chờ trong một khung chat: gắn bớt vào đề nghị hoặc bắt đầu **Cuộc trò chuyện mới**. Xem [Giới hạn khi tải chứng từ](../../../reference/extraction/file-limits.md).
- Bản kê có hơn 50 dòng: trợ lý hỏi để tách thành nhiều đề nghị.
- "Chưa cấu hình mô hình AI" hoặc "Mô hình AI này không chạy được trợ lý": nhờ quản trị viên ([Chọn mô hình AI cho trợ lý](../../admin/how-to/set-assistant-model.md)).


## Điều kiện cần kiểm tra

- [Trợ lý AI đã được bật cho vai trò của bạn](../../../troubleshooting/assistant/tools-enabled.md) — Quản trị viên đã bật ít nhất một công cụ của trợ lý mà vai trò của bạn được dùng, nên nút Trợ lý AI hiện ra.

## Tính năng sử dụng

- [Kỹ năng của trợ lý AI](../features/skills.md) — Công thức soạn sẵn gồm các bước viết bằng ngôn ngữ tự nhiên; người dùng gọi bằng lệnh bắt đầu bằng dấu / trong khung chat, quản trị viên quản lý.

## Được dùng trong các hướng dẫn

- [Nhờ trợ lý AI lập đề nghị](../create-draft.md) — Người dùng muốn trợ lý đọc hóa đơn hoặc bản kê (hoặc hỏi đáp để điền thông tin khi không có tệp) và dựng sẵn đề nghị nháp.
