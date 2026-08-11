---
id: unlock-user
title: "Unlock User"
sidebar_label: "Unlock User"
sidebar_position: 3
description: "unlock-user activity documentation."
displayed_sidebar: activitiesSidebar
---

# Unlock User

RCA.Activities.Core.UnlockUser

## **Description**

Unlocks a locked Windows user session on the machine. If the session is already unlocked, the activity returns `True` without sending an unlock request.

(* for Mandatory)

## **In the body of activity**

* **Username** – The Windows logon name to unlock (for example `"DOMAIN\\user"`). Used when **Authentication Type** is `LocalUser`. If empty, the activity uses the current logon user.
* **Password** – The password associated with the user. Used when **Authentication Type** is `LocalUser`.

![unlocked-user](/static/img/unlocked-user.png)

\* indicates required fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies to continue executing the remaining activities even if the current activity failed. Only boolean values (True, False) are supported.
* **Timeout MS (Int32)** - The maximum time (in milliseconds) to wait for the activity to complete before throwing an error. Also used while polling until the session is unlocked. The default value is 30000 (milliseconds). Must be greater than `0`.

**Input**

* **Username (String)** - The user's Windows logon name. Required path when **Authentication Type** is `LocalUser`. If empty, the activity uses the current logon user.
* **Password (String)** - The password associated with the credentials. Used when **Authentication Type** is `LocalUser`. Provide **Password** or **Secure Password**.
* **Secure Password (SecureString)** - The password as a `SecureString`. Used when **Authentication Type** is `LocalUser`. Provide **Password** or **Secure Password**.

**Options**

* **Authentication Type** - Selects where credentials come from:
  * `LocalUser` (default) – use **Username** and **Password** / **Secure Password** from the activity.
  * `Center` – read username, password, and window session from Agent data registered with Center. Local password fields are not used.
* **Window Session** - Window session type used for the unlock request: `Console` or `RDP`. Used with `LocalUser`. When **Authentication Type** is `Center`, the value from Agent data overrides this property if present.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.

**Output**

* **Result (Boolean)** - `True` if unlock succeeded, or if the user was already unlocked. `False` if the session is still locked after the timeout.

## **Notes**

* Requires a running Agent that can perform unlock through the local unlock service.
* When **Authentication Type** is `Center`, the Agent must return credential data. If the platform/Agent version does not support this, the activity throws: *This platform version does not support Unlock activity*.
* Typical flow: run **Is User Locked** first; if `Result` is `True`, run **Unlock User**.

## **Example**

**LocalUser**

```text
Unlock User
    Authentication Type = LocalUser
    Username            = "CONTOSO\\rpa.user"
    Secure Password     = securePwd
    Window Session      = Console
    Result              = unlocked
```

**Center**

```text
Unlock User
    Authentication Type = Center
    Result              = unlocked
```
