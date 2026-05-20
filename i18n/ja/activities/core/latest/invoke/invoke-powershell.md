---
id: invoke-powershell
title: "PowerShellを呼び出す"
sidebar_label: "PowerShellを呼び出す"
sidebar_position: 4
description: "PowerShell アクティビティのドキュメントを呼び出します。"
displayed_sidebar: activitiesSidebar
---
# PowerShellを呼び出す

RCA.Activities.Core.InvokePowerShell

## **説明**

このアクティビティを使用すると、Powershell コマンドを同期的に呼び出し、オプションで入力引数のリストを渡すことができます。

![image-20220505161911-1.png](/static/img/101339_image-20220505161911-1.png)

（\*必須）

## **アクティビティ本体内**

* **コマンド テキスト (文字列)** - 実行される PowerShell コマンド。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - このプロパティは、エラーが発生した場合にオートメーションを継続するタイミングを指定します。可能な値は True または False の 2 つだけです。 True - アクティビティ内でエラーが発生した場合でも、プロセスの残りの部分が実行を継続できるようにします。 False (デフォルト) - プロセスの実行の継続をブロックします。

**入力**

* **コマンド テキスト (文字列)**\* - 実行される PowerShell コマンド。
* **入力 (PowershellObject)** - コマンドの実行に使用されるパイプラインの作成者に渡される PSObject のコレクション。別の PowerShell 呼び出しアクティビティの出力である可能性があります。
* **パラメータ** - PowerShell コマンド パラメータの辞書

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: [089089274] PowerShell を呼び出す
* **Is Script (チェックボックス)** - コマンドテキストがスクリプトであるかどうかを指定します
* **PowerShell 変数 (文字列)** - コマンドの現在のセッション内で使用される変数を表す名前付きオブジェクトの辞書。
* **TypeArgument** - 引数の型を設定します

**出力**

* **出力 (PowershellObject)** - コマンドの実行によって返される TypeArgument オブジェクトのコレクション。
