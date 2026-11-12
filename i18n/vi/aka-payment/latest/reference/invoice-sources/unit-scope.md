---
title: "Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị"
description: "Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị."
id: unit-scope
sidebar_label: "Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị"
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Thiết lập nguồn hóa đơn: chung cho tổ chức hay riêng từng đơn vị

Bật/tắt, định dạng, dung lượng và Kiểm tra trên Cổng HĐĐT áp dụng cho cả tổ chức; tần suất, lịch tải và tài khoản nguồn đặt riêng theo đơn vị.

**Mức độ yêu cầu:** Lưu ý


- **Chung cho cả tổ chức** (kể cả khi sửa từ trang của một đơn vị): công tắc bật/tắt từng nguồn, **Định dạng chấp nhận**, **Dung lượng tối đa mỗi tệp**, **Kiểm tra trên Cổng HĐĐT**. Nếu sửa các mục này khi đang chọn một đơn vị, lúc lưu sẽ hiện hộp thoại "Áp dụng cho tất cả đơn vị?" liệt kê thay đổi; bấm **Lưu và áp dụng cho tất cả** để lưu.
- **Riêng từng đơn vị**: **Tần suất đồng bộ** (Email, AkaConnect, AkaPay) và **Lịch tải**, **Phạm vi mỗi lần tải**, **Loại hóa đơn**, **Ký hiệu mẫu số hóa đơn** (Tải định kỳ từ TCT). Đơn vị không đặt riêng thì kế thừa từ đơn vị cấp trên gần nhất, rồi đến mặc định ở "Tất cả đơn vị"; **Dùng mặc định** bỏ giá trị riêng.
- **Hòm thư và tài khoản nguồn** (hòm thư email, tài khoản Cổng HĐĐT, kết nối AkaConnect, tài khoản AkaPay) thuộc một đơn vị cụ thể; hóa đơn nhận qua tài khoản Cổng HĐĐT, kết nối AkaConnect hoặc tài khoản AkaPay được gán cho đơn vị đó. Ở "Tất cả đơn vị" danh sách hiện tài khoản của mọi đơn vị (kèm tên đơn vị) nhưng không thêm mới được; trang báo "Chọn một đơn vị ở trên để thêm."
- Chuyển đơn vị khi còn thay đổi chưa lưu sẽ hỏi "Bỏ các thay đổi chưa lưu?".


## Được dùng trong các hướng dẫn

- [Quản trị nguồn hóa đơn đầu vào](../../guides/invoice-sources/features/settings.md) — Trang Quản trị → Hóa đơn đầu vào: bật/tắt nguồn, khai báo hòm thư, tài khoản Cổng HĐĐT, kết nối AkaConnect và AkaPay. Chỉ quản trị viên.
- [Bật/tắt nguồn hóa đơn và lưu thiết lập](../../guides/invoice-sources/how-to/configure.md) — Ở Quản trị → Hóa đơn đầu vào, chọn phạm vi đơn vị, bật/tắt từng nguồn, chỉnh định dạng, dung lượng, kiểm tra trên Cổng HĐĐT, tần suất rồi bấm Lưu thay đổi.
- [Kết nối hòm thư Gmail/Outlook qua AkaConnect](../../guides/invoice-sources/how-to/connect-akaconnect.md) — Bật Kết nối AkaConnect, chọn đơn vị, bấm Thêm kết nối và hoàn tất kết nối hòm thư Gmail hoặc Outlook trong cửa sổ AkaConnect bật lên.
- [Kết nối tài khoản AkaPay bằng API key](../../guides/invoice-sources/how-to/connect-akapay.md) — Bật Tài khoản AkaPay, bấm Thêm tài khoản, dán API key, Tải pipeline, chọn pipeline, chọn trạng thái hóa đơn cần nhận, đặt tên rồi Thêm.
- [Thêm hòm thư nhận hóa đơn qua IMAP](../../guides/invoice-sources/how-to/connect-mailbox.md) — Chọn đơn vị, bấm Thêm hòm thư ở thẻ Email, nhập địa chỉ, chọn cách đăng nhập (mật khẩu ứng dụng hoặc OAuth), Kiểm tra kết nối rồi Thêm.
- [Tải hóa đơn định kỳ từ Cổng HĐĐT Tổng cục Thuế](../../guides/invoice-sources/how-to/connect-tax-portal.md) — Bật Tải định kỳ từ TCT, đặt lịch tải, phạm vi, loại hóa đơn, ký hiệu mẫu số; thêm tài khoản Cổng HĐĐT của đơn vị, Kiểm tra kết nối rồi Thêm.
