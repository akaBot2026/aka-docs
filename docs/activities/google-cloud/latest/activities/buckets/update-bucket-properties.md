---
id: update-bucket-properties
title: "Update Bucket Properties"
sidebar_label: "Update Bucket Properties"
sidebar_position: 4
description: "Update Bucket Properties activity documentation."
displayed_sidebar: activitiesSidebar
---
# Update Bucket Properties

RCA.Activities.GoogleCloud.GCPUpdateBucketProperties

## **Description**

Updates properties of a Google Cloud Storage bucket.

![update-bucket-properties](/static/img/update-bucket-properties.png)

(\*For mandatory)

## **In the body of the activity**

* **Bucket** - The bucket to update.
* **Labels** - Labels to update on the bucket.
* **Storage Class** - The storage class to set.
* **Encryption Type** - The encryption type to set.

## **Properties**

**Encryption**

* **Customer Managed Key**: `InArgument<String>` - Customer Managed Key for bucket if Encryption Type is CustomerManagedKey.

**Input**

* **Bucket**: `InArgument<GCPBucket>`* - The bucket to update.

* **Enable Versioning**: `InArgument<Boolean>` - Specifies whether bucket versioning is enabled.

* **Labels**: `InArgument<DataTable>` - Labels to update on the bucket.

* **Storage Class**: `InArgument<String>` - The storage class to set.

* **Encryption Type**: `InArgument<String>` - The encryption type to set.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
