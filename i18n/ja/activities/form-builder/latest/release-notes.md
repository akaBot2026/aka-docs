---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "アクティビティのリリースノート。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

### v3.1.1.2

リリースノート：

1. フォームの表示および操作のための Form Builder アクティビティを追加しました。
2. 対応アクティビティ：Display Form、Close Form、Reset Form、Get Element Value、Set Element Value、Disable、Enable、Set Focus。

### v2.3.0

リリースノート：

1. 更新：「PDFフォームを表示」ウィンドウを最大化。
2. 修正：JsonObject入力がBase64デコードに起因してロードできない不具合を修正。
3. 更新：ユーザーがキャンセルまたはウィンドウを閉じた際に「ユーザーによるスキップ」の例外をスロー。
4. 追加：キー「highlightFields」がある場合のフィールドハイライト機能を追加。

### v2.2.1

リリースノート：

1. 追加：「PDFフォームを表示」アクティビティに Form Title プロパティを追加。
2. 変更：PDF表示のエンジンを変更。
3. 追加：Ctrl + マウススクロールによるPDFファイルのズーム機能を追加。

### v2.2.0

リリースノート：

1. 追加：「PDFフォームを表示」アクティビティを追加。

## **アクティビティをインストールするにはどうすればよいですか?**

**1.パッケージを手動でダウンロード**

- [here](https://ws3.akabot.com/s/TtAmz5RONy2weqB)をクリックしてアクティビティ ファイルをダウンロードします。

- \*.nupkg ファイルを次のフォルダーに置きます: **C:\ProgramData\akaBot\Packages\\**

- **Studio > Package Manager** で、リストからこのアクティビティを検索してインストールします。

**2. Studio パッケージ マネージャーを使用する**

- **Studio > パッケージ マネージャー > 設定 > ユーザー パッケージ ソース** で、次のリポジトリを追加します: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json

- リストからこのアクティビティを検索してインストールします。
