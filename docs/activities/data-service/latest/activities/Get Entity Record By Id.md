---
id: Get Entity Record By Id
title: "Get Entity Record By Id"
sidebar_label: "Get Entity Record By Id"
sidebar_position: 3
description: "Get Entity Record By Id activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Entity Record By Id

RCA.Activities.DataService.GetEntityRecordById

## **Description**

This activity allow to retrieve an existing record for the selected Entity from the Data Service.

## **In the body of activity**

* **Entity:** Select the entity you want to use with the activity. The property only supports entities imported from Data Service
* **Record Id**: Once you select an entity, the wizard asks you to provide the ID of the record you want to retrieve from the entity

## **Properties**

* **Common**
  + Continue On Error:  Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values (True, False). The default value is False. As a result, if the field is blank and an error is thrown, the execution of the project stops. If the value is set to True, the execution of the project continues regardless of any error.
  + Timeout Ms: Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown.
* **Input**

  + Entity:  The entity you want to use with the activity. The property only supports entities imported from Data Service
  + Input Record: The record that is to be created for the selected Entity type. Must be of the same type as the selected Entity Type
* **Misc**
  + Display Name: The display name of the activity.
  + Public: If selected, the values of variables and arguments will be logged at Verbose level.
* **Output**
  + Output Record: The record created from the Data Service, stored in an Entity type object. This field only supports objects of types imported from Data Service and must be of the same type as the selected Entity Type.

![image-20230630131859-3.png](/img/5935e4_image-20230630131859-3.png)
