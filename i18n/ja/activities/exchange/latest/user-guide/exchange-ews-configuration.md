---
id: exchange-ews-configuration
title: "設定ガイド: Microsoft Exchange (EWS)"
sidebar_label: "Exchange (EWS) の設定"
sidebar_position: 1
description: "Exchange Web Services (EWS) の接続情報を集め、akaBot Studio の Exchange アクティビティに入力する方法。"
displayed_sidebar: activitiesSidebar
---
# 設定ガイド: Microsoft Exchange (EWS)

会社が**独自の Exchange Server** (オンプレミス) を運用している場合は、Exchange アクティビティを使用します。このガイドでは、**接続情報の集め方**と**どこに入力するか**を説明します。Exchange サーバーを設定する必要はありません。

:::note
**Microsoft 365 / Exchange Online** のメールボックスの場合は、代わりに [Office 365 パッケージ](../../../office365/latest/introduction.md) を使用してください。
:::

---

## 1. 必要な情報

| 情報 | 入手先 | 例 |
|---|---|---|
| **サーバー** (EWS アドレス) | ステップ 2.1、または社内の IT 担当者 | `"https://mail.company.com/EWS/Exchange.asmx"` |
| **電子メールの自動検出** (サーバーの代わり) | メールボックスのアドレス | `"user@company.com"` |
| **ユーザー** | ステップ 2.2 | `"botuser"` |
| **パスワード** | Windows (ドメイン) のパスワード | – |
| **ドメイン** | ステップ 2.2 | `"MYDOMAIN"` |

**サーバー** と **電子メールの自動検出** は、**どちらか一方**だけを入力します。

---

## 2. 情報を入手する

### ステップ 2.1: Outlook で EWS アドレスを確認する

いずれかの Windows コンピューターで Outlook が Exchange メールボックスに接続されている場合:

1. **Ctrl** キーを押しながら、システム トレイの **Outlook アイコン** を右クリックします (非表示の場合は `^` をクリック)。**電子メールの自動構成のテスト** を選択します。
2. **電子メール アドレス** と **パスワード** を入力します。**Guessmart を使用する** と **セキュリティで保護された Guessmart 認証** の選択を外し、**自動検出を使用する** を選択したまま **テスト** をクリックします。
3. **結果** タブで **可用性サービスの URL** を探し、`/EWS/Exchange.asmx` で終わるアドレスをコピーします。これが **サーバー** に入力する値です。

うまくいかない場合は、IT 担当者に次のように依頼してください。

> メールボックス `<アドレス>` の EWS URL (`/EWS/Exchange.asmx` で終わるもの) を教えてください。

---

### ステップ 2.2: ドメインとユーザー名を確認する

1. **Windows + R** を押し、`cmd` と入力して **Enter** を押します。
2. `whoami` と入力して **Enter** を押します。結果は `MYDOMAIN\botuser` のように表示されます。
   - `\` の前の部分が **ドメイン** (`MYDOMAIN`) です。
   - `\` の後の部分が **ユーザー** (`botuser`) です。

---

## 3. akaBot Studio に入力する

Exchange アクティビティはすべて、**アクティビティ** パネルの **Mail** > **Exchange** にあります。

### ステップ 3.1: Exchange Scope

*このアクティビティのすべての設定: [Exchange Scope](../activities/exchange-scope.md)*

Exchange スコープはメールボックスに**一度だけ**接続します。スコープ内に配置したすべての Exchange アクティビティがその接続を使用します。

1. **Exchange Scope** をワークフローにドラッグします。
2. **プロパティ** パネルで次のように入力します。
   - **New Connection** – **どちらか一方**を選びます。
     - **方法 A (推奨)**: **Server** に入力します (例: `"https://mail.company.com/EWS/Exchange.asmx"`)。**Email Auto discover** は空にします。
     - **方法 B**: **Email Auto discover** に入力します (例: `"user@company.com"`)。**Server** は空にします。
   - **Logon**:
     - **User**: `"botuser"`
     - **Password**: パスワード
     - **Domain**: `"MYDOMAIN"` (`user@company.com` のような完全なアドレスでログインする場合は空)

---

### ステップ 3.2: スコープ内にアクティビティを追加する

次のアクティビティを **Exchange Scope** の **Do** 領域に配置します。各アクティビティの **Connection** と **Logon** プロパティは**空**のままにします。スコープの接続が使用されます。

#### A. Get Exchange Mail Messages

*このアクティビティのすべての設定: [Get Exchange Mail Messages](../activities/get-exchange-email-messages.md)*

- **Mail Folder**: `"Inbox"` (既定)
- **Top**: `30` (既定)
- **Only Unread Messages**: 既定で選択
- **Messages**: `exchangeMails` (型 `List<MailMessage>`)。変数はボックスをクリックして **Ctrl+K** を押して作成します。**変数** パネルで、スコープが **For Each** ループも含む Sequence であることを確認します。

#### B. Send Exchange Mail

*このアクティビティのすべての設定: [Send Exchange Mail](../activities/send-exchange-mail.md)*

- **To** (必須): `"client@example.com"`
- **Subject**: `"Invoice Notification"`
- **Body**: `"Please find the invoice attached."`

#### C. Move Message To Another Folder

*このアクティビティのすべての設定: [Move Message To Another Folder](../activities/move-message-to-another-folder.md)*

- **Mail Message**: 1 通のメール (例: `exchangeMails` を対象とする **For Each** ループの現在の項目)
- **Mail Folder**: 移動先フォルダー (例: `"Processed"`)

#### D. Delete Exchange Mail Message

*このアクティビティのすべての設定: [Delete Exchange Mail Message](../activities/delete-exchange-mail-message.md)*

- **Mail Message**: 削除する 1 通のメール
- **Delete Mode**:
  - `MoveToDeletedItems` (既定): メールを「削除済みアイテム」に移動します。
  - `SoftDelete`: メールをすべてのフォルダーから削除します。一定期間は IT 管理者が復元できます。
  - `HardDelete`: メールを完全に削除します。

> **Mail Message のヒント**
>
> - `item` など、既存の変数名を入力します。同じ名前の変数を新しく作成すると、Studio に「*A variable with the same name already exists in the specified scope*」と表示されます。
> - リスト全体ではなく、1 通のメール (ループの現在の項目) を指定します。
> - 同じメールに対しては **Move** と **Delete** のどちらか一方を使用します。メールを移動した後に、元の変数で削除しようとすると失敗します。

![Exchange ワークフロー – Get Exchange Mail Messages と Move Message To Another Folder を含む Exchange Scope](/static/img/workflow-mail-exchange.png)

*ワークフローの例: **Exchange Scope** 内でメールを `exchangeMails` に取得し、各 `item` を **Processed** に移動します。スコープ内のアクティビティの **Connection** と **Logon** は空のままです。*
