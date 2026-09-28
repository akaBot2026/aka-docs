---
id: technical-security-and-data-flow-description
title: Mô Tả Bảo Mật Kỹ Thuật Và Luồng Dữ Liệu
sidebar_label: Mô Tả Bảo Mật Kỹ Thuật Và Luồng Dữ Liệu
sidebar_position: 5
description: Akabot's reference architecture, data locations, external connections, and security controls.
displayed_sidebar: legalSidebar
---

# MÔ TẢ BẢO MẬT KỸ THUẬT VÀ LUỒNG DỮ LIỆU

**Phiên bản:** 1.0  
**Ngày cập nhật:** 01/10/2026  
**Ngày hiệu lực:** 01/10/2026  
**Đơn vị cung cấp:** CONG TY TNHH FPT IS

> Tài liệu này mô tả kiến trúc hiện tại và có thể được cập nhật độc lập với Terms of Use khi kiến trúc hoặc Sản phẩm thay đổi.

---

## 1. Phạm vi

Tài liệu mô tả:

- deployment architecture;
- data locations;
- external connections;
- AI data flows;
- security controls;
- responsibility boundaries.

Kiến trúc thực tế có thể khác nhau theo phiên bản và phương án triển khai của từng Khách hàng.

## 2. Kiến trúc tham chiếu hiện tại

Các thành phần chính có thể bao gồm:

**Akabot Center**

Quản lý Agent, user, workflow, scheduling, assets, monitoring và các thông tin vận hành.

**AI Hub**

Quản lý kết nối AI Provider, credentials, model access, quota và các chức năng AI liên quan.

**Data Service**

Cung cấp khả năng quản lý hoặc trao đổi dữ liệu phục vụ automation.

**Akabot Studio**

Ứng dụng phát triển workflow được cài đặt trên máy người dùng.

**Akabot Agent**

Runtime thực thi workflow trên máy hoặc server được Khách hàng chỉ định.

Các thành phần trên có thể thay đổi trong các phiên bản tương lai.

## 3. Deployment Boundary

Kiến trúc tham chiếu:

**CUSTOMER ENVIRONMENT**

Users  
↓  
Studio / Client Applications  
↓  
Center / AI Hub / Data Service  
↓  
Agent  
↓  
Customer Applications / Database / Files / APIs

Khi external AI được sử dụng:

Customer Environment  
↓  
AI Hub / AI-enabled Component  
↓  
Internet / HTTPS  
↓  
External AI Provider  
↓  
AI Response  
↓  
Customer Environment

## 4. Data Location Matrix

| Data Category | Default Location | External Transfer |
|---|---|---|
| User/account data | Customer environment | Normally No |
| Workflow | Customer environment | Normally No |
| Agent configuration | Customer environment | Normally No |
| Business data | Customer environment | Depends on workflow |
| Operational logs | Customer environment | Normally No |
| Audit logs | Customer environment | Normally No |
| AI prompt | Customer environment / AI Provider | Yes when external AI is used |
| AI response | AI Provider → Customer environment | Yes |
| Documents sent to AI | Customer environment / AI Provider | Yes |
| API credentials | Customer environment | Used to authenticate external requests |
| Support files | Customer → Akabot when explicitly provided | Only when provided for support |

“Normally No” không có nghĩa là dữ liệu không thể rời khỏi môi trường. Workflow do Khách hàng cấu hình có thể gửi dữ liệu tới external systems.

## 5. Network Connections

Tùy cấu hình, các kết nối có thể bao gồm:

### Internal

- Studio → Center;
- Agent → Center;
- Center → Database;
- AI Hub → internal services;
- application → Data Service.

### External

- AI Hub → AI Provider;
- licensing service;
- update/package repository;
- external APIs do workflow sử dụng;
- email/web/application services được Khách hàng cấu hình.

## 6. Encryption in Transit

Kết nối HTTP chứa dữ liệu nhạy cảm nên sử dụng HTTPS/TLS.

Khách hàng chịu trách nhiệm cấu hình certificate và TLS cho các endpoint thuộc hạ tầng của mình.

Kết nối tới external provider sử dụng cơ chế bảo mật được provider hỗ trợ.

## 7. Encryption at Rest

Encryption at rest phụ thuộc vào:

- database configuration;
- operating system;
- disk/storage configuration;
- Kubernetes/storage platform;
- cloud/private-cloud configuration.

Khách hàng chịu trách nhiệm bật và quản lý encryption at rest ở tầng hạ tầng nếu yêu cầu.

## 8. Authentication

Tùy phiên bản và cấu hình, Sản phẩm có thể hỗ trợ các phương thức authentication phù hợp với môi trường enterprise.

Khách hàng chịu trách nhiệm:

- quản lý user lifecycle;
- password policies;
- identity provider;
- MFA khi được cấu hình;
- administrator accounts;
- service accounts.

## 9. Authorization

Sản phẩm áp dụng role-based access control hoặc cơ chế tương đương đối với các chức năng hỗ trợ.

Khách hàng phải áp dụng nguyên tắc least privilege.

Administrator access chỉ nên cấp cho nhân sự có nhu cầu.

## 10. Secrets Management

Các thông tin sau phải được coi là secrets:

