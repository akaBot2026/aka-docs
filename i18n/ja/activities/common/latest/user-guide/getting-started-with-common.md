---
id: getting-started-with-common
title: "akaBot Common 入門ガイド"
sidebar_label: "Common 入門ガイド"
sidebar_position: 1
description: "akaBot Web 拡張機能のセットアップ、セレクターの種類の理解、および Common Activities パッケージを使用した最初のワークフローの構築。"
displayed_sidebar: activitiesSidebar
---

# akaBot Common 入門ガイド

> このガイドでは、**Common Activities** パッケージを使用して最初の自動化を構築する前に必要な基本事項を説明します。akaBot Web 拡張機能のインストール、akaBot が画面上の要素を検索する仕組み (セレクター) の理解、および実践的なワークフロー例を取り上げます。

---

## 1. akaBot Web 拡張機能のインストール

akaBot ブラウザー拡張機能は、akaBot Studio で Web 自動化機能を使用するために必要です。拡張機能がインストールされ、使用している Web ブラウザーで有効になっている場合、akaBot Studio は自動化の記録および実行中に Web 上の要素を直接検出して操作できます。

### 1.1 前提条件

akaBot ブラウザー拡張機能をインストールする前に、以下の条件を満たしていることを確認してください。

**システム要件**
* Windows 10/11、Windows Server 2016/2019/2022。
* akaBot Studio がインストールされていること (対応バージョン)。
* ローカル インストール権限があること。

**ブラウザー要件**
* Google Chrome (最新の安定版)、または
* Microsoft Edge、Chromium ベース (最新の安定版)、または
* Mozilla Firefox (最新の安定版)

### 1.2 Google Chrome 向け akaBot 拡張機能のインストール

**akaBot Studio からインストールを起動する**
* akaBot Studio を開きます。
* Studio サイドバーで **[オプション] > [拡張機能]** に移動します。
* **[Chrome]** セクションで **[インストール]** をクリックします。

![akaBot Studio からの Chrome 拡張機能のインストール](/static/img/common-getting-started-ext-chrome-install.png)

**[インストール]** をクリックすると、実行中のブラウザー インスタンスが確認されます。ブラウザーが起動中の場合、インストールを続行する前に実行中のすべてのブラウザー インスタンスを閉じるよう求める確認ダイアログが表示されます。**[OK]** をクリックして続行します。

![実行中のブラウザー インスタンスを閉じる確認ダイアログ](/static/img/common-getting-started-ext-chrome-confirm-close.png)

ブラウザーが起動していない場合は、インストールが自動的に進行し、完了メッセージが表示されます。**[OK]** をクリックして完了します。

**Chrome で拡張機能を有効にする**

Chrome を再起動します。拡張機能を有効にするよう求める通知ポップアップが表示されます。**[拡張機能を有効にする]** をクリックして有効化します。

![Chrome を再起動後に拡張機能を有効にする](/static/img/common-getting-started-ext-chrome-enable-popup.png)

または、[拡張機能] に移動して、トグル ボタンを使用して拡張機能をオンにすることもできます。

![Chrome の拡張機能トグルをオンにする](/static/img/common-getting-started-ext-chrome-enable-toggle.png)

トグルが有効になると、akaBot はブラウザーと連携して自動化アクティビティを実行できるようになります。

### 1.3 Microsoft Edge 向け akaBot 拡張機能のインストール

**akaBot Studio からインストールを起動する**
* akaBot Studio を開きます。
* Studio サイドバーで **[オプション] > [拡張機能]** に移動します。
* **[Edge]** セクションで **[インストール]** をクリックします。

![akaBot Studio からの Edge 拡張機能のインストール](/static/img/common-getting-started-ext-edge-install.png)

**[インストール]** をクリックすると、実行中のブラウザー インスタンスが確認されます。ブラウザーが起動中の場合、インストールを続行する前に実行中のすべてのブラウザー インスタンスを閉じるよう求める確認ダイアログが表示されます。**[OK]** をクリックして続行します。

![実行中の Edge インスタンスを閉じる確認ダイアログ](/static/img/common-getting-started-ext-edge-confirm-close.png)

ブラウザーが起動していない場合は、インストールが自動的に進行し、完了メッセージが表示されます。**[OK]** をクリックして完了します。

**Edge で拡張機能を有効にする**

Edge を再起動します。拡張機能を有効にするよう求める通知ポップアップが表示されます。**[拡張機能をオンにする]** をクリックして有効化します。

![Edge を再起動後に拡張機能を有効にする](/static/img/common-getting-started-ext-edge-enable-popup.png)

または、[拡張機能] に移動して、トグル ボタンを使用して拡張機能をオンにすることもできます。

![Edge の拡張機能トグルをオンにする](/static/img/common-getting-started-ext-edge-enable-toggle.png)

トグルが有効になると、akaBot はブラウザーと連携して自動化アクティビティを実行できるようになります。

### 1.4 Firefox 向け akaBot 拡張機能のインストール

