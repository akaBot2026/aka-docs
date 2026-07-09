---
id: activation
title: License Activation
sidebar_label: License Activation
sidebar_position: 4
description: Learn how to activate Akabot Studio license.
displayed_sidebar: studioSidebar
---

# License Activation

**Please choose activation method suitable for you as below:**

**1. Standard (or Standalone) license:**

- If your akaBot Studio computer **(device A)** has an **active internet connection**, you can use **Online Activation** method for a convient and quick activation.

- If your akaBot Studio computer is unable to connect to the Internet, use Offline activation method. To activate successfully, you need to ensure:

  1. Have another Internet-connected device **(device B)** to get license file from akaBot license management system.
  2. Have connection between device A and device B to transfer license file from device B to device A.

**2. Enterprise (or Network) license**

- You can activate through your own akaBot Center. Please make sure that your akaBot Studio computer has an active connection to your akaBot Center.
- If your network requires to connect to Internet or akaBot Center through a Proxy server, make sure that you have Proxy information before activation.

### Online Activation

**Step 1** - Start the Studio. In installing windows, choose option “LMS (License Management System)” then hit button “Next”.

![image-20230717142628-1.png](/static/img/image-20230717142628-1.png)

**Step 2** – Select Online activation option then hit button “Next”.

![image-20230717142628-2.png](/static/img/image-20230717142628-2.png)

**Step 3** – Fill license information then hit button “Next”

1 - **License Server**: https://aegis.akabot.com/

2 - **License Key**: Please enter the license key provided in the Licensing Email.

3 - **Network Options** (Optional): If you use Proxy Server, please fill in the Proxy Info under **Network Options**.

![image-20230717142628-3.png](/static/img/image-20230717142628-3.png)

**Step 4** - Hit button **“Activate”**. After **successful** activation, akaBot Studio shows below message.

![image-20230717142628-4.png](/static/img/image-20230717142628-4.png)

If below error message appears, please check your network connection.

![image-20230717142628-5.png](/static/img/image-20230717142628-5.png)

### Offline Activation

**On your akaBot Studio computer (device A):**

**Step 1** - Start the Studio. In installing windows, choose option “LMS (License Management System)” then hit button “Next”.

![image-20230717142905-6.png](/static/img/image-20230717142905-6.png)

**Step 2** - Select Offline activation option then hit button “Next”.

![image-20230717142905-7.png](/static/img/image-20230717142905-7.png)

**Step 3** – Enter the license key in the Licensing email then hit button “Next”

![image-20230717142905-8.png](/static/img/image-20230717142905-8.png)

**Step 4** - **Copy** the **Activation Request** below and hit Next:

![image-20230717142905-9.png](/static/img/image-20230717142905-9.png)

![image-20230717142905-10.png](/static/img/image-20230717142905-10.png)

**Step 5** – Copy the **Activation Request** to an **Internet Access Device (Device B)**.

**On the device B:**

**Step 6** - Go to https://aegis.akabot.com/#/activation.

Paste the **Activation Request** you have copied from AkaBot Studio computer (device A), select Captcha then **Download File** to download **Activation Response file** (named **activate.txt**).

![image-20230717142905-11.png](/static/img/image-20230717142905-11.png)

**Step 7** – Copy the Activation Response file from device B to device A

**On your akaBot Studio computer (device A):**

**Step 8** – Browse to the Activation Response file or copy the Activation Response in the file into the Activation Box then hit button “Activate”

![image-20230717142905-12.png](/static/img/image-20230717142905-12.png)


After **successful** activation, akaBot Studio shows below message.

![image-20230717142905-13.png](/static/img/image-20230717142905-13.png)

### Activate through your akaBot Center

**Step 1** -  Start the Studio. In installing windows, choose option “akaBot Center” then hit button “Next”.

![image-20230717142905-14.png](/static/img/image-20230717142905-14.png)

**Step 2** – Fill license information:

- **Center URL**: Your akaBot Center’s URL
- **License Key**: Please enter the license key provided in the Licensing Email.
- **Network Options (Optional)**: If you use Proxy Server, please fill in the Proxy Info under **Network Options**.
- Hit button “Activate”

![image-20230717142905-15.png](/static/img/image-20230717142905-15.png)

After **successful** activation, akaBot Studio shows below message:

![image-20230717142905-16.png](/static/img/image-20230717142905-16.png)

If below error message appears, please check your network connection.

![image-20230717142628-5](/static/img/image-20230717142628-5.png)

### Activate through your akaBot Center Cloud

To activate the license on the target workstation running **akaBot Studio**, follow the steps below:

**Step 1** – Launch the installed **akaBot Studio** desktop client.

**Step 2** – Select the option to activate via **akaBot Center** and click **Next**.
![image-20230717142905-14.png](/static/img/image-20230717142905-14.png)

**Step 3** – Enter the identical activation credentials:

- **Center URL:** Your unique akaBot Center address.
- **License Key:** Your enterprise license key.

![Entering activation credentials on akaBot Studio](/static/img/image-20260528135225-18.png)

- **Network Options (Optional):** If your corporate network routes traffic through an internet Proxy, configure it as follows:
  1. Click on **Network options** to expand the section.
  
     ![Network options expansion](/static/img/f6f778_image-20260708735789-40.png)
     
  2. Check the **Use proxy server** checkbox.
  3. Input your Proxy server configurations:
     - **Address:** The IP address or domain name of the Proxy server.
     - **Port:** The corresponding port number of the Proxy server.
     - **User name:** The username required to authenticate with the Proxy server.
     - **Password:** The password required to authenticate with the Proxy server.
  
     ![Proxy server configuration](/static/img/f6f778_image-20260708735789-41.png)

**Step 4** – Click **Activate** to complete activation.
  - _Activation Successful:_ The Studio workspace will open, presenting the process design canvas.
  - _Activation Failed:_ Please verify that your workstation can communicate with the internet.

![Activation success on akaBot Studio](/static/img/image-20260528135225-19.png)
