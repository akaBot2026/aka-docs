---
id: web-exension-installation
title: Web Extension Installation
sidebar_position: 8
sidebar_label: Web Extension Installation
description: Install akaBot web extension for browser automation.
displayed_sidebar: studioSidebar
---

## Web Extension Installation

akaBot web extension helps to akaBot Studio or Agent to interact with web browsers when using the activity package Native Browser.

If you use activity package Browser to perform web automation and the browser is updated to the new version, you may need to update the new Browser driver.

akaBot support 4 types of browsers:

- Chrome
- Edge
- Firefox
- Internet Explorer

In order to install the akaBot web extension, please follow below steps:

**Step 1** - Open **Extensions page** on your web browser.

Example: on Chrome

1. Click More icon
2. Select “More tools” menu
3. Select “Extensions”

![image-20230718152046-1.png](/static/img/image-20230718152046-1.png)

**Step 2** - **Turn on** Developer Mode then click **"Load Unpacked"**

![image-20230718152046-2.png](/static/img/image-20230718152046-2.png)

![image-20230718152046-3.png](/static/img/image-20230718152046-3.png)

**Step 3** - Browse to akaBot Brower Extensions folder:

In x64 Windows, open folder: **"C:\Program Files\FPT Software\akaBot Platform\akaBot"**

In x86 Windows, open folder: **"C:\Program Files (x86)\FPT Software\akaBot Platform\akaBot"**

Select folder:


| Version of Native Browser Package | Supported Manifest | Extension Folder |
|---|---|---|
| **< 5.x.x.x** | Manifest V2 | `BrowserExtensions` |
| **>= 5.x.x.x** | Manifest V3 | `BrowserExtensionsV3` |

![1714117769354-697.png](/static/img/1714117769354-697.png)

![1714113443408-531.png](/static/img/1714113443408-531.png)

Select the folder whose name is Browser name then click **Select Folder**

![1714098313555-668.png](/static/img/1714098313555-668.png)

- After **successful** installation, you will see the akaBot web extensions in your **browser extensions list.**

![1714117398210-725.png](/static/img/1714117398210-725.png)
