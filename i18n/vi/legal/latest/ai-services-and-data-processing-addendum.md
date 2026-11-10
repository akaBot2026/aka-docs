---
id: ai-services-and-data-processing-addendum
title: Phụ Lục Sử Dụng Và Xử Lý Dữ Liệu AI
sidebar_label: Phụ Lục Sử Dụng Và Xử Lý Dữ Liệu AI
sidebar_position: 5
description: Additional terms for AI features and the data shared with AI providers.
displayed_sidebar: legalSidebar
---

# PHỤ LỤC SỬ DỤNG AI VÀ XỬ LÝ DỮ LIỆU AI

## 1. Mục đích

Phụ lục này quy định các điều kiện bổ sung khi Khách hàng sử dụng chức năng AI được cung cấp hoặc tích hợp trong Sản phẩm Akabot. Phụ lục này cần được đọc cùng Điều khoản Sử dụng và Chính sách Quyền riêng tư và Xử lý Dữ liệu. Các thuật ngữ viết hoa không được định nghĩa trong Phụ lục này có nghĩa như được nêu trong Điều khoản Sử dụng.

## 2. Nhà cung cấp AI

Sản phẩm có thể kết nối tới một hoặc nhiều nhà cung cấp AI (“Nhà cung cấp AI”), bao gồm nhưng không giới hạn:

- OpenAI;
- Google Gemini;
- Microsoft Azure OpenAI;
- Anthropic;
- các Nhà cung cấp AI khác được hỗ trợ trong tương lai.

Danh sách Nhà cung cấp AI có thể thay đổi mà không yêu cầu thay đổi Điều khoản Sử dụng chung.

## 3. Nhà cung cấp AI do Khách hàng lựa chọn

Khi Sản phẩm cho phép lựa chọn nhà cung cấp, mô hình hoặc điểm cuối API, Khách hàng chịu trách nhiệm lựa chọn cấu hình phù hợp với yêu cầu về:

- bảo mật;
- quyền riêng tư;
- vị trí lưu trữ dữ liệu;
- thời hạn lưu giữ;
- tuân thủ;
- chi phí;
- hiệu năng.

## 4. Thông tin xác thực AI

Tùy mô hình cung cấp, khóa API hoặc token AI có thể:

- do Khách hàng sở hữu và cung cấp;
- do Akabot cung cấp theo hợp đồng;
- được quản lý thông qua một dịch vụ trung gian.

Trách nhiệm về thanh toán, hạn mức sử dụng và thông tin xác thực phải được xác định theo hợp đồng hoặc cấu hình dịch vụ tương ứng.

## 5. Luồng dữ liệu AI

Luồng xử lý điển hình gồm các bước sau:

| Bước | Nơi thực hiện | Nội dung |
|---|---|---|
| 1 | Môi trường Khách hàng | Gửi yêu cầu có sử dụng chức năng AI tới Thành phần AI của Akabot. |
| 2 | Thành phần AI của Akabot | Chuyển yêu cầu và dữ liệu cần thiết tới API của Nhà cung cấp AI. |
| 3 | API của Nhà cung cấp AI | Chuyển dữ liệu tới Mô hình AI để xử lý. |
| 4 | Mô hình AI | Tạo kết quả và trả về cho Thành phần AI của Akabot thông qua API của Nhà cung cấp AI. |
| 5 | Thành phần AI của Akabot | Trả kết quả về Môi trường Khách hàng. |

Khi Khách hàng đồng ý sử dụng Hệ thống AI từ bên thứ ba, dữ liệu của Khách hàng sẽ được gửi tới Nhà cung cấp AI và Akabot không đảm bảo dữ liệu của Khách hàng sẽ được xử lý hoàn toàn trong phạm vi tại chỗ.

## 6. Dữ liệu có thể được gửi tới Nhà cung cấp AI

Tùy trường hợp sử dụng cụ thể, dữ liệu có thể bao gồm:

- câu lệnh (prompt);
- chỉ dẫn hệ thống;
- ngữ cảnh của quy trình tự động;
- dữ liệu nghiệp vụ;
- văn bản được trích xuất;
- tài liệu;
- hình ảnh;
- siêu dữ liệu;
- lịch sử hội thoại;
- tham số mô hình;
- chỉ dẫn của người dùng.

Akabot chỉ truyền dữ liệu cần thiết theo chức năng và cấu hình được Khách hàng sử dụng.

## 7. Tối thiểu hóa dữ liệu

Khách hàng nên giới hạn dữ liệu gửi tới Nhà cung cấp AI ở mức cần thiết.

Đặc biệt, Khách hàng nên cân nhắc loại bỏ hoặc che dữ liệu:

- mật khẩu;
- khóa API;
- token truy cập;
- khóa riêng tư;
- thông tin xác thực tài chính;
- thông tin định danh cá nhân;
- dữ liệu cá nhân nhạy cảm;
- thông tin bảo mật kinh doanh không cần thiết.

## 8. Điều khoản của Nhà cung cấp

Dữ liệu của Khách hàng sau khi được gửi tới Nhà cung cấp AI sẽ chịu sự điều chỉnh của:

- điều khoản của nhà cung cấp;
- chính sách quyền riêng tư;
- điều khoản API;
- điều khoản xử lý dữ liệu;
- chính sách lưu giữ;
- chính sách xử lý theo khu vực địa lý

của Nhà cung cấp AI tương ứng.

