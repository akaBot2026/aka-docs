---
id: is-user-locked
title: "Is User Locked"
sidebar_label: "Is User Locked"
sidebar_position: 2
description: "is-user-locked activity documentation."
displayed_sidebar: activitiesSidebar
---

# Is User Locked

RCA.Activities.Core.IsUserLocked

## **Description**

Checks whether a Windows user session is locked on the machine. The activity calls the local Agent unlock service and returns a Boolean result.

(\* for Mandatory)

## **In the body of activity**

- **Username** – The Windows logon name to check (for example `"DOMAIN\\user"`). If empty, the activity uses the current logon user.

![is-user-locked](/static/img/is-user-locked.png)

\* indicates required fields.

## **Properties**

**Common**

- **Continue On Error (Boolean)** - Specifies to continue executing the remaining activities even if the current activity failed. Only boolean values (True, False) are supported.
- **Timeout MS (Int32)** - The maximum time (in milliseconds) to wait for the activity to complete before throwing an error. If the timeout is reached, the activity stops execution. The default value is 30000 (milliseconds). Must be greater than `0`.

**Input**

- **Username (String)** - The user's Windows logon name. If empty, the activity uses `WindowsIdentity.GetCurrent().Name` (fallback: `MachineName\UserName`).

**Misc**

- **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
- **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.

**Output**

- **Result (Boolean)** - `True` if the user session is locked; `False` if it is not locked.

## **Example**

```text
Is User Locked
    Username = "CONTOSO\\rpa.user"
    Result   = isLocked
```

If `isLocked` is `True`, you can call **Unlock User** to unlock the session.
