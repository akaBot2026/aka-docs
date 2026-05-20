---
id: api-resources
title: "APIリソース"
sidebar_label: "APIリソース"
sidebar_position: 4
description: "API リソースのドキュメント。"
displayed_sidebar: centerSidebar
---
# APIリソース

次の API エンドポイントとリソースは、適切な承認によってアクセスできるように公開されます。

## **1. GetRolePermission**

リソース権限コレクションを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| 名前 | 弦 | 真実 | 役割名 |

応答

戻り値の種類: コレクション(リソース)

例：

http://botcenter.akabot.io/api/roles/{name} URL に GET リクエストを送信します。

![image-20230307144502-1.png](/static/img/73971b_image-20230307144502-1.png)

ヘッダー:

![image-20230307144502-2.png](/static/img/23952b_image-20230307144502-2.png)

応答：

## image-20230307144502-3.png**2。ユーザーの取得**

ユーザーコレクションを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| 組織単位ID | 整数 | 間違い |  |
| 検索ユーザー | 弦 | 間違い | ログイン(ユーザー名) |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|desc) 例:login,asc |

応答

戻り値の種類: コレクション(ユーザー)

例：

http://botcenter.akabot.io/api/users URL に GET リクエストを送信します。

![image-20230307144502-4.png](/static/img/e78ea6_image-20230307144502-4.png)

パラメータ:

![image-20230307144502-5.png](/static/img/e394c8_image-20230307144502-5.png)

ヘッダー:

![image-20230307144502-6.png](/static/img/e3a2d7_image-20230307144502-6.png)

応答：

![image-20230307144502-7.png](/static/img/a6189a_image-20230307144502-7.png)

## **3.ユーザーの作成**

新しいユーザーを追加します。 HTTPメソッド：ポスト

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ユーザーDTO | ユーザー |  |

応答

戻り値の種類: ユーザー

例：

http://botcenter.akabot.io/api/users URL に POST リクエストを送信します。

![image-20230307144502-8.png](/static/img/cea544_image-20230307144502-8.png)

ヘッダー:

![image-20230307144502-9.png](/static/img/f84255_image-20230307144502-9.png)

リクエスト：

![image-20230307144502-10.png](/static/img/091d5d_image-20230307144502-10.png)

![image-20230307144502-11.png](/static/img/df4f55_image-20230307144502-11.png)

応答：

![image-20230307144502-12.png](/static/img/b86a28_image-20230307144502-12.png)

![image-20230307144502-13.png](/static/img/7b2a3d_image-20230307144502-13.png)



## **4.役割の追加**

ユーザーの役割を追加します。 HTTPメソッド：Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ユーザーロールDTO | ユーザーロール |  |

応答

戻り値の種類: ステータスコード

例：

http://botcenter.akabot.io/api/user-add-role URL に PUT リクエストを送信します。

![image-20230307144502-14.png](/static/img/177b1f_image-20230307144502-14.png)

ヘッダー:

![image-20230307144502-15.png](/static/img/57ef5e_image-20230307144502-15.png)

リクエスト：

![image-20230307144502-16.png](/static/img/1b0b3a_image-20230307144502-16.png)

![image-20230307144502-17.png](/static/img/88ba04_image-20230307144502-17.png)

応答：

![image-20230307144502-18.png](/static/img/022227_image-20230307144502-18.png)

レスポンスコード: 200

## **5.役割の削除**

ユーザーから役割を削除します。 HTTPメソッド：Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ユーザーロールDTO | ユーザーロール |  |

応答

戻り値の種類: ステータスコード

例：

http://botcenter.akabot.io/api/user-remove-role URL に PUT リクエストを送信します。

![image-20230307144502-19.png](/static/img/abe9d7_image-20230307144502-19.png)

ヘッダー:

![image-20230307144502-20.png](/static/img/816215_image-20230307144502-20.png)

リクエスト：

![image-20230307144502-21.png](/static/img/f1b9be_image-20230307144502-21.png)

![image-20230307144502-22.png](/static/img/d84f61_image-20230307144502-22.png)

応答：

![image-20230307144502-23.png](/static/img/1d053f_image-20230307144502-23.png)

レスポンスコード: 200

## **6.組織単位の追加**

ユーザーの組織単位を追加します。 HTTPメソッド：Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ユーザー組織単位DTO | ユーザーロール |  |

応答

戻り値の種類: ステータスコード

例：

http://botcenter.akabot.io/api/user-add-organizationUnit URL に PUT リクエストを送信します。

