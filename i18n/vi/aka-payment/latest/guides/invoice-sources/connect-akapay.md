---
title: "Nhận hóa đơn từ pipeline AkaPay"
description: "Quản trị viên muốn đưa hóa đơn từ một pipeline AkaPay vào Quản lý hóa đơn bằng API key, lọc theo trạng thái trong AkaPay."
id: connect-akapay
sidebar_label: Nhận hóa đơn từ pipeline AkaPay
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Nhận hóa đơn từ pipeline AkaPay

Quản trị viên muốn đưa hóa đơn từ một pipeline AkaPay vào Quản lý hóa đơn bằng API key, lọc theo trạng thái trong AkaPay.

**Khi nào sử dụng:**

- Công ty đã xử lý hóa đơn trong AkaPay và muốn dùng chúng để lập đề nghị thanh toán.
- Quản trị viên muốn đưa hóa đơn từ một pipeline AkaPay vào Quản lý hóa đơn.

**Quyền cần có:** admin


Mỗi tài khoản AkaPay là một API key đọc một pipeline; hệ thống kiểm tra định kỳ và nhận hóa đơn khớp các trạng thái đã chọn.


## Các cách thực hiện

- [Kết nối tài khoản AkaPay bằng API key](how-to/connect-akapay.md) — Bật Tài khoản AkaPay, bấm Thêm tài khoản, dán API key, Tải pipeline, chọn pipeline, chọn trạng thái hóa đơn cần nhận, đặt tên rồi Thêm.

## Các bước

[Kết nối tài khoản AkaPay bằng API key](how-to/connect-akapay.md)

Điều kiện khả dụng: kiểm tra yêu cầu về gói và quyền

1. [Kết nối tài khoản AkaPay bằng API key](how-to/connect-akapay.md)
   1. Trong AkaPay, tạo API key tại **Organization** → **Integration Access**.
   2. Mở **Quản trị** → **Hóa đơn đầu vào**; ở ô **Đơn vị**, chọn đơn vị sẽ nhận hóa đơn.
   3. Ở thẻ **Tài khoản AkaPay**, bật công tắc nếu đang **Đã tắt**, chọn **Tần suất đồng bộ** (Mỗi 5/15/30 phút hoặc Mỗi giờ; không có Thời gian thực) và **Kiểm tra trên Cổng HĐĐT** (công tắc này quyết định việc kiểm tra trên Cổng HĐĐT cho mọi hóa đơn AkaPay), rồi bấm **Lưu thay đổi** ở đầu trang.
   4. Dưới **Tài khoản AkaPay**, bấm **Thêm tài khoản**. Hộp thoại **Kết nối AkaPay** mở ra.
   5. Bước **Kết nối bằng API key**: dán **API key**, bấm **Tải pipeline** và chờ "Key này đọc được N pipeline.".
   6. Bước **Chọn pipeline**: chọn một **Pipeline** (key chỉ đọc được một pipeline thì pipeline đó được chọn sẵn).
   7. Bước **Chọn hóa đơn cần nhận**: đánh dấu các trạng thái theo nhóm Trích xuất, Xác thực, Đối chiếu, Phê duyệt, Hạch toán. Mặc định đã đánh dấu sẵn Trích xuất: **Đạt**. Hóa đơn phải khớp mọi nhóm có đánh dấu (trong một nhóm, khớp bất kỳ giá trị nào); bỏ hết dấu chọn để nhận mọi hóa đơn trong pipeline.
   8. Bước **Đặt tên tài khoản**: giữ **Tên tài khoản** mặc định (tên pipeline) hoặc đổi để phân biệt, rồi bấm **Thêm** (hộp thoại không có bước kiểm tra kết nối riêng).

## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Nếu có sự cố

### [Kết nối tài khoản AkaPay bằng API key](how-to/connect-akapay.md)

- "AkaPay từ chối API key này.": tạo lại key trong AkaPay. "API key này không đọc được pipeline nào.": key không có quyền đọc pipeline nào.
- "Không tải được pipeline" / "Không thêm được tài khoản": thử lại sau.
- Hóa đơn AkaPay đã trích xuất đạt thì dùng kết quả đọc của AkaPay, không đọc lại; trạng thái Xác thực của AkaPay không thay cho kiểm tra trên Cổng HĐĐT.
- Tài khoản AkaPay không sửa được sau khi thêm (dòng chỉ có nút **Gỡ**); muốn đổi key, pipeline hay trạng thái thì gỡ rồi thêm lại. Gỡ tài khoản: hóa đơn sẽ không còn về từ tài khoản đó; hóa đơn đã nhận vẫn được giữ.
