---
id: integration-usage
title: Tích hợp
sidebar_label: Sử dụng Integration
sidebar_position: 1
description: Hướng dẫn thân thiện với người mới bắt đầu để kết nối các công cụ doanh nghiệp bên ngoài với ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng Integration

Integration kết nối ScaleFlow với các công cụ doanh nghiệp đang dùng, chẳng hạn HubSpot, Shopify, Google Drive và Google Sheets.

Dùng integration khi muốn ScaleFlow, [Knowledge](../scaleflow-ai/knowledge-usage) hoặc [AI Agent](../scaleflow-ai/ai-agent-usage) làm việc với thông tin được lưu bên ngoài ScaleFlow.

## Integration dùng để làm gì

- Kết nối dữ liệu khách hàng từ HubSpot hoặc dữ liệu thương mại điện tử từ Shopify.
- Dùng tệp từ Google Drive làm Knowledge.
- Làm việc với dữ liệu trong Google Sheets.
- Cho phép AI Agent đã được phê duyệt dùng các công cụ đã chọn và kết nối.
- Kiểm tra kết nối có hoạt động tốt hay không.

Ví dụ: Công ty lưu tài liệu hỗ trợ trong Google Drive. Kết nối Google Drive, tạo Knowledge từ các tệp đã chọn, rồi để Smart Assistant trả lời khách hàng bằng thông tin đó.

## Mở integrations ở đâu

Có 2 nơi trong menu bên trái:

- **Integrations**: duyệt provider và bắt đầu kết nối

![Kết nối integration](/static/img/integration-connection.png)


- **Integration Connections**: xem tất cả kết nối hiện có trên các provider

![Danh sách provider của integrations](/static/img/list-integration.png)

Nếu không thể kết nối hoặc chỉnh sửa integration, hãy yêu cầu admin cấp quyền quản lý integration.

## Các provider hiện có trong UI

