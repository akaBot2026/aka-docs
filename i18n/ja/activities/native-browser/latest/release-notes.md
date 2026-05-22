---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "リリース ノートのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## **RCA.Activities.NativeBrowser バージョン 4.1.0.1**

### **バグ修正**

* [修正] [ExtractStructuredData] DelayBefore なしで BrowserNotSetException をスローする
* [修正] [ExtractStructuredData] ブラウザが開いているかどうかを確認していないため、抽出ウィザードの「列の追加」時に拡張機能が接続されない
* [修正] (NativeBrowser の一般的なエラー) DelayAfter が出力に誤って保存される
* [修正] (NativeBrowser の一般的なエラー) TimeoutMS &lt;= 0 を入力すると、TimeoutMS が 30 秒に設定されない
* [修正] [NavigateTo] TimeoutMS の設定が短すぎる場合に成功に移動する
* [修正] セレクターが無効な場合、[AttachBrowser] TimeoutM が正しく動作しない
* [修正] [InjectJS] 1 つのブラウザで InjectJS を複数回実行する