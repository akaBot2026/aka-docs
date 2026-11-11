---
title: "Kết nối tài khoản AkaPay bằng API key"
description: "Bật Tài khoản AkaPay, bấm Thêm tài khoản, dán API key, Tải pipeline, chọn pipeline, chọn trạng thái hóa đơn cần nhận, đặt tên rồi Thêm."
id: connect-akapay
sidebar_label: Kết nối tài khoản AkaPay bằng API key
sidebar_position: 4
---

# Kết nối tài khoản AkaPay bằng API key

Bật Tài khoản AkaPay, bấm Thêm tài khoản, dán API key, Tải pipeline, chọn pipeline, chọn trạng thái hóa đơn cần nhận, đặt tên rồi Thêm.

**Quyền cần có:** admin


## Các bước

1. Trong AkaPay, tạo API key tại **Organization** → **Integration Access**.
2. Mở **Quản trị** → **Hóa đơn đầu vào**; ở ô **Đơn vị**, chọn đơn vị sẽ nhận hóa đơn.
3. Ở thẻ **Tài khoản AkaPay**, bật công tắc nếu đang **Đã tắt**, chọn **Tần suất đồng bộ** (Mỗi 5/15/30 phút hoặc Mỗi giờ; không có Thời gian thực) và **Kiểm tra trên Cổng HĐĐT** (công tắc này quyết định việc kiểm tra trên Cổng HĐĐT cho mọi hóa đơn AkaPay), rồi bấm **Lưu thay đổi** ở đầu trang.
4. Dưới **Tài khoản AkaPay**, bấm **Thêm tài khoản**. Hộp thoại **Kết nối AkaPay** mở ra.
5. Bước **Kết nối bằng API key**: dán **API key**, bấm **Tải pipeline** và chờ "Key này đọc được N pipeline.".
6. Bước **Chọn pipeline**: chọn một **Pipeline** (key chỉ đọc được một pipeline thì pipeline đó được chọn sẵn).
7. Bước **Chọn hóa đơn cần nhận**: đánh dấu các trạng thái theo nhóm Trích xuất, Xác thực, Đối chiếu, Phê duyệt, Hạch toán. Mặc định đã đánh dấu sẵn Trích xuất: **Đạt**. Hóa đơn phải khớp mọi nhóm có đánh dấu (trong một nhóm, khớp bất kỳ giá trị nào); bỏ hết dấu chọn để nhận mọi hóa đơn trong pipeline.
8. Bước **Đặt tên tài khoản**: giữ **Tên tài khoản** mặc định (tên pipeline) hoặc đổi để phân biệt, rồi bấm **Thêm** (hộp thoại không có bước kiểm tra kết nối riêng).

## Xử lý lỗi

- "AkaPay từ chối API key này.": tạo lại key trong AkaPay. "API key này không đọc được pipeline nào.": key không có quyền đọc pipeline nào.
- "Không tải được pipeline" / "Không thêm được tài khoản": thử lại sau.
- Hóa đơn AkaPay đã trích xuất đạt thì dùng kết quả đọc của AkaPay, không đọc lại; trạng thái Xác thực của AkaPay không thay cho kiểm tra trên Cổng HĐĐT.
- Tài khoản AkaPay không sửa được sau khi thêm (dòng chỉ có nút **Gỡ**); muốn đổi key, pipeline hay trạng thái thì gỡ rồi thêm lại. Gỡ tài khoản: hóa đơn sẽ không còn về từ tài khoản đó; hóa đơn đã nhận vẫn được giữ.


## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Tính năng sử dụng

- [Quản trị nguồn hóa đơn đầu vào](../features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.

## Được dùng trong các hướng dẫn

- [Nhận hóa đơn từ pipeline AkaPay](../connect-akapay.md) — Quản trị viên muốn đưa hóa đơn từ một pipeline AkaPay vào Quản lý hóa đơn bằng API key, lọc theo trạng thái trong AkaPay.
- [Bật/tắt nguồn hóa đơn và lưu thiết lập](configure.md) — Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi.
