---
id: learning-method
title: AkaXtract học tài liệu của bạn như thế nào
sidebar_label: Phương pháp học
sidebar_position: 4
description: AkaXtract không huấn luyện mô hình. Hệ thống được cấu hình bằng prompt và schema. Cách thiết lập và cải thiện độ chính xác.
displayed_sidebar: akaXtractSidebar
---

# AkaXtract học tài liệu của bạn như thế nào

AkaXtract **không** huấn luyện (train) hay tinh chỉnh (fine-tune) mô hình trên tài liệu của bạn. Bạn không cần chuẩn bị bộ dữ liệu huấn luyện và không phải chờ một lượt huấn luyện. Bạn mô tả dữ liệu cần trích xuất trong một [Pipeline](./create-a-pipeline.md), và thay đổi có hiệu lực khi bạn công bố phiên bản mới.

## Những gì bạn cấu hình

| Thiết lập | Điều khiển |
| --- | --- |
| Mô hình AI | Mô hình xử lý tài liệu của bạn. Độ chính xác, ngôn ngữ hỗ trợ và giới hạn số trang có thể khác nhau giữa các mô hình |
| Classification prompt và schema | Cách gán từng trang vào loại tài liệu, và cách gom các trang thành tài liệu |
| Extraction prompt (theo loại tài liệu) | Trường cần tìm, cách xử lý giá trị thiếu và cách đọc bảng |
| Extraction JSON schema (theo loại tài liệu) | Tên trường, kiểu dữ liệu và cấu trúc kết quả, ví dụ trường tiêu đề và các dòng hàng |
| Post-process script (tùy chọn) | Chỉnh giá trị sau khi trích xuất |
| Quy tắc duyệt | Kết quả nào tự hoàn tất, kết quả nào chuyển cho người duyệt |

## Cải thiện độ chính xác

1. Tạo Pipeline từ một tài liệu mẫu đại diện cho tài liệu thực tế của bạn.
2. Kiểm tra trường, tên và kiểu dữ liệu đã sinh ra có khớp với dữ liệu mà hệ thống nhận cần.
3. [Kiểm thử](./test-and-publish.md) với tài liệu mẫu và đối chiếu dữ liệu với tài liệu gốc.
4. Nếu một trường sai hoặc thiếu, sửa extraction prompt hoặc schema của loại tài liệu đó. Mô tả chính xác hơn các trường cần lấy, cách xử lý giá trị thiếu và dữ liệu dạng bảng. Dùng post-process script cho các chỉnh sửa đơn giản. Nếu kết quả vẫn chưa tốt, hãy chọn mô hình AI khác và kiểm thử lại.
5. Kiểm thử lại, rồi công bố.
6. Giữ `Auto-Approve Results` ở trạng thái tắt trong giai đoạn kiểm chứng. Bật lên, kèm ngưỡng, khi bạn tin vào kết quả. Xem [Quy tắc duyệt](./create-a-pipeline.md#approval-rules).

## Chỉnh sửa trong Review có tác dụng gì

Một chỉnh sửa trong [Review](../documents/review-and-export.md) chỉ sửa kết quả của tài liệu đó. Chỉnh sửa không huấn luyện mô hình và không thay đổi Pipeline. Để một sửa đổi áp dụng cho các tài liệu sau, hãy đổi prompt hoặc schema trong một Draft mới, rồi kiểm thử và công bố.
