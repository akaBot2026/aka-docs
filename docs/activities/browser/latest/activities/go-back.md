---
id: go-back
title: "Go Back"
sidebar_label: "Go Back"
sidebar_position: 6
description: "Go Back activity documentation."
displayed_sidebar: activitiesSidebar
---
# Go Back

RCA.Activities.Browser.GoBack

## **Description**

The Go Back activity goes back one URL in the history list of the current browser.

![Browser_GoBack](/img/dc4c6f_bdce0db-screenshot_2021-05-25_154910.jpg)

(\* For Mandatory)

## **In the body of the activity**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Misc**

* **Display (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [2446667] Go Back
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.
