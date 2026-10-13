---
id: common-mail-utilities
title: "設定ガイド: メールと添付ファイルの保存"
sidebar_label: "メールと添付ファイルの保存"
sidebar_position: 5
description: "Save Mail と Save Mail Attachments アクティビティで、メールを .eml ファイルとして保存し、添付ファイルをフォルダーに保存する方法。"
displayed_sidebar: activitiesSidebar
---
# 設定ガイド: メールと添付ファイルの保存

Agent がメールを読み取った後、次のことができます。

- **Save Mail** で各メールを `.eml` ファイルとして保存する
- **Save Mail Attachments** で添付ファイルをフォルダーに保存する

どちらのアクティビティも、**Get Outlook Mail Messages**、**Get IMAP Mail Messages**、**Get POP3 Mail Messages**、**Get Exchange Mail Messages** で取得したメールに使用できます。

:::tip Exchange Server を使用していますか？
社内の **Exchange Server** からメールを読み取る場合は、まず [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) で **Get Exchange Mail Messages** を設定してから、このガイドを続けてください。
:::

---

## 1. 必要な情報

| 情報 | 入手先 | 例 |
|---|---|---|
| **メール** | 取得アクティビティの **Messages** 出力 | `mailList` |
| **File Path** (Save Mail) | `.eml` で終わるフル パス。フォルダーはあらかじめ存在している必要があります | `"C:\Mails\invoice.eml"` |
| **Folder Path** (Save Mail Attachments) | 添付ファイルの保存先フォルダー。存在しない場合は作成されます | `"C:\Mails\Attachments"` |
| **Filter** (任意) | 保存するファイル名のパターン (ステップ 2.4 参照) | `"(?i)\.pdf$"` |

---

## 2. ワークフローを作成する

### ステップ 2.1: メールを読み取る

1. 任意の取得アクティビティ (例: **Get Outlook Mail Messages**) を追加します。
2. その **Messages** 出力のボックスをクリックし、**Ctrl+K** を押して `mailList` と入力します。**変数** パネルで、型が `List<MailMessage>` で、スコープが **For Each** ループも含む Sequence であることを確認します。

---

### ステップ 2.2: メールを 1 通ずつ処理する

1. 取得アクティビティの下に **For Each** アクティビティをドラッグします。
2. **Foreach** に `item`、**in** に `mailList` を設定します。
3. **プロパティ** パネルで **TypeArgument** を `System.Net.Mail.MailMessage` に設定します。一覧にない場合は **型の参照...** をクリックし、`MailMessage` を検索します。

---

### ステップ 2.3: Save Mail

*このアクティビティのすべての設定: [Save Mail](../activities/save-mail.md)*

1. **Save Mail** を For Each ループの **Body** にドラッグします。
2. 次のように入力します。
   - **Mail Message**: `item`
   - **File Path** (必須): フル パスとファイル名。例:

     ```vb
     "C:\ArchivedEmails\mail_" + DateTime.Now.ToString("yyyyMMdd_HHmmssfff") + ".eml"
     ```

:::caution
- フォルダー (例では `C:\ArchivedEmails`) は**あらかじめ存在している**必要があります。存在しない場合、アクティビティは失敗します。必要に応じて、ループの前にフォルダーを作成するアクティビティを追加するか、手動で作成してください。
- 同じ名前のファイルは上書きされます。
- ファイル名にメールの件名を使う場合、`\ / : * ? " < > |` などの文字が含まれるとアクティビティが失敗します。上の例では件名の代わりに日時を使用しています。
:::

---

### ステップ 2.4: Save Mail Attachments

*このアクティビティのすべての設定: [Save Mail Attachments](../activities/save-mail-attachments.md)*

1. **Save Mail Attachments** を For Each ループの **Body** にドラッグします。
2. 次のように入力します。
   - **Message** (必須): `item`
   - **Folder Path**: 例 `"C:\ArchivedEmails\Attachments"`。フォルダーが存在しない場合は作成されます。空の場合、ファイルはプロジェクト フォルダーに保存されます。同じ名前のファイルは上書きされます。
   - **Filter** (任意): 特定のファイルだけを保存します。空の場合はすべての添付ファイルを保存します。
     - PDF ファイルのみ: `"(?i)\.pdf$"`
     - PDF と Excel ファイル: `"(?i)\.(pdf|xlsx|xls)$"`

     *(`(?i)` を付けると大文字と小文字を区別しないため、`INVOICE.PDF` も一致します。)*
   - **Attachments** (出力、任意): 保存されたファイルのパスを受け取る `IEnumerable<String>` 型の変数。

---

### 完成したワークフロー

![ワークフロー – Get Outlook Mail Messages、および Save Mail と Save Mail Attachments を含む For Each](/static/img/workflow-save-mail-attachments.png)

*ワークフローの例: メールを `mailList` に取得し、フォルダーを作成してから、各 `item` について、メールを `.eml` ファイルとして保存し、添付ファイルを保存します。*
