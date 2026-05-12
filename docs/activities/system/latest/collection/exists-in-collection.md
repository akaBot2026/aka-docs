---
id: exists-in-collection
title: "Exists In Collection"
sidebar_label: "Exists In Collection"
sidebar_position: 3
description: "Exists In Collection activity documentation."
displayed_sidebar: activitiesSidebar
---
# Exists In Collection

`System.Activities.Statements.ExistsInCollection<System.Int32>`

## **Description**

This activity allows you to check whether the item exists in a collection or not.

![image-20220505155730-1.png](/img/2cd127_image-20220505155730-1.png)

(\* for Mandatory)

## **Properties**

**Misc**

* **Collection (ICollection)**\* - The collection in which to check if the item exists. This collection is of type ICollection
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Exists In Collection”
* **Item (TypeArgument)**\* - The item whose existence is to be checked in the Collection.
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Result (Boolean)** - A value that indicates whether the specified item exists in the collection.
* **TypeArgument (Dropdown List)** - The type argument of the collection and the item you want to check for existence. You can select different options based on the Data type of the collection you use.  
  **Notes:** Once the TypeArgument is set, the Item and Collection properties' variable type will automatically updated accordingly and will only accept said variable type as input.
