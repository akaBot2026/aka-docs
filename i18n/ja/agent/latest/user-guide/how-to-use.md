---
id: how-to-use
title: "akaBotエージェントの使用方法"
sidebar_label: "使用方法"
sidebar_position: 2
description: "akaBot Agent の設定と操作に関するステップバイステップ ガイド。"
displayed_sidebar: agentSidebar
---
# akaBot Agent の使用方法

## **概要**

akaBot Agent は、akaBot Studio で構築されたオートメーション プロセス、または akaBot Center からデプロイされたプロセスを実行するランタイム実行コンポーネントです。

このガイドでは、Agent の起動、akaBot Center への接続、プロセス パッケージの取得、およびプロセス実行の制御という完全なワークフローを説明します。

## **はじめに**

プロセスを実行する前に、以下の手順を順番に完了してください。

1. *(省略可)* akaBot Center への接続にプロキシが必要な環境の場合は、ネットワーク設定を構成します。
2. エージェント キーを使用して、akaBot Agent を akaBot Center に接続します。
3. akaBot Center または akaBot Studio から公開されたプロセス パッケージを取得します。
4. プロセスの実行・停止、引数の設定、または実行履歴の確認を行います。

### **akaBot Agent を開く**

akaBot Agent ウィンドウを開くには:

1. システム トレイをクリックして、非表示のアイコンを表示します。
2. **akaBot** アイコンを右クリックします。
3. **[akaBot Agent を表示]** を選択します。

![System tray — right-click akaBot icon to open Agent](/static/img/d5b6ed_image-20220505174101-1.png)

akaBot Agent ウィンドウが開き、利用可能なプロセスの一覧が表示されます。

![akaBot Agent main screen — workflow list](/static/img/2d6c9f_image-20221117102945-5.png)

---

## **ネットワーク設定の構成**

akaBot Center への接続にプロキシが必要な場合は、接続を確立する前にプロキシ設定を構成してください。

**ステップ 1:** **[設定]** 画面に移動します。ワークフロー リスト画面の場合は、右上隅の **[設定]** ボタンをクリックします。

**ステップ 2:** **[ネットワーク]** タブを選択し、**[ネットワーク設定]** フォームに入力します。

- **プロキシなし / 自動検出**: このセクションで追加の設定は不要です。
- **手動プロキシ**: 以下の設定を指定します。
  - **プロキシの種類**: 適切なプロトコルを選択します。
  - **プロキシ サーバー URL**: プロキシ サーバーのアドレスを入力します。
  - **プロキシ ポート**: ポート番号を入力します。
  - **認証** *(必要な場合)*: **[認証が必要]** を有効にして、ユーザー名とパスワードを入力します。

![Network Configuration — Manual Proxy settings](/static/img/5d0ea0_image-20221117102229-3.png)

---

## **akaBot Agent を akaBot Center に接続する**

akaBot Agent を akaBot Center に接続するには、まず akaBot Center でエージェントを登録して **エージェント キー** を取得する必要があります。

エージェント キーを取得したら、以下の手順を実行します。

**ステップ 1:** 右上隅の **[設定]** ボタンをクリックして、**[設定]** 画面に移動します。

**ステップ 2:** **[センター]** タブを選択し、**[センター設定]** フォームに入力します。

- **マシン名 (Machine Name)**: 現在のマシンのホスト名 (自動入力されます)。
- **エージェント キー (Agent Key)**: akaBot Center 登録時に取得したキー。
- **センター URL (Center URL)**: akaBot Center インスタンスの URL。

**ステップ 3:** **[接続]** をクリックして接続を確立します。

接続が成功すると、ステータス インジケーターが **接続済み (Connected)** に変わります。

![Center Configuration — Connected status](/static/img/fabb7a_image-20221117102433-4.png)

いつでも切断するには、**[切断]** をクリックします。

---

## **プロセスの取得**

akaBot Agent は、akaBot Center から公開されたすべてのプロセス パッケージを自動的に同期・取得します。手動での更新は不要です。

akaBot Studio からパッケージを公開する方法については、[akaBot Studio の使用方法](/docs/studio/latest/user-guide/how-to-use.md) を参照してください。

---

## **プロセスの制御**

ワークフロー リストから、任意のプロセスに対して以下の操作を実行できます。

- 最新のパッケージ バージョンをプルする。
- 詳細の確認、入力引数の設定、実行履歴の確認。
- Standard モードまたは Picture-in-Picture (PiP) モードでプロセスを開始する。
- 実行中のプロセスを停止する。

### **1. パッケージの新しいバージョンをプルする**

