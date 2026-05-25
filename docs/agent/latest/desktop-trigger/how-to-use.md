---
id: how-to-use
title: "How to use Desktop Trigger"
sidebar_label: "How to use"
sidebar_position: 3
description: "How to use Desktop Trigger documentation."
displayed_sidebar: agentSidebar
---
# How to use Desktop Trigger

## **Desktop trigger Overview**

After installing, and opening Desktop Trigger, the home screen will be shown as below:

![image-20230602170429-1.png](/static/img/c63230_image-20230602170429-1.png)

| No | Panel | Description |
| --- | --- | --- |
| 1 | **Add new trigger** | Click here to create a new trigger |
| 2 | **Edit Trigger** | Choose a trigger at the table below, then click this button to edit that trigger |
| 3 | **Enable/ Disable/ Delete trigger** | Choose a trigger at the table below, then click this button to enable/disable/delete a trigger |
| 4 | **Refresh** | Refresh the system in case of unexpected events that cause the system to stop working, to ensure that the system is running smoothly again |
| 5 | **Trigger list** | List of created triggers by status, name, type, description |

## **Create a new trigger**

### 1. Create a File trigger

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **File trigger** option, the configuration screen of **file trigger** will be open as below:

![image-20230421172821-3.png](/static/img/64a00a_image-20230421172821-3.png)

**Step 3**: Fill the information in the tab: Basic

