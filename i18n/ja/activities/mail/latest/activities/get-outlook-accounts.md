---
id: get-outlook-accounts
title: "Outlook アカウント情報を取得する"
sidebar_label: "Outlook アカウント情報を取得する"
sidebar_position: 2
description: "Outlook アカウント情報アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# Outlook アカウント情報を取得する

RCA.Activities.Mail.GetAccounts

## **説明**

このマシンの Outlook デスクトップ アプリに設定されているアカウントのメール アドレスを返します。

![image-20220505162330-1.png](/static/img/4595ad_image-20220505162330-1.png)

（\*必須）

## **プロパティ**

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Get Outlook Accounts

**出力**

* **Output Account Names (String[])** - Outlook に設定されているすべてのアカウントのメール アドレス。

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
