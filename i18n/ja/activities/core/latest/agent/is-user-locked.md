---
id: is-user-locked
title: "ユーザーがロックされているか"
sidebar_label: "ユーザーがロックされているか"
sidebar_position: 2
description: "Is User Locked アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# ユーザーがロックされているか

RCA.Activities.Core.IsUserLocked

## **説明**

マシン上の Windows ユーザー セッションがロックされているかどうかを確認します。このアクティビティはローカル Agent のアンロック サービスを呼び出し、Boolean の結果を返します。

（\*必須）

## **アクティビティ本体内**

- **Username** – 確認する Windows ログオン名（例: `"DOMAIN\\user"`）。空の場合、現在のログオン ユーザーが使用されます。

![is-user-locked](/static/img/is-user-locked.png)

\* は必須フィールドを示します。

## **プロパティ**

**共通**

- **Continue On Error (Boolean)** - 現在のアクティビティが失敗した場合でも、残りのアクティビティの実行を続行するかどうかを指定します。ブール値（True、False）のみがサポートされます。
- **Timeout MS (Int32)** - エラーがスローされるまでにアクティビティの完了を待機する最大時間（ミリ秒単位）。タイムアウトに達すると、アクティビティは実行を停止します。デフォルト値は 30000（ミリ秒）です。`0` より大きい値である必要があります。

**入力**

- **Username (String)** - ユーザーの Windows ログオン名。空の場合、アクティビティは `WindowsIdentity.GetCurrent().Name` を使用します（フォールバック: `MachineName\UserName`）。

**その他**

- **公開 (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータ セキュリティを考慮してください。
- **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。

**出力**

- **Result (Boolean)** - ユーザー セッションがロックされている場合は `True`、ロックされていない場合は `False`。

## **例**

```text
Is User Locked
    Username = "CONTOSO\\rpa.user"
    Result   = isLocked
```

`isLocked` が `True` の場合、**Unlock User** を呼び出してセッションのロックを解除できます。