![image-20230307144502-24.png](/static/img/4b0733_image-20230307144502-24.png)

ヘッダー:

![image-20230307144502-25.png](/static/img/f3ee64_image-20230307144502-25.png)

リクエスト：

![image-20230307144502-26.png](/static/img/b7ac05_image-20230307144502-26.png)

![image-20230307144502-27.png](/static/img/cf4972_image-20230307144502-27.png)

応答：

![image-20230307144502-28.png](/static/img/b1166c_image-20230307144502-28.png)

レスポンスコード: 200

## **7.組織単位の削除**

ユーザーから組織単位を削除します。 HTTPメソッド：Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ユーザー組織単位DTO | ユーザーロール |  |

応答

戻り値の種類: ステータスコード

例：

http://botcenter.akabot.io/api/user-remove-organizationUnit URL に PUT リクエストを送信します。

![image-20230307144502-29.png](/static/img/371ff7_image-20230307144502-29.png)

ヘッダー:

![image-20230307144502-30.png](/static/img/2db809_image-20230307144502-30.png)

リクエスト：

![image-20230307144502-31.png](/static/img/863477_image-20230307144502-31.png)

![image-20230307144502-32.png](/static/img/f6070d_image-20230307144502-32.png)

応答：

![image-20230307144502-33.png](/static/img/4409b9_image-20230307144502-33.png)

レスポンスコード: 200

## **8.ユーザーの更新**

ユーザー情報を更新します。 HTTPメソッド：Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ユーザーDTO | ユーザー |  |

応答

戻り値の種類: ユーザー

例：

http://botcenter.akabot.io/api/users URL に PUT リクエストを送信します。

リクエスト：

![image-20230307144502-34.png](/static/img/340fd9_image-20230307144502-34.png)

![image-20230307144502-35.png](/static/img/755477_image-20230307144502-35.png)

応答：

![image-20230307144502-36.png](/static/img/29dbf1_image-20230307144502-36.png)

![image-20230307144502-37.png](/static/img/8fbdd4_image-20230307144502-37.png)

## **9.アクティブ化されたユーザー**

ユーザーをアクティブ化または非アクティブ化します。 HTTPメソッド：Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| DTOをアクティブにする | 活性化 |  |

応答

戻り値の種類: ステータスコード

例：

http://botcenter.akabot.io/api/user-activated URL に PUT リクエストを送信します。

![image-20230307144502-38.png](/static/img/f758dc_image-20230307144502-38.png)

ヘッダー:

![image-20230307144502-39.png](/static/img/0a6d35_image-20230307144502-39.png)

リクエスト：

![image-20230307144502-40.png](/static/img/ed0a24_image-20230307144502-40.png)

![image-20230307144502-41.png](/static/img/0dec4c_image-20230307144502-41.png)

応答：

![image-20230307144502-42.png](/static/img/343066_image-20230307144502-42.png)

レスポンスコード: 200

## **10.関連プロセスの取得**

エージェントの使用可能なすべての関連プロセスのコレクションを返します。サポートされているメソッド: Get

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ロボットキー | 弦 |  |

応答

戻り値の種類: コレクション(ワークフロー)

例：

http://botcenter.akabot.io/api/robotsservice/GetAssociatedProcesses URL に GET リクエストを送信します。

![image-20230307144502-43.png](/static/img/93e78e_image-20230307144502-43.png)

パラメータ:

![image-20230307144502-44.png](/static/img/47ff18_image-20230307144502-44.png)

ヘッダー:

![image-20230307144502-45.png](/static/img/7dbf8e_image-20230307144502-45.png)

応答：

![image-20230307144502-46.png](/static/img/c474f4_image-20230307144502-46.png)



## **11.ワークフロー**

WorkFlow コレクションを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| 組織単位ID | 整数 | 間違い |  |
| 環境ID | 整数 | 間違い | エージェントグループID |
| 環境名 | 弦 | 間違い | エージェントグループ名 |
| ワークフローID | 整数 | 間違い |  |
| ワークフロー名 | 弦 | 間違い |  |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|記述) 例: name,asc |

応答

戻り値の種類: コレクション(ワークフロー)

例：

http://botcenter.akabot.io/api/work-flows URL に GET リクエストを送信します。

![image-20230307144502-47.png](/static/img/bcc9fa_image-20230307144502-47.png)

パラメータ:

![image-20230307144502-48.png](/static/img/4c591d_image-20230307144502-48.png)

