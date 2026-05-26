---
id: auto-login
title: "Auto-Login Setup & Troubleshooting"
sidebar_label: "Auto-Login Setup"
sidebar_position: 17
description: "Auto-Login Setup & Troubleshooting documentation."
displayed_sidebar: centerSidebar
---
# Auto-Login Setup & Troubleshooting

## **Introduction**

* This document is created based on the features of akaBot Platform v2.0.5.5 + and akaBot Center v2.0.4.0 +.
* If you are using the lower platform version, please switch to the relevant page to view the docs for that particular version.

## **Setup**

### **1. Windows Group Policy (gpedit.msc)**

* Group Policy is a Windows feature that contains a variety of advanced settings, particularly for network administrators. However, local Group Policy can also be used to adjust settings on a single computer.
* It’s only available on **Windows Professional, Enterprise, and Server**.
* Must be **"Run with administrator"**

**Allow service to simulate the Secure Attention Sequence (SAS).**

**Step 1** - Open Start Menu > type**Group Policy** or **gpedit.msc**

![image-20220506133637-1.png](/static/img/c62755_image-20220506133637-1.png)

**Step 2** - Navigate to: **Computer Configuration > Administrative Templates > Windows Components > Windows Logon Options**=> *Disable or enable software Secure Attention Sequence = Services or Services and Ease of Access applications.*

![image-20220506133646-2.png](/static/img/a668c9_image-20220506133646-2.png)

**Remote Desktop Services must limit users to one remote session**

**Step 1** - Open Start Menu > type**Group Policy** or **gpedit.msc**

**Step 2** - Navigate to: **Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Connections** => *Restrict Remote Desktop Services users to a single Remote Desktop Services Session = Not Configured or Enabled*

![image-20220506133700-3.png](/static/img/86975f_image-20220506133700-3.png)

**Disable Network Level Authentication**

**Step 1** - Open Start Menu > type **This PC** > **Properties** > **Remote settings**

![image-20220506133708-4.png](/static/img/c3074e_image-20220506133708-4.png)

**Step 2** - In Remote Desktop group: (2 options)

* Check option: **“Allow remote connections to this computer”**
* Uncheck option: **“Allow connections only from computers running Remote Desktop with Network Level Authentication (recommended)”**

![image-20220506133716-5.png](/static/img/2c4be1_image-20220506133716-5.png)

**Allow RDP client to use saved password upon connection**

**Step 1**- Open Start Menu > type**Group Policy** or **gpedit.msc**

**Step 2** - Navigate to: **Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Security** => *Always prompt for password upon connection = Not Configured or Enabled*

![image-20220506133725-6.png](/static/img/664354_image-20220506133725-6.png)

Note: After changing Windows Policy, you should run this command with **administrative privilege**: gpupdate /force

### **2. Registry Keys**

| Registry key | Type | Name | Value |
| --- | --- | --- | --- |
| HKEY\_LOCAL\_MACHINE\SOFTWARE\FPT Software\akaBot Platform | ServicePipeName  CredentialProviderFilters  MaxClients | REG\_SZ  REG\_SZ  REG\_DWORD | akaBotCredPipe  (any)  0x00000019 |
| HKEY\_LOCAL\_MACHINE\SOFTWARE\Microsoft\ Windows\CurrentVersion\Authentication\ Credential Providers\{4f22cdbe-4949-4567-9941-1aaa46c6b7bd\} | (Default) | REG\_SZ | akaBotCredentialProvider |
| HKEY\_LOCAL\_MACHINE\SOFTWARE\Microsoft\ Windows\CurrentVersion\Authentication\ Credential Provider Filters\{4f22cdbe-4949-4567-9941-1aaa46c6b7bd\} | (Default) | REG\_SZ | akaBotCredentialProvider |
| HKEY\_CLASSES\_ROOT\CLSID\{4f22cdbe-4949-4567-9941-1aaa46c6b7bd\} | (Default) | REG\_SZ | akaBotCredentialProvider |
| HKEY\_CLASSES\_ROOT\CLSID\{4f22cdbe-4949-4567-9941-1aaa46c6b7bd\}\InprocServer32 | (Default)  ThreadingModel | REG\_SZ  REG\_SZ | akaBotCredentialProvider  Apartment |
| HKEY\_LOCAL\_MACHINE \SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services | fPromptForPassword | REG\_DWORD | 0 (or not exist) |

**Files**

Make sure the following files are in the right directory.

| File name | Target directory | Version |
| --- | --- | --- |
| akaBotCredentialProvider.dll | C:\Windows\System32\ | Must be equal to akaBot installer version |

**Logs**  
Check the following log files.

| File name | Target directory | Descriptions |
| --- | --- | --- |
| msiexec.log | C:\ProgramData\akaBot\Logs\ | No error relates to Auto-logon |
| BotService.log | C:\ProgramData\akaBot\Logs\ | No error relates to Auto-logon |
| AutoLogonChecker.log | C:\ProgramData\akaBot\Logs\ | No error relates to Auto-logon |
| BotService.log | C:\ProgramData\akaBot\Logs\ | No error relates to Auto-logon |

## **Configuration**

* The two types of configurations (Unattended Agents): Console & RDP. Each type is suited for a different configuration system

**CONSOLE**

![image-20220506133757-7.png](/static/img/68bc95_image-20220506133757-7.png)

* To use this configuration, the computer running the agent must be **the physical one**. At that time, there will be always a process called **"LogonUI.exe"** (Microsoft logon interface) running to ensure that the logon screen appears when the computer restart or locks.
* When there's a request to run a task from Center, akaBot Service will send an unlock request to the LogonUI.exe process to enter the username, and password.

❗️ Notes  
If the screen displays a Legal disclaimer, it requires the user to press OK to enter the login screen => it leads to the unlock failed

![image-20220506133805-8.png](/static/img/a3526b_image-20220506133805-8.png)

**RDP (High-Density Agents)**

![image-20220506133811-9.png](/static/img/60faa2_image-20220506133811-9.png)

* For this configuration, it can be used: **the physical one** and **"virtual machine"**.
* When there's a request to run a task from the Center, Agent will use the RDP client to initiate a new session to serve that user.
* If the screen displays alerts,... which required to press OK button to enter the login screen, kindly type in **Others** section => ***/kb:\{Enter\}.***
* If it takes longer than usual to initiate a remote session on the agent machine, please configure the timeout (second) => ***/unlock-timeout-sec:45*** . Default : 30s
* If the unlock fails occasionally, please increase the number of retries to reduce the error rate => ***/unlock-retries:3.*** Default : 2 (times)

## **Capability Matrix**

The following table provides the capability matrix of the Auto Logon feature under various OS and scenarios. Results are based on testing done on akaBot v2.0.5.5.

![https://files.readme.io/fc25ac3-Screenshot_2021-05-11_223517.jpg](/static/img/62d192_fc25ac3-screenshot_2021-05-11_223517.jpg)

Notes:

* **N/A**: Not tested. Use at your own risk.
* **Y**: Yes. The module can work perfectly.
* **N**: No. The module does not support this scenario.
* **(1)**: Physical console interface of the computer.
* **(2)**: Virtual machine.
* **(3)**: Virtual machine on AWS (Elastic Compute Cloud).
* **(4)**: Virtual machine on AWS (Desktop-as-a-Service).

## **Troubleshooting**

**Wrong username or password**

* If you provide the incorrect username or password, the task will be faulted with the error message that is similar to **“Username or password not match”.**

![image-20220506133828-10.png](/static/img/832fff_image-20220506133828-10.png)

* **Root cause**: Upgrade to the new version of the platform and the installer cannot replace the file *"C:\Windows\System32\akaBotCredentialProvider.dll"*, also LogonUI.exe process is being used by another user.

=> **The most common case**: Upgrade platform on Windows Server

**Solution**: Kindly close all the applications and restart Windows. Once the system is rebooted, the console screen of akaBot will appear and notify us about replacing akaBotCredentialProvider.dll file and disabling the auto-logon feature.

![image-20220506133834-11.png](/static/img/af1f8b_image-20220506133834-11.png)

* After that, please **double click on Agent** to open > click**Disconnect** > **Connect** > Agent will automatically enable auto logon function
* We can check the auto-logon status by running the command line: ***AutoLogonChecker.exe status***

![image-20220506133842-12.png](/static/img/9e0ecd_image-20220506133842-12.png)

* If it has not been enabled yet, please run this command line: ***AutoLogonChecker.exe enable***

![image-20220506133850-13.png](/static/img/448d53_image-20220506133850-13.png)

**Auto-logon module is enabled but still unlocks failed**  

![image-20220506133859-14.png](/static/img/961bca_image-20220506133859-14.png)
**Multiple sessions of the same user**

* akaBot platform only supports 1 session of 1 user at a point.
* Therefore, if there is more than one user session at a time, akaBot service mistakenly identifies that user's state as locked or active.


**Step 1** - Open Start Menu > type **Group Policy** or **gpedit.msc**

**Step 2** - Navigate to: **Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host> Connections** => *Restrict Remote Desktop Services users to a single Remote Desktop Services Session = Not Configured or Enabled*

![image-20220506133907-15.png](/static/img/da6afa_image-20220506133907-15.png)

**Unlock fails because of legal disclaimer enabled**

**Step 1** - Switch to RDP mode  
**Step 2** - Add parameter to **Center** > **Agent**> **Agent Settings** > **Others**: */kb:\{Enter\}*

![image-20220506133914-16.png](/static/img/bea064_image-20220506133914-16.png)

After that, the RDP client will automatically send Enter button to enter the login screen and execute unlock Windows.

**Unlock failed with error code 8455**

This is an error code returned by Remote Desktop Session Host module of Windows.

    ❗️ SSL\_ERR\_FRESH\_CRED\_REQUIRED\_BY\_SERVER (8455 (0x2107))
    The server authentication policy does not allow connection requests using saved credentials. The user must enter new credentials.

* **Root cause**: Windows Policy does not allow us to use of username and password that previously existed, must enter dialog box credentials during initiating the remote desktop connection.

=> Auto logon failed as the image below

![image-20220506134104-17.png](/static/img/b4577c_image-20220506134104-17.png)


**Step 1**- Open Start Menu > type **Group Policy** or **gpedit.msc**

**Step 2** - Navigate to: **Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Security** => *Always prompt for password upon connection = Not Configured or Enabled*

![image-20220506134112-18.png](/static/img/c2e914_image-20220506134112-18.png)
❗️ After changing Windows Policy, you should run this command with **administrative privilege**: gpupdate /force
