---
id: ai-services-and-data-processing-addendum
title: Phụ Lục Sử Dụng Và Xử Lý Dữ Liệu AI
sidebar_label: Phụ Lục Sử Dụng Và Xử Lý Dữ Liệu AI
sidebar_position: 4
description: Additional terms for AI features and the data shared with AI providers.
displayed_sidebar: legalSidebar
---

# PHỤ LỤC SỬ DỤNG AI VÀ XỬ LÝ DỮ LIỆU AI

**Phiên bản:** 1.0  
**Ngày cập nhật:** 01/10/2026  
**Ngày hiệu lực:** 01/10/2026  
**Đơn vị cung cấp:** CONG TY TNHH FPT IS
---

## 1. Mục đích

Phụ lục này quy định các điều kiện bổ sung khi Khách hàng sử dụng chức năng AI được cung cấp hoặc tích hợp trong Sản phẩm Akabot.

## 2. AI Provider

Sản phẩm có thể kết nối tới một hoặc nhiều nhà cung cấp AI (“AI Provider”), bao gồm nhưng không giới hạn:

- OpenAI;
- Google Gemini;
- Microsoft Azure OpenAI;
- Anthropic;
- các AI Provider khác được hỗ trợ trong tương lai.

Danh sách AI Provider có thể thay đổi mà không yêu cầu thay đổi Điều khoản Sử dụng chung.

## 3. Customer-Selected AI Provider

Khi Sản phẩm cho phép lựa chọn provider, model hoặc API endpoint, Khách hàng chịu trách nhiệm lựa chọn cấu hình phù hợp với yêu cầu về:

- security;
- privacy;
- data residency;
- retention;
- compliance;
- cost;
- performance.

## 4. AI Credentials

Tùy mô hình cung cấp, API key hoặc AI token có thể:

- do Khách hàng sở hữu và cung cấp;
- do Akabot cung cấp theo hợp đồng;
- được quản lý thông qua một dịch vụ trung gian.

Trách nhiệm về billing, quota và credentials phải được xác định theo hợp đồng hoặc cấu hình dịch vụ tương ứng.

## 5. AI Data Flow

Luồng xử lý điển hình:

**Customer Environment  
→ Akabot AI Component  
→ AI Provider API  
→ AI Model  
→ Akabot AI Component  
→ Customer Environment**

Khi external AI được sử dụng, dữ liệu được gửi tới AI Provider không còn được xử lý hoàn toàn trong phạm vi on-premises.

## 6. Dữ liệu có thể được gửi tới AI Provider

Tùy use case, dữ liệu có thể bao gồm:

- prompt;
- system instruction;
- workflow context;
- business data;
- extracted text;
- documents;
- images;
- metadata;
- conversation history;
- model parameters;
- user instructions.

Akabot chỉ truyền dữ liệu cần thiết theo chức năng và cấu hình được Khách hàng sử dụng.

## 7. Data Minimization

Khách hàng nên giới hạn dữ liệu gửi tới AI Provider ở mức cần thiết.

Đặc biệt, Khách hàng nên cân nhắc loại bỏ hoặc masking:

- passwords;
- API keys;
- access tokens;
- private keys;
- financial credentials;
- personal identifiers;
- sensitive personal data;
- confidential business information không cần thiết.

## 8. Provider Terms

Dữ liệu sau khi được gửi tới AI Provider sẽ chịu sự điều chỉnh của:

- provider terms;
- privacy policy;
- API terms;
- data processing terms;
- retention policy;
- geographic processing policy

của AI Provider tương ứng.

Akabot không thay mặt AI Provider cam kết rằng dữ liệu sẽ không được lưu trữ, không được xử lý ngoài một quốc gia cụ thể hoặc không được sử dụng cho bất kỳ mục đích nào, trừ khi Akabot có thỏa thuận bằng văn bản cho phép đưa ra cam kết đó.

## 9. Model Training

Akabot không sử dụng Dữ liệu Khách hàng để huấn luyện mô hình AI riêng hoặc mô hình dùng chung cho các Khách hàng khác, trừ khi:

- Khách hàng đã đồng ý rõ ràng; hoặc
- có thỏa thuận riêng bằng văn bản.

Việc AI Provider sử dụng dữ liệu để cải thiện hoặc huấn luyện mô hình phụ thuộc vào provider, loại dịch vụ, account plan và cấu hình tại thời điểm sử dụng.

## 10. Provider Retention

Retention của AI Provider có thể khác nhau theo:

- provider;
- account;
- free/paid tier;
- API endpoint;
- model;
- feature;
- region;
- data-control configuration.

Do đó, Akabot không mặc định đưa ra một thời hạn retention chung cho tất cả AI Providers.

Thông tin hiện hành cần được xác nhận với provider tương ứng trước khi triển khai use case có yêu cầu retention nghiêm ngặt.

## 11. Cross-Border Processing

AI Provider có thể xử lý dữ liệu tại các quốc gia hoặc khu vực khác với nơi Khách hàng triển khai Sản phẩm.

Khách hàng phải đánh giá yêu cầu data residency và cross-border transfer trước khi kích hoạt provider tương ứng.

## 12. AI Output

AI Output có thể:

- không chính xác;
- không đầy đủ;
- chứa hallucination;
- chứa bias;
- thay đổi giữa các lần thực hiện;
- không phù hợp cho use case cụ thể.

Khách hàng chịu trách nhiệm xác minh AI Output trước khi sử dụng cho các quyết định hoặc hành động quan trọng.

## 13. Human-in-the-Loop

Đối với high-impact use cases, Khách hàng nên thiết lập human review hoặc approval trước khi workflow thực hiện hành động.

Ví dụ:

- payment;
- financial transaction;
- contract approval;
- employee decision;
- customer eligibility;
- deletion of important data;
- legal decision;
- security configuration change.

## 14. Prohibited Use

Khách hàng không được sử dụng AI functionality cho mục đích trái pháp luật hoặc vi phạm chính sách sử dụng của AI Provider.

## 15. Prompt Injection và AI Security

Khách hàng hiểu rằng hệ thống AI có thể chịu các rủi ro như:

- prompt injection;
- malicious documents;
- unintended data disclosure;
- manipulated model output;
- insecure tool invocation.

Đối với AI Agent có khả năng thực hiện hành động, Khách hàng nên áp dụng:

- least privilege;
- tool allow-list;
- approval controls;
- input validation;
- output validation;
- logging;
- monitoring;
- separation of duties.

## 16. Changes to AI Providers

Akabot có thể:

- thêm provider;
- ngừng hỗ trợ provider;
- thay đổi model;
- thay đổi integration;
- thay đổi API implementation

để đáp ứng yêu cầu kỹ thuật, bảo mật hoặc thay đổi từ AI Provider.

Các thay đổi có ảnh hưởng đáng kể tới data flow cần được phản ánh trong tài liệu Technical Security & Data Flow tương ứng.
