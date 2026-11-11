---
title: "Tải hóa đơn đầu vào định kỳ từ Cổng HĐĐT"
description: "Quản trị viên muốn hệ thống tự tải hóa đơn đầu vào của một mã số thuế từ Cổng hóa đơn điện tử Tổng cục Thuế theo lịch."
id: connect-tax-portal
sidebar_label: Tải hóa đơn đầu vào định kỳ từ Cổng HĐĐT
sidebar_position: 6
---

# Tải hóa đơn đầu vào định kỳ từ Cổng HĐĐT

Quản trị viên muốn hệ thống tự tải hóa đơn đầu vào của một mã số thuế từ Cổng hóa đơn điện tử Tổng cục Thuế theo lịch.

**Khi nào sử dụng:**

- Công ty muốn mọi hóa đơn mua vào trên Cổng HĐĐT tự về hệ thống mà không chờ nhà cung cấp gửi.
- Quản trị viên muốn tải định kỳ hóa đơn của một mã số thuế từ Cổng HĐĐT.

**Quyền cần có:** admin


Mỗi tài khoản Cổng HĐĐT là tài khoản tra cứu của một mã số thuế, thuộc một đơn vị.


## Các cách thực hiện

- [Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế](how-to/connect-tax-portal.md) — Bật Tải định kỳ từ TCT, đặt lịch tải, phạm vi, loại hóa đơn, ký hiệu mẫu số; thêm tài khoản Cổng HĐĐT của đơn vị, Kiểm tra kết nối rồi Thêm.

## Các bước

[Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế](how-to/connect-tax-portal.md)

Điều kiện khả dụng: kiểm tra yêu cầu về gói và quyền

1. [Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế](how-to/connect-tax-portal.md)
   1. Mở **Quản trị** → **Hóa đơn đầu vào**; ở ô **Đơn vị**, chọn đơn vị sở hữu mã số thuế cần tải hóa đơn.
   2. Ở thẻ **Tải định kỳ từ TCT**, bật công tắc nếu đang **Đã tắt**.
   3. Đặt **Lịch tải** (Hằng ngày, 2 lần mỗi ngày, Hằng tuần (thứ Hai)) và giờ ở ô **lúc**; **Phạm vi mỗi lần tải** (Chỉ hôm nay, 3, 7 hoặc 30 ngày gần nhất); **Loại hóa đơn** (Có mã của CQT, Không có mã, Khởi tạo từ máy tính tiền); **Ký hiệu mẫu số hóa đơn** (1–9). Bấm **Lưu thay đổi**.
   4. Dưới **Tài khoản Cổng HĐĐT**, bấm **Thêm tài khoản**. Hộp thoại **Thêm tài khoản Cổng HĐĐT** mở ra (tài khoản tra cứu trên hoadondientu.gdt.gov.vn).
   5. Nhập **Tên đơn vị** (tên theo đăng ký thuế, không bắt buộc), **Tên đăng nhập cổng** (thường là MST) và **Mật khẩu**.
   6. Bấm **Kiểm tra kết nối** và chờ "Kết nối thành công", rồi bấm **Thêm**. Tài khoản hiện trong danh sách với trạng thái Chưa tải, Đang tải, Đã tải, Tải một phần, Lỗi xác thực hoặc Không kết nối được (kèm thời điểm tải lần cuối và lỗi gần nhất nếu có).
   7. Muốn tải ngay không chờ lịch: ở **Quản lý hóa đơn**, bấm **Đồng bộ ngay** trên thẻ **Tải định kỳ từ TCT** (chỉ quản trị viên và người vận hành thấy nút này; lệnh chạy cho mọi tài khoản Cổng HĐĐT đang không tải của tổ chức).

## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Nếu có sự cố

### [Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế](how-to/connect-tax-portal.md)

- "Lỗi xác thực" hoặc "Tài khoản bị khóa": kiểm tra lại tên đăng nhập và mật khẩu trên hoadondientu.gdt.gov.vn. "Không kết nối được": Cổng HĐĐT không phản hồi, thử lại sau.
- "Tên đăng nhập cổng này đã được khai báo.": tài khoản đã có, dùng **Sửa** để đổi mật khẩu (để trống để giữ nguyên).
- **Đồng bộ ngay** bỏ qua tài khoản đang **Lỗi xác thực** (nút bị mờ khi mọi tài khoản đều lỗi); sửa mật khẩu trước. "Không bắt đầu được đồng bộ": nguồn đang tắt hoặc lỗi tạm thời.
