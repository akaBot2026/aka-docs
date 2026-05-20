---
id: maximize-window
title: "ウィンドウを最大化する"
sidebar_label: "ウィンドウを最大化する"
sidebar_position: 5
description: "ウィンドウアクティビティのドキュメントを最大化します。"
displayed_sidebar: activitiesSidebar
---
# ウィンドウを最大化する

RCA.Activities.Common.MaximizeWindow

## **説明**

ウィンドウの最大化アクティビティを使用すると、ウィンドウを選択して最大化できます。

![image-20220505134246-1.png](/static/img/image-20220505134246-1.png)

\* は必須フィールドを示します。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)**: True または False の 2 つの値を持つブール変数。
True: アクティビティ内でエラーが発生した場合でも、プロセスの残りの部分が実行を継続できるようにします。
False: エラーが発生した場合、プロセスの実行継続を停止します。

**入力**

* **Window**: WindowApp 変数を入力として使用します。

**その他**

* **パブリック (チェックボックス)**: 選択すると、アクティビティ データが記録されます。このプロパティを使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)**: このアクティビティの名前。これを編集して、ワークフローをより適切に整理および構造化できます。
例:`[3424325] Maximize Window`