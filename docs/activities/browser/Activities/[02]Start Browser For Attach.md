# [02]Start Browser For Attach - akaBot Docs

RCA.Activities.Browser.StartBrowserForAttach

Table of Content

* [Description](#HDescription)
* [In the body of activity](#HInthebodyofactivity)
* [Properties](#HProperties)

## **Description**

A container that enables you to attach to a browser which is already running

![Browser_StartBrowserForAttach](/img/554b0d-bdb1dad-screenshot-2021-05-25-173342.jpg)

(\* for Mandatory)

## **In the body of activity**

* **Click to launch browser**\* - The activities you want to attach within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Browser Type**- The choice of browser for this activity to use. There is only one choice: Chrome

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: [141414124] Start Browser for Attach
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. This tickbox is uncheck by default