ヘッダー:

![image-20230307144502-49.png](/static/img/077d74_image-20230307144502-49.png)

応答：

![image-20230307144502-50.png](/static/img/2f5f40_image-20230307144502-50.png)

## **12.ワークフローバージョン**

Get WorkFlow version.サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| ワークフローID | 長さ | 真実 |  |

応答

戻り値の種類: 文字列

例：

http://botcenter.akabot.io/api/workflowversion URL に GET リクエストを送信します。

![image-20230307144502-51.png](/static/img/4c3828_image-20230307144502-51.png)

パラメータ:

![image-20230307144502-52.png](/static/img/7641f4_image-20230307144502-52.png)

ヘッダー:

![image-20230307144502-53.png](/static/img/f89582_image-20230307144502-53.png)

応答：

1.0.12380.19828

## **13.ワークフローバージョンの更新**

ワークフローのバージョンを更新します。サポートされているメソッド: Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ID | 整数 | ワークフローID |
| バージョン | 弦 |  |

応答

戻り値の種類: ワークフロー

例：

http://botcenter.akabot.io/api/work-flows/{id}/version URL に PUT リクエストを送信します。

![image-20230307144502-54.png](/static/img/af9cf4_image-20230307144502-54.png)

ヘッダー:

![image-20230307144502-55.png](/static/img/728ccb_image-20230307144502-55.png)

応答

![image-20230307144502-56.png](/static/img/2072c6_image-20230307144502-56.png)

## **14.パッケージのアップロード**

パッケージをパッケージ リポジトリにアップロードします。サポートされているメソッド: 投稿

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | パラメータの種類 | タイプ | コンテンツタイプ |
| パッケージ | フォームデータ | ファイル | マルチパート/フォームデータ |
| 環境ID | フォームデータ | 配列[長い] | アプリケーション/json |

応答

戻り値の種類: パッケージ

例：

http://botcenter.akabot.io/api/packageupload URL に POST リクエストを送信します。

![image-20230307144502-57.png](/static/img/72996b_image-20230307144502-57.png)

パラメータ:

![image-20230307144502-58.png](/static/img/e279d7_image-20230307144502-58.png)

ヘッダー:

![image-20230307144502-59.png](/static/img/fd5196_image-20230307144502-59.png)

応答

## image-20230307144502-60.png**15。環境**

エージェントグループを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| 組織単位ID | 整数 | 間違い |  |
| 環境名 | 弦 | 間違い | エージェントグループ名 |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|記述) 例: name,asc |

応答

戻り値の種類: コレクション(環境)

例：

http://botcenter.akabot.io/api/environments URL に GET リクエストを送信します。

![image-20230307144502-61.png](/static/img/23f73a_image-20230307144502-61.png)

パラメータ:

![image-20230307144502-62.png](/static/img/dea7e3_image-20230307144502-62.png)

ヘッダー:

![image-20230307144502-63.png](/static/img/1670a1_image-20230307144502-63.png)

応答：

![image-20230307144502-64.png](/static/img/73ad73_image-20230307144502-64.png)

## **16.ジョブの開始**

新しいジョブを追加し、入力パラメータに基づいて各エージェントのジョブを保留状態に設定し、保留中のジョブについて各エージェントに通知します。 HTTPメソッド：ポスト

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| 仕事DTO | 仕事 |  |

応答

戻り値の種類: ジョブ

例：

http://botcenter.akabot.io/api/jobs-processing URL に POST リクエストを送信します。

![image-20230307144502-65.png](/static/img/7f67f2_image-20230307144502-65.png)

ヘッダー:

![image-20230307144502-66.png](/static/img/a9924e_image-20230307144502-66.png)

リクエスト：

![image-20230307144502-67.png](/static/img/1734bd_image-20230307144502-67.png)

![image-20230307144502-68.png](/static/img/160073_image-20230307144502-68.png)

応答：

![image-20230307144502-69.png](/static/img/43cfbf_image-20230307144502-69.png)

![image-20230307144502-70.png](/static/img/8250e5_image-20230307144502-70.png)StopJob

指定したジョブをキャンセルまたは終了します。サポートされているメソッド: Put

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ID | 整数 | ジョブID |
| 価値 | 文字列(STOP、KILL) |  |

応答

戻り値の種類: ジョブ

例：

http://botcenter.akabot.io/api/jobs-processing/{id}/{value} URL に PUT リクエストを送信します。

