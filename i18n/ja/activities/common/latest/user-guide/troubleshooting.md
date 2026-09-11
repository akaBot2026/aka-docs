---
id: troubleshooting-common
title: "Common アクティビティのトラブルシューティング"
sidebar_label: "トラブルシューティング"
sidebar_position: 4
description: "akaBot プラットフォームにおける Common アクティビティ（Browser、Windows、Element、Java、SAP）のトラブルシューティングガイドです。"
displayed_sidebar: activitiesSidebar
---

# Common アクティビティのトラブルシューティング

このドキュメントでは、akaBot の Common アクティビティパッケージ（`RCA.Activities.Common`）を使用してワークフローを実行する際に最も頻繁に発生するランタイムエラーと例外の原因、診断ガイドライン、および解決策を提供します（Browser、Windows、Element、Java、SAP の自動化を対象としています）。

> **注意:** セマンティックセレクターに特有の問題のトラブルシューティングについては、[セマンティックセレクター ガイド](semantic-selector-howto.md) を参照してください。

---

## 主な例外とエラー一覧

以下の表は、Common アクティビティパッケージ（`RCA.Activities.Common`）で発生する最も一般的な例外の詳細です：

| 例外 / エラー | akaBot における原因 | トラブルシューティング手順と解決策 |
| :--- | :--- | :--- |
| **`ElementNotFoundException`**<br/>*（セレクターで要素が見つかりません）* | • **動的属性:** セッションまたはリロードのたびに要素の技術的属性（`id`、`class`、`idx`）が変化します。<br/>• **レンダリングの遅延:** アクティビティ実行時に要素がまだ DOM または UI ツリーに作成されていません。<br/>• **UI フレームワークの非互換性:** デフォルトのフレームワークでは要素を検出できません。<br/>• **Iframe / コンテナーの不一致:** 対象要素が別の iframe、フレーム、またはシャドウ ルート内に存在します。 | • **セレクターの調整:** **プロパティ > 入力 > ターゲット > セレクター** から **セレクター ダイアログ** を開きます。不安定な属性のチェックを外し、動的な値をワイルドカード（`*`、`?`）または変数（`{{var}}`）に置き換えます。詳細は [セレクター ガイド](selector-guide.md) を参照してください。<br/>• **UI エクスプローラーを使用する:** **[UI エクスプローラー](/docs/studio/latest/user-guide/how-to-use-UI-Explorer.md)** を開いて完全なビジュアル階層を確認し、安定した祖先ノードを見つけて、信頼性の高い属性またはアンカーを選択します。<br/>• **UI フレームワークの切り替え（F4）:** 指定時に **F4** を押して **Default**、**UIA**、**MSAA** を順番に切り替えます。<br/>• **フォールバック検索ステップの有効化:** 「選択オプション」ウィンドウで **Fuzzy セレクター**（精度：0.4 → 1.0）または **Image**（F3）および **CV**（F8）によるビジュアルマッチングを有効にします。<br/>• **TimeoutMS の増加:** **ターゲット** の **TimeoutMS**（ミリ秒単位、デフォルト：`30000`）を増やします。<br/>• **Element Exists で事前確認:** アクションの前に **Element Exists** アクティビティを追加して、要素が読み込まれていることを確認します。 |
| **`BrowserNotSetException`** / **`WindowNotSetException`** | • Web またはウィンドウのアクティビティ（`Click`、`Type Into`、`Get Text`、`Close Tab` など）が、コンテナー変数を渡さずに必要なスコープコンテナーの外で実行されています。 | • **スコープコンテナー内に配置する:** Web アクティビティを **Open Browser** または **Attach Browser** スコープアクティビティの **Do** ブロック内に配置します。<br/>• デスクトップウィンドウのアクティビティは **Open Application** または **Attach Window** 内に配置します。<br/>• **スコープ変数を渡す:** アクティビティをスタンドアロンで使用する場合は、出力された `UiBrowser`（または `UiWindow`）変数をアクティビティの **Browser**（または **Window**）プロパティに渡します。 |
| **`BrowserTabNotFoundException`**<br/>*（セレクターでブラウザー タブが見つかりません）* | • **Attach Browser** で指定したセレクターが、選択したブラウザーで開いているタブと一致しません。<br/>• ページ URL がリダイレクトされたか、タブのタイトルが動的に変更されました。 | • **タイトルにワイルドカードを使用する:** Attach Browser セレクターで動的なタイトルの部分をワイルドカードに置き換えます（例：`<html app='chrome.exe' title='*Dashboard*' />`）。<br/>• **ブラウザーの種類を確認する:** **Browser Type** プロパティ（`BrowserName`）が実際に実行されているブラウザー（`Chrome`、`Edge`、`Firefox`、`IE`）と一致していることを確認します。 |
| **`InvalidSelectorException`** | • セレクターの XML 文字列が不正な形式です（エスケープされていない引用符、閉じられていないタグ、無効な文字など）。<br/>• 必須のルートタグ（Web の場合 `<html app='...' />`、デスクトップの場合 `<wnd app='...' />`）がありません。 | • **セレクター ダイアログで XML を検証する:** セレクター ダイアログでセレクターを開き、XML の形式を確認します。<br/>• **変数の構文を確認する:** セレクターに変数を挿入する場合は、二重波括弧構文 `{{variableName}}` に従い、有効な変数識別子を使用していることを確認します。 |
| **`ActivityTimeoutException`** | • 待機アクティビティ（`Wait Web Attribute`、`Wait Web Title`、`Wait Page Load Complete` など）が、期待される条件が満たされる前にタイムアウトしました。<br/>• 重いネットワーク遅延またはページの完了を妨げるバックグラウンドスクリプト。 | • **WaitForReady を調整する:** **ターゲット > WaitForReady** で、ドキュメントの完全な読み込みを待つ場合は **Complete** に設定します。バックグラウンドのポーリングスクリプトがブラウザーの完了報告を妨げている場合は **Interactive** または **None** に設定します。<br/>• **TimeoutMS を増加する:** アクティビティのタイムアウト値（ミリ秒単位）を増やします。 |
| **無効化された要素 / アクションがブロックされている** | • 要素は画面上に見つかっていますが、現在は非アクティブまたは無効の状態（`IsEnabled = False`）であるため、クリックまたは入力アクションが失敗します。 | • **業務フローを確認する:** アクションボタンをクリックする前に、前提条件（必須フォームの入力完了、利用規約チェックボックスへのチェックなど）が満たされていることを確認します。<br/>• **Alter If Disabled を有効にする:** サポートしているアクティビティ（**Click**、**Type Into**、**Check**、**SelectItem**、**SelectMultipleItems**）では、**Alter If Disabled** プロパティにチェックを入れて強制的に操作します。 |

