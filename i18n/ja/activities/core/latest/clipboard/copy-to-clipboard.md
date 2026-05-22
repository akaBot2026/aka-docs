---
id: copy-to-clipboard
title: "クリップボードにコピー"
sidebar_label: "クリップボードにコピー"
sidebar_position: 2
description: "クリップボードにコピーするアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# クリップボードにコピー

RCA.Activities.Core.SetToClipboard

## **説明**

このアクティビティを使用すると、データをクリップボードにコピーし、他の用途のために保存できます。

![image-setoclipboard.png](/static/img/image-setoclipboard.png)

（\*必須）

## **プロパティ**

**入力**

* **Text (InArgument&lt;String&gt;)** - クリップボードにコピーされるテキスト
* **テキスト形式 (TextDataFormat)** - コピーするテキストの形式。サポートされる形式は次のとおりです: Text、UnicodeText、Rtf、Html、CommaSepreatedValue、Xaml

**その他**

* **公開 (チェックボックス)** - アクティビティを公開するかどうかをチェックします。このプロパティを使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: [3424325] クリップボードにコピー
