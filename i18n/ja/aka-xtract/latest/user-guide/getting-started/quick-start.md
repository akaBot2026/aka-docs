---
id: quick-start
title: "Quick Start"
sidebar_label: "Quick Start"
sidebar_position: 1
description: "Pipeline の作成、公開、文書のアップロード、結果のレビュー、エクスポートまでを行い、最初の文書を処理します。"
displayed_sidebar: akaXtractSidebar
---

# Quick Start

約 10 分で最初の文書を処理します。

**事前に必要なもの**
- Pipeline の管理と公開ができるアカウント（Owner、Administrator、Supervisor など）。
- サンプル文書：PDF、PNG、JPG/JPEG、または XML（25 MB まで）。
- 利用可能なクォータ。

## ステップ 1：サインインする

管理者から案内されたアプリケーションのアドレスを開き、`Username or email` を入力して `Sign In` を選択し、認証の手順を完了します。

![AkaXtract のサインイン ページ](/static/img/scale-xtract-login.png)

**結果：** ページ上部に会社名が表示されます。

## ステップ 2：サンプルから Pipeline を作成する

1. `Pipelines` -> `Create Pipeline` -> `Create Auto` を開きます。
2. `Pipeline Name` を入力し、組み込みの `AkaXtract AI` モデルをそのまま使用します。このモデルに API キーは必要ありません。
3. 最初の結果を自分でレビューできるように、`Auto-Approve Results` をオフにします。
4. `Sample Document` を選択し、`Generate` を選択します。数分かかる場合があります。
5. `Review Generated Configuration` で、プロンプト、スキーマ、マッピングを確認し、`Create Draft` を選択します。

![Create Manual と Create Auto を含む Create Pipeline メニュー](/static/img/scale-xtract-create-pipeline-menu.png)

![Create Pipeline with AI フォーム](/static/img/scale-xtract-create-auto-form.png)

![Review Generated Configuration](/static/img/scale-xtract-create-auto-review.png)

**結果：** Pipeline が Draft v1 として開きます。

## ステップ 3：テストして公開する

1. `More Pipeline Actions` -> `Test Pipeline` を選択します。
2. `Test Document` -> `Run Test` を選択し、`Extraction Result` をサンプル文書と照合します。
3. Draft で `Publish Version` を選択します。

![Test Pipeline を含む Draft のアクション メニュー](/static/img/scale-xtract-test-pipeline-menu.png)

![Configuration is ready to test、Test Document、Run Test を表示した Test Pipeline ページ](/static/img/scale-xtract-test-pipeline-ready.png)

![Run Another Test を含む Extraction Result](/static/img/scale-xtract-test-pipeline-result.png)

![Published バージョンの Pipeline Setting タブ](/static/img/scale-xtract-pipeline-setting-auto.png)

**結果：** バージョン 1 に `Published` と表示されます。

## ステップ 4：文書をアップロードする

Pipeline を開き、`Documents` -> `Upload Document` を選択し、ファイルを選んで、もう一度 `Upload Document` を選択します。

![Upload Document ダイアログ](/static/img/scale-xtract-upload-document-xml.png)

**結果：** 文書が一覧に表示されます。処理が終わると、ステータスは `To Review` になります。

## ステップ 5：レビューして確定する

1. 文書の行メニューを開き、`Review` を選択します。
2. 画面上部の警告を確認し、抽出されたフィールドを元の文書と照合して、誤っている値を修正します。
3. `Confirm` を選択します。

![Review を含む文書の行メニュー](/static/img/scale-xtract-document-row-menu.png)

![処理の警告、Reject、Confirm が表示された Review 画面](/static/img/scale-xtract-review-with-warning.png)

![文書の確定後の Review 画面](/static/img/scale-xtract-review-confirmed.png)

**結果：** `Document confirmed successfully.` というメッセージが表示され、文書のステータスが `Confirmed` になります。

## ステップ 6：データをエクスポートする

文書の行メニューを開き、`Export...` を選択し、形式を選んで、`Export` を選択します。

![Confirmed の文書が表示された Documents 一覧](/static/img/scale-xtract-documents-confirmed.png)

![Export Document ダイアログ](/static/img/scale-xtract-export-document.png)

**結果：** ブラウザーが抽出されたデータをダウンロードします。

## 次のステップ

- [Pipeline の作成](../pipelines/create-a-pipeline.md)：各ステップを自分で設定します。
- [Webhook](../integrations/webhooks.md)：確定した結果を他のシステムに送信します。
- [トラブルシューティング](../troubleshooting.md)：失敗した Job やエラーメッセージに対処します。
