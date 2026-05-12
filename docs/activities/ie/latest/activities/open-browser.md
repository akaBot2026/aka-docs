---
id: open-browser
title: "Open Browser"
sidebar_label: "Open Browser"
sidebar_position: 15
description: "Open Browser activity documentation."
displayed_sidebar: activitiesSidebar
---
# Open Browser

RCA.Activities.IE.OpenBrowser

# 

## **Description**

The Open Browser activity of IE allows you to navigate to a specified URL by launching an IE browser and executing multiple activities within it.

![image-20220506110901-1.png](/img/204732_image-20220506110901-1.png)

(\* for Mandatory)

**In the body of activity**

* **URL (String)** - Insert a specified URL in the container.  
  Ex: “[https://google.com/”](https://google.com/%E2%80%9D)
* **Do** - Add activity to interact with the specified browser.

## **Properties**

**Input**

* **Input Browser (Browser)**\* - Insert the specified browser in which activities could be active.
* **URL (String)**\* - Provide the URL to which the browser will open.  
  Ex: “[https://google.com/”](https://google.com/%E2%80%9D)

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [95659056] Open Browser

**Options**

* **Maximize (Checkbox)** - Should select this option, the IE browser would maximize.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will terminate.  
  Ex: 30000

**Output**

* **IEBrowser (Browser)** - Output of activity in which Browser opens and interacts. All information as requested could be stored as browser session. Only the Browser variable type is supported.