![target-properties.png](/static/img/target-properties.png)

---

## バックグラウンド自動化と入力方式

無人実行中、または対象ウィンドウが他のウィンドウの背後にある場合にクリックやキーボード入力が失敗する場合は、アクティビティの **Input Method（入力方式）** プロパティを確認してください：

| 入力方式 | 動作 | 最適なユースケース | 考慮事項 |
| :--- | :--- | :--- | :--- |
| **`Default`** | OS レベルでハードウェアのマウスおよびキーボードイベントをエミュレートします。 | API またはウィンドウ メッセージをサポートしていないレガシーデスクトップアプリケーション。 | **フォアグラウンドのみ:** ウィンドウがアクティブかつ表示されている必要があります。ワークステーションがロックされているかスクリーンセーバーが有効な場合は失敗します。 |
| **`Simulate`** | アプリケーションまたは DOM 内の内部イベントハンドラーを直接トリガーします（例：JavaScript の `click()` または値の代入）。 | 無人自動化における Web ブラウザーおよび標準デスクトップアプリケーション。 | **100% バックグラウンド対応:** ウィンドウが最小化されているか、他のウィンドウの背後にある場合でも動作します。実行速度が最速です。マウスカーソルを移動しません。 |
| **`WindowMessage`** | Win32 メッセージ（`WM_LBUTTONDOWN`、`WM_KEYDOWN`）をウィンドウコントロールハンドルに直接送信します。 | Windows デスクトップコントロール（Win32、WinForms）。 | 物理カーソルを移動させずに、サポートされているデスクトップアプリケーションのバックグラウンドで動作します。 |

> **ヒント — 遅延の追加:** ホバーアニメーションや処理の遅い JavaScript イベントリスナーを持つ UI コントロールでは、**Click** または **Type Into** アクティビティの **DelayBefore** および **DelayAfter**（ミリ秒単位）を使用して、アプリケーションが安定するまでの時間を確保します。

---

## ブラウザー自動化のトラブルシューティング

Web アプリケーション（Chrome、Edge、Firefox）の自動化では、以下の一般的な障害ポイントを確認してください：

### 1. akaBot Web 拡張機能とネイティブホスト
- **Web 拡張機能の状態:** **akaBot Web 拡張機能** がインストール済みで有効になっており、プライベートセッションを自動化する場合はシークレット/InPrivate モードで許可されていることを確認します。
- **ネイティブホスト通信:** akaBot は `Aka.RPA.NativeMessagingHost` を介してブラウザーと通信します。企業のウイルス対策ソフトまたはグループポリシーがネイティブメッセージングホストをブロックしている場合、ロボットはタブと対話できません。
- セットアップ手順については、[akaBot Web 拡張機能インストール ガイド](/docs/studio/latest/user-guide/how-to-install-akabot-web-extension.md) を参照してください。

