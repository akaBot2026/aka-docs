---
id: technical-security-and-data-flow-description
title: Mô Tả Bảo Mật Kỹ Thuật Và Luồng Dữ Liệu
sidebar_label: Mô Tả Bảo Mật Kỹ Thuật Và Luồng Dữ Liệu
sidebar_position: 6
description: Akabot's reference architecture, data locations, external connections, and security controls.
displayed_sidebar: legalSidebar
---

# MÔ TẢ BẢO MẬT KỸ THUẬT VÀ LUỒNG DỮ LIỆU

## 1. Phạm vi

Tài liệu này cần được đọc cùng Điều khoản Sử dụng, Chính sách Quyền riêng tư và Xử lý Dữ liệu, và Phụ lục Sử dụng AI và Xử lý Dữ liệu AI. Tài liệu mô tả:

- kiến trúc triển khai;
- vị trí lưu trữ dữ liệu;
- kết nối bên ngoài;
- luồng dữ liệu AI;
- biện pháp kiểm soát bảo mật;
- ranh giới trách nhiệm.

Kiến trúc thực tế có thể khác nhau theo phiên bản và phương án triển khai của từng Khách hàng.

## 2. Kiến trúc tham chiếu hiện tại

Các thành phần chính có thể bao gồm:

**Akabot Center**

Quản lý Agent, người dùng, quy trình tự động, lịch chạy, tài nguyên, giám sát và các thông tin vận hành.

**AI Hub**

Quản lý kết nối Nhà cung cấp AI, thông tin xác thực, quyền truy cập mô hình, hạn mức sử dụng và các chức năng AI liên quan.

**Data Service**

Cung cấp khả năng quản lý hoặc trao đổi dữ liệu phục vụ tự động hóa.

**Akabot Studio**

Ứng dụng phát triển quy trình tự động được cài đặt trên máy người dùng.

**Akabot Agent**

Thành phần thực thi quy trình tự động trên máy hoặc máy chủ do Khách hàng chỉ định.

Các thành phần trên có thể thay đổi trong các phiên bản tương lai.

## 3. Ranh giới triển khai

Kiến trúc tham chiếu:

**MÔI TRƯỜNG KHÁCH HÀNG**

Người dùng  
↓  
Studio / Ứng dụng khách  
↓  
Center / AI Hub / Data Service  
↓  
Agent  
↓  
Ứng dụng / Cơ sở dữ liệu / Tệp / API của Khách hàng

Khi AI bên ngoài được sử dụng:

Môi trường Khách hàng  
↓  
AI Hub / Thành phần tích hợp AI  
↓  
Internet / HTTPS  
↓  
Nhà cung cấp AI bên ngoài  
↓  
Phản hồi AI  
↓  
Môi trường Khách hàng

## 4. Bảng vị trí dữ liệu

| Loại dữ liệu | Vị trí mặc định | Chuyển ra bên ngoài |
|---|---|---|
| Dữ liệu người dùng/tài khoản | Môi trường Khách hàng | Thông thường: không |
| Quy trình tự động (Workflow) | Môi trường Khách hàng | Thông thường: không |
| Cấu hình Agent | Môi trường Khách hàng | Thông thường: không |
| Dữ liệu nghiệp vụ | Môi trường Khách hàng | Tùy thuộc vào quy trình tự động |
| Nhật ký vận hành | Môi trường Khách hàng | Thông thường: không |
| Nhật ký kiểm toán | Môi trường Khách hàng | Thông thường: không |
| Câu lệnh AI (Prompt) | Môi trường Khách hàng / Nhà cung cấp AI | Có, khi sử dụng AI bên ngoài |
| Phản hồi AI | Nhà cung cấp AI → Môi trường Khách hàng | Có |
| Tài liệu gửi tới AI | Môi trường Khách hàng / Nhà cung cấp AI | Có |
| Thông tin xác thực API | Môi trường Khách hàng | Dùng để xác thực yêu cầu bên ngoài |
| Tệp hỗ trợ | Khách hàng gửi cho Akabot khi được cung cấp rõ ràng | Chỉ khi được cung cấp để hỗ trợ |

“Thông thường: không” không có nghĩa là dữ liệu không thể rời khỏi môi trường. Quy trình tự động do Khách hàng cấu hình có thể gửi dữ liệu tới hệ thống bên ngoài.

## 5. Kết nối mạng

Tùy cấu hình, các kết nối có thể bao gồm:

### Nội bộ

- Studio → Center;
- Agent → Center;
- Center → Cơ sở dữ liệu;
- AI Hub → dịch vụ nội bộ;
- ứng dụng → Data Service.

### Bên ngoài

- AI Hub → Nhà cung cấp AI;
- dịch vụ cấp phép;
- kho lưu trữ bản cập nhật/gói phần mềm;
- API bên ngoài do quy trình tự động sử dụng;
- dịch vụ email/web/ứng dụng được Khách hàng cấu hình.

## 6. Mã hóa khi truyền tải

