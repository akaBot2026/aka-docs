---
id: scaleconnect
title: Receive Documents with ScaleConnect
sidebar_label: ScaleConnect
sidebar_position: 2
description: Connect an external source so that its documents are processed automatically.
displayed_sidebar: akaXtractSidebar
---

# Receive Documents with ScaleConnect

ScaleConnect connects an external document source to a Pipeline.

**Before you begin:** you need permission to manage ScaleConnect, a configured ScaleConnect service, an account at the external source, and a Published Pipeline.

## Connect a Source

1. In the Pipeline, open `ScaleConnect` and select `Connect Service`.
2. Allow popups. In the connection window, select the service, sign in, and grant access.
3. Send a sample document from the source.

**Result:** the table shows `ACTIVE` and the message `ScaleConnect connection registered and subscribed.` appears. Check `Last Event` and `Status`, then find the Document and Job in the Pipeline.

## Disconnect

Select the trash icon at the end of the connection row, then select `Disconnect`. This does not delete imported documents or cancel running Jobs.

:::note
A connection can be linked to only one Pipeline in the same company. `PENDING` or `FAILED` means the connection is not ready. Check the permissions at the source, and contact support with the connection ID if the table does not explain the cause. Do not create repeated connections.
:::
