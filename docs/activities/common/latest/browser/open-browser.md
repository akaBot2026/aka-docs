---
id: open-browser
title: "Open Browser"
sidebar_label: "Open Browser"
sidebar_position: 9
description: "Open Browser activity documentation."
displayed_sidebar: activitiesSidebar
---
# Open Browser

RCA.Activities.Common.OpenBrowser

## **Description**

The Open Browser activity allows you to navigate to a specified URL by launching a browser and executing multiple activities within it

![image-20220505134910-1.png](/img/044606_image-20220505134910-1.png)

(\*For mandatory)

## **In the body of activity**

* **URL to be inserted (String)**\* - The URL that you want to open in the browser. The URL must be quoted.  
  E.g. “[https://akabot.com/”](https://akabot.com/%E2%80%9D)
* **Do** - The activities you want to execute within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Quit Browser On Completed Or Faulted (Boolean)** - Quits browser after completed or faulted automatically.

**Input**

* **Browser Type (Dropdown List)** - The choice of browser for this activity to use. There are three choices: Chrome, Firefox, Edge.
* **Timeout MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run before an error is thrown. The default amount of time is 30000 milliseconds (30 seconds).  
  E.g: 30000
* **URL (String)**\* – Starting this destination URL when the browser is opened.  
  E.g. “[https://akabot.com/”](https://akabot.com/%E2%80%9D)

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Options**

* **Hidden (Checkbox)** - Open a hidden browser.
* **Maximize (Checkbox)** - Maximize browser window.
* **Private Mode (Checkbox)** - Open a private/igcognito session.
* **Startup Arguments (String)** - Advanced startup arguments which will be passed to the browser directly when startups
* **User Data Folder Mode (UserDataFolderMode)** - The UserDataFolderMode you want to set. It is used to start the browser with a specific user data folder.
* **User Data Folder Path (String)** - The user data folder that the browser will use. Defaults to %LocalAppData%\akaBot\BrowserProfiles\BrowserType if not set.

**Output**

* **Output Browser (NativeBrowser)** - Output variable of the activity with type = ‘Browser’.
