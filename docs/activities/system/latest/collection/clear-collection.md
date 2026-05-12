---
id: clear-collection
title: "Clear Collection"
sidebar_label: "Clear Collection"
sidebar_position: 2
description: "Clear Collection activity documentation."
displayed_sidebar: activitiesSidebar
---
# Clear Collection

`System.Activities.Statements.ClearCollection<System.Int32>`

## **Description**

This activity allows to clear a specified collection of all items

![image-20220505152501-1.png](/img/9d9c08_image-20220505152501-1.png)  
(\* for Mandatory)

## **Properties**

**Misc**

* **Collection (ICollection&lt;T&gt;)**\* - You can enter your collection you want to be cleared here.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Clear Collection”
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **TypeArgument (Dropdown List)** - The type argument of the collection and the item you want to clear. You can select different options based on the Data type of the collection you use.
  **Notes:** Once the TypeArgument is set, the Collection properties variable type will automatically updated accordingly and will only accept said variable type as input.