| Provider | Hướng dẫn thiết lập chi tiết |
|----------|---------------------|
| **HubSpot** | [Sử dụng Integration — HubSpot](#hubspot-connection) (trang này); thiết lập OAuth bên dưới |
| **Freshdesk** | [Kết nối Freshdesk với ScaleFlow](./connecting-your-freshdesk-account) |
| **Google Sheets** | [Tích hợp Google Sheets](./google-sheets-integration) |
| **Google Drive** | [Tích hợp Google Drive](./google-drive-integration) |
| **Make** | [Tích hợp Make](./make-integration) |

Các provider khác trong grid (ví dụ **Salesforce**, **Zapier**) có thể hiển thị **Coming soon** và chưa thể kết nối. **Shopify** đã có — xem [Tích hợp Shopify](./shopify-integration).

## Kết nối integration mới

1. Mở **Integrations**.
2. Chọn thẻ provider.
3. Nhấp **Connect**.
4. Trên màn hình thiết lập, xem lại các quyền được yêu cầu.
5. Nhấp:
   - **Continue on HubSpot** (HubSpot),
   - **Continue with Google** (Google Sheets / Google Drive),
   - Dán **API token** và nhấp **Connect** (Make), hoặc
   - Nhập thông tin xác thực và nhấp **Connect** (Shopify — khi có).

6. Hoàn tất cấp quyền trong popup của provider.
7. Quay lại ScaleFlow và xác minh kết nối xuất hiện trên trang provider.

Cấp quyền nghĩa là bạn cho phép ScaleFlow kết nối với công cụ đó. Chỉ phê duyệt các tài khoản thuộc doanh nghiệp.

## Quản lý kết nối của một provider

Mở trang của một provider (ví dụ **Integrations -> HubSpot**) để:

- Xem tất cả kết nối của provider đó
- Nhấp **Add connection** để tạo kết nối khác
- Mở trang chi tiết kết nối bằng cách nhấp biểu tượng liên kết ngoài

Mỗi dòng kết nối cũng hỗ trợ thao tác nhanh:

- **Test connection** (biểu tượng làm mới)
- **Reconnect** (biểu tượng chìa khóa, hiển thị khi ScaleFlow cần bạn đăng nhập lại)
- **Disconnect** (biểu tượng rút phích cắm, hiển thị khi trạng thái active)
- **Delete** (biểu tượng thùng rác, có hộp thoại xác nhận)

## Quản lý tất cả kết nối trên một màn hình

Mở **Integration Connections** để:

- Xem tất cả provider trong một danh sách
- Xem trạng thái và các mốc thời gian chính
- Chuyển đến trang quản lý riêng của provider bằng **Manage connection**

## Hiểu trạng thái kết nối

Bạn có thể thấy các trạng thái:

- **Connected**
- **Draft**
- **Disconnected**
- **Error**
- **Reauth required**
- **Disabled**

Nếu trạng thái không tốt (ví dụ **Error** hoặc **Reauth required**), trước tiên hãy dùng **Reconnect** hoặc **Test connection**.

## Bạn có thể làm gì với từng provider

### Kết nối HubSpot

Dùng HubSpot khi đội sales hoặc hỗ trợ lưu hồ sơ khách hàng trong HubSpot.

Trong một kết nối HubSpot, bạn có thể đổi tên kết nối, xem các thao tác AI hiện có và đồng bộ dữ liệu khách hàng hoặc ticket khi thiết lập hỗ trợ.

### Kết nối Freshdesk

Dùng Freshdesk khi đội hỗ trợ quản lý ticket trong Freshdesk và muốn đồng bộ chúng vào ScaleFlow.

Về domain, API key, cài đặt đồng bộ và ánh xạ trường, xem [Kết nối Freshdesk với ScaleFlow](./connecting-your-freshdesk-account).

### Kết nối Shopify

Dùng Shopify khi doanh nghiệp sử dụng Shopify cho thương mại điện tử.

Về Client ID, Client Secret, Store URL và các bước cài đặt OAuth, xem [Tích hợp Shopify](./shopify-integration).

### Kết nối Google Sheets

Dùng Google Sheets khi đội ngũ quản lý bảng đơn giản, danh sách lead, bảng giá hoặc bảng theo dõi.

Về kết nối OAuth, chọn spreadsheet trong AI Agent, công cụ MCP và khắc phục sự cố, xem [Tích hợp Google Sheets](./google-sheets-integration).

### Kết nối Google Drive

Dùng Google Drive khi đội ngũ lưu tài liệu mà AI cần đọc.

Sau khi kết nối, tạo [Knowledge](../scaleflow-ai/knowledge-usage) từ các tệp Drive đã chọn. Về các bước kết nối, đồng bộ Knowledge, công cụ MCP của agent và ví dụ Runbook, xem [Tích hợp Google Drive](./google-drive-integration).

### Kết nối Make

Dùng Make khi đội ngũ xây dựng các scenario tự động hóa trực quan và muốn AI Agent của ScaleFlow khám phá, kiểm tra hoặc chạy các scenario đó thông qua công cụ MCP.

Make sử dụng xác thực bằng **API token**. Về thiết lập từng bước, cấu hình agent và tham khảo công cụ MCP, xem [Tích hợp Make](./make-integration).

## Quy trình thực tế

1. Admin kết nối Google Drive trong Integrations.
2. Admin tạo Knowledge base từ thư mục FAQ của công ty.
3. Admin kết nối Knowledge đó với AI Agent.
4. Smart Assistant trả lời khách hàng trong Inbox bằng FAQ.
5. Khi FAQ thay đổi, admin đồng bộ Knowledge lại.

## Đọc gì tiếp theo

### Hướng dẫn thiết lập integration

- [Tích hợp Google Drive](./google-drive-integration)
- [Tích hợp Google Sheets](./google-sheets-integration)
- [Tích hợp Make](./make-integration)
- [Kết nối Freshdesk với ScaleFlow](./connecting-your-freshdesk-account)
- [Tích hợp Shopify](./shopify-integration) (khi Shopify được bật trong UI)

### Hướng dẫn sản phẩm liên quan

- Muốn AI đọc tệp Google Drive? Đến [Sử dụng Knowledge](../scaleflow-ai/knowledge-usage).
- Muốn AI dùng các công cụ đã kết nối? Đến [Sử dụng AI Agent](../scaleflow-ai/ai-agent-usage).
- Muốn AI trả lời khách hàng trong Inbox? Đến [AI Assistant](../scaleflow-ai/ai-assistant).
- Muốn kết nối kênh nhắn tin trước? Đến [Tích hợp kênh](../channels/channel-integration).

## Khắc phục nhanh

### Tôi không thấy menu Integrations

- Yêu cầu admin cấp quyền xem integration.

### Tôi có thể xem nhưng không thể kết nối hoặc chỉnh sửa

- Có thể bạn chỉ có quyền xem. Hãy yêu cầu quyền quản lý integration.

### Kết nối hiển thị lỗi hoặc yêu cầu xác thực lại

1. Mở danh sách kết nối của provider.
2. Nhấp **Reconnect**.
3. Hoàn tất cấp quyền cho provider.
4. Nhấp **Test connection** để xác minh.

### Tôi đã nhấp connect nhưng không thấy kết nối

- Làm mới trang provider.
- Kiểm tra popup cấp quyền đã hoàn tất chưa.
- Thử kết nối lại và theo dõi thông báo lỗi.

## Thực hành tốt nhất cho đội ngũ không chuyên kỹ thuật

- Dùng tên kết nối rõ ràng (ví dụ: `HubSpot Production`, `Google Drive - Marketing`).
- Xác thực kết nối mới bằng **Test connection** ngay sau khi thiết lập.
- Xóa các kết nối không dùng để giảm nhầm lẫn và rủi ro quyền hạn.
- Chỉ kết nối các tài khoản doanh nghiệp được tổ chức phê duyệt.
