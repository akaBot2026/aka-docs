---
id: pipeline-setting
title: Thiết lập Pipeline
sidebar_label: Thiết lập Pipeline
sidebar_position: 1
description: Cấu hình các quy tắc đối soát AP linh hoạt và động với pipeline của Scale Pay, từ tạo quy trình đến phân phối outbound.
displayed_sidebar: scalePaySidebar
---

# Thiết lập Pipeline

Hướng dẫn này chỉ cho bạn cách xây dựng một pipeline đối soát trong Scale Pay. Pipeline cho phép bạn cấu hình các quy tắc ánh xạ và đối soát linh hoạt, có tính động. Scale Pay đã bao gồm một số pipeline phổ biến với cài đặt mặc định cơ bản, vì vậy bạn có thể bắt đầu nhanh chóng hoặc tùy chỉnh một pipeline hiện có cho phù hợp với doanh nghiệp của mình.

## Mở tab Pipeline

1. Trong thanh tiêu đề, nhấp vào **Pipeline**.
2. Bảng bên trái hiển thị các pipeline hiện có.
3. Bảng bên phải là workspace để tạo và chỉnh sửa pipeline.


![Mở Pipeline](/static/img/open_pipeline.png)

## Bước 1: Tạo pipeline

Bạn có thể bắt đầu một pipeline theo hai cách:

1. Nhấp vào **New** để xây dựng pipeline từ đầu.
2. **Clone** một pipeline hiện có và điều chỉnh theo nhu cầu của bạn.

Chọn **New** nếu bạn muốn toàn quyền kiểm soát ngay từ đầu. Chọn **Clone** nếu đã có một pipeline tương tự và bạn chỉ cần thay đổi một vài quy tắc.

![Tạo Pipeline](/static/img/create_pipeline.png)

## Bước 2: Thiết lập quy tắc

### Bước 2.1: Tạo workflow

Bắt đầu bằng cách xác định thông tin cơ bản cho pipeline:

- **Name**: nhãn rõ ràng cho pipeline.
- **Description**: giải thích pipeline này đối soát nội dung gì.
- **Workflow type**: chọn đối soát **2-way**, **3-way** hoặc **4-way**.
- **Documents**: chọn các loại tài liệu được sử dụng để đối soát.

![Tạo Pipeline](/static/img/workflow.png)

### Bước 2.2: Thiết lập inbound

Cấu hình cách Scale Pay nhận và trích xuất dữ liệu từ từng loại tài liệu:

- **Source**: chọn nguồn dữ liệu cho từng loại tài liệu.

![Tạo Pipeline](/static/img/input_source.png)

- **Required fields for extraction**: chọn các trường Scale Pay phải trích xuất từ từng tệp.

![Tạo Pipeline](/static/img/require_fields.png)

- **AI extraction engine**:
  - Chọn model.
  - Chọn các loại tệp được chấp nhận (CSV, PDF, image, v.v.).
  - Tùy chỉnh extraction prompt để cải thiện độ chính xác cho định dạng tài liệu của bạn.

![Tạo Pipeline](/static/img/ai_extraction_engine.png)

### Bước 2.3: Cấu hình quy tắc ánh xạ

Quy tắc ánh xạ tổ chức từng tài liệu vào một matching set.

- Key mặc định thường là **PO number**.
- Bạn có thể thay thế bằng các key khác như **invoice number**, **vendor ID** hoặc **reference number**, tùy thuộc vào cấu trúc tài liệu.

![Tạo Pipeline](/static/img/mapping_rule.png)

### Bước 2.4: Cấu hình quy tắc đối soát

Bạn có thể bật/tắt toggle **Auto-approval**.
- Nếu toggle **ON**, kết quả đối soát sẽ được tự động phê duyệt khi tất cả tài liệu được đối soát với nhau.
- Nếu toggle **OFF**, trạng thái kết quả đối soát sẽ là "pending_approval" mặc dù tất cả tài liệu đã được đối soát với nhau. Điều này có nghĩa là người dùng cần xem xét rồi phê duyệt hoặc từ chối để hoàn tất kết quả.

![Tạo Pipeline](/static/img/toggle_approval.png)

Quy tắc đối soát so sánh các trường giữa các tài liệu ở hai cấp độ:

- **Header level**: đối soát các trường cấp cao như tên người bán, tên người mua, mã số thuế người bán, mã số thuế người mua...
- **Line item level**: đối soát các trường chi tiết như số lượng, đơn giá hoặc số tiền thuế.

Ở mỗi cấp độ, bạn có thể thêm hoặc xóa các trường cần đối soát.

Scale Pay cũng cho phép bạn kiểm soát loại tài liệu nào tham gia vào từng phép so sánh. Ví dụ: bạn có thể chỉ so sánh **tax ID** giữa PO và hóa đơn mà không đưa tài liệu thanh toán vào.

![Tạo Pipeline](/static/img/matching_fields.png)

Bạn có thể áp dụng **global LLM engine** cho tất cả các trường đối soát. Đặc biệt, bạn cũng có thể tùy chỉnh engine và prompt cho từng trường riêng lẻ, giúp quy trình linh hoạt và có tính động.

![Tạo Pipeline](/static/img/customize_engine.png)

### Bước 2.5: Thông báo

Cấu hình thời điểm và cách thức người dùng nhận thông báo:

- Các sự kiện kích hoạt như đối soát thành công, phát hiện ngoại lệ hoặc hoàn tất pipeline.
- Chọn các kênh thông báo như **in-app**, **email** hoặc các phương thức khác.

![Tạo Pipeline](/static/img/noti.png)

### Bước 2.6: Cấu hình outbound

Xác định nơi Scale Pay phân phối các kết quả đã đối soát:

- Đẩy kết quả đến nhiều đích song song, chẳng hạn như ERP, phần mềm kế toán hoặc kho dữ liệu.
- Cung cấp **Pull API** để các hệ thống phụ trợ có thể lấy dữ liệu đã đối soát theo nhu cầu.

![Tạo Pipeline](/static/img/outbound.png)

### Bước 2.7: Xem xét và kích hoạt

Sau khi hoàn tất tất cả bước cấu hình, hãy xem xét từng cài đặt trước khi kích hoạt. Scale Pay hiển thị bản tóm tắt workflow, cấu hình inbound, quy tắc ánh xạ, quy tắc đối soát, thông báo và cấu hình outbound. Xác nhận mọi thứ chính xác, sau đó kích hoạt pipeline.

![Tạo Pipeline](/static/img/review.png)

## Sau khi phát hành

Sau khi pipeline hoạt động, bạn vẫn có thể:
- **Archive** pipeline nếu không còn cần đến
- **Edit** pipeline để cập nhật quy tắc hoặc loại tài liệu.

## Việc cần làm tiếp theo

Nếu bạn đang thiết lập Scale Pay lần đầu, hãy chuyển đến [Nhập tài liệu](./documents.md) tiếp theo để tìm hiểu cách thêm hóa đơn, đơn đặt hàng và tệp thanh toán.

Nếu muốn xem xét và quản lý các kết quả đã đối soát, hãy chuyển đến [Quản lý matching set](./auto-mapping-matching.md).
