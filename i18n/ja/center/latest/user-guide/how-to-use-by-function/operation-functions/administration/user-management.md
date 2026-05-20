---
id: user-management
title: "ユーザー管理"
sidebar_label: "ユーザー管理"
sidebar_position: 1
description: "ユーザー管理に関するドキュメント。"
displayed_sidebar: centerSidebar
---

# ユーザー管理

ユーザーはCenter上での操作権限が割り当てられたエンティティです。ユーザーのビューや操作可能範囲は、割り当てられたロールによって決まります。ユーザーはCenter上で作成できます。

このページでは利用可能なユーザーが一覧表示され、管理者はユーザーの追加、削除、情報更新を行うことができます。

**User management**タブを選択すると次のページが表示されます：

![image-20221101163259-10.png](/static/img/348667_image-20221101163259-10.png)

| No | カラム | 説明 |
| --- | --- | --- |
| 1 | Action | ユーザー管理に利用可能なアクション（Edit: ユーザー詳細表示、Delete: ユーザー削除） |
| 2 | Login | ログイン（サインインに使用するユーザー名） |
| 3 | Email | ユーザーのメールアドレス（Centerへのログインに使用可能） |
| 4 | Status | ユーザーの状態（Activated または Deactivated） |
| 5 | Language | ユーザーの表示言語 |
| 6 | Profiles | ユーザーに割り当てられたロール（デフォルトロール：ROLE_ADMIN, ROLE_USER, ROLE_ROBOT）。ユーザーは複数ロールを持てます。各ロールの権限はロール管理で説明されています。 |
| 7 | Created date | ユーザー作成日 |
| 8 | Modified by | 最終更新者 |
| 9 | Modified date | 最終更新日時 |

## a. ユーザーの表示

ユーザーの詳細を表示するには**目のアイコン（View）**をクリックします。

![image-20221101163356-11.png](/static/img/7501e4_image-20221101163356-11.png)

![image-20221101163519-12.png](/static/img/579bc1_image-20221101163519-12.png)

| No | カラム | 説明 |
| --- | --- | --- |
|  | Login | サインインに使用するユーザー名 |
|  | Status | ユーザーの状態（Activated または Deactivated） |
|  | First name | 名 |
|  | Last name | 姓 |
|  | Email | メールアドレス（Centerへのログインに使用可能） |
|  | Language | ユーザーの表示言語 |
|  | Created by | 作成者 |
|  | Created date | 作成日時 |
|  | Modified by | 最終更新者 |
|  | Modified date | 最終更新日時 |
|  | Profiles | ユーザーに割り当てられたロール（ROLE_ADMIN, ROLE_USER, ROLE_ROBOTなど）。詳細はロール管理参照。 |

## b. ユーザーの作成/編集

新しいユーザーを作成するには、**User**ページの上部にある**Create new**ボタンをクリックします。

![image-20221101163616-13.png](/static/img/36cead_image-20221101163616-13.png)

**Create New/Edit**ボタンをクリックすると入力フォームが表示されます。詳細は以下の通りです。

![image-20221101163638-14.png](/static/img/5d2288_image-20221101163638-14.png)

| No | カラム/ラベル | 説明 | タイプ | 最大長 | 必須 | 入力要件 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Login | サインインに使用するユーザー名を入力 | String | 50 | はい | |
| 2 | First Name | 名を入力 | String | 50 | はい | |
| 3 | Last Name | 姓を入力 | String | 50 | はい | |
| 4 | Email | メールアドレスを入力 | String | 100 | はい | |
| 5 | Password | （新規作成時のみ）パスワードを入力 | String | 50 | はい | |
| 6 | Confirm Password | （新規作成時のみ）パスワード再入力 | String | 50 | はい | |
| 7 | Activated | 作成時にユーザーを有効化する場合はチェック | Check Box |  | いいえ | |
| 8 | Language | ユーザーの表示言語を選択 | ドロップダウン（単一選択） |  | はい | |
| 9 | Profiles | ユーザーに割り当てるロールを選択 | 複数選択 |  | はい | |

フォーム入力後、**Save**をクリックしてユーザーを作成します。作成をキャンセルするには**Cancel**をクリックします。

## c. ユーザーの削除

ユーザーを削除するには、該当ユーザーの**Delete**ボタンをクリックします。

![image-20221101163711-15.png](/static/img/c91ba3_image-20221101163711-15.png)

確認ポップアップが表示されます。**Delete**を押して操作を完了してください。
