---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "リリース ノートのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## **RCA.Activities.Excel バージョン 2.1.1.0**

### **バグ修正**

* 【ExcelApplicationScope】Excelファイルにパスワード保護シートが設定されている場合のメッセージを編集します。
* [ExportChart] ファイル Excel のチャート名が同じである場合、エクスポート チャートが表示されません。
* 【ExcelApplicationScope】テキストボックス[デザイナー]にて、200文字を超える文字を入力した場合に長さを変更します。
* [ExcelApplicationScope] ループがバックグラウンドで Excel ファイルを開きます。ワークフローが停止しているにもかかわらず。
* [ExcelApplicationScope] WorkBook パスが存在する場合、メッセージを表示しません。形式が間違っています。
* [ExcelApplicationScope] 編集パスワードの誤ったデータを入力した場合にメッセージを表示しません。
* [ExcelCopyPasteRange] ユーザーが[項目のコピー]で値を選択しなかった場合のメッセージを変更しました。
* 【ExcelCopySheet】宛先ファイルパスを入力すると画面がハングする アクセス許可がありません。
* [ExcelSetBorder] プロパティ Range = none を設定した場合の誤った動作。
* 【ExcelReadCell】 [形式を保持する]にチェックがあり、[セル]が固定アドレスの場合、データは保持されません。
