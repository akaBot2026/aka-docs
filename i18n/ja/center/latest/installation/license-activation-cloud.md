---
id: license-activation-cloud
title: "ライセンスの有効化 (Cloud)"
sidebar_label: "ライセンスの有効化 (Cloud)"
sidebar_position: 3
description: "akaBot Center Cloudのライセンス有効化と接続に関するドキュメント。"
displayed_sidebar: centerSidebar
---


# ライセンスの有効化 (Cloud)
## **1. ユーザーアカウントの有効化**

### **1.1. アカウント登録メールの受信**
トライアル（**Trial**）または公式のエンタープライズアカウントがシステムで正常にプロビジョニングされると、akaBotから**2通の公式通知メール**が届きます：
* **1通目のメール：** 件名 *"Welcome to akaBot - Your account is ready!"* – ログイン認証情報と一時パスワードが記載されています。
* **2通目のメール：** 件名 *"Welcome to your free akaBot Enterprise Network Trial"* – トライアルライセンスの割り当てとサブスクリプション期間の詳細が記載されています。

> [!NOTE]
> 受信トレイにこれらのメールが見当たらない場合は、**迷惑メール/スパム**フォルダを確認するか、システムの管理者に再送を依頼してください。

![Email 1: Account credentials and temporary password](/static/img/image-20260528135225-1.png)

![Email 2: Trial license package details](/static/img/image-20260528135225-2.png)

### **1.2. 初回ログインとパスワードのリセット**
エンタープライズアカウントを保護するため、初回ログイン時に以下の手順を実行してください：
1. ウェルカムメールに記載されている**akaBot Center**ポータルのURLをクリックします。
2. **Registered Email（登録メールアドレス）** と **Temporary Password（一時パスワード）** を入力し、**Sign In（サインイン）** をクリックします。
3. 初回ログイン時、システムはセキュリティ要件に従ってパスワードの変更を自動的に求めます。新しいパスワードを入力し、**Set Password & Sign In（パスワードを設定してサインイン）** をクリックしてください。

![New password setup screen](/static/img/image-20260528135225-3.png)

> [!IMPORTANT]
> **パスワードのセキュリティ要件:**
> 新しいパスワードは、システムのセキュリティポリシーの要件（大文字、小文字、数字、特殊文字を含む）を満たす必要があります。このパスワードは安全に保管し、他の人と共有しないでください。

### **1.3. 初回ログインの完了**
パスワードのリセットが完了すると、システムは自動的に**akaBot Center**のメインダッシュボード（**Home / Dashboard**）にリダイレクトします。

## **2. akaBot Studioの有効化**

### **2.1. akaBot Centerでのライセンス割り当ての確認**
割り当てられたライセンスリソースを表示および管理するには、以下の手順に従ってください：
* **ライセンス管理ページへのアクセス:**
  akaBot Centerダッシュボードの左側のナビゲーションペイン（**サイドバー**）で、以下に移動します：
  > **Administration（管理）** ➔ **License（ライセンス）**

* **ネットワークライセンス画面の主要情報:**
  *この画面には、ライセンス資産と現在のアクティブな消費量に関する詳細な指標が表示されます：*
  * **akaBot Agent（ロボット実行エンジン）ライセンス情報:**
    - **Total Licensed Agents（ライセンス付きAgentの総数）:** 組織に許可されたAgentの最大数。
    - **Activated Agents（アクティブ化されたAgent）:** 現在システムにアクティブ化され接続されているAgentの数。
    - **Remaining Agents（残りのAgent）:** アクティブ化可能な未使用のAgentスロット数。
  * **akaBot Studio（プロセスデザイナー）ライセンス情報:**
    - **Total Licensed Studios（ライセンス付きStudioの総数）:** 許可されたStudioのインストールの最大数。
    - **Activated Studio（アクティブ化されたStudio）:** 現在アクティブ化され有効なStudioの数。
    - **Remaining Studios（残りのStudio）:** 未使用のStudioスロット数。
  * **接続と有効化のパラメータ（後続の構成手順に重要）:**
    - **License Key（ライセンスキー）:** 製品の有効化に使用される一意のエンタープライズライセンスキー。
    - **Center URL（CenterのURL）:** 専用のakaBot Centerポータルへの直接接続エンドポイント。

![Network License management screen](/static/img/image-20260528135225-4.png)

> [!NOTE]
> **トライアルライセンスに関する注意事項:**
> - デフォルトのトライアルパッケージには、評価目的で**01 Agent**と**01 Studio**が含まれています。
> - 本番展開用にアップグレードまたは追加のライセンスをリクエストするには、インターフェースの**Buy Now（今すぐ購入）**ボタンをクリックするか、akaBotのアカウント担当者に直接ご連絡ください。

