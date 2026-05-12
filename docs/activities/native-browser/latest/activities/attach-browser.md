---
id: attach-browser
title: "Attach Browser (NB)"
sidebar_label: "Attach Browser (NB)"
sidebar_position: 1
description: "Attach Browser (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Attach Browser (NB)

RCA.Activities.NativeBrowser.AttachBrowser

## **Description**

A container that enables you to attach to an already opened native browser and perform multiple actions within it.

![image-20220505145300-1.png](/img/b198e6_image-20220505145300-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.
* **Do** - The activities you want to execute within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Quit Browser on Completed or Faulted (Checkbox)** - Specifies whether the browser is closed when execution is finished or faulted. Default value is Fault.

**Input**

* **Browser (NativeBrowser)**\* - The existing browser variable that you want to attach to.
* **Browser Type (Dropdown List)** - The choice of browser for this activity to use. There are 3 choices: Chrome, Edge and Firefox
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually an XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown. The default value is 30000 milliseconds (30 seconds).  
  E.g: 30000

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Options**

* **Maximize (Boolean)** - Maximizes the size of the browser. This box is uncheck by default.
* **Zoom Factor (Int32)** - Allow you to change the magnification rate of the page. The default value is 100. If value is not set, the page magnification rate change will be ignored.

**Output**

* **Output Browser (NativeBrowser)** - Output variable of the activity with type = ‘Browser’.