Akabot không thay mặt Nhà cung cấp AI cam kết rằng dữ liệu sẽ không được lưu trữ, không được xử lý ngoài một quốc gia cụ thể hoặc không được sử dụng cho bất kỳ mục đích nào, trừ khi Akabot có thỏa thuận bằng văn bản cho phép đưa ra cam kết đó.

## 9. Huấn luyện mô hình

Akabot không sử dụng Dữ liệu Khách hàng để huấn luyện mô hình AI riêng hoặc mô hình dùng chung cho các Khách hàng khác.

Việc Nhà cung cấp AI sử dụng dữ liệu để cải thiện hoặc huấn luyện mô hình phụ thuộc vào quy định của nhà cung cấp, loại dịch vụ, gói tài khoản và cấu hình tại thời điểm sử dụng.

## 10. Thời hạn lưu giữ của Nhà cung cấp

Thời hạn lưu giữ dữ liệu của Nhà cung cấp AI có thể khác nhau theo:

- nhà cung cấp;
- tài khoản;
- gói miễn phí/trả phí;
- điểm cuối API;
- mô hình;
- tính năng;
- khu vực;
- cấu hình kiểm soát dữ liệu.

Do đó, Akabot không mặc định đưa ra một thời hạn lưu giữ chung cho tất cả Nhà cung cấp AI.

Thông tin hiện hành cần được xác nhận với nhà cung cấp tương ứng trước khi triển khai trường hợp sử dụng có yêu cầu lưu giữ nghiêm ngặt.

## 11. Xử lý xuyên biên giới

Nhà cung cấp AI có thể xử lý dữ liệu tại các quốc gia hoặc khu vực khác với nơi Khách hàng triển khai Sản phẩm.

Khách hàng phải đánh giá yêu cầu về vị trí lưu trữ dữ liệu và chuyển dữ liệu xuyên biên giới trước khi kích hoạt nhà cung cấp tương ứng.

## 12. Kết quả do AI tạo ra

Kết quả do AI tạo ra có thể:

- không chính xác;
- không đầy đủ;
- chứa thông tin bịa đặt;
- chứa thiên lệch;
- thay đổi giữa các lần thực hiện;
- không phù hợp cho trường hợp sử dụng cụ thể.

Khách hàng chịu trách nhiệm xác minh Kết quả do AI tạo ra trước khi sử dụng cho các quyết định hoặc hành động quan trọng.

## 13. Sự giám sát của con người

Đối với các trường hợp sử dụng Hệ thống AI có rủi ro cao, bao gồm nhưng không giới hạn ở các trường hợp dưới đây, Khách hàng nên thiết lập cơ chế kiểm tra hoặc phê duyệt của con người trước khi quy trình tự động thực hiện hành động.

- thanh toán;
- giao dịch tài chính;
- phê duyệt hợp đồng;
- quyết định liên quan đến nhân sự;
- xét duyệt điều kiện khách hàng;
- xóa dữ liệu quan trọng;
- quyết định pháp lý;
- thay đổi cấu hình bảo mật.

## 14. Hành vi bị cấm

Khách hàng không được sử dụng chức năng AI cho mục đích trái pháp luật hoặc vi phạm chính sách sử dụng của Nhà cung cấp AI và Akabot.

## 15. Tấn công chèn lệnh và bảo mật AI

Khách hàng hiểu rằng Hệ thống AI có thể chịu các rủi ro như:

- tấn công chèn lệnh;
- tài liệu độc hại;
- lộ dữ liệu ngoài ý muốn;
- kết quả mô hình bị thao túng;
- gọi công cụ không an toàn.

Khi Khách hàng sử dụng Hệ thống AI có khả năng tự thực hiện hành động, Khách hàng nên áp dụng các biện pháp kiểm soát sau:

- nguyên tắc đặc quyền tối thiểu: chỉ cấp cho Hệ thống AI các quyền truy cập và thao tác ở mức tối thiểu cần thiết;
- danh sách công cụ được phép: chỉ cho phép Hệ thống AI sử dụng các công cụ đã được phê duyệt;
- cơ chế phê duyệt: yêu cầu con người phê duyệt trước khi Hệ thống AI thực hiện hành động quan trọng;
- kiểm tra đầu vào: kiểm tra yêu cầu và dữ liệu trước khi chuyển cho Hệ thống AI;
- kiểm tra đầu ra: kiểm tra kết quả của Hệ thống AI trước khi sử dụng hoặc thực hiện hành động dựa trên kết quả đó;
- ghi nhật ký: ghi lại hoạt động của Hệ thống AI;
- giám sát: theo dõi hoạt động của Hệ thống AI để phát hiện bất thường;
- phân tách nhiệm vụ: không giao toàn bộ các bước của một hoạt động quan trọng cho cùng một cá nhân hoặc một hệ thống.

## 16. Thay đổi Nhà cung cấp AI

Akabot có thể:

- thêm nhà cung cấp;
- ngừng hỗ trợ nhà cung cấp;
- thay đổi mô hình;
- thay đổi tích hợp;
- thay đổi cách triển khai API

để đáp ứng yêu cầu kỹ thuật, bảo mật hoặc thay đổi từ Nhà cung cấp AI.

Các thay đổi có ảnh hưởng đáng kể tới luồng dữ liệu cần được phản ánh trong tài liệu Mô Tả Bảo Mật Kỹ Thuật Và Luồng Dữ Liệu tương ứng.

## 17. Liên hệ

**Công ty TNHH FPT IS**  
Trang web: https://akabot.com  
Hỗ trợ: support@akabot.com