### **2.2. akaBot Studioのライセンス有効化手順**
**akaBot Studio**を実行しているターゲットワークステーションでライセンスを有効にするには、以下の手順に従ってください：

* **ステップ 1:** インストール済みの**akaBot Studio**デスクトップクライアントを起動します。
* **ステップ 2:** **akaBot Center**経由で有効化するオプションを選択し、**Next（次へ）** をクリックします。
* **ステップ 3:** 同一の有効化資格情報を入力します：
  - **Center URL:** 固有のakaBot Centerアドレス。
  - **License Key:** エンタープライズライセンスキー。
  - **Network Options（ネットワークオプション）:** ネットワーク環境によって求められた場合は、適切なプロキシ資格情報を入力します。
* **ステップ 4:** **Activate（有効化）** をクリックして完了します。
  - *有効化成功:* Studioワークスペースが開き、プロセス設計キャンバスが表示されます。
  - *有効化失敗:* ワークステーションがインターネットと通信できることを確認してください。

![Entering activation credentials on akaBot Studio](/static/img/image-20260528135225-18.png)

![Activation success on akaBot Studio](/static/img/image-20260528135225-19.png)

## **3. akaBot Agentの有効化**

> [!IMPORTANT]
> akaBot AgentをakaBot Center Cloudにセットアップするには、**2つの独立した必須ステップ**が必要です：
> 1. **ライセンスの有効化**（下記セクション3.1） — **License Key**を使用してakaBot Agentソフトウェアのロックを解除します。
> 2. **登録と接続**（下記セクション3.2） — **Agent Key**を使用して、このAgentインストールをakaBot Center上のAgentレコードにリンクし、自動化タスクを受信・実行できるようにします。
>
> ステップ1のみを完了した場合、ソフトウェアは有効化されますが、Agentは akaBot Center上で接続済み/利用可能として表示されません。両方のステップを完了する必要があります。


### **3.1. akaBot Agentの有効化**
**akaBot Agent**を実行しているターゲットマシンでライセンスを有効にするには、以下の手順を実行してください：

* **ステップ 1:** マシンでインストール済みの**akaBot Agent**アプリケーションを起動します。
* **ステップ 2:** 初回起動時の設定画面で、**akaBot Center**経由で有効化するオプションを選択し、**Next（次へ）** をクリックします。
* **ステップ 3:** 必要な有効化パラメータを入力します：
  - **Center URL:** 固有のakaBot Centerアドレス（ライセンスダッシュボードの*Center URL*フィールドからコピー）。
  - **License Key:** エンタープライズライセンスキー（*License Key*フィールドからコピー）。
  - **Network Options（ネットワークオプション）:** 社内ネットワークのトラフィックがインターネットプロキシを経由する場合は、このセクションを展開してプロキシサーバーの構成を入力します。
* **ステップ 4:** **Activate（有効化）** をクリックしてプロセスを完了します。
  - *有効化成功:* 確認のポップアップが表示され、Agentは準備完了状態に移行します。
  - *有効化失敗:* インターネット接続を確認するか、ネットワーク管理者に連絡してファイアウォールとプロキシのルールを確認してください。

![Entering activation credentials on akaBot Agent](/static/img/image-20260528135225-6.png)

![Activation success on akaBot Agent](/static/img/image-20260528135225-7.png)

### **3.2. akaBot AgentとakaBot Centerの接続**

#### **3.2.1. akaBot CenterでのAgentの登録と構成（管理者向け）**

* **Agentグループの作成:**
  1. 左側のサイドバーの **Agents** タブに移動し、**Agent Groups** を選択します。
  2. 右上の **Create New（新規作成）** ボタンをクリックします。
  3. グループのわかりやすい名前を入力し、**Save（保存）** をクリックします（例：*"Agent Group 1"*）。

  ![Agent Groups management dashboard](/static/img/image-20260528135225-11.png)

  ![Create Agent Group modal form](/static/img/image-20260528135225-12.png)

* **akaBot CenterへのAgentマシンの登録:**
  1. **Agents** タブ（Agent Groupsタブの隣）に切り替えます。
  2. 右上の **Create New（新規作成）** をクリックします。
  3. 以下の詳細ガイドを使用して、構成フィールドに入力します：

