---
id: delete-object
title: "Delete Object"
sidebar_label: "Delete Object"
sidebar_position: 2
description: "Delete Object activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Object

RCA.Activities.GoogleCloud.GCPDeleteObject

## **Description**

Deletes a Google Cloud Storage object.

![delete-object](/static/img/delete-object.png)

(\*For mandatory)

## **In the body of the activity**

* **Object** - The object to delete.

## **Properties**

**Input**

* **Object**: `InArgument<GCPObject>`* - The object to delete.

* **Generation**: `InArgument<Int64>` - The object generation to delete.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
