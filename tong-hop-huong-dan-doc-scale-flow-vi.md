# Tổng Hợp Hướng Dẫn Viết Docs (Scale Flow)

Tài liệu này tổng hợp nhanh các nội dung đã trao đổi: cách viết file doc, tạo folder và file, chèn ảnh, ý nghĩa `displayed_sidebar`, `_category_.json`, `release-notes.md`, và heading `#`, `##`, `###`.

## 1) Cấu trúc thư mục chuẩn trong repo

- Doc chính: `docs/<module>/latest/...`
- Bản tiếng Việt mirror: `i18n/vi/<module>/latest/...`
- Ảnh/tài nguyên dùng chung:
  - `static/img/`
  - `static/pdf/`
  - `static/video/`

Ví dụ với Scale Flow:

- EN: `docs/scale-flow/latest/...`
- VI: `i18n/vi/scale-flow/latest/...`

## 2) Cách tạo folder và file

Ví dụ tạo trang mới `customer-journey.md`:

- EN: `docs/scale-flow/latest/user-guide/operations/customer-journey.md`
- VI: `i18n/vi/scale-flow/latest/user-guide/operations/customer-journey.md`

PowerShell:

```powershell
New-Item -ItemType Directory -Force "docs/scale-flow/latest/user-guide/operations"
New-Item -ItemType Directory -Force "i18n/vi/scale-flow/latest/user-guide/operations"
New-Item -ItemType File -Force "docs/scale-flow/latest/user-guide/operations/customer-journey.md"
New-Item -ItemType File -Force "i18n/vi/scale-flow/latest/user-guide/operations/customer-journey.md"
```

## 3) Mẫu frontmatter nên có trong file doc

```yaml
---
id: customer-journey
title: Customer Journey
sidebar_label: Customer Journey
sidebar_position: 3
description: Hướng dẫn theo dõi hành trình khách hàng trong ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---
```

Gợi ý:

- `id`: ổn định, không dấu, không đổi thường xuyên.
- `displayed_sidebar`: gắn trang vào đúng sidebar của module.

## 4) Chèn ảnh đúng trong repo này

Theo chuẩn repo, ảnh trong markdown nên dùng:

```md
![Mô tả ảnh](/static/img/ten-anh.png)
```

Lưu ý:

- Dùng đường dẫn tuyệt đối bắt đầu bằng `/`.
- Không dùng đường dẫn tương đối như `./image.png`.

### Thu nhỏ ảnh

Cách 1 (MDX/HTML):

```html
<img src="/static/img/inbox.png" alt="Inbox overview" style="width: 70%; max-width: 600px;" />
```

Cách 2 (an toàn nhất nếu renderer không nhận style):

- Resize file ảnh gốc nhỏ lại (ví dụ `inbox-600.png`)
- Rồi gọi bằng markdown thường:

```md
![Inbox overview](/static/img/inbox-600.png)
```

## 5) `displayed_sidebar` có chức năng gì?

`displayed_sidebar` dùng để chỉ định trang sẽ hiển thị theo sidebar nào.

Ví dụ:

```yaml
displayed_sidebar: scaleFlowSidebar
```

Nghĩa là trang thuộc nhóm sidebar Scale Flow.

## 6) `_category_.json` dùng để làm gì?

`_category_.json` cấu hình cách một folder hiển thị trên sidebar:

- `label`: tên mục
- `position`: thứ tự
- `collapsible`: có cho phép gập/mở hay không
- `collapsed`: trạng thái mặc định (đóng/mở)
- `link` (nếu có): cấu hình trang index cho category (ví dụ `generated-index`)

Ví dụ ở `docs/scale-flow/latest/_category_.json`:

- `label: "Scale Flow"`
- `position: 9`
- `collapsible: true`
- `collapsed: false`
- `link.type: "generated-index"`

## 7) Vì sao nhiều category trong channels để `collapsible: true`?

Để UX sidebar gọn và dễ điều hướng:

- Cho phép người dùng tự gập/mở từng nhóm channel.
- Tránh menu quá dài khi có nhiều thư mục con.
- Kết hợp với `collapsed` để chọn mục nào mở sẵn, mục nào đóng sẵn.

## 8) `release-notes.md` dùng để làm gì?

File `docs/scale-flow/latest/release-notes.md` là changelog của module:

- Ghi điểm mới/cải tiến/sửa lỗi theo phiên bản.
- Giúp theo dõi lịch sử thay đổi của tài liệu và tính năng.
- Thường được cập nhật liên tục theo từng release.

## 9) Ý nghĩa `#`, `##`, `###` trong markdown

- `#`: Heading cấp 1 (H1) - tiêu đề chính của trang
- `##`: Heading cấp 2 (H2) - mục lớn
- `###`: Heading cấp 3 (H3) - mục con

Khuyến nghị:

- Mỗi trang nên có 1 heading `#`.
- Dùng `##` cho section chính, `###` cho nội dung con.
- Tránh nhảy cấp heading không hợp lý.

## 10) Checklist nhanh trước khi PR

- Có file EN trong `docs/...`.
- Có file VI mirror trong `i18n/vi/...` (nếu làm bản dịch).
- Ảnh đặt trong `static/img/` và link đúng `/static/img/...`.
- Frontmatter đầy đủ.
- Chạy kiểm tra:
  - `node scripts/validate-mdx.mjs`
  - `node scripts/validate-media.mjs`

