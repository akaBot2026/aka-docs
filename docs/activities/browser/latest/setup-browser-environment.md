---
id: setup-browser-environment
title: "Browser Environment Setup"
sidebar_label: "Environment Setup"
sidebar_position: 3
description: "Step-by-step instructions to configure ChromeDriver / EdgeDriver for akaBot Studio to match your current browser version."
displayed_sidebar: activitiesSidebar
---

# Browser Environment Setup

Step-by-step instructions to configure ChromeDriver / EdgeDriver for akaBot Studio to match your current browser version.

**Note:**
To automate web browsers (Chrome, Edge, Firefox) using akaBot Studio, you need to configure two main components:
1. **WebDriver (e.g. ChromeDriver, EdgeDriver)**: Enables the robot to launch and control the browser (configured in this guide).
2. **akaBot Web Extension**: Enables the robot to detect and interact with web elements. See the [akaBot Web Extension Installation Guide](/docs/studio/latest/user-guide/how-to-install-akabot-web-extension.md) to set this up.

When automating web-based flows in akaBot Studio using Chrome or Edge, your automation might throw WebDriver mismatch errors (e.g., `SessionNotCreatedException`) if your installed web browser has updated automatically. 

To solve this, follow these steps to manually update and configure the browser driver matching your browser version.

---

## Step-by-Step Instructions

### For Google Chrome

#### Step 1: Check your Google Chrome version
1. Open Google Chrome.
2. Navigate to `chrome://settings/help` in the address bar (or click the three dots menu on the top-right -> select **Help** -> select **About Google Chrome**).
3. Note the major version of your Chrome browser (for example: if your version is `149.0.7827.155`, the major version is `149`).

![Check Chrome Version](/static/img/check-chrome-version.png)

#### Step 2: Access Chrome for Testing page
* Open a browser tab and go to the official Chrome WebDriver portal:
  `https://googlechromelabs.github.io/chrome-for-testing/`

![chrome-driver](/static/img/chrome-driver.png)

#### Step 3: Copy download link and download the driver package
1. Locate the channel table (e.g., **Stable**).
2. Find the row for `chromedriver` matching your operating system and CPU architecture (e.g., **win64** for 64-bit Windows).
3. Copy the URL, open a new browser tab, paste it, and press Enter to download the `.zip` file.

#### Step 4: Navigate to the akaBot ChromeDriver folder
* Open **File Explorer** on your PC and navigate to the following installation path:
  `C:\Program Files\FPT Software\akaBot Platform\WebDriver\ChromeDriver`

#### Step 5: Create a new version folder
1. Inside the `ChromeDriver` directory, create a new folder.
2. Name this folder exactly after the major version you noted in Step 1 (e.g., `149`).

#### Step 6: Extract the downloaded package
* Locate your downloaded `.zip` file and extract its contents.

#### Step 7: Copy chromedriver.exe to the version folder
1. Copy the `chromedriver.exe` executable file from the extracted folder.
2. Paste it directly into the new version folder you created in Step 5 (e.g., `C:\Program Files\FPT Software\akaBot Platform\WebDriver\ChromeDriver\149`).

![149.png](/static/img/149.png)

### For Microsoft Edge

#### Step 1: Check your Microsoft Edge version
1. Open Microsoft Edge.
2. Navigate to `edge://settings/help` in the address bar (or click the three dots menu on the top-right -> select **Help and feedback** -> select **About Microsoft Edge**).
3. Note the major version of your Edge browser (for example: if your version is `128.0.2739.79`, the major version is `128`).

#### Step 2: Access the Microsoft Edge WebDriver page
* Open a browser tab and go to the official Microsoft Edge WebDriver page:
  `https://developer.microsoft.com/microsoft-edge/tools/webdriver`

  See the [Microsoft Edge WebDriver documentation](https://learn.microsoft.com/en-us/microsoft-edge/webdriver/) for more details on this page.

#### Step 3: Copy download link and download the driver package
1. In the **Downloads** section of the page, find the version number whose first three parts match your Edge version (the fourth part can differ).
2. Click the platform button matching your OS and CPU architecture (e.g., **x64** for 64-bit Windows) to download the `.zip` file.

#### Step 4: Navigate to the akaBot EdgeDriver folder
* Open **File Explorer** on your PC and navigate to the following installation path:
  `C:\Program Files\FPT Software\akaBot Platform\WebDriver\EdgeDriver`

#### Step 5: Create a new version folder
1. Inside the `EdgeDriver` directory, create a new folder.
2. Name this folder exactly after the major version you noted in Step 1 (e.g., `128`).

#### Step 6: Extract the downloaded package
* Locate your downloaded `.zip` file and extract its contents.

#### Step 7: Copy msedgedriver.exe to the version folder
1. Copy the `msedgedriver.exe` executable file from the extracted folder.
2. Paste it directly into the new version folder you created in Step 5 (e.g., `C:\Program Files\FPT Software\akaBot Platform\WebDriver\EdgeDriver\128`).

### Final Step: Enable Auto Detect in akaBot Studio
1. Launch **akaBot Studio**.
2. Go to **Options** from the sidebar home screen.
3. Select **Execution**.
4. Check the **Auto Detect** checkbox under the **Browser Version** section.
5. Save or click OK.

![chrome-studio](/static/img/chrome-studio.png)

---

## Next Steps: Install Web Extension

After setting up the WebDriver, you must install the **akaBot Web Extension** to enable element detection and interaction on web pages. Without the extension, akaBot Studio cannot highlight or capture elements during design time.

For step-by-step instructions on installing and enabling the extension for your browser, see the [akaBot Web Extension Installation Guide](/docs/studio/latest/user-guide/how-to-install-akabot-web-extension.md).
