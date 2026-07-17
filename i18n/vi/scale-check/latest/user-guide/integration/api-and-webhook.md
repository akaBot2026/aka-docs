---
id: api-and-webhook
title: Tích hợp API và Webhook
sidebar_label: API và Webhook
sidebar_position: 1
description: Hướng dẫn tích hợp API và Webhook trên ScaleCheck.
displayed_sidebar: scaleCheckSidebar
---

# Tích hợp API và Webhook

ScaleCheck hỗ trợ tích hợp với các hệ thống bên ngoài thông qua API và Webhook, giúp doanh nghiệp tự động hóa việc gửi yêu cầu xử lý, nhận kết quả và đồng bộ dữ liệu hóa đơn với các hệ thống nội bộ như ERP, phần mềm kế toán hoặc hệ thống quản trị vận hành.

## Tích hợp API

API là phương thức để hệ thống của khách hàng chủ động gọi vào ScaleCheck nhằm gửi yêu cầu xử lý hoặc lấy dữ liệu. Thay vì thao tác thủ công trên giao diện, hệ thống bên ngoài có thể gọi API để kích hoạt các nghiệp vụ đã được ScaleCheck hỗ trợ.

Một số trường hợp sử dụng phổ biến:
- Gửi thông tin hóa đơn cần tra cứu hoặc xác minh.
- Kích hoạt quy trình xử lý hóa đơn đã được thiết lập.
- Lấy kết quả xử lý hóa đơn về hệ thống nội bộ.
- Đồng bộ trạng thái hóa đơn giữa ScaleCheck và phần mềm kế toán/ERP.

Bạn có thể xem thông tin tích hợp tại menu **Quản lý tích hợp** > **Tài liệu API**.

## Webhook

Webhook là cơ chế để ScaleCheck chủ động gửi thông báo hoặc kết quả xử lý về hệ thống của khách hàng khi có sự kiện phát sinh. Khách hàng cấu hình một đường dẫn nhận dữ liệu, sau đó ScaleCheck sẽ gửi dữ liệu đến đường dẫn này khi có kết quả mới.

Một số sự kiện có thể dùng Webhook:
- Hóa đơn được tải thành công.
- Hóa đơn tra cứu TCT thành công hoặc thất bại.
- Quy trình xử lý hoàn thành, hoàn thành một phần hoặc thất bại.
- Có thay đổi trạng thái cần đồng bộ về hệ thống khách hàng.

