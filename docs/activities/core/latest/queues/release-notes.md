---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 1
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# [1] Release Notes - akaBot Docs

## **RCA.Activities.Core v2.2.0.1**

### **Bugs Fixed**

* [SetTransactionStatus] The bot still works normally even though TimeoutMS is less than or equals 0.
* [SetTransactionProgress] The bot has not ignored the error on Set Transaction status activity even though the property: Continue on error is True.
* [GetQueueItems] There was an error while creating the Output variable: Queue Items.
* [DeleteQueueItems] Can set the status for Queue Items from Abandoned, Failed, Successful to Deleted.
* [PostponeTransactionItem] System throws an unexpected exception when the Agent is deleted right before PostponeTransactionItem is executed.
* [PostponeTransactionItem] PostponeTransactionItem works even when Deadline <= Postpone.
* [PostponeTransactionItem] Items with 'InProgress' can be postponed.
* [AddQueueItem] Should NOT allow adding a QueueItem with "Postpone" after "Deadline".

Table of Content

* [RCA.Activities.Core v2.2.0.1](#HRCA.Activities.Corev2.2.0.1)
  + [Bugs Fixed](#HBugsFixed)