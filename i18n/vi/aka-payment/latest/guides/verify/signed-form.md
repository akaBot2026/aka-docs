---
title: "Kiểm tra phiếu thanh toán có chữ ký hợp lệ"
description: "Người nhận phiếu thanh toán PDF muốn xác minh chữ ký số của phiếu."
id: signed-form
sidebar_label: Kiểm tra phiếu thanh toán có chữ ký hợp lệ
sidebar_position: 2
---

# Kiểm tra phiếu thanh toán có chữ ký hợp lệ

Người nhận phiếu thanh toán PDF muốn xác minh chữ ký số của phiếu.

**Khi nào sử dụng:** Người nhận PDF phiếu thanh toán muốn biết có bị sửa hay không.


Việc kiểm tra chạy trong trình duyệt, tệp không bị gửi lên máy chủ.


## Các cách thực hiện

- [Xác thực phiếu thanh toán đã ký](how-to/signed-form.md) — Mở trang xác thực (không cần đăng nhập), thả tệp PDF phiếu thanh toán; chữ ký số được kiểm tra ngay trong trình duyệt.

## Các bước

[Xác thực phiếu thanh toán đã ký](how-to/signed-form.md)

1. [Xác thực phiếu thanh toán đã ký](how-to/signed-form.md)
   1. Ở thanh bên, nhóm **Hỗ trợ**, bấm **Xác thực chứng từ đã ký**; trang mở ở tab mới và không cần đăng nhập (đường dẫn `/verify`).
   2. Kéo thả hoặc **chọn tệp** PDF phiếu thanh toán đã tải xuống từ ePayment (chỉ nhận .pdf). Tệp không rời khỏi máy; trình duyệt chỉ tải về các chứng thư gốc công khai của ePayment để đối chiếu.
   3. Chờ "Đang kiểm tra chữ ký…". Nếu lỗi kỹ thuật, trang báo "Không kiểm tra được tệp. Vui lòng thử lại."
   4. Nếu hợp lệ, trang hiện "Phiếu hợp lệ, chưa bị thay đổi" cùng các mục: Phiếu thanh toán (Mã đề nghị, Số chứng từ, Phiên bản tài liệu, Ngày tạo), Chữ ký (Chuẩn, Ký lúc, Dấu thời gian tin cậy, Hàm băm, Thuật toán), Chứng thư người ký (kèm nhãn "Tự ký" với chứng thư tự ký, thường gặp ở môi trường thử nghiệm) và, khi có nhiều chứng thư, Chuỗi chứng thư.
   5. Nếu không, trang hiện "Không xác thực được" kèm một lý do: tệp không có chữ ký số; tệp đã được thêm nội dung sau khi ký; tệp bị sửa sau khi ký hoặc chữ ký bị hỏng; chữ ký còn nguyên nhưng chứng thư người ký không nằm trong danh sách ePayment tin cậy; chứng thư không còn hiệu lực tại thời điểm ký.

## Nếu có sự cố

### [Xác thực phiếu thanh toán đã ký](how-to/signed-form.md)

- Cần phiếu đã ký mới ra kết quả hợp lệ: tải phiếu từ trang chi tiết đề nghị đã nộp bằng **Tải phiếu đã ký** (hoặc **Xuất file** ở dòng trong Đề nghị của tôi); phiếu của đề nghị chưa nộp không có chữ ký.
