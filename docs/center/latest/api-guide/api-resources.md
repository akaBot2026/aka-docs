---
id: api-resources
title: "API resources"
sidebar_label: "API resources"
sidebar_position: 4
description: "API resources documentation."
displayed_sidebar: centerSidebar
---
# API resources

Following API endpoint and resources are exposed to be accessible with appropriate authorization.

## **1. GetRolePermisson**

Get Resources permission collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| name | String | true | Role name |

Response

ReturnType: Collection(Resource)

Example:

Make a GET request to the http://botcenter.akabot.io/api/roles/{name} URL

![image-20230307144502-1.png](/static/img/73971b_image-20230307144502-1.png)

Headers:

![image-20230307144502-2.png](/static/img/23952b_image-20230307144502-2.png)

Response:

![image-20230307144502-3.png](/static/img/image-20230307144502-3.png)

## **2. GetUsers**

Get User collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| organizationUnitId | Integer | False |  |
| searchuser | String | False | Login(username) |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: login,asc |

Response

ReturnType: Collection(User)

Example:

Make a GET request to the http://botcenter.akabot.io/api/users URL

![image-20230307144502-4.png](/static/img/e78ea6_image-20230307144502-4.png)

Params:

![image-20230307144502-5.png](/static/img/e394c8_image-20230307144502-5.png)

Headers:

![image-20230307144502-6.png](/static/img/e3a2d7_image-20230307144502-6.png)

Response:

![image-20230307144502-7.png](/static/img/a6189a_image-20230307144502-7.png)

## **3. CreateUser**

Adds a new user. HTTP method: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| userDTO | User |  |

Response

ReturnType: User

Example:

Make a POST request to the http://botcenter.akabot.io/api/users URL

![image-20230307144502-8.png](/static/img/cea544_image-20230307144502-8.png)

Headers:

![image-20230307144502-9.png](/static/img/f84255_image-20230307144502-9.png)


Request:

![image-20230307144502-10.png](/static/img/091d5d_image-20230307144502-10.png)

![image-20230307144502-11.png](/static/img/df4f55_image-20230307144502-11.png)

Response:

![image-20230307144502-12.png](/static/img/b86a28_image-20230307144502-12.png)

![image-20230307144502-13.png](/static/img/7b2a3d_image-20230307144502-13.png)



## **4. AddRole**

Adds Role for user. HTTP method: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| userRoleDTO | UserRole |  |

Response

ReturnType: StatusCode

Example:

Make a PUT request to the http://botcenter.akabot.io/api/user-add-role URL

![image-20230307144502-14.png](/static/img/177b1f_image-20230307144502-14.png)

Headers:

![image-20230307144502-15.png](/static/img/57ef5e_image-20230307144502-15.png)

Request:

![image-20230307144502-16.png](/static/img/1b0b3a_image-20230307144502-16.png)

![image-20230307144502-17.png](/static/img/88ba04_image-20230307144502-17.png)

Response:

![image-20230307144502-18.png](/static/img/022227_image-20230307144502-18.png)

Response Code: 200

## **5. RemoveRole**

Remove Role from user. HTTP method: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| userRoleDTO | UserRole |  |

Response

ReturnType: StatusCode

Example:

Make a PUT request to the http://botcenter.akabot.io/api/user-remove-role URL

![image-20230307144502-19.png](/static/img/abe9d7_image-20230307144502-19.png)

Headers:

![image-20230307144502-20.png](/static/img/816215_image-20230307144502-20.png)

Request:

![image-20230307144502-21.png](/static/img/f1b9be_image-20230307144502-21.png)

![image-20230307144502-22.png](/static/img/d84f61_image-20230307144502-22.png)

Response:

![image-20230307144502-23.png](/static/img/1d053f_image-20230307144502-23.png)

Response Code: 200

## **6. AddOrganizationUnits**

Adds Organization unit for user. HTTP method: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| UserOrganizationUnitDTO | UserRole |  |

