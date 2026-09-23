---
id: report-templates
title: Mẫu báo cáo
sidebar_label: Mẫu báo cáo
sidebar_position: 4
description: Tạo mẫu báo cáo và xuất dữ liệu hóa đơn ra Excel.
displayed_sidebar: scaleCheckSidebar
---

# Mẫu báo cáo
Sau khi hóa đơn đã được [thu thập và xác thực](./review-services.md) rồi gom về [Danh sách hoá đơn](./invoice-list.md), dùng mẫu báo cáo để xuất dữ liệu ra Excel theo đúng bố cục bạn cần.

Mẫu báo cáo giúp bạn ánh xạ mỗi cột trong file Excel với một trường dữ liệu của hóa đơn, để có thể xuất báo cáo sẵn dùng bất cứ lúc nào thay vì phải dựng lại từ đầu.

## Xem danh sách mẫu
1. Vào Mẫu báo cáo.
2. Xem các mẫu hiện có, gồm phạm vi (**Mặc định** — dùng chung cho mọi người, hoặc **Của tôi** — riêng của bạn), khách hàng mà mẫu thuộc về (nếu mẫu gắn với một khách hàng cụ thể), và số cột.
3. Dùng ô tìm kiếm hoặc bộ lọc khách hàng để tìm mẫu.

![report-template-list-scalecheck](/static/img/report-template-list-scalecheck.png)

## Tạo mẫu báo cáo
1. Bấm **Tạo template**.
2. Nhập **Tên template** và **Ghi chú** (nếu cần).
3. Ở mục **Cấu hình cột**, bấm **Thêm cột** cho từng cột muốn có trong báo cáo xuất ra.
4. Với mỗi cột, nhập tiêu đề cột (**Cột trên tệp**), chọn trường dữ liệu hóa đơn để ánh xạ tới (**Dữ liệu xuất ra**), và chọn kiểu dữ liệu (ví dụ TEXT).
5. Bấm **Lưu**.

![report-template-create-scalecheck](/static/img/report-template-create-scalecheck.png)

Bạn cũng có thể bấm **Tạo từ mẫu/file** để dựng template nhanh hơn, thay vì cấu hình từng cột thủ công:
1. Chọn một template có sẵn ở mục **Từ mẫu mặc định** để sao chép lại cấu hình cột, **hoặc** bấm **Chọn file .xlsx** ở mục **Từ file Excel** để tải lên một file mẫu.
2. Hệ thống tự điền sẵn các cột vào bảng cấu hình dựa trên lựa chọn của bạn.
3. Sửa hoặc xóa cột nếu cần, rồi bấm **Lưu** để lưu thành template riêng.

![report-template-from-sample-dropdown-scalecheck](/static/img/report-template-from-sample-dropdown-scalecheck.png)

## Sử dụng mẫu báo cáo
- Bấm biểu tượng xem trước trên một mẫu để xem bố cục.
- Bấm biểu tượng tải xuống để xuất báo cáo theo mẫu đó.
- Muốn có một bản tùy chỉnh từ mẫu **Mặc định**, dùng **Tạo từ mẫu/file** (mục trên) và chọn mẫu đó làm gốc thay vì sửa trực tiếp.
- Các mẫu thuộc phạm vi **Của tôi** có thêm biểu tượng sửa và xóa ngay trên dòng tương ứng.
