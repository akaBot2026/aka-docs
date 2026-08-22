---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "リリース ノートのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## v3.5.0

ビルド日: 2026年8月20日

- Interruptible While アクティビティと Interruptible Do While アクティビティを追加しました。既存の Break アクティビティと Continue アクティビティをループ本体内のフロー制御として使用でき、デザイナーは For Each に合わせた構成になっています。
- ブックマークベースのリターンホストを使用して、出力引数を利用可能な状態に保ったまま現在のワークフローファイルを終了する Return アクティビティを追加しました。

## v3.4.1

ビルド日: 2026年8月5日

- 修正: コンパイル済みライブラリで `MultipleAssign` 操作が保持されるようにしました。

## v3.4.0

ビルド日: 2026年7月31日

- 追加: **Invoke Workflow File** で **C# 式**をサポートしました。C# プロジェクトからワークフローを呼び出せるよう、アクティビティとそのデザイナーで `CompileExpressions = true` を設定するようにしました。
- 更新: **Get Task** の `JobSource` 解析を簡素化および堅牢化しました。
- 更新: PowerShell を `Microsoft.PowerShell.4.ReferenceAssemblies` パッケージ経由で解決するようにしました。バンドルされていた `Libs/System.Management.Automation.dll` を削除しました。
- 更新: `ImageClick`、`RestClient`、`RestResponse`、および C# コードエディターダイアログを調整しました。
- 更新: `net452` の依存パッケージを更新しました（Newtonsoft.Json 10.0.1、RestSharp 106.15.0）。
- 更新: `net472` の依存パッケージを更新しました（Newtonsoft.Json 13.0.3、RestSharp 106.15.0）。

---

## v3.3.0

ビルド日: 2026年1月6日

- 追加: .NET Framework `4.5.2` と `4.7.2` の両方をサポートしました。
- 更新: `net452` と `net472` の Newtonsoft.Json の依存バージョンを 13.0.2 に更新しました。
- 削除: 使用されていないパッケージ参照を削除しました（log4net 2.0.8、Microsoft.Activities.UnitTesting、Microsoft.CodeAnalysis.Analyzers、Obfuscar、System.Collections.Immutable、System.Reflection.Metadata、Microsoft.Activities.Extensions）。

---

## v2.3.0

ビルド日: 2025年11月19日

- 追加: **Repeat Number Of Times** アクティビティを追加しました。
- 追加: **Start Task**、**Stop Task**、**Get Task** アクティビティを追加しました（akaBot Center との統合）。
- 追加: **Pick**、**Pick Branch** アクティビティを追加しました。
- 復元: 依存関係のバージョンを復元しました（Newtonsoft.Json 10.0.1、RestSharp 105.0.1、log4net 2.0.8）。

---

## v2.2.3.4

ビルド日: 2025年1月24日

- 更新: **Get Agent Asset** / **Get Agent Credential** で、`BaseGetAssetActivity` を介して詳細な検証エラー（`CouldNotFindTheAsset`、`InvalidAssetTypeForNormalAssetsUseActivity`、`DoesNotWorkWithAssetsOfTypeCredential`）を表示するようにしました。
- 更新: `System.Web.Extensions` アセンブリ参照を追加しました。
- アップグレード: 脆弱性を修正するため、依存関係のバージョンを更新しました（Newtonsoft.Json 13.0.3、RestSharp 106.15.0、log4net 2.0.17）。

---

## v2.2.3.2

ビルド日: 2024年12月2日

- 追加: **Add Data Column** で int、long、short、uint、ulong、ushort、decimal の自動インクリメントをサポートしました。
- 修正: **Add Data Column** で最大長が定義されていない場合のエラー、および `MaxLength = -1` の String に対するデフォルト値の検証を修正しました。

---

## v2.2.3.1

ビルド日: 2024年9月26日

- 修正: **Invoke C# Code**（`InvokeCSharpCode` + `CompilerRunner`）で、出力 In/Out 引数、配列型、ジェネリック型が正しく機能するようにしました。

---

## v2.2.3

ビルド日: 2024年9月4日

- 追加: **Start Process** アクティビティを追加しました。
- 追加: **Invoke Process** アクティビティを追加しました。
- 追加: **Multiple Assign** アクティビティを追加しました。

---

## v2.2.2.1

ビルド日: 2024年8月27日

- 更新: `RestClient` で、multipart form-data（HTTP リクエスト）にファイルをアップロードする際に MIME タイプを追加するようにしました。

---

## v2.2.1

ビルド日: 2024年4月3日

- 追加: 専用のコードエディターダイアログと C# 構文ハイライトを備えた **Invoke C# Code** アクティビティ（`InvokeCSharpCode`）を追加しました。`ArgumentToTextConverter` と `CompilerRunner` も更新しました。

---

## v2.2.0.1

ビルド日: 2023年7月24日

- 追加: **Is User Locked** と **Unlock User** アクティビティを追加しました（Agent）。
- 追加: **Get User Credential** アクティビティを追加しました（akaBot Center）。
- 追加: **GetFiles** の条件フィルターに変更日プロパティを追加しました。
- 修正: Continue On Error が有効な場合でも CopyDirectory アクティビティで例外が表示される問題を修正しました。
- 修正: [Selectfile] ファイルを選択できるにもかかわらずエラーメッセージが表示される問題を修正しました。
- 修正: [ImageClick] 入力 [Confident] がナビゲーション番号の場合に誤ったエラーメッセージが表示される問題を修正しました。
- 修正: [ReadTextFile] Encoding の動作が正しくない問題を修正しました。
- 更新: Core / DataTable / Credentials アクティビティ全体を大幅にリファクタリングし、ローカライズ（resx）構成を再編成しました。

---

## v2.2.0

ビルド日: 2022年2月23日

- 追加: `Precondition`（Credentials）、`SortingOrderConverter`、`DateHelper` を追加しました。
- 更新: 中国語簡体字（zh-Hans）と韓国語（ko-KR）のローカライズリソースを追加し、ツールボックス / デザイナーのアイコンを更新しました。
- 修正: 多数のアクティビティにおける Coverity 静的解析の問題（デッドコード、リソース処理）を大量に修正しました。