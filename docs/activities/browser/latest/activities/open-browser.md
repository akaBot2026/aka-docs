---
id: open-browser
title: "Open Browser"
sidebar_label: "Open Browser"
sidebar_position: 1
description: "Open Browser activity documentation."
displayed_sidebar: activitiesSidebar
---
# Open Browser

RCA.Activities.Browser.OpenBrowser

## **Description**

The Open Browser activity allows you to navigate to a specified URL by launching a browser and executing multiple activities within it.

![1774410564895-514.png](/img/a4dc32_1774410564895-514.png)

(\* for Mandatory)

## **In the body of the activity**

* **URL to be inserted (String)**\* - The URL that you want to open in the browser. The URL must be quoted.  
  E.g: "[https://akabot.com/](https://akabot.com/%E2%80%9D)"
* **Do** - The activities you want to execute within the browser.

## **Properties**

**Browser executable path**

* Edge Executable path: Enter a visual basic expression. E.g: "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
* Firefox Executable path: Enter a visual basic expression. E.g: "C:\Program Files\Mozilla Firefox\firefox.exe"

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Quit Browser on Completed or Faulted (Checkbox)**- Specifies whether the browser is closed when execution is finished or faulted. Default value is true. This will only close window Browser opened by this activity.

**Input**

* **Browser Type (Dropdown List)** - The choice of browser for this activity to use. There are four choices: Chrome, Firefox, IE, Edge
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  Eg: 30000
* **URL (String)**\* – Starting this destination URL when the browser is opened.  
  E.g: "https://akabot.com/"

**Proxy**

* **Http Proxy (String)** - IP address of the site you’re trying to access. It is a string, so it has to be encased in quotation marks. E.g. “127.0.0.0”
* **Username (String)** - Username of the user account used to access the proxy. It is a string, so it has to be encased in quotation marks.  
  E.g: “username1”
* **Password (String)** - Password of the user account used to access the proxy. It is a string, so it has to be encased in quotation marks.  
  E.g: “password@123”

**Misc**

* **Display name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.

Eg: [34235252] Open Browser

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default value is unchecked.

**Options**

* **Arguments:**
  + In case no data needs to be passed => Leave the field empty and click **OK**
  + In case you need to pass input data (Direction = In) => Click "Create argument" => Fill in "Value" column: E.g: Value = https://akabot.com/
* **Default Download Folder (String)**- Default folder to save file  
  E.g: “D:\Users\"
* **Edge le Mode (Checkbox):** If the checkbox is selected, the browser will run in Internet Explorer (IE) mode, allowing compatibility with legacy websites that require IE rendering. Default value is unchecked.
* **Ensure Clean Session(Checkbox)** - Specifies whether the session would be cleaned before opening browser. Default value is unchecked.
* **Hide Command Prompt Window (Checkbox)** - Hide Command Prompt window of the Web Driver. Default value is checked.
* **Maximize (Checkbox)**- Maximizes the size of the browser. Default value is unchecked.
* **Show Download Prompt (Checkbox)** - Show Command Prompt window of the Web Driver. Default value is checked.
* **Use InitialBrowserUrl (Checkbox)** - It is used to start the browser with a specific url. Default value is unchecked.
* **User Profile Preferences -** Allows users to configure the browser profile using arguments (Name, Direction, Type, Value). Click "create argument" => fill in 2 columns including "Name" and "Value". E.g: "Name" = "profile.name", "value" = "profile1"

**Output**

* **Output Browser (Browser)**- Output of the activity with type = ‘Browser’. Not allow whitespace in the output’s name. Stores all the information regarding your browser session. Only Browser variables are supported.