プロセスを最新バージョンに更新するには、ワークフロー カード上の **ダウンロード** (↓) アイコンをクリックします。akaBot Agent が自動的に新しいバージョンをダウンロードしてインストールします。

更新されたバージョンは、次回の実行から反映されます。

![Workflow card with Down Arrow button to pull a new package version](/static/img/2d6c9f_image-20221117102945-5.png)

---

### **2. ワークフロー詳細タブ**

任意のワークフロー カードをクリックすると、**3 つのタブ**を持つサイド パネルが開きます。

#### **A. 詳細 (Details) タブ**

選択したワークフローのメタデータを表示します。

| フィールド | 説明 |
|---|---|
| **名前 (Name)** | 自動化パッケージ名。 |
| **バージョン (Version)** | 現在インストールされているパッケージ バージョン。 |
| **最終実行 (Last Run)** | 最新の実行のタイムスタンプ。 |
| **最終更新 (Last Update)** | パッケージがインストールまたは更新された日付。 |
| **説明 (Description)** | パッケージの機能説明。 |

> **ヒント:** すべてのテキスト フィールドはテキスト選択をサポートしており、`Ctrl+C` でコピーできます。

![Workflow Details Tab](/static/img/agent-details-tab.png)

#### **B. 設定 (Configure) タブ**

プロセスを実行する前に、入力パラメーター (`InArgument`) をカスタマイズするタブです。

**対応する引数の型**: String (最大 4,000 文字)、Int32、Boolean、DateTime。

**必須引数**は赤いアスタリスク (`*`) でマークされています。

- **デフォルト値なし**: フィールドが空の状態で、プロセスを実行する前に値を入力する必要があります。
- **デフォルト値あり**: フィールドに *「デフォルト値を使用 (Use default value)」* と表示されます。**鉛筆** アイコンをクリックして値を上書きするか、**元に戻す (Undo)** でデフォルトに戻します。

**[保存 (Save)]** をクリックすると今後の実行のために設定値を保存し、**[実行 (Run)]** をクリックすると検証後に直ちに実行します。

![Workflow Configure Arguments](/static/img/agent-configure-tab.png)

#### **C. 履歴 (History) タブ**

選択したワークフローの過去の実行の監査ログを表示します。

- **実行レコード**: 各エントリには実行ステータス (成功、失敗、キャンセル)、開始時刻、所要時間が表示されます。
- **実行詳細**: 任意のレコードをクリックすると、実行ソース (Local、Center、PiP)、出力引数の値、エラー メッセージを確認できます。

![Workflow Execution History](/static/img/agent-history-tab.png)

---

### **3. プロセスを開始する**

一度に実行できるプロセスは 1 つだけです。akaBot Agent は 2 つの実行モードをサポートしています。

#### **Standard モード**

現在のデスクトップ セッションでプロセスを実行するには、ワークフロー カード上の **再生 (▶)** アイコンをクリックします。

プロセスの実行が開始され、Agent のステータスが **実行中 / ビジー (Running / Busy)** に変わります。

![Agent status turns to Running/Busy after clicking Play](/static/img/agent-play-button.png)

#### **Picture-in-Picture (PiP) モード**

PiP モードは、隔離されたデスクトップ セッションでオートメーションを実行し、メイン画面での作業を中断することなく継続できます。

PiP モードでプロセスを開始するには、ワークフロー カード上の **PiP** アイコンをクリックします。

![Workflow card with PiP icon highlighted](/static/img/agent-pip-icon.png)

> **注:** 初回使用時は、Windows の資格情報の入力を求めるプロンプトが表示されます。akaBot Agent はセカンダリ デスクトップ セッションを初期化するために、これらの資格情報が必要です。

![Windows credentials prompt for first-time PiP session](/static/img/b6ccf9_image-20221117140949-9.png)

PiP セッションが開始されると、フローティング ウィンドウが表示されます。セッションを管理するには、以下のコントロールを使用します。

- **制御を取得 (Take Control)**: マウスとキーボードを使用して PiP セッションを操作します。
- **最上部に維持 (Keep on Top)**: フローティング ウィンドウを前面に固定して実行を監視します。

![PiP floating session with Take control and Keep on top options](/static/img/e9d235_328420978_738762340828688_4227970519572779063_n.png)

---

### **4. プロセスを停止する**

実行中のプロセスを停止するには、ワークフロー カード上の **[停止]** ボタンをクリックします。

停止後、Agent のステータスは **利用可能 (Available)** に戻り、関連するすべてのプロセス スレッドが終了します。

![Agent status returns to Available after process is stopped](/static/img/agent-stop-process.png)