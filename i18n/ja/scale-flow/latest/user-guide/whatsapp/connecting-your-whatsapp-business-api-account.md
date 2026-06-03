---
id: connecting-your-whatsapp-business-api-account
title: "WhatsApp Business APIアカウントの接続"
sidebar_label: "WhatsApp Business APIアカウントの接続"
sidebar_position: 1
description: "WhatsApp Business APIアカウントをScaleFlowに接続する方法を説明します。"
displayed_sidebar: scaleFlowSidebar
---

# WhatsApp Business APIアカウントの接続

電話番号をWhatsApp Business APIに接続する前に、以下の要件を確認し、ステップバイステップの手順に従ってください。

## **始める前に**

### **準備するもの**

WhatsApp Business APIアカウントをScaleFlowに接続するには、以下が準備されていることを確認してください：

*   Metaビジネスポートフォリオで**「フルコントロール（すべての権限）」**を持つ個人用Facebookアカウントへのアクセス。
*   個人用Facebookアカウントで2要素認証が有効になっていること。
*   Metaビジネスポートフォリオの**「ビジネス情報」**ページが完了していること。
*   通話またはSMSを受信できる携帯電話または固定電話の番号。
*   該当する場合、WhatsApp Business API接続アドオンの支払い方法。

---

## **WhatsApp Business APIアカウントの申請**

WhatsApp Businessアプリや個人用WhatsAppアプリとは異なり、WhatsApp Business APIアカウントはScaleFlowなどのMeta公式ビジネスソリューションパートナー（BSP）を通じてのみ申請できます。申請するには、以下が必要となります：

