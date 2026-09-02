---
id: works-with-box-using-http-client
title: "Http クライアントを使用して Box で動作"
sidebar_label: "Http クライアントを使用して Box で動作"
sidebar_position: 1
description: "Http クライアントを使用して Box で動作するドキュメント。"
displayed_sidebar: activitiesSidebar
---

このサンプルでは、akaBot の `Http Client` アクティビティと Box クライアント認証情報
付与 (CCG) 認証を使用して、既存の Box マネージド ユーザーのルート フォルダーで動作します。
コンテンツをリスト表示し、フォルダーを作成して名前変更し、ファイルをアップロードおよび更新し、
ファイルをダウンロードして、検査のため一時停止した後、テスト データを削除します。

## 前提条件

- Box Developer Console へのアクセス権がある Box 開発者または エンタープライズ アカウント。
- アプリケーションを認可できる Box 管理者。
- クライアント シークレットを表示またはコピーするアカウントで多要素認証 (2FA) が有効になっていること。
- Core アクティビティがインストールされている akaBot Studio。

## 新しいアプリを作成

1. Box にサインインして、
   [Box Developer Console](https://app.box.com/developers/console) を開きます。
2. **Platform Apps** を選択してから、**New App** を選択します。
3. アプリケーション名を入力します。例えば、`DemoApp`。
4. アプリケーション タイプとして **Server** を選択します。

![新しいアプリを作成](/static/img/01-box-create-new-app.png)

## デフォルト アカウントへのアクセスを構成

アプリケーションの **Configuration** タブを開き、以下の設定を構成します。

1. **App Access Level** で、**App + Enterprise Access** を選択します。これにより、
   アプリケーションはサービス アカウントだけでなく、既存のマネージド ユーザーにアクセスできます。
2. **Application Scopes** で、以下を有効にします。
   - **Read all files and folders stored in Box**。
   - **Write all files and folders stored in Box**。
3. **Additional Configuration** で、
   **Generate User Access Tokens** を有効にします。これは、ワークフローが
   `box_subject_type=user` を送信し、マネージド ユーザーとして認証するために必要です。
4. **Save** ボタンをクリックします。

![App + Enterprise Access](/static/img/02-box-app-enterprise-access.png)

![アプリケーション スコープ](/static/img/03-box-file-folder-scopes.png)

![ユーザー アクセス トークンを生成](/static/img/04-box-generate-user-access-tokens.png)

## 構成ファイルを構築

アプリケーションの **Configuration** タブで、**App Details** ペインを探します。

1. **Access** グループの下で **Client ID** をコピーします。これが `clientID` になります。
2. **Fetch Secret** ボタンをクリックして **Client Secret** を取得します。Box は 2FA 検証が必要な場合があります。これが
   `clientSecret` になります。
3. **Properties** グループの下で **Enterprise ID** をコピーします。これが `enterpriseID` になります。

上記の値を使用して構成ファイル `HttpBoxDefaultAccount/data/box-config.json` を更新します。

```json
{
  "boxAppSettings": {
    "clientID": "PUT_YOUR_CLIENT_ID_HERE",
    "clientSecret": "PUT_YOUR_CLIENT_SECRET_HERE"
  },
  "enterpriseID": "PUT_YOUR_ENTERPRISE_ID_HERE"
}
```

![クライアント シークレット](/static/img/05-box-client-id-and-secret.png)

4. **Properties** グループの下で **User ID** をコピーします。

akaBot Studio で `UserId` 入力を設定するか、`Main.xaml` のデフォルト値を更新します。

![ワークフロー引数](/static/img/07-box-user-id-argument.png)

5. 認可 (必要に応じて)

サーバー認証された Box Platform アプリは、Box API を呼び出す前に認可される必要があります。

![認可](/static/img/06-box-authorize-application.png)

## 実行

akaBot Studio で `Main.xaml` を開いて実行します。

ワークフローはテスト コンテンツを作成、アップロード、更新、ダウンロードした後、メッセージ ボックスを表示します。
生成されたフォルダーを Box で検査してから、**OK** を選択して、ワークフローがダウンロードされたローカル ファイルを削除し、
リモート テスト ファイルとフォルダーを Box ゴミ箱に移動できるようにします。

**[ここをクリック](https://ws3.akabot.com/s/MH2fVsHjrP81KHs)** して完全なワークフローをダウンロードします。

![実行結果](/static/img/08-box-execute-result.png)

## 操作

ワークフローは次のことを実行します。

1. `data/box-config.json` を 1 回読み取って、それを `JObject` に逆シリアル化します。
2. `box_subject_type=user` でマネージド ユーザー アクセス トークンを要求します。
3. `GET /users/me` を呼び出して、返される ID が `UserId` と等しいことを確認します。
4. ユーザーのルート フォルダーをリスト表示します。
5. フォルダーを作成、読み取り、名前変更します。
6. 2 つのファイルをアップロードし、フォルダーをリスト表示し、ファイル情報を読み取り、1 つのファイルの名前を変更してダウンロードします。
7. ユーザーが Box でテスト コンテンツを検査できるようにしばらく一時停止します。
8. ローカル ダウンロード、2 番目のリモート ファイル、テスト フォルダーを再帰的に削除します。Box API 削除は、リモート項目をゴミ箱に移動します。

Activity Core 3.4 の `OAuth2Token` プロパティは、`OAuth` 認可スキームを送信します。Box
は `Bearer` を必要とするため、このワークフローは明示的に
`Authorization: Bearer <token>` を各 API リクエストの Headers 辞書で提供します。

## トラブルシューティング

- `invalid_client`: Client ID と Client Secret を確認し、同じアプリケーションに属していることを確認します。
- `invalid_grant`: **App + Enterprise Access**、**Generate User Access
  Tokens**、数値の `UserId`、およびアプリケーション認可を確認します。
- `403 Forbidden`: 必要な読み取り/書き込みスコープを確認して、設定を変更した後にアプリを再認可します。
- ワークフローが間違ったアカウントにアクセスしている: `UserId` を確認します。`enterpriseID` を変更しても、このサンプルではマネージド ユーザーは選択されません。

## Box ドキュメント

- [クライアント認証情報付与を設定](https://developer.box.com/guides/authentication/client-credentials/client-credentials-setup/)
- [クライアント認証情報付与を使用](https://developer.box.com/guides/authentication/client-credentials/)
- [Box アプリケーション認可](https://developer.box.com/guides/authorization/)
- [フォルダーを作成](https://developer.box.com/reference/post-folders/)
- [ファイルをアップロード](https://developer.box.com/reference/post-files-content/)