Response

ReturnType: StatusCode

Example:

Make a PUT request to the http://botcenter.akabot.io/api/user-add-organizationUnit URL

![image-20230307144502-24.png](/static/img/4b0733_image-20230307144502-24.png)

Headers:

![image-20230307144502-25.png](/static/img/f3ee64_image-20230307144502-25.png)

Request:

![image-20230307144502-26.png](/static/img/b7ac05_image-20230307144502-26.png)

![image-20230307144502-27.png](/static/img/cf4972_image-20230307144502-27.png)

Response:

![image-20230307144502-28.png](/static/img/b1166c_image-20230307144502-28.png)

Response Code: 200

## **7. RemoveOrganizationUnits**

Remove Organization unit from user. HTTP method: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| UserOrganizationUnitDTO | UserRole |  |

Response

ReturnType: StatusCode

Example:

Make a PUT request to the http://botcenter.akabot.io/api/user-remove-organizationUnit URL

![image-20230307144502-29.png](/static/img/371ff7_image-20230307144502-29.png)

Headers:

![image-20230307144502-30.png](/static/img/2db809_image-20230307144502-30.png)

Request:

![image-20230307144502-31.png](/static/img/863477_image-20230307144502-31.png)

![image-20230307144502-32.png](/static/img/f6070d_image-20230307144502-32.png)

Response:

![image-20230307144502-33.png](/static/img/4409b9_image-20230307144502-33.png)

Response Code: 200

## **8. UpdateUser**

Update user information. HTTP method: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| userDTO | User |  |

Response

ReturnType: User

Example:

Make a PUT request to the http://botcenter.akabot.io/api/users URL

Request:

![image-20230307144502-34.png](/static/img/340fd9_image-20230307144502-34.png)

![image-20230307144502-35.png](/static/img/755477_image-20230307144502-35.png)

Response:

![image-20230307144502-36.png](/static/img/29dbf1_image-20230307144502-36.png)

![image-20230307144502-37.png](/static/img/8fbdd4_image-20230307144502-37.png)

## **9. ActivatedUser**

Activate or deactivate user. HTTP method: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| activateDTO | Activate |  |

Response

ReturnType: StatusCode

Example:

Make a PUT request to the http://botcenter.akabot.io/api/user-activated URL

![image-20230307144502-38.png](/static/img/f758dc_image-20230307144502-38.png)

Headers:

![image-20230307144502-39.png](/static/img/0a6d35_image-20230307144502-39.png)

Request:

![image-20230307144502-40.png](/static/img/ed0a24_image-20230307144502-40.png)

![image-20230307144502-41.png](/static/img/0dec4c_image-20230307144502-41.png)

Response:

![image-20230307144502-42.png](/static/img/343066_image-20230307144502-42.png)

Response Code: 200

## **10. GetAssociatedProcesses**

Returns a collection of all available associated process of a Agent. Supported methods: Get

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| robotKey | String |  |

Response

ReturnType: Collection(WorkFlow)

Example:

Make a GET request to the http://botcenter.akabot.io/api/robotsservice/GetAssociatedProcesses URL

![image-20230307144502-43.png](/static/img/93e78e_image-20230307144502-43.png)

Params:

![image-20230307144502-44.png](/static/img/47ff18_image-20230307144502-44.png)

Headers:

![image-20230307144502-45.png](/static/img/7dbf8e_image-20230307144502-45.png)

Response:

![image-20230307144502-46.png](/static/img/c474f4_image-20230307144502-46.png)



## **11. Workflows**

Get WorkFlow collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| organizationUnitId | Integer | False |  |
| environmentId | Integer | False | Agent Group ID |
| environmentName | String | False | Agent Group Name |
| workflowId | Integer | False |  |
| workflowName | String | False |  |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: name,asc |

Response

ReturnType: Collection(WorkFlow)

Example:

Make a GET request to the http://botcenter.akabot.io/api/work-flows URL

