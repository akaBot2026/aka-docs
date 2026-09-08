---
id: model-usage
title: Sử dụng Model
sidebar_label: Sử dụng Model
sidebar_position: 3
description: Hướng dẫn thân thiện với người mới bắt đầu để hiểu và quản lý AI model cho ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng Model

Model là các engine AI cung cấp sức mạnh cho [AI Agent](./ai-agent-usage) và [AI Assistant](./ai-assistant). Model đọc cuộc trò chuyện và viết câu trả lời.

Hầu hết người dùng hằng ngày không cần quản lý model. Trang này chủ yếu dành cho admin hoặc người phụ trách thiết lập AI.

## Models dùng để làm gì

Dùng **Models** để:

- Kết nối AI provider như OpenAI, Anthropic, Google hoặc provider được phê duyệt khác.
- Quyết định model nào AI Agent có thể dùng.
- Bật hoặc tắt model.
- Sắp xếp thiết lập AI cho workspace.

**API key** giống một mật khẩu riêng cho phép ScaleFlow dùng tài khoản AI provider. Chỉ admin nên xử lý key. Không bao giờ chia sẻ key trong chat, email hoặc tài liệu.

## Mở Models từ menu

![Mở provider](/static/img/open-model.png)

1. Trong thanh bên trái, mở **AI**.
2. Chọn **Models**.
3. Bạn sẽ thấy trang danh sách provider.

Nếu mở được trang nhưng không thấy các nút như **Create**, **New Model** hoặc **Settings**, hãy yêu cầu admin xem lại quyền quản lý model.

## Trang Models (danh sách provider)

Trên trang **Models**, bạn có thể:

- Tìm provider
- Nhấp **Create** để thêm provider mới (nếu được cấp quyền)
- Nhấp thẻ provider để mở trang chi tiết

Mỗi thẻ provider hiển thị:

- Tên hiển thị provider
- Số model
- Trạng thái Enabled
- Trạng thái cấu hình (API key đã cấu hình chưa)
- Ngày cập nhật gần nhất


## Tạo provider

Tạo provider khi tổ chức muốn dùng tài khoản dịch vụ AI trong ScaleFlow.

![Hộp thoại tạo provider](/static/img/create-provider-1.png)

1. Nhấp **Create** trên trang danh sách provider.
2. Điền hộp thoại:
   - **Provider Type** (OpenAI, Anthropic, DeepSeek, Google, Mistral AI, Amazon Bedrock, Microsoft Azure OpenAI, Alibaba Cloud Model Studio, Hugging Face, Ollama)
   - **Provider Name**
   - **Base URL** (tùy chọn)
   - **API Key**
   - **Enabled** (on/off)
   - **Import default models** (on/off, chỉ có khi tạo provider mới)

![Hộp thoại tạo provider](/static/img/create-provider.png)

3. Nhấp **Create**.
4. Mở thẻ provider vừa tạo để xem chi tiết.

Mẹo cho người mới: Dùng tên provider rõ ràng, chẳng hạn `OpenAI - Company Account`, để đồng đội biết tài khoản nào đang được dùng.

## Trang chi tiết provider

Khi mở provider, bạn có thể:

![Trang chi tiết provider](/static/img/detail-provider.png)

- Tìm model theo tên
- Nhấp **New Model** để tạo model
- Mở menu thao tác (**...**) và chọn:
  - **Settings**
  - **Delete** provider

Nếu chưa có model, trang hiển thị trạng thái trống.


## Provider Settings

![Nút cài đặt provider](/static/img/setting-provider-1.png)

Trong **Settings**, bạn có thể cập nhật:

- **Base URL**
- **API Key** (để trống để giữ key hiện tại)
- Công tắc **Enabled**

Bạn cũng có thể xem:

- Provider type và provider name (chỉ đọc)
- API key hiện tại (đã mask) và thời gian cập nhật (nếu có)

![Hộp thoại cài đặt provider](/static/img/setting-provider.png)

## Tạo model

Tạo model khi provider đã kết nối nhưng model AI chính xác chưa có.

![New model](/static/img/new-model.png)

1. Trong chi tiết provider, nhấp **New Model**.
2. Điền trường bắt buộc:
   - **Model ID** (ví dụ `gpt-4o`)
   - **Model Name** (tên hiển thị trong UI)
   - **Capabilities** (chọn một hoặc nhiều: Text, Vision, Audio, Video, Reasoning, Embeddings)
   - Công tắc **Enabled**

![Hộp thoại tạo model](/static/img/create-model.png)

