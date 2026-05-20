---
id: entities
title: "エンティティ"
sidebar_label: "エンティティ"
sidebar_position: 3
description: "エンティティドキュメント。"
displayed_sidebar: centerSidebar
---

# エンティティ

## **1. User（ユーザー）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| login | String | ユーザー名 |
| firstName | String | 名 |
| lastName | String | 姓 |
| email | String | メールアドレス |
| imageUrl | String | 画像URL |
| activated | Boolean | 有効/無効フラグ |
| langKey | String | 言語キー |
| password | String | パスワード |
| authorities | Array[String] | 割り当てられたロールの一覧 |
| authenticationServer | String | 認証サーバー（例: LDAP） |
| organizationUnits | Array[OrganizationUnit] | 所属OUの一覧 |

## **2. Robot（ロボット）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| key | String |  |
| name | String |  |
| description | String |  |
| machineName | String |  |
| userName | String |  |
| password | String |  |
| type | RobotType |  |

## **3. OrganizationUnit（組織ユニット）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| name | String |  |
| description | String |  |

## **4. Environment（環境）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| name | String |  |
| description | String |  |
| origanizationUnit | OrganizationUnit |  |
| robots | Array[Robot] |  |
| type | EnvironmentType |  |

## **5. Packages（パッケージ）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| name | String |  |
| description | String |  |
| version | String |  |
| fileName | String |  |
| status | Bool |  |

## **6. WorkFlowParameter（ワークフローパラメータ）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| name | String |  |
| value | String |  |
| type | ArgumentType |  |

## **7. WorkFlow（ワークフロー）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| name | String |  |
| processKey | String |  |
| description | String |  |
| title | String |  |
| version | String |  |
| environment | Environment |  |
| packages | Packages |  |
| parameters | Array[WorkFlowParameter] |  |

## **8. Job（ジョブ）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| jobKey | String |  |
| state | JobState |  |
| startTime | DateTime |  |
| endTime | DateTime |  |
| source | JobSource |  |
| command | JobCommand |  |
| robotId | Integer |  |
| workFlowId | Integer |  |
| processSchedulesId | Integer |  |
| info | String |  |

## **9. RobotMappingVM**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer |  |
| robotName | String |  |
| robotKey | String |  |
| machineName | String |  |
| user | String |  |
| robotType | RobotType |  |

## **10. HeartbeatDTO**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| robotKey | String |  |
| robotState | RobotState |  |
| info | String |  |
| jobKey | String |  |
| jobState | JobState |  |
| processKey | String |  |

## **11. Command（コマンド）**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| robotKey | String |  |
| type | JobCommand |  |
| source | JobSource |  |
| id | Integer |  |
| packageId | String |  |
| packageVersion | String |  |
| packagePath | String |  |
| userName | String |  |
| password | String |  |
| processKey | String |  |
| processName | String |  |
| parameters | Collection(WorkFlowParameter) |  |

## **12. HeartbeatData**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| robotKey | String |  |
| userName | String |  |
| robotName | String |  |
| data | Command |  |

## **13. AssetVM**

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| name | String |  |
| type | AssetType |  |
| robotKey | String |  |
| userName | String |  |
| password | String |  |
| value | String |  |
