---
id: for-it-dev-team
title: "IT開発チーム向け"
sidebar_label: "IT開発チーム向け"
sidebar_position: 2
description: "IT開発チーム向けドキュメント。"
displayed_sidebar: centerSidebar
---

# IT開発チーム向け

## **ユースケース1：OUの表示/作成/編集**

S1: 左メニューの**Administration**をクリックし、**Organization Unit**タブを選択してOUページにアクセスします。

![image-20230308181201-1.png](/static/img/5660d8_image-20230308181201-1.png)

S2: OUの詳細を表示するには、**目のアイコン（view）**をクリックします。

![image-20230308181201-2.png](/static/img/c4be5a_image-20230308181201-2.png)

詳細ページが表示されます。

![image-20230308181201-3.png](/static/img/3ddacc_image-20230308181201-3.png)

|  |  |
| --- | --- |
| カラム/ラベル | 説明 |
| Name | OUの名前 |
| User | このOUに割り当てられたすべてのユーザーの一覧（ユーザー名、メール等） |

S3: OUを作成/編集するには、**Create New**ボタンをクリックします。既存OUを編集する場合は該当OU名の横のActionからEditを選択します。

![image-20230308181201-4.png](/static/img/882d1e_image-20230308181201-4.png)

S4: クリックすると入力用のポップアップフォームが表示されます。

![image-20230308181201-5.png](/static/img/3e6dae_image-20230308181201-5.png)

|  |  |
| --- | --- |
| カラム/ラベル | 説明 |
| Name | 作成/編集するOUの名前を入力します |
| Description | OUの説明を入力します |
| User | OUに追加するユーザーを選択します（複数追加可能だが一人ずつ追加） |

## **ユースケース2：ロールの作成/編集**

ロールは権限の集合であり、特定のCenterリソースへのアクセスや制御に必要な権限をロールに割り当てます。

S1: メニューで**Administration**を選択し、**Role Management**タブを開いて各ロールの権限を確認します。

![image-20230308181201-6.png](/static/img/b29d3c_image-20230308181201-6.png)

S2: ページ上部の**Create New**ボタンをクリックして新しいロールを作成します。

![image-20230308181201-7.png](/static/img/e66009_image-20230308181201-7.png)

S3: ポップアップフォームが表示されるので入力します。

![image-20230308181201-8.png](/static/img/f6f778_image-20230308181201-8.png)

S4: 権限にチェックを付け、**Save**をクリックしてロールを作成します。

|  |  |
| --- | --- |
| **Permissions** | **カテゴリー** |
| None | ユーザーはCenterのUIでリソースを表示できません |
| View | ユーザーはリソースを表示できますが操作はできません |
| Edit | ユーザーはリソースを表示および編集できます |
| Create | ユーザーはリソースを表示および新規作成できます |
| Delete | ユーザーはリソースを削除できます |

S5: 既存のロールを編集するには、Action列の該当ロールの**Edit**ボタンをクリックします。

![image-20230308181201-9.png](/static/img/ea09db_image-20230308181201-9.png)

## **ユースケース3：アカウントの表示/作成/編集**

S1: 左メニューで**Administration > Users**を選択すると、以下の詳細ページが表示されます。

![image-20230308181201-10.png](/static/img/b4e50b_image-20230308181201-10.png)

S2: ユーザーを表示するには目のアイコンをクリックします。

![image-20230308181254-11.png](/static/img/c017de_image-20230308181254-11.png)

画面は以下のように表示されます。

![image-20230308181254-12.png](/static/img/fcbddc_image-20230308181254-12.png)

|  |  |
| --- | --- |
| **カラム** | **説明** |
| Status | ユーザーの状態（Activated または Deactivated） |
| Profiles | ユーザーに割り当てられたロール。デフォルトで3つのロールがあります: ROLE_ADMIN, ROLE_USER, ROLE_ROBOT。ユーザーは複数のロールを持つことができます。各ロールの権限はRole Managementで説明されています |

S3: アカウントを作成/編集するには、右側の**Create New**をクリックします。

![image-20230308181254-13.png](/static/img/fb55a2_image-20230308181254-13.png)

**Create New/Edit**ボタンをクリックすると入力フォームが表示されます。詳細は下表を参照ください。

![image-20230308181254-14.png](/static/img/23f3a5_image-20230308181254-14.png)

フォームに入力後、**Save**をクリックして保存します。作成を取り消す場合は**Cancel**をクリックします。

## **ユースケース4：アカウントの削除**

ユーザーを削除するには該当ユーザーの**Delete**ボタンをクリックします。

