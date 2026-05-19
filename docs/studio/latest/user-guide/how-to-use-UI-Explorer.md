---
id: how-to-use-UI-Explorer
title: How to Use UI Explorer
sidebar_label: How to Use UI Explorer
sidebar_position: 3
description: Design, build, and test automation workflows visually with Akabot Studio.
displayed_sidebar: studioSidebar
---

# How to use UI Explorer
## 1. Before you start 
Please read the following sections carefully to ensure you have the necessary components and understanding before using Akabot UI Explorer. 

### 1.1. Overview of UI Explorer 
Akabot UI Explorer is a powerful tool designed to help you inspect the user interface (UI) elements of various applications. Its primary function is to generate reliable selectors that can be used in your automation activities to interact with on-screen elements like buttons, text fields, tables, and more. It is an essential utility for building robust and stable automation workflows.

### 1.2. System Requirements 
- Operating system:   
- Windows 10/11, Windows Server 2016/2019/2022. 
- Hardware:  
At least 4 core CPU, 4GB RAM. 
- Akabot Platform: version 2.2.0.7 or newer.

### 1.3. Supported Technologies 
Akabot UI Explorer can inspect elements from a wide range of application types: 

- Web Browsers:   
To inspect websites, you need to have Chrome, Edge (Chromium) browsers version that support extension manifest V3 installed. 
- Windows Applications:   
Inspects native Windows applications, including: WinForms, Windows Presentation Foundation (WPF), Win32, Qt applications. 
- Java Applications:   
To inspect Java 64-bit applications, you must have JDK (64-bit) and Java Access Bridge installed and enabled on your machine. Java application running on 32-bit JDK is not supported yet. 
- SAP: Akabot UI Explorer can inspect and generate selectors for elements within the SAP GUI application. 

## 2. The UI Explorer Interface 

Understanding the interface is key to using the tool effectively. The main window is divided into several key panels.  

### 2.1. Akabot UI Explorer Installation 
**Step 1: Download the package** 

- Access the download link: https://ws3.akabot.com/s/7ZNVRTGlKIcrLjr 
- Download the compressed file (ZIP format) to your local machine (e.g., Downloads folder). 

**Step 2: Extract the ZIP file** 

- Right-click on the downloaded ZIP file. 
- Select Extract all 
- After extraction is completed, open the extracted folder. 

**Step 3: Run the Application** 

- Open the extracted folder. Double-click Akabot.UiExplorer.exe (Application file).
- If Windows Defender SmartScreen appears: 
- Click **More info.**
- Click **Run anyway** to continue.  
- The system will launch Akabot UI Explorer. 

**Step 4: Install successfully** 

- Once the application opens successfully, the Akabot UI Explorer main interface will be displayed. This indicates that the installation has been completed successfully and the tool is ready to use. 

### 2.2. Main toolbar

![1772098268044-225.png](/static/img/1772098268044-225.png)

- **Validate**: Checks if the current selector in the Selector Editor is valid and can uniquely find the UI element on the screen. The button will turn green for a valid selector or red for an invalid one. 
- **Indicate Element**: This is the main action to select a new UI element. Clicking this allows you to move your mouse over the screen, where UI elements will be highlighted. Clicking on an element captures it for inspection. 
- **Highlight**: After a selector has been generated or edited, this button will cause a red rectangle to flash around the corresponding element on the screen, confirming that your selector is pointing to the correct target. 
- **Framework Selection Dropdown (Default, UI Automation, Active Accessibility)**: This dropdown allows you to choose which technology framework UI Explorer uses to "see" the application's elements. 
- **Default**: akaBot automatically determines the best framework for the target application. 
- **UI Automation (UIA)**: A modern Microsoft framework, excellent for Windows applications built on modern technology framework (WPF, WinForms, Qt). 
Active Accessibility (AA): An older Microsoft framework, useful for legacy Win32 applications. 

### 2.3. Visual Tree panel

![1772098378438-347.png](/static/img/1772098378438-347.png)

Located on the left, the Visual Tree displays a hierarchical structure of all the UI elements currently open on the desktop. It shows the parent-child relationship between elements (e.g., a button inside a window). When you select an element on the screen, it will be automatically highlighted in this tree, allowing you to understand its context and relationship with other elements.

### 2.4. Selector Editor
The Selector Editor is the most critical part of the UI Explorer. This is where you view, analyze, and modify the selector generated for a UI element to ensure it is robust and reliable. The editor is composed of three main parts: 

Visual Editor (Top Pane): This pane presents the selector in a user-friendly, hierarchical tree structure. 
Attributes Panel (Right Pane): When you select a node in the Visual Editor, this panel displays all the attributes that Akabot detected for that specific UI element. 
Raw Text Editor (Bottom Pane): This pane shows the complete selector as a single string of XML text.

![1772098454616-606.png](/static/img/1772098454616-606.png)

The Selector Editor is the most critical part of the UI Explorer. This is where you view, analyze, and modify the selector generated for a UI element to ensure it is robust and reliable. The editor is composed of three main parts: 

-  Visual Editor (Top Pane): This pane presents the selector in a user-friendly, hierarchical tree structure. 
- Attributes Panel (Right Pane): When you select a node in the Visual Editor, this panel displays all the attributes that Akabot detected for that specific UI element. 
- Raw Text Editor (Bottom Pane): This pane shows the complete selector as a single string of XML text. 
## 3. Configure browser extension

To inspect elements in web browsers, you must first install the appropriate Akabot browser extension. This extension creates a communication channel between the browser and Akabot Studio.
 
You can install the extension directly from the official web stores:

- For Google Chrome: https://chromewebstore.google.com/detail/akabot/pflniglmkbjhmlcpcgpnhnpicdfalkjb
- For Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/akabot/idcmnficjddehpcjmkfcmomijikkgdgh

If you have installed the Akabot browser extension but it is still not detected by UI Explorer or     activities, follow these steps to diagnose and resolve the issue.

**Step 1: Verify the Extension is Enabled**

- First, ensure the extension is correctly installed and activated in your browser.
- Open your browser (Chrome or Edge) and navigate to the extensions management page:
    - For Chrome: chrome://extensions/
    - For Edge: edge://extensions
- Locate the Akabot extension in the list.
- Confirm that the toggle switch is in the ON position, as shown below.

![1772099555358-583.png](/static/img/1772099555358-583.png)

**Step 2: Check if the Native Host process is running**

The browser extension communicates with akaBot through a process called Aka.RPA.NativeHost.exe. You must verify that this process is running.
- Open the Windows Task Manager by pressing Ctrl + Shift + Esc.
- Go to the **Details** tab.
- Look for the process named Aka.RPA.NativeHost.exe in the list.

![1772099593549-947.png](/static/img/1772099593549-947.png)

If this process is not running, it means there is a configuration issue preventing the browser from starting it. Proceed to Step 3.

**Step 3: Manually configure the Extension ID**

- This is the most common fix. It ensures the browser knows which extension is allowed to talk to the Native Host process.
- Find Your Extension ID
- Go back to the browser's extension management page (chrome://extensions or edge://extensions).

For Microsoft Edge:

![1772099650534-984.png](/static/img/1772099650534-984.png)

The ID of each extension will now be visible. Find the ID for the Akabot extension. It will be a long string of characters.

![1772099673898-292.png](/static/img/1772099673898-292.png)

-  For Chrome: In the top-right corner, enable Developer mode.

![1772099723441-413.png](/static/img/1772099723441-413.png)

The ID of each extension will now be visible. Find the ID for the Akabot extension. It will be a long string of characters.

![1772099743470-530.png](/static/img/1772099743470-530.png)

•    Edit the Native Host Manifest File 

o    Using File Explorer, navigate to the akaBot NativeHost installation folder. The default path is: **C:\Program Files\FPT Software\akaBot Platform\akaBot\NativeHost**