| No. | パラメータ / ラベル | 説明 | データ型 | 制限 | 必須？ | 入力ガイダンス |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| **1** | **Key** | Agent用に生成された一意の識別子。このキーはCenterポータルとデスクトップAgentクライアントを接続します。 | String | 50文字 | **はい** | *作成時にシステムによって自動生成されます。* |
| **2** | **Name** | この特定のAgentを表す認識可能な表示名。 | String | 50文字 | **はい** | ユーザー定義（例：`Agent_Accounting`）。 |
| **3** | **Machine Name** | Agentを実行している物理マシンの正確なホスト名。 | String | 50文字 | **はい** | 正確なコンピューター名を入力します（akaBot Agent設定の**Machine name**フィールドから直接取得）。 |
| **4** | **Machine Username** | Agentを実行しているワークステーションのOSレベルのログインユーザー名。 | String | 50文字 | いいえ | 自動化プロセス（*Unattended Bot*）を実行する場合は必須。akaBot AgentクライアントUIには表示されないため、対象ワークステーション側でWindowsアカウントのユーザー名を直接確認し、入力してください。 |
| **5** | **Machine Password** | Agentを実行しているワークステーションのOSレベルのログインパスワード。 | String | 255文字 | いいえ | 自動化プロセス（*Unattended Bot*）を実行する場合は必須。 |
| **6** | **Type** | Agentのランタイム環境の指定。 | Dropdown | - | **はい** | *DEVELOPMENT*, *ASSISTANT*, *STAGING*, または *PRODUCTION* から選択。 |
| **7** | **Description** | このAgentの役割または範囲を要約した簡単な説明。 | String | 500文字 | いいえ | 管理参照用のオプションのメモ。 |

> [!TIP]
> **Machine Nameを簡単に見つける:**
> このパラメータは、**akaBot Agent**クライアントUIから直接見つけてコピーできます：
> 1. **akaBot Agent**デスクトップクライアントを開き、右上の**Settings**（歯車アイコン）をクリックします。
> 2. **Center**タブを選択します。**Central Configuration（中央構成）**ペインに、マシンにプリロードされた**Machine name**が表示されます。この値をコピーしてakaBot Centerの作成フォームに貼り付けるだけです。
>
> **Machine Username**はakaBot AgentクライアントのどこにもUI表示されません。これはワークステーションのOSレベルのログインユーザー名としてakaBot Center側で直接入力するものであり、**Unattended Bot**を実行する場合にのみ必要です。Agent側の値と一致させる必要はなく、Agent-Center間の接続確立には関与しません。

* **グループへのAgentの割り当て:**
  - 作成フォームで、このAgentをリンクするために先ほど作成した適切な**Agent Group**のチェックボックスをオンにします。
  - **Save（保存）** をクリックして登録を完了します。

  ![Inputting Agent registration details](/static/img/image-20260528135225-13.png)

  ![Agent registered successfully](/static/img/image-20260528135225-14.png)

* **Agentの詳細表示とAgentキーのコピー:**
  保存後、新しく作成したAgentの横にある**View（表示）**アイコン（目のアイコン）をクリックして詳細画面にアクセスし、**Agent Key**をコピーします。これは以下の接続手順で必要になります。

  ![Viewing registered Agent details](/static/img/image-20260528135225-15.png)

#### **3.2.2. akaBot AgentデスクトップクライアントとakaBot Centerの接続**
ワークステーションのAgentがakaBot Centerからリモートでディスパッチされる自動化タスクを受信して実行できるようにするには、**akaBot Agent**クライアントで以下の手順に従います：

* **ステップ 1:** **akaBot Agent**ダッシュボードで、右上の**Settings**（歯車アイコン）をクリックします。

  ![Settings gear icon on akaBot Agent](/static/img/image-20260528135225-8.png)

* **ステップ 2:** **Center**タブを選択し、**Central Configuration（中央構成）**フォームに記入します：
  - **Machine name:** コンピューター名（システムによって自動入力されます）。
  - **Agent key:** akaBot Centerの詳細画面からコピーした**Agent Key**を貼り付けます（上記の「**Agentの詳細表示とAgentキーのコピー**」を参照）。
  - **Center URL:** 専用のakaBot Centerへの直接接続アドレスを入力します。

  ![Center settings tab on akaBot Agent](/static/img/image-20260528135225-9.png)

  ![Copy-pasting credentials to the Agent Settings window](/static/img/image-20260528135225-16.png)

* **ステップ 3:** **Connect（接続）** ボタンをクリックしてリンクを確立します。
  - 正常に接続されると、Agentクライアントの接続ステータスが**Connected（接続済み）**（緑色で強調表示）になり、Centerポータルの対応するAgentの状態が**Available（利用可能）**（実行準備完了）に切り替わります。

  ![Successful connection state](/static/img/image-20260528135225-17.png)

