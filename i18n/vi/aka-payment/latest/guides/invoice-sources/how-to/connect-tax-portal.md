---
title: "Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế"
description: "Bật Tải định kỳ từ TCT, đặt lịch tải, phạm vi, loại hóa đơn, ký hiệu mẫu số; thêm tài khoản Cổng HĐĐT của đơn vị, Kiểm tra kết nối rồi Thêm."
id: connect-tax-portal
sidebar_label: Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế
sidebar_position: 6
---

# Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế

Bật Tải định kỳ từ TCT, đặt lịch tải, phạm vi, loại hóa đơn, ký hiệu mẫu số; thêm tài khoản Cổng HĐĐT của đơn vị, Kiểm tra kết nối rồi Thêm.

**Quyền cần có:** admin


## Các bước

1. Mở **Quản trị** → **Hóa đơn đầu vào**; ở ô **Đơn vị**, chọn đơn vị sở hữu mã số thuế cần tải hóa đơn.
2. Ở thẻ **Tải định kỳ từ TCT**, bật công tắc nếu đang **Đã tắt**.
3. Đặt **Lịch tải** (Hằng ngày, 2 lần mỗi ngày, Hằng tuần (thứ Hai)) và giờ ở ô **lúc**; **Phạm vi mỗi lần tải** (Chỉ hôm nay, 3, 7 hoặc 30 ngày gần nhất); **Loại hóa đơn** (Có mã của CQT, Không có mã, Khởi tạo từ máy tính tiền); **Ký hiệu mẫu số hóa đơn** (1–9). Bấm **Lưu thay đổi**.
4. Dưới **Tài khoản Cổng HĐĐT**, bấm **Thêm tài khoản**. Hộp thoại **Thêm tài khoản Cổng HĐĐT** mở ra (tài khoản tra cứu trên hoadondientu.gdt.gov.vn).
5. Nhập **Tên đơn vị** (tên theo đăng ký thuế, không bắt buộc), **Tên đăng nhập cổng** (thường là MST) và **Mật khẩu**.
6. Bấm **Kiểm tra kết nối** và chờ "Kết nối thành công", rồi bấm **Thêm**. Tài khoản hiện trong danh sách với trạng thái Chưa tải, Đang tải, Đã tải, Tải một phần, Lỗi xác thực hoặc Không kết nối được (kèm thời điểm tải lần cuối và lỗi gần nhất nếu có).
7. Muốn tải ngay không chờ lịch: ở **Quản lý hóa đơn**, bấm **Đồng bộ ngay** trên thẻ **Tải định kỳ từ TCT** (chỉ quản trị viên và người vận hành thấy nút này; lệnh chạy cho mọi tài khoản Cổng HĐĐT đang không tải của tổ chức).

## Xử lý lỗi

- "Lỗi xác thực" hoặc "Tài khoản bị khóa": kiểm tra lại tên đăng nhập và mật khẩu trên hoadondientu.gdt.gov.vn. "Không kết nối được": Cổng HĐĐT không phản hồi, thử lại sau.
- "Tên đăng nhập cổng này đã được khai báo.": tài khoản đã có, dùng **Sửa** để đổi mật khẩu (để trống để giữ nguyên).
- **Đồng bộ ngay** bỏ qua tài khoản đang **Lỗi xác thực** (nút bị mờ khi mọi tài khoản đều lỗi); sửa mật khẩu trước. "Không bắt đầu được đồng bộ": nguồn đang tắt hoặc lỗi tạm thời.


## Lưu ý

- **[Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị](../../../reference/invoice-sources/unit-scope.md)**\
  Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

## Tính năng sử dụng

- [Quản trị nguồn hóa đơn đầu vào](../features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.

## Được dùng trong các hướng dẫn

- [Tải hóa đơn đầu vào định kỳ từ Cổng HĐĐT](../connect-tax-portal.md) — Quản trị viên muốn hệ thống tự tải hóa đơn đầu vào của một mã số thuế từ Cổng hóa đơn điện tử Tổng cục Thuế theo lịch.
- [Bật/tắt nguồn hóa đơn và lưu thiết lập](configure.md) — Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi.
