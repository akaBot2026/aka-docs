---
id: license-activation
title: "ライセンスの有効化"
sidebar_label: "ライセンスの有効化"
sidebar_position: 4
description: "ライセンスの有効化に関するドキュメント。"
displayed_sidebar: agentSidebar
---
# ライセンスの有効化

## **始める前に**

**以下からご自身に適した有効化方法を選択してください：**

1. **Standard（またはStandalone）ライセンス:**
   * akaBot Agentのコンピューター **(デバイスA)** が**インターネットに接続されている**場合、**オンラインアクティベーション (Online Activation)** 方式を使用して、便利かつ迅速に有効化できます。
   * akaBot Agentのコンピューターがインターネットに接続できない場合は、**オフラインアクティベーション (Offline activation)** 方式を使用します。正常に有効化するには、以下の条件を満たしていることを確認してください：
     1. akaBotライセンス管理システムからライセンスファイルを取得するため、インターネットに接続された別のデバイス **(デバイスB)** があること。
     2. デバイスBからデバイスAへライセンスファイルを転送するために、デバイスAとデバイスBの間に接続があること（またはUSB等の転送手段があること）。
2. **Enterprise（またはNetwork）ライセンス**  
   **ご自身の** **akaBot Center** 経由で有効化できます。akaBot AgentのコンピューターがakaBot Centerに正常に接続されていることを確認してください。  
   注意: ネットワークがインターネットまたはakaBot Centerに接続するためにプロキシサーバーを経由する必要がある場合、有効化を行う前にプロキシ情報を用意してください。

## 

## **オンラインアクティベーション (Online Activation)**

**ステップ 1** - Agentを起動します。インストールウィンドウで、「LMS (License Management System)」オプションを選択し、「**Next（次へ）**」ボタンをクリックします。
![image-20230718223155-1.png](/static/img/cd14b4_image-20230718223155-1.png)

**ステップ 2** – Online activationオプションを選択し、「**Next（次へ）**」ボタンをクリックします。
![image-20230718223155-2.png](/static/img/73e6b2_image-20230718223155-2.png)

**ステップ 3** – ライセンス情報を入力し、「**Next（次へ）**」ボタンをクリックします。

1 - **License Server**: [https://aegis.akabot.com/](https://aegis.akabot.com/)

2 - **License Key**: ライセンスメールに記載されているライセンスキーを入力してください。

3 - **Network Options (任意)**: プロキシサーバーを使用する場合は、***Network Options***の下にプロキシ情報を入力してください。

![image-20230718223155-3.png](/static/img/1f4322_image-20230718223155-3.png)

**ステップ 4** - 「**Activate（有効化）**」ボタンをクリックします。**有効化に成功する**と、akaBot Agentに以下のメッセージが表示されます。

![image-20230718223155-4.png](/static/img/f7c766_image-20230718223155-4.png)

以下のエラーメッセージが表示された場合は、ネットワーク接続を確認してください。

![image-20230718223155-5.png](/static/img/e5aad4_image-20230718223155-5.png)

## **オフラインアクティベーション (Offline Activation)**

**akaBot Agentのコンピューター (デバイスA) での操作:**

**ステップ 1** - Agentを起動します。インストールウィンドウで、「LMS (License Management System)」オプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230718223155-6.png](/static/img/5911a7_image-20230718223155-6.png)

**ステップ 2** – Offline activationオプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230718223155-7.png](/static/img/ed8824_image-20230718223155-7.png)

**ステップ 3** – ライセンスメールに記載されているライセンスキーを入力し、「**Next（次へ）**」ボタンをクリックします。

![image-20230718223155-8.png](/static/img/46649e_image-20230718223155-8.png)

**ステップ 4 -** 以下の **Activation Request (有効化リクエスト)** を**コピー**し、Nextをクリックします：

![image-20230718223155-9.png](/static/img/272a55_image-20230718223155-9.png)
![image-20230718223155-10.png](/static/img/c1d57c_image-20230718223155-10.png)

**ステップ 5** – コピーした Activation Request を、インターネットにアクセスできるデバイス (デバイスB) へ移動・コピーします。

**デバイスB での操作:**

