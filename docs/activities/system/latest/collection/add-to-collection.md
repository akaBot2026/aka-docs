---
id: add-to-collection
title: "Add To Collection"
sidebar_label: "Add To Collection"
sidebar_position: 1
description: "Add To Collection activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add To Collection

`System.Activities.Statements.AddToCollection<System.Int32>`

## **Description**

This activity allows you to add items to an existing collection.

![image-20220505155447-1.png](/img/5a4939_image-20220505155447-1.png)

(\* for Mandatory)

## **Properties**

**Misc**

* **Collection (ICollection&lt;T&gt;)** - The collection that receives the new item.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Add to Collection”
* **Item (TypeArgument)**\* - The number of item you want to add to the collection.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **TypeArgument (Dropdown List)** - The type argument of the collection and the item you want to add. You can select different options based on the data type of the collection you use.  
  **Notes:** Once the TypeArgument is set, the Item and Collection properties' variable type will automatically updated accordingly and will only accept said variable type as input.