Kết nối HTTP chứa dữ liệu nhạy cảm nên sử dụng HTTPS/TLS.

Khách hàng chịu trách nhiệm cấu hình chứng chỉ số và TLS cho các điểm cuối thuộc hạ tầng của mình.

Kết nối tới nhà cung cấp bên ngoài sử dụng cơ chế bảo mật được nhà cung cấp hỗ trợ.

## 7. Mã hóa khi lưu trữ

Mã hóa khi lưu trữ phụ thuộc vào:

- cấu hình cơ sở dữ liệu;
- hệ điều hành;
- cấu hình ổ đĩa/lưu trữ;
- nền tảng Kubernetes/lưu trữ;
- cấu hình đám mây/đám mây riêng.

Khách hàng chịu trách nhiệm bật và quản lý mã hóa khi lưu trữ ở tầng hạ tầng nếu yêu cầu.

## 8. Xác thực

Tùy phiên bản và cấu hình, Sản phẩm có thể hỗ trợ các phương thức xác thực phù hợp với môi trường doanh nghiệp.

Khách hàng chịu trách nhiệm:

- quản lý vòng đời người dùng;
- chính sách mật khẩu;
- nhà cung cấp danh tính;
- xác thực đa yếu tố (MFA) khi được cấu hình;
- tài khoản quản trị;
- tài khoản dịch vụ.

## 9. Phân quyền

Sản phẩm áp dụng kiểm soát truy cập theo vai trò hoặc cơ chế tương đương đối với các chức năng hỗ trợ.

Khách hàng phải áp dụng nguyên tắc đặc quyền tối thiểu.

Quyền truy cập quản trị chỉ nên cấp cho nhân sự có nhu cầu.

## 10. Quản lý thông tin bí mật

Các thông tin sau phải được coi là thông tin bí mật:

- mật khẩu;
- thông tin xác thực cơ sở dữ liệu;
- khóa API;
- khóa của Nhà cung cấp AI;
- token truy cập;
- khóa riêng tư;
- mã bí mật ứng dụng (client secret).

Thông tin bí mật phải được hạn chế quyền truy cập và không nên lưu dưới dạng không mã hóa khi có cơ chế bảo vệ phù hợp.

## 11. Ghi nhật ký

Hệ thống có thể tạo:

- nhật ký ứng dụng;
- nhật ký lỗi;
- nhật ký kiểm toán;
- nhật ký Agent;
- nhật ký quy trình tự động;
- siêu dữ liệu yêu cầu AI.

Khách hàng chịu trách nhiệm xác định:

- thời hạn lưu giữ nhật ký;
- quyền truy cập nhật ký;
- sao lưu;
- tích hợp với hệ thống giám sát an ninh (SIEM);
- giám sát.

Không nên ghi thông tin xác thực hoặc dữ liệu nhạy cảm không cần thiết vào nhật ký.

## 12. Luồng dữ liệu AI

### 12.1 Yêu cầu

Người dùng/Quy trình tự động  
→ Tính năng tích hợp AI  
→ AI Hub  
→ API của Nhà cung cấp AI.

### 12.2 Xử lý

Nhà cung cấp AI nhận dữ liệu đầu vào cần thiết và thực hiện suy luận theo dịch vụ được lựa chọn.

### 12.3 Phản hồi

Nhà cung cấp AI  
→ AI Hub  
→ Ứng dụng/Quy trình tự động gọi yêu cầu  
→ Môi trường Khách hàng.

## 13. Kiểm soát dữ liệu AI

Khách hàng nên đánh giá:

- nhà cung cấp;
- điểm cuối API;
- mô hình;
- khu vực;
- chính sách lưu giữ;
- chính sách huấn luyện;
- khả năng hỗ trợ Không Lưu giữ Dữ liệu (Zero Data Retention);
- cấu hình ghi nhật ký;
- loại tài khoản.

Không nên giả định mọi mô hình hoặc điểm cuối API của cùng một nhà cung cấp có chính sách lưu giữ giống nhau.

## 14. Bảng nhà cung cấp AI bên ngoài

| Nhà cung cấp | Dữ liệu gửi đi | Mục đích | Thời hạn lưu giữ do nhà cung cấp kiểm soát |
|---|---|---|---|
| OpenAI | Câu lệnh/ngữ cảnh/tệp theo cấu hình | Suy luận AI | Theo chính sách API của OpenAI và cấu hình áp dụng |
| Google Gemini | Câu lệnh/ngữ cảnh/tệp theo cấu hình | Suy luận AI | Theo chính sách API của Gemini và cấu hình áp dụng |
| Nhà cung cấp khác | Theo cấu hình | Suy luận AI | Theo chính sách của nhà cung cấp |

Bảng này phải được cập nhật khi Akabot bổ sung nhà cung cấp.

## 15. Bảo mật mạng

Khách hàng nên áp dụng:

