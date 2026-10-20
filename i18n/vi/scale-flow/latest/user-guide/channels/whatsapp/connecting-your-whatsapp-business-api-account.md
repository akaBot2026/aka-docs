---
id: connecting-your-whatsapp-business-api-account
title: WhatsApp Business
sidebar_label: WhatsApp Business
sidebar_position: 1
description: "Tìm hiểu cách kết nối tài khoản WhatsApp Business API với ScaleFlow."
displayed_sidebar: scaleFlowSidebar
---

# Kết nối tài khoản WhatsApp Business API

Trước khi kết nối số điện thoại với WhatsApp Business API, hãy xem lại các yêu cầu và làm theo hướng dẫn từng bước bên dưới.

## Trước khi bắt đầu

### Những gì cần chuẩn bị

Để kết nối tài khoản WhatsApp Business API với ScaleFlow, hãy đảm bảo bạn có:

*   Quyền truy cập vào tài khoản Facebook cá nhân có **Full Access Rights** trong Meta Business Portfolio.
*   Đã bật xác thực hai yếu tố cho tài khoản Facebook cá nhân.
*   Trang **Business Info** trong Meta Business Portfolio đã hoàn tất.
*   Số điện thoại di động hoặc cố định có thể nhận cuộc gọi hoặc SMS.
*   Phương thức thanh toán cho add-on kết nối WhatsApp Business API, nếu áp dụng.

---

## Đăng ký tài khoản WhatsApp Business API

Không giống WhatsApp Business App và WhatsApp Personal App, tài khoản WhatsApp Business API chỉ có thể đăng ký thông qua Meta Business Solution Partner (BSP) chính thức như ScaleFlow. Để đăng ký, bạn cần:

