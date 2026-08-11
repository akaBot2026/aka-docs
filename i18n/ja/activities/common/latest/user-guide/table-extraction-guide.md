---
id: table-extraction-guide
title: "表の抽出 (Table Extraction)"
sidebar_label: "表の抽出"
sidebar_position: 1
description: "このドキュメントでは、Table Extractionアクティビティを使用するための完全なワークフローについて説明します。"
displayed_sidebar: activitiesSidebar
---

# 表の抽出（Table Extraction）の概要

> このドキュメントでは、**Table Extraction（表の抽出）** アクティビティを使用するための完全なワークフローについて説明します：ウィザードを開く、表を指定する、列を設定する、ページネーションを設定する、およびプロパティパネルで詳細なパラメーターを設定する手順が含まれます。

---

## 1. 概要

**Table Extraction** は、アプリケーションのUI（Webブラウザー、Windowsデスクトップ、Javaなど）から表形式のデータを抽出し、その結果を `DataTable` に保存するアクティビティです。

主な機能：

- 単一ページまたは**複数ページ**の表を抽出（次へ/ページネーションボタンを使用）。
- 各列のデータ型（`Text`、`Number`、`Boolean`）を設定可能。
- **行数**または**ページ数**による抽出の制限。

---

## 2. ワークフローにアクティビティを追加する

アクティビティを追加するには、以下の手順に従います：
**akaBot Studio** > **Toolbox（ツールボックス）** (検索: `Table Extraction`) > ワークフローに**ドラッグ＆ドロップ** > **「Open Table Extraction」** をクリックします。

![table-extraction.png](/static/img/table-extract-activity.png)

> [!IMPORTANT]
> **TargetElement** は必須の引数です。表が指定されていない場合、実行時に検証エラーが発生します。

---

## 3. 表抽出ツール（ウィザード）を開く

設定ウィザード（表抽出ツール）を開くには：

- アクティビティ本体にある **「Open Table Extraction」** ボタンをクリックします。

ウィザードは**Table Extraction Wizard**として開き、ターゲットアプリケーションを隠さないように**画面の上隅**に配置されます。このとき：

![table-extraction-wizard.png](/static/img/table-extraction-wizard.png)

- akaBot Studioはタスクバーに**最小化**されます。
- 「Indicate（指定）」をクリックする前に、**ターゲットアプリケーション（ブラウザー、デスクトップソフトウェアなど）に切り替える**必要があります。

---

## 4. ステップ 1 – 表要素を指定する

### 4.1. 「Indicate Table Element」をクリックする

ウィザードで、**「Indicate Table Element（表要素の指定）」** ボタンをクリックします。

- 画面を広く使えるようにウィザードが**最小化**されます。
- カーソルが**Inspect（検査）モード**になり、要素にカーソルを合わせるとハイライト表示されます。

### 4.2. 表要素を選択する

ターゲットアプリケーションの表要素にカーソルを移動してクリックします：

- **Web**: 表形式のデータまたは表のヘッダーを含む表をクリックします。
- **Windows デスクトップ / Java**: グリッドまたはテーブルコントロールをクリックします。

![indicate-table-element.png](/static/img/indicate-table-element.png)

## 5. ステップ 2 – 列の確認と設定

指定が成功すると、ウィザードに表から検出された**列のリスト**が表示されます：

| フィールド | 説明 |
| ---------------- | -------------------------------------------------------------------- |
| **IsSelected**   | 出力DataTableに列を含めるか、または除外するためのチェックボックス。 |
| **Column Name**  | 表のヘッダー（1行目）から読み取られた名前。名前は変更可能です。 |
| **Settings (⚙)**  | 表の列（データ型、プレビューデータ）を設定するための設定ボタン。 |

![table-extraction-wizard-indicate-element.png](/static/img/table-extraction-wizard-indicate-element.png)

### 5.1. 列の選択 / 選択解除

- 列のチェックボックスを**オフ（Uncheck）**にする → 出力DataTableから列が**選択解除**されます。
- 列を保持するには、チェックボックスを**オン（Check）**にします。

### 5.2. DataType（データ型）の設定

列の横にある **設定（⚙）** アイコンをクリックすると、詳細な設定パネルが開きます：

#### DataType = **Text** (デフォルト)

- 追加の設定は必要ありません。
- 値は `string` として保存されます。

#### DataType = **Number**

| パラメーター             | デフォルト | 説明                                                   |
| --------------------- | ------- | ------------------------------------------------------------- |
| `Decimal Separator`   | `.`     | 小数点として使用される文字（例：`.` または `,`）。       |
| `Thousands Separator` | `,`     | 千の位の区切り文字として使用される文字（例：`,` または `.`）。 |
| `Allow Null`          | `false` | 有効にした場合、パースに失敗した値は `null` として保存されます。   |
| `Default Value`       | `""`    | パースに失敗した場合の代替値（Allow Nullがオフの場合）。     |

#### DataType = **Boolean**

| パラメーター       | デフォルト          | 説明                                             |
| --------------- | ---------------- | ------------------------------------------------------- |
| `True Values`   | `true,yes,1,oke` | `true` と解釈されるカンマ区切りの値のリスト。  |
| `False Values`  | `false,no,0`     | `false` と解釈されるカンマ区切りの値のリスト。 |
| `Allow Null`    | `false`          | 値がいずれのエントリーにも一致しない場合に null を許可します。     |
| `Default Value` | `""`             | パースに失敗した場合の代替値。                      |

**パース失敗時の動作：**

| Allow Null | Default Value | 結果              |
| ---------- | ------------- | ------------------- |
| false      | _(空白)_     | 例外をスローします |
| false      | `0`           | `0` を使用します |
| true       | `null`        | `DBNull` を保存します |
| true       | `0`           | `0` を使用します |

> [!TIP]
> 確定する前に、ウィザードの **「Preview（プレビュー）」** ボタンをクリックすると、抽出されたすべてのデータが表形式で表示されます。

---

## 6. ステップ 3 – 次へボタン（ページネーション）の設定

**「Next Button（次へボタン）」** セクション（折りたたみ可能）では、「次のページ」ボタンを設定し、アクティビティが複数ページの表を自動的にページ送りしてすべての結果を結合できるようにします。

### 6.1. 「Indicate Next Link」をクリックする

ウィザードで **「Indicate Next Link（次へのリンクの指定）」** をクリックします。

- ウィザードが最小化されます。ターゲットアプリケーションのページネーションボタン（例：`>`、`Next`、`»`）をクリックします。
- システムは以下を生成します：
  - ボタンの **Strict Selector（厳密なセレクター）**。
  - ボタンの **Fuzzy Selector（あいまいなセレクター）**。
  - **Image Selector（画像セレクター）**（base64として保存されたボタンのスクリーンショット）。

![indicate-next-button.png](/static/img/indicate-next-button.png)

各セレクタータイプには、有効/無効を切り替えるための**チェックボックス**と、**Accuracy slider（精度スライダー）**（0.0 → 1.0、デフォルト `0.5`）があります。

> [!TIP]
> ページネーションボタンに毎ページ変化する動的な属性（例：動的ID）がある場合、ウィザードを閉じた後、プロパティパネルで生成されたStrictまたはFuzzyセレクターを手動で編集し、動的な部分をワイルドカード（`*`）に置き換えることができます。

### 6.2. ページネーションの停止条件

以下のいずれかの条件を満たすと、アクティビティは自動的にページネーションを停止します：

- 次へボタンが**見つからない**（`ElementNotFoundException`） → 正常終了。
- 次へボタンが**無効な状態（disabled）**（`disabled` 属性、クラスに `disabled` が含まれる、`aria-disabled=true`、または `aastate=unavailable`）。
- 新しいページのデータが前のページと**完全に一致する**（無限ループを防止）。
- 設定された**行数またはページ数の制限**に達した（以下のプロパティパネルの参照セクションを参照）。

---

## 7. 確定とウィザードの終了

設定が完了したら：

