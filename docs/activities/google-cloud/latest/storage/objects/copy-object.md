---
id: copy-object
title: "Copy Object"
sidebar_label: "Copy Object"
sidebar_position: 1
description: "Copy Object activity documentation."
displayed_sidebar: activitiesSidebar
---
# Copy Object

RCA.Activities.GoogleCloud.GCPCopyObject

## **Description**

Copies a Google Cloud Storage object to another bucket or object name.

![copy-object](/static/img/copy-object.png)

(\*For mandatory)

## **In the body of the activity**

* **Source Object** - The source object to copy.
* **Destination Bucket** - The destination bucket.
* **Destination Object Name** - The destination object name.

## **Properties**

**Input**

* **Source Object**: `InArgument<GCPObject>`* - The source object to copy.

* **Destination Bucket**: `InArgument<GCPBucket>`* - The destination bucket.

* **Destination Object Name**: `InArgument<String>`* - The destination object name.

**Options**

* **Source Object Generation**: `InArgument<Int64>` - The source object generation to copy.

* **Destination Predefined Acl**: `InArgument<String>` - The predefined ACL to apply to the destination object.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Destination Object**: `OutArgument<GCPObject>` - The copied destination object.
