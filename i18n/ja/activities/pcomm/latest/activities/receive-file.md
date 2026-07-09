---
id: receive-file
title: "Receive File"
sidebar_label: "Receive File"
sidebar_position: 11
description: "Receive File アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Receive File

RCA.Activities.PCOMM.ReceiveFile

## **説明**

ホストエミュレーターシステムからファイルをダウンロードし、個人のコンピューターのローカルディレクトリに転送します。

（\*は必須）

## **プロパティ**

**入力**

* **Download Location (文字列)** - ファイルが保存されるローカルのディレクトリまたはファイルパス。
* **Host (文字列)** - ホストシステム上に存在するファイルのパスまたはファイル名。
* **Options (文字列)** - ファイル転送コマンド用の追加のパラメーターまたは引数。
* **Reset Screen (ブール値)** - 選択した場合、転送を実行する前にエミュレーター画面をクリアまたはリセットします。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Receive File
