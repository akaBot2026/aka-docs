---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "リリース ノートのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## **RCA.Activities.FTP バージョン 2.1.0.3**

### **バグ修正**

* [修正] [UploadFiles] ISS と Wing の両方で、名前にドット (.) が含まれるフォルダーにファイル/フォルダーをアップロードできない
* [修正] [UploadFiles] 日本語のフォルダー名をアップロードするときに「MKD に失敗しました...」というメッセージが表示される
* [修正] [DownloadFiles] ダウンロード ファイルが [ローカル パス] に既に存在する場合の誤ったメッセージ
* [修正] [DownloadFiles] [リモート パス] がルート ディレクトリの場合、ファイルのダウンロード エラーが発生する
* [修正] [UploadFiles] IIS 経由でフォルダーをアップロードできない
* [修正] [WithFTPSession] プロパティ「SSL プロトコル」でオプションを選択するとエラーが表示される
