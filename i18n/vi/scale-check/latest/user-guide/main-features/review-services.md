---
id: review-services
title: Quản lý dịch vụ
sidebar_label: Quản lý dịch vụ
sidebar_position: 2
description: Theo dõi và quản lý kết quả của các dịch vụ xử lý hóa đơn.
displayed_sidebar: scaleCheckSidebar
---

# Quản lý dịch vụ

Sau khi thiết lập thành công [Quy trình xử lý](./processing-flows.md) và cho chạy thực tế, bạn có thể theo dõi kết quả trả về của từng bước dịch vụ cụ thể tại nhóm **Quản lý dịch vụ**. Điều này giúp bạn kiểm soát chi tiết xem hóa đơn nào bị lỗi hoặc tra cứu không thành công.

## Tải hóa đơn NCC
Vào Quản lý dịch vụ > Tải hóa đơn NCC để theo dõi các yêu cầu tải hóa đơn từ nhà cung cấp.

- Tab **Thống kê**: Xem tổng yêu cầu, thành công, thất bại, hôm nay, tuần này.

![thongke-hoadon-scalecheck](/static/img/thongke-hoadon-scalecheck.png)

- Tab **Chi tiết**: Xem chi tiết từng request, NCC, code, link hóa đơn, trạng thái, thời gian xử lý, số lần thử và lỗi nếu có.

![hoadonchitiet-scalecheck](/static/img/hoadonchitiet-scalecheck.png)

## Tải hóa đơn TCT
Vào Quản lý dịch vụ > Tải hóa đơn TCT để cấu hình tài khoản TCT, tạo lịch tải và xem kết quả tải hóa đơn.

- Tài khoản TCT: Quản lý tài khoản đăng nhập Tổng cục Thuế.

![taihoadon-tct-scalecheck](/static/img/taihoadon-tct-scalecheck.png)

![taotct-scalecheck](/static/img/taotct-scalecheck.png)

- Lịch tải: Tạo lịch tải hóa đơn tự động theo ngày.

![lichtai-scalecheck](/static/img/lichtai-scalecheck.png)

![themlich-scalecheck](/static/img/themlich-scalecheck.png)

- Lịch sử chạy: Kiểm tra kết quả từng lần chạy, gồm số hóa đơn tìm thấy, mới, đã tải, trùng, lỗi và credit.

![lichsuchay-tct](/static/img/lichsuchay-tct.png)

- Hóa đơn đã tải: Tra cứu hóa đơn đã tải về từ TCT.

![hoadondatai-scalecheck](/static/img/hoadondatai-scalecheck.png)

## Tra cứu hóa đơn TCT
Dùng để đối chiếu / xác thực hóa đơn với dữ liệu Tổng cục Thuế. 
- Có thể tra cứu đơn lẻ hoặc hàng loạt:

![tracuu-tct-scalecheck](/static/img/tracuu-tct-scalecheck.png)

- Xem chi tiết tra cứu:

![tracuu-chitiet-scalecheck](/static/img/tracuu-chitiet-scalecheck.png)
## Tra cứu NNT
Dùng để kiểm tra trạng thái hoạt động MST người bán / người nộp thuế.
- Tra cứu đơn lẻ hoặc import Excel (MST):

![tracuu-ntt-scalecheck](/static/img/tracuu-ntt-scalecheck.png)

- Xem lịch sử và kết quả ở tab Chi tiết / Thống kê. Mỗi lần tra cứu trừ credit theo bảng giá dịch vụ:

![tracuuchitiet-nnt](/static/img/tracuuchitiet-nnt.png)

> Mọi hóa đơn hợp lệ và tải thành công từ các dịch vụ trên sẽ được gom chung về một nơi duy nhất. Bạn hãy chuyển sang [Xem danh sách hóa đơn](./invoice-list.md) để quản lý toàn bộ dữ liệu của mình.
