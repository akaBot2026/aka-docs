---
id: Delete Entity Record
title: "Delete Entity Record"
sidebar_label: "Delete Entity Record"
sidebar_position: 5
description: "Delete Entity Record activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Entity Record

RCA.Activities.DataService.DeleteEntityRecord

## **Description**

This activity allows to delete a specified record for the selected Entity from the Data Service.

## **In the body of activity**

* **Entity:** Select the entity you want to use with the activity. The property only supports entities imported from Data Service.
* **Record Id**: The record to be updated for the selected Entity type based on the Id field of the Input Record

## **Properties**

* **​​​​​​​Common**
  + Continue On Error:  Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values (True, False). The default value is False. As a result, if the field is blank and an error is thrown, the execution of the project stops. If the value is set to True, the execution of the project continues regardless of any error.
  + Timeout Ms: Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown.
* **Input**

  + Entity:  The entity you want to use with the activity. The property only supports entities imported from Data Service
  + Record Id: the ID of the record you want to retrieve from the entity
* **Misc**
  + **​​​​​​​​​​​​​​** Display Name: The display name of the activity.
  + Public: If selected, the values of variables and arguments will be logged at Verbose level.
* **Output​​​​​​​**
  + Output Record: The record created from the Data Service, stored in an Entity type object. This field only supports objects of types imported from Data Service and must be of the same type as the selected Entity Type.

![image-20230630131938-5.png](/img/32dec1_image-20230630131938-5.png)