**ステップ 6** - [https://aegis.akabot.io/#/activation](https://aegis.akabot.io/#/activation) にアクセスします。  
akaBot Agentコンピューター (デバイスA) からコピーした **Activation Request** を**貼り付け**、Captchaを選択した後、**Download File（ファイルのダウンロード）** をクリックして Activation Response ファイル (activate.txt という名前) をダウンロードします。

![image-20230718223155-11.png](/static/img/ab2866_image-20230718223155-11.png)

**ステップ 7** – Activation ResponseファイルをデバイスBからデバイスAへコピー・移動します。

**akaBot Agentのコンピューター (デバイスA) での操作:**

**ステップ 8** – Activation Responseファイルを参照するか、ファイル内のActivation ResponseをActivation Boxにコピー＆ペーストし、「**Activate（有効化）**」ボタンをクリックします。

![image-20230718223155-12.png](/static/img/2a654d_image-20230718223155-12.png)

**有効化に成功する**と、akaBot Agentに以下のメッセージが表示されます。

![image-20230718223155-13.png](/static/img/9790b8_image-20230718223155-13.png)

## **akaBot Center経由でのアクティベーション**

**ステップ 1** - Agentを起動します。インストールウィンドウで、「akaBot Center」オプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230718223155-14.png](/static/img/d49ed9_image-20230718223155-14.png)

**ステップ 2** – ライセンス情報を入力します：

1. **Center URL:** お客様のakaBot CenterのURL
2. **License Key**: ライセンスメールに記載されているライセンスキーを入力してください。
3. **Network Options (任意)**: プロキシサーバーを使用する場合は、***Network Options***の下にプロキシ情報を入力してください。
4. 「**Activate（有効化）**」ボタンをクリックします。

![image-20230718223155-15.png](/static/img/2583d0_image-20230718223155-15.png)

**有効化に成功する**と、akaBot Agentに以下のメッセージが表示されます：

![image-20230718223155-16.png](/static/img/568bd1_image-20230718223155-16.png)

以下のエラーメッセージが表示された場合は、ネットワーク接続を確認してください。

![image-20230718223155-17.png](/static/img/6661dd_image-20230718223155-17.png)

## **akaBot Center Cloud経由でのアクティベーション**

**akaBot Agent** を実行しているターゲットマシンでライセンスを有効にするには、以下の手順を実行してください：

**ステップ 1:** マシンでインストール済みの **akaBot Agent** アプリケーションを起動します。
**ステップ 2:** 初回起動時の設定画面で、**akaBot Center** 経由で有効化するオプションを選択し、**Next（次へ）** をクリックします。

![image-20230718223155-14.png](/static/img/d49ed9_image-20230718223155-14.png)

**ステップ 3:** 必要な有効化パラメータを入力します：
  - **Center URL:** 固有のakaBot Centerアドレス（ライセンスダッシュボードの _Center URL_ フィールドからコピー）。
  - **License Key:** エンタープライズライセンスキー（_License Key_ フィールドからコピー）。

  ![Entering activation credentials on akaBot Agent](/static/img/image-20260528135225-6.png)

  - **Network Options (任意):** 社内ネットワークのトラフィックがインターネットプロキシを経由する場合は、次のように構成します：
    1. **Network options（ネットワークオプション）** をクリックしてセクションを展開します。
    
       ![Network options expansion](/static/img/f6f778_image-20260708735609-39.png)
       
    2. **Use proxy server（プロキシサーバーを使用する）** チェックボックスをオンにします。
    3. プロキシサーバーの構成を入力します：
       - **Address:** プロキシサーバーのIPアドレスまたはドメイン名。
       - **Port:** プロキシサーバーの対応するポート番号。
       - **User name:** プロキシサーバーの認証に必要なユーザー名。
       - **Password:** プロキシサーバーの認証に必要なパスワード。
    
       ![Proxy server configuration](/static/img/f6f778_image-20260708735789-39.png)

**ステップ 4:** **Activate（有効化）** をクリックしてプロセスを完了します。
  - _有効化成功:_ 確認のポップアップが表示され、Agentは準備完了状態に移行します。
  - _有効化失敗:_ インターネット接続を確認するか、ネットワーク管理者に連絡してファイアウォールとプロキシのルールを確認してください。

![Activation success on akaBot Agent](/static/img/image-20260528135225-7.png)