![image-20230308181254-15.png](/static/img/915d9e_image-20230308181254-15.png)

確認ポップアップが表示されます。**Delete**を押して操作を完了してください。

## **ユースケース5：パッケージの表示/検索/アップロード**

S1: 左メニューの**Package**タブをクリックすると**Package Listing**ページが開き、Centerに公開されたすべてのパッケージが表示されます。

![image-20230308181254-16.png](/static/img/c37388_image-20230308181254-16.png)

S2: パッケージを表示するには**Eye**ボタンをクリックします。詳細ページでは選択したパッケージのすべてのバージョンが一覧表示されます。

![image-20230308181254-17.png](/static/img/e496af_image-20230308181254-17.png)

S3: パッケージを検索するには、ここにパッケージ名を入力します。

![image-20230308181254-18.png](/static/img/fb88a6_image-20230308181254-18.png)

S4: パッケージのアップロード

ワークフローをCenterに公開すると、パッケージは自動的にCenterにアップロードされます。ただし、Listingページ右上の**Create New**ボタンを使って**手動でパッケージをアップロード**することもできます。

![image-20230308181254-19.png](/static/img/d0b999_image-20230308181254-19.png)

アップロード用のウィンドウが表示されます。

![image-20230308181254-20.png](/static/img/aa3483_image-20230308181254-20.png)

## **ユースケース6：パッケージの削除**

S1: **Packages Repository**ページでパッケージの**Name**をクリックすると、パッケージ情報とすべてのバージョン一覧が表示されます。

![image-20230308181334-21.png](/static/img/9db132_image-20230308181334-21.png)

S2: 削除したいバージョンに対応する**Delete**アクションを選択します。確認ポップアップが表示されるので**Delete**をクリックして操作を完了します。

![image-20230308181334-22.png](/static/img/adb719_image-20230308181334-22.png)

## **ユースケース7：エージェントグループの作成/編集**

**オプション1:**

S1: 左メニューでResourceを選択し、**Agent Group**タブをクリックすると画面が表示されます。

![image-20230308181334-23.png](/static/img/031641_image-20230308181334-23.png)

**S2**: 画面右上の**Create New**ボタンをクリックします。

![image-20230308181334-24.png](/static/img/e3cb97_image-20230308181334-24.png)

**オプション2:** 情報を編集したい場合はAction列の**Edit**をクリックします。

![image-20230308181334-25.png](/static/img/e591ed_image-20230308181334-25.png)

S3: **Create New/Edit**をクリックすると入力フォームが表示されます。詳細は下表参照。

![image-20230308181334-26.png](/static/img/cb6a3a_image-20230308181334-26.png)

|  |  |
| --- | --- |
| **カラム** | **説明** |
| **Name** | 作成/編集するエージェントグループの名称を入力します |
| **Description** | エージェントグループの説明を入力します |
| **Agent** | グループに追加するエージェントを選択します。必要に応じてエージェント横のゴミ箱アイコンで削除できます |

## **ユースケース8：エージェントの表示/作成/編集**

S1: エージェントを表示するには、目のアイコンをクリックして詳細を表示します。

![image-20230308181334-27.png](/static/img/193af0_image-20230308181334-27.png)

S2: 詳細ページ下部にそのエージェントのタスク一覧が表示されます。

![image-20230308181334-28.png](/static/img/f83e94_image-20230308181334-28.png)

S3: エージェントのログを表示するには、Detailsページで**Task**タブ横の**Log**タブをクリックします。

![image-20230308181334-29.png](/static/img/5b816c_image-20230308181334-29.png)

さらに調査が必要な場合は、**Filter**ボタンの横にある**Export Log**をクリックしてログをエクスポートできます。すべてのログまたはフィルタ済みのログ項目をエクスポート可能です。

![image-20230308181334-30.png](/static/img/c44236_image-20230308181334-30.png)

S4: エージェントを作成/編集するには、右上の**Create New**ボタンをクリックします。

![image-20230308181334-31.png](/static/img/013424_image-20230308181334-31.png)

またはリスト内のエージェントのEditボタン、あるいはDetailsページの**Edit**を選択します。

![image-20230308181423-32.png](/static/img/b03c91_image-20230308181423-32.png)

S5: クリックするとプロパティ入力のポップアップが表示され、新しいエージェントを作成/編集するための必要事項を入力します。

![image-20230308181423-33.png](/static/img/db413e_image-20230308181423-33.png)

## **ユースケース9：ワークフローの表示/作成/編集**

