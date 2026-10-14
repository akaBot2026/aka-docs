---
id: scaleconnect
title: "ScaleConnect による文書の受信"
sidebar_label: "ScaleConnect"
sidebar_position: 2
description: "外部ソースを接続して、そのソースの文書を自動的に処理します。"
displayed_sidebar: akaXtractSidebar
---

# ScaleConnect による文書の受信

ScaleConnect は、外部の文書ソースを Pipeline に接続します。

**事前に必要なもの：** ScaleConnect を管理する権限、設定済みの ScaleConnect サービス、外部ソースのアカウント、Published の Pipeline。

## ソースを接続する

1. Pipeline で `ScaleConnect` を開き、`Connect Service` を選択します。
2. ポップアップを許可します。接続ウィンドウで、サービスを選択し、サインインして、アクセスを許可します。
3. ソースからサンプル文書を送信します。

**結果：** テーブルに `ACTIVE` と表示され、`ScaleConnect connection registered and subscribed.` というメッセージが表示されます。`Last Event` と `Status` を確認し、Pipeline で Document と Job を探します。

## 接続を解除する

接続の行の末尾にあるゴミ箱アイコンを選択し、`Disconnect` を選択します。取り込み済みの文書は削除されず、実行中の Job もキャンセルされません。

:::note
1 つの接続は、同じ会社内の 1 つの Pipeline にのみリンクできます。`PENDING` または `FAILED` は、接続の準備ができていないことを示します。ソース側の権限を確認し、テーブルで原因が分からない場合は、接続 ID を添えてサポートに連絡してください。接続を繰り返し作成しないでください。
:::
