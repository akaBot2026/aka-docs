---
id: operator-types
title: "プロセス設計時の演算子の種類"
sidebar_label: "プロセス設計時の演算子の種類"
sidebar_position: 9
displayed_sidebar: collaborationSidebar
---

# プロセス設計時の演算子の種類

akaBot Center の条件式は、ゲートウェイ フロー、エスカレーション ルール、ループ条件、および変数タスク式で使用され、プロセス変数を評価し、実行パスを決定します。これらの式は、2 つの値を比較する比較演算子と、複数の比較を 1 つのブール値に結合する論理演算子の組み合わせを使用して構築されます。利用可能な演算子の完全なセットを理解することは、正しく、読みやすく、保守しやすい条件式を作成するために不可欠です。

akaBot Center の条件式の演算子は、`${variableName} <operator> <value>`という単純な構文に従います。わかりやすくするために、文字列値は一重引用符で囲み、日付値は`date()`ヘルパー関数を使用する必要があります。特に同じ式内で AND 論理演算子と OR 論理演算子を混合する場合、ネストされた式を括弧を使用してグループ化し、評価順序を制御できます。

式は実行時に、インスタンス内のその時点でのプロセス変数の実際の値を使用して評価されます。変数が設定されておらず、その値が null の場合、null 以外のオペランドを期待する比較演算子は、エラーをスローせずに false と評価します。設計者は、変数タスクを介してデフォルト値を指定するか、null チェック ブランチを追加することにより、null の場合を常に考慮する必要があります。

## 比較演算子

| オペレーター | シンボル | 説明 | 例 |
|---|---|---|---|
| 等しい | `==` | 両方の値が等しい場合は True | `${status} == 'Approved'` |
| 等しくない | `!=` | 値が異なる場合は True | `${status} != 'Rejected'` |
| より大きい | `>` | 左の値が大きい場合は True | `${amount} > 1000` |
| 以上 | `>=` | 左の値が大きいか等しい場合は True | `${amount} >= 1000` |
| 以下 | `<` | 左の値が小さい場合は True | `${retryCount} < 3` |
| 以下 | `<=` | 左の値が小さいか等しい場合は True | `${score} <= 50` |
| 含まれています | `contains(a, b)` | 文字列 a に部分文字列 b が含まれる場合は true | `contains(${email}, '@company.com')` |
| で始まる | `startsWith(a, b)` | 文字列 a が b で始まる場合は True | `startsWith(${code}, 'INV-')` |
| で終わる | `endsWith(a, b)` | 文字列 a が b で終わる場合は true | `endsWith(${filename}, '.pdf')` |
| ヌルです | `isNull(a)` | 変数が null または設定されていない場合は True | `isNull(${approvalDate})` |
| NULL ではありません | `isNotNull(a)` | 変数に値がある場合は True | `isNotNull(${approvalDate})` |
| リスト内 | `in(a, [b,c,d])` | 値 a が指定されたリストにある場合は True | `in(${country}, ['VN','SG','TH'])` |

## 論理演算子

| オペレーター | シンボル | 説明 | 例 |
|---|---|---|---|
| そして | `&&` | すべての組み合わせ条件が true の場合は true | `${amount} > 1000 && ${status} == 'Pending'` |
| または | `\|\|` | 少なくとも 1 つの条件が true の場合は true | `${優先度} == '高' \|\| ${vip} == true` |
| そうではない | `!` | 条件の結果を反転します | `!isNull(${referenceId})` |

## 式の例

```javascript
// Route to senior approver if amount exceeds threshold or requester is flagged
${invoiceAmount} > 50000 || ${requesterFlag} == 'ESCALATE'

// Proceed to payment only if all three checks pass
${creditCheckPassed} == true && ${compliancePassed} == true && ${duplicateCheckPassed} == true

// Loop condition: repeat until all required fields are filled
isNull(${taxCode}) || isNull(${bankAccount})

// Case-insensitive status check using contains
contains(toUpperCase(${statusCode}), 'APPROVED')
```

## 条件の書き方のヒント

- 予期しない null 評価を避けるために、変数は常にデフォルト値で初期化してください。
- 優先順位を明確にするために括弧を使用します:`(${a} > 0 && ${b} == 'X') || ${c} == true`。
- 保存する前に、ゲートウェイ フロー プロパティ パネルで **Expression Tester** を使用して式をテストします。
- 複雑な複数分岐ロジックの場合は、変数タスクを使用して単一の派生変数を計算し、その変数の値に基づいて分岐することを検討してください。
