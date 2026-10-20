---
id: api-integration
title: "API 連携"
sidebar_label: "API 連携"
sidebar_position: 3
description: "API キーを作成し、お使いのシステムから AkaXtract に文書を送信して、結果を取得します。"
displayed_sidebar: akaXtractSidebar
---

# API 連携

API を使用すると、お使いのシステムから Pipeline に文書を送信し、抽出されたデータを取得できます。アプリケーション内の `API Integration` ページが API リファレンスです。すべてのエンドポイントについて、リクエスト、レスポンス、コピーして使える cURL の例が掲載されています。このページでは、API キーと、各 API 呼び出しの流れを説明します。

## API キーを作成する

この操作には、API キーを管理する権限が必要です。

1. `API Keys` を開き、`Create API Key` を選択します。
2. `Key Name`（100 文字まで）を入力し、`Active` または `Deactive` を選択します。`Deactive` のキーでは、サービスを呼び出せません。
3. `Pipeline Scope` で `Specific pipelines` を選択し、そのキーに必要な Pipeline を選びます。ダイアログで既定で選択されている `Full access` は、会社内のすべての Pipeline が対象になるため、必要な場合にのみ使用してください。
4. 任意：`Expires At` を設定します。有効期限のないキーにする場合は、空のままにします。
5. `Create API Key` を選択します。`API Key Created` でキーをコピーし、組織のシークレット管理ツールに保存してから、`I Have Copied the Key` を選択します。

![ステータス フィルターを表示した API Keys ページ](/static/img/scale-xtract-api-keys-list.png)

![Create API Key ダイアログ](/static/img/scale-xtract-create-api-key.png)

![API Key Created ダイアログ（スクリーンショットではキーを非表示にしています）](/static/img/scale-xtract-api-key-created.png)

:::warning
完全なキーが表示されるのは 1 回だけで、後から取得することはできません。サポートへの問い合わせに、完全なキーを記載しないでください。
:::

キーを変更するには、`Edit` を選択します。キーが漏えいした場合や不要になった場合は、`Revoke` を選択します。失効したキーは元に戻せないため、新しいキーを発行してください。有効期限を過ぎたキーには `Expired` と表示されます。

## 認証

AkaXtract API へのリクエストには、`x-api-key: <your API key>` ヘッダーを付けます。ベース URL は `https://api.xtract.akanext.com` です。

## 文書を送信して結果を受け取る

1. `POST /core/api/v1/jobs/presigned-url` で、**事前署名付きアップロード URL を作成**します。レスポンスにアップロード ポリシーが含まれます。
2. `policy.url` に `multipart/form-data` の POST を送信して、**ファイルをクラウド ストレージにアップロード**します。手順 1 の `policy.fields` をすべて送信し、`file` フィールドを**最後**に置きます。このリクエストは、AkaXtract ではなく、ストレージ プロバイダーに直接送信されます。
3. **Confirm Upload and Start Processing** で**アップロードを確認**します。これにより、Job が作成され、処理が開始されます。
4. **Job を追跡**します。**Stream Job Status Events**（Server-Sent Events）を使用します。こちらが推奨の方法です。ポーリングにも対応しています。
5. **Get Job Processing Result** で**結果を取得**します。

![API Integration ページ](/static/img/scale-xtract-api-integration.png)

![Upload Binary File to Storage のリファレンス](/static/img/scale-xtract-api-upload-storage.png)

各エンドポイントのパス、リクエスト、レスポンスは、アプリケーションの `API Integration` で確認できます。`Copy Path` と `Copy cURL` を使うと、例をコピーできます。

コードを書かずに同じ流れを確認するには、Pipeline の `Documents` タブで文書をアップロードし、その文書を開いて `View JSON` を選択します。

Pipeline で Human Review が必要な場合、Job はレビュー担当者を待機します。確定した結果は、`Confirm` の後に取得できます。

## 制限事項

- 最大ファイル サイズ：25 MB。
- 1 ファイルあたりのページ数は、モデルによって異なります。
- 1 つのファイルに複数の文書を含めることができます。

API を呼び出さずに結果を受け取るには、[Webhook](./webhooks.md) を使用します。
