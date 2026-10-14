---
id: test-and-publish
title: "Pipeline のテストと公開"
sidebar_label: "テストと公開"
sidebar_position: 2
description: "Pipeline をテストし、バージョンを公開し、更新します。複製、エクスポート、インポートの方法も説明します。"
displayed_sidebar: akaXtractSidebar
---

# Pipeline のテストと公開

新しい Pipeline は Draft の状態です。Draft は、テストして公開するまで文書を受け付けません。

## テスト

1. Draft を開き、`More Pipeline Actions` -> `Test Pipeline` を選択します。`Configuration is ready to test.` と表示されるまで待ちます。
2. `Test Document` でサンプル ファイルを選択し、`Run Test` を選択します。`Test Status` は `PROCESSING` から `COMPLETED` に変わります。
3. `Extraction Result` を元の文書と照合します。繰り返す場合は `Run Another Test` を使用します。

![Test Pipeline を含む Draft のアクション メニュー](/static/img/scale-xtract-test-pipeline-menu.png)

![Configuration is ready to test、Test Document、Run Test を表示した Test Pipeline ページ](/static/img/scale-xtract-test-pipeline-ready.png)

![PROCESSING を表示した Test Status](/static/img/scale-xtract-test-pipeline-processing.png)

![Run Another Test を含む Extraction Result](/static/img/scale-xtract-test-pipeline-result.png)

**結果：** 抽出されたデータが表示されるか、Draft で修正すべきエラーが表示されます。

テストでは Webhook は送信されません。テスト データは 7 日間保持されます。

## 公開

Draft で `Publish Version` を選択します。

![Published バージョンの Pipeline Setting タブ](/static/img/scale-xtract-pipeline-setting.png)

**結果：** バージョンに `Published` と表示されます。このバージョンは読み取り専用で、文書を受け付けます。

## 公開済み Pipeline の更新

1. Published バージョンを選択し、`Create Draft` を選択します。
2. Draft を編集し、テストして公開します。

公開済みバージョンの設定内容を確認するには、`Pipeline Setting` の各セクションで `View Details` を選択します。

![モデル、データ保持期間、データ ライフサイクルの警告を表示した Pipeline Details の画面](/static/img/scale-xtract-pipeline-details-view.png)

![公開済みバージョンの Approval Rules の画面](/static/img/scale-xtract-approval-rules-view.png)

Pipeline の Draft は 1 つだけです。すでに Draft がある場合は、それを開いてください。新しい Job には、文書の送信時点で公開されているバージョンが使用されます。既存の Job は元のバージョンのまま維持され、再処理されません。

## 複製、エクスポート、インポート

`Create Draft` の横にある `...` ボタンを選択すると、`Copy Pipeline ID`、`Clone Pipeline`、`Data Retention`、`Delete Pipeline` を含むメニューが開きます。`Copy Pipeline ID` は、その Pipeline の ID をコピーします。Draft では、メニューに `Clone Pipeline` の代わりに `Test Pipeline` が表示されます。

![Pipeline のアクション メニュー](/static/img/scale-xtract-pipeline-actions-menu.png)

![Pipeline ID をコピーしたことを示すメッセージ](/static/img/scale-xtract-pipeline-id-copied.png)

| 操作 | 方法 | 結果 |
| --- | --- | --- |
| 複製 | `Clone Pipeline` を選択し、新しい名前を入力します | 現在の Published バージョンから、新しい Draft v1 が作成されます |
| エクスポート | `Export v…` | 保存済みの設定が JSON として書き出されます。文書と結果は含まれません |
| インポート | `Pipelines` ページで `Import Pipeline...` を選択し、AkaXtract でエクスポートした JSON ファイル（5 MB まで）を選びます | 新しい Draft v1 が作成されます |

![Clone Pipeline ダイアログ](/static/img/scale-xtract-clone-pipeline.png)

複製またはインポートの後は、移行先の会社に存在しないモデルやキーを選択し直してから、テストして公開してください。

:::note
テストでは、Webhook の受信側や ScaleConnect の接続元が正しく動作することは確認できません。それらは[連携](../integrations/webhooks.md)のページに従って確認してください。
:::
