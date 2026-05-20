---
id: matches
title: "一致"
sidebar_label: "一致"
sidebar_position: 2
description: "アクティビティのドキュメントと一致します。"
displayed_sidebar: activitiesSidebar
---
# 一致

RCA.Activities.Core.Matches

## **説明**

このアクティビティでは文字列を検索でき、成功した一致が返されます。

![image-20220505095119-2.jpeg](/static/img/4d7b6f_image-20220505095119-2.jpeg)

（\*必須）

## **プロパティ**

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: [997394815] 一致
* **入力 (文字列)**\* - 一致を検索する文字列。
例: 「これはフレーズです」
* **パターン (文字列)**\*- 一致するものを検索する式のパターン。正規表現パターンの例: https://learn.microsoft.com/en-us/dotnet/standard/base-types/正規表現-言語クイックリファレンス
例: 「\d{2}-\d{2}-\d{4}」
* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **正規表現オプション (ドロップダウン ボックス)**- 照合用の列挙のビットごとの組み合わせを追加する場合は、これをオンにします。オプションの詳細については、https://docs.microsoft.com/en-us/dotnet/standard/base-types/normal-expression-options をご覧ください。

**出力**

* **結果 (MatchCollection)** - 検索パターンに一致するすべてが MatchCollection に保存されます。 For Each アクティビティ、引数の型 System.Text. RegularExpressions.Match を使用して各ファイルをループし、すべての一致を処理します。
