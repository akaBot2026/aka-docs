---
id: Query Entity Records
title: "Query Entity Records"
sidebar_label: "Query Entity Records"
sidebar_position: 6
description: "Query Entity Records activity documentation."
displayed_sidebar: activitiesSidebar
---
# Query Entity Records

RCA.Activities.DataService.QueryEntityRecords

## **Description**

This activity allows to retrieve a list of records for the selected Entity from the Data Service, according to specified filters.

## **In the body of activity**

* **Entity:** Select the entity you want to use with the activity. The property only supports entities imported from Data Service.
* Click to add filter, the Query Builder window opens
  + Choose the condition to query. User can choose AND or OR
  + From the first drop-down menu, select a field to filter by for the select entity type. You can select fields for any related entities as well.
  + From the second drop-down menu, select an operator to evaluate the selected field. The list of operators will change based on the type of selected field in first drop-down menu
  + For the third expression field, provide a value or enter an expression for the selected field. The supported value will change based on the type of selected field in first drop-down menu

## **Properties**

* **Common**
  + Continue On Error:  Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values (True, False). The default value is False. As a result, if the field is blank and an error is thrown, the execution of the project stops. If the value is set to True, the execution of the project continues regardless of any error.
  + Timeout Ms: Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown.
* **Input**

  + Entity:  The entity you want to use with the activity. The property only supports entities imported from Data Service
  + Input Record: the ID of the record you want to retrieve from the entity
  + Skip:  Helps you skip the specified number of records. If the specified value is larger than total records, no records are retrieved. This property supports values greater than or equal to 0. By default, this property is set to **0**.
  + Sort Ascending: Sorts records in ascending order based on the field specified in the **Sort By** property This field supports only Boolean values (True, False). The default value is True.
  + Sort By Field: The name of the field you want to sort retrieved records by. The name has to be same as a valid field in the selected entity type and needs to have the same capitalization. By default, this field is set to **Id**.
  + Top: Specifies the maximum number of records retrieved out of total records. This property supports values from 1 to 1000. The default value for this field is **100**.
* **Misc**
  + **​​​​​​​​​​​​​​** Display Name: The display name of the activity.
  + Public: If selected, the values of variables and arguments will be logged at Verbose level.
* **Output​​​​​​​**
  + Output Records: The record created from the Data Service, stored in an Entity type object. This field only supports objects of types imported from Data Service and must be of the same type as the selected Entity Type
  + Total Records: The total number of records matching the specified query filters

![image-20230630131952-6.png](/img/d552b8_image-20230630131952-6.png)
