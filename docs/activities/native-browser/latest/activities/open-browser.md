---
id: open-browser
title: "Open Browser (NB)"
sidebar_label: "Open Browser (NB)"
sidebar_position: 15
description: "Open Browser (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Open Browser (NB)

RCA.Activities.NativeBrowser.OpenBrowser

## **Description**

The Open Browser (NB) activity allows you to navigate to a specified URL by launching a browser and executing multiple activities within it

![image-20220505150847-1.png](/img/c5eb05_image-20220505150847-1.png)

(\*For mandatory)

## **In the body of activity**

* **URL to be inserted (String)**\* - The URL that you want to open in the browser. The URL must be quoted.  
  E.g. “[https://akabot.com/”](https://akabot.com/%E2%80%9D)
* **Do** - The activities you want to execute within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Quit Browser On Completed Or Faulted (Checkbox)** - Specifies whether the browser is closed when execution is finished or faulted. Default value is true. This will only close window Browser opened by this activity.

**Input**

* **Browser Type (Dropdown List)** - The choice of browser for this activity to use. There are three choices: Chrome, Firefox, Edge.
* **Timeout MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. If the timeout has expired, the page would not be loaded further. The default amount of time is 30000 milliseconds.  
  Eg: 30000
* **URL (String)**\* – Starting this destination URL when the browser is opened.  
  E.g. “[https://akabot.com/”](https://akabot.com/%E2%80%9D)

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Options**

* **Maximize (Checkbox)** - Maximizes the size of the browser. This box is unchecked by default.
* **Private Mode (Checkbox)** - Check if you want to open a private/incognito session. Default value is False
* **Zoom Factor (Int32)** - Allow you to change the magnification rate of the page. The default value is 100. If the value is not set, the page magnification rate change will be ignored.

**Output**

* **Output Browser (NativeBrowser)** - Output of the activity with type = ‘Browser’. Stores all the information regarding your browser session.
