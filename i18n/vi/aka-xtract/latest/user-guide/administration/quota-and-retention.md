---
id: quota-and-retention
title: Hạn mức và lưu trữ dữ liệu
sidebar_label: Hạn mức và lưu trữ
sidebar_position: 2
description: Theo dõi hạn mức, đặt thời gian AkaXtract giữ dữ liệu, và xóa tài liệu, Job hoặc Pipeline.
displayed_sidebar: akaXtractSidebar
---

# Hạn mức và lưu trữ dữ liệu

## Theo dõi hạn mức

Mở `Profile & Setting` -> `Quota & Usage`. Bạn cần quyền xem hạn mức. Khung `Quota Usage` ở cuối menu bên trái cũng hiển thị mức dùng của bạn.

![Thẻ Quota & Usage](/static/img/scale-xtract-quota-usage.png)

| Mục | Ý nghĩa |
| --- | --- |
| `Limit`, `Used`, `Remaining` | Hạn mức của bạn và mức đã dùng. Hạn mức tính theo trang, không tính theo tệp |
| `Expires At`, `Days Remaining` | Thời điểm hạn mức kết thúc |
| `Usage Trend` | Mức dùng theo `Daily`, `Weekly` hoặc `Monthly`. Các mốc dùng giờ UTC |
| `Usage by Pipeline` | Pipeline nào dùng nhiều nhất |

Nếu trạng thái là `Limit Exceeded`, `Expired` hoặc `Not Configured`, hãy liên hệ quản trị viên trước khi gửi thêm tài liệu. Xóa tài liệu hoặc từ chối kết quả không hoàn lại hạn mức. Giới hạn ở nhà cung cấp AI tách biệt với `Remaining`.

## Đặt thời gian lưu trữ

1. Mở Pipeline, chọn `More Pipeline Actions` (nút `...`) và chọn `Data Retention`.

   ![Hộp thoại Data Retention Policy](/static/img/scale-xtract-data-retention-dialog.png)

2. Nhập số nguyên từ 1 đến 180 ngày và lưu.

Thiết lập áp dụng cho cả Pipeline, không phải một phiên bản. Mặc định là 90 ngày. Tuổi của dữ liệu được tính từ lúc Job hoàn tất, và việc dọn dẹp không phải lúc nào cũng chạy đúng thời điểm hết hạn. Trước khi rút ngắn thời gian, hãy [xuất dữ liệu](../documents/review-and-export.md#export) cần giữ.

## Xóa dữ liệu

- **Một Document hoặc Job:** chọn `Delete` trên dòng đó và xác nhận. Bạn cần quyền hủy Job. Không xóa được Document khi đang ở trạng thái `Reviewing`.
- **Một Pipeline:** chọn `Delete Pipeline` trong menu `...` và xác nhận. Thao tác này xóa vĩnh viễn Pipeline, mọi phiên bản và các Processing Job liên quan. Dữ liệu liên quan được dọn dẹp ở nền.

![Hộp thoại xác nhận Delete Pipeline](/static/img/scale-xtract-delete-pipeline-dialog.png)

:::warning
Giao diện không khôi phục được dữ liệu đã xóa. Xóa Document hoặc Job sẽ xóa tài liệu, lượt chạy, kết quả và tệp đã lưu. Xóa Pipeline sẽ xóa Pipeline, mọi phiên bản và các Job liên quan. Dữ liệu hết hạn cũng được dọn dẹp theo cách tương tự. Việc xóa không thu hồi các bản đã xuất hoặc đã gửi đi.
:::