3. Nhấp **Create**.

Ghi chú theo hành vi UI hiện tại:

- Model name có thể được gợi ý tự động từ capability đã chọn cho đến khi bạn nhập tên tùy chỉnh.
- Trên trang chi tiết provider, provider được cố định, nên không cần chọn provider lại.

## Sửa hoặc xóa model

Với mỗi thẻ model:

![Hộp thoại sửa model](/static/img/action-model-1.png)

1. Nhấp biểu tượng thao tác trên thẻ.
2. Chọn **Edit** hoặc **Delete**.
3. Xác nhận trong hộp thoại khi xóa.

![Hộp thoại sửa model](/static/img/edit-model.png)

Xóa là vĩnh viễn đối với mục model đó.

## Hành vi provider/model được quản lý

Một số provider hoặc model được đánh dấu do hệ thống quản lý.

Trong UI hiện tại:

- Provider được quản lý không hiển thị thao tác **New Model**, **Settings** hoặc **Delete**.
- Model được quản lý không thể sửa hoặc xóa.

Đây là hành vi dự kiến để bảo vệ cấu hình do hệ thống quản lý.

## Dùng model trong AI Agent

Sau khi cấu hình model, user có thể chọn model trong [AI Agent](./ai-agent-usage):

1. Mở **AI Agent** > **Agents**.
2. Mở agent.
3. Trong **Basic information**, tìm **Model**.
4. Chọn model từ dropdown (nhóm theo provider).
5. (Tùy chọn) Nhấp biểu tượng cài đặt bên cạnh trường model để mở **Advanced Model Settings**.


**Khuyến nghị:** Khi chọn model cho agent, ưu tiên **system-managed models** có biểu tượng **Security** trong danh sách (thường ở cuối dòng model). Các model đó được duy trì cho workspace và là mặc định an toàn nhất khi cùng agent dùng với [AI Assistant](./ai-assistant) và flow assistant tự động, vì chúng giữ trên các đường truy cập và capability được hỗ trợ. Bạn vẫn có thể chọn model Enabled khác nếu admin phê duyệt thiết lập đó.

![Chọn model (system model với biểu tượng Security)](/static/img/choose-model.png)
## Advanced Model Settings (trong form agent)

Cài đặt nâng cao thay đổi cách model viết. Người mới nên giữ mặc định trừ khi admin hướng dẫn.

Hộp thoại có thể gồm:

- **Temperature**
- **Top P**
- **Max Tokens**
- **Stop Words**
- **Reasoning Level**
- **Verbosity**

Sau đó nhấp **Save**.

Quan trọng:

- Một số dòng model không hỗ trợ điều khiển temperature, nên temperature sẽ bị khóa.
- Các cài đặt này ảnh hưởng kiểu và độ dài phản hồi, không ảnh hưởng Knowledge doanh nghiệp.

Giải thích đơn giản:

- Độ ngẫu nhiên thấp thường cho câu trả lời nhất quán hơn.
- Độ ngẫu nhiên cao có thể sáng tạo hơn nhưng khó đoán hơn.
- Độ dài tối đa kiểm soát độ dài câu trả lời.

## Quy trình được khuyến nghị

1. Hỏi admin AI provider nào công ty phê duyệt.
2. Tạo một provider với API key hợp lệ.
3. Đảm bảo provider **Enabled**.
4. Chỉ tạo các model đội ngũ thực sự cần.
5. Mở agent và chọn model mục tiêu.
6. Kiểm tra phản hồi trước khi publish thay đổi agent.

## Ví dụ thực tế

1. Admin kết nối AI provider được công ty phê duyệt.
2. Admin tạo model tên `Support Model`.
3. Quản lý hỗ trợ chọn model này trong AI Agent.
4. AI Agent được kiểm tra bằng câu hỏi khách hàng thật.
5. Smart Assistant dùng agent đó để trả lời trong Inbox.

## Khắc phục nhanh

### Không thấy menu Models

- Hỏi admin cấp quyền xem model.

### Có thể xem nhưng không tạo hoặc sửa provider/model

- Hỏi admin cấp quyền quản lý model.

### Provider đã tạo nhưng danh sách model trống

- Mở chi tiết provider và tạo model bằng **New Model**.
- Hoặc tạo lại provider với **Import default models** được bật.

### Agent không thể dùng model của tôi

- Xác minh model **Enabled**.
- Xác minh provider **Enabled** và có API key hợp lệ.
- Mở lại trang agent và chọn lại model từ dropdown.
