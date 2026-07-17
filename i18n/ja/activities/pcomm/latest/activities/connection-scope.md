---
id: connection-scope
title: "Connection Scope"
sidebar_label: "Connection Scope"
sidebar_position: 1
description: "Connection Scope アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Connection Scope

RCA.Activities.PCOMM.ConnectionScope

## **説明**

**Connection Scope** アクティビティは、Personal Communications (PCOMM) との新しいセッション接続を確立する（または既存の接続にアタッチする）コンテナであり、このスコープ内で子アクティビティを実行します。

![connection-scope](/static/img/connection-scope.png)

（\*は必須）

## **アクティビティ本体内**

* **Do** - PCOMM 接続スコープ内で実行する一連のアクティビティ。

## **プロパティ**

**入力**

* **Connection Name (文字列)*** - 端末セッションの一意の文字識別子（A-Z）。この ID は、他のアクティビティがこの特定の接続をターゲットにするために使用されます。
* **Profile Path (文字列)** - Personal Communications ワークステーション プロファイル（`.ws` ファイル）へのフルパス。文字列変数と絶対パスの両方がサポートされています。
* **Window State (WINSTATE)** - エミュレーター ウィンドウの初期表示状態。
  * `RESTORE` - ウィンドウを元のサイズと位置に復元します。
  * `MAX` - ウィンドウを全画面に最大化します。
  * `MIN` - ウィンドウをタスクバーに最小化します。
  * `HIDE` - ウィンドウを完全に非表示にします（バックグラウンドでセッションを実行します）。

**オプション**

* **Close When Complete (ブール値)** - 選択した場合、スコープ内のすべての子アクティビティの実行が完了したとき、またはエラーが発生したときに、接続セッションを自動的に閉じます。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Connection Scope
