---
id: setup-browser-environment
title: "Browser Environment Setup"
sidebar_label: "1. Environment Setup"
sidebar_position: 1
description: "Step-by-step instructions to configure ChromeDriver / WebDriver for akaBot Studio to match your current browser version."
displayed_sidebar: activitiesSidebar
---

# Browser Environment Setup

> Step-by-step instructions to configure ChromeDriver / WebDriver for akaBot Studio to match your current browser version.

When automating web-based flows in akaBot Studio using Chrome or Edge, your automation might throw WebDriver mismatch errors (e.g., `SessionNotCreatedException`) if your installed web browser has updated automatically. 

To solve this, follow these steps to manually update and configure the browser driver matching your browser version.

---

## Step-by-Step Instructions

### Step 1: Check your Google Chrome version
1. Open Google Chrome.
2. Navigate to `chrome://settings/help` in the address bar (or click the three dots menu on the top-right -> select **Help** -> select **About Google Chrome**).
3. Note the major version of your Chrome browser (for example: if your version is `149.0.7827.155`, the major version is `149`).

![Check Chrome Version](/static/img/check-chrome-version.png)

### Step 2: Access Chrome for Testing page
* Open a browser tab and go to the official Chrome WebDriver portal:
  `https://googlechromelabs.github.io/chrome-for-testing/`

### Step 3: Copy download link and download the driver package
1. Locate the channel table (e.g., **Stable**).
2. Find the row for `chromedriver` matching your operating system and CPU architecture (e.g., **win64** for 64-bit Windows).
3. Copy the URL, open a new browser tab, paste it, and press Enter to download the `.zip` file.

![Download ChromeDriver](/static/img/download-chromedriver.png)

### Step 4: Navigate to the akaBot ChromeDriver folder
* Open **File Explorer** on your PC and navigate to the following installation path:
  `C:\Program Files\FPT Software\akaBot Platform\WebDriver\ChromeDriver`

### Step 5: Create a new version folder
1. Inside the `ChromeDriver` directory, create a new folder.
2. Name this folder exactly after the major version you noted in Step 1 (e.g., `149`).

![Create Version Folder](/static/img/create-version-folder.png)

### Step 6: Extract the downloaded package
* Locate your downloaded `.zip` file and extract its contents.

### Step 7: Copy chromedriver.exe to the version folder
1. Copy the `chromedriver.exe` executable file from the extracted folder.
2. Paste it directly into the new version folder you created in Step 5 (e.g., `C:\Program Files\FPT Software\akaBot Platform\WebDriver\ChromeDriver\149`).

### Step 8: Enable Auto Detect in akaBot Studio
1. Launch **akaBot Studio**.
2. Go to **Options** from the sidebar home screen.
3. Select **Execution**.
4. Check the **Auto Detect** checkbox under the **Browser Version** section.
5. Save or click OK.

![Enable Auto Detect](/static/img/enable-autodetect.png)
