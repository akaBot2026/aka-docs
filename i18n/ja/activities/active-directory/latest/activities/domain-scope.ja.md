---
id: domain-scope
title: "Domain Scope"
sidebar_label: "Domain Scope"
sidebar_position: 1
description: "Domain Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# ドメインスコープ

RCA.Activities.ActiveDirectory.DomainScope

## **説明**

Active Directory アクティビティのスコープを定義できるコンテナです。

![domain-scope](/static/img/domain-scope.png)

（*必須）

## **アクティビティ本文内の項目**

* **Do** - ドメイン内で実行したいアクティビティ。

## **プロパティ**

**入力 - ドメインコンテキスト**

* **Domain Context: `InArgument<PrincipalContext>`** - 使用するドメインコンテキスト。

**入力 - ドメイン情報**

* **Container: `InArgument<String>`** - コンテナまたは組織単位（OU）の識別名 (DN)（例: `OU=Sales,DC=domain,DC=com`）。

* **Domain Name: `InArgument<String>`*** - 接続する Active Directory ドメインの名前。

* **Domain Password: `InArgument<String>`** - ドメインへの接続に使用するユーザー資格情報のパスワード。

* **Domain Username: `InArgument<String>`** - ドメインに接続するために使用するユーザー名資格情報。

**その他**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Domain Scope

**オプション**

* **Dispose On Completed Or Faulted: Boolean** - アクティビティの実行が終了または失敗したときに、ドメイン接続コンテキストを自動的に破棄するかどうかを指定します。

**出力**

* **Output Context: `OutArgument<PrincipalContext>`** - 作成された Active Directory 接続コンテキストの出力で、他の Active Directory アクティビティに渡すことができます。

