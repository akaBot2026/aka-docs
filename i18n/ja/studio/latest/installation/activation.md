---
id: activation
title: ライセンスの有効化
sidebar_label: ライセンスの有効化
sidebar_position: 4
description: akaBot Studioライセンスの有効化方法について説明します。
displayed_sidebar: studioSidebar
---

# ライセンスの有効化

**以下からご自身に適した有効化方法を選択してください：**

**1. Standard（またはStandalone）ライセンス:**

- akaBot Studioのコンピューター **(デバイスA)** が**インターネットに接続されている**場合、**オンラインアクティベーション (Online Activation)** 方式を使用して、便利かつ迅速に有効化できます。

- akaBot Studioのコンピューターがインターネットに接続できない場合は、オフラインアクティベーション方式を使用します。正常に有効化するには、以下の条件を満たしていることを確認してください：

  1. akaBotライセンス管理システムからライセンスファイルを取得するため、インターネットに接続された別のデバイス **(デバイスB)** があること。
  2. デバイスBからデバイスAへライセンスファイルを転送するために、デバイスAとデバイスBの間に接続があること。

**2. Enterprise（またはNetwork）ライセンス**

- ご自身のakaBot Center経由で有効化できます。akaBot StudioのコンピューターがakaBot Centerに正常に接続されていることを確認してください。
- ネットワークがインターネットまたはakaBot Centerに接続するためにプロキシサーバーを経由する必要がある場合、有効化を行う前にプロキシ情報を用意してください。

### オンラインアクティベーション (Online Activation)

**ステップ 1** - Studioを起動します。インストールウィンドウで、「LMS (License Management System)」オプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230717142628-1.png](/static/img/image-20230717142628-1.png)

**ステップ 2** – Online activationオプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230717142628-2.png](/static/img/image-20230717142628-2.png)

**ステップ 3** – ライセンス情報を入力し、「**Next（次へ）**」ボタンをクリックします。

1 - **License Server**: https://aegis.akabot.com/

2 - **License Key**: ライセンスメールに記載されているライセンスキーを入力してください。

3 - **Network Options** (任意): プロキシサーバーを使用する場合は、**Network Options**の下にプロキシ情報を入力してください。

![image-20230717142628-3.png](/static/img/image-20230717142628-3.png)

**ステップ 4** - 「**Activate（有効化）**」ボタンをクリックします。**有効化に成功する**と、akaBot Studioに以下のメッセージが表示されます。

![image-20230717142628-4.png](/static/img/image-20230717142628-4.png)

以下のエラーメッセージが表示された場合は、ネットワーク接続を確認してください。

![image-20230717142628-5.png](/static/img/image-20230717142628-5.png)

### オフラインアクティベーション (Offline Activation)

**akaBot Studioのコンピューター (デバイスA) での操作:**

**ステップ 1** - Studioを起動します。インストールウィンドウで、「LMS (License Management System)」オプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230717142905-6.png](/static/img/image-20230717142905-6.png)

**ステップ 2** - Offline activationオプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230717142905-7.png](/static/img/image-20230717142905-7.png)

**ステップ 3** – ライセンスメールに記載されているライセンスキーを入力し、「**Next（次へ）**」ボタンをクリックします。

![image-20230717142905-8.png](/static/img/image-20230717142905-8.png)

**ステップ 4** - 以下の **Activation Request (有効化リクエスト)** を**コピー**し、Nextをクリックします：

![image-20230717142905-9.png](/static/img/image-20230717142905-9.png)

![image-20230717142905-10.png](/static/img/image-20230717142905-10.png)

**ステップ 5** – コピーした **Activation Request** を、**インターネットにアクセスできるデバイス (デバイスB)** へ移動・コピーします。

**デバイスB での操作:**

**ステップ 6** - https://aegis.akabot.com/#/activation にアクセスします。

akaBot Studioコンピューター (デバイスA) からコピーした **Activation Request** を貼り付け、Captchaを選択した後、**Download File（ファイルのダウンロード）** をクリックして **Activation Response ファイル** (**activate.txt** という名前) をダウンロードします。

![image-20230717142905-11.png](/static/img/image-20230717142905-11.png)

**ステップ 7** – Activation ResponseファイルをデバイスBからデバイスAへコピー・移動します。

**akaBot Studioのコンピューター (デバイスA) での操作:**

**ステップ 8** – Activation Responseファイルを参照するか、ファイル内のActivation ResponseをActivation Boxにコピー＆ペーストし、「**Activate（有効化）**」ボタンをクリックします。

![image-20230717142905-12.png](/static/img/image-20230717142905-12.png)


**有効化に成功する**と、akaBot Studioに以下のメッセージが表示されます。

![image-20230717142905-13.png](/static/img/image-20230717142905-13.png)

### akaBot Center経由でのアクティベーション

**ステップ 1** - Studioを起動します。インストールウィンドウで、「akaBot Center」オプションを選択し、「**Next（次へ）**」ボタンをクリックします。

![image-20230717142905-14.png](/static/img/image-20230717142905-14.png)

**ステップ 2** – ライセンス情報を入力します：

- **Center URL**: お客様のakaBot CenterのURL
- **License Key**: ライセンスメールに記載されているライセンスキーを入力してください。
- **Network Options (任意)**: プロキシサーバーを使用する場合は、**Network Options**の下にプロキシ情報を入力してください。
- 「**Activate（有効化）**」ボタンをクリックします。

![image-20230717142905-15.png](/static/img/image-20230717142905-15.png)

**有効化に成功する**と、akaBot Studioに以下のメッセージが表示されます：

![image-20230717142905-16.png](/static/img/image-20230717142905-16.png)

以下のエラーメッセージが表示された場合は、ネットワーク接続を確認してください。

![image-20230717142628-5](/static/img/image-20230717142628-5.png)

### akaBot Center Cloud経由でのアクティベーション

**akaBot Studio**を実行しているターゲットワークステーションでライセンスを有効にするには、以下の手順に従ってください：

**ステップ 1** – インストール済みの **akaBot Studio** デスクトップクライアントを起動します。

**ステップ 2** – **akaBot Center** 経由で有効化するオプションを選択し、**Next（次へ）** をクリックします。
![image-20230717142905-14.png](/static/img/image-20230717142905-14.png)

**ステップ 3** – 同一の有効化資格情報を入力します：

- **Center URL:** 固有のakaBot Centerアドレス。
- **License Key:** エンタープライズライセンスキー。

![Entering activation credentials on akaBot Studio](/static/img/image-20260528135225-18.png)

- **Network Options (任意):** 社内ネットワークのトラフィックがインターネットプロキシを経由する場合は、次のように構成します：
  1. **Network options（ネットワークオプション）** をクリックしてセクションを展開します。
  
     ![Network options expansion](/static/img/f6f778_image-20260708735789-40.png)
     
  2. **Use proxy server（プロキシサーバーを使用する）** チェックボックスをオンにします。
  3. プロキシサーバーの構成を入力します：
     - **Address:** プロキシサーバーのIPアドレスまたはドメイン名。
     - **Port:** プロキシサーバーの対応するポート番号。
     - **User name:** プロキシサーバーの認証に必要なユーザー名。
     - **Password:** プロキシサーバーの認証に必要なパスワード。
  
     ![Proxy server configuration](/static/img/f6f778_image-20260708735789-41.png)

**ステップ 4** – **Activate（有効化）** をクリックして有効化を完了します。
  - *有効化成功:* Studioワークスペースが開き、プロセス設計キャンバスが表示されます。
  - *有効化失敗:* ワークステーションがインターネットと通信できることを確認してください。

![Activation success on akaBot Studio](/static/img/image-20260528135225-19.png)
