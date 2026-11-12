---
title: "Thiết lập và phát hành loại đề nghị"
description: "Mở loại đề nghị, chỉnh các tab, bấm Lưu rồi Phát hành; phát hành lỗi thì hiện danh sách vấn đề cần sửa."
id: publish-request-type
sidebar_label: Thiết lập và phát hành loại đề nghị
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Thiết lập và phát hành loại đề nghị

Mở loại đề nghị, chỉnh các tab, bấm Lưu rồi Phát hành; phát hành lỗi thì hiện danh sách vấn đề cần sửa.

## Trước khi bắt đầu

- **[Điều kiện phát hành loại đề nghị](../../../reference/config/publish-validation.md)**\
  Phát hành không thành công kèm danh sách vấn đề theo tab (Thiết lập, Luồng đề nghị, Luồng phê duyệt); phát hành khi loại đề nghị không có thay đổi thì không tạo phiên bản mới.


## Các bước

1. Ở thanh bên, mục **Cấu hình**, mở **Loại đề nghị** (1).

   ![Trang Loại đề nghị: (1) mục Loại đề nghị ở thanh bên, (2) nút Thêm loại đề nghị cạnh Nhập từ JSON; bảng Mã, Tên, Loại, Số bước, Sử dụng, Mặc định, Phiên bản với biểu tượng bút để sửa](/static/img/aka-payment-latest-config-request-type-list.webp)

2. Bấm vào một loại để sửa, hoặc **Thêm loại đề nghị** (2) (hay **Nhập từ JSON**) để tạo mới; **Nhân bản** để sao một loại có sẵn.
3. Tab **Thiết lập** (dải tab, 3): chỉnh Định danh (Mã và Tên bắt buộc), Phạm vi sử dụng và Cách hoạt động (hình thức thanh toán, đối tượng thụ hưởng, Kiểm tra ngân sách, Yêu cầu chữ ký phê duyệt, Cam kết hoàn thành, mẫu Excel Bảng kê chi phí). Không đổi được ô **Loại** khi loại đề nghị đã có đề nghị ("Không thể đổi loại khi đã có đề nghị.").

   ![Trang sửa loại đề nghị TT · Thanh toán: nhãn Đã phát hành v1, nút Lịch sử, (8) nút Phát hành; (3) dải tab Thiết lập, Luồng đề nghị, Luồng phê duyệt, Biểu mẫu đề nghị thanh toán; tab Thiết lập mở ở mục Định danh](/static/img/aka-payment-latest-config-request-type-editor.webp)

4. Tab **Luồng đề nghị** (dải tab, 3): mỗi bước của người đề nghị (Tổng quan, Bảng kê chi phí, Thanh toán, Xem lại) mở ra để chỉnh; bước Bảng kê chi phí có các nhóm trường, "Bộ chứng từ bắt buộc" (mỗi loại chứng từ có ô **Bắt buộc**; chứng từ mà một quy tắc đối soát bắt buộc dùng thì luôn bắt buộc) và mục **Đối soát** với công tắc **Bật đối soát**, nút **Thêm quy tắc**, **Thêm quy tắc dùng chung** và **Sao chép từ loại đề nghị** (quy tắc dùng chung: [Tạo và sửa quy tắc đối soát dùng chung](manage-reconciliation-rule.md)).
5. Tab **Luồng phê duyệt** (dải tab, 3): sắp xếp các bước (mỗi bước giao cho một nhóm phê duyệt và phải có tên); có thể **Sao chép từ…** loại khác. Ở **Thiết lập nâng cao** của một bước, bật **Bỏ qua khi người duyệt là người đề nghị** hoặc **Điều chỉnh phân bổ ngân sách** (người duyệt bước đó được sửa phân bổ, xem [Điều chỉnh phân bổ ngân sách khi duyệt](../../approvals/how-to/adjust-allocation.md)).
6. Tab **Biểu mẫu đề nghị thanh toán** (dải tab, 3): thiết kế biểu mẫu in; tab này có nút **Lưu** riêng cho bố cục.
7. Bấm **Lưu** ở đầu trang để ghi các chỉnh sửa đang giữ tạm (trang báo "Có thay đổi chưa phát hành" khi bản nháp khác bản đã phát hành). **Hủy thay đổi** đưa loại về phiên bản đã phát hành gần nhất và không hoàn tác được.
8. Bấm **Phát hành** (8) và xác nhận "Phát hành loại đề nghị này?": bản nháp thành phiên bản dùng cho các đề nghị tạo mới, đề nghị đang xử lý giữ phiên bản cũ. Thành công hiện "Đã phát hành vN."; nếu không, hiện "Chưa thể phát hành loại đề nghị này." kèm danh sách vấn đề, mỗi vấn đề chỉ rõ tab cần sửa.

## Xử lý lỗi

- Phát hành bị từ chối: xem [Điều kiện phát hành loại đề nghị](../../../reference/config/publish-validation.md); không có phiên bản nào được ghi. Muốn quay lại bản cũ: [Khôi phục phiên bản loại đề nghị](restore-request-type.md).


## Được dùng trong các hướng dẫn

- [Cấu hình và phát hành loại đề nghị](../publish-request-type.md) — Quản trị viên muốn tạo hoặc thay đổi một loại đề nghị và đưa vào sử dụng.
- [Thêm hoặc sửa nhóm phê duyệt](../../admin/how-to/manage-approval-group.md) — Ở Nhóm phê duyệt, bấm Thêm nhóm phê duyệt, rồi thêm hoặc bớt thành viên.
- [Điều chỉnh phân bổ ngân sách khi duyệt](../../approvals/how-to/adjust-allocation.md) — Ở đề nghị đang chờ bạn duyệt, mở dòng chi phí trong Bảng kê chi phí, bấm Sửa phân bổ, đổi khoản mục, đơn vị hoặc dự án rồi Lưu.
- [Tạo và sửa quy tắc đối soát dùng chung](manage-reconciliation-rule.md) — Cấu hình → Quy tắc dùng chung: Thêm quy tắc dùng chung (Mã, Tên, Hướng dẫn kiểm tra), Sửa, Lưu trữ hoặc Khôi phục; liên kết vào loại đề nghị ở tab Luồng đề nghị.
