---
id: delete-bucket
title: "Delete Bucket"
sidebar_label: "Delete Bucket"
sidebar_position: 2
description: "Delete Bucket activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Bucket

RCA.Activities.GoogleCloud.GCPDeleteBucket

## **Description**

Deletes a Google Cloud Storage bucket.

![delete-bucket](/static/img/delete-bucket.png)

(\*For mandatory)

## **In the body of the activity**

* **Bucket** - The bucket to delete.

## **Properties**

**Input**

* **Bucket**: `InArgument<GCPBucket>`* - The bucket to delete.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Options**

* **Empty Content: Boolean** - Specifies whether to empty bucket content before deleting the bucket.