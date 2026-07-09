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

The **Open Browser** activity is a container that enables you to open a browser at a specified URL and execute multiple activities within it.

![1774410564895-514.png](/static/img/a4dc32_1774410564895-514.png)

**Note**:
Internal URLs cannot be automated using this activity when the browser does not directly accept them as command-line arguments. For example, you cannot open Chrome (`chrome://`) or Edge (`edge://`) internal pages. You can, however, open Firefox (`about:`) internal pages.

(\* for Mandatory)

## **In the body of the activity**

In the designer panel, the activity is presented as a container in which you can add activities to interact with the specified browser.

* **URL to be inserted (String)**\* - The URL that you want to open in the browser. The URL must be enclosed in quotation marks (e.g., `"https://akabot.com/"`).
* **Do** - The sequence container where you place the activities to execute within the opened browser.

## **Properties**

**Browser executable path**

* Edge Executable path: Enter a visual basic expression specifying the path to the Microsoft Edge executable. E.g: "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
* Firefox Executable path: Enter a visual basic expression specifying the path to the Mozilla Firefox executable. E.g: "C:\Program Files\Mozilla Firefox\firefox.exe"

**Common**

* **Continue On Error (Boolean)** - Specifies if the automation execution should continue even when the activity throws an error. This field only supports Boolean values (True, False).
  - `True` - allows the rest of the process to continue execution.
  - `False` (default) - stops the project execution and throws an error.
* **Quit Browser on Completed or Faulted (Checkbox)** - Specifies whether the browser is closed when execution finishes successfully or encounters an error. Default value is `True`. This will only close the browser window opened by this specific activity instance.

**Input**

* **Browser Type (Dropdown)** - Select the type of browser you want to use. The following options are available: `Chrome`, `Firefox`, `IE`, `Edge`.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. Default value is `30000` (30 seconds).
* **URL (String)**\* - The destination URL to navigate to when the browser is opened. Must be enclosed in quotation marks. E.g., `"https://akabot.com/"`

**Proxy**

* **Http Proxy (String)** - The IP address or hostname of the proxy server you want to use (e.g., `"127.0.0.1"`).
* **Username (String)** - The username of the user account used to authenticate with the proxy server. E.g., `"username1"`
* **Password (String)** - The password of the user account used to authenticate with the proxy server. E.g., `"password@123"`

**Misc**

* **Display Name (String)** - The name of the activity displayed in the designer panel. You can modify this name to organize and structure your code better. E.g., `[34235252] Open Browser`
* **Public (Checkbox)** - If selected, makes the activity public. Consider data security requirements before checking this option. Default is unchecked.

**Options**

* **Arguments (Collection)** - Allows you to pass command-line arguments to the browser instance on startup. 
  - To define an argument, click the ellipsis button (`...`) and add values (e.g., Direction = In, Value = `"https://akabot.com/"`).
* **Default Download Folder (String)** - Specifies the default directory path where files downloaded from this browser session will be saved. E.g., `"D:\Downloads\"`
* **Edge le Mode (Checkbox)** - If selected, launches Microsoft Edge in Internet Explorer (IE) compatibility mode to render legacy websites. Default is unchecked.
* **Ensure Clean Session (Checkbox)** - If selected, clears the cache and cookies of the browser session before opening the browser. Default is unchecked.
* **Hide Command Prompt Window (Checkbox)** - If selected, hides the command prompt window of the Web Driver during execution. Default is checked.
* **Maximize (Checkbox)** - Automatically maximizes the browser window when opened. Default is unchecked.
* **Show Download Prompt (Checkbox)** - Specifies whether to show the download prompt dialog when a file download starts. Default is checked.
* **Use InitialBrowserUrl (Checkbox)** - If selected, starts the browser using the initial URL settings defined by the browser profile. Default is unchecked.
* **User Profile Preferences (Collection)** - Allows configuration of the browser profile preferences using custom key-value arguments. E.g., Name = `"profile.name"`, Value = `"profile1"`.

**Output**

* **Output Browser (Browser)** - Stores all information regarding the opened browser session in a `Browser` variable. This variable can be passed to subsequent browser activities (like [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md)) to reuse the session. Only Browser variables are supported.

## **Step-by-Step Usage**

1. **Add the Open Browser activity**: Drag and drop the **Open Browser** activity into the workflow.
2. **Specify the target URL**: In the **Url** field, enter the target website URL in quotes (e.g., `"https://akabot.com/"`).
3. **Select the browser**: In the **Properties** panel under **Input**, choose the browser type (such as `Chrome` or `Edge`) from the **Browser Type** dropdown.
4. **Add nested activities**: Drag browser activities (like [Click](/docs/activities/browser/latest/activities/click.md) or [Type Into](/docs/activities/browser/latest/activities/type-into.md)) into the **Do** container to run within this browser session. For more details, see [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md).
5. **Run the workflow**: The activity opens the webpage and executes the nested actions.

![click-open-browser](/static/img/click-open-browser.png)

![open-browser.png](/static/img/open-browser.png)

## **Troubleshooting**

* **WebDriver Executable Errors**: If akaBot Studio fails to open the browser, ensure that the corresponding WebDriver version matches the browser version installed on your machine.
* **Browser Path Issues**: If using a custom browser installation path, specify the absolute path to the browser's executable file in the **Edge Executable path** or **Firefox Executable path** properties.
* **Element Timeout**: If activities inside the **Do** container fail because the page hasn't finished loading, increase the **Timeout MS** value or place a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity at the beginning of the container.
* **Dynamic Selectors (Cannot find element)**: If activities inside the **Do** container fail with a `Cannot find element` error on subsequent runs, the selector may contain unstable attributes (for example, auto-generated IDs or state-dependent attributes) generated by dynamic UI elements. Open the **Selector Editor** and refine the selector by removing unstable attributes, selecting more stable attributes (such as `aaname`, `tag`, or `class`), or using wildcards where appropriate.

## **Related topics**

* [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)
