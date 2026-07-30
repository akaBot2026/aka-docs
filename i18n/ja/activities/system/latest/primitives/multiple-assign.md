---
id: multiple-assign
title: "複数代入"
sidebar_label: "複数代入"
sidebar_position: 5
description: "Multiple Assign アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 複数代入

RCA.Activities.Core.MultipleAssign

## **説明**

Multiple Assign アクティビティを使用すると、複数の Assign アクティビティを使わずに、1 つのアクティビティで複数の変数または引数に値を割り当てることができます。大規模なプロセスの前に変数を初期化する一般的なユース ケースがあります。

![image-multiple-assign.png](/static/img/image-multiple-assign.png)

（\*必須）

## **アクティビティ本体内**

* **To (OutArgument)\*** - 値を割り当てる変数または引数。
* **Value (InArgument)\*** - 変数または引数に割り当てる値。
* **Add** - 新しい To / Value ペアを追加し、一度に複数の値を割り当てることができます。
* **Remove (X)** - 現在の To / Value ペアを削除します。
* **Move** - ドラッグ アンド ドロップで To / Value ペアの順序を変更します。

## **プロパティ**

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
* **公開 (チェックボックス)** - 公開する場合はチェックします。使用する前にデータ セキュリティ要件を必ず考慮してください。デフォルトは未チェックです。
