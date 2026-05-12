---
id: license-activation
title: "License Activation"
sidebar_label: "License Activation"
sidebar_position: 2
description: "License Activation documentation."
displayed_sidebar: centerSidebar
---

## **1. Activate akaBot Center**

**Step 1** - Open your browser. Navigate to akaBot Center using **your Center URL** or **localhost:8080**. After successful login, choose**Administration** on the left menu bar -> Choose **License** option and click **Add License.**

![1698997596149-505.png](/img/f952ee_1698997596149-505.png)

**Step 2:**

* Fill in the License Key field with the License Key you received from the licensing email.
* Click**Generate.**

![1695699235091-617.png](/img/ed9bd2_1695699235091-617.png)

**Step 3:** Copy  the Activation Request below and open the link: **https:aegis.akabot.com/#/activation**

![1695699317528-675.png](/img/6a3a1a_1695699317528-675.png)​

**Step 4**:  Paste it into the box -> Click **download file**

![1695699508304-280.png](/img/1ca059_1695699508304-280.png)

**Step 5**: Upload the file you've downloaded in the **Activate tab** in Center -> Click **Activate**

![1695699642889-537.png](/img/4e9f2d_1695699642889-537.png)

You have completed all the steps to activate akaBot Center.

**Step 6**: After activating akaBot Center successfully, the akaBot Center will automatically generate a key to activate Studio and Agent latter. Please copy this before activating akaBot Studio and Agent.

![1701916021894-635.png](/img/7fbac6_1701916021894-635.png)

## **2.  Activate akaBot Studio**

If you have **your own** **akaBot Center,** please make sure that your akaBot Studio computer has an active connection to your akaBot Center.  
If your network requires you to connect to the Internet or akaBot Center through a Proxy server, make sure​​​ that you have Proxy information before activation.

After activating your akaBot Center, please follow the steps below to activate your akaBot Studio.

**Step 1** - Start the Studio. In installing windows, choose option “akaBot Center” then hit button “Next”.

![image-20230717142905-14.png](/img/4b6c4b_image-20230717142905-14.png)

**Step 2** – Fill license information:

1. **Center URL:**Your akaBot Center’s URL
2. **License Key**: Please enter the license key automatically generated after activating akaBot Center. (**At Step 6, Part 1** - Activate akaBot Center)
3. **Network Options (Optional)**: If you use Proxy Server, please fill in the Proxy Info under ***Network Options***.
4. Hit button “Activate”

![image-20230717142905-15.png](/img/db1837_image-20230717142905-15.png)

After **successful** activation, akaBot Studio shows below message:

![image-20230717142905-16.png](/img/7232c3_image-20230717142905-16.png)

If below error message appears, please check your network connection.

![image-20230717142628-5.png](/img/a2a943_image-20230717142628-5.png)

## **3.  Activate akaBot Agent**

If you have **your own** **akaBot Center,** please make sure that your akaBot Studio computer has an active connection to your akaBot Center.  
If your network requires you to connect to the Internet or akaBot Center through a Proxy server, make sure​​​ that you have Proxy information before activation.

### **3.1. Activate akaBot Agent**

**Step 1** - Start the Agent. In installing windows, choose option “akaBot Center” then hit button “Next”.

![image-20230718223155-14.png](/img/d49ed9_image-20230718223155-14.png)

**Step 2** – Fill license information:

1. **Center URL:**Your akaBot Center’s URL
2. **License Key**: **License Key**: Please enter the license key automatically generated after activating akaBot Center. (**At Step 6, Part 1** - Activate akaBot Center)
3. **Network Options (Optional)**: If you use Proxy Server, please fill in the Proxy Info under ***Network Options***.
4. Hit button “Activate”

![image-20230718223155-15.png](/img/2583d0_image-20230718223155-15.png)

After **successful** activation, akaBot Agent shows below message:

![image-20230718223155-16.png](/img/568bd1_image-20230718223155-16.png)

If below error message appears, please check your network connection.

![image-20230718223155-17.png](/img/6661dd_image-20230718223155-17.png)

### **3.2. Connect akaBot Agent with akaBot Center**

After activation, your akaBot Agents have to be connected with akaBot Center to be all set for action.

After activating your akaBot Agent, please follow the steps below to connect it with akaBot Center

**Step 1** - Open your browser. Navigate to akaBot Center using **your Center URL** or **localhost:8080**. After successful login, choose**Agent** on the left menu bar -> Choose **Agent** option and click **Create New.**

![1698998855183-732.png](/img/a2f411_1698998855183-732.png)

**Step 2**: After clicking, the system shows a popup allowing you to fill in properties to create/edit a new Agent. You need to fill in all the necessary info in the form below.

![image-20221031155928-12.png](/img/941015_image-20221031155928-12.png)

Note: Please Copy the auto-generated key at the top field of this form. You need to use this key right after creating the Agent.

**Agent tab**

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Key | This is the identification of one agent. You will input this key into the Agent Key field in your local Agent. | String | 50 char | Yes | This field is auto-generated by the system |
| 2 | Name | Enter the name of the agent you want to create/edit | String | 50 char | Yes |  |
| 3 | Machine Name | Enter the name of the computer on which the Agent is deployed | String | 50 char | Yes |  |
| 4 | Machine Username | Enter the username used to log in to the computer which is mentioned above | String | 50 char | No |  |
| 5 | Machine Password | Enter the password used to log in to the computer which is mentioned above | String | 255 char | No |  |
| 6 | Agent Group | Choose an existing Agent Group by clicking the dropdown list or create a new group for your new Agent by clicking the "+" button | Dropdown list, SingleChoice |  | Yes |  |
| 7 | Description | Enter the description of the agent you want to create/edit | String | 500 char | No |  |

**Agent Settings Tab (Optional)**

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Console / RDP | akaBot executes workflow in an interactive Windows session. There are two types of Windows sessions the Robot can start: *Console Session* RDP Session | SingleChoice |  | Yes |  |
| 2 | Login To Console | This option allows the Agent to connect to a:  Console session Only available if you chose RDP | Checkbox |  | No |  |
| 3 | Font Smoothing | This option enhances text recognition. Only available if you chose RDP | Checkbox | No limit | Optional |  |
| 4 | Resolution Width / Height / Depth | This option allows users to set a custom resolution if the automation process is required. Only available if you chose rdp | Int32 (Number) |  | Optional | Greater than 0 |
| 5 | Others | Other specific parameters for this Agent | String | No limit | Optional |  |

After filling out the form, you click the **Save** button to record the Agent to the system.

**Step 3**: Open your akaBot Agent again, choose the ![1698999942255-125.png](/img/79e71c_1698999942255-125.png) button

![1698999960723-227.png](/img/6c9b56_1698999960723-227.png)

**Step 4**: After clicking, the system shows a popup allowing you to fill in properties

![1699000021013-374.png](/img/4f6c9e_1699000021013-374.png)

* Machine name: the computer name of the current computer. The machine name is automatically pre-populated for you.
* Agent key: the key was auto-generated on akaBot Center when you created your agent in Step 2 (You've copied it in Step 2, If not copied it yet, don't worry, please open and view your Agent on akaBot Center to copy).
* Center URL: Your akaBot Center URL.

**Step 5:** –Click Connect to perform the connecting to the akaBot Center.

After connecting successfully, the status of akaBot Center turns to be Connected.

![1699000551168-543.png](/img/8791dd_1699000551168-543.png)

If the bot is already connected to the akaBot Center, you can disconnect at any time by clicking the **Disconnect** button.