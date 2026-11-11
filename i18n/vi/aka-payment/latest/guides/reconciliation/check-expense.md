---
title: "Đối soát hóa đơn và chứng từ của chi phí"
description: "Người tạo muốn hệ thống so khớp hóa đơn với các chứng từ đi kèm trước khi nộp."
id: check-expense
sidebar_label: Đối soát hóa đơn và chứng từ của chi phí
sidebar_position: 2
---

# Đối soát hóa đơn và chứng từ của chi phí

Người tạo muốn hệ thống so khớp hóa đơn với các chứng từ đi kèm trước khi nộp.

**Khi nào sử dụng:**

- Người dùng muốn biết hóa đơn và báo giá có khớp nhau không.
- Người dùng muốn chạy đối soát chứng từ trước khi nộp.


Kiểm tra bộ chứng từ của từng chi phí theo quy tắc của loại đề nghị.


## Các cách thực hiện

- [Đối soát chứng từ của một chi phí](how-to/check-expense.md) — Với loại đề nghị bật đối soát, bấm Đối soát ở dòng chi phí (hoặc Đối soát hàng loạt) rồi đọc kết quả; hệ thống cũng tự đối soát ở vài thời điểm.

## Trước khi bắt đầu

- **[Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md)** — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng\
  Mỗi bước của quy trình tạo có trường bắt buộc; không đủ thì bấm Tiếp tục sẽ báo "Vui lòng sửa các trường được đánh dấu".

## Các bước

[Đối soát chứng từ của một chi phí](how-to/check-expense.md)

1. Kiểm tra [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md).
   Trang "Tạo đề nghị thanh toán" hiển thị số chứng từ (ví dụ TT.19102026.00001) và nhãn "Bản nháp" ở góc phải thanh Quy trình tạo.
   Nếu chưa đáp ứng: làm theo [Mở đề nghị mới và điền bước Tổng quan](../requests/how-to/start-draft.md) bên dưới.
2. [Mở đề nghị mới và điền bước Tổng quan](../requests/how-to/start-draft.md) — chỉ khi [Đang mở một đề nghị nháp](../../troubleshooting/requests/draft-open.md) chưa được đáp ứng
   1. Bấm **Tạo đề nghị thanh toán** ở đầu trang (mở loại đề nghị mặc định); mũi tên bên cạnh mở danh sách các loại đề nghị đang bật để tìm và chọn (dữ liệu mẫu: Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác; danh sách thực tế do quản trị viên cấu hình). Một bản nháp được tạo ngay.
      ![Đầu trang Đề nghị của tôi: (1) nút Tạo đề nghị thanh toán và danh sách loại đề nghị mở từ mũi tên bên cạnh (Thanh toán, Tạm ứng, Hoàn ứng, Thanh toán trả trước, Thanh toán khác)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. Ở bước **1 Tổng quan**, nhập **Mục đích yêu cầu** (2); kiểm tra **Người yêu cầu** (là bạn), **Đơn vị duyệt** (đơn vị của bạn), **Đối tượng thanh toán** (đã điền sẵn) và các trường khác như Ngày yêu cầu, Số chứng từ, Công ty, Kỳ ngân sách, Thời hạn thanh toán, Mô tả yêu cầu. Đơn vị duyệt cũng là Bộ phận chịu chi phí mặc định của các dòng chi phí.
      ![Bước 1 Tổng quan của bản nháp: (2) ô Mục đích yêu cầu; Người yêu cầu, Đơn vị duyệt, Kỳ ngân sách và Đối tượng thanh toán đã điền sẵn; (3) nút Tiếp tục](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Bấm **Tiếp tục** (3) để sang bước **2 Bảng kê chi phí**.
3. [Đối soát chứng từ của một chi phí](how-to/check-expense.md)
   1. Chỉ làm khi loại đề nghị bật đối soát (Cấu hình → Loại đề nghị → tab **Luồng đề nghị** → bước Bảng kê chi phí → mục Đối soát → **Bật đối soát**); khi tắt, bảng chi phí không có cột **Kết quả đối soát**. Loại Thanh toán trong dữ liệu mẫu bật đối soát và tra cứu hóa đơn trên Cổng HĐĐT.
   2. Đính kèm chứng từ cho dòng chi phí (nút bị khóa với gợi ý "Đính kèm tệp để đối soát" khi dòng chưa có tệp).
   3. Ở cột **Kết quả đối soát**, bấm **Đối soát** của dòng.
   4. Chờ "Đang đối soát…"; bảng tự cập nhật khi có kết quả, kể cả khi bạn tải lại trang hoặc mở trên thiết bị khác. Kết quả hiện là "Đạt", "N cần xem", "N cần xử lý", "Không đạt" hoặc "Lỗi"; chưa chạy thì ghi "Chưa đối soát".
   5. Bấm vào kết quả để mở hộp thoại **Kết quả đối soát** với các tab **Tổng quan**, **Chứng từ**, **Đối soát** (và **Hóa đơn** khi bật tra cứu hóa đơn: "NNT đang hoạt động", "Hóa đơn đã được thông báo phát hành", "Kiểm tra chữ ký số bên bán"); bấm **Đối soát lại** để chạy lại sau khi sửa chứng từ.

## Nếu có sự cố

### [Đối soát chứng từ của một chi phí](how-to/check-expense.md)

- Không chạy được: "Không đối soát được — vui lòng thử lại." Chi phí chưa đối soát, đang chạy, lỗi hoặc đã sửa sau lần đối soát cuối sẽ chặn nộp (Xem lại ghi "Chưa đủ điều kiện"): xem [Điều kiện để nộp đề nghị](../../reference/requests/submission.md). Quy tắc bắt buộc không đạt chặn cả nút **Tiếp tục** ở Bảng kê chi phí: xem [Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../reference/requests/draft-validation.md).
