---
id: desktop-outlook-configuration
title: "設定ガイド: Outlook デスクトップ アプリ"
sidebar_label: "Outlook デスクトップの設定"
sidebar_position: 1
description: "Agent マシンの Outlook デスクトップ アプリを準備し、アカウント名とフォルダー名を集めて、akaBot Studio の Outlook アクティビティに入力する方法。"
displayed_sidebar: activitiesSidebar
---
# 設定ガイド: Outlook デスクトップ アプリ

Agent マシンに **Outlook デスクトップ アプリ** がインストールされ、サインインしている場合は、Outlook アクティビティを使用します。Agent はそのアプリを通じて動作するため、サーバー名、ポート、パスワードは**不要**です。

:::tip Exchange Server を使用していますか？
Agent マシンに Outlook がインストールされておらず、メールボックスが社内の **Exchange Server** にある場合は、代わりに **Exchange** アクティビティを使用してください（akaBot Studio では **Mail** > **Exchange**）。[Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) を参照してください。
:::

---

## 1. 必要な情報

| 情報 | 入手先 | 例 |
|---|---|---|
| **アカウント** (任意) | Outlook > **ファイル** > **アカウント設定** (ステップ 2.2 参照)。空の場合は既定のアカウント | `"bot.operator@company.com"` |
| **メール フォルダー** | Outlook のフォルダー一覧に表示されている名前。サブフォルダーは `\` で区切ります | `"Inbox"` または `"Inbox\Invoices"` |

:::note
フォルダー名は Outlook の表示言語と一致させる必要があります。たとえば日本語版 Outlook では、受信トレイは `受信トレイ` です。
:::

---

## 2. Agent マシンで Outlook を準備する

### ステップ 2.1: Outlook クラシックを使用する

アクティビティは **Outlook クラシック** (リボンに **ファイル** タブがあるバージョン) でのみ動作します。**新しい Outlook for Windows** や Web 版 Outlook では動作しません。

1. Agent マシンで **Outlook クラシック** を開き、メールボックスにサインインします。
2. パスワードの入力画面やセットアップ ウィザードが表示されずにメールを送受信できることを確認します。

---

### ステップ 2.2: アカウント名を確認する

Outlook に複数のメール アカウントがある場合のみ必要です。

1. Outlook で **ファイル** > **アカウント設定** > **アカウント設定...** をクリックします。
2. **メール** タブで **名前** 列のアドレス (例: `bot.user@company.com`) をコピーします。

**Get Outlook Accounts** (ステップ 3.1) で一覧を自動的に取得することもできます。

---

### ステップ 2.3: セキュリティの警告を表示しないようにする

Outlook に「*プログラムが、電子メール アドレス情報にアクセスしようとしています...*」と表示され、誰かが **許可** をクリックするまで待機することがあります。その間 Agent は停止します。これを防ぐには:

1. Outlook で **ファイル** > **オプション** > **トラスト センター** > **トラスト センターの設定...** をクリックします。
2. **プログラムによるアクセス** をクリックします。
3. **ウイルス対策の状態** を確認します。
   - **有効**: **ウイルス対策ソフトウェアが無効か最新ではない場合に、疑わしいアクティビティについて警告する (推奨)** を選択します。警告は表示されません。
   - **無効** または表示されない: **疑わしいアクティビティについて警告しない (推奨しません)** を選択します。
4. **OK** を 2 回クリックします。

オプションがグレー表示の場合は、Outlook を閉じ、Outlook のアイコンを右クリックして **管理者として実行** を選んでからもう一度試します。それでもグレー表示の場合は会社のポリシーで管理されているため、IT 担当者に確認してください。

---

## 3. akaBot Studio に入力する

Outlook アクティビティはすべて、**アクティビティ** パネルの **Mail** > **Outlook** にあります。

### ステップ 3.1: Get Outlook Accounts ([`RCA.Activities.Mail.GetAccounts`](../activities/get-outlook-accounts.md))

- **Output Account Names**: 変数を作成します (例: `accountList`、型 `String[]`)。
- 結果: Outlook に設定されているすべてのアカウントのメール アドレス。

---

### ステップ 3.2: Get Outlook Mail Messages ([`RCA.Activities.Mail.GetOutlookMailMessages`](../activities/get-outlook-mail-message.md))

| プロパティ | 値 |
|---|---|
| **Account** | `"bot.user@company.com"`。空の場合は既定のアカウント |
| **Mail Folder** | `"Inbox"` (既定)、またはサブフォルダー (例: `"Inbox\Processing"`) |
| **Top** | `30` (既定) – 読み取るメールの数 |
| **Only Unread Messages** | 既定で選択 – 既読のメールも読む場合は選択を外します |
| **Mark As Read** | 読み取ったメールを既読にする場合に選択します |
| **Messages** | 変数を作成します (例: `mailList`、型 `List<MailMessage>`) |

---

### ステップ 3.3: Send Outlook Mail ([`RCA.Activities.Mail.SendOutlookMail`](../activities/send-outlook-mail.md))

| プロパティ | 値 |
|---|---|
| **Account** | `"bot.user@company.com"`。空の場合は既定のアカウント |
| **To** (必須) | `"manager@company.com"` – 複数のアドレスは `;` で区切ります |
| **Subject** | `"Report Completed"` |
| **Body** | `"The workflow completed successfully."` |
| **Is Body Html** | **Body** に HTML を含む場合のみ選択します |
| **Attachments** | `...` をクリックしてファイル パスを追加します |

---

### ステップ 3.4: Move Outlook Message ([`RCA.Activities.Mail.MoveOutlookMessage`](../activities/move-outlook-message.md))

| プロパティ | 値 |
|---|---|
| **Mail Message** | 1 通のメール (例: `mailList` を対象とする **For Each** ループの現在の項目) |
| **Mail Folder** | 移動先フォルダー (例: `"Inbox\Completed"`)。フォルダーは Outlook にあらかじめ存在している必要があります |

![workflow-desktop-outlook-configuration](/static/img/workflow-desktop-outlook-configuration.png)
