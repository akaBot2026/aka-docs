---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Active Directory activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The **Active Directory activities** package contains all the **basic activities** used for creating **Active Directory** automation projects.

If you use this package to perform Active Directory automation, there is no special requirement for the browser driver. You can use the browser driver that is already installed on your system.

These activities enable the robots to:

* **Simulate** human interaction, such as performing mouse and keyboard commands or typing and extracting text, for basic Active Directory automation.
* Create **triggers** based on application behavior, thus enabling the Robot to execute certain actions when specific events occur on a machine.
* Perform **Active Directory** manipulation.

**Pick Target Element**

The activities that perform actions on UI elements can be configured at design time by using the **Pick target element** button present in the body of the activities in designer.

**Note:**  
In order to indicate element on Active Directory, you need to [install Active Directory extension](/docs/studio/latest/installation/active-directory-extension.md).

Click the **Pick target element** button opens **Selector Editor** wizard.

![image-20220509131533-1.png](/static/img/20dec3_image-20220509131533-1.png)

After click **Pick target element** button, the **Indicate** field specifies what you are indicating at the moment. When the wizard is opened for the first time, the **Target** needs to be indicated. For each possible target, the wizard automatically selects an anchor, if one is available.

Here is an example result after indicate element on Active Directory:

![image-20220509131542-2.png](/static/img/23460f_image-20220509131542-2.png)
