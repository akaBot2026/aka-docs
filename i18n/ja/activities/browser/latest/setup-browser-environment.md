---
id: setup-browser-environment
title: "ブラウザ環境のセットアップ"
sidebar_label: "環境セットアップ"
sidebar_position: 3
description: "現在のブラウザバージョンに合わせて akaBot Studio の ChromeDriver / EdgeDriver を構成するための手順。"
displayed_sidebar: activitiesSidebar
---

# ブラウザ環境のセットアップ

現在のブラウザバージョンに合わせて akaBot Studio の ChromeDriver / EdgeDriver を構成するための手順。

**注:**
akaBot Studio を使用して Web ブラウザ（Chrome、Edge、Firefox）を自動化するには、主に 2 つのコンポーネントを構成する必要があります:
1. **WebDriver (例: ChromeDriver、EdgeDriver)**: ロボットがブラウザを起動・制御できるようにします（本ガイドで設定）。
2. **akaBot Web Extension**: ロボットが Web 要素を検出・操作できるようにします。設定方法については [akaBot Web 拡張機能 インストールガイド](/i18n/ja/studio/latest/user-guide/how-to-install-akabot-web-extension.md) を参照してください。

Chrome または Edge を使用して akaBot Studio で Web ベースのフローを自動化する際、インストールされているブラウザが自動更新されると、WebDriver の不一致エラー（例: `SessionNotCreatedException`）が発生することがあります。

これを解決するには、以下の手順に従って、お使いのブラウザバージョンに一致するブラウザドライバを手動で更新・構成してください。

---

## 手順

### Google Chrome の場合

#### ステップ 1: Google Chrome のバージョンを確認する
1. Google Chrome を開きます。
2. アドレスバーに `chrome://settings/help` と入力します（または右上の 3 つの点メニューをクリック -> **ヘルプ** -> **Google Chrome について** を選択）。
3. Chrome ブラウザのメジャーバージョンを確認します（例: バージョンが `149.0.7827.155` の場合、メジャーバージョンは `149` です）。

![Check Chrome Version](/static/img/check-chrome-version.png)

#### ステップ 2: Chrome for Testing ページにアクセスする
* ブラウザタブを開き、公式の Chrome WebDriver ポータルにアクセスします:
  `https://googlechromelabs.github.io/chrome-for-testing/`

![chrome-driver](/static/img/chrome-driver.png)

#### ステップ 3: ダウンロードリンクをコピーしてドライバパッケージをダウンロードする
1. チャンネルテーブル（例: **Stable**）を見つけます。
2. ご使用の OS および CPU アーキテクチャに一致する `chromedriver` の行を見つけます（例: 64 ビット Windows の場合は **win64**）。
3. URL をコピーし、新しいブラウザタブを開いて貼り付け、Enter キーを押して `.zip` ファイルをダウンロードします。

#### ステップ 4: akaBot ChromeDriver フォルダに移動する
* PC の **エクスプローラー** を開き、次のインストールパスに移動します:
  `C:\Program Files\FPT Software\akaBot Platform\WebDriver\ChromeDriver`

#### ステップ 5: 新しいバージョンフォルダを作成する
1. `ChromeDriver` ディレクトリ内に新しいフォルダを作成します。
2. このフォルダの名前に、ステップ 1 で確認したメジャーバージョンを正確に付けます（例: `149`）。

#### ステップ 6: ダウンロードしたパッケージを展開する
* ダウンロードした `.zip` ファイルを探し、その内容を展開（解凍）します。

#### ステップ 7: chromedriver.exe をバージョンフォルダにコピーする
1. 展開したフォルダから `chromedriver.exe` 実行可能ファイルをコピーします。
2. ステップ 5 で作成した新しいバージョンフォルダ（例: `C:\Program Files\FPT Software\akaBot Platform\WebDriver\ChromeDriver\149`）に直接貼り付けます。

![149.png](/static/img/149.png)

### Microsoft Edge の場合

#### ステップ 1: Microsoft Edge のバージョンを確認する
1. Microsoft Edge を開きます。
2. アドレスバーに `edge://settings/help` と入力します（または右上の 3 つの点メニューをクリック -> **ヘルプとフィードバック** -> **Microsoft Edge について** を選択）。
3. Edge ブラウザのメジャーバージョンを確認します（例: バージョンが `128.0.2739.79` の場合、メジャーバージョンは `128` です）。

#### ステップ 2: Microsoft Edge WebDriver ページにアクセスする
* ブラウザタブを開き、公式の Microsoft Edge WebDriver ページにアクセスします:
  `https://developer.microsoft.com/microsoft-edge/tools/webdriver`

#### ステップ 3: ダウンロードリンクをコピーしてドライバパッケージをダウンロードする
1. ページの **Downloads** セクションで、先頭の 3 つの数値が Edge のバージョンと一致するバージョン番号を見つけます（4 番目の数値は異なっていても問題ありません）。
2. ご使用の OS および CPU アーキテクチャに一致するプラットフォームボタン（例: 64 ビット Windows の場合は **x64**）をクリックして、`.zip` ファイルをダウンロードします。

#### ステップ 4: akaBot EdgeDriver フォルダに移動する
* PC の **エクスプローラー** を開き、次のインストールパスに移動します:
  `C:\Program Files\FPT Software\akaBot Platform\WebDriver\EdgeDriver`

#### ステップ 5: 新しいバージョンフォルダを作成する
1. `EdgeDriver` ディレクトリ内に新しいフォルダを作成します。
2. このフォルダの名前に、ステップ 1 で確認したメジャーバージョンを正確に付けます（例: `128`）。

#### ステップ 6: ダウンロードしたパッケージを展開する
* ダウンロードした `.zip` ファイルを探し、その内容を展開（解凍）します。

#### ステップ 7: msedgedriver.exe をバージョンフォルダにコピーする
1. 展開したフォルダから `msedgedriver.exe` 実行可能ファイルをコピーします。
2. ステップ 5 で作成した新しいバージョンフォルダ（例: `C:\Program Files\FPT Software\akaBot Platform\WebDriver\EdgeDriver\128`）に直接貼り付けます。

### 最終ステップ: akaBot Studio で Auto Detect を有効にする
1. **akaBot Studio** を起動します。
2. サイドバーのホーム画面から **Options**（オプション）を開きます。
3. **Execution**（実行）を選択します。
4. **Browser Version** セクションの下にある **Auto Detect** チェックボックスをオンにします。
5. 保存するか、OK をクリックします。

![chrome-studio](/static/img/chrome-studio.png)

---

## 次のステップ: Web 拡張機能のインストール

WebDriver をセットアップした後、Web ページ上の要素の検出と対話を可能にするために、**akaBot Web Extension** をインストールする必要があります。拡張機能がない場合、akaBot Studio は設計時に要素をハイライトまたはキャプチャできません。

お使いのブラウザに合わせて拡張機能をインストールおよび有効化する手順については、[akaBot Web 拡張機能 インストールガイド](/i18n/ja/studio/latest/user-guide/how-to-install-akabot-web-extension.md) を参照してください。
