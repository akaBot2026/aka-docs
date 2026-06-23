---
id: form-control
title: "フォームコントロール"
sidebar_label: "フォームコントロール"
sidebar_position: 2
description: "akaBot Form Builder のコンポーネント設定ウィザードのタブとプロパティ。"
displayed_sidebar: activitiesSidebar
---

# フォームコントロール

Form Builder エディタでレイアウトを設計する際、各コンポーネントの表示、動作、データマッピング、およびバリデーションルールをカスタマイズできます。

キャンバス上のコンポーネントをダブルクリックすると、設定ウィザードが開き、主に次の 6 つのタブが表示されます: **Display**, **Data**, **Validation**, **Field Key**, **Conditional**, **Logic**。

---

## **概要**

| ウィザードタブ | 説明 | 特記事項 |
| --- | --- | --- |
| **Display** | コンポーネントの見た目とレイアウトを設定します。 | Label に入力した値が Field Key タブの Property Name に初期設定されます。 |
| **Data** | デフォルト値、選択肢、配列データなどを設定します。 | 複数値を持つコンポーネント（Selectboxes など）はここで設定します。 |
| **Validation** | 入力検証ルールを設定します。 | なし |
| **Field Key** | ワークフローで参照するプロパティ名を設定します。 | Label が既定値として渡されます。 |
| **Conditional** | 表示/非表示などの条件を設定します。 | JavaScript や JSONLogic を使った高度な条件も設定可能です。 |
| **Logic** | トリガーに応じてプロパティやスタイルを動的に変更するロジックを設定します。 | なし |

---

## **1. Display**

Display タブでは、コンポーネントのラベル、プレースホルダ、ツールチップ、表示マスク、初期フォーカス、無効化などの見た目と振る舞いを設定できます。

主なプロパティ:

* Label - コンポーネントのタイトル
* Placeholder - 入力が空のときに表示されるテキスト
* Description - 入力欄の下に表示される補足テキスト
* Tooltip - ラベル横に表示される説明アイコンのテキスト
* Widget - レンダリングスタイル（例: Input Field, Calendar）
* Hidden / Disabled - 初期表示を非表示にする / 無効化する
* Initial Focus - フォーム読み込み時に自動フォーカス

![display.png](/static/img/display.png)

---

## **2. Data**

Data タブでは、デフォルト値、複数値の扱い、入力フォーマット、計算値やカスタムスクリプト等を設定します。

スクリプト内で使える変数例:

* `form`, `submission`, `data`, `row`, `component`, `instance`, `value`, `moment`, `_`, `utils`, `util`

カスタムスクリプトは JavaScript または JSONLogic で記述できます。

![data1.png](/static/img/data1.png)

---

## **3. Validation**

Validation タブではクライアント側のバリデーション動作を設定します。必須、最小/最大長、正規表現、カスタムエラーメッセージなどを指定できます。

![validation.png](/static/img/validation.png)

---

## **4. Field Key**

Field Key タブは、ワークフローがコンポーネントを識別するための Property Name を設定する場所です。ここで設定したキーを使って `Get Element Value` や `Set Element Value` アクティビティで操作します。

![field-key.png](/static/img/field-key.png)

---

## **5. Conditional**

条件設定により、別フィールドの値に応じて対象コンポーネントの表示/非表示を制御できます。簡易条件のほか、カスタム JavaScript / JSONLogic 条件も設定可能です。

![conditional.png](/static/img/conditional.png)

---

## **6. Logic**

Logic タブでは、トリガーに基づいてプロパティや値を動的に変更する高度なルールを作成できます。**+ Add Logic** を押して新しいルールを追加してください。

![logic.png](/static/img/logic.png)

