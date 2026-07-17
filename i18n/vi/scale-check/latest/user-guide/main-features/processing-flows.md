---
id: processing-flows
title: Thiết lập quy trình xử lý
sidebar_label: Quy trình xử lý
sidebar_position: 1
description: Hướng dẫn thiết lập quy trình xử lý.
displayed_sidebar: scaleCheckSidebar
---

# Thiết lập quy trình xử lý

**Quy trình xử lý** giúp bạn thiết lập một chuỗi các thao tác tự động nối tiếp nhau.

Ví dụ: *Tải hóa đơn TCT ➞ Kiểm tra hợp lệ ➞ Tra cứu người nộp thuế.*

## Xem danh sách quy trình
1. Vào menu **Quản lý dịch vụ** > **Quy trình xử lý**.
2. Tại tab **Pipeline của tôi**, xem danh sách các quy trình hiện có.
3. Có thể lọc theo trạng thái hoặc loại quy trình.

## Tạo quy trình mới

![pipeline-scalecheck](/static/img/pipeline-scalecheck.png)

1. Bấm **Tạo pipeline**.
2. Nhập **Tên pipeline** và **Mô tả**.
3. Bật **Đang hoạt động** nếu quy trình được phép chạy.
4. Có thể chọn **Mẫu gợi ý** để hệ thống điền nhanh các bước.
5. Bấm **Thêm bước** để bắt đầu dựng pipeline.
6. Với từng bước, chọn dịch vụ cần chạy và cấu hình dữ liệu đầu vào.
7. Bấm **Lưu** để hoàn tất.

Khi cấu hình dữ liệu cho từng bước, có thể chọn một trong các cách nhập:
- **Cố định**: Nhập sẵn một giá trị.
- **Nhập khi chạy**: Dùng để chạy thử quy trình.
- **Lấy từ bước trước**: Tự động lấy dữ liệu từ kết quả của bước phía trên.

![taopipeline-scalecheck](/static/img/taopipeline-scalecheck.png)

## Theo dõi quy trình
Sau khi quy trình hoặc lịch tải được kích hoạt, kiểm tra lịch sử chạy để biết kết quả xử lý.

1. Vào **Quy trình xử lý**.
2. Chọn tab **Lịch sử chạy**.

![lichsuchay-scalecheck](/static/img/lichsuchay-scalecheck.png)

3. Kiểm tra trạng thái từng lần chạy và xử lý các dòng lỗi nếu có.

Các trạng thái thường gặp:
- **Hoàn thành**: Quy trình chạy thành công.
- **Hoàn thành một phần**: Một phần dữ liệu xử lý thành công, một phần phát sinh lỗi.
- **Thất bại**: Quy trình không xử lý thành công, cần xem chi tiết lỗi.

>Kiểm tra chi tiết lỗi của từng bước tại phần [Quản lý Dịch vụ](./review-services.md).
