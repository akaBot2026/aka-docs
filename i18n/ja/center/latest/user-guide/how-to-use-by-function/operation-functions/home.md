---
id: home
title: "ホーム"
sidebar_label: "ホーム"
sidebar_position: 1
description: "ホーム（ダッシュボード）に関するドキュメント。"
displayed_sidebar: centerSidebar
---
## ホーム

![image-20221027173807-2.png](/static/img/18ffb1_image-20221027173807-2.png)

akaBotのホームページはダッシュボードで、単一の組織ユニットに関する統計チャートを表示します。以下のような情報が確認できます：

- エージェント数（Available、Busy、Disconnected、Nonresponse）
- タスク数（Successful、Running、Stopped、Faulted）
- スケジュール（時間/日/週/月ベースで計算）
- パッケージ（Active、Inactive）
- タスク統計（Daily、Weekly、Monthly、Yearly表示）
- 今後のタスク
- 最近のタスク

![image-20221028092757-2.png](/static/img/ca0f55_image-20221028092757-2.png)

エージェントグループやエージェント名でデータをフィルタできます。

| No | カラム/ラベル | 説明 | タイプ | 最大長 | 入力要件 |
| --- | --- | --- | --- | --- | --- |
| 1 | **Select Agent Group** | 統計を表示したいエージェントグループを選択 | 検索入力 | 制限なし | |
| 2 | **Select Agent** | 統計を表示したいエージェントを選択 | 検索入力 | 制限なし | |

タスク統計はDaily、Weekly、Monthly、Yearlyのタブを選択して表示できます。

![image-20221028092657-1.png](/static/img/04cd91_image-20221028092657-1.png)

| No | カラム/ラベル | 説明 | タイプ | 最大長 | 必須 | 入力要件 |
| --- | --- | --- | --- | --- | --- | --- |
|  | Daily / Weekly / Monthly / Yearly | 表示する統計の種類を選択 | タブ |  | はい | |
|  | Choose Day | 表示する日を選択（Daily選択時） | 日時 |  | はい | Daily選択時のみ有効 |
|  | Choose Week | 表示する週を選択（Weekly選択時） | 日時 |  | はい | Weekly選択時のみ有効 |
|  | Choose Month | 表示する月を選択（Monthly選択時） | 日時 |  | はい | Monthly選択時のみ有効 |
|  | Choose Year | 表示する年を選択（Yearly選択時） | 日時 |  | はい | Yearly選択時のみ有効 |
