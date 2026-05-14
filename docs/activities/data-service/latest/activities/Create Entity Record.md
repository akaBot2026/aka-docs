---
id: Create Entity Record
title: "Create Entity Record"
sidebar_label: "Create Entity Record"
sidebar_position: 2
description: "Create Entity Record activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create Entity Record

RCA.Activities.DataService.CreateEntityRecord

## **Description**

This activity allow to create a new record for the selected Entity in Data Service.

## **In the body of activity**

* **Entity:** Select the entity you want to use with the activity. The property only supports entities imported from Data Service
* **Switch to record view:** Click to change to other inputing data method (Json object) to create new record. After switching, the UI will change to:
* **Manage Properties:** To configure more fields, click Manage Properties, make your selection, then click Update fields/Save

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

![image-20230630131836-2.png](/static/img/199503_image-20230630131836-2.png)
