---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "リリースノートのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## v3.3.0

ビルド日: 2026年8月20日

- `Excel Application Scope` 内の範囲の行を反復処理する `For Each Excel Row` アクティビティを追加しました。
- 任意の Excel ループスコープ内で動作する専用の `Excel Break` アクティビティと `Excel Continue` アクティビティを追加しました。
- Excel Application Scope の `Workbook` ツールチップを更新し、ファイルを開いたままにする動作について説明を追加しました。

## v2.1.1.3

ビルド日: 2026年5月14日

- 修正: 名前のない Pivotable の読み取り時に ReadRange（ClosedXML）で例外が発生する問題を修正しました。

## v2.1.1.0

**バグ修正**

* [ExcelApplicationScope] Excel ファイルでパスワード保護されたシートが設定されている場合のメッセージを修正しました。
* [ExportChart] Excel ファイル内のチャート名が同じ場合に、チャートがエクスポートされない問題を修正しました。
* [ExcelApplicationScope] Textbox[Designer] で200文字を超える文字を入力した場合に、長さが変更されるようにしました。
* [ExcelApplicationScope] ワークフローが停止しているにもかかわらず、ループによって Excel ファイルがバックグラウンドで開かれる問題を修正しました。
* [ExcelApplicationScope] WorkBook パスが存在する場合に、形式が正しくないというメッセージが表示される問題を修正しました。
* [ExcelApplicationScope] 編集パスワードに誤ったデータを入力した場合にメッセージが表示されない問題を修正しました。
* [ExcelCopyPasteRange] ユーザーが [Copy Items] で値を選択しなかった場合のメッセージを修正しました。
* [ExcelCopySheet] アクセス権のない Destination File Path を入力した際に画面がハングする問題を修正しました。
* [ExcelSetBorder] Range = nothing を設定した場合の誤った動作を修正しました。
* [ExcelReadCell] [Preserve Format] がチェックされ、[Cell] が固定アドレスの場合にデータが保持されない問題を修正しました。

## **アクティビティのインストール方法**

**1. パッケージを手動でダウンロード**
- [こちら](https://ws3.akabot.com/s/GwTK9bPoChHuv8A) をクリックしてアクティビティファイルをダウンロードします。
- \*.nupkg ファイルを次のフォルダーに置きます: **C:\ProgramData\akaBot\Packages\\**
- **Studio > Package Manager** で、リストからこのアクティビティを検索してインストールします。

**2. Studio パッケージマネージャーを使用**
- **Studio > Package Manager > Settings > User package sources** で、次のリポジトリを追加します: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json
- リストからこのアクティビティを検索してインストールします。
