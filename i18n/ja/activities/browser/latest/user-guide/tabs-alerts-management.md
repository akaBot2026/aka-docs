---
id: tabs-alerts-management
title: "JavaScript アラートの処理"
sidebar_label: "JavaScript アラートの処理"
sidebar_position: 4
description: "akaBot のブラウザ アクティビティを使用して、実際のテスト Web サイト上の JavaScript ポップアップ/アラートを処理する方法を説明する実践ガイドです。"
displayed_sidebar: activitiesSidebar
---

# JavaScript アラートの処理

> 実際のテスト Web サイト上で、JavaScript のブラウザ アラートを処理する方法を説明する実践ガイドです。

このガイドでは、実際のテスト用サンドボックス `https://the-internet.herokuapp.com/javascript_alerts` を使用して、ブラウザのポップアップ (JS アラート) を自動化する方法を説明します。

[ブラウザを開く (Open Browser)](../activities/open-browser.md)、[クリック (Click)](../activities/click.md)、[アラートを処理する (Handle Alert)](../activities/handle-alert.md)、[テキストの取得 (Get Text)](../activities/get-text.md) などのアクティビティを使用します。

---

## 学習内容

* DOM の操作をブロックする JavaScript の `alert()` ポップアップを検出して承認する方法。
* アラートを閉じた後に、結果メッセージを抽出する方法。
* **Message Box** を使用して、自動化が正しく動作したことを確認する方法。

---

## 手順

1. akaBot Studio を開き、新しい**プロセス (Process)** を作成します。
2. [ブラウザを開く (Open Browser)](../activities/open-browser.md) アクティビティを、メインの Sequence の内側にドラッグします。
   *「プロパティ (Properties)」パネルの **Input** で、**Url** フィールドに `"https://the-internet.herokuapp.com/javascript_alerts"` を設定します。
   * **Browser Type** を `Chrome` に設定します。
3. [クリック (Click)](../activities/click.md) アクティビティを、**Open Browser** の **Do** コンテナーの内側にドラッグします。
   * **ターゲット要素を選択 (Pick target element)** をクリックし、Web ページ上の **Click for JS Alert** というボタンを選択します。

![js-alerts](/static/img/js-alerts.png)

4. [アラートを処理する (Handle Alert)](../activities/handle-alert.md) アクティビティを、**Click** アクティビティのすぐ下にドラッグします。
   * アクティビティ ブロックまたは「プロパティ (Properties)」パネルの **Handle Option** ドロップダウン リストで `ACCEPT` を選択します。
5. [テキストの取得 (Get Text)](../activities/get-text.md) アクティビティを **Handle Alert** の下にドラッグします。
   * **ターゲット要素を選択 (Pick target element)** をクリックし、ボタンの下にある結果メッセージのブロック (*"You successfully clicked an alert"* と表示されるはずです) を選択します。
   * 結果を変数 `alertResult` に保存します (**Result** フィールドで `Ctrl + K` を使用します)。
6. **Message Box** アクティビティを **Get Text** アクティビティの下に配置し、`alertResult` 変数の内容を表示します。
7. プロセスを実行し、ロボットがボタンを正常にクリックし、ポップアップの **OK** をクリックして、結果のテキストを抽出して表示することを確認します。

![tabs-alerts.png](/static/img/tabs-alerts.png)