![1772099758202-683.png](/static/img/1772099758202-683.png)

•    Open the JSON file that corresponds to your browser with a text editor (eg. Notepad) with administrator privilege.

![1772099787728-744.png](/static/img/1772099787728-744.png)

•    Verify that an entry of  your extension ID exists in the list. The sample is as below image.

![1772099799784-202.png](/static/img/1772099799784-202.png)

•    If it is missing, add it to the list. Each entry must be on its own line, enclosed in double quotes, with a comma at the end (except for the last entry).

•    Save the JSON file. Close all windows of your web browser and restart it.

•    Restart akaBot Studio. The connection should now be established correctly.

## 4. Configure Java Access Bridge

To inspect and automate elements in Java applications (e.g., Swing, AWT), you must have a Java Development Kit (JDK) installed and the Java Access Bridge enabled.

**Step 1: Download the JDK**

- Go to the official Oracle download page: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html

- Download the Windows x64 Installer (.exe file) for JDK 17.

![1772099825691-228.png](/static/img/1772099825691-228.png)


**Step 2: Install**

- Open the downloaded .exe file and follow the installation wizard. It is recommended to use the default installation path: **C:\Program Files\Java\jdk-17**
- This is a successful screen: 

![1772099873350-362.png](/static/img/1772099873350-362.png)


**Step 3: Verify the installation**

- Open Command Prompt and type: **java --version**
- Then, if you see something like:
   - **java 17.0.xx LTS**
   - Java(TM) SE Runtime Environment ... then Java is installed correctly.

![1772099955435-708.png](/static/img/1772099955435-708.png)

**Step 4: Add Java to the PATH (if needed)**

•    Open Environment Variables: Press Windows Key + S, type environment variables, and open

•    Edit the system environment variables.

•    Click Environment Variables….

**Step 5: Edit the PATH**

•    Under System variables, find Path → click Edit.

•    Click New and add: **C:\Program Files\Java\jdk-17\bin**

•    Click OK on all windows.

![1772099972587-233.png](/static/img/1772099972587-233.png)

**Step 6: Re-check**

- Open a new Command Prompt and run: java --version
- It should now work.

**Step 7: Open Command Prompt as Admin**

Press Windows Key + S, type cmd, right-click Command Prompt, and choose Run as administrator.

![1772099986150-193.png](/static/img/1772099986150-193.png)

**Step 8: Navigate to the Java bin folder**

- Run command: cd "C:\Program Files\Java\jdk-17\bin"

**Step 9: Enable Java Access Bridge**

- Run command: jabswitch -enable
- You should see:
- The Java Access Bridge has been enabled.

![1772100002982-622.png](/static/img/1772100002982-622.png)

**Step 10: Check status,  run command: jabswitch**
- If it prints nothing, it means enabled.
- To disable Java Access Bridge, run this command: jabswitch -disable

## 5.    Run Application

This section describes the standard workflow for creating and testing a selector.

### 5.1.     Inspecting an Element
•    Open the application you want to automate.

•    In the UI Explorer window, click Indicate Element.

•    Move your mouse cursor over the target application. You will see elements being highlighted with a red box.

•    Click on the specific element you want to interact with (e.g., a login button).

•    The UI Explorer will capture the element, and its selector will be generated and displayed in the Selector Editor. The element will also be highlighted in the Visual Tree.

![1772100078334-701.png](/static/img/1772100078334-701.png)

### 5.2.     Validating and Refining the Selector
•    After a selector is generated, click the Validate button. If the button turns green, the selector is valid and unique.

•    Click the Highlight button. A red box should flash around the element you selected on the screen. This confirms you have the right target.

•    If the selector is not valid or is too specific (e.g., it contains a name or id that changes every time), you can edit it in the Selector Editor. You can then re-validate and highlight until you have a stable and reliable selector.

•    Once you are satisfied, you can copy the selector and paste it into the Target property of an activity in your workflow.

![1772100090303-918.png](/static/img/1772100090303-918.png)

