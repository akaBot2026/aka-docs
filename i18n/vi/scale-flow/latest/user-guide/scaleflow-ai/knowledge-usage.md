---
id: knowledge-usage
title: Sử dụng Knowledge
sidebar_label: Sử dụng Knowledge
sidebar_position: 2
description: Hướng dẫn thân thiện với người mới bắt đầu để tạo Knowledge giúp AI trả lời từ thông tin doanh nghiệp đáng tin cậy.
displayed_sidebar: scaleFlowSidebar
---

# Sử dụng Knowledge

Knowledge là thông tin đáng tin cậy AI dùng để trả lời khách hàng. Có thể gồm FAQ, chi tiết sản phẩm, quy tắc giao hàng, chính sách hoàn tiền, chính sách bảo hành, bảng giá, tài liệu trợ giúp hoặc trang website.

Nếu không có Knowledge tốt, AI có thể không hiểu doanh nghiệp. Với Knowledge tốt, [AI Agent](./ai-agent-usage) trả lời chính xác hơn và [AI Assistant](./ai-assistant) hỗ trợ khách hàng trong Inbox.

## Khi nào dùng Knowledge

Dùng Knowledge khi:

- Khách hàng thường hỏi những câu đã có câu trả lời chuẩn.
- Đội ngũ muốn AI trả lời từ thông tin công ty đã phê duyệt.
- Cần AI tuân theo quy tắc doanh nghiệp như thời hạn đổi trả hoặc thời gian giao hàng.
- Muốn nhân viên tìm câu trả lời nhanh hơn.

Ví dụ: Cửa hàng tải lên PDF chính sách đổi trả, FAQ giao hàng và catalog sản phẩm. Khi khách hỏi "Tôi có thể trả hàng sau 10 ngày không?", AI kiểm tra chính sách đổi trả trước khi trả lời.

## Mở Knowledge từ menu

![Mở knowledge](/static/img/open-knowledge.png)

1. Trong thanh bên trái, mở **AI**.
2. Chọn **Knowledge**.
3. Bạn sẽ thấy trang danh sách knowledge base.

Nếu thiếu các nút như **Add knowledge**, **Upload**, **Synchronize**, **Crawl Web** hoặc **Test Knowledge**, hãy yêu cầu admin kiểm tra quyền Knowledge.

## Trang danh sách Knowledge

![Trang danh sách Knowledge](/static/img/list-knowledge.png)

Trên trang **Knowledge**, bạn có thể:

- Tìm theo tên nguồn bằng **Search by data source name**
- Lọc theo trạng thái bằng **All statuses**
- Dùng **Reset filters** để xóa bộ lọc tìm kiếm và trạng thái
- Mở một knowledge base bằng cách nhấp thẻ
- Tạo knowledge base mới bằng **Add knowledge** (nếu được cấp quyền)

Mỗi thẻ hiển thị tên, loại nguồn, trạng thái hiện tại và thời gian cập nhật gần nhất.

## Tạo Knowledge base

![Tạo knowledge mới](/static/img/button-add-knowledge.png)

1. Nhấp **Add knowledge**.
2. Nhập:
   - **Name** (bắt buộc)
   - **Description** (tùy chọn)
3. Chọn **Source type**:
   - **File Upload**
   - **Custom answers**
   - **Freshdesk**
   - **Google Drive**
   - **Internet search**
   - **Crawl Web**
4. Điền các trường riêng của nguồn.
5. Nhấp **Add knowledge**.

Sau khi tạo, UI tự động mở trang chi tiết knowledge.

## Chọn đúng loại nguồn

### File Upload

![Tạo knowledge mới](/static/img/create-knowledge.png)

Dùng **File Upload** khi thông tin nằm trong tài liệu trên máy tính.

Ví dụ phù hợp:

- PDF FAQ
- Catalog sản phẩm
- Spreadsheet bảng giá
- Tài liệu bảo hành
- Tài liệu chính sách cửa hàng

Sau khi tạo Knowledge base, nhấp **Upload** và thêm tệp. Loại tệp được hỗ trợ gồm PDF, Word, text, CSV, JSON và Excel.