- password;
- database credentials;
- API key;
- AI Provider key;
- access token;
- private key;
- client secret.

Secrets phải được hạn chế quyền truy cập và không nên lưu dưới dạng plaintext khi có cơ chế bảo mật phù hợp.

## 11. Logging

Hệ thống có thể tạo:

- application logs;
- error logs;
- audit logs;
- Agent logs;
- workflow logs;
- AI request metadata.

Khách hàng chịu trách nhiệm xác định:

- log retention;
- log access;
- backup;
- SIEM integration;
- monitoring.

Không nên ghi credentials hoặc dữ liệu nhạy cảm không cần thiết vào log.

## 12. AI Data Flow

### 12.1 Request

User/Workflow  
→ AI-enabled Feature  
→ AI Hub  
→ AI Provider API.

### 12.2 Processing

AI Provider nhận input cần thiết và thực hiện inference theo dịch vụ được lựa chọn.

### 12.3 Response

AI Provider  
→ AI Hub  
→ Calling Application/Workflow  
→ Customer Environment.

## 13. AI Data Controls

Khách hàng nên đánh giá:

- provider;
- API endpoint;
- model;
- region;
- retention policy;
- training policy;
- Zero Data Retention availability;
- logging configuration;
- account type.

Không nên giả định mọi model hoặc API endpoint của cùng một provider có chính sách retention giống nhau.

## 14. External AI Provider Matrix

| Provider | Data Sent | Purpose | Provider-controlled Retention |
|---|---|---|---|
| OpenAI | Prompt/context/files as configured | AI inference | According to applicable OpenAI API policy and configuration |
| Google Gemini | Prompt/context/files as configured | AI inference | According to applicable Gemini API policy and configuration |
| Other Provider | As configured | AI inference | According to provider policy |

Matrix này phải được cập nhật khi Akabot bổ sung provider.

## 15. Network Security

Khách hàng nên áp dụng:

- firewall;
- network segmentation;
- allow-list;
- restricted outbound connections;
- IDS/IPS khi phù hợp;
- TLS;
- secure DNS;
- controlled administrative access.

Đối với môi trường có yêu cầu bảo mật cao, outbound traffic tới AI Provider có thể được giới hạn theo domain/endpoint được phê duyệt.

## 16. Vulnerability Management

Akabot thực hiện các hoạt động security testing và vulnerability management phù hợp với quy trình phát triển Sản phẩm.

Khách hàng chịu trách nhiệm đối với vulnerability management của:

- operating system;
- database;
- network equipment;
- hypervisor;
- Kubernetes infrastructure;
- third-party software do Khách hàng quản lý.

## 17. Backup và Disaster Recovery

Đối với on-premises deployment, Khách hàng chịu trách nhiệm chính về:

- backup schedule;
- backup retention;
- restore testing;
- disaster recovery;
- RPO;
- RTO.

Yêu cầu HA/DC-DR cụ thể cần được xác định trong solution architecture hoặc hợp đồng.

## 18. Support Access

Akabot không có persistent administrative access vào môi trường Khách hàng theo mặc định.

Khi remote support được yêu cầu:

1. Khách hàng phê duyệt quyền truy cập;
2. quyền được giới hạn theo nhu cầu;
3. hoạt động truy cập tuân theo quy trình của Khách hàng;
4. quyền truy cập nên được revoke sau khi hoàn thành support.

## 19. Responsibility Matrix

| Control | Akabot | Customer | External Provider |
|---|---|---|---|
| Product source-code security | Primary | - | - |
| Customer infrastructure | - | Primary | - |
| OS security | Guidance | Primary | - |
| Network/firewall | Guidance | Primary | - |
| Customer database | Product compatibility | Primary | - |
| User access configuration | Capability | Primary | - |
| Workflow design | Platform | Primary | - |
| Customer data legality | - | Primary | - |
| Backup/DR | Guidance | Primary | - |
| AI integration | Primary | Configuration/approval | API service |
| AI Provider infrastructure | - | Provider selection | Primary |
| AI Provider retention | - | Provider/config selection | Primary |
| AI Output verification | - | Primary | Model generation |
| API credentials | Secure capability | Primary | Authentication service |

## 20. Security Incident Responsibility

Sự cố thuộc Sản phẩm Akabot được xử lý theo incident response process của Akabot.

Sự cố thuộc hạ tầng Khách hàng do Khách hàng xử lý.

Sự cố thuộc AI Provider hoặc external service được xử lý theo chính sách của provider tương ứng.

Các bên phối hợp khi sự cố ảnh hưởng tới nhiều phạm vi.

## 21. Architecture Changes

Tài liệu này có thể được cập nhật khi:

- bổ sung hoặc loại bỏ Sản phẩm;
- thêm AI Provider;
- thay đổi data flow;
- thay đổi deployment architecture;
- bổ sung cloud services;
- thay đổi security controls.

Việc cập nhật tài liệu kỹ thuật này không mặc nhiên thay đổi quyền sở hữu Dữ liệu Khách hàng hoặc các nghĩa vụ pháp lý đã được quy định trong hợp đồng.

## 22. Security Contact

Security issues:

**[support@akabot.com]**

Privacy/Data Protection:

**[support@akabot.com]**

Technical Support:

**[support@akabot.com]**