![image-20230307144502-47.png](/static/img/bcc9fa_image-20230307144502-47.png)

Params:

![image-20230307144502-48.png](/static/img/4c591d_image-20230307144502-48.png)

Headers:

![image-20230307144502-49.png](/static/img/077d74_image-20230307144502-49.png)

Response:

![image-20230307144502-50.png](/static/img/2f5f40_image-20230307144502-50.png)

## **12. WorkFlowVersion**

Get WorkFlow version. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| workflowId | Long | True |  |

Response

ReturnType: String

Example:

Make a GET request to the http://botcenter.akabot.io/api/workflowversion URL

![image-20230307144502-51.png](/static/img/4c3828_image-20230307144502-51.png)

Params:

![image-20230307144502-52.png](/static/img/7641f4_image-20230307144502-52.png)

Headers:

![image-20230307144502-53.png](/static/img/f89582_image-20230307144502-53.png)

Response:

1.0.12380.19828

## **13. UpdateWorkFlowVersion**

Update version of workflow. Supported methods: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer | workflowId |
| version | String |  |

Response

ReturnType: Workflow

Example:

Make a PUT request to the http://botcenter.akabot.io/api/work-flows/{id}/version URL

![image-20230307144502-54.png](/static/img/af9cf4_image-20230307144502-54.png)

Headers:

![image-20230307144502-55.png](/static/img/728ccb_image-20230307144502-55.png)

Response

![image-20230307144502-56.png](/static/img/2072c6_image-20230307144502-56.png)

## **14. UploadPackage**

Upload package to Packages Repository. Supported methods: Post

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Parameter Type | Type | Content Type |
| package | form-data | File | multipart/form-data |
| environmentIds | form-data | Array[long] | application/json |

Response

ReturnType: Packages

Example:

Make a POST request to the http://botcenter.akabot.io/api/packageupload URL

![image-20230307144502-57.png](/static/img/72996b_image-20230307144502-57.png)

Params:

![image-20230307144502-58.png](/static/img/e279d7_image-20230307144502-58.png)

Headers:

![image-20230307144502-59.png](/static/img/fd5196_image-20230307144502-59.png)

Response

![image-20230307144502-60.png](/static/img/image-20230307144502-60.png)

## **15. Environments**

Get Agent Group. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| organizationUnitId | Integer | False |  |
| environmentname | String | False | Agent Group Name |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: name,asc |

Response

ReturnType: Collection(Environment)

Example:

Make a GET request to the http://botcenter.akabot.io/api/environments URL

![image-20230307144502-61.png](/static/img/23f73a_image-20230307144502-61.png)

Params:

![image-20230307144502-62.png](/static/img/dea7e3_image-20230307144502-62.png)

Headers:

![image-20230307144502-63.png](/static/img/1670a1_image-20230307144502-63.png)

Response:

![image-20230307144502-64.png](/static/img/73ad73_image-20230307144502-64.png)

## **16. StartJob**

Adds a new job and sets it in Pending state for each Agent based on the input parameters and notifies the respective Agents about the pending job. HTTP method: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| jobDTO | Job |  |

Response

ReturnType: Job

Example:

Make a POST request to the http://botcenter.akabot.io/api/jobs-processing URL

![image-20230307144502-65.png](/static/img/7f67f2_image-20230307144502-65.png)

Headers:

![image-20230307144502-66.png](/static/img/a9924e_image-20230307144502-66.png)

Request:

![image-20230307144502-67.png](/static/img/1734bd_image-20230307144502-67.png)

![image-20230307144502-68.png](/static/img/160073_image-20230307144502-68.png)

Response:

![image-20230307144502-69.png](/static/img/43cfbf_image-20230307144502-69.png)

![image-20230307144502-70.png](/static/img/8250e5_image-20230307144502-70.png)StopJob

Cancels or terminates the specified job. Supported methods: Put

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer | jobId |
| value | String(STOP, KILL) |  |