Khi tệp xuất hiện trong danh sách tài liệu, chạy **Sync knowledge** (hoặc **Synchronize** từ menu thao tác) để ScaleFlow nạp tệp. Cho đến khi sync thành công, AI có thể chưa dùng nội dung mới. Xem [Upload tài liệu](#upload-documents) để biết flow từng bước và ảnh chụp điều khiển sync.

### Google Drive

![Google Drive](/static/img/knowledge-google-drive.png)

Dùng **Google Drive** khi đội ngũ đã lưu tài liệu doanh nghiệp trên Google Drive.

Trước khi dùng, kết nối Google Drive trong [Sử dụng Integration](../integrations/integration-usage). Xem hướng dẫn đầy đủ (kết nối, chọn tệp, sync) tại [Tích hợp Google Drive](../integrations/google-drive-integration).

### Crawl Web

![Crawl Web](/static/img/web-crawl.png)

Dùng **Crawl Web** khi thông tin đã được công khai trên website, chẳng hạn help center hoặc trang chính sách.

Nhập địa chỉ trang và để ScaleFlow đọc các trang website đã chọn. Ban đầu hãy chọn ít trang để dễ kiểm tra kết quả.

### Custom answers

![Custom answers](/static/img/custom-answers.png)

Dùng **Custom answers** khi muốn thêm trực tiếp các cặp hỏi-đáp ngắn trong ScaleFlow thay vì tải tệp lên.

Ví dụ phù hợp:

- "Giờ hỗ trợ của bạn là khi nào?" -> "Thứ Hai-Thứ Sáu, 8:00-17:00"
- "Bạn có giao hàng cuối tuần không?" -> "Không, chúng tôi chỉ giao trong ngày làm việc."
- "Bảo hành bao lâu?" -> "12 tháng từ ngày mua."

Loại nguồn này phù hợp với câu trả lời nhỏ, cố định, thay đổi thường xuyên và cần sửa nhanh.

### Freshdesk

![Freshdesk](/static/img/freshdesk.png)

Dùng **Freshdesk** khi đội lưu kiến thức hỗ trợ trong Freshdesk và muốn ScaleFlow đọc nguồn đó.

Trước khi dùng:

1. Kết nối Freshdesk trong [Sử dụng Integration](../integrations/integration-usage).
2. Xác nhận kết nối Freshdesk active.
3. Đồng bộ Knowledge base sau khi thiết lập để AI dùng nội dung cập nhật.

Phù hợp nhất với đội đã quản lý nội dung trợ giúp và kiến thức liên quan ticket trong Freshdesk.

### Internet search

![Internet search](/static/img/internet-search.png)

Dùng **Internet search** khi muốn AI lấy thông tin cập nhật từ web lúc chạy (ví dụ sự kiện hiện tại, cập nhật gần đây hoặc nguồn trực tiếp).

Lưu ý quan trọng:

- Nguồn này không hoạt động như thư viện tài liệu tĩnh.
- Kết quả có thể thay đổi theo thời gian dựa trên dữ liệu web trực tiếp.
- Dùng cho thông tin nhạy theo thời gian, không dùng cho chính sách nội bộ nghiêm ngặt.

Với quy tắc doanh nghiệp ổn định (hoàn tiền, SOP, giá), ưu tiên **File Upload**, **Custom answers** hoặc **Google Drive**.

## Trang chi tiết Knowledge

![Trang chi tiết Knowledge](/static/img/action-knowledge-1.png)

Trong một knowledge base, bạn có thể:

- Tìm tài liệu bằng **Search documents...**
- Lọc tài liệu theo trạng thái
- Chọn một hoặc nhiều dòng trong bảng tài liệu
- Tải tệp tài liệu xuống
- Xóa tài liệu (nếu được cấp quyền)
- Mở menu thao tác để sửa/kiểm tra/xóa

Khi ScaleFlow đọc hoặc cập nhật tài liệu, bạn có thể thấy thông báo tiến trình. Chờ hoàn tất trước khi kiểm tra.

## Upload, sync hoặc crawl

Tùy loại nguồn, bạn sẽ thấy một trong các thao tác chính:

- **Upload**: thêm tệp từ máy tính.
- **Sync knowledge** hoặc **Synchronize**: làm mới thông tin từ nguồn đã chọn.
- **Crawl Web**: đọc hoặc làm mới trang website.

Dùng các thao tác này mỗi khi thông tin doanh nghiệp thay đổi.

## Upload tài liệu

![Upload tài liệu](/static/img/upload-document.png)

1. Mở knowledge base File Upload.
2. Nhấp **Upload**.
3. Chọn một hoặc nhiều tệp.
4. Nhấp **Upload** trong hộp thoại.
5. Chờ upload hoàn tất và xem lại các dòng trong bảng tài liệu.
6. Nhấp **Sync knowledge** trên trang chi tiết knowledge (hoặc mở menu thao tác và chọn **Synchronize**) để xử lý tệp và cung cấp cho AI. Theo dõi cột trạng thái đến khi tài liệu chuyển từ **Pending** / **Syncing** sang **Ready** khi xử lý thành công.

![Đồng bộ Knowledge sau khi upload tài liệu](/static/img/sync-document.png)

Nếu tệp thất bại, kiểm tra loại tệp và thử lại.

## Kiểm tra Knowledge trước khi dùng với AI

![Test Knowledge](/static/img/test-document.png)

Dùng **Test Knowledge** để hỏi câu mẫu trước khi kết nối Knowledge với AI Agent.

Câu hỏi kiểm tra thực tế:

- "Chính sách hoàn tiền của chúng ta là gì?"
- "Giao hàng mất bao lâu?"
- "Cần tài liệu gì để đăng ký?"
- "Chúng ta cung cấp bảo hành gì?"

Nếu thiếu hoặc không rõ câu trả lời, cập nhật tài liệu, upload tệp tốt hơn hoặc cải thiện trang website rồi sync lại.

## Hiểu trạng thái tài liệu

Bạn có thể thấy các trạng thái:

- **Ready**: AI có thể dùng thông tin.
- **Pending**: đang chờ xử lý.
- **Syncing**: ScaleFlow đang đọc hoặc cập nhật nội dung.
- **Failed**: có lỗi cần xử lý.

Để có kết quả tốt nhất, chỉ kết nối Knowledge đã sẵn sàng và chính xác.

## Xóa knowledge base

![Xóa Knowledge](/static/img/action-knowledge.png)

1. Mở trang chi tiết knowledge.
2. Mở menu thao tác.
3. Nhấp **Delete**.
4. Xác nhận trong hộp thoại.

Thao tác này xóa nguồn knowledge khỏi thư viện. Hãy kiểm tra cẩn thận trước khi xóa.

## Kết nối Knowledge với AI

Sau khi Knowledge sẵn sàng:

1. Mở [Sử dụng AI Agent](./ai-agent-usage).
2. Tạo hoặc mở agent.
3. Thêm Knowledge này trong phần **Knowledge** của agent.
4. Kiểm tra agent.
5. Publish agent.
6. Bật agent trong [AI Assistant](./ai-assistant).

## Quy trình thực tế

1. Một phòng khám upload FAQ đặt lịch và tài liệu bảng giá.
2. Quản lý kiểm tra: "Làm sao để đặt lịch?"
3. Câu trả lời rõ ràng nên quản lý kết nối Knowledge với AI Agent.
4. Smart Assistant bắt đầu trả lời câu hỏi đặt lịch trong Inbox.
5. Nếu khách hàng hỏi đề xuất bác sĩ, AI tạo ticket cho nhân viên.

## Checklist gợi ý cho người mới

1. Bắt đầu với một Knowledge base.
2. Chỉ thêm các tài liệu quan trọng nhất trước.
3. Kiểm tra bằng câu hỏi thật của khách hàng.
4. Sửa tài liệu chưa rõ trước khi publish AI.
5. Xem lại Knowledge hằng tháng hoặc mỗi khi chính sách thay đổi.

## Khắc phục nhanh

### Không thấy trang Knowledge

- Hỏi admin cấp quyền xem Knowledge.

### Có thể xem nhưng không tạo/sửa/upload/xóa

- Hỏi admin cấp quyền quản lý Knowledge.

### Không thể chạy Sync, Crawl hoặc Test

- Hỏi admin cho phép cập nhật Knowledge.

### Sync quá lâu

1. Kiểm tra cảnh báo ingestion ở đầu trang chi tiết.
2. Dùng **Cancel** nếu cần.
3. Bắt đầu sync lại.

### Test Knowledge không trả lời hữu ích

- Xác minh tài liệu đã upload/sync thành công.
- Kiểm tra trạng thái tài liệu và lỗi sync trong bảng.
- Chạy lại sync hoặc crawl sau khi sửa vấn đề nguồn dữ liệu.