![image-20230421172821-3.png](/static/img/64a00a_image-20230421172821-3.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button **New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230421181312-4.png](/static/img/036e8a_image-20230421181312-4.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Monitoring folder | Choose the folder where the event will occur at | Folder input |  | Yes |
| 2 | Include subfolders | Click this box if you would like to set this trigger for subfolders in the folder you choose | Check box |  | No |
| 2 | Event type | Choose event types that will occur in that folder | Check box |  | Yes |
| 3 | File Filter | Gets or sets the filter string used to determine what files are monitored in a directory. | String |  | Yes |

After filling in all the mandatory fields, click **OK** button to save the trigger.

### 2. Create a Folder trigger

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **Folder trigger** option, the configuration screen of **Folder trigger** will be opened as below:

![image-20230424111816-1.png](/static/img/57bb81_image-20230424111816-1.png)

**Step 3**: Fill the information in the tab: Basic

![image-20230424153942-3.png](/static/img/5651c1_image-20230424153942-3.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button**New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230424152633-1.png](/static/img/1cd8d5_image-20230424152633-1.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Monitoring folder | Choose the folder where the event will occur at | Folder input |  | Yes |
| 2 | Include subfolders | Click this box if you would like to set this trigger for subfolders in the folder you choose | Check box |  | No |
| 3 | Event types | Choose event types that will occur in that folder | Check box |  | Yes |

After filling all the mandatory field, click **OK** button to save the trigger.

### 3.  Create a Hotkey trigger

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **Hotkey trigger** option, the configuration screen of **Hotkey trigger** will be open as below:

![image-20230424154102-4.png](/static/img/decfc1_image-20230424154102-4.png)

**Step 3**: Fill the information in the tab: Basic

![image-20230424154102-4.png](/static/img/decfc1_image-20230424154102-4.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button**New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230424154146-5.png](/static/img/69d4d3_image-20230424154146-5.png)

Use the checkbox and drop-down menu to select key from the keyboard.

After filling in all the mandatory fields, click **OK** button to save the trigger.

### 4.  Create an Email trigger

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **Email trigger** option, the configuration screen of**Email trigger** will be open as below:

![image-20230424154602-7.png](/static/img/486fc7_image-20230424154602-7.png)

**Step 3**: Fill the information in the tab: Basic

![image-20230424154619-8.png](/static/img/397fd0_image-20230424154619-8.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button **New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230424163718-9.png](/static/img/cd44f4_image-20230424163718-9.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Interval | Set the interval for checking email in seconds. This is how often the Email Trigger will automatically check your inbox | Number | 600 | Yes |
| 2 | Email Protocol | A set of rules that governs how email messages are sent and received over the Internet. Choose the protocol: IMAP/ POP3 | Dropdown |  | Yes |
| 3 | Host | Insert your email host | Email |  | Yes |
| 4 | Port | Choose the port number | Number |  | Yes |
| 5 | Credential | Click set credential to insert the credential for the trigger to use/ Click remove credential to set the trigger without credential |  |  | Yes |

After filling in all the mandatory fields, click **OK** button to save the trigger.

### 5. Create a Window trigger

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **Window trigger** option, the configuration screen of **window trigger** will be open as below:

![image-20230425095458-1.png](/static/img/9e827c_image-20230425095458-1.png)

**Step 3**: Fill the information in the tab: Basic

![image-20230425095512-2.png](/static/img/2686f0_image-20230425095512-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)F

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button **New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230425095629-3.png](/static/img/2c004a_image-20230425095629-3.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | File path | Link to executable file | String |  | Yes |
| 2 | Window title | Insert the name that appears at the top of the window | String |  | Yes |
| 3 | Event | Choose to use the trigger when the window open/ close or both | Check box |  | Yes |

After filling in all the mandatory fields, click **OK** button to save the trigger.

### 6. Create a Service trigger

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **Service trigger** option, the configuration screen of **Service trigger** will be open as below:

![image-20230425100909-4.png](/static/img/699d05_image-20230425100909-4.png)

**Step 3**: Fill the information in the tab: Basic

![image-20230425100915-5.png](/static/img/a7d83d_image-20230425100915-5.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button**New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230425100951-6.png](/static/img/19a72e_image-20230425100951-6.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Service nam | Insert the service name. Example: akaBotSvc | String |  | Yes |
| 2 | Event | Choose the event to initiate the workflow | Check box |  | Yes |

After filling in all the mandatory fields, click **OK** button to save the trigger.

### 7. Create a Process trigger

**Note**: This feature is currently in beta, which means it is not yet fully stable. We invite you to experience this feature and provide feedback to our support team if you have any questions or encounter any issues.

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **Process trigger** option, the configuration screen of **Process trigger** will be open as below:

**Step 3**: Fill the information in the tab: Basic

![image-20230425101502-8.png](/static/img/82ab84_image-20230425101502-8.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button **New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230425101609-10.png](/static/img/bedaa0_image-20230425101609-10.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | File path | The link to executable file | String |  | Yes |
| 2 | Process Name | Insert Process name. Example: BotService | String |  | Yes |
| 3 | Event | Choose the event to initiate the workflow | Check box |  | Yes |

After filling in all the mandatory fields, click **OK** button to save the trigger.

### 8. Create an Interface trigger

**Note:** This feature is currently in beta, which means it is not yet fully stable. We invite you to experience this feature and provide feedback to our support team if you have any questions or encounter any issues.

**Step 1**: At the home screen, click the "New Trigger" button. The list of trigger types will be shown as below:

![image-20230421172542-2.png](/static/img/0b2120_image-20230421172542-2.png)

**Step 2**: Choose the **Interface trigger** option, the configuration screen of **Interface trigger** will be open as below:

![image-20230425102150-12.png](/static/img/e98b37_image-20230425102150-12.png)

**Step 3**: Fill the information in the tab: Basic

![image-20230425102139-11.png](/static/img/4f8827_image-20230425102139-11.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Trigger Name | Fill the trigger name | String | 255 | Yes |
| 2 | Status | Click to set the first status for trigger: enable/disable | Toggle |  | Auto enable |
| 3 | Trigger Description | Write description for the trigger | String | 555 | No |

**Step 4**: Fill the information in the tab: Action

![image-20230421175951-2.png](/static/img/2992ab_image-20230421175951-2.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Action type | Choose option **workflow** | Dropdown list |  | Yes |
| 2 | Workflow | Choose a workflow in the list | Dropdown list |  | Yes |
| 3 | Workflow Arguments | Click button **New** to add argument name and value | Input info |  | Yes |

**Step 5**: Fill the information in the tab: Detail

![image-20230425102404-13.png](/static/img/7ad6ad_image-20230425102404-13.png)

| No | Column/Label | Description | Type | Maximum | Is Mandatory? |
| --- | --- | --- | --- | --- | --- |
| 1 | Event | Choose the event to initiate the workflow | Dropdown list |  | Yes |
| 2 | Modifier | Select the key that you want to press along with clicking an object on the screen to initiate the workflow | Check box |  | Yes |
| 3 | Selector | click "pick element" to choose an object on the screen that you will click to initiate the workflow |  |  | Yes |

After filling in all the mandatory fields, click **OK** button to save the trigger.