![image-20230307144502-71.png](/static/img/4a4775_image-20230307144502-71.png)

ヘッダー:

![image-20230307144502-72.png](/static/img/e05927_image-20230307144502-72.png)

応答

![image-20230307144502-73.png](/static/img/3c13ff_image-20230307144502-73.png)

## **17.ジョブを取得**

求人情報を取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ID | 整数 | ジョブID |

応答

戻り値の種類: ジョブ

例：

http://botcenter.akabot.io/api/jobs/{id} URL に GET リクエストを送信します。

![image-20230307144502-74.png](/static/img/577af8_image-20230307144502-74.png)

ヘッダー:

![image-20230307144502-75.png](/static/img/d380cc_image-20230307144502-75.png)

応答

![image-20230307144502-76.png](/static/img/049f65_image-20230307144502-76.png)

## **18.ジョブを取得**

ジョブ コレクションを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| 組織単位ID | 整数 | 間違い |  |
| 環境ID | 整数 | 間違い | エージェントグループID |
| ロボットID | 整数 | 間違い |  |
| スケジュールID | 整数 | 間違い |  |
| 州 | 弦 | 間違い | (保留中、実行中、停止、失敗、成功)。  複数の状態をカンマで区切ってサポート |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|desc) 例: startTime,desc |

応答

戻り値の種類: コレクション(ジョブ)

例：

http://botcenter.akabot.io/api/jobs URL に GET リクエストを送信します。

![image-20230307144502-77.png](/static/img/0c091e_image-20230307144502-77.png)

パラメータ:

![image-20230307144502-78.png](/static/img/85ca89_image-20230307144502-78.png)

ヘッダー:

![image-20230307144502-79.png](/static/img/b98b63_image-20230307144502-79.png)

応答：

![image-20230307144502-80.png](/static/img/a47747_image-20230307144502-80.png)

## **19. GetRobotMapping**

ロボットのマッピング情報を取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ライセンスキー | 弦 | エージェントキー |
| マシン名 | 弦 |  |

応答

戻り値の種類: RobotMappingVM

例：

http://botcenter.akabot.io/api/robotsservice/GetRobotMappings URL に GET リクエストを送信します。

![image-20230307144502-81.png](/static/img/0a259c_image-20230307144502-81.png)

パラメータ:

![image-20230307144502-82.png](/static/img/cefdc8_image-20230307144502-82.png)

ヘッダー:

![image-20230307144502-83.png](/static/img/fbe98f_image-20230307144502-83.png)

応答：

![image-20230307144502-84.png](/static/img/3f2fa0_image-20230307144502-84.png)

## **20.ロボットを入手**

ロボットのコレクションを入手します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| 組織単位ID | 整数 | 間違い |  |
| 環境ID | 整数 | 間違い | エージェントグループID |
| ロボットID | 整数 | 間違い |  |
| ロボット\_タイプ | 整数 | 間違い | 開発(0)、アシスタント(1)、ステージング(2)、プロダクション(3) |
| ロボット\_ステータス | 整数 | 間違い | 利用可能(0)、ビジー(1)、切断(2)、応答なし(3) |
| 検索 | 弦 | 間違い | エージェント名(ロボット名) |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|記述) 例: name,asc |

応答

戻り値の種類: コレクション(ロボット)

例：

http://botcenter.akabot.io/api/robots URL に GET リクエストを送信します。

![image-20230307144502-85.png](/static/img/c87f06_image-20230307144502-85.png)

パラメータ:

![image-20230307144502-86.png](/static/img/f14fd3_image-20230307144502-86.png)

ヘッダー:

![image-20230307144502-87.png](/static/img/110df4_image-20230307144502-87.png)

応答：

![image-20230307144502-88.png](/static/img/00d468_image-20230307144502-88.png)

## **21.送信ハートビート**

エージェントのステータスを送信し、タスクのリストを取得するコマンド。サポートされているメソッド: 投稿

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| 心拍DTO | ハートビートDTO |  |

応答

戻り値の種類: ハートビートデータ

例：

http://botcenter.akabot.io/api/robotsservice/SubmitHeartbeat URL に POST リクエストを送信します。

![image-20230307144502-89.png](/static/img/8b9457_image-20230307144502-89.png)

リクエスト：

![image-20230307144502-90.png](/static/img/c1efdd_image-20230307144502-90.png)

![image-20230307144502-91.png](/static/img/18fa72_image-20230307144502-91.png)

ヘッダー:

