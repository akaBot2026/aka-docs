---
id: overview
title: AkaXtract
sidebar_label: Tổng quan
sidebar_position: 1
description: Trích xuất dữ liệu có cấu trúc từ tài liệu bằng AI, duyệt kết quả và chuyển đến hệ thống của bạn.
displayed_sidebar: akaXtractSidebar
---

# AkaXtract

AkaXtract chuyển nội dung tài liệu thành dữ liệu có cấu trúc. Bạn tải tài liệu lên, AI phân loại và trích xuất dữ liệu, bạn duyệt kết quả, rồi xuất dữ liệu hoặc chuyển sang hệ thống khác.

## Cách hoạt động

1. **Thiết lập** một [Pipeline](./user-guide/pipelines/create-a-pipeline.md) quy định dữ liệu cần trích xuất.
2. **Kiểm thử và công bố** Pipeline.
3. **Tải tài liệu lên** thủ công, hoặc nhận qua [ScaleConnect](./user-guide/integrations/scaleconnect.md) hoặc [API](./user-guide/integrations/api-integration.md).
4. **Duyệt** các kết quả cần người xác nhận.
5. **Xuất** dữ liệu, hoặc để [Webhook](./user-guide/integrations/webhooks.md) chuyển đi.

## Khái niệm chính

| Thuật ngữ | Ý nghĩa |
| --- | --- |
| Pipeline | Bộ quy tắc xử lý gồm mô hình AI, hướng dẫn phân loại, hướng dẫn trích xuất cho từng loại tài liệu và quy tắc duyệt |
| Document | Một tệp nguồn và trạng thái duyệt kết quả của tệp đó |
| Job | Một lượt xử lý, có mã định danh, phiên bản Pipeline, trạng thái và lỗi riêng |
| Human Review | Người duyệt đối chiếu dữ liệu trích xuất với tài liệu gốc và xác nhận |
| Webhook | Thông báo tự động gửi đến hệ thống nhận |

## Chọn lộ trình của bạn

| Tôi là… | Bắt đầu với |
| --- | --- |
| Người mới dùng AkaXtract | [Quick Start](./user-guide/getting-started/quick-start.md) |
| Người thiết lập xử lý tài liệu | [Tạo Pipeline](./user-guide/pipelines/create-a-pipeline.md), rồi [Kiểm thử và công bố](./user-guide/pipelines/test-and-publish.md) |
| Tìm hiểu cách AkaXtract được cấu hình và cách cải thiện độ chính xác | [Phương pháp học](./user-guide/pipelines/learning-method.md) |
| Người tải lên hoặc duyệt tài liệu | [Tải lên và theo dõi](./user-guide/documents/upload-and-track.md), rồi [Duyệt và xuất](./user-guide/documents/review-and-export.md) |
| Người kết nối hệ thống khác | [Webhook](./user-guide/integrations/webhooks.md) và [Tích hợp API](./user-guide/integrations/api-integration.md) |
| Người quản lý người dùng và hạn mức | [Người dùng và vai trò](./user-guide/administration/users-and-roles.md) và [Hạn mức và lưu trữ](./user-guide/administration/quota-and-retention.md) |
| Đang gặp lỗi | [Khắc phục sự cố](./user-guide/troubleshooting.md) |

:::note
Tên menu và nút theo giao diện tiếng Anh. Giao diện cũng có tiếng Việt, tiếng Nhật và tiếng Trung phồn thể. Menu bạn thấy phụ thuộc vào quyền của bạn.
:::