S1: 左メニューでAutomationを選択し**Workflow**タブをクリックします。

![image-20230308181423-34.png](/static/img/08dc03_image-20230308181423-34.png)

S2: ワークフローを表示するには目のアイコンをクリックします。

![image-20230308181423-35.png](/static/img/2eaa4b_image-20230308181423-35.png)

タスクリストは**Time, Name, State, Agent**で検索できます。

![image-20230308181423-36.png](/static/img/fc21a5_image-20230308181423-36.png)

S3: ワークフローを作成するには、ページ上部の**Create New**ボタンをクリックします。

![image-20230308181423-37.png](/static/img/1c7218_image-20230308181423-37.png)

S4: クリックするとワークフロー作成用のフォームが表示されます。

![image-20230308181423-38.png](/static/img/48ed6e_image-20230308181423-38.png)

|  |  |
| --- | --- |
| **Permissions** | **カテゴリー** |
| Package Name | 作成するワークフローで使用するパッケージを選択 |
| Package Version | 上で選択したパッケージに応じてバージョンを選択 |
| Agent Group | 選択したパッケージバージョンに応じて、ワークフローを関連付けるエージェントグループを選択 |
| Description | 作成/編集するワークフローの説明を入力 |

S5: 一般情報を入力後、さらに**Parameters**や**Machine Environment**変数をワークフローに追加できます。複数の変数を追加できますが、一度に1つずつ追加します。

![image-20230308181423-39.png](/static/img/62d47d_image-20230308181423-39.png)

S6: ワークフローを編集するには、**Three dots**ボタンをクリックして**Edit**を選択します。

![image-20230308181423-40.png](/static/img/decfbe_image-20230308181423-40.png)

S7: クリックすると編集用フォームが表示され、編集後**Save**をクリックします。

![image-20230308181423-41.png](/static/img/74e802_image-20230308181423-41.png)

## **ユースケース10：アセットの作成/編集**

S1:

**オプション1:** **Asset**タブで**Create New**を選択して新しいアセットを作成します。

![image-20230308181423-42.png](/static/img/4b0a7f_image-20230308181423-42.png)

**オプション2:** 該当アセットの詳細ページから**Edit**を選択して編集できます。

![image-20230308181710-43.png](/static/img/68a65d_image-20230308181710-43.png)

S2: フォームに入力します。

![image-20230308181710-44.png](/static/img/9ff2a6_image-20230308181710-44.png)

|  |  |
| --- | --- |
| **Permissions** | **カテゴリー** |
| Name | 作成/編集するアセットの名前を入力 |
| Type | 作成/編集するアセットのタイプを選択 |
| Common Value | すべてのエージェントがアクセス可能なアセットであることを示します |
| Value | 選択したタイプに応じてアセットの値を入力/選択 |

## **ユースケース11：エージェントのパスワード変更**

**オプション1:**

S1: 左メニューのAgentからパスワードを変更したいエージェント名を選択し、**Edit**をクリックします。

![image-20230308181710-45.png](/static/img/4b45f0_image-20230308181710-45.png)

S2: ポップアップフォームが表示されたら、**Machine password**に新しいパスワードを入力し**Save**をクリックします（詳細はUse case 11を参照）。

![image-20230308181710-46.png](/static/img/f7c85b_image-20230308181710-46.png)

**オプション2:**

S1: **Asset**タブでパスワードを変更したいエージェント名を選択し、**Edit**ボタンをクリックします。

![image-20230308181710-47.png](/static/img/a4b019_image-20230308181710-47.png)

S2: タブを入力します:

**Type:** **CREDENTIAL** を選択

- **OK** をクリック

![image-20230308181710-48.png](/static/img/01ab21_image-20230308181710-48.png)

## **ユースケース12：ボットの実行 / 停止**

1. 手動でボットを実行（タスク作成、クローン）

**オプション1:**

S1: 左メニューでAutomationをクリックし、**Task**タブを選択します。

![image-20230308181710-49.png](/static/img/b6ae38_image-20230308181710-49.png)

S2: 手動で実行したいワークフローを選択し、**Save**をクリックします。

![image-20230308181710-50.png](/static/img/949358_image-20230308181710-50.png)

**オプション2:** タスク行のActionをクリックして表示されるドロップダウンで**Clone**を選択し**Save**をクリックします。

![image-20230308181710-51.png](/static/img/1e574d_image-20230308181710-51.png)

2. スケジュールによるボット実行（スケジュール設定、スケジュール無効化）

**2.1. スケジュールの作成 / 編集:**

S1: メニューで**Automation**を選択し、**Schedule**タブをクリックして**Create New**を押します。

![image-20230308181710-52.png](/static/img/af3a69_image-20230308181710-52.png)

S2: ポップアップフォームに入力します。

|  |  |
| --- | --- |
|
* **Name (*):** スケジュール名
* **Workflow (*):** スケジュール対象のワークフローを選択
* **Time Zone (*):** スケジュールで使用するタイムゾーンを選択
**Triggerタブ:**
* **Recurrence:** スケジュールの周期を選択：Minutes/ Hourly/ Daily/ Weekly/ Monthly/ Advance
* **Start Date (*):** スケジュールの開始日時を選択
* **End Date:** スケジュールの終了日時を入力
**Execution Targetタブ:** 選択したワークフローに応じて適切なエージェントを選択 **Parametersタブ:**
**Holiday settingsタブ:** 単一選択
* Run continuously (デフォルト)
* Bypass holiday
* Postpone until the next workday
***注: (*)は必須項目です***

![image-20230308181710-53.png](/static/img/image-20230308181710-53.png)

If you choose **Once**

|  |  |
| --- | --- |
| **Column label** | **Description** |
| Start Date | スケジュールの開始日を選択 |
| At | スケジュールの開始時刻を指定 |

If you choose **Minutes**

|  |  |
| --- | --- |
| **Column label** | **Description** |
| Start Date | スケジュールの開始日を選択 |
| End Date | スケジュールの終了日を選択 |
| Every | 分単位での周期を指定 |

If you choose **Hourly**

|  |  |
| --- | --- |
| **Column label** | **Description** |
| Start Date | スケジュールの開始日を選択 |
| End Date | スケジュールの終了日を選択 |
| Every … Hours | 時間単位での周期を指定 |

If you choose **Daily**

|  |  |
| --- | --- |
| **Column label** | **Description** |
| Start Date | スケジュールの開始日を選択 |
| End Date | スケジュールの終了日を選択 |
| At | スケジュールの開始時刻を指定 |

If you choose **Weekly**

|  |  |
| --- | --- |
| **Column label** | **Description** |
| Start Date | スケジュールの開始日を選択 |
| End Date | スケジュールの終了日を選択 |
| Everyday At | スケジュールの開始時刻を指定 |
| Monday Tuesday Wednesday Thursday Friday Saturday Sunday | 時間・分・曜日で周期を指定 |

If you choose **Monthly**

|  |  |
| --- | --- |
| **Column label** | **Description** |
| Start Date | スケジュールの開始日を選択 |
| End Date | スケジュールの終了日を選択 |
| At | スケジュールの開始時刻を指定 |
| On | 月内の特定の日を指定 |
| Of | 年内の特定の月を選択 |

If you chose **Advance**

|  |  |
| --- | --- |
| **Column label** | **Description** |
| Cron Expression | 空白で区切られた6または7フィールドの文字列で、カレンダーに基づく再帰的なスケジュールを作成できます |

**2.2. スケジュールの開始 / 停止:**

S1: スケジュールを強制的に開始/停止するには、Actionボタンをクリックして**Start Now**または実行中なら**Stop**を選択します。

![image-20230308181710-54.png](/static/img/8febf6_image-20230308181710-54.png)

**2.3. スケジュールの無効化 / 有効化**

S1: スケジュールを無効化するには、該当のActionボタンをクリックし**Disable**を選択します。

![image-20230308181710-55.png](/static/img/7d3f64_image-20230308181710-55.png)

S2: クリック後、確認ダイアログが表示されます。

![image-20230308181710-56.png](/static/img/c8e577_image-20230308181710-56.png)

スケジュールが無効化されると、そのステータスは**Disable**に変わります。

S3: スケジュールを有効化するには、該当のActionボタンをクリックし**Enable**を選択します。

![image-20230308181710-57.png](/static/img/c47303_image-20230308181710-57.png)

**2.4. スケジュールの削除**

S1: 削除するには、該当スケジュールのActionボタンをクリックし**Delete**を選択します。

![image-20230308181710-58.png](/static/img/500cf0_image-20230308181710-58.png)

2. ボットの停止

S1: 実行中のボットを停止するには、**Task**タブで該当タスク行のActionをクリックし、ドロップダウンで**Stop**を選択します。

![image-20230308181710-59.png](/static/img/d92652_image-20230308181710-59.png)

S2: 確認メッセージが表示されます。**Confirm**を押してタスクを削除します。

![image-20230308181826-61.png](/static/img/a31523_image-20230308181826-61.png)