### 2. ブラウザーの種類の不一致
- **Open Browser** および **Attach Browser** で、**Browser Type** プロパティが起動またはアタッチするブラウザーの実行ファイル（`Chrome`、`Edge`、`Firefox`、`IE`）と一致していることを確認します。

### 3. ユーザーデータフォルダーと複数のプロファイル
- 既存の Chrome/Edge プロファイルが別のブラウザーインスタンスによってロックされている場合、**Open Browser** が起動または接続に失敗することがあります。
- **Open Browser** で **User Data Folder Mode** を設定します：
  - `Default`：ユーザーのデフォルトブラウザープロファイルを使用します。
  - `AutomaticFolder`：プロファイルロックの競合を防ぐために、独立したユーザーデータディレクトリを自動的に作成します。
  - `CustomFolder`：**User Data Folder Path** でカスタムフォルダーパスを指定します。

### 4. Windows の権限レベル（UIPI）
- akaBot Studio またはロボットが昇格された権限（**管理者として実行**）で動作しており、Web ブラウザーが標準ユーザーとして動作している場合（またはその逆）、Windows ユーザー インターフェイス特権の分離（UIPI）がプロセス間の通信をブロックします。Studio/ロボットとブラウザーを常に同じ権限レベルで起動してください。

---

## テクノロジー別トラブルシューティング

### Java アプリケーション

Java アプリケーション（Swing、AWT）の UI 要素を検査および自動化するには、ロボットマシンで **Java Access Bridge** が有効になっている必要があります。

**ステップ 1 — 64 ビット Java のインストール確認：**
コマンド プロンプト（`cmd`）を開き、64 ビット Java がインストールされていることを確認します：
```cmd
java --version
```
*出力例：*
```text
C:\Users\AKB-DatBA>java --version
java 17.0.12 2024-07-16 LTS
Java(TM) SE Runtime Environment (build 17.0.12+8-LTS-286)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.12+8-LTS-286, mixed mode, sharing)
```

**ステップ 2 — JDK の `bin` ディレクトリに移動して Java Access Bridge を有効にする：**
インストールされている 64 ビット JDK の `bin` フォルダーに移動します。このパスの `jdk-17` は例です。実際にインストールされている JDK フォルダー名（例：`jdk-11`、`jdk-17`、`jdk-21`、またはカスタム JDK インストールディレクトリ）に置き換えてください：
```cmd
cd "C:\Program Files\Java\jdk-<version>\bin"
jabswitch -enable
```
*（注：JDK の `bin` ディレクトリがシステムの `PATH` 環境変数に追加されている場合は、ディレクトリを変更せずに任意のコマンド プロンプトから直接 `jabswitch -enable` を実行できます）。*

*例（デフォルトの場所にある JDK 17 の場合）：*
```cmd
cd "C:\Program Files\Java\jdk-17\bin"
jabswitch -enable
```
*出力例：*
```text
C:\Program Files\Java\jdk-17\bin>jabswitch -enable
The Java Access Bridge has been enabled.
```

> **重要事項：**
> - **64 ビットアーキテクチャ:** akaBot は 64 ビット JDK/JRE を使用した 64 ビット Java アプリケーションをサポートしています（32 ビット Java アプリケーションはサポートされていません）。
> - **アプリケーションの再起動:** Java Access Bridge を有効にした後、変更を反映させるために akaBot Studio と対象の Java アプリケーションを再起動してください。
> - **状態の確認または無効化:** 現在の状態を確認するには `jabswitch` を実行します。無効にするには `jabswitch -disable` を実行します。

### SAP GUI 自動化
- **SAP スクリプティングの有効化:** SAP の自動化では、SAP サーバー（パラメーター `sapgui/user_scripting = TRUE`）と SAP GUI クライアント（**SAP GUI オプション > アクセシビリティとスクリプティング > スクリプティング > スクリプティングを有効にする**）の両方でスクリプティングを有効にする必要があります。
- スクリプティングが無効になっている場合、akaBot はタイムアウトをスローするか、SAP 要素の特定に失敗します。

---

## 関連情報

* [セレクター ガイド](selector-guide.md) - セレクター エディターを使用したセレクターの診断、修正、およびパラメーター化の方法です。
* [UI エクスプローラーの使い方](/docs/studio/latest/user-guide/how-to-use-UI-Explorer.md) - UI エクスプローラーを使用した UI ツリーの検査と堅牢なセレクターの構築方法です。
* [セマンティックセレクター ガイド](semantic-selector-howto.md) - 従来のセレクターが失敗する場合に AI 駆動のセマンティックセレクターを使用する方法です。