Response

ReturnType: Job

Example:

Make a PUT request to the http://botcenter.akabot.io/api/jobs-processing/{id}/{value} URL

![image-20230307144502-71.png](/static/img/4a4775_image-20230307144502-71.png)

Headers:

![image-20230307144502-72.png](/static/img/e05927_image-20230307144502-72.png)

Response

![image-20230307144502-73.png](/static/img/3c13ff_image-20230307144502-73.png)

## **17. GetJob**

Get job information. Supported methods: Get

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| id | Integer | jobId |

Response

ReturnType: Job

Example:

Make a GET request to the http://botcenter.akabot.io/api/jobs/{id} URL

![image-20230307144502-74.png](/static/img/577af8_image-20230307144502-74.png)

Headers:

![image-20230307144502-75.png](/static/img/d380cc_image-20230307144502-75.png)

Response

![image-20230307144502-76.png](/static/img/049f65_image-20230307144502-76.png)

## **18. GetJobs**

Get Job collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| organizationUnitId | Integer | False |  |
| environmentId | Integer | False | Agent Group ID |
| robotId | Integer | False |  |
| scheduleId | Integer | False |  |
| state | String | False | (PENDING, RUNNING, STOPPED, FAULTED, SUCCESSFUL).  Supported multiple states, separated by commas |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: startTime,desc |

Response

ReturnType: Collection(Job)

Example:

Make a GET request to the http://botcenter.akabot.io/api/jobs URL

![image-20230307144502-77.png](/static/img/0c091e_image-20230307144502-77.png)

Params:

![image-20230307144502-78.png](/static/img/85ca89_image-20230307144502-78.png)

Headers:

![image-20230307144502-79.png](/static/img/b98b63_image-20230307144502-79.png)

Response:

![image-20230307144502-80.png](/static/img/a47747_image-20230307144502-80.png)

## **19. GetRobotMapping**

Get robot mapping information. Supported methods: Get

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| licenseKey | String | Agent key |
| machineName | String |  |

Response

ReturnType: RobotMappingVM

Example:

Make a GET request to the http://botcenter.akabot.io/api/robotsservice/GetRobotMappings URL

![image-20230307144502-81.png](/static/img/0a259c_image-20230307144502-81.png)

Params:

![image-20230307144502-82.png](/static/img/cefdc8_image-20230307144502-82.png)

Headers:

![image-20230307144502-83.png](/static/img/fbe98f_image-20230307144502-83.png)

Response:

![image-20230307144502-84.png](/static/img/3f2fa0_image-20230307144502-84.png)

## **20. GetRobots**

Get Robot collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| organizationUnitId | Integer | False |  |
| environmentId | Integer | False | Agent Group ID |
| robotId | Integer | False |  |
| robot\_type | Integer | False | DEVELOPMENT(0), ASSITANT(1), STAGING(2), PRODUCTION(3) |
| robot\_status | Integer | False | AVAILABLE(0), BUSY(1), DISCONNECTED(2), UNRESPONSIVE(3) |
| search | String | False | Agent name(robot name) |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: name,asc |

Response

ReturnType: Collection(Robot)

Example:

Make a GET request to the http://botcenter.akabot.io/api/robots URL

![image-20230307144502-85.png](/static/img/c87f06_image-20230307144502-85.png)

Params:

![image-20230307144502-86.png](/static/img/f14fd3_image-20230307144502-86.png)

Headers:

![image-20230307144502-87.png](/static/img/110df4_image-20230307144502-87.png)

Response:

![image-20230307144502-88.png](/static/img/00d468_image-20230307144502-88.png)

## **21. SubmitHeartbeat**

Submit status of agent and get list tasks command. Supported methods: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| heartbeatDTO | HeartbeatDTO |  |

Response

ReturnType: HeartbeatData

Example:

Make a POST request to the http://botcenter.akabot.io/api/robotsservice/SubmitHeartbeat URL

