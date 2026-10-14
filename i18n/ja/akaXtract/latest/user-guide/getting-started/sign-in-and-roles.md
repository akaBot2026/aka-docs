---
id: sign-in-and-roles
title: "サインイン、ナビゲーション、ロール"
sidebar_label: "サインインとロール"
sidebar_position: 2
description: "サインインし、個人設定を行い、画面の構成を把握して、既定のロールを確認します。"
displayed_sidebar: akaXtractSidebar
---

# サインイン、ナビゲーション、ロール

## サインイン

1. 管理者から案内されたアプリケーションのアドレスを開きます。
2. `Username or email` を入力して `Sign In` を選択します。`Or sign in with` の下にある `Google` を選択することもできます。新規ユーザーは `Register` を選択します。`Remember me` を選択すると、このブラウザーでサインイン状態が維持されます。
3. ページ上部の会社名を確認します。正しい場合のみ先に進んでください。

アカウントがない場合、または会社のメンバーではない場合は、管理者に[招待または追加](../administration/users-and-roles.md#members)を依頼してください。

## プロフィールと個人設定

| 目的 | 方法 |
| --- | --- |
| 言語や外観を変更する | アバター メニューを開きます。選択内容はブラウザーに保存されます |
| プロフィールを表示する | `Profile & Setting` を開きます。`Change Password` が表示されている場合、選択すると新しいタブで ScaleX ポータルが開きます |
| 会社を切り替える | アバター メニューの会社のオプションを選択し、確認します。再度サインインが必要になるため、保存していない作業は先に完了してください |
| サインアウトする | `Logout` を選択します。共有のコンピューターでは特に忘れずに行ってください |

![Profile & Setting の Profile タブ](/static/img/scale-xtract-profile.png)

## ナビゲーション

| メニュー | 用途 |
| --- | --- |
| `Pipelines` | Pipeline とそのバージョンを作成・管理します |
| `Jobs` | 処理状況の監視、エラーの確認、Job の再試行・キャンセル・削除を行います |
| `AI Providers` | AI プロバイダーとモデルを表示し、カスタム モデルを管理します |
| `AI Models` | AI プロバイダーのキーを管理します（ページ タイトルは `AI Model API Keys`） |
| `API Keys` | 外部システム用のキーを発行します |
| `API Integration` | 使用例付きの API リファレンスを参照します |
| `Profile & Setting` | プロフィールを表示し、ユーザー、ロール、クォータを管理します |

Pipeline の内部には、`Pipeline Setting`、`Documents`、`ScaleConnect`、`Webhook`、`Webhook History` のタブがあります。

## 既定のロール

これらはシステム ロールです。Owner 以外のシステム ロールでは、クォータの読み取り権限のみ変更できます。権限を別の組み合わせにする場合は、[カスタム ロールを作成](../administration/users-and-roles.md#roles)してください。

| ロール | できること | できないこと |
| --- | --- | --- |
| `Owner` | ワークスペース内のすべての操作 | 通常のロールのように他のメンバーへ割り当てること |
| `Administrator` | 処理、モデル、連携、組織の管理 | 会社の所有権の移譲 |
| `Supervisor` | Pipeline の管理と公開、Webhook の管理、Job の再試行とキャンセル、結果のレビュー | AI キー、API Keys、ScaleConnect の管理 |
| `Member` | リソースの表示、文書の送信、Job の監視 | レビュー、公開、設定の編集 |
| `Guest` | リソースと結果の表示 | アップロード、レビュー、編集 |

:::note
レビュー、送信、エクスポート、公開には、それぞれ個別の権限が必要です。Review を開くには、表示するだけの場合でもレビュー権限が必要です。この権限がないユーザーも、Documents 一覧から確定済みの結果をエクスポートできます。
:::
