---
id: smtp-configuration
title: "設定ガイド: SMTP (メールの送信)"
sidebar_label: "SMTP の設定"
sidebar_position: 3
description: "SMTP でメールを送信するために必要な情報を集め、akaBot Studio の Send SMTP Mail Message アクティビティに入力する方法。"
displayed_sidebar: activitiesSidebar
---
# 設定ガイド: SMTP (メールの送信)

Agent が Gmail、Yahoo メール、社内メール サーバーなどを通じてメールを**送信**する場合は、**Send SMTP Mail Message** を使用します。

このガイドでは、アクティビティに必要な**情報の集め方**と**どこに入力するか**を説明します。メール サーバーをインストールしたり設定したりする必要はありません。

:::tip Exchange Server を使用していますか？
社内の **Exchange Server** にあるメールボックスから送信する場合は、[Send Exchange Mail](../../../exchange/latest/activities/send-exchange-mail.md) も使用できます（akaBot Studio では **Mail** > **Exchange**）。[Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) を参照してください。
:::

---

## 1. 必要な情報

| 情報 | 入手先 | 例 |
|---|---|---|
| **サーバー** | セクション 3 の表、または社内の IT 担当者 | `"smtp.gmail.com"` |
| **ポート** | セクション 3 の表、または社内の IT 担当者 | `587` |
| **メール** | 送信元のアドレス | `"bot.notifications@gmail.com"` |
| **パスワード** | **アプリ パスワード**。プロバイダーが許可している場合はアカウントのパスワード。ログイン不要の社内リレーの場合は空 | 16 文字、スペースなし |
| **宛先** | メールを受け取る人 | `"user1@company.com;user2@company.com"` |

---

## 2. 情報を入手する

### Gmail / Yahoo メール

[IMAP 設定ガイド](imap-configuration.md) の手順で **アプリ パスワード** を作成し、**パスワード** に使用します。送信だけなら IMAP を有効にする必要はありません。

### Microsoft 365

通常のパスワードでの送信は、管理者がメールボックスの **SMTP 認証 (Authenticated SMTP)** を有効にしている場合のみ可能です。また Microsoft は 2026 年後半からこの機能を無効にします。代わりに [Office 365 パッケージの Send Mail](../../../office365/latest/activities/outlook/send-mail.md) を使用してください。

### 社内メール リレー (ログインなし)

多くの企業には、許可されたコンピューターからパスワードなしでメールを受け付ける社内メール サーバー (「リレー」) があります。IT 担当者に次のように依頼してください。

> Agent マシン `<コンピューター名または IP アドレス>` 用の SMTP リレー サーバー名とポートを教えてください。また、ログインなしで送信できることを確認してください。送信元アドレスは `<アドレス>` です。

---

## 3. サーバーとポートの一覧

| プロバイダー | サーバー | ポート | 安全な接続 | ログイン |
|---|---|---|---|---|
| **Gmail** | `smtp.gmail.com` | `587` | `StartTls` (または `Auto`) | 必要 – アプリ パスワード |
| **Gmail (別の方法)** | `smtp.gmail.com` | `465` | `SslOnConnect` | 必要 – アプリ パスワード |
| **Yahoo メール** | `smtp.mail.yahoo.com` | `465` | `SslOnConnect` | 必要 – アプリ パスワード |
| **社内リレー** | IT 担当者に確認 | 通常 `25` | `None` または `Auto` | 通常は不要 |

---

## 4. akaBot Studio に入力する

### Send SMTP Mail Message ([`RCA.Activities.Mail.SendMail`](../activities/send-smtp-mail-message.md))

1. **アクティビティ** パネルで **Mail** > **SMTP** を開き、**Send SMTP Mail Message** をワークフローにドラッグします。
2. **プロパティ** パネルで次のように入力します。

| カテゴリ | プロパティ | 値 |
|---|---|---|
| Host | **Server** | `"smtp.gmail.com"` |
| Host | **Port** | `587` |
| Logon | **Email** | `"bot.notifications@gmail.com"` |
| Logon | **Password** | アプリ パスワード |
| Receiver | **To** (必須) | `"manager@company.com;finance@company.com"` – 複数のアドレスは `;` で区切ります |
| Receiver | **Cc** / **Bcc** | 任意。**To** と同じ形式 |
| Mail | **Subject** | `"Daily Report - " + DateTime.Now.ToString("dd/MM/yyyy")` |
| Mail | **Body** | `"All items have been processed."` |
| Options | **Is Body Html** | **Body** に HTML (例: `"<h2>Done</h2>"`) を含む場合のみ選択します |
| Options | **Secure Connection** | ポート 587 は `StartTls` または `Auto`、ポート 465 は `SslOnConnect` |
| Attachments | **Attachments** | `...` をクリックしてファイル パス (例: `"C:\Reports\Summary.xlsx"`) を追加します |

![Send SMTP Mail Message – 設定例](/static/img/smtp-relay-properties.png)

*Gmail の場合の設定例。このスクリーンショットではパスワードを表示していません。**Password** にはアプリ パスワードを入力します。*

**ログイン不要の社内リレーの場合:** **Email** と **Password** を空にし、**Sender** > **From** に送信元アドレスを入力します。**From** も空の場合、メールは `noreply@anonymous.com` から送信されます。

:::tip
- **Password** の代わりに **SecurePassword** (型 `SecureString`) に入力することもできます。
- **Email** を入力していると、サーバーがログインを要求できる場合、Agent は常にログインを試みます。ログイン不要のリレーでは **Email** を空にしてください。
:::