![image-20230307144502-89.png](/static/img/8b9457_image-20230307144502-89.png)

Request:

![image-20230307144502-90.png](/static/img/c1efdd_image-20230307144502-90.png)

![image-20230307144502-91.png](/static/img/18fa72_image-20230307144502-91.png)

Headers:

![image-20230307144502-92.png](/static/img/9f0bfa_image-20230307144502-92.png)

Response:

![image-20230307144502-93.png](/static/img/d41905_image-20230307144502-93.png)

## **22. SubmitJobState**

Submit status of task from agent. Supported methods: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| heartbeatDTO | HeartbeatDTO |  |

Response

Example:

Make a POST request to the http://botcenter.akabot.io/api/robotsservice/SubmitJobState URL

![image-20230307144502-94.png](/static/img/b06782_image-20230307144502-94.png)

Request:

![image-20230307144502-95.png](/static/img/6cd63d_image-20230307144502-95.png)

![image-20230307144502-96.png](/static/img/a4ef07_image-20230307144502-96.png)

Headers:

![image-20230307144502-97.png](/static/img/4faca5_image-20230307144502-97.png)

Response:

## **23.PushLogs**

Push log to center. Supported methods: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| robotName | String |  |
| messages | Array(String) |  |

Response

ReturnType: Bool

Example:

Make a POST request to the http://botcenter.akabot.io/api/logs/v1 URL

![image-20230307144502-98.png](/static/img/3d3203_image-20230307144502-98.png)

Request:

![image-20230307144502-99.png](/static/img/963904_image-20230307144502-99.png)

![image-20230307144502-100.png](/static/img/4e8e9d_image-20230307144502-100.png)

Headers:

![image-20230307144502-101.png](/static/img/5d70ca_image-20230307144502-101.png)

Response:

True

## **24. GetLogs**

Get Log collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| robotName | String | False |  |
| workflowId | Integer | False |  |
| level | Integer | False | OFF(0), FATAL(1), ERROR(2), WARNING(3), INFORMATION(4), DEBUG(5), VERBOSE(6) |
| jobId | String | False |  |
| queryString | String | False | Keyword to query from log message |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: timeStamp,desc |

Response

ReturnType: Collection(Job)

Example:

Make a GET request to the http://botcenter.akabot.io/api/logs URL

![image-20230307144502-102.png](/static/img/0b0ee4_image-20230307144502-102.png)

Params:

![image-20230307144502-103.png](/static/img/abf1ff_image-20230307144502-103.png)

Headers:

![image-20230307144502-104.png](/static/img/9c736d_image-20230307144502-104.png)

Response:

![image-20230307144502-105.png](/static/img/08d7b3_image-20230307144502-105.png)

## **25. GetAsset**

Get asset information. Supported methods: Get

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| assetName | String |  |
| robotKey | String |  |

Response

ReturnType: AssetVM

Example:

Make a GET request to the http://botcenter.akabot.io/api/studioservice/GetAsset URL

![image-20230307144502-106.png](/static/img/ebe957_image-20230307144502-106.png)

Params:

![image-20230307144502-107.png](/static/img/26245e_image-20230307144502-107.png)

Headers:

![image-20230307144502-108.png](/static/img/1e6509_image-20230307144502-108.png)

Response:

![image-20230307144502-109.png](/static/img/4346fb_image-20230307144502-109.png)

## **26. SetAsset**

Update value of asset. Supported methods: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| assetVM | AssetVM |  |

Response

ReturnType: Bool

Example:

