---
id: save-mail-attachments
title: "メールの添付ファイルを保存する"
sidebar_label: "メールの添付ファイルを保存する"
sidebar_position: 10
description: "メール添付ファイルの保存アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# メールの添付ファイルを保存する

RCA.Activities.Mail.SaveMailAttachments

## **説明**

メールの添付ファイルをフォルダーに保存します。どの取得アクティビティ (Outlook、IMAP、POP3、Exchange) で取得したメールにも使用できます。フォルダーが存在しない場合は akaBot が作成します。同じ名前のファイルは上書きされます。

![image-20220505163054-1.png](/static/img/d2b96c_image-20220505163054-1.png)

（\*必須）

## **プロパティ**

**入力**

* **フォルダー パス (文字列)** - 添付ファイルの保存先フォルダー。空の場合はプロジェクト フォルダーが使用されます。
* **メッセージ (MailMessage)**\* - 添付ファイルを保存するメール。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Save Mail Attachments

**オプション**

* **フィルター (文字列)** - 正規表現。ファイル パスが一致する添付ファイルだけが保存されます。大文字と小文字は区別されます。区別しない場合は先頭に `(?i)` を付けます。空の場合はすべての添付ファイルが保存されます。
  例: "(?i)\.pdf$"

**出力**

* **添付ファイル (`IEnumerable<String>`)** - 保存されたファイルのフル パス。

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。このアクティビティは Exchange Server から取得したメールにも使用できます。

* [Get Exchange Mail Messages](../../../exchange/latest/activities/get-exchange-email-messages.md) - Exchange メールボックスからメールを取得します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
