---
id: users-and-roles
title: "ユーザーとロール"
sidebar_label: "ユーザーとロール"
sidebar_position: 1
description: "メンバーを招待または追加し、ロールを作成して権限を割り当てます。"
displayed_sidebar: akaXtractSidebar
---

# ユーザーとロール

<a id='members'></a>

## メンバーを招待または追加する

**事前に必要なもの：** ユーザーを管理する権限が必要です。ロールを設定する場合は、ロールを割り当てる権限も必要です。メンバーは、文書処理専用のリストではなく、ScaleX の会社に所属します。

1. `Profile & Setting` -> `User Management` を開きます。重複を避けるため、最初に検索してください。
2. メンバーの追加方法を選択します。

| 方法 | 操作 | 結果 |
| --- | --- | --- |
| 招待 | `Invite Users` を選択し、`Email Addresses` にメール アドレスを入力します（カンマ、スペース、改行で区切ります）。ロールを選択して、`Send Invitations` を選択します | 招待は `pending` と表示されます。受信者がアカウント システムで招待を完了してサインインすると、サインイン時にロールが適用されます |
| 直接追加 | `Add User` を選択し、`Email` を入力します。新規アカウントの場合は、`First Name`、`Last Name`、6 文字以上の `Password` も入力します。ロールを選択して、`Create User` を選択します | 既存の ScaleX アカウントは、すぐに会社に参加します。新規ユーザーは、初回サインイン時にパスワードを変更する必要があります |

![User Management タブ](/static/img/scale-xtract-user-management.png)

![Invite Users ダイアログ](/static/img/scale-xtract-invite-users.png)

![Add User ダイアログ](/static/img/scale-xtract-add-user.png)

ユーザーを追加したもののロールが保存されなかった場合は、アカウントを作り直さずに `Assign Role` を使用してください。

:::note
ロールのないメンバーは、文書を処理できません。複数のアドレスを指定した招待は、一部のみ成功する場合があります。再送信する前に、各アドレスを確認してください。メンバーを削除すると、その人が**会社**から外され、保留中の招待は取り消されます。自分自身を削除することはできず、Owner は保護されています。会社は他のアプリケーションと共有されている場合があるため、削除の影響が AkaXtract 以外にも及ぶことがあります。
:::

<a id='roles'></a>

## ロールを作成する

1. `Profile & Setting` -> `Roles & Permissions` を開き、`Create new role` を選択します。
2. 一意の `Role name` と、任意の説明を入力します。既存のロールをもとに作成するには、`Copy permissions from role` を使用します。`Continue` を選択します。
3. 権限を選択し、`Create role` を選択します。

![Roles & Permissions タブ](/static/img/scale-xtract-roles-permissions.png)

![Create new role ダイアログ](/static/img/scale-xtract-create-role.png)

新しいロールでは、最初はクォータの読み取り権限のみが選択されています。一部の管理権限には、それに必要な表示権限が含まれています。

## ロールを割り当てる・編集する

1. `User Management` で、メンバーのメニューを開き、`Assign Role` を選択します。
2. ロールを選択して保存します。この操作は、選択したロールの組み合わせで置き換えられるため、引き続き必要なロールは残してください。メンバーに、ページの再読み込みまたは再サインインを依頼します。

カスタム ロールでは、権限と説明は編集できますが、名前は編集できません。Owner 以外のシステム ロールでは、クォータの読み取り権限のみ変更できます。Owner ロールは編集できず、会社の所有者専用です。システム ロールは削除できません。

:::warning
カスタム ロールを削除すると、そのロールの割り当てが解除され、ユーザーがアクセス権を失う場合があります。事前にメンバーを確認してください。
:::
