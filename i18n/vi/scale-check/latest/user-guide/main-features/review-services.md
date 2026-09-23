---
id: review-services
title: Quản lý dịch vụ
sidebar_label: Quản lý dịch vụ
sidebar_position: 2
description: Theo dõi và quản lý kết quả của các dịch vụ xử lý hóa đơn.
displayed_sidebar: scaleCheckSidebar
---

# Quản lý dịch vụ

Sau khi thiết lập thành công [Quy trình xử lý](./processing-flows.md) và cho chạy thực tế, bạn có thể theo dõi kết quả trả về của từng bước dịch vụ cụ thể tại nhóm **Quản lý dịch vụ**. Điều này giúp bạn kiểm soát chi tiết xem hóa đơn nào bị lỗi hoặc tra cứu không thành công.

## Luồng sử dụng các dịch vụ
Các dịch vụ trong **Quản lý dịch vụ** phục vụ 2 giai đoạn: đưa hóa đơn vào hệ thống, sau đó xác thực và đối chiếu hóa đơn đó. Mọi hóa đơn hợp lệ sau cùng đều được gom về [Danh sách hoá đơn](./invoice-list.md) và có thể xuất báo cáo bằng [Mẫu báo cáo](./report-templates.md).

**Giai đoạn 1 — Đưa hóa đơn vào hệ thống:** chọn dịch vụ theo tình huống của bạn.

| Tình huống | Dịch vụ nên dùng |
|---|---|
| Đã có sẵn file PDF/XML của hóa đơn | Tải lên hóa đơn |
| Chỉ có ảnh hoặc PDF scan, không đọc được chữ | OCR hoá đơn |
| Muốn nhận hóa đơn tự động qua email | Hộp thư hoá đơn |
| Muốn hệ thống tự lấy hóa đơn từ cổng nhà cung cấp | Tải hóa đơn NCC |
| Muốn hệ thống tự lấy hóa đơn từ Tổng cục Thuế | Tải hóa đơn TCT |

**Giai đoạn 2 — Xác thực và đối chiếu hóa đơn:** áp dụng cho hóa đơn đã có trong hệ thống, hoặc để kiểm tra nhanh một tài liệu riêng lẻ.

| Bạn muốn xác thực điều gì | Dịch vụ nên dùng |
|---|---|
| Đối chiếu hóa đơn với dữ liệu Tổng cục Thuế | Tra cứu hoá đơn TCT |
| Kiểm tra mã số thuế người bán còn hoạt động | Tra cứu NNT |
| Kiểm tra chữ ký điện tử trong file XML | Kiểm tra chữ ký số |
| Kiểm tra chữ ký tay hoặc con dấu mộc trên ảnh, PDF | Kiểm tra chữ ký/con dấu |

Nếu quy trình xử lý bạn chọn ở mục **Tải lên hóa đơn** đã bao gồm sẵn các bước xác thực này, hệ thống sẽ tự động chạy toàn bộ — các dịch vụ ở Giai đoạn 2 chỉ cần dùng thêm khi bạn muốn kiểm tra độc lập một hóa đơn hoặc tài liệu riêng lẻ.

Ngoài 2 giai đoạn trên, mục **Quản lý tệp** ở cuối trang là kho lưu trữ chung, cho phép tra cứu lại mọi tệp (gốc và kết quả trung gian) đã đi qua các dịch vụ này.

## Giai đoạn 1 — Đưa hóa đơn vào hệ thống

### Hộp thư hoá đơn
Vào Quản lý dịch vụ > Hộp thư hoá đơn để nhận hóa đơn từ nhà cung cấp gửi qua email.

- Tab **Cấu hình alias**: Bấm **Đăng ký** để tạo một địa chỉ email alias nội bộ (ví dụ `tenkhachhang@ubot.vn`), gắn với một quy trình xử lý (pipeline) và tùy chọn theo chi nhánh. Cung cấp địa chỉ này cho nhà cung cấp — email họ gửi tới sẽ tự động vào Hộp thư đến. Mỗi tài khoản được cấp một số lượng alias giới hạn (ví dụ 2/5 alias), có thể bật/tắt kích hoạt từng alias.

![invoice-mailbox-alias-scalecheck](/static/img/invoice-mailbox-alias-scalecheck.png)

- Tab **Hộp thư đến**: Các email nhận được và trạng thái xử lý hiển thị ở đây, có thể lọc theo trạng thái và ngày nhận.

![invoice-mailbox-scalecheck](/static/img/invoice-mailbox-scalecheck.png)

### Tải hóa đơn NCC
Vào Quản lý dịch vụ > Tải hóa đơn NCC để theo dõi các yêu cầu tải hóa đơn từ nhà cung cấp.

