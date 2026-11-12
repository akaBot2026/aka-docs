---
title: "Đối soát chứng từ của một chi phí"
description: "Với loại đề nghị bật đối soát, bấm Đối soát ở dòng chi phí (hoặc Đối soát hàng loạt) rồi đọc kết quả; hệ thống cũng tự đối soát ở vài thời điểm."
id: check-expense
sidebar_label: Đối soát chứng từ của một chi phí
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Đối soát chứng từ của một chi phí

Với loại đề nghị bật đối soát, bấm Đối soát ở dòng chi phí (hoặc Đối soát hàng loạt) rồi đọc kết quả; hệ thống cũng tự đối soát ở vài thời điểm.


## Các bước

1. Chỉ làm khi loại đề nghị bật đối soát (Cấu hình → Loại đề nghị → tab **Luồng đề nghị** → bước Bảng kê chi phí → mục Đối soát → **Bật đối soát**); khi tắt, bảng chi phí không có cột **Kết quả đối soát**. Loại Thanh toán trong dữ liệu mẫu bật đối soát và tra cứu hóa đơn trên Cổng HĐĐT.
2. Đính kèm chứng từ cho dòng chi phí (nút bị khóa với gợi ý "Đính kèm tệp để đối soát" khi dòng chưa có tệp).
3. Ở cột **Kết quả đối soát**, bấm **Đối soát** của dòng.
   - Để chạy nhiều dòng: bấm mũi tên cạnh **Thêm chi phí** (trên điện thoại: menu ⋯) rồi chọn **Đối soát hàng loạt**; chỉ các chi phí chưa đối soát hoặc đã đổi dữ liệu được chạy (không có gì cần chạy thì báo "Mọi chi phí đã được đối soát trên dữ liệu mới nhất.").
   - Lưu ý: hệ thống cũng tự đối soát lại khi một hóa đơn vừa đọc xong điền vào dòng, và khi mở bước **4 Xem lại** (các chi phí có tệp chưa đối soát hoặc đã đổi).
4. Chờ "Đang đối soát…"; bảng tự cập nhật khi có kết quả, kể cả khi bạn tải lại trang hoặc mở trên thiết bị khác. Kết quả hiện là "Đạt", "N cần xem", "N cần xử lý", "Không đạt" hoặc "Lỗi"; chưa chạy thì ghi "Chưa đối soát".
5. Bấm vào kết quả để mở hộp thoại **Kết quả đối soát** với các tab **Tổng quan**, **Chứng từ**, **Đối soát** (và **Hóa đơn** khi bật tra cứu hóa đơn: "NNT đang hoạt động", "Hóa đơn đã được thông báo phát hành", "Kiểm tra chữ ký số bên bán"); bấm **Đối soát lại** để chạy lại sau khi sửa chứng từ.

## Xử lý lỗi

- Không chạy được: "Không đối soát được — vui lòng thử lại." Chi phí chưa đối soát, đang chạy, lỗi hoặc đã sửa sau lần đối soát cuối sẽ chặn nộp (Xem lại ghi "Chưa đủ điều kiện"): xem [Điều kiện để nộp đề nghị](../../../reference/requests/submission.md). Quy tắc bắt buộc không đạt chặn cả nút **Tiếp tục** ở Bảng kê chi phí: xem [Điều kiện để đi tiếp trong quy trình tạo đề nghị](../../../reference/requests/draft-validation.md).


## Điều kiện cần kiểm tra

- [Đang mở một đề nghị nháp](../../../troubleshooting/requests/draft-open.md) — Một đề nghị đang ở trạng thái Bản nháp trong quy trình tạo và đã có số chứng từ.

## Được dùng trong các hướng dẫn

- [Đối soát hóa đơn và chứng từ của chi phí](../check-expense.md) — Người tạo muốn hệ thống so khớp hóa đơn với các chứng từ đi kèm trước khi nộp.
- [Thêm chi phí từ hóa đơn](../../requests/how-to/add-invoice-expense.md) — Ở bước Bảng kê chi phí, chọn Thêm từ hóa đơn, tải hóa đơn lên hoặc chọn từ danh sách Quản lý hóa đơn; mỗi hóa đơn thành một dòng chi phí.