*   Quyền truy cập vào tài khoản Facebook cá nhân có **Full Access Rights** trong Meta Business Portfolio. Kiểm tra quyền truy cập đầy đủ [tại đây](https://business.facebook.com/settings/people).
*   Đã bật xác thực hai yếu tố trong tài khoản Facebook cá nhân. Tìm hiểu cách bật xác thực hai yếu tố [tại đây](https://www.facebook.com/help/148233965247823).
*   Trang [Business Info](https://business.facebook.com/latest/settings/business_info) trong Meta Business Portfolio đã hoàn tất.
*   Số điện thoại di động hoặc cố định có thể nhận cuộc gọi hoặc SMS.

---

## Đăng ký xác minh Meta Business Portfolio

Trước khi kết nối số điện thoại với WhatsApp Business API, chúng tôi khuyến nghị bạn chuẩn bị trước các tài liệu xác minh Meta Business Portfolio.

Xác minh Meta Business Portfolio xác nhận danh tính doanh nghiệp của bạn với Meta. Có thể cần xác minh này nếu bạn muốn tăng giới hạn nhắn tin, gửi tin nhắn broadcast đến nhiều contact hơn mỗi ngày hoặc đăng ký WhatsApp Official Business Account (Green Tick) sau này.

Để hoàn tất xác minh Meta Business Portfolio, bạn cần:
*   Website doanh nghiệp có tên miền khớp với doanh nghiệp.
*   Tài liệu doanh nghiệp chính thức thể hiện tên doanh nghiệp và địa chỉ thực khớp nhau, chẳng hạn:
    *   Business Registration Certificate hoặc Certificate of Incorporation hợp lệ.
    *   Hóa đơn tiện ích, sao kê ngân hàng hoặc tài liệu chính thức khác được phát hành trong 3 tháng gần nhất để xác thực tên và địa chỉ doanh nghiệp.

Khi đã chuẩn bị đủ tài liệu bắt buộc, bạn có thể tiến hành xác minh. Tìm hiểu thêm về xác minh doanh nghiệp trong [tài liệu của Meta](https://www.facebook.com/business/help/2058515294227817).

---

## Hướng dẫn đăng ký từng bước

> **Lưu ý quan trọng:** Sau khi số điện thoại được đăng ký trên WhatsApp Business API, bạn **KHÔNG** thể:
> - Sử dụng chức năng trò chuyện WhatsApp Group.
> - Truy cập tài khoản WhatsApp này bên ngoài ứng dụng web và mobile của ScaleFlow (ví dụ dùng WhatsApp Business App hoặc Personal App tiêu chuẩn).

### Bước 1: Mở trang kênh WhatsApp Business API

1. Trong ScaleFlow, mở **Channels**.
2. Chọn **WhatsApp Business API** từ danh sách kênh.
3. Nhấp **Connect**.

![Mở trang kênh WhatsApp Business API](/static/img/whatsapp-business-api-channel-page.jpg)

### Bước 2: Chọn phương thức kết nối

Bạn sẽ thấy ba tùy chọn kết nối:
*   **Get a free WhatsApp number provided by Meta**: Chọn để dùng số ảo miễn phí do Meta cung cấp.
*   **Connect your phone number to WhatsApp Business API**: Chọn để kết nối số điện thoại doanh nghiệp của bạn.
*   **Migrate an existing WhatsApp Business API account** *(Coming Soon)*: Chọn để chuyển tài khoản API hiện có từ nhà cung cấp khác.

Chọn phương thức kết nối mong muốn và nhấp **Connect**.

![Chọn tùy chọn kết nối WhatsApp Business](/static/img/whatsapp-business-api-connect-page.jpg)

*Nếu chọn tùy chọn số miễn phí, màn hình thiết lập sẽ giống như sau:*
![Kết nối bằng số miễn phí](/static/img/whatsapp-connect-with-free-number.jpg)

*Nếu chọn dùng số điện thoại của mình, màn hình thiết lập sẽ giống như sau:*
![Kết nối bằng số điện thoại của bạn](/static/img/whatsapp-connect-with-your-phonenumber.jpg)

### Bước 3: Bắt đầu Facebook Embedded Signup

Cửa sổ popup đăng nhập Meta sẽ xuất hiện. Đọc các quyền bạn sẽ chia sẻ với ScaleFlow rồi nhấp **Continue**.

![Bắt đầu Facebook Embedded Signup](/static/img/step-01-start-embedded-signup.jpg)

### Bước 4: Chọn Business Portfolio và WhatsApp Account

Trong cửa sổ "Select the business assets to share with ScaleFlow":

1.  Bên dưới **Business Portfolio**, chọn Meta Business Portfolio muốn liên kết với tài khoản WhatsApp Business API. Bạn có thể chọn portfolio hiện có hoặc nhấp **Create a Business Portfolio** để tạo portfolio mới.
    > **Lưu ý:** Sau khi tài khoản WhatsApp Business API được kết nối với một Business Portfolio, không thể chuyển tài khoản đó sang portfolio khác.
2.  Bên dưới **WhatsApp Business Account**, chọn tài khoản hiện có từ danh sách thả xuống hoặc nhấp **Create a WhatsApp Business Account** nếu chưa có.
3.  Nhấp **Next**.

![Chọn Business Portfolio và WhatsApp Account](/static/img/step-02-select-business-and-whatsapp-business.png)

### Bước 5: Nhập thông tin doanh nghiệp

Điền thông tin bắt buộc trên trang **Enter business information for new assets**.

*   Nếu ở bước trước bạn chọn **Create a Business Portfolio**, hãy điền mọi thông tin như hình dưới đây:

    ![Nhập thông tin doanh nghiệp cho portfolio mới](/static/img/step-03a-enter-business-information-for-new-assets.jpg)

*   Nếu chọn **existing Business Portfolio**, hãy điền các trường bắt buộc như hình dưới đây:

    ![Nhập thông tin doanh nghiệp cho portfolio hiện có](/static/img/step-03b-enter-business-information-for-new-assets.jpg)

Khi hoàn tất, nhấp **Next**.

### Bước 6: Thêm số điện thoại WhatsApp

Trên trang này, bạn có hai tùy chọn tùy theo lựa chọn ở Bước 2:

![Các tùy chọn thêm số điện thoại WhatsApp](/static/img/step-04-add-your-whatsapp-phonenumber.jpg)

#### Tùy chọn A: Chỉ dùng Display Name (số miễn phí)

Nếu chọn dùng số ảo miễn phí của Meta:
1.  Nhập **WhatsApp Business Display Name**.
    > **Lưu ý:** Display Name là tên công khai khách hàng nhìn thấy trong hồ sơ WhatsApp.
2.  Nhấp **Next**.

![Thêm WhatsApp bằng số điện thoại miễn phí](/static/img/step-04a-add-whatsapp-with-free-phonenumber.jpg)

#### Tùy chọn B: Thêm số mới (số điện thoại của bạn)

Nếu chọn dùng số điện thoại của mình:
1.  Nhập **Phone Number**.
    > **Lưu ý:** Số điện thoại **KHÔNG** được đang đăng ký với WhatsApp Personal hoặc WhatsApp Business App.
2.  Nhập **WhatsApp Business Display Name**.
3.  Chọn phương thức xác minh: **Text message** hoặc **Phone call**.
4.  Nhấp **Next**.

![Thêm WhatsApp Business bằng số điện thoại của bạn](/static/img/step-04b-add-whatsapp-business-with-your-phonenumber.jpg)

### Bước 7: Xác minh số điện thoại

*(Chỉ cần bước này nếu bạn chọn thêm số điện thoại của mình ở Tùy chọn B)*

Bạn sẽ thấy thông báo cho biết mã xác minh đã được gửi thành công. Khi nhận mã qua SMS hoặc cuộc gọi, hãy nhập mã vào trường nhập.

Nhấp **Next** để tiếp tục.

![Xác minh số điện thoại](/static/img/step-05-verify-phonenumber.jpg)

### Bước 8: Xem lại quyền và xác nhận

Xem lại các quyền bạn cấp cho ScaleFlow. Màn hình này hiển thị quyền truy cập được yêu cầu, chẳng hạn quản lý tài khoản WhatsApp và truy cập cuộc trò chuyện WhatsApp.

Nhấp **Confirm** để cấp quyền và kết nối.

![Xem lại và xác nhận quyền](/static/img/step-06-review-and-confirm.png)

Sau khi nhấp **Confirm**, màn hình xử lý sẽ hiển thị trong khi Meta thiết lập kết nối với ScaleFlow.

![Đang xử lý kết nối tài khoản](/static/img/step-07-processing-account-connection.jpg)

### Bước 9: Kết nối thành công và hoàn tất thiết lập

Sau khi tài khoản được kết nối, màn hình thành công sẽ xuất hiện.
Meta sẽ xem xét doanh nghiệp để đảm bảo tuân thủ WhatsApp Commerce Policy. Nếu phát hiện vấn đề, họ sẽ liên hệ với bạn trong vòng 24 giờ.

*   Nhấp **Finish** để hoàn tất thiết lập.
*   Hoặc nhấp **Add payment method** để liên kết phương thức thanh toán với WhatsApp Business Account này.

![Kết nối thành công](/static/img/step-08-connection-success.jpg)

### Bước 10: Xem tài khoản WhatsApp Business API đã kết nối

Bạn sẽ tự động được chuyển về trang kênh WhatsApp Business API trong ScaleFlow. Bây giờ tài khoản WhatsApp Business mới kết nối sẽ xuất hiện trong danh sách.

![Xem tài khoản WhatsApp Business đã kết nối](/static/img/view-whatsapp-business-account.jpg)

### Bước 11: Nhận hướng dẫn thiết lập trong Inbox

Đi đến **Inbox** của ScaleFlow và kiểm tra thư mục **Unassigned**. Bạn sẽ nhận một tin nhắn hệ thống tự động từ WhatsApp Business chứa liên kết để hoàn tất các bước thiết lập còn lại trong WhatsApp Manager.

![Nhận tin nhắn hướng dẫn thiết lập WhatsApp trong Inbox](/static/img/step-09-receive-whatsapp-setup-guidance-message-in-inbox.jpg)

### Bước 12: Hoàn tất các bước trong hướng dẫn thiết lập WhatsApp Manager

Nhấp liên kết trong tin nhắn để mở trang **Setup guidance** trong WhatsApp Manager của Meta. Làm theo hướng dẫn ở đó để hoàn tất các bước còn lại cho tài khoản.
> **Mẹo:** Bạn có thể bỏ qua các bước như "Scan the QR code to get account updates" vì thông báo hướng dẫn thiết lập đã được gửi đến Inbox.

![Xem hướng dẫn thiết lập trong WhatsApp Manager](/static/img/step-10-view-setup-guidance-in-whatsapp-manager.png)