> [!NOTE]
> **Center**設定タブの**Disconnect（切断）**ボタンをクリックすることで、いつでもAgentをCenter管理エンジンから切断できます。

#### **3.2.3. トラブルシューティング：Agentが接続できない、または誤って接続される場合**

**Connect**をクリックしても**Disconnected**のままの場合、または接続はできるが意図したマシンと対応していない場合、原因はほぼ次のいずれかです。**特に複数のAgent/マシンを管理している場合に発生しやすい**問題です：

* **別のAgentレコードからコピーした誤ったAgent Key。**
  akaBot Center上の各**Key**は、必ず**1つ**のAgentレコード（1つのMachine Name）に紐づいています。複数のAgentマシンを管理している場合、誤って別のAgentの詳細画面を開き、そのKeyをコピーしてしまうことが起こりがちです。そのKeyを別の物理マシンに貼り付けても正しく接続されません — そのKeyはすでに別のマシンのAgentレコードに紐づいているためです。
  * **対処法:** akaBot Centerの**Agents**一覧で、**Machine Name**列が対象コンピューターと完全に一致するAgentレコードを見つけ、その**View**（目のアイコン）をクリックして、**そのレコードから**改めて**Key**をコピーしてください。以前に別のマシン用にコピーしたKeyを使い回さないでください。

* **Centerのレコードと実機のMachine Nameの不一致。**
  Centerでagentレコードを作成する際に入力する**Machine Name**は、接続するマシンの正確なホスト名（Agentクライアントの**Center**設定タブに表示されるもの）と**完全に一致**している必要があります。マシンの名前変更・再イメージ化による古い値の残存、タイプミス、別のワークステーションのホスト名を誤ってコピーした場合など、わずかな違いでもAgentが正しく認識されなくなります。
  * **対処法:** AgentのCenter設定タブに表示される**Machine Name**と、Centerの当該Agent詳細ページに表示される**Machine Name**を比較してください。一致しない場合は、Centerのレコードの Machine Name を修正するか、マシンの実際の現在のホスト名を使って新しいAgentレコードを作成してください。

> [!TIP]
> 接続トラブルを調査する際は、必ずAgentクライアント上の**Key**、**Machine Name**、**Center URL**を、**その1つの**AgentのCenter詳細ページの同じ項目と照合してください — 見た目が似ている別のAgentレコードと比較しないよう注意してください。

## **4. 検証と動作状況の確認**

Agentの登録と接続が成功した後、**akaBot Center**ポータルのライセンスダッシュボード（**Administration（管理） ➔ License（ライセンス）**）に戻ります。

**Activated Agents（アクティブ化されたAgent）**のカウンターが `0` から `1` に（または新しく接続されたマシンの数だけ）自動的に増分され、ライセンス資産が割り当てられ、正常に動作していることが確認されます。

![License metrics updating on dashboard](/static/img/image-20260528135225-10.png)

## **5. 参考資料と詳細なユーザーガイド**

ライセンスを有効にし、デバイスの接続を確立した後、自動化ワークフローを構築、スケジュール、オーケストレーションする準備が完全に整いました。各製品モジュールの機能を習得するには、akaBotの公式ガイドを参照してください：

* **akaBot Center ユーザーガイド（中央管理プラットフォーム）:**
  * ユーザーの管理、詳細な役割の割り当て、スケジュールの構築、資産の管理、およびボットの実行ログの監視方法を学びます。
  * **アクセスリンク:** [akaBot Center 操作ガイド](/docs/center/latest/user-guide/how-to-use-by-function/operation-functions/home.md)

* **akaBot Agent ユーザーガイド（タスク実行クライアント）:**
  * Attended Botのトリガー、ローカルキューの管理、実行履歴の表示、およびローカルクライアントの環境設定の調整方法を学びます。
  * **アクセスリンク:** [akaBot Agent ユーザーガイド](/docs/agent/latest/user-guide/how-to-use.md)

* **akaBot Studio ユーザーガイド（自動化ワークフローデザイナー）:**
  * プロセスの構築、ドラッグアンドドロップアクティビティの使用、コードのデバッグ、およびパッケージの公開に関するステップバイステップのドキュメント。
  * **アクセスリンク:** [akaBot Studio ユーザーガイド](/docs/studio/latest/user-guide/how-to-use.md)

> [!TIP]
> akaBotのテクニカルドキュメントポータルは、すべての製品リリースと連携して継続的に更新されます。展開中に機能上の問題が発生した場合や、高度なサポートが必要な場合は、カスタマーサポートポータルでサービスチケットを送信するか、テクニカルサポートデスクにお問い合わせください。
