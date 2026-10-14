---
id: quota-and-retention
title: "クォータとデータ保持"
sidebar_label: "クォータと保持"
sidebar_position: 2
description: "クォータを監視し、AkaXtract がデータを保持する期間を設定して、Document、Job、Pipeline を削除します。"
displayed_sidebar: akaXtractSidebar
---

# クォータとデータ保持

## クォータを監視する

`Profile & Setting` -> `Quota & Usage` を開きます。クォータを読み取る権限が必要です。左側メニューの下部にある `Quota Usage` パネルでも、使用状況を確認できます。

![Quota & Usage タブ](/static/img/scale-xtract-quota-usage.png)

| 項目 | 意味 |
| --- | --- |
| `Limit`、`Used`、`Remaining` | クォータの上限と使用量です。クォータはファイル数ではなく、ページ数でカウントされます |
| `Expires At`、`Days Remaining` | クォータの終了日時です |
| `Usage Trend` | `Daily`、`Weekly`、`Monthly` 単位の使用量です。集計の区切りには UTC が使われます |
| `Usage by Pipeline` | どの Pipeline の使用量が多いか |

ステータスが `Limit Exceeded`、`Expired`、`Not Configured` の場合は、さらに文書を送信する前に管理者に連絡してください。文書の削除や結果の却下を行っても、クォータは戻りません。AI プロバイダー側の制限は、`Remaining` とは別に管理されています。

## 保持期間を設定する

1. Pipeline を開き、`More Pipeline Actions`（`...` ボタン）を選択して、`Data Retention` を選択します。

   ![Data Retention Policy ダイアログ](/static/img/scale-xtract-data-retention-dialog.png)

2. 1～180 の整数（日数）を入力して保存します。

この設定は、特定のバージョンではなく、Pipeline 全体に適用されます。既定は 90 日です。データの経過期間は、Job の完了時点から数えます。クリーンアップは、有効期限の時刻ちょうどに実行されるとは限りません。期間を短くする前に、保存が必要なデータを[エクスポート](../documents/review-and-export.md#export)してください。

## データを削除する

- **Document または Job：** その行で `Delete` を選択し、確認します。Job をキャンセルする権限が必要です。`Reviewing` の状態の Document は削除できません。
- **Pipeline：** `...` メニューで `Delete Pipeline` を選択し、確認します。Pipeline、そのすべてのバージョン、関連する Processing Job が完全に削除されます。関連データは、バックグラウンドでクリーンアップされます。

![Delete Pipeline の確認ダイアログ](/static/img/scale-xtract-delete-pipeline-dialog.png)

:::warning
削除は、インターフェースから元に戻すことはできません。Document または Job を削除すると、文書、実行、結果、保存されているファイルが削除されます。Pipeline を削除すると、Pipeline、そのすべてのバージョン、関連する Job が削除されます。期限切れのデータも、同様の方法でクリーンアップされます。削除しても、すでにエクスポートまたは送信されたコピーは回収されません。
:::
