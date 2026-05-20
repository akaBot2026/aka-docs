---
id: queue
title: "キュー"
sidebar_label: "キュー"
sidebar_position: 6
description: "キューに関するドキュメント。"
displayed_sidebar: centerSidebar
---
# キュー

A **Queue** は、akaBotエージェントで処理したい項目群を保持するコンテナです。キュー項目は顧客情報などのさまざまなデータを格納できます。これらのデータはSAPやSalesforce等の外部システムで処理されることがあります。

キューは複雑なロジックを伴う大規模な自動化プロジェクトを実現します。**akaBot Center**で作成された新しいキューはデフォルトで空です。キューに項目を投入したり、ステータスを変更して処理するにはStudioのアクティビティを使用します。キュー項目が処理されるとトランザクションになります。**Queue**ページへは左メニューの**Queue**タブをクリックしてアクセスします。クリックすると**Queue一覧ページ**が表示されます。

![image-20221101110036-8.png](/static/img/809199_image-20221101110036-8.png)

| No | カラム | 説明 |
| --- | --- | --- |
| 1 | Action | キュー管理のアクション（Edit: キューの編集、Delete: 選択したキューの削除）。各キューのチェックボックスを選択するとフィルタ横に削除オプションが表示され、一括削除が可能です。 |
| 2 | Name | キュー名（必須） |
| 3 | Description | キューの説明（必須） |
| 4 | In progress | Get Transaction ItemまたはAdd Transaction Itemで処理中の項目。Progress列にカスタム進捗ステータスも表示されます。 |
| 5 | Remaining | 未処理かつNewステータスのキュー項目数 |
| 6 | Average time | キュー項目の平均処理時間（秒） |
| 7 | Successful | 正常に処理されたトランザクションの総数 |
| 8 | App Exceptions | アプリケーション例外で失敗したトランザクションの総数 |
| 9 | Biz Exception | ビジネス例外で失敗したトランザクションの総数 |

## a. キューの表示

キューを表示するには、目のアイコン（View）をクリックします。

![image-20221101110141-9.png](/static/img/72316f_image-20221101110141-9.png)

システムは以下のようにキューの詳細を表示します：

![image-20221101110211-10.png](/static/img/70baa1_image-20221101110211-10.png)

| No | カラム | 説明 |
| --- | --- | --- |
| 1 | Name | キュー名 |
| 2 | Description | キューの説明 |
| 3 | In progress | Get Transaction ItemまたはAdd Transaction Itemで処理中の項目。Progress列にカスタム進捗が表示されます。 |
| 4 | Remaining | 未処理でNewステータスのキュー項目数 |
| 5 | Average time | キュー項目の平均処理時間（秒） |
| 6 | Successful | 正常に処理されたトランザクションの総数 |
| 7 | App Exceptions | アプリケーション例外で失敗したトランザクションの総数 |
| 8 | Biz Exception | ビジネス例外で失敗したトランザクションの総数 |

* トランザクション

キュー項目が処理されるとトランザクションになります。処理の詳細はキューの詳細画面で確認できます。

| No | フィールド | 説明 |
| --- | --- | --- |
| 1 | Action | トランザクション管理のアクション（View: 詳細表示、Edit: 編集、Clone: 同一トランザクション作成、Delete: 選択トランザクション削除）。 |
| 2 | Status | 項目の処理状態（NEW、IN PROGRESS、FAILED、SUCCESSFUL、ABANDONED、RETRIED、DELETEDなど） |
| 3 | Reference | トランザクションやトランザクション群のカスタム識別子（ダブルクオート以外の特殊文字をサポート）。Add Queue ItemまたはAdd Transaction Itemで設定します。キュー作成時のUnique Reference設定により一意にできます。 |
| 4 | Revision | 放棄または例外で失敗した項目のリビジョン情報 |
| 5 | Priority | トランザクションの優先度（Low、Normal、High）。StudioのAdd Queue Itemアクティビティで設定されます。 |
| 6 | Deadline | キュー項目が処理されるべき最終時刻（Postpone Transaction ItemのDeadlineに基づく） |
| 7 | Postpone | キュー項目が処理可能になる最早時刻（Postpone Transaction ItemのPostponeに基づく） |
| 8 | Started | 処理開始からの経過時間 |
| 9 | Ended | 処理終了からの経過時間 |
| 10 | Agent | トランザクションを処理したエージェント名 |
| 11 | Exception | 失敗の原因となった例外タイプ（StudioのSet Transaction Statusで選択） |
| 12 | Specific data | JSON Schemaデータ |

## b. キューの作成/編集

キューを作成するには、**Queue一覧**ページで**Create new**をクリックします。

![image-20221101110414-11.png](/static/img/1b9813_image-20221101110414-11.png)

既存キューを編集するには、該当キューのEditボタンをクリックします。

![image-20221101110501-12.png](/static/img/a01555_image-20221101110501-12.png)

作成/編集用フォームが表示されます。

![image-20221101110535-13.png](/static/img/a10826_image-20221101110535-13.png)

| No | カラム/ラベル | 説明 | タイプ | 最大長 | 必須 | 入力要件 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Name | キュー名を入力 | 検索入力 | 255文字 | はい | |
| 2 | Unique Reference | キューに追加されるすべてのトランザクションに対して一意の参照を強制する場合はチェック |  |  | いいえ | このオプションは編集不可で、現在のキューが一意参照を強制しているかを表示します。 |
| 3 | Auto Retry | アプリケーション例外発生時にCenterがキュー内の項目を再試行するかどうかを示す |  |  | いいえ | |
| 4 | Maximum of retries | Auto Retry選択時に表示されます。 | 整数 | 50 | いいえ | 0より大きい値 |
| 5 | JSON Schema | キュー作成/編集時にカスタムJSONをアップロード可能 |
| 6 | Specific Data | キュー内すべてのトランザクションのspecificData用JSONスキーマ（デフォルトでファイルサイズは256KBに制限） | ファイル | 256KB | いいえ | |
| 7 | Output Data | トランザクションの出力データ用JSONスキーマ（ファイルサイズ制限256KB） | ファイル | 256KB | いいえ | |
| 8 | Analytics Data | トランザクションの分析データ用JSONスキーマ（ファイルサイズ制限256KB） | ファイル | 256KB | いいえ | |

フォーム入力後、**Save**をクリックしてキューを作成します。作成をキャンセルするには**Cancel**をクリックします。

## c. キューの削除

キューを削除するには、該当キューの**Delete**ボタンをクリックします。

![image-20221101111838-14.png](/static/img/871198_image-20221101111838-14.png)

または各キューのチェックボックスを選択すると、**Filter**の横に**Delete**ボタンが表示されます。Action列のチェックを入れると、表示中のすべてのキューを選択して一括削除できます。

![image-20221101111942-15.png](/static/img/11f4cb_image-20221101111942-15.png)
