---
id: kill-process
title: "プロセスの強制終了"
sidebar_label: "プロセスの強制終了"
sidebar_position: 11
description: "Kill Process アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# プロセスの強制終了

RCA.Activities.Common.KillProcess

## **説明**

Kill Process アクティビティは、指定した Windows プロセスを終了します。Process オブジェクトまたはプロセス名で対象を指定できます。プロセス名を使用する場合、ユーザー、セッション、またはデスクトップで終了対象を絞り込むこともできます。

![image-kill-process.png](/static/img/image-kill-process.png)

（\*必須）

## **アクティビティ本体内**

* **Process (Process)** - 終了するプロセスを表す Process 型オブジェクト。
* **Process Name (String)** - 終了するプロセスの名前。`.exe` 拡張子の有無にかかわらず入力できます。  
  例: `"notepad"` または `"notepad.exe"`

**注意:** **Process** または **Process Name** のいずれか一方は必ず指定する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - エラーが発生した場合に自動化を続行するかどうかを指定します。True または False の 2 つの値があります。True - アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。False（デフォルト）- プロセスの実行継続をブロックします。

**入力**

* **Apply On (KillProcessApplyOn)** - プロセス名を使用する場合の終了範囲を指定します。使用可能なオプション:
  * **All**（デフォルト）- ユーザー、セッション、デスクトップに関係なく、一致するプロセスを終了します。
  * **OnlyCurrentUser** - 現在のユーザーが所有するプロセスのみを終了します。
  * **OnlyCurrentSession** - 現在の Windows セッション内のプロセスのみを終了します。
  * **OnlyCurrentDesktop** - 現在のデスクトップで実行中のプロセスのみを終了します。
* **Process (Process)** - 終了するプロセスを表す Process 型オブジェクト。
* **Process Name (String)** - 終了するプロセスの名前。  
  例: `"chrome"`

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
* **公開 (チェックボックス)** - 公開する場合はチェックします。使用する前にデータ セキュリティ要件を必ず考慮してください。デフォルトは未チェックです。
