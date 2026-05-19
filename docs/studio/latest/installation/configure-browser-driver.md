---
id: configure-browser-driver
title: Configure Browser Driver
sidebar_label: Configure Browser Driver
sidebar_position: 6
description: Design, build, and test automation workflows visually with Akabot Studio.
displayed_sidebar: studioSidebar
---

# Configure Browser Driver

If you used the **Browser** activity package to perform the web automation and your browser was updated to newer version automatically. This may cause some unexpected errors during bot’s running. To solve the problems, you need to update the browser driver to suitable browser’s version by following below 03 simple steps:

**Step 1** - Check browser version

1 - Open your browser

2 - Check browser version.

On Chrome, go to the link: chrome://settings/help 

Ex: version is 124.x.x.x

![1714632658644-439.png](/static/img/1714632658644-439.png)

On Edge, go to the link: edge://settings/help 

Ex: version is 124.x.x.x

![1714632680270-541.png](/static/img/1714632680270-541.png)

**2.Step 2 - Configure browser driver**
1 - Download the browser driver whose 3 first numbers in version equals to 3 first numbers in your browser version. Ex: 124.

On Chrome, if the version is recent, go to https://googlechromelabs.github.io/chrome-for-testing/#stable otherwise, go to https://chromedriver.chromium.org/downloads to download.

![1714632723095-575.png](/static/img/1714632723095-575.png)

![1714632735937-430.png](/static/img/1714632735937-430.png)

On Edge, if the version is recent, go to https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/?form=MA13LH#downloads otherwise, go to https://msedgewebdriverstorage.z22.web.core.windows.net/?form=MA13LH to download

![1714632764179-338.png](/static/img/1714632764179-338.png)

![1714632773992-712.png](/static/img/1714632773992-712.png)

2 – Create new folder in akaBot browser driver folder and named as the 3 first number in browser version.

Ex: Browser version is 124.x.x.x à name the new folder as 124.

**For Chrome**, go to path [AKABOT_INSTALLED_PATH]\WebDriver\ChromeDriver to create new folder

![1714632793482-153.png](/static/img/1714632793482-153.png)

**For Edge**, go to path [AKABOT_INSTALLED_PATH]\WebDriver\EdgeDriver to create new folder.

![1714632818145-996.png](/static/img/1714632818145-996.png)

3 - Unzip the driver file and copy driver execution file to folder you just created.

**Example:**

**For Chrome:**

![1714632845802-986.png](/static/img/1714632845802-986.png)

**For Edge:**

![1714632866295-303.png](/static/img/1714632866295-303.png)

**3. Step 3 - Configure Auto Detect on akaBot Studio/Agent**

1 - On akaBot Studio:

Go to Options --> Execution --> Browser Version --> Check the Auto Detect box.

![1714632905043-456.png](/static/img/1714632905043-456.png)

2 - On akaBot Agent:
Go to Browser --> Browser Configuration --> Check the Auto Detect box.

![1714632954996-447.png](/static/img/1714632954996-447.png)
