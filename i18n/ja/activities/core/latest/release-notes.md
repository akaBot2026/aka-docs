---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "リリース ノートのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## **RCA.Activities.Core v2.2.0.1**

**バグ修正**

* continue on error が true であるにもかかわらず CopyDirectory アクティビティで例外が表示される場合にエラー メッセージを表示する
* [Selectfile] ファイルを選択できますが、選択するとメッセージ エラーが表示されます。
* [ImageClick] [Confident] がナビゲート番号であると入力すると、間違ったエラー メッセージが表示される
* [ReadTextFile] エンコードの動作が正しくありません

**機能が追加されました**

* RCA.Activities.Core.GetFiles の条件フィルターに変更日プロパティを追加しました

## **RCA.Activities.Core v2.3.0**

**機能が追加されました**

* タスクの開始、タスクの停止、タスクの取得アクティビティ
* アクティビティの繰り返し回数
* 選択、分岐アクティビティの選択
