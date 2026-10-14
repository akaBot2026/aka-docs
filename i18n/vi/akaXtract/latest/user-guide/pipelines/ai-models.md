---
id: ai-models
title: Mô hình AI và khóa
sidebar_label: Mô hình AI
sidebar_position: 3
description: Thêm khóa nhà cung cấp AI và quản lý mô hình tùy chỉnh.
displayed_sidebar: akaXtractSidebar
---

# Mô hình AI và khóa

Trang này dành cho Owner, Administrator hoặc người có quyền quản lý mô hình.

## Mô hình nào cần khóa

Mô hình AI bạn chọn trong một Pipeline sẽ xử lý tài liệu của Pipeline đó.

| Mô hình | Khóa |
| --- | --- |
| `AkaXtract AI` và `AkaXtract Onprem` | Không cần |
| Mô hình của nhà cung cấp khác | Khóa AI đã lưu cho **đúng nhà cung cấp đó**. Khóa trong `API Keys` không dùng được |

## Thêm khóa AI

1. Mở `AI Models` -> `Add API Key Model`.
2. Chọn nhà cung cấp ở `Select AI Provider`. Nhập `API Key Name` và `API Key` (ít nhất 8 ký tự).
3. Chọn `Test Connection`, rồi `Save`. Hầu hết nhà cung cấp cần kiểm tra thành công trước khi lưu. FPT AI không bắt buộc kiểm tra. Khi kiểm tra thành công sẽ hiển thị `API Key Is Valid`.
4. Trong Pipeline, chọn mô hình và khóa tương ứng.

![Trang AI Models với bộ lọc nhà cung cấp và nút Add API Key Model](/static/img/scale-xtract-ai-model-keys.png)

![Hộp thoại Add AI Model API Key](/static/img/scale-xtract-add-ai-model-key.png)

**Kết quả:** khóa xuất hiện dưới đúng nhà cung cấp.

Để đổi khóa, chọn `Edit`. Để trống ô khóa nếu muốn giữ khóa hiện tại.

![Hộp thoại Edit AI Model API Key](/static/img/scale-xtract-edit-ai-model-key.png)

![API Key Is Valid sau khi Test Connection](/static/img/scale-xtract-test-connection-valid.png)

:::warning
Xóa khóa có thể ảnh hưởng đến các Pipeline đang dùng khóa đó. Hãy thay khóa trong các Pipeline đó trước.
:::

## Thêm mô hình tùy chỉnh

1. Mở `AI Providers`, chọn một nhà cung cấp và chọn `Add Custom Model...`.
2. Nhập `Model ID` đúng như nhà cung cấp quy định. Trường này bắt buộc, tối đa 200 ký tự, không chứa dấu gạch chéo ngược, đoạn đường dẫn rỗng, đoạn `.` hoặc `..` và ký tự điều khiển.
3. Có thể nhập `Display Name` và `Description`, rồi chọn `Add Model`.

![Trang AI Providers](/static/img/scale-xtract-ai-providers.png)

![Danh sách mô hình của một nhà cung cấp với nút Add Custom Model](/static/img/scale-xtract-provider-models.png)

![Hộp thoại Add Custom Model](/static/img/scale-xtract-add-custom-model.png)

**Kết quả:** mô hình xuất hiện với nhãn `Custom`. Mô hình tùy chỉnh chỉ hiển thị với tổ chức của bạn. Thêm một mô hình vào danh sách không có nghĩa là khóa của bạn được phép gọi mô hình đó.

Dùng `Edit`, `Enable` hoặc `Disable` trong menu của mô hình. Khi xóa mô hình tùy chỉnh, các Pipeline hiện có giữ nguyên cấu hình và không tự chuyển sang mô hình khác, vì vậy hãy kiểm thử lại trước lần công bố tiếp theo.
