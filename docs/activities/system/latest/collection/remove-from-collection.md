---
id: remove-from-collection
title: "Remove From Collection"
sidebar_label: "Remove From Collection"
sidebar_position: 4
description: "Remove From Collection activity documentation."
displayed_sidebar: activitiesSidebar
---
# Remove From Collection

`System.Activities.Statements.RemoveFromCollection<System.Int32>`

## **Description**

This activity allows you to remove item in a specified collection

![image-20220505155850-1.png](/img/2bcb2f_image-20220505155850-1.png)

(\* for Mandatory)

## **Properties**

**Misc**

* **Collection (ICollection&lt;T&gt;)**\* - The collection from which to remove the Item.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Remove from Collection”
* **Item (TypeArgument)**\* - The item to remove from the specified Collection.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Result (Boolean)**- The result after removing item from existing data.
* **TypeArgument (Dropdown List)**\* - The type argument of the collection and the item you want to remove. You can select different options based on the Data type of the collection you use  
  **Notes:** Once the TypeArgument is set, the Item and Collection properties' variable type will automatically updated accordingly and will only accept said variable type as input.
