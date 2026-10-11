---
id: imap-configuration
title: "設定ガイド: IMAP (メールの読み取り)"
sidebar_label: "IMAP の設定"
sidebar_position: 2
description: "IMAP でメールを読み取るために必要な情報を集め、akaBot Studio の IMAP アクティビティに入力する方法。"
displayed_sidebar: activitiesSidebar
---
# 設定ガイド: IMAP (メールの読み取り)

Agent が Gmail、Yahoo メール、社内メール サーバーなどのメールボックスからメールを**読み取る**場合は、IMAP アクティビティを使用します。

このガイドでは、アクティビティに必要な**情報の集め方**と、akaBot Studio の**どこに入力するか**を説明します。メール サーバーをインストールしたり設定したりする必要はありません。

:::note
**Microsoft 365 / Outlook.com** のメールボックスの場合は、代わりに [Office 365 パッケージ](../../../office365/latest/introduction.md) を使用してください。Microsoft では、IMAP で通常のパスワードを使用できなくなりました。
:::

:::tip Exchange Server を使用していますか？
メールボックスが社内の **Exchange Server** にある場合は、代わりに **Exchange** アクティビティを使用してください（akaBot Studio では **Mail** > **Exchange**）。[Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) を参照してください。
:::

---

## 1. 必要な情報

akaBot Studio を開く前に、次のチェックリストを埋めてください。

| 情報 | 入手先 | 例 (Gmail) |
|---|---|---|
| **サーバー** | セクション 3 の表、または社内の IT 担当者 | `"imap.gmail.com"` |
| **ポート** | セクション 3 の表、または社内の IT 担当者 | `993` |
| **メール** | Agent が読み取るメールボックスのアドレス | `"bot.account@gmail.com"` |
| **パスワード** | **アプリ パスワード** (セクション 2 参照)。プロバイダーが許可している場合はアカウントのパスワード | 16 文字、スペースなし |
| **メール フォルダー** | メールボックスに表示されているフォルダー名 | `"Inbox"` |

---

## 2. 情報を入手する

### Gmail

変更するのは**自分の Gmail アカウント**の設定だけです。

**A. IMAP を有効にする**

1. [Gmail](https://mail.google.com) を開きます。
2. 右上の**歯車アイコン** > **すべての設定を表示** をクリックします。
3. **メール転送と POP/IMAP** タブを開きます。
4. **IMAP アクセス** で **IMAP を有効にする** を選択します。
5. **変更を保存** をクリックします。

![Gmail の設定 – メール転送と POP/IMAP タブ](/static/img/setting-gmail.png)

*Gmail の **設定** > **メール転送と POP/IMAP** タブ。**IMAP アクセス** は画面の下部にあります。*

**B. アプリ パスワードを作成する**

Gmail では、akaBot Agent などのアプリから通常のパスワードを使用できません。akaBot 用の専用パスワードを作成します。

1. [Google アカウント](https://myaccount.google.com) > **セキュリティ** を開きます。
2. **2 段階認証プロセス** が **オン** になっていることを確認します (オンの場合のみアプリ パスワードが表示されます)。

   ![Google アカウント – 2 段階認証プロセスがオン](/static/img/gmail-2step-verify.png)

   *Google アカウント > **セキュリティとログイン**。**2 段階認証プロセス** が **オン** になっている必要があります。*

3. [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) を開きます。
4. 名前 (例: `akaBot`) を入力し、**作成** をクリックします。
5. 表示された 16 文字のパスワードを、**スペースを取り除いて**コピーします。これが akaBot の **パスワード** に入力する値です。

   ![生成されたアプリ パスワードのダイアログ](/static/img/setting-gmail-passwordapp.png)

   *アプリ パスワードは一度しか表示されません。**完了** をクリックする前にコピーしてください。*

### 社内メール サーバー

サーバーは IT 担当者が管理しています。次のように依頼してください。

> メールボックス `<アドレス>` の IMAP 設定を教えてください: サーバー名、ポート、セキュリティの種類 (SSL または STARTTLS)、通常のパスワードとアプリ パスワードのどちらを使うか。

### その他のプロバイダー (Yahoo、iCloud など)

アカウントのセキュリティ設定で IMAP アクセスを有効にし、アプリ パスワードを作成します。詳しい手順は各プロバイダーのヘルプを参照してください。

---

## 3. サーバーとポートの一覧

| プロバイダー | サーバー | ポート | 安全な接続 |
|---|---|---|---|
| **Gmail** | `imap.gmail.com` | `993` | `SslOnConnect` |
| **Yahoo メール** | `imap.mail.yahoo.com` | `993` | `SslOnConnect` |
| **iCloud** | `imap.mail.me.com` | `993` | `SslOnConnect` |
| **社内サーバー** | IT 担当者に確認 | `993` (SSL) または `143` (STARTTLS) | 993 は `SslOnConnect`、143 は `StartTls`、または `Auto` |

---

## 4. akaBot Studio に入力する

### ステップ 4.1: Get IMAP Mail Messages ([`RCA.Activities.Mail.GetIMAPMailMessages`](../activities/get-imap-mail-messages.md))

1. **アクティビティ** パネルで **Mail** > **IMAP** を開き、**Get IMAP Mail Messages** をワークフローにドラッグします。
2. **プロパティ** パネルで次のように入力します。

| カテゴリ | プロパティ | 値 |
|---|---|---|
| Host | **Server** | `"imap.gmail.com"` |
| Host | **Port** | `993` |
| Host | **Mail Folder** | `"Inbox"` (既定) |
| Logon | **Email** | `"bot.account@gmail.com"` |
| Logon | **Password** | `"abcdefghijklmnop"` (アプリ パスワード) |
| Options | **Secure Connection** | `SslOnConnect` (または `Auto`) |
| Options | **Top** | `30` (既定) – 読み取るメールの数 |
| Options | **Only Unread Messages** | 既定で選択 – 既読のメールも読む場合は選択を外します |
| Options | **Mark As Read** | 読み取ったメールを既読にする場合に選択します |
| Options | **Delete Messages** | **選択しないでください。** 選択すると、読み取ったメールはサーバーから**完全に削除**されます |
| Output | **Messages** | 変数を作成します (例: `imapMails`、型 `List<MailMessage>`) |

![Get IMAP Mail Messages – 設定例](/static/img/imap-properties.png)

*Gmail の場合の **プロパティ** パネルの設定例。*

:::tip
パスワードを保護するために、**Password** の代わりに **SecurePassword** (型 `SecureString`) に入力することもできます。どちらか一方だけを入力します。
:::

---

### ステップ 4.2: Move IMAP Mail Message To Another Folder ([`RCA.Activities.Mail.MoveIMAPMailMessageToFolder`](../activities/move-imap-message-to-another-folder.md))

1. `imapMails` を対象とする **For Each** ループを追加します。
2. ループ内に **Move IMAP Mail Message To Another Folder** をドラッグします。
3. 次のように入力します。
   - **Server**、**Port**、**Email**、**Password**: ステップ 4.1 と同じ値。
   - **Mail Message**: ループの現在の項目 (例: `item`)。
   - **Mail Folder** (Destination): 移動先のフォルダー (例: `"Processed"`)。フォルダーはメールボックスにあらかじめ存在している必要があります。

![Move IMAP Mail Message To Another Folder を含む For Each ループ](/static/img/workflow-imap-move.png)

*`imapMails` の各メールを **Processed** フォルダーに移動します。*
