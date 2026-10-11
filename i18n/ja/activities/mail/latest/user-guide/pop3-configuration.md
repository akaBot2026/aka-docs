---
id: pop3-configuration
title: "設定ガイド: POP3 (メールのダウンロード)"
sidebar_label: "POP3 の設定"
sidebar_position: 4
description: "POP3 でメールをダウンロードするために必要な情報を集め、akaBot Studio の Get POP3 Mail Messages アクティビティに入力する方法。"
displayed_sidebar: activitiesSidebar
---
# 設定ガイド: POP3 (メールのダウンロード)

Agent がメールボックスからメールを**ダウンロード**する場合は、**Get POP3 Mail Messages** を使用します。POP3 は常に**受信トレイ**のみを読み取ります。他のフォルダー、未読のみの絞り込み、メールの移動が必要な場合は、代わりに [IMAP](imap-configuration.md) を使用してください。

このガイドでは、アクティビティに必要な**情報の集め方**と**どこに入力するか**を説明します。メール サーバーをインストールしたり設定したりする必要はありません。

:::note
**Microsoft 365 / Outlook.com** のメールボックスの場合は、代わりに [Office 365 パッケージ](../../../office365/latest/introduction.md) を使用してください。Microsoft では、POP3 で通常のパスワードを使用できなくなりました。
:::

:::tip Exchange Server を使用していますか？
メールボックスが社内の **Exchange Server** にある場合は、代わりに **Exchange** アクティビティを使用してください（akaBot Studio では **Mail** > **Exchange**）。[Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) を参照してください。
:::

---

## 1. 必要な情報

| 情報 | 入手先 | 例 (Gmail) |
|---|---|---|
| **サーバー** | セクション 3 の表、または社内の IT 担当者 | `"pop.gmail.com"` |
| **ポート** | セクション 3 の表、または社内の IT 担当者 | `995` |
| **メール** | Agent が読み取るメールボックスのアドレス | `"bot.account@gmail.com"` |
| **パスワード** | **アプリ パスワード**。プロバイダーが許可している場合はアカウントのパスワード | 16 文字、スペースなし |

---

## 2. 情報を入手する

### Gmail

1. [Gmail](https://mail.google.com) > **歯車アイコン** > **すべての設定を表示** を開きます。
2. **メール転送と POP/IMAP** タブを開きます。
3. **POP ダウンロード** で次の操作をします。
   - **すべてのメールで POP を有効にする** (または **今後受信するメールで POP を有効にする**) を選択します。
   - Gmail にメールを残す場合は、**POP でメールにアクセスする場合** で **Gmail のメールを受信トレイに残す** を選択します。
4. **変更を保存** をクリックします。
5. [IMAP 設定ガイド](imap-configuration.md) の手順で **アプリ パスワード** を作成します。

![setting-gmail](/static/img/setting-gmail.png)

### 社内メール サーバー

IT 担当者に次のように依頼してください。

> メールボックス `<アドレス>` の POP3 設定を教えてください: サーバー名、ポート、セキュリティの種類 (SSL または STARTTLS)、通常のパスワードとアプリ パスワードのどちらを使うか。

---

## 3. サーバーとポートの一覧

| プロバイダー | サーバー | ポート | 安全な接続 |
|---|---|---|---|
| **Gmail** | `pop.gmail.com` | `995` | `SslOnConnect` |
| **Yahoo メール** | `pop.mail.yahoo.com` | `995` | `SslOnConnect` |
| **社内サーバー** | IT 担当者に確認 | `995` (SSL) または `110` | 995 は `SslOnConnect`、110 は `Auto` |

---

## 4. akaBot Studio に入力する

### Get POP3 Mail Messages ([`RCA.Activities.Mail.GetPOP3MailMessages`](../activities/get-pop3-mail-messages.md))

1. **アクティビティ** パネルで **Mail** > **POP3** を開き、**Get POP3 Mail Messages** をワークフローにドラッグします。
2. **プロパティ** パネルで次のように入力します。

| カテゴリ | プロパティ | 値 |
|---|---|---|
| Host | **Server** | `"pop.gmail.com"` |
| Host | **Port** | `995` |
| Logon | **Email** | `"bot.account@gmail.com"` |
| Logon | **Password** | アプリ パスワード |
| Options | **Secure Connection** | `SslOnConnect` (または `Auto`) |
| Options | **Top** | `30` (既定) – ダウンロードする最新メールの数 |
| Options | **Delete Messages** | **選択しないでください。** 選択すると、ダウンロードしたメールはサーバーから**完全に削除**されます。(Gmail ではセクション 2 の POP 設定が優先されます。) |
| Output | **Messages** | 変数を作成します (例: `popMails`、型 `List<MailMessage>`) |

![Get POP3 Mail Messages – 設定例](/static/img/pop3-properties.png)

*Gmail の場合の設定例。**Password** にはアプリ パスワードを入力し、**Delete Messages** は選択しないでください。*

:::tip
**Password** の代わりに **SecurePassword** (型 `SecureString`) に入力することもできます。どちらか一方だけを入力します。
:::
