---
id: shopify-integration
title: "Shopify"
sidebar_label: "Shopify"
sidebar_position: 6
description: "Hướng dẫn kết nối cửa hàng Shopify với ScaleFlow bằng Client ID, Client Secret và Store URL."
displayed_sidebar: scaleFlowSidebar
---

# Tích hợp Shopify

Kết nối Shopify cho phép ScaleFlow truy cập dữ liệu cửa hàng thương mại điện tử, chẳng hạn sản phẩm, đơn hàng và thông tin khách hàng. Nhờ đó, AI Agent có thể lấy dữ liệu theo thời gian thực để trả lời câu hỏi của khách hàng hoặc tự động hóa tác vụ.

Để kết nối Shopify, bạn cần **Store URL**, **Client ID** và **Client Secret** (API secret key) được tạo từ Shopify Custom App.

---

## **Trước khi bắt đầu**

Đảm bảo bạn có:

- Cửa hàng Shopify với gói đang hoạt động.
- Quyền administrator vào trang quản trị Shopify của cửa hàng.
- Quyền quản lý integration trong ScaleFlow.

---

## **Hướng dẫn kết nối từng bước**

### Bước 1: Tìm Shopify Store URL

Shopify Store URL là domain `.myshopify.com` chính của cửa hàng.

1. Truy cập [https://admin.shopify.com/](https://admin.shopify.com/) và đăng nhập vào cửa hàng.
2. Trong thanh điều hướng bên trái, nhấp **Settings** ở phía dưới.
2. Trong thanh điều hướng bên trái, nhấp **Settings** ở phía dưới.

   ![Cài đặt thanh bên Shopify](/static/img/image_shopify_7.png)
   ![Cài đặt thanh bên Shopify](/static/img/image_shopify_7.png)

3. Trong trang Settings (hoặc từ menu thả xuống chuyển cửa hàng), tìm domain `.myshopify.com` của cửa hàng.

   ![Shopify Store URL](/static/img/image_shopify_2.png)

4. Sao chép phần domain, là **`your-store-name.myshopify.com`**.
   > **Lưu ý:** Chỉ nhập phần domain (ví dụ `your-store-name.myshopify.com`) vào trường Store URL trong ScaleFlow. Không bao gồm `https://` hoặc dấu gạch chéo cuối.

### Bước 2: Cấu hình App Settings (Scopes và Redirect URLs)
### Bước 2: Cấu hình App Settings (Scopes và Redirect URLs)

1. Truy cập [https://partners.shopify.com/](https://partners.shopify.com/) và đăng nhập tài khoản Shopify Partners. Trong menu điều hướng bên trái, nhấp **Apps** để mở developer dashboard.
1. Truy cập [https://partners.shopify.com/](https://partners.shopify.com/) và đăng nhập tài khoản Shopify Partners. Trong menu điều hướng bên trái, nhấp **Apps** để mở developer dashboard.

   ![Menu Apps của Shopify Partners](/static/img/image_shopify_3.jpg)

2. Trên trang Apps, nhấp **Create app**. Nhập **App name** (ví dụ `ScaleFlow Integration`) và nhấp **Create** để xác nhận.
2. Trên trang Apps, nhấp **Create app**. Nhập **App name** (ví dụ `ScaleFlow Integration`) và nhấp **Create** để xác nhận.

   ![Tạo App Shopify](/static/img/image_shopify_4.jpg)

3. Trong menu điều hướng bên trái của app, nhấp **App distribution**.
   - Bên dưới phần **Distribution type**, chọn **Custom distribution**.
   - Xác nhận phương thức phân phối bằng cách nhấp **Choose distribution**.

   ![Phân phối App Shopify](/static/img/image_shopify_8.png)

4. Trong menu điều hướng bên trái, nhấp **API access requests**.

   ![Yêu cầu quyền truy cập API Shopify](/static/img/image_shopify_9.png)

5. Trên trang **API access requests**, nhấp **Protected customer data access** và nhấp **Request access**.

   ![Quyền truy cập dữ liệu khách hàng được bảo vệ Shopify](/static/img/image_shopify_10.png)

6. Trong control panel/modal xuất hiện, nhấp nút **Select** bên dưới phần **Protected customer data**, đánh dấu **Customer service** và **App functionality**, sau đó nhấp **Save**.

   ![Chọn dữ liệu khách hàng Shopify](/static/img/image_shopify_11.png)
   ![Chọn dữ liệu khách hàng Shopify](/static/img/image_shopify_12.png)

7. Trong menu điều hướng bên trái của app, nhấp **Versions** (hoặc chọn draft version).

   ![Các phiên bản App Shopify](/static/img/image_shopify_19.png)

8. Trên trang cấu hình version:
   - Bên dưới phần **Access**:
     - Đánh dấu checkbox **Use legacy install flow**.
     - Để trống các trường **Scopes** và **Optional scopes** (không cần nhập scope ở đây).
     - Trong trường **Redirect URLs**, nhập redirect URL do ScaleFlow cung cấp (ví dụ: `https://your-scaleflow-domain.com/integration/api/shopify/oauth/callback` hoặc `https://your-scaleflow-domain.com/api/v1/integrations/shopify/callback`).
   - Bên dưới phần **URLs**:
     - Nhập **App URL** (ví dụ: `https://your-scaleflow-domain.com`).
9. Nhấp **Release** (hoặc **Save configuration**) để áp dụng thay đổi.

   ![Cấu hình App Shopify](/static/img/image_shopify_15.png)

### Bước 3: Lấy thông tin xác thực API

1. Trong menu cài đặt app bên trái, nhấp **Settings**.
2. Bên dưới phần **Client credentials**, tìm thông tin xác thực:
   - **Client ID**: Sao chép giá trị từ trường **Client ID**.
   - **Client Secret**: Nhấp **Reveal client secret** (biểu tượng mắt) và sao chép giá trị từ trường **Client secret**.
     > **Lưu ý quan trọng:** Hãy xem Client Secret như mật khẩu. Lưu an toàn và không bao giờ chia sẻ công khai.

   ![Thông tin xác thực API Shopify](/static/img/image_shopify_6.png)

---

## **Kết nối Shopify trong ScaleFlow**

Sau khi đã có ba tham số bắt buộc (Store URL, Client ID, Client Secret), hãy hoàn tất kết nối trong ScaleFlow:

1. Trong ScaleFlow, mở **Integrations** từ menu điều hướng bên trái.
2. Nhấp thẻ **Shopify** rồi nhấp **Connect**.
3. Điền biểu mẫu kết nối:

\* cho biết trường bắt buộc.

- **Store URL (String)**\*: Domain chính của cửa hàng Shopify (lấy ở Bước 1).  
  Ví dụ: `"your-store-name.myshopify.com"`
- **Client ID (String)**\*: Client ID từ Shopify Partners App Settings (lấy ở Bước 3).  
- **Client ID (String)**\*: Client ID từ Shopify Partners App Settings (lấy ở Bước 3).  
  Ví dụ: `"your_shopify_client_id"`
- **Client Secret (String)**\*: Client Secret từ Shopify Partners App Settings (lấy ở Bước 3).  
- **Client Secret (String)**\*: Client Secret từ Shopify Partners App Settings (lấy ở Bước 3).  
  Ví dụ: `"your_shopify_client_secret"`

4. Nhấp **Connect** để lưu.
5. ScaleFlow chuyển hướng bạn đến trang quản trị cửa hàng Shopify để cấp quyền và cài app. Nhấp **Install app** để hoàn tất kết nối.

---

## **Khắc phục nhanh**

### Lỗi: Invalid Store URL

- Đảm bảo bạn nhập domain `.myshopify.com`. Không dùng custom domain (như `www.mycustomdomain.com`) trừ khi được chỉ định.
- Không bao gồm `https://`, `http://` hoặc `/admin` trong trường.

### Lỗi: Unauthorized hoặc Connection Failed

- Kiểm tra Redirect URLs trong Shopify Partners khớp chính xác với callback URL của ScaleFlow.
- Xác minh đã sao chép đúng **Client ID** và **Client Secret** từ trang App Settings trong Shopify Partners.
- **Kiểm tra checkbox "Use legacy install flow" đã được đánh dấu chưa**: Đi đến tab **Versions**, cuộn đến phần **Access** và xác minh checkbox **Use legacy install flow** đã được chọn (Bước 2, bước con 8). Nếu chưa chọn, chuyển hướng cài đặt sẽ thất bại.

### Lỗi: Data Synchronization Failures (thiếu thông tin khách hàng hoặc đơn hàng)

- **Kiểm tra bạn đã yêu cầu quyền truy cập chưa**: Đảm bảo đã đến **API access requests** -> **Protected customer data access** và nhấp **Request access** (Bước 2, bước con 5 & 6).
- **Kiểm tra lựa chọn lý do dữ liệu**: Xác minh đã nhấp nút **Select** bên dưới **Protected customer data**, đánh dấu **Customer service** và **App functionality**, rồi nhấp **Save** để áp dụng cấu hình.
- Nếu dùng developer store hoặc Custom distribution, đảm bảo bạn đã chọn lý do dữ liệu để dữ liệu có thể được truy cập mà không cần gửi hồ sơ review App Store chính thức.