- **Confirm（確定）**: すべての設定（セレクター、列設定、抽出メタデータ）をアクティビティに保存して戻ります。ウィザードが閉じます。
- **Cancel（キャンセル）**: 変更を破棄してウィザードを終了します。既存の設定には影響しません。

> [!WARNING]
> **「Cancel（キャンセル）」** をクリックすると、ウィザードを開いてから行った**すべての変更が破棄**されます。必ず **「Confirm（確定）」** をクリックして保存してください。

---

## 8. プロパティパネル リファレンス

ウィザードを閉じた後、アクティビティの **Properties（プロパティ）** パネルを開き、追加の実行時パラメーターを設定します。

### 8.1. Input (入力) — 必須

| プロパティ        | 型     | 説明                                                                  |
| --------------- | -------- | ---------------------------------------------------------------------------- |
| `TargetElement` | `Target` | **[必須]** 表要素のセレクター。ウィザードによって自動的に入力されます。 |

### 8.2. Input (入力) — オプション

| プロパティ            | 型                  | デフォルト                       | 説明                                                                        |
| ------------------- | --------------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| `NextButtonTarget`  | `Target`              | _(空白)_                     | ページネーションボタンのセレクター。単一ページの表の場合は空白のままにします。 |
| `LimitExtractionTo` | `ExtractionLimitType` | `NoLimit`                     | 抽出制限のモード：`NoLimit`、`MaxRows`、または `MaxPages`。                        |
| `NumberOfItems`     | `Int32`               | `1000` (行) / `200` (ページ) | 抽出する最大行数または最大ページ数。`LimitExtractionTo ≠ NoLimit` の場合は**必須**です。 |
| `DelayBefore`       | `Int32` (ms)          | `200`                         | 実行開始前の待機時間（ミリ秒）。0以上である必要があります。 |
| `DelayAfter`        | `Int32` (ms)          | `300`                         | 実行完了後の待機時間（ミリ秒）。0以上である必要があります。 |
| `DelayBetweenPages` | `Int32` (ms)          | `0`                           | ページネーション時のページクリック間の待機時間。0以上である必要があります。 |
| `TimeoutMS`         | `Int32` (ms)          | `30000`                       | アクティビティ全体のタイムアウト。**3000ミリ秒以上である必要があります**。 |
| `ContinueOnError`   | `Boolean`             | `false`                       | `true` の場合、エラーはエラーログとして記録され、実行が継続されます。 |

### 8.3. Input / Output (入出力)

| プロパティ               | 型        | 説明                                                                                                  |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `DestinationDataTable` | `DataTable` | 結果を受け取るDataTable。既存のDataTableが渡された場合、新しい行はそれに**マージ**されます。 |

### 8.4. Input (入力) — 自動生成

| プロパティ          | 説明                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `ExtractMetadata` | 抽出構造（列名、属性、CSSセレクターなど）を記述するXMLメタデータ。ウィザードによって自動生成されます。 |
| `TableSettings`   | 表設定のXML構成（列の種類、データ型、名前、選択状態）。ウィザードによって自動生成されます。                  |

> [!CAUTION]
> 表構造の不一致という特定の問題を解決する場合（以下のトラブルシューティングセクションを参照）を除き、`ExtractMetadata` または `TableSettings` を手動で編集することは**お勧めしません**。誤った変更を行うと、抽出ロジックが壊れる可能性があります。

---

## 9. デフォルト値とバリデーションルール

### バリデーションエラー（ビルド / 実行時）

| 条件                                                 | エラーメッセージ                                                                                |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `TargetElement` が設定されていない                            | 必須入力の検証エラー                                                            |
| `LimitExtractionTo ≠ NoLimit` だが `NumberOfItems` が null の場合 | "抽出制限タイプが \{type\} に設定されている場合、項目数を指定してください" |
| `NumberOfItems ≤ 0`                                       | "値は0より大きくなければなりません"                                                       |
| `TimeoutMS < 3000`                                        | "TimeoutMSは3000以上でなければなりません"                                                           |
| `DelayBefore < 0`                                         | "DelayBeforeは0以上でなければなりません"                                                            |
| `DelayAfter < 0`                                          | "DelayAfterは0以上でなければなりません"                                                             |
| `DelayBetweenPages < 0`                                   | "DelayBetweenPagesは0以上でなければなりません"                                                      |

