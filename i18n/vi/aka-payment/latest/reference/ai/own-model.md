---
title: "Khi tổ chức dùng mô hình AI riêng"
description: "Mô hình riêng phải qua kiểm tra mới được áp dụng; key không hiển thị lại; nhà cung cấp lỗi thì tính năng AI dừng, không tự chuyển sang AkaPayment AI."
id: own-model
sidebar_label: Khi tổ chức dùng mô hình AI riêng
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Khi tổ chức dùng mô hình AI riêng

Mô hình riêng phải qua kiểm tra mới được áp dụng; key không hiển thị lại; nhà cung cấp lỗi thì tính năng AI dừng, không tự chuyển sang AkaPayment AI.

**Mức độ yêu cầu:** Lưu ý


Áp dụng cho "Nhà cung cấp AI của bạn" ở cả **Mô hình xử lý chứng từ** và **Mô hình của trợ lý** (Cài đặt AI). Hai mô hình đặt riêng, có thể khác nhau.

- **Không tự chuyển sang AkaPayment AI**: nếu nhà cung cấp gặp sự cố hoặc từ chối key, các tính năng AI dừng cho tới khi được khắc phục (đọc hóa đơn, tách bộ chứng từ, đối soát; hoặc khung chat của trợ lý).
- **Kiểm tra trước khi áp dụng**: bấm **Lưu** là chạy kiểm tra. Mô hình xử lý chứng từ phải qua **Kết nối**, **Đọc ảnh** và **Trả lời có cấu trúc** (có thể mất một đến hai phút); mô hình của trợ lý phải gọi được công cụ. Không qua thì mô hình đang dùng vẫn được giữ và trang ghi lý do (key bị từ chối, mã mô hình không tồn tại, hết hạn mức, không kết nối được…).
- **API key**: được mã hóa trước khi lưu, không ai đọc lại được, kể cả quản trị viên. Khi đã có key, trang chỉ ghi "Đã lưu một key"; để trống ô key là giữ key cũ, chỉ nhập khi muốn thay.
- **Base URL** (mục Nâng cao): chỉ dùng cho điểm cuối (endpoint) tương thích OpenAI hoặc máy chủ proxy, phải là HTTPS; PDF được gửi tới đó dưới dạng ảnh từng trang.
- **Mức độ suy nghĩ** của trợ lý chỉ có với OpenAI (không đặt Base URL), Anthropic và Google Gemini.


## Được dùng trong các hướng dẫn

- [Chọn mô hình AI cho trợ lý](../../guides/admin/how-to/set-assistant-model.md) — Ở Cài đặt AI, tab Trợ lý, thẻ Mô hình của trợ lý, chọn AkaPayment AI hoặc nhà cung cấp riêng, đặt Mức độ suy nghĩ nếu có, rồi bấm Lưu.
- [Chọn mô hình AI xử lý chứng từ](../../guides/admin/how-to/set-document-model.md) — Ở Cài đặt AI, tab Xử lý chứng từ, chọn AkaPayment AI hoặc Nhà cung cấp AI của bạn (nhà cung cấp, mô hình, API key) rồi bấm Lưu để kiểm tra và áp dụng.
