---
id: working-with-web-elements
title: "Web 要素の操作"
sidebar_label: "Web 要素の操作"
sidebar_position: 2
description: "akaBot Studio で Web 要素をキャプチャ、識別し、安定して動作させる方法を説明します。"
displayed_sidebar: activitiesSidebar
---

# Web 要素の操作

ほとんどのブラウザ アクティビティ (クリック、入力、ホバーなど) は、Web ページ上の Web 要素を操作します。このガイドでは、ターゲット要素の識別方法、セレクターの生成方法、および信頼性の高い自動化の作成方法を説明します。

> Web 要素を操作する前に、ブラウザ セッションがどのように作成されるかを理解しておいてください。**[ブラウザ ワークフロー](./browser-workflow.md)** を参照してください。

---

## Web 要素ワークフローの例
次の図は、ブラウザ コンテナー内で Web 要素を操作する一般的なワークフローの構造を示しています。

```
Open Browser
   │
   └── Do
         ├── Wait Page Load Complete
         ├── Click 
         ├── Type Into 
         └── Send Hot Keys 
```

---

## ターゲット要素の選択

**ターゲット要素を選択 (Pick target element)** ヘルパーを使用すると、画面上から Web ページ内の要素を直接選択できます。

1. **ターゲット要素を選択 (Pick target element)** をクリックします。
2. ターゲット要素にマウス ポインターを合わせます。
3. 要素をクリックします。
4. akaBot Studio がセレクターを自動的に生成します。

**重要**
> Web 要素を選択する前に、akaBot Web 拡張機能をインストールする必要があります。
> 拡張機能がインストールされていない場合、akaBot Studio はブラウザから要素を検出またはキャプチャできません。

---

## 要素の再選択

Web ページのレイアウトが変更された場合や、誤って別の要素を選択してしまった場合は、次の手順で再選択します。
* アクティビティ本文内の **ターゲット要素を選択 (Pick target element)** リンクをもう一度クリックします。
* Web ページ上で正しい要素を選択し直します。akaBot Studio は、以前のセレクターを新しいセレクターで上書きします。

---

## セレクターとセレクター エディター

ターゲット要素を選択すると、akaBot Studio はセレクターを自動的に生成します。生成されたセレクターは、セレクター エディターで確認および変更できます。

### セレクター エディターの構成:
* **属性チェックリスト**: 選択した要素が持つ属性 (例: `id`、`class`、`aaname`、`tag`) のチェック ボックスです。
* **セレクターの XML クエリ**: 実行時に要素を検索するために使用されるクエリです。

### 主なセレクター属性:
* **`tag`**: HTML 要素の種類です (例: `INPUT`、`BUTTON`、`A`、`DIV`)。
* **`id`**: 要素の一意の識別子です。
* **`class`**: 要素のスタイル用クラス名です。
* **`aaname`**: 表示されている内部テキスト、またはアクセシビリティ上の名前です (ボタンやテキスト リンクに最適です)。

---

## 安定したセレクターの設計

Web 要素の中には、ページを読み込むたびに値が変わる動的な属性を使用しているものがあります。これらの属性を使用すると実行時にセレクターが失敗する可能性があるため、使用しないでください。

### セレクターの安定性を高めるベスト プラクティス:

1. **不安定な属性の選択を解除する**: セレクター エディターを開き、動的な属性、自動生成される属性、一時的な属性 (長い数値の ID や、一時的な状態を表すクラスなど) のチェック ボックスをオフにします。
2. **安定した属性を選択する**: 変化しない信頼性の高い属性にチェックを入れます。アクセシビリティ上の名前 (`aaname`) や要素の `tag` を、変化しないクラスと組み合わせると、堅牢なセレクターになります。
3. **ワイルドカードを使用する**:
   * アスタリスク (`*`) は、0 文字以上の任意の文字列を置き換えます。たとえば、`id='sm-12345'` を `id='sm-*'` に変更すると、`sm-` で始まる自動生成された任意の接尾辞に一致します。
   * 疑問符 (`?`) は、任意の 1 文字を置き換えます。

---

## 関連情報

### ブラウザ アクティビティ
* **[クリック (Click)](../activities/click.md)**
* **[ホバー (Hover)](../activities/hover.md)**
* **[入力してください (Type Into)](../activities/type-into.md)**
* **[ホットキーを送信する (Send Hot Keys)](../activities/send-hot-keys.md)**
* **[チェックを入れる/チェックを外す (Check)](../activities/check.md)**
* **[項目の選択 (Select Item)](../activities/select-item.md)**
* **[複数の項目を選択 (Select Multiple Items)](../activities/select-multiple.md)**
* **[テキストの取得 (Get Text)](../activities/get-text.md)**
* **[Web属性の取得 (Get Web Attribute)](../activities/get-web-attribute.md)**
* **[要素が存在するのを待つ (Wait Element Exist)](../activities/wait-element-exist.md)**
* **[要素が存在します (Element Exist)](../activities/element-exist.md)**
* **[待機 Web 属性 (Wait Web Attribute)](../activities/wait-web-attribute.md)**
* **[待機要素が消える (Wait Element Vanishes)](../activities/wait-element-vanish.md)**
* **[データの抽出 (Extract Data)](../activities/extract-data.md)**
* **[構造化データの抽出 (Extract Structured Data)](../activities/extract-structured-data.md)**

### チュートリアル
* **[Google 検索のユースケース](./google-search.md)**
* **[JavaScript アラートの処理](./tabs-alerts-management.md)**
