---
id: introduction
title: "はじめに"
sidebar_label: "はじめに"
sidebar_position: 1
description: "メールアクティビティパッケージの概要"
displayed_sidebar: activitiesSidebar
---
# はじめに

メール アクティビティ パッケージを使用すると、Agent はメールの読み取り、送信、移動、保存、削除を行えます。

## どのアクティビティを使えばよいですか？

| メールボックス | 使用するもの | 設定ガイド |
|---|---|---|
| Agent マシンに **Outlook デスクトップ アプリ** がインストールされ、サインインしている | **Outlook** アクティビティ | [Outlook デスクトップの設定](user-guide/desktop-outlook-configuration.md) |
| **Gmail**、**Yahoo メール**、社内メール サーバー – メールの読み取り | **IMAP** アクティビティ (または **POP3**) | [IMAP の設定](user-guide/imap-configuration.md)、[POP3 の設定](user-guide/pop3-configuration.md) |
| **Gmail**、**Yahoo メール**、社内メール サーバー – メールの送信 | **Send SMTP Mail Message** | [SMTP の設定](user-guide/smtp-configuration.md) |
| 社内の **Exchange Server** | **Exchange** アクティビティ | [Exchange (EWS) の設定](../../exchange/latest/user-guide/exchange-ews-configuration.md) |
| デスクトップ アプリを使わない **Microsoft 365 / Outlook.com** | **Office 365** パッケージ | [Office 365 への接続](../../office365/latest/azure-app-registration.md) |

読み取ったメールや添付ファイルをディスクに保存するには、[メールと添付ファイルの保存](user-guide/common-mail-utilities.md) を参照してください。これらのアクティビティは、どの取得アクティビティで取得したメールにも使用できます。

**注意:** **Outlook** アクティビティには **Outlook クラシック** が必要です。**新しい Outlook for Windows** アプリは、アクティビティが使用する自動化インターフェイス (COM) に対応していないため使用できません。実行する前に、Agent マシンで Outlook がインストールされ、サインインし、既定のプロファイルが設定されていることを確認してください。

## Exchange アクティビティ

akaBot Studio では、Exchange アクティビティは **Mail** > **Exchange** にあります。ドキュメントは [Exchange パッケージ](../../exchange/latest/introduction.md) にあります。

* [Exchange Scope](../../exchange/latest/activities/exchange-scope.md)
* [Send Exchange Mail](../../exchange/latest/activities/send-exchange-mail.md)
* [Get Exchange Mail Messages](../../exchange/latest/activities/get-exchange-email-messages.md)
* [Move Message To Another Folder](../../exchange/latest/activities/move-message-to-another-folder.md)
* [Delete Exchange Mail Message](../../exchange/latest/activities/delete-exchange-mail-message.md)
