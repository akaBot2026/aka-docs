---
id: scaleconnect
title: Nhận tài liệu bằng ScaleConnect
sidebar_label: ScaleConnect
sidebar_position: 2
description: Kết nối nguồn bên ngoài để tài liệu của nguồn đó được xử lý tự động.
displayed_sidebar: akaXtractSidebar
---

# Nhận tài liệu bằng ScaleConnect

ScaleConnect kết nối một nguồn tài liệu bên ngoài với một Pipeline.

**Trước khi bắt đầu:** bạn cần quyền quản lý ScaleConnect, một dịch vụ ScaleConnect đã cấu hình, tài khoản ở nguồn bên ngoài và một Pipeline Published.

## Kết nối một nguồn

1. Trong Pipeline, mở `ScaleConnect` và chọn `Connect Service`.
2. Cho phép popup. Trong cửa sổ kết nối, chọn dịch vụ, đăng nhập và cấp quyền.
3. Gửi một tài liệu mẫu từ nguồn.

**Kết quả:** bảng hiển thị `ACTIVE` và xuất hiện thông báo `ScaleConnect connection registered and subscribed.` Kiểm tra `Last Event` và `Status`, rồi tìm Document và Job trong Pipeline.

## Ngắt kết nối

Chọn biểu tượng thùng rác ở cuối dòng kết nối, rồi chọn `Disconnect`. Thao tác này không xóa tài liệu đã nhập và không hủy Job đang chạy.

:::note
Một kết nối chỉ liên kết được với một Pipeline trong cùng công ty. `PENDING` hoặc `FAILED` nghĩa là kết nối chưa sẵn sàng. Hãy kiểm tra quyền ở nguồn, và liên hệ hỗ trợ kèm mã kết nối nếu bảng không giải thích nguyên nhân. Không tạo kết nối lặp lại.
:::