*   Metaビジネスポートフォリオで**「フルコントロール（すべての権限）」**を持つ個人用Facebookアカウントへのアクセス。フルコントロール権限があるかどうかは[こちら](https://business.facebook.com/settings/people)で確認できます。
*   個人用Facebookアカウントで2要素認証が有効になっていること。2要素認証を有効にする方法については[こちら](https://www.facebook.com/help/148233965247823)を参照してください。
*   Metaビジネスポートフォリオで入力済みの[ビジネス情報](https://business.facebook.com/latest/settings/business_info)ページ。
*   通話またはSMSを受信できる携帯電話または固定電話の番号。

---

## **Metaビジネスポートフォリオの認証の申請**

電話番号をWhatsApp Business APIに接続する前に、事前にMetaビジネスポートフォリオの認証書類を準備しておくことをお勧めします。

Metaビジネスポートフォリオの認証は、Metaに対してビジネスの同一性を確認するものです。この認証は、メッセージ送信制限を増やしたり、1日あたりより多くの宛先に一斉配信メッセージを送信したり、後でWhatsApp公式ビジネスアカウント（緑のチェックマーク）を申請したりする場合に必要になることがあります。

Metaビジネスポートフォリオの認証を完了するには、以下が必要になります：
*   あなたのビジネスと一致するドメインを持つビジネスウェブサイト。
*   ビジネス名と住所が一致する、以下のような公式なビジネス書類：
    *   有効な事業登録証または設立証明書。
    *   ビジネス名と住所を検証するために、過去3ヶ月以内に発行された公共料金の請求書、銀行の取引明細書、またはその他の公式書類。

必要な書類がすべて整ったら、認証手続きを進めることができます。ビジネスの認証に関する詳細は、[Metaのドキュメント](https://www.facebook.com/business/help/2058515294227817)を参照してください。

---

## **ステップバイステップ申請ガイド**

> **重要な注意：** 電話番号がWhatsApp Business APIに登録されると、以下の操作は**行えなくなります**：
> - WhatsAppグループチャット機能の使用。
> - ScaleFlowのWebおよびモバイルアプリ以外でのこのWhatsAppアカウントへのアクセス（例：通常のWhatsApp Businessアプリや個人用WhatsAppアプリでの使用）。

### **ステップ 1: WhatsApp Business APIチャネルページを開く**

1. ScaleFlowで**チャネル**を開きます。
2. チャネルリストから**WhatsApp Business API**を選択します。
3. **接続**をクリックします。

![WhatsApp Business APIチャネルページを開く](/static/img/whatsapp-business-api-channel-page.jpg)

### **ステップ 2: 接続方法の選択**

以下の3つの接続オプションが表示されます：
*   **Metaから提供される無料のWhatsApp番号を取得する**: Metaが提供する無料の仮想番号を使用する場合に選択します。
*   **電話番号をWhatsApp Business APIに接続する**: 自社のビジネス用電話番号を接続する場合に選択します。
*   **既存のWhatsApp Business APIアカウントを移行する** *(近日公開)*: 他のプロバイダーからの既存のAPIアカウントを移行する場合に選択します。

希望する接続方法を選択し、**接続**をクリックします。

![WhatsApp Business接続オプションの選択](/static/img/whatsapp-business-api-connect-page.jpg)

*無料の番号オプションを選択した場合、セットアップ画面は以下のようになります：*
![無料の番号で接続](/static/img/whatsapp-connect-with-free-number.jpg)

*自社の電話番号を使用する場合、セットアップ画面は以下のようになります：*
![自社の電話番号で接続](/static/img/whatsapp-connect-with-your-phonenumber.jpg)

### **ステップ 3: Facebook Embedded Signupの開始**

Metaログインのポップアップウィンドウが表示されます。ScaleFlowと共有する権限を確認し、**次へ進む**をクリックします。

![Facebook Embedded Signupの開始](/static/img/step-01-start-embedded-signup.jpg)

### **ステップ 4: ビジネスポートフォリオとWhatsAppアカウントの選択**

「ScaleFlowと共有するビジネスアセットを選択してください」ウィンドウで：

1.  **ビジネスポートフォリオ**で、WhatsApp Business APIアカウントにリンクしたいMetaビジネスポートフォリオを選択します。既存のポートフォリオを選択するか、**ビジネスポートフォリオを作成**をクリックして新規作成します。
    > **注意：** WhatsApp Business APIアカウントを一度ビジネスポートフォリオに接続すると、別のポートフォリオに移管することはできません。
2.  **WhatsAppビジネスアカウント**で、ドロップダウンリストから既存のアカウントを選択するか、まだお持ちでない場合は**WhatsAppビジネスアカウントを作成**をクリックします。
3.  **次へ**をクリックします。

![ビジネスポートフォリオとWhatsAppアカウントの選択](/static/img/step-02-select-business-and-whatsapp-business.png)

### **ステップ 5: ビジネス情報の入力**

「新しいアセットのビジネス情報を入力してください」ページで必要な情報を入力します。

*   前のステップで**ビジネスポートフォリオを作成**を選択した場合、以下のようにすべての詳細を入力します：
    ![新しいポートフォリオのビジネス情報を入力](/static/img/step-03a-enter-business-information-for-new-assets.jpg)
*   既存の**ビジネスポートフォリオ**を選択した場合、以下のように必要なフィールドに入力します：
    ![既存のポートフォリオのビジネス情報を入力](/static/img/step-03b-enter-business-information-for-new-assets.jpg)

入力が完了したら、**次へ**をクリックします。

### **ステップ 6: WhatsApp電話番号の追加**

このページでは、ステップ2での選択に応じて2つのオプションがあります：
![WhatsApp電話番号追加のオプション](/static/img/step-04-add-your-whatsapp-phonenumber.jpg)

#### **オプションA：表示名のみを使用する（無料の番号）**
Metaの無料仮想番号を使用する場合：
1.  **WhatsApp Business表示名**を入力します。
    > **注意：** 表示名は、顧客がWhatsAppプロフィールで目にする公開名称です。
2.  **次へ**をクリックします。

![無料電話番号でWhatsAppを追加](/static/img/step-04a-add-whatsapp-with-free-phonenumber.jpg)

#### **オプションB：新しい番号を追加する（自社の電話番号）**
自社の電話番号を使用する場合：
1.  **電話番号**を入力します。
    > **注意：** この電話番号は、現在WhatsApp個人用アプリまたはWhatsApp Businessアプリに登録されていては**いけません**。
2.  **WhatsApp Business表示名**を入力します。
3.  検証方法を選択します：**テキストメッセージ**または**電話**のいずれかを選択します。
4.  **次へ**をクリックします。

![自社の電話番号でWhatsApp Businessを追加](/static/img/step-04b-add-whatsapp-business-with-your-phonenumber.jpg)

### **ステップ 7: 電話番号の検証**

*(このステップは、オプションBで自社の電話番号を追加することを選択した場合にのみ必要です)*

検証コードが正常に送信されたことを示す通知が表示されます。SMSまたは電話で検証コードを受け取ったら、入力フィールドに入力します。

**次へ**をクリックして進みます。

![電話番号の検証](/static/img/step-05-verify-phonenumber.jpg)

### **ステップ 8: 権限の確認と承認**

ScaleFlowに付与する権限を確認します。この画面には、WhatsAppアカウントの管理やWhatsAppメッセージへのアクセスなど、要求されているアクセス権が表示されます。

**承認**をクリックして接続を許可します。

![権限の確認と承認](/static/img/step-06-review-and-confirm.png)

**承認**をクリックすると、MetaがScaleFlowとの接続を確立する間、処理中の画面が表示されます。

![アカウント接続の処理中](/static/img/step-07-processing-account-connection.jpg)

### **ステップ 9: 接続成功とセットアップの完了**

アカウントが接続されると、成功画面が表示されます。
Metaは、WhatsAppコマースポリシーに準拠しているかビジネスの審査を行います。問題が発生した場合は、24時間以内に連絡があります。

*   **完了**をクリックしてセットアップを終了します。
*   あるいは、**支払い方法を追加**をクリックして、このWhatsApp Businessアカウントに支払い方法をリンクします。

![接続成功](/static/img/step-08-connection-success.jpg)

### **ステップ 10: 接続されたWhatsApp Business APIアカウントの確認**

ScaleFlowのWhatsApp Business APIチャネルページに自動的にリダイレクトされます。リストに新しく接続されたWhatsApp Businessアカウントが表示されます。

![接続されたWhatsApp Businessアカウントの確認](/static/img/view-whatsapp-business-account.jpg)

### **ステップ 11: 受信トレイでのセットアップガイダンスの受信**

ScaleFlowの**受信トレイ**に移動し、**未割り当て**フォルダを確認します。WhatsApp Businessから、WhatsAppマネージャで残りのセットアップステップを完了するためのリンクを提供する自動システムメッセージが届きます。

![受信トレイでWhatsAppセットアップガイダンスメッセージを受信](/static/img/step-09-receive-whatsapp-setup-guidance-message-in-inbox.jpg)

### **ステップ 12: WhatsAppマネージャのセットアップガイダンスの完了**

メッセージ内のリンクをクリックして、Meta’s WhatsAppマネージャの**セットアップガイダンス**ページを開きます。そこに表示される指示に従って、アカウントの残りのステップを完了します。
> **ヒント：** セットアップガイダンスの通知は既に受信トレイに送信されているため、「QRコードをスキャンしてアカウントの更新情報を取得する」などのステップはスキップできます。

![WhatsAppマネージャでセットアップガイダンスを確認](/static/img/step-10-view-setup-guidance-in-whatsapp-manager.jpg)


