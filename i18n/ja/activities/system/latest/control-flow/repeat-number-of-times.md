---
id: repeat-number-of-times
title: "指定回数の繰り返し"
sidebar_label: "指定回数の繰り返し"
sidebar_position: 9
description: "Repeat Number Of Times アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 指定回数の繰り返し

RCA.Activities.Core.RepeatNumberOfTimes

## **説明**

Repeat Number Of Times アクティビティは、一連のアクティビティを指定した回数繰り返します。繰り返すアクティビティは、このアクティビティの Body 内に追加します。現在の反復インデックスは、index 変数（デフォルト名: `CurrentItem`）で参照できます。

![image-repeat-number-of-times.png](/static/img/image-repeat-number-of-times.png)

（\*必須）

## **アクティビティ本体内**

* **For each (String)** - 現在の反復を参照するために使用するインデックス変数の名前。デフォルトは `CurrentItem` です。
* **Repeat number of times (Int32)\*** - Body 内のアクティビティを繰り返す回数。
* **Body** - 各反復で実行するアクティビティを追加するコンテナー。

## **プロパティ**

**入力**

* **Number Of Times (Int32)\*** - このアクティビティ内に追加したアクティビティを繰り返す回数。0 以上である必要があります。値が 0 の場合、Body は実行されません。  
  例: 5
* **Start At (Int32)\*** - インデックス変数（`CurrentItem`）の開始値。デフォルトは 1 です。0、1、またはその他の整数に設定できます。  
  例: 1

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
* **公開 (チェックボックス)** - 公開する場合はチェックします。使用する前にデータ セキュリティ要件を必ず考慮してください。デフォルトは未チェックです。