- Tab **Thống kê**: Xem tổng yêu cầu, thành công, thất bại, hôm nay, tuần này.

![thongke-hoadon-scalecheck](/static/img/thongke-hoadon-scalecheck.png)

- Tab **Chi tiết**: Xem chi tiết từng request, NCC, code, link hóa đơn, trạng thái, thời gian xử lý, số lần thử và lỗi nếu có.

![hoadonchitiet-scalecheck](/static/img/hoadonchitiet-scalecheck.png)

### Tải hóa đơn TCT
Vào Quản lý dịch vụ > Tải hóa đơn TCT để cấu hình tài khoản TCT, tạo lịch tải và xem kết quả tải hóa đơn.

- Tài khoản TCT: Quản lý tài khoản đăng nhập Tổng cục Thuế.

![taihoadon-tct-scalecheck](/static/img/taihoadon-tct-scalecheck.png)

![taotct-scalecheck](/static/img/taotct-scalecheck.png)

- Lịch tải: Tạo lịch tải hóa đơn tự động theo ngày.

![lichtai-scalecheck](/static/img/lichtai-scalecheck.png)

![themlich-scalecheck](/static/img/themlich-scalecheck.png)

- Lịch sử chạy: Kiểm tra kết quả từng lần chạy, gồm số hóa đơn tìm thấy, mới, đã tải, trùng, lỗi và credit.

![lichsuchay-tct](/static/img/lichsuchay-tct.png)

- Hóa đơn đã tải: Tra cứu hóa đơn đã tải về từ TCT.

![hoadondatai-scalecheck](/static/img/hoadondatai-scalecheck.png)

### Tải lên hóa đơn
Vào Quản lý dịch vụ > Tải lên hóa đơn để tải lên thủ công file hóa đơn và cho chạy qua một quy trình xử lý.

1. Chọn loại hóa đơn: **File PDF** hoặc **File XML**.
2. Chọn quy trình xử lý ở mục **Quy trình xử lý**. Nếu quy trình có bước OCR, bạn có thể bật **OCR khi PDF không có mã tra cứu**.
3. Bấm Chọn tệp để chọn một hoặc nhiều tệp (tối đa 20 tệp mỗi lần).
4. Giữ nguyên tùy chọn **Kiểm tra trùng với hoá đơn đã tồn tại** nếu muốn hệ thống bỏ qua hóa đơn đã có sẵn.
5. Bấm Chạy xử lý.

![upload-invoice-scalecheck](/static/img/upload-invoice-scalecheck.png)

6. Mỗi lần tải lên được ghi lại trong Lịch sử xử lý bên dưới. Bấm biểu tượng con mắt ở một dòng để mở **Chi tiết run**, theo dõi tiến độ từng bước và xuất kết quả ra Excel. Ví dụ dưới đây, quy trình đã tự chạy đủ 6 bước: trích xuất nội dung hóa đơn, verify chữ ký số, đối chiếu bên mua, tra cứu hoá đơn TCT và tra cứu NNT — đây chính là các dịch vụ được mô tả ở Giai đoạn 2 bên dưới, bạn không cần chạy lại thủ công.

![upload-invoice-run-detail-scalecheck](/static/img/upload-invoice-run-detail-scalecheck.png)

7. Bấm biểu tượng kính lúp ở cột **Chi tiết** trên một bước trong bảng "Chi tiết Item" để xem đầy đủ dữ liệu vào (Dữ liệu vào) và kết quả trả về (Kết quả trả về) của riêng bước đó.

![upload-invoice-step-detail-scalecheck](/static/img/upload-invoice-step-detail-scalecheck.png)

Nếu một bước gặp lỗi, quy trình sẽ dừng lại ở bước đó — các bước sau chuyển sang trạng thái **Bỏ qua**, và bạn có thể bấm **Chạy lại item chưa hoàn thành** sau khi xử lý xong nguyên nhân lỗi.

![upload-invoice-run-failed-scalecheck](/static/img/upload-invoice-run-failed-scalecheck.png)

### OCR hoá đơn
Vào Quản lý dịch vụ > OCR hoá đơn để bóc tách dữ liệu từ hóa đơn dạng ảnh/PDF scan không có nội dung có thể đọc trực tiếp. Chỉ dùng dịch vụ này khi hóa đơn của bạn là ảnh chụp/scan; nếu đã có file PDF/XML gốc, dùng **Tải lên hóa đơn** ở trên sẽ nhanh hơn.

1. Tab **Yêu cầu OCR**: Liệt kê các tệp đã gửi OCR, gồm tên tệp, số trang, số hóa đơn tách được, trạng thái xử lý (chờ xử lý, đang bóc tách, hoàn thành, thất bại) và thời gian tải lên. Có thể lọc theo tên tệp và khoảng thời gian.

![ocr-invoice-scalecheck](/static/img/ocr-invoice-scalecheck.png)

2. Bấm **Tải hoá đơn** để chọn file PDF/ảnh. Bạn có thể tùy chọn cho file chạy tiếp qua một pipeline ngay sau khi OCR (ví dụ pipeline kiểm tra thêm chữ ký số), hoặc để **"Không dùng pipeline — chỉ OCR"** nếu chỉ cần bóc tách dữ liệu. Lưu ý thao tác này sẽ trừ credit theo số trang hoá đơn, cộng thêm các bước pipeline nếu có chọn.

![ocr-invoice-upload-scalecheck](/static/img/ocr-invoice-upload-scalecheck.png)

3. Nếu chọn chạy qua pipeline, bấm biểu tượng sơ đồ (bên cạnh biểu tượng con mắt) để mở **Chi tiết run** — cũng gồm các bước tương tự Tải lên hóa đơn. Bước "OCR bóc tách hoá đơn" sẽ dừng ở trạng thái **Chờ xác nhận OCR** cho đến khi bạn xác nhận dữ liệu bóc tách ở tab Danh sách hoá đơn, các bước sau đó (đối chiếu bên mua, tra cứu hoá đơn TCT, tra cứu NNT...) mới tiếp tục chạy.

![ocr-invoice-run-pending-scalecheck](/static/img/ocr-invoice-run-pending-scalecheck.png)

4. Tab **Danh sách hoá đơn**: Sau khi OCR hoàn tất, hóa đơn được bóc tách sẽ hiển thị ở đây. Hóa đơn cần rà soát sẽ có trạng thái **Cần xác nhận** — mở hóa đơn để xác nhận dữ liệu bóc tách là chính xác.

![ocr-invoice-list-scalecheck](/static/img/ocr-invoice-list-scalecheck.png)

5. Bấm biểu tượng con mắt để mở **Chi tiết hoá đơn OCR**: bên trái là ảnh hóa đơn gốc (có thể chuyển trang nếu hóa đơn nhiều trang), bên phải là các trường dữ liệu đã bóc tách kèm % độ tin cậy cho từng trường (Thông tin chung và Hàng hoá dịch vụ). Sửa lại trường nào chưa đúng, rồi bấm **Xác nhận sửa** để lưu.

![ocr-invoice-confirm-detail-scalecheck](/static/img/ocr-invoice-confirm-detail-scalecheck.png)

6. Sau khi xác nhận, hóa đơn chuyển sang trạng thái **Xác nhận thành công** và được ghi nhận vào hệ thống.

![ocr-invoice-confirmed-scalecheck](/static/img/ocr-invoice-confirmed-scalecheck.png)

Ngoài luồng xử lý trên, nút **Cấu hình ngưỡng** ở đầu trang (cạnh nút Tải hoá đơn) cho phép bạn đặt sẵn ngưỡng độ tin cậy (%) cho từng trường dữ liệu (đơn vị bán hàng, mã số thuế, tiền hàng, hàng hoá dịch vụ...) — không phụ thuộc vào việc đã tải hóa đơn nào hay chưa. Hóa đơn có trường bóc tách dưới ngưỡng sẽ luôn cần xác nhận thủ công ở bước 5; bạn cũng có thể bật **Tự động xác nhận & lưu khi đạt ngưỡng** để bỏ qua bước xác nhận cho các hóa đơn đạt đủ độ tin cậy.

![ocr-invoice-threshold-scalecheck](/static/img/ocr-invoice-threshold-scalecheck.png)

## Giai đoạn 2 — Xác thực và đối chiếu hóa đơn

### Tra cứu hóa đơn TCT
Dùng để đối chiếu / xác thực hóa đơn với dữ liệu Tổng cục Thuế. 

- Có thể tra cứu đơn lẻ hoặc hàng loạt:

![tracuu-tct-scalecheck](/static/img/tracuu-tct-scalecheck.png)

- Xem chi tiết tra cứu:

![tracuu-chitiet-scalecheck](/static/img/tracuu-chitiet-scalecheck.png)

### Tra cứu NNT
Dùng để kiểm tra trạng thái hoạt động MST người bán / người nộp thuế.

- Tra cứu đơn lẻ hoặc import Excel (MST):

![tracuu-ntt-scalecheck](/static/img/tracuu-ntt-scalecheck.png)

- Xem lịch sử và kết quả ở tab Chi tiết / Thống kê. Mỗi lần tra cứu trừ credit theo bảng giá dịch vụ:

![tracuuchitiet-nnt](/static/img/tracuuchitiet-nnt.png)

### Kiểm tra chữ ký số
Vào Quản lý dịch vụ > Kiểm tra chữ ký số để kiểm tra tính hợp lệ của các **chữ ký điện tử** gắn trong file XML của hóa đơn (người bán, cơ quan thuế). Có 3 cách gửi hóa đơn để kiểm tra:

- **Đơn lẻ**: Dán trực tiếp nội dung XML hóa đơn, hoặc tải lên 1 file `.xml`.

![signature-check-single-scalecheck](/static/img/signature-check-single-scalecheck.png)

- **Theo danh sách (ZIP)**: Tải lên 1 file ZIP chứa nhiều file XML hóa đơn để kiểm tra hàng loạt.

![signature-check-zip-scalecheck](/static/img/signature-check-zip-scalecheck.png)

- **File PDF đã ký**: Tải lên 1 file PDF đã ký số (PAdES), hoặc 1 file ZIP chứa nhiều PDF, để kiểm tra hàng loạt — không nhất thiết phải là hóa đơn.

![signature-check-pdf-scalecheck](/static/img/signature-check-pdf-scalecheck.png)

### Kiểm tra chữ ký/con dấu
Vào Quản lý dịch vụ > Kiểm tra chữ ký/con dấu để phát hiện **chữ ký tay và con dấu vật lý** trên ảnh hoặc PDF của tài liệu (khác với chữ ký điện tử ở mục trên), đồng thời xác định các chữ ký/con dấu đó nằm trong hay ngoài khu vực ký được định nghĩa.

- Tab **Cơ bản**: Tải lên 1 tệp, tùy chọn nhập External ID để tự quản lý, rồi bấm **Gửi kiểm tra**.

![stamp-signature-check-scalecheck](/static/img/stamp-signature-check-scalecheck.png)

- Bảng kết quả bên dưới hiển thị số lượng chữ ký và con dấu tìm thấy trong/ngoài khu vực ký cho mỗi yêu cầu. Bấm biểu tượng con mắt trên một yêu cầu để mở **Chi tiết kiểm tra** — gồm số liệu theo từng trang và một ghi chú do AI tạo ra giải thích những gì tìm thấy trên tài liệu (ví dụ xác nhận số chữ ký tay/con dấu vật lý phát hiện được, hoặc làm rõ rằng nhãn "Signature Valid" trên hóa đơn điện tử không phải là chữ ký tay hay con dấu vật lý):

![stamp-signature-detail-einvoice-scalecheck](/static/img/stamp-signature-detail-einvoice-scalecheck.png)

- Tab **Nâng cao**: Tải lên tài liệu cần kiểm tra cùng với một hoặc nhiều ảnh mẫu con dấu và/hoặc chữ ký mẫu, rồi bấm **Kiểm tra so khớp**. Hệ thống dùng AI để so khớp tài liệu với các mẫu này.

> Kết quả so khớp chỉ mang tính GỢI Ý tham khảo, không phải kết luận pháp lý.

![stamp-signature-advanced-scalecheck](/static/img/stamp-signature-advanced-scalecheck.png)

## Quản lý tệp
Đây là kho lưu trữ chung cho mọi tệp đã đi qua các dịch vụ ở trên — không riêng Giai đoạn 1 hay Giai đoạn 2. Vào Quản lý dịch vụ > Quản lý tệp để tra cứu hoặc tải lại một tệp gốc (hóa đơn PDF/XML bạn đã tải lên) hoặc tệp kết quả trung gian (ảnh trang OCR, ảnh kết quả tra cứu...) do hệ thống sinh ra trong quá trình xử lý.

- Tab **Thống kê**: Xem số file trong kỳ, tổng dung lượng, số file phát sinh hôm nay/tuần này, biểu đồ file mới theo ngày và theo trạng thái (Khởi tạo, Đã tải lên, Đã xóa, Đã hủy), cùng bảng các định dạng file phổ biến nhất (PDF, JPEG, XML...).

![file-management-stats-scalecheck](/static/img/file-management-stats-scalecheck.png)

- Tab **Danh sách**: Tra cứu từng file theo tên, định dạng, mục đích (ví dụ tệp gốc dùng làm đầu vào pipeline, ảnh trang OCR, ảnh/tệp kết quả tra cứu), trạng thái, kích thước, doanh nghiệp và chi nhánh. Bấm biểu tượng tải xuống để lấy lại tệp gốc.

![file-management-list-scalecheck](/static/img/file-management-list-scalecheck.png)

---

Mọi hóa đơn hợp lệ (từ Giai đoạn 1) sẽ được gom chung về một nơi duy nhất, dù kết quả xác thực ở Giai đoạn 2 thế nào. Bạn hãy chuyển sang [Xem danh sách hóa đơn](./invoice-list.md) để quản lý toàn bộ dữ liệu, hoặc sang [Mẫu báo cáo](./report-templates.md) để xuất báo cáo.