Make a POST request to the [http://botcenter.akabot.io/api/studioservice/SetAsset](http://botcenter.akabot.io/api/studioservice/SetAsset) URL

![image-20230307144502-110.png](/static/img/278012_image-20230307144502-110.png)

Request:

![image-20230307144502-111.png](/static/img/e8a0ee_image-20230307144502-111.png)

![image-20230307144502-112.png](/static/img/037f0c_image-20230307144502-112.png)

Headers:

![image-20230307144502-113.png](/static/img/d52589_image-20230307144502-113.png)

Response:

True

## **27. GetQueue**

Get Queue collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| name | Long | False | Queue id |
| queueName | String | False | Queue name |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: timeStamp,desc |

Response

ReturnType: Collection(Queue)

Example:

Make a GET request to the http://botcenter.akabot.io/api/queue URL

![image-20230307144502-114.png](/static/img/7e0814_image-20230307144502-114.png)

Params:

![image-20230307144502-115.png](/static/img/a9ae8f_image-20230307144502-115.png)

Headers:

![image-20230307144502-116.png](/static/img/4a4002_image-20230307144502-116.png)

Response:

## image-20230307144502-117.png**28. GetQueuItems**

Get QueueItem collections. Supported methods: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| queueName | String |  |
| reference | String |  |
| filterStrategy | String (STARTSWITH, EQUALS) | For reference |
| status | String(New, InProgress, Failed, Successful, Abandoned, Retried, Deleted, Expired) | Status of queue item, support filter multi value |
| From | DateTime | Create date |
| To | DateTime | Create date |
| Top | Int | Limit item return |
| Skip | Int | Offset |

Response

ReturnType: Collection(QueueItem)

Example:

Make a POST request to the http://botcenter.akabot.io/api/queue/getQueueItems URL

![image-20230307144502-118.png](/static/img/ecf214_image-20230307144502-118.png)

Request:

![image-20230307144502-119.png](/static/img/ff76e6_image-20230307144502-119.png)

![image-20230307144502-120.png](/static/img/4788e6_image-20230307144502-120.png)

Headers:

![image-20230307144502-121.png](/static/img/4bb6d5_image-20230307144502-121.png)

Response:

![image-20230307144502-122.png](/static/img/14ae1d_image-20230307144502-122.png)

## **29. GetQueueDetails**

Get QueueItem collections. Supported methods: Get

Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required | Description |
| id | Long | true | Queue id |
| reference | String | False |  |
| exception | Integer | False | Application(0), Business(1) |
| priority | Integer | False | High(3), Normal(2), Low(1) |
| status | Integer | False | New(0), InProgress(1), Failed(2), Successful(3), Abandoned(4), Retried(5), Deleted(6), Expired(7) |
| specificData | String | False | Keyword to query from specificData |
| startFrom | DateTime | False | Query from starttime |
| startTo | DateTime | False | Query from starttime |
| page | Integer | False | Page number of the requested page |
| size | Integer | False | Size of a page(top) |
| sort | String | False | Sorting criteria in the format: property(,asc|desc)  Ex: timeStamp,desc |

Response

ReturnType: Collection(QueueItems)

Example:

Make a GET request to the http://botcenter.akabot.io/api/queue/{id}/detail URL

![image-20230307144502-123.png](/static/img/c06335_image-20230307144502-123.png)

Params:

![image-20230307144502-124.png](/static/img/badddb_image-20230307144502-124.png)

Headers:

![image-20230307144502-125.png](/static/img/a3e03a_image-20230307144502-125.png)

Response:

![image-20230307144502-126.png](/static/img/1ceb4d_image-20230307144502-126.png)

## **30. AddQueueItem**

Adds a queue item. HTTP method: Post

Parameters

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| queueName | String |  |
| priority | String(High, Normal, Low) |  |
| reference | String |  |
| robotName | String |  |
| specificData | String |  |
| deadline | DataTime |  |
| postpone | DateTime |  |

Response

ReturnType: HttpStatus

Example:

Make a POST request to the http://botcenter.akabot.io/api/queue/addQueueItem URL

![image-20230307144502-127.png](/static/img/1e5308_image-20230307144502-127.png)

Headers:

![image-20230307144502-128.png](/static/img/651874_image-20230307144502-128.png)

Request:

![image-20230307144502-129.png](/static/img/e845af_image-20230307144502-129.png)
