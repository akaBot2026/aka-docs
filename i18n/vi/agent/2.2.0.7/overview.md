---
id: overview
title: Akabot Agent
sidebar_label: Overview
sidebar_position: 1
description: Deploy and run intelligent automation agents on desktops and servers.
displayed_sidebar: agentSidebar
---

# Akabot Agent

Akabot Agent 2.2.0.7 là thành phần runtime chạy trên một máy — desktop hoặc server — và thực thi các workflow tự động được gửi từ Akabot Center hoặc kích hoạt cục bộ. Agent có thể chạy ở chế độ có người theo dõi (attended) hoặc không có người theo dõi (unattended) hoàn toàn tự động, 24/7.

## Loại Agent

| Loại | Mô tả |
|------|-------|
| **Attended** | Chạy trên desktop của người dùng và tương tác với phiên đăng nhập hiện tại. Được kích hoạt thủ công hoặc bằng phím nóng. |
| **Unattended** | Chạy trên máy chủ hoặc VM khi không có con người. Được kích hoạt từ xa bởi Akabot Center. |
| **Testing** | Dùng cho phát triển và gỡ lỗi cục bộ. Không tính vào bản quyền. |

## Tính năng chính

- **Runtime nhẹ** — Dung lượng tối thiểu; chạy như dịch vụ Windows hoặc tiến trình user-mode.
- **Kênh bảo mật** — Tất cả giao tiếp với Akabot Center được mã hóa và xác thực bằng token.
- **Cập nhật tự động** — Agent tải các bản cập nhật gói workflow từ Center trước mỗi lần chạy.
- **Kích hoạt cục bộ** — Agent có thể được kích hoạt bởi sự kiện hệ thống tệp, phím tắt hoặc cuộc gọi REST.
- **Khả năng nhận thức** — Tích hợp với Akabot Vision và mô hình AI để xử lý tài liệu thông minh và ra quyết định.

## Bắt đầu

| Bước | Mô tả |
|------|-------|
| 1 | [Cài đặt Akabot Agent](/docs/latest/installation/agent-installation) |
| 2 | Kết nối agent với Akabot Center |
| 3 | Gán gói workflow cho agent |
| 4 | Kích hoạt chạy từ Center hoặc cục bộ |

## Bước tiếp theo

- [Xây dựng Agent đầu tiên của bạn](/docs/latest/first-agent)
- [Kết nối Agent với Akabot Center](/docs/latest/connect-center)
- [Lên lịch chạy Agent](/docs/latest/schedule)