![image-20230307144502-92.png](/static/img/9f0bfa_image-20230307144502-92.png)

応答：

![image-20230307144502-93.png](/static/img/d41905_image-20230307144502-93.png)

## **22.ジョブ状態の送信**

エージェントからタスクのステータスを送信します。サポートされているメソッド: 投稿

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| 心拍DTO | ハートビートDTO |  |

応答

例：

http://botcenter.akabot.io/api/robotsservice/SubmitJobState URL に POST リクエストを送信します。

![image-20230307144502-94.png](/static/img/b06782_image-20230307144502-94.png)

リクエスト：

![image-20230307144502-95.png](/static/img/6cd63d_image-20230307144502-95.png)

![image-20230307144502-96.png](/static/img/a4ef07_image-20230307144502-96.png)

ヘッダー:

![image-20230307144502-97.png](/static/img/4faca5_image-20230307144502-97.png)

応答：

## **23.プッシュログ**

ログを中央にプッシュします。サポートされているメソッド: 投稿

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| ロボット名 | 弦 |  |
| メッセージ | 配列(文字列) |  |

応答

戻り値の型: ブール値

例：

http://botcenter.akabot.io/api/logs/v1 URL に POST リクエストを送信します。

![image-20230307144502-98.png](/static/img/3d3203_image-20230307144502-98.png)

リクエスト：

![image-20230307144502-99.png](/static/img/963904_image-20230307144502-99.png)

![image-20230307144502-100.png](/static/img/4e8e9d_image-20230307144502-100.png)

ヘッダー:

![image-20230307144502-101.png](/static/img/5d70ca_image-20230307144502-101.png)

応答：

真実

## **24.ログの取得**

ログコレクションを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| ロボット名 | 弦 | 間違い |  |
| ワークフローID | 整数 | 間違い |  |
| レベル | 整数 | 間違い | オフ(0)、致命的(1)、エラー(2)、警告(3)、情報(4)、デバッグ(5)、詳細(6) |
| ジョブID | 弦 | 間違い |  |
| クエリ文字列 | 弦 | 間違い | ログメッセージからクエリするキーワード |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|desc) 例: timeStamp,desc |

応答

戻り値の種類: コレクション(ジョブ)

例：

http://botcenter.akabot.io/api/logs URL に GET リクエストを送信します。

![image-20230307144502-102.png](/static/img/0b0ee4_image-20230307144502-102.png)

パラメータ:

![image-20230307144502-103.png](/static/img/abf1ff_image-20230307144502-103.png)

ヘッダー:

![image-20230307144502-104.png](/static/img/9c736d_image-20230307144502-104.png)

応答：

![image-20230307144502-105.png](/static/img/08d7b3_image-20230307144502-105.png)

## **25.アセットの取得**

資産情報を取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| 資産名 | 弦 |  |
| ロボットキー | 弦 |  |

応答

戻り値の種類: AssetVM

例：

http://botcenter.akabot.io/api/studioservice/GetAsset URL に GET リクエストを送信します。

![image-20230307144502-106.png](/static/img/ebe957_image-20230307144502-106.png)

パラメータ:

![image-20230307144502-107.png](/static/img/26245e_image-20230307144502-107.png)

ヘッダー:

![image-20230307144502-108.png](/static/img/1e6509_image-20230307144502-108.png)

応答：

![image-20230307144502-109.png](/static/img/4346fb_image-20230307144502-109.png)

## **26.資産を設定**

資産の価値を更新します。サポートされているメソッド: 投稿

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| アセットVM | アセットVM |  |

応答

戻り値の型: ブール値

例：

[http://botcenter.akabot.io/api/studioservice/SetAsset](http://botcenter.akabot.io/api/studioservice/SetAsset)URL に POST リクエストを送信します。

![image-20230307144502-110.png](/static/img/278012_image-20230307144502-110.png)

リクエスト：

![image-20230307144502-111.png](/static/img/e8a0ee_image-20230307144502-111.png)

![image-20230307144502-112.png](/static/img/037f0c_image-20230307144502-112.png)

ヘッダー:

![image-20230307144502-113.png](/static/img/d52589_image-20230307144502-113.png)

応答：

真実

## **27. GetQueue**

キューのコレクションを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| 名前 | 長さ | 間違い | キューID |
| キュー名 | 弦 | 間違い | キュー名 |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|desc) 例: timeStamp,desc |

応答

戻り値の種類: コレクション(キュー)

例：

