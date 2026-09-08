---
id: subscription-management
title: Quản lý Subscription
sidebar_label: Quản lý Subscription
sidebar_position: 6
description: Xem giới hạn sử dụng tài liệu và bộ nhớ, theo dõi mức tiêu thụ theo loại và khoảng thời gian, xuất báo cáo và thiết lập cảnh báo ngưỡng.
displayed_sidebar: scalePaySidebar
---

# Quản lý Subscription

Hướng dẫn này chỉ cho bạn cách theo dõi giới hạn gói, theo dõi mức tiêu thụ tài liệu và bộ nhớ, xuất báo cáo sử dụng và cấu hình ngưỡng cảnh báo để bạn biết trước khi chạm giới hạn.

## Mở Quản lý gói đăng ký

1. Nhấp vào **mũi tên thả xuống** bên cạnh avatar của bạn trên thanh tiêu đề.
2. Chọn **Organization**.
3. Trong menu bên trái, chọn **Subscription Management**.

![Gói đăng ký](/static/img/sp_subs.png)
![Gói đăng ký](/static/img/sp_subs_tab.png)
## Tóm tắt sử dụng

Phần đầu trang hiển thị mức sử dụng hiện tại của bạn trong ba thẻ:

### Thẻ sử dụng tài liệu

Hiển thị:

- **Used**: tổng số tài liệu đã tiêu thụ từ gói của bạn.
- **Remaining**: số tài liệu vẫn còn khả dụng trước khi chạm giới hạn.

### Thẻ sử dụng bộ nhớ

Hiển thị:

- **Used**: dung lượng bộ nhớ hiện đang được sử dụng.
- **Remaining**: dung lượng bộ nhớ vẫn còn khả dụng.

*Cả hai thẻ đều tự động cập nhật khi bạn tải lên, đối soát hoặc xóa tài liệu.*

### Gói hiện tại

Hiển thị:

- **Plan name** (ví dụ: Trial 2026)
- **Total documents included**
- **Total storage included**
- **Expiration date**: ngày chu kỳ thanh toán hiện tại của bạn kết thúc

Sử dụng thẻ này để nhanh chóng xác minh bạn đang dùng gói nào và khi nào gói được gia hạn.

## Mức tiêu thụ tài liệu theo loại

Biểu đồ này phân tích mức sử dụng tài liệu theo loại tài liệu.

Sử dụng bộ lọc để thay đổi khoảng thời gian:

- **Last 7 days**
- **Last 30 days**
- **Last 90 days**

Bạn có thể xem loại tài liệu nào tiêu thụ nhiều dung lượng nhất và điều chỉnh chiến lược tải lên nếu cần.

![Gói đăng ký](/static/img/sp_chart.png)

## Phân bổ mức sử dụng

Biểu đồ này cho biết tài liệu và bộ nhớ được phân bổ như thế nào trên các loại tài liệu.

Sử dụng biểu đồ để xác định các khu vực sử dụng nhiều và lập kế hoạch dung lượng phù hợp.

![Gói đăng ký](/static/img/sp_usage.png)

## Bộ nhớ theo loại tài liệu

Biểu đồ này hiển thị mức tiêu thụ bộ nhớ được nhóm theo loại tài liệu.

So sánh kích thước giữa PO, GR, Invoice và các loại khác để hiểu định dạng hoặc lô nào chiếm nhiều dung lượng nhất.

![Gói đăng ký](/static/img/sp_storage.png)

## Xuất báo cáo

1. Nhấp vào **Export Report**.
3. Tải tệp xuống sau khi tệp được tạo.

Báo cáo đã xuất có thể bao gồm số lượng tài liệu, mức sử dụng bộ nhớ và xu hướng tiêu thụ.

![Gói đăng ký](/static/img/sp_export.png)


## Cấu hình ngưỡng cảnh báo

Bạn có thể thiết lập ngưỡng để Scale Pay thông báo cho bạn trước khi chạm giới hạn.

1. Nhấp vào nút **Alert**.
2. Đặt **Document threshold**: chọn tỷ lệ phần trăm hoặc số tuyệt đối.
3. Đặt **Storage threshold**: chọn tỷ lệ phần trăm hoặc số tuyệt đối.
4. Nhấp vào **Save** để kích hoạt cảnh báo.

Ví dụ: Bạn đặt ngưỡng bộ nhớ ở mức 80%. Khi bộ nhớ đạt 80% giới hạn gói, Scale Pay sẽ gửi cảnh báo để quản trị viên có thể nâng cấp hoặc dọn dẹp các tài liệu không sử dụng.

![Gói đăng ký](/static/img/sp_alerts.png)
![Gói đăng ký](/static/img/sp_set_alert.png)

## Việc cần làm tiếp theo

Nếu mức sử dụng sắp chạm giới hạn và bạn cần thêm dung lượng, hãy liên hệ quản trị viên để xem xét gói hiện tại hoặc nâng cấp.

Nếu muốn hiểu vì sao bộ nhớ tăng nhanh, hãy kiểm tra trạng thái tài liệu trong [Nhập tài liệu](../main-features/documents.md).

## Các vấn đề thường gặp và cách khắc phục nhanh

### Mức sử dụng của tôi có vẻ không chính xác

- Làm mới trang để tải các con số mới nhất.
- Kiểm tra xem tài liệu đã xóa đã bị xóa vĩnh viễn hay mới chỉ được chuyển vào thùng rác.

### Tôi không nhận được cảnh báo dù đã đạt ngưỡng

- Xác minh cảnh báo đã được lưu và bật.
- Kiểm tra cài đặt thông báo trong [Sử dụng hồ sơ](./profile-usage.md).

### Báo cáo xuất ra trống hoặc thiếu dữ liệu

- Đảm bảo khoảng thời gian đã chọn có chứa tài liệu được tải lên.
- Thử xuất lại hoặc chọn khoảng thời gian khác.
