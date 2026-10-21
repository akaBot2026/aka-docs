---
id: google-search
title: "Google 検索のユースケース"
sidebar_label: "Google 検索のユースケース"
sidebar_position: 3
description: "ブラウザ アクティビティを使用して Google 検索を実行し、検索結果を取得する手順を段階的に説明するチュートリアルです。"
displayed_sidebar: activitiesSidebar
---

# Google 検索のユースケース

> ブラウザ アクティビティを使用して Google 検索を実行し、検索結果を取得する手順を段階的に説明するチュートリアルです。

このガイドでは、**Google 検索**を題材に、Web 自動化の実践的な演習を行います。Google にアクセスしてキーワードを検索し、検索結果の統計情報を抽出して、メッセージ ボックスのポップアップに表示するワークフローを作成します。

**RCA.Activities.Browser** パッケージの [ブラウザを開く (Open Browser)](../activities/open-browser.md)、[入力してください (Type Into)](../activities/type-into.md)、[ホットキーを送信する (Send Hot Keys)](../activities/send-hot-keys.md)、[クリック (Click)](../activities/click.md)、[テキストの取得 (Get Text)](../activities/get-text.md) の各アクティビティに加えて、Core パッケージの **Delay** アクティビティと **Message Box** アクティビティを使用します。

---

## レッスンの概要

* **ユースケース: Google を検索する** – `https://www.google.com/` での標準的な検索ワークフローを設計します。

---

## セクション: ユースケース – Google を検索する

このセクションでは、Google で `"akaBot"` を検索し、検索結果ページのテキストを抽出して表示するプロセスの作成手順を説明します。

### 前提条件

* 対象 URL: `https://www.google.com/`
* 入力キーワード: `akaBot`
* 出力: 検索結果の統計情報のテキストをポップアップで表示します。

### 手順

1. akaBot Studio を開き、新しい**プロセス (Process)** を作成します。
2. **Sequence** コンテナーを**ワークフロー デザイナー (Workflow Designer)** にドラッグします。
3. [ブラウザを開く (Open Browser)](../activities/open-browser.md) アクティビティを **Sequence** コンテナーの内側にドラッグします。
   *「プロパティ (Properties)」パネルの **Input** で、**Url** フィールドに `"https://www.google.com/"` を設定します。
   * **Browser Type** のドロップダウン リストで `Chrome` を選択します。
4. [入力してください (Type Into)](../activities/type-into.md) アクティビティを、**Open Browser** アクティビティの **Do** コンテナーの内側にドラッグします。
   * アクティビティ ブロックの **ターゲット要素を選択 (Pick target element)** リンクをクリックします。
   * ブラウザ上の Google の検索入力バーをクリックします。
   *「プロパティ (Properties)」パネルの **Input** で、**Text** フィールドに `"akaBot"` を設定します。

![pick-target-element-browser](/static/img/pick-target-element-browser.png)

   **注**: Google などの検索エンジンで自動操作を速すぎる間隔で実行すると、ボット確認画面 (CAPTCHA) が表示される場合があります。これを防ぎ、人間の自然な操作に近づけるために、**Type Into** アクティビティの直後に **Delay** アクティビティ (Core ツールボックス内) をドラッグします。「プロパティ (Properties)」パネルの **Duration** に、適切な待機時間 (例: 2 秒の場合は `00:00:02`) を設定すると、次のアクションの実行前に待機します。

5. [ホットキーを送信する (Send Hot Keys)](../activities/send-hot-keys.md) アクティビティを、**Delay** アクティビティ (または **Type Into** アクティビティ) の下にドラッグします。
   * **ターゲット要素を選択 (Pick target element)** をクリックし、Google の検索入力バーをもう一度選択します。
   * アクティビティ デザイナー、または「プロパティ (Properties)」パネルの **Special Key** ドロップダウン リストで `KEY_ENTER` を選択し、検索クエリを実行します。
6. [クリック (Click)](../activities/click.md) アクティビティを **Send Hot Keys** アクティビティの下にドラッグします。
   * **ターゲット要素を選択 (Pick target element)** をクリックし、Google の検索結果ページの **ツール (Tools)** ボタンを選択します。
   *「プロパティ (Properties)」パネルで、**Click Type** を `CLICK_SINGLE`、**Mouse Button** を `MOUSE_LEFT` に設定します。この操作により「ツール」ボタンがクリックされて検索オプションが展開され、検索結果の統計情報 (検索結果の件数や検索にかかった時間など) が表示されます。

![click-browser](/static/img/click-browser.png)

7. [テキストの取得 (Get Text)](../activities/get-text.md) アクティビティを **Click** アクティビティの下にドラッグします。
   * **ターゲット要素を選択 (Pick target element)** をクリックし、検索結果の統計情報のテキスト (例: `"About 49,500 results (0.24s)"`) を選択します。
   *「プロパティ (Properties)」パネルの **Output** で、**Result** フィールドにカーソルを置いて `Ctrl + K` を押し、`resultsText` という名前の新しい文字列変数を作成します。

![get-text-browser](/static/img/get-text-browser.png)

8. **Message Box** アクティビティ (Core ツールボックス内) を **Get Text** アクティビティの下にドラッグします。
   *「プロパティ (Properties)」パネルで、**Text** フィールドに `resultsText` を設定します。
9. プロセスを実行し、ブラウザが起動して Google で検索が行われ、ツール ボタンがクリックされて、検索結果の統計情報のテキストがポップアップに表示されることを確認します。

![google-usecase-browser](/static/img/google-usecase-browser.png)
