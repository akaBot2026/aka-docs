---
title: "Chọn mô hình AI xử lý chứng từ"
description: "Ở Cài đặt AI, tab Xử lý chứng từ, chọn ePayment AI hoặc Nhà cung cấp AI của bạn (nhà cung cấp, mô hình, API key) rồi bấm Lưu để kiểm tra và áp dụng."
id: set-document-model
sidebar_label: Chọn mô hình AI xử lý chứng từ
sidebar_position: 10
---

# Chọn mô hình AI xử lý chứng từ

Ở Cài đặt AI, tab Xử lý chứng từ, chọn ePayment AI hoặc Nhà cung cấp AI của bạn (nhà cung cấp, mô hình, API key) rồi bấm Lưu để kiểm tra và áp dụng.


## Các bước

1. Ở thanh bên, mục **Quản trị**, mở **Cài đặt AI** (chỉ quản trị viên, trên máy tính) và chọn tab **Xử lý chứng từ** (1).

   ![Trang Cài đặt AI: (1) mục Cài đặt AI ở thanh bên và tab Xử lý chứng từ; thẻ Mô hình xử lý chứng từ với (2) hai lựa chọn ePayment AI (Khuyến nghị) và Nhà cung cấp AI của bạn, nút Lưu](/static/img/aka-payment-latest-admin-set-document-model.webp)

2. Ở thẻ **Mô hình xử lý chứng từ**, chọn **ePayment AI** (khuyến nghị, không cần key) hoặc **Nhà cung cấp AI của bạn** (2).
3. Nếu chọn nhà cung cấp riêng: chọn **Nhà cung cấp** (OpenAI, Anthropic, Google Gemini, DeepSeek, Alibaba Qwen), chọn hoặc nhập mã ở ô **Mô hình** (mô hình phải đọc được ảnh) và nhập **API key**; chỉ dùng **Nâng cao** → **Base URL** cho máy chủ tương thích OpenAI hoặc proxy.
4. Bấm **Lưu**. Với nhà cung cấp riêng, trang hiện "Đang kiểm tra … Có thể mất một, hai phút."; khi qua kiểm tra, mô hình được áp dụng ("Đã áp dụng mô hình.").

## Xử lý lỗi

- "… chưa vượt qua kiểm tra. Mô hình hiện tại vẫn được dùng.": đọc lý do ở từng mục **Kết nối**, **Đọc ảnh**, **Trả lời có cấu trúc** (hoặc **Kiểm tra** khi quá trình kiểm tra không hoàn tất), sửa key, mã mô hình hoặc Base URL rồi **Lưu** lại (không cần nhập lại key). Xem [Khi tổ chức dùng mô hình AI riêng](../../../reference/ai/own-model.md).


## Lưu ý

- **[Khi tổ chức dùng mô hình AI riêng](../../../reference/ai/own-model.md)**\
  Mô hình riêng phải qua kiểm tra mới được áp dụng; key không hiển thị lại; nhà cung cấp lỗi thì tính năng AI dừng, không tự chuyển sang ePayment AI.

## Được dùng trong các hướng dẫn

- [Chọn AI đọc hóa đơn và xử lý chứng từ](../set-document-model.md) — Quản trị viên muốn chọn mô hình AI đọc hóa đơn, tách bộ chứng từ và kiểm tra quy tắc đối soát: ePayment AI hoặc tài khoản AI của công ty.
