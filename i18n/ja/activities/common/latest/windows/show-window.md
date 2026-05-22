---
id: show-window
title: "ショーウィンドウ"
sidebar_label: "ショーウィンドウ"
sidebar_position: 10
description: "ウィンドウアクティビティのドキュメントを表示します。"
displayed_sidebar: activitiesSidebar
---
# ショーウィンドウ

RCA.Activities.Common.ShowWindow

## **説明**

Show Window アクティビティを使用すると、指定したウィンドウを前面に表示できます。

![image-20230417163559-1.png](/static/img/image-20230417163559-1.png)

\* は必須フィールドを示します。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)**: True または False の 2 つの値を持つブール変数。
True: アクティビティ内でエラーが発生した場合でも、プロセスの残りの部分が実行を継続できるようにします。
False: エラーが発生した場合、プロセスの実行継続を停止します。

**入力**

* **Window (WindowApp)**\*: ターゲット ウィンドウを識別するために使用される WindowApp インスタンス。

**その他**

* **パブリック (チェックボックス)**: 選択すると、アクティビティ データが記録されます。このプロパティを使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)**: このアクティビティの名前。これを編集して、ワークフローをより適切に整理および構造化できます。
例:`[3424325] Show Window`