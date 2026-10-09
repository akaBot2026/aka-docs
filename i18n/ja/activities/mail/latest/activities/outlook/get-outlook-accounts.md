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

このアクティビティは、現在マシンにログインしている Outlook アカウントのリストを返します。

![image-20220505162330-1.png](/static/img/4595ad_image-20220505162330-1.png)

\* は必須フィールドを示します。

## **プロパティ**

**その他**

* **パブリック (チェックボックス)**: 選択すると、アクティビティ データが記録されます。このプロパティを使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)**: このアクティビティの名前。これを編集して、ワークフローをより適切に整理および構造化できます。
**例**: Outlook アカウント情報を取得する

**出力**

* **アカウント名 (文字列)**: Outlook アカウントを表す文字列の配列。
