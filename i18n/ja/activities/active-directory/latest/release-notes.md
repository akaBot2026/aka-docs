---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# リリースノート

### v2.3.0.5

リリースノート:

1. 追加: Click アクティビティの入力方法。  
2. 追加: Select Item アクティビティ（By Text および By Value）でワイルドカードをサポート。注：アスタリスク（\*）のみサポート。  
3. 追加: Open Browser の Arguments プロパティに "enableDriverLog" を挿入することで Selenium ドライバのログを有効にする機能。

### v2.3.0.4

リリースノート:

1. 追加: Type Into アクティビティの入力方法。

### v2.3.0.2

リリースノート:  
1. 更新: プロパティ WaitVisible のデフォルト値を true に設定  
2. 追加: Click アクティビティに Wait Clickable プロパティを追加

### v2.3.0.1

リリースノート:  
1. Selenium WebDriver、IEDriverServer のアップグレード  
- バージョン 4.2.0 から 4.5.0 へ

2. Open Browser:  
- 追加: タイムアウトに達するまでリトライを実行  
- 追加: 初期化時に WebDriver を構成するための引数をユーザーが入力できるようにする（IE モードのみ）  
   PageLoadStrategy = Normal // 値: Default, Normal, Eager, None  
   EnableNativeEvents = true // 値: true, false  
   RequireWindowFocus = false // 値: true, false

3. Element exists:  
- 更新: 操作中に例外を投げないように変更  
- タイムアウト時はブール値を返す

4. Wait Activities  
- 適用対象: Wait Element Exists, Vanish, Title, Page Load  
- 更新: タイムアウト時に条件に一致しない場合のみ例外を投げる

5. Switch To  
- 更新: タイムアウトするまで操作をリトライする

6. Type Into, Click, Send Hotkey  
- 追加: Default > Simulate > Hardware の自動フォールバック機構（IE モードのみ）

### v2.2.0.0

リリースノート

- Type Into アクティビティで、Designer が "Text" フィールドにデータがない場合に赤いアイコンを表示しない問題を修正。  
- Type Into アクティビティで、WaitVisible が未チェックのときに表示されないテキストボックスにデータを入力できない問題を修正。  
- Send Hot Key アクティビティで複数のキーコンビネーションを選択した際に動作しない問題を修正。  
- Send Hot Key アクティビティで Windows の特殊キーが動作しない問題を修正。  
- Inject JS アクティビティで、Script File が空白のみを含む場合に誤ったメッセージを表示する問題を修正。  
- Quit Browser アクティビティで IE ブラウザを終了できない問題を修正。  
- Extract Data、Extract Structure Data アクティビティで Continue on Error = True のときに例外エラーを表示する問題を修正。

### **アクティビティのインストール方法**

1. パッケージを手動でダウンロード

- アクティビティファイルをダウンロードするには [こちら](https://ws3.akabot.com/s/dYtYRXcrKoCbB5u) をクリックしてください。

- *.nupkg ファイルを次のフォルダに置きます: *C:\ProgramData\akaBot\Packages\* 

- Studio > Package Manager でリストからこのアクティビティを検索してインストールします。

2. Studio Package Manager を使用

- Studio > Package Manager > Settings > User package sources に次のリポジトリを追加します: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json

- リストからこのアクティビティを検索してインストールします。