http://botcenter.akabot.io/api/queue URL に GET リクエストを送信します。

![image-20230307144502-114.png](/static/img/7e0814_image-20230307144502-114.png)

パラメータ:

![image-20230307144502-115.png](/static/img/a9ae8f_image-20230307144502-115.png)

ヘッダー:

![image-20230307144502-116.png](/static/img/4a4002_image-20230307144502-116.png)

応答：

## 画像-20230307144502-117.png**28。 GetQueuItems**

QueueItem コレクションを取得します。サポートされているメソッド: 投稿

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| キュー名 | 弦 |  |
| 参照 | 弦 |  |
| フィルター戦略 | 文字列 (STARTSWITH、EQUALS) | 参考までに |
| 状態 | 文字列(新規、進行中、失敗、成功、放棄、再試行、削除、期限切れ) | キュー項目のステータス、フィルターの複数値のサポート |
| から | 日時 | 日付の作成 |
| に | 日時 | 日付の作成 |
| トップ | 内部 | アイテムの返品を制限する |
| スキップ | 内部 | オフセット |

応答

戻り値の種類: コレクション(QueueItem)

例：

http://botcenter.akabot.io/api/queue/getQueueItems URL に POST リクエストを送信します。

![image-20230307144502-118.png](/static/img/ecf214_image-20230307144502-118.png)

リクエスト：

![image-20230307144502-119.png](/static/img/ff76e6_image-20230307144502-119.png)

![image-20230307144502-120.png](/static/img/4788e6_image-20230307144502-120.png)

ヘッダー:

![image-20230307144502-121.png](/static/img/4bb6d5_image-20230307144502-121.png)

応答：

![image-20230307144502-122.png](/static/img/14ae1d_image-20230307144502-122.png)

## **29. GetQueueDetails**

QueueItem コレクションを取得します。サポートされているメソッド: Get

パラメータ

|  |  |  |  |
| --- | --- | --- | --- |
| 名前 | タイプ | 必須 | 説明 |
| ID | 長さ | 真実 | キューID |
| 参照 | 弦 | 間違い |  |
| 例外 | 整数 | 間違い | アプリケーション(0)、ビジネス(1) |
| 優先度 | 整数 | 間違い | 高(3)、標準(2)、低(1) |
| 状態 | 整数 | 間違い | 新規(0)、進行中(1)、失敗(2)、成功(3)、放棄(4)、再試行(5)、削除(6)、期限切れ(7) |
| 特定のデータ | 弦 | 間違い | 特定のデータからクエリするキーワード |
| 開始から | 日時 | 間違い | 開始時刻からのクエリ |
| 開始まで | 日時 | 間違い | 開始時刻からのクエリ |
| ページ | 整数 | 間違い | 要求されたページのページ番号 |
| サイズ | 整数 | 間違い | ページのサイズ(上部) |
| 選別 | 弦 | 間違い | 形式の並べ替え基準: property(,asc|desc) 例: timeStamp,desc |

応答

戻り値の種類: コレクション(QueueItems)

例：

http://botcenter.akabot.io/api/queue/{id}/detail URL に GET リクエストを送信します。

![image-20230307144502-123.png](/static/img/c06335_image-20230307144502-123.png)

パラメータ:

![image-20230307144502-124.png](/static/img/badddb_image-20230307144502-124.png)

ヘッダー:

![image-20230307144502-125.png](/static/img/a3e03a_image-20230307144502-125.png)

応答：

![image-20230307144502-126.png](/static/img/1ceb4d_image-20230307144502-126.png)

## **30.キューアイテムの追加**

キューアイテムを追加します。 HTTPメソッド：ポスト

パラメータ

|  |  |  |
| --- | --- | --- |
| 名前 | タイプ | 説明 |
| キュー名 | 弦 |  |
| 優先度 | 文字列(高、標準、低) |  |
| 参照 | 弦 |  |
| ロボット名 | 弦 |  |
| 特定のデータ | 弦 |  |
| 締め切り | データ時間 |  |
| 延期 | 日時 |  |

応答

戻り値の種類: HttpStatus

例：

http://botcenter.akabot.io/api/queue/addQueueItem URL に POST リクエストを送信します。

![image-20230307144502-127.png](/static/img/1e5308_image-20230307144502-127.png)

ヘッダー:

![image-20230307144502-128.png](/static/img/651874_image-20230307144502-128.png)

リクエスト：

![image-20230307144502-129.png](/static/img/e845af_image-20230307144502-129.png)
