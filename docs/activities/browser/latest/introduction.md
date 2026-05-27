---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Browser activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The **Browser activities** package contains all the **basic activities** used for creating **Web** automation projects.

If you use this package to perform Web automation and your browser is updated automatically to newer version, it may lead to unsuitable browser driver issues. In this case, you may need to [configure the Browser driver](/docs/studio/latest/installation/configure-browser-driver.md) to solve the problem.

These activities enable the robots to:

* **Simulate** human interaction, such as performing mouse and keyboard commands or typing and extracting text, for basic web automation.
* Create **triggers** based on application behavior, thus enabling the Robot to execute certain actions when specific events occur on a machine.
* Perform **web** manipulation.

**Pick Target Element**

The activities that perform actions on UI elements can be configured at design time by using the **Pick target element** button present in the body of the activities in designer.

**Note:**  
You have to **[Install web extension](/docs/studio/latest/installation/web-exension-installation.md)** in order to Indicate element on **Web browser**.

Click the **Pick target element** button opens **Selector Editor** wizard.

![image-20220509131533-1.png](/static/img/20dec3_image-20220509131533-1.png)

After click **Pick target element** button, the **Indicate** field specifies what you are indicating at the moment. When the wizard is opened for the first time, the **Target** needs to be indicated. For each possible target, the wizard automatically selects an anchor, if one is available.

Here is an example result after indicate element on web:

![image-20220509131542-2.png](/static/img/23460f_image-20220509131542-2.png)
