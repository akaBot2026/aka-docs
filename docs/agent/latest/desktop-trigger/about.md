---
id: about
title: "About Desktop Trigger"
sidebar_label: "About"
sidebar_position: 2
description: "About Desktop Trigger documentation."
displayed_sidebar: agentSidebar
---
# About Desktop Trigger

**Desktop Triggers** enable a task to run automatically in response to an event that occurs on the computer, such as a new window opening or a specific file created.

akaBot Desktop Trigger supports the following types of triggering events, also referred to as actions:

**Window**

  Window triggers launch an automated task when an application window action takes place. Desktop Triggers provides the list of open applications and enables refreshing the list at any time. Select from the following options as the trigger event:

* When an application window opens.
* When an application window closes.

**File**
  
  File triggers launch the automated task when a file action takes place. Select from any of the following options as the trigger event:

* When a new file is created.
* When an existing file is deleted.
* When a file is renamed.
* When a file is modified.

**Folder**

   Folder triggers launch an automated task when events affect folders on the computer. Select from any of the following options as the trigger event:

* When a new file is created in the folder.
* When an existing file is deleted in the folder.
* When a file is renamed in the folder.
* When a new folder is created.
* When an existing folder is deleted.
* When a folder is renamed.
* When a folder is modified.

**Hotkey**

Hotkey triggers launch an automated task when pressing a predefined hotkey on your keyboard.

Service
:   Service triggers launch an automated task when a system service takes action. Select from any of the following options as the trigger event:

* When a service starts running.
* When a service stops running.
* When a service resumes running.
* When a service pauses.

**Email**

   Email triggers launch an automated task when an email is received in the email account that you specify. To specify a trigger for new incoming email messages on a mail server, specify the following:

* Host name
* Port details
* User name
* Password
* A time interval to use between checking for new messages
* If the email account uses SSL, check Server Uses Secure Connection (SSL).

**Process**
   
   Process triggers launch an automated task when a system process starts or stops. Select from either of the following options as the trigger event:

* When a process starts running.
* When a process stops running.

This feature is currently in beta, which means it is not yet fully stable. We invite you to experience this feature and provide feedback to our support team if you have any questions or encounter any issues.

**Interface**

Interface triggers are used to automate tasks based on user interface events such as clicking a button Selecting an item from a drop-down menu Filling out a form.

This feature is currently in beta, which means it is not yet fully stable. We invite you to experience this feature and provide feedback to our support team if you have any questions or encounter any issues.