### 内部デフォルト値（未設定時）

| プロパティ            | 内部デフォルト値                              |
| ------------------- | --------------------------------------------- |
| `DelayBefore`       | `200 ms`                                      |
| `DelayAfter`        | `300 ms`                                      |
| `DelayBetweenPages` | `0 ms`                                        |
| `TimeoutMS`         | `30000 ms` (`Constants.TimeoutMS`)            |
| `LimitExtractionTo` | `NoLimit`                                     |
| `NumberOfItems`     | `1000` (MaxRowsモード) / `200` (MaxPagesモード) |

---
### 設計時と実行時の表構造の不一致

#### 問題点

Table Extractionアクティビティは、初期設定時に生成された基盤となるXMLメタデータに依存しています。ターゲットアプリケーションのレイアウトが変更された場合（列の並べ替え、名前変更、新しい列の挿入など）、事前設定されたセレクターやメタデータが、ライブDOM構造と一致しなくなります。

簡単に言えば、**アクティビティを設定した時（設計時：design time）**と**実際に自動化が実行される時（実行時：runtime）**の間で、表構造に変更があった場合に不一致が発生します。

**期待される構造（設計時）：**
![table-extract-design-time.png](/static/img/table-extract-design-time.png)

**実際の構造（実行時）：**
![table-extraction-runtime.png](/static/img/table-extraction-runtime.png)

この不一致により、抽出マッピングが壊れ、不完全なDataTableが生成されたり、実行時例外が発生したりします。

#### 解決策 — `TableSettings` から列定義をクリアする

最も安全な回避策は、`TableSettings` XMLから**すべての `<Column>` 子ノードを削除する**ことです。これにより、アクティビティは古くなった設計時の定義と照合しようとせず、実行時の実際の表が提供する列構造をそのまま受け入れるようになります。

**ステップバイステップの手順：**

1. アクティビティの **Properties（プロパティ）** パネルで、`TableSettings` プロパティを見つけます。
2. 式エディターボタン（`...`）をクリックして、生のXML値を開きます。
3. `<Table ...>` ルート要素を見つけます。以下のようになっています：

```xml
<Table>
  <Column Name='id' ReferenceIdx='0' DataType='Number' DecimalSeparator='.' ThousandsSeparator=',' AllowNull='false' DefaultValue='' />
  <Column Name='First Name' ReferenceIdx='1' DataType='Text' />
  <Column Name='Last Name' ReferenceIdx='2' DataType='Text' />
  <Column Name='Product Name' ReferenceIdx='3' DataType='Text' />
  <Column Name='Quantity' ReferenceIdx='4' DataType='Number' DecimalSeparator='.' ThousandsSeparator=',' AllowNull='false' DefaultValue='' />
  <Column Name='Price' ReferenceIdx='5' DataType='Number' DecimalSeparator='.' ThousandsSeparator=',' AllowNull='false' DefaultValue='' />
  <Column Name='Total' ReferenceIdx='6' DataType='Number' DecimalSeparator='.' ThousandsSeparator=',' AllowNull='false' DefaultValue='' />
</Table>
```

4. **すべての `<Column>...</Column>` 子ノードを削除**し、`<Table>` ルート要素のみを残します：

```xml
<Table>
</Table>
```

5. 変更を保存して、自動化を再度実行します。

---

## 10. 次のステップ

表の抽出が成功すると、データはメモリ上に `DataTable` 変数として保存されます。標準のデータ操作アクティビティを使用してこれを処理するか、直接ファイルに書き込むことができます：
- **[Write Range](../../../excel/latest/closed-xml/write-range.md)** (Excel) を使用して、DataTableをExcelスプレッドシートにエクスポートします。
- **[Write CSV File](../../../excel/latest/csv/write-csv-file.md)** を使用して、DataTableをCSVファイルにエクスポートします。