**akaBot Studio からインストールを起動する**
* akaBot Studio を開きます。
* Studio サイドバーで **[オプション] > [拡張機能]** に移動します。
* **[Firefox]** セクションで **[インストール]** をクリックします。

![akaBot Studio からの Firefox 拡張機能のインストール](/static/img/common-getting-started-ext-firefox-install.png)

**[インストール]** をクリックすると、実行中のブラウザー インスタンスが確認されます。ブラウザーが起動中の場合、インストールを続行する前に実行中のすべてのブラウザー インスタンスを閉じるよう求める確認ダイアログが表示されます。**[OK]** をクリックして続行します。

ブラウザーが起動していない場合は、インストールが自動的に進行し、完了メッセージが表示されます。**[OK]** をクリックして完了します。

**Firefox で拡張機能を有効にする**
* Firefox を再起動します。拡張機能を有効にするよう求める通知ポップアップが表示されます。**[拡張機能をオンにする]** をクリックして有効化します。
* または、[拡張機能] に移動して、トグル ボタンを使用して拡張機能をオンにすることもできます。
* トグルが有効になると、akaBot はブラウザーと連携して自動化アクティビティを実行できるようになります。

---

## 2. セレクターについて

**セレクター**は、ワークフローの実行時に akaBot が画面上の特定の要素 (ボタン、入力ボックス、リンクなど) を見つける方法を定義します。**[画面上で指定]** を使用してターゲット要素を選択すると、**[選択オプション]** ウィンドウがその要素に対して以下のセレクター タイプを 1 つ以上生成します。各タイプには有効/無効のチェックボックスと、要素の一致精度を制御する **精度スライダー** (0.0 → 1.0) があります。

| セレクター タイプ | 仕組み | 使用場面 |
| :--- | :--- | :--- |
| **Strict セレクター** | 正確な技術属性 (ID、クラス、タグなど) を使用して要素を照合します。要素とその親要素の属性を記述した XML フラグメントです。 | ページ構造が安定しており、要素に信頼性の高い一意の属性がある場合に最適です。最速かつ最も精密ですが、基になる属性が変更されると機能しなくなります。 |
| **Fuzzy セレクター** | 属性に対する類似スコアを使用して要素を照合し、完全一致ではなく部分一致やワイルドカード一致を可能にします。 | 属性が部分的に動的な場合 (セッションごとに少し変化する ID など) に最適です。Strict より柔軟ですが、精度はやや低くなります。 |
| **Image セレクター** | 基になる属性ではなく、要素のスクリーンショット (base64 形式) を使用して要素を視覚的に照合します。 | ターゲットにする信頼性の高い属性がない場合、または画像/キャンバス/仮想化 UI 内にある要素に最適です。画面上の要素が毎回同じように表示されることが前提です。 |

> [!TIP]
> 生成された Strict または Fuzzy セレクターに動的な値 (実行ごとに変わる ID など) が含まれている場合は、**プロパティ** パネルで手動編集し、動的な部分をワイルドカード (`*`) に置き換えることができます。

---

## 3. サンプル ワークフロー