- tường lửa;
- phân đoạn mạng;
- danh sách cho phép;
- hạn chế kết nối đi ra;
- hệ thống phát hiện/ngăn chặn xâm nhập (IDS/IPS) khi phù hợp;
- TLS;
- DNS bảo mật;
- kiểm soát quyền truy cập quản trị.

Đối với môi trường có yêu cầu bảo mật cao, lưu lượng đi ra tới Nhà cung cấp AI có thể được giới hạn theo tên miền/điểm cuối được phê duyệt.

## 16. Quản lý lỗ hổng bảo mật

Akabot thực hiện các hoạt động kiểm thử bảo mật và quản lý lỗ hổng bảo mật phù hợp với quy trình phát triển Sản phẩm.

Khách hàng chịu trách nhiệm đối với việc quản lý lỗ hổng bảo mật của:

- hệ điều hành;
- cơ sở dữ liệu;
- thiết bị mạng;
- phần mềm ảo hóa (hypervisor);
- hạ tầng Kubernetes;
- phần mềm bên thứ ba do Khách hàng quản lý.

## 17. Sao lưu và khôi phục sau thảm họa

Đối với mô hình triển khai tại chỗ, Khách hàng chịu trách nhiệm chính về:

- lịch sao lưu;
- thời hạn lưu giữ bản sao lưu;
- kiểm thử khôi phục;
- khôi phục sau thảm họa;
- mục tiêu điểm khôi phục (RPO);
- mục tiêu thời gian khôi phục (RTO).

Yêu cầu cụ thể về khả năng sẵn sàng cao (HA) và trung tâm dữ liệu dự phòng (DC-DR) cần được xác định trong kiến trúc giải pháp hoặc hợp đồng.

## 18. Quyền truy cập hỗ trợ

Akabot không có quyền truy cập quản trị thường trực vào môi trường Khách hàng theo mặc định.

Khi hỗ trợ từ xa được yêu cầu:

1. Khách hàng phê duyệt quyền truy cập;
2. quyền được giới hạn theo nhu cầu;
3. hoạt động truy cập tuân theo quy trình của Khách hàng;
4. quyền truy cập nên được thu hồi sau khi hoàn thành hỗ trợ.

## 19. Bảng phân định trách nhiệm

| Hạng mục | Akabot | Khách hàng | Nhà cung cấp bên ngoài |
|---|---|---|---|
| Bảo mật mã nguồn sản phẩm | Chính | - | - |
| Hạ tầng Khách hàng | - | Chính | - |
| Bảo mật hệ điều hành | Hướng dẫn | Chính | - |
| Mạng/tường lửa | Hướng dẫn | Chính | - |
| Cơ sở dữ liệu Khách hàng | Tương thích sản phẩm | Chính | - |
| Cấu hình quyền truy cập người dùng | Cung cấp năng lực | Chính | - |
| Thiết kế quy trình tự động | Nền tảng | Chính | - |
| Tính hợp pháp của dữ liệu Khách hàng | - | Chính | - |
| Sao lưu/Khôi phục sau thảm họa | Hướng dẫn | Chính | - |
| Tích hợp AI | Chính | Cấu hình/phê duyệt | Dịch vụ API |
| Hạ tầng Nhà cung cấp AI | - | Lựa chọn nhà cung cấp | Chính |
| Lưu giữ dữ liệu của Nhà cung cấp AI | - | Lựa chọn nhà cung cấp/cấu hình | Chính |
| Kiểm tra kết quả AI | - | Chính | Tạo kết quả từ mô hình |
| Thông tin xác thực API | Cung cấp năng lực bảo mật | Chính | Dịch vụ xác thực |

## 20. Trách nhiệm xử lý sự cố bảo mật

Sự cố thuộc Sản phẩm Akabot được xử lý theo quy trình ứng phó sự cố của Akabot.

Sự cố thuộc hạ tầng Khách hàng do Khách hàng xử lý.

Sự cố thuộc Nhà cung cấp AI hoặc dịch vụ bên ngoài được xử lý theo chính sách của nhà cung cấp tương ứng.

Các bên phối hợp khi sự cố ảnh hưởng tới nhiều phạm vi.

## 21. Thay đổi kiến trúc

Tài liệu này có thể được cập nhật khi:

- bổ sung hoặc loại bỏ Sản phẩm;
- thêm Nhà cung cấp AI;
- thay đổi luồng dữ liệu;
- thay đổi kiến trúc triển khai;
- bổ sung dịch vụ đám mây;
- thay đổi biện pháp kiểm soát bảo mật.

Việc cập nhật tài liệu kỹ thuật này không mặc nhiên thay đổi quyền sở hữu Dữ liệu Khách hàng hoặc các nghĩa vụ pháp lý đã được quy định trong hợp đồng.

## 22. Liên hệ bảo mật

**Công ty TNHH FPT IS**  
Vấn đề bảo mật: support@akabot.com  
Quyền riêng tư/Cán bộ bảo vệ dữ liệu (DPO): support@akabot.com  
Hỗ trợ kỹ thuật: support@akabot.com
