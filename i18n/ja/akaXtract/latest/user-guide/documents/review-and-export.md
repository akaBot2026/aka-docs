---
id: review-and-export
title: "結果のレビューとエクスポート"
sidebar_label: "レビューとエクスポート"
sidebar_position: 2
description: "抽出されたデータをレビューし、確定または却下して、確定した結果をエクスポートします。"
displayed_sidebar: akaXtractSidebar
---

# 結果のレビューとエクスポート

<a id='review'></a>

## Document をレビューする

**事前に必要なもの：** レビュー権限と、`To Review` の状態の Document。別のユーザーがレビュー中の場合は、閲覧のみ可能です。

1. `Documents` で、Document の行メニューを開き、`Review` を選択します。

   ![Review を含む Document の行メニュー](/static/img/scale-xtract-document-row-menu.png)

2. 左側の抽出されたフィールドを、右側の元の文書と照合します。上部の警告と、全体の `Confidence` を確認します。モデルの出力がスキーマに一致しないなどの警告がある場合、その文書はレビューが必要です。

   ![処理の警告、Reject、Confirm が表示された Review 画面](/static/img/scale-xtract-review-with-warning.png)

3. 誤っている値や欠けている値を修正します。表のフィールドでは、セルを編集し、行を追加または削除できます。
4. 修正内容を保存するには、`Confirm` を選択します。

**結果：** `Document confirmed successfully.` というメッセージが表示されます。Document は `Confirmed`、Job は `Completed` になります。

![文書の確定後の Review 画面（Reopen for Review を表示）](/static/img/scale-xtract-review-confirmed.png)

| 操作 | 結果 |
| --- | --- |
| `Confirm` | 修正内容を保存します。Document は `Confirmed`、Job は `Completed` になります |
| `Reject` | Document は `Rejected`、Job は `Completed` になります。却下した結果はエクスポートできず、編集内容も送信されません |
| `Reopen for Review` | `Confirmed` または `Rejected` の Document に使用します。レビューの状態に戻り、Job は `Waiting for Review` になります。以前に確定した結果は、再度確定するまで消去されます |

![左側にフィールド、右側に元の文書を表示した Review 画面](/static/img/scale-xtract-review-document.png)

この画面のその他の機能：`View JSON` を選択すると、`Copy JSON` ボタンを備えた `Extracted data (JSON)` が開きます。`Download` は元のファイルを保存するもので、抽出されたデータではありません。XML の場合は、`Visual View` または `Raw XML` を使用します。

![Extracted data (JSON) ダイアログ](/static/img/scale-xtract-view-json.png)

:::warning
この画面を離れる前に、`Confirm` を選択してください。画面を離れると編集権限が解放され、確定していない変更は保存されません。約 2 分間操作がない場合、別のレビュー担当者が引き継ぐことができます。
:::

:::note
結果を再度開いても、すでにダウンロードまたは送信されたデータは取り消されません。受信側に連絡し、別途突き合わせを行ってください。
:::

<a id='export'></a>

## Document をエクスポートする

1. `Documents` で、`Confirmed` の行を探し、そのメニューを開いて `Export...` を選択します。

   ![Confirmed の Document が表示された Documents 一覧](/static/img/scale-xtract-documents-confirmed.png)

2. `Export Format` で XML、CSV、XLSX、JSON のいずれかを選択し、`Export` を選択します。

![Export Document ダイアログ](/static/img/scale-xtract-export-document.png)

**結果：** ブラウザーが、元の文書ではなく抽出されたデータを、フィールド、値、信頼度、ソースのレコードとしてダウンロードします。CSV ファイルの列は `Field`、`Value`、`Confidence`、`Source` です。

エクスポートできるのは `Confirmed` の Document のみで、かつ最終結果がまだ存在する場合に限ります。