この例では、公開デモサイト **[saucedemo.com](https://www.saucedemo.com/)** を使用してシンプルなエンドツーエンドのワークフローを構築します。ログイン、商品をカートに追加、チェックアウトの完了を行います。

### 3.1 前提条件

* akaBot Studio がインストールされ、akaBot Web 拡張機能がインストールおよび有効化されていること (セクション 1 を参照)。
* 対象 URL: `https://www.saucedemo.com/`
* ログイン資格情報: saucedemo.com のログイン ページに表示されているデモ ユーザー名 (例: `standard_user`) とパスワード `secret_sauce` を使用します。akaBot のアクティビティ プロパティにこれらの値を入力する際は、ダブル クォートで囲んでください (`"standard_user"`、`"secret_sauce"`)。

### 3.2 手順

1. akaBot Studio を開き、新しい**プロセス**を作成します。

   ![akaBot Studio で新しいプロセスを作成する](/static/img/common-getting-started-wf-01-new-process.png)

2. akaBot Common アクティビティ パッケージをインストールします。ワークフロー エディターで **[ホーム]** タブの **[パッケージ マネージャー]** をクリックします。**[すべてのパッケージ]** タブを選択し、一覧から **RCA.Activities.Common** を見つけて、利用可能な最新バージョン (**4.8.0.1** 以降) を選択して **[保存]** をクリックします。インストール後、Common アクティビティ (Open Browser、Type Into、Click など) がツールボックスの **[Common] > [Browser]** に表示されます。

   ![パッケージ マネージャーで RCA.Activities.Common をインストールする](/static/img/common-getting-started-wf-02-install-common-package.png)

3. **Sequence** コンテナーを**ワークフロー デザイナー**にドラッグします。
4. [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) アクティビティを **Sequence** コンテナー内にドラッグします。右側の **プロパティ** パネルの **[入力]** セクションで、**URL** フィールドに `"https://www.saucedemo.com/"` (ダブル クォートを含む) を設定し、**ブラウザーの種類** ドロップダウンから **Chrome** を選択します。

   ![Open Browser アクティビティの設定](/static/img/common-getting-started-wf-03-open-browser.png)

5. [Type Into](/docs/activities/common/latest/element/type-into.md) アクティビティを **Open Browser** アクティビティの **Do** コンテナー内にドラッグします。**[画面上で指定]** をクリックすると akaBot Studio ウィンドウが最小化され、ブラウザーが前面に表示されます。**ユーザー名**フィールドの上にカーソルを合わせて赤いボーダーでハイライトされたら、左クリックして選択します。表示される **[選択オプション]** ウィンドウでデフォルト設定 (Strict、Fuzzy、Image セレクターがすべて有効) のまま **[確認]** をクリックします。**プロパティ** パネルの **[入力]** セクションで、**テキスト** フィールドに `"standard_user"` (ダブル クォートを含む) を設定します。

   ![ユーザー名フィールドに Type Into を設定する](/static/img/common-getting-started-wf-04-type-username.png)

6. **すぐ下に、同じ Do ブロック内に**別の **Type Into** アクティビティをドラッグします。**[画面上で指定]** をクリックして同様に **パスワード**フィールドを選択します。**プロパティ** パネルで、**テキスト** フィールドに `"secret_sauce"` (ダブル クォートを含む) を設定します。

   ![パスワード フィールドに Type Into を設定する](/static/img/common-getting-started-wf-05-type-password.png)

7. [Click](/docs/activities/common/latest/element/click.md) アクティビティをその下 (Do ブロック内) にドラッグします。**[画面上で指定]** をクリックして、**ログイン**ボタンをクリックします。

   ![ログイン ボタンの Click を設定する](/static/img/common-getting-started-wf-06-click-login.png)

8. 商品をカートに追加するために、その下に別の **Click** アクティビティをドラッグします。**[画面上で指定]** をクリックして、任意の商品タイルの **[カートに追加]** ボタンをクリックします。

   ![カートに追加の Click を設定する](/static/img/common-getting-started-wf-07-add-to-cart.png)

9. カートを開くために、その下に別の **Click** アクティビティをドラッグします。**[画面上で指定]** をクリックして、右上のカート アイコンをクリックします。

   ![カート アイコンの Click を設定する](/static/img/common-getting-started-wf-08-open-cart.png)

10. チェックアウトに進むために、その下に別の **Click** アクティビティをドラッグします。**[画面上で指定]** をクリックして、**[チェックアウト]** ボタンをクリックします。

    ![チェックアウト ボタンの Click を設定する](/static/img/common-getting-started-wf-09-checkout.png)

11. その下に **Type Into** アクティビティをドラッグします。**[画面上で指定]** をクリックして**名 (First Name)** フィールドを選択し、**テキスト**に `"Tom"` (またはサンプルの名前、ダブル クォートを含む) を設定します。

    ![名フィールドに Type Into を設定する](/static/img/common-getting-started-wf-10-first-name.png)

12. その下に別の **Type Into** アクティビティをドラッグします。**[画面上で指定]** をクリックして**姓 (Last Name)** フィールドを選択し、**テキスト**に `"Smith"` (またはサンプルの名前、ダブル クォートを含む) を設定します。

    ![姓フィールドに Type Into を設定する](/static/img/common-getting-started-wf-11-last-name.png)

13. その下に **Type Into** アクティビティをドラッグします。**[画面上で指定]** をクリックして**郵便番号 (Zip/Postal Code)** フィールドを選択し、**テキスト**に `"5000"` (またはサンプルの値、ダブル クォートを含む) を設定します。

    ![郵便番号フィールドに Type Into を設定する](/static/img/common-getting-started-wf-12-zip-code.png)

14. その下に **Click** アクティビティをドラッグします。**[画面上で指定]** をクリックして、**[続行]** ボタンを選択してクリックします。

    ![続行ボタンの Click を設定する](/static/img/common-getting-started-wf-13-continue.png)

15. その下に **Click** アクティビティをドラッグします。**[画面上で指定]** をクリックして、**[完了]** ボタンを選択してクリックします。

    ![完了ボタンの Click を設定する](/static/img/common-getting-started-wf-14-finish.png)

16. プロセスを保存します (**[ファイル] > [保存]**、または `Ctrl + S`)。**[ホーム]** タブの **[スタート]** をクリックして実行します。ブラウザーが saucedemo.com を開き、デモ資格情報でログインして商品をカートに追加し、チェックアウトを完了することを確認します。最終ページに「Thank you for your order!」と表示されるはずです。完成したワークフロー構成を以下に示します。

    ![ログインからチェックアウトまでの完成ワークフロー構成](/static/img/common-getting-started-wf-15-run-result.png)

---

## 次のステップ

* [Element](/docs/activities/common/latest/element/click.md) アクティビティ グループ (Click、Type Into、Get Text、Hover、Select Item など) でさらに多くの Common アクティビティを確認できます。
* [テーブル抽出 (Table Extraction)](/docs/activities/common/latest/user-guide/table-extraction-guide.md) アクティビティを使用して、テーブルから構造化データを抽出する方法を学びます。
