---
id: is-match
title: "一致します"
sidebar_label: "一致します"
sidebar_position: 1
description: "マッチアクティビティのドキュメントです。"
displayed_sidebar: activitiesSidebar
---
# 一致します

RCA.Activities.Core.IsMatch

## **説明**

このアクティビティを使用すると、指定された入力文字列に一致する式を検索できます。

![image-20220505094842-1.jpeg](/static/img/c569b8_image-20220505094842-1.jpeg)

（\*必須）

## **プロパティ**

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: [263326468] は一致します
* **入力 (文字列)**\*- 一致する文字列を検索します。
例: 「これはフレーズです」
* **パターン (文字列)**\*- 一致するものを検索する式のパターン。正規表現パターンの例: https://learn.microsoft.com/en-us/dotnet/standard/base-types/正規表現-言語クイックリファレンス
例: 「\d{2}-\d{2}-\d{4}」
* **正規表現オプション (ドロップダウン ボックス)**- 照合用の列挙のビットごとの組み合わせを追加する場合は、これをオンにします。オプションの詳細については、https://docs.microsoft.com/en-us/dotnet/standard/base-types/normal-expression-options をご覧ください。
* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。

**出力**

* **結果 (ブール値)** - 式が一致した場合の結果。 True または False のみを返します。
