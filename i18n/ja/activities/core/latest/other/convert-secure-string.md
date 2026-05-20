---
id: convert-secure-string
title: "安全な文字列を変換する"
sidebar_label: "安全な文字列を変換する"
sidebar_position: 4
description: "Secure String の変換アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 安全な文字列を変換する

RCA.Activities.Core.ConvertSecureString

## **説明**

このアクティビティを使用すると、SecureString を String に変換できます。

![image-20220505103002-1.jpeg](/static/img/image-20220505103002-1.jpeg)

\* は必須フィールドを示します。

## **プロパティ**

**入力**

* **SecureString (SecureString)**\*: 変換される SecureString を含む変数。

**その他**

* **表示名 (文字列)**: このアクティビティの名前。これを編集して、ワークフローをより適切に整理および構造化できます。
例:`Secure String to Text`
* **パブリック (チェックボックス)**: 選択すると、アクティビティ データが記録されます。このプロパティを使用する前に、データのセキュリティを考慮してください。

**出力**

* **結果 (文字列)**\*: 変換後の SecureString の文字列値。