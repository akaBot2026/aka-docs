
---
id: for-business-user
title: "業務ユーザー向け"
sidebar_label: "業務ユーザー向け"
sidebar_position: 1
description: "業務ユーザー向けドキュメント。"
displayed_sidebar: centerSidebar
---

# 業務ユーザー向け

## **ユースケース1：クイックナビゲーション**

Centerの上部にある**Quick Navigation**タブにワークフロー名、エージェントグループ、エージェントなどを入力すると、素早く検索できます。

![image-20230425134819-1.png](/static/img/17742f_image-20230425134819-1.png)

## **ユースケース2：ボットの実行開始**

1. アセットの編集

*(アセットの編集が不要な場合は、*[*ここ*](#_Running_bot)*をクリックしてボットの実行方法へ進んでください)*

S1: 左メニューで**Asset**をクリックしてAssetページにアクセスします。

S2: 編集したいアセット名を探すか、ページ上部の**Search**タブで素早く検索します。

![image-20230425134819-2.png](/static/img/df4224_image-20230425134819-2.png)

S3:

***オプション1:***

Action列の**Edit**ボタンを選択します。

![image-20230425134819-3.png](/static/img/fa04c4_image-20230425134819-3.png)

***オプション2:***

または、**eye**アイコンをクリックしてAssetの詳細ページを開き、**Edit**ボタンを選択します。

![image-20230425134819-4.png](/static/img/e3ce63_image-20230425134819-4.png)

***オプション2:***

S1: **Monitoring**メニューで**Productivity**タブをクリックします。カレンダーに各エージェントのスケジュールが表示されます。ドロップダウンでエージェント/マシンを選択して特定のスケジュールを確認できます。

![image-20230425134819-12.png](/static/img/728e6e_image-20230425134819-12.png)

2. スケジュールの作成/編集

S1: **Create New**ボタンをクリックしてスケジュールを作成します。システムは作成用フォームを表示します。

![image-20230425134819-13.png](/static/img/70f419_image-20230425134819-13.png)

***オプション1:***

S2: スケジュール情報を編集するには、Action列のEditボタンをクリックします。

![image-20230425134819-14.png](/static/img/96dea8_image-20230425134819-14.png)

***オプション2:***

S2: または該当スケジュールのDetailsページを開き、Editボタンを選択します。

![image-20230425134819-15.png](/static/img/fbdd12_image-20230425134819-15.png)

S3: ポップアップフォームに入力します。

|  |  |
| --- | --- |
|
* **Name (*):** スケジュール名 
* **Workflow (*):** スケジュール対象のワークフローを選択 
* **Time Zone (*):** スケジュールで使用するタイムゾーンを選択   
**Triggerタブ:**   
* **Recurrence:** スケジュール周期を選択：Minutes/ Hourly/ Daily/ Weekly/ Monthly/ Advance 
* **Start Date (*):** スケジュールの開始日時を選択 
* **End Date:** スケジュールの終了日時を選択   
**Execution Targetタブ:** 選択したワークフローに応じて適切なエージェントを選択  
**Parametersタブ:**  
**Holiday settingsタブ**: 単一選択   
* Run continuously (デフォルト) 
* Bypass holiday 
* Postpone until the next workday   
***注: (*)は必須項目です*** 

| image-20230425134819-16.png |

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

3. スケジュールの無効化

S1: スケジュールを無効化するには、該当するActionボタンをクリックし**Disable**を選択します。

![image-20230425134819-17.png](/static/img/72b413_image-20230425134819-17.png)

S2: クリック後、状態切替の確認ダイアログが表示されるので**OK**をクリックします。

![image-20230425134819-18.png](/static/img/37bfb4_image-20230425134819-18.png)
S3: スケジュールが無効化されると、その状態は**Disable**に変わります。

4. スケジュールの有効化

S1: スケジュールを有効化するには、該当Actionをクリックし**Enable**を選択します。

![image-20230425134819-19.png](/static/img/97747d_image-20230425134819-19.png)
## **ユースケース4：祝日設定の構成**

S1: 新しい祝日を作成するには、**Automation > Schedule** タブを開き、サブタブの**Holiday settings**をクリックします。

![image-20230425134819-20.png](/static/img/4a6383_image-20230425134819-20.png)

S2: 画面右上の**Create New**ボタンをクリックするとフォームがポップアップ表示されます。

![image-20230425134819-21.png](/static/img/e065e1_image-20230425134819-21.png)

**Holiday name:** 祝日の名前を入力

**Date:** 日付を選択

**Save** をクリック

S3: 作成した祝日設定を対象のエージェントに割り当てます（割り当て方法は該当セクションを参照）。

## 

## **ユースケース5：ボット実行の結果確認**

1. 実行結果と実行時間の確認

S1: **Task**タブで**Historical**サブタブを選択します。

![image-20230425134819-22.png](/static/img/5660ba_image-20230425134819-22.png)

S2: **eye**アイコンをクリックすると**Detail**ページに移動し、詳細を確認できます。

![image-20230425134819-23.png](/static/img/771815_image-20230425134819-23.png)

S3: 実行時間を確認したい場合は、開始時間と終了時間を比較してください。

ステータス（state）を見ることでボットの状態を確認できます。

2. ログの確認

S1: **Task**タブで**Historical**サブタブを選択します。

![image-20230425140027-1.png](/static/img/35d5a8_image-20230425140027-1.png)

S2: **eye**アイコンをクリックすると**Detail**ページに遷移し、詳細を確認できます。

![image-20230425140027-2.png](/static/img/image-20230425140027-2.png)

S3: ログを確認するには**Log Detail**をクリックします。

![image-20230425140027-3.png](/static/img/image-20230425140027-3.png) 

## **ユースケース6：ボットの状態監視**

S1: 左メニューでAgentタブをクリックします。

![image-20230425140027-4.png](/static/img/374e3a_image-20230425140027-4.png)

S2: **Status**列で任意のボットの状態を確認できます。

|  |  |
| --- | --- |
| **カラムラベル** | **説明** |
| **Status** | エージェントの現在の状態。 **AVAILABLE** - Centerに接続され処理を行っておらず使用可能 **BUSY** - エージェントがプロセスを実行中 **DISCONNECTED** - 過去10秒間にCenterと通信がない |
