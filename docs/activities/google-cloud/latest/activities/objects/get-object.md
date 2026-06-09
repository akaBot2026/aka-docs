---
id: get-object
title: "Get Object"
sidebar_label: "Get Object"
sidebar_position: 3
description: "Get Object activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Object

RCA.Activities.GoogleCloud.GCPGetObject

## **Description**

Retrieves a Google Cloud Storage object.

![get-object.png](/static/img/get-object.png)

(\*For mandatory)

## **In the body of the activity**

* **Bucket** - The bucket containing the object.
* **Object Name** - The name of the object to retrieve.

## **Properties**

**Input**

* **Bucket**: `InArgument<GCPBucket>`* - The bucket containing the object.

* **Object Name**: `InArgument<String>`* - The object name.

* **Generation**: `InArgument<Int64>` - The object generation to retrieve.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Object**: `OutArgument<GCPObject>` - The retrieved object.
