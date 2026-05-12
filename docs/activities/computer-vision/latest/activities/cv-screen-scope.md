---
id: cv-screen-scope
title: "CV Screen Scope"
sidebar_label: "CV Screen Scope"
sidebar_position: 8
description: "CV Screen Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# CV Screen Scope

RCA.Activities.ComputerVision.CVScreenScope

## **Description**

A container that enables Computer Vision on a window or element. Initializes the akaBot Computer Vision neural network, performing an analysis of the indicated window and provides a scope for all subsequent Computer Vision activities.

![image-20220505132346-1.png](/img/a524fe_image-20220505132346-1.png)

(\*For mandatory)

## **In the body of the activity**

* **Indicate on screen**\* - The application you want to automate can be indicated to the CV Screen Scope activity by using the Indicate on screen button in the body of the activity. After doing this, a capture of the screen you have indicated is displayed in the body of the activity. This activity will generate a string variable (Selector) to specify the location of that field.
* **Do** - The activities you want to execute within the application.

## **Properties**

**Common**

* **Continue on Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Input**

* **CV Method (Dropdown List)** - There are 2 options: ElementDetection, OCR  
  **・ElementDetection** - Showing UI element (image, icon, button...) on detecting scope.  
  **・OCR** - Showing text on detecting scope.
* **Target.Clipping Region (Dropdown List)** - There are 2 options: Region, null  
  **・Region** - Defines the clipping rectangle of selector, in pixels, relative to the UiElement, in the following directions: left, top, right, bottom. It supports both positive and negative numbers. Generating coodinates automatically after dragging mouse when defining scope.  
  **・null** - Using rectangle of selector as scope.
* **Target.Selector (String)** - Text property used to find a particular UI element when the activity is executed.
* **Target.TimeoutMS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run.

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [123123] CV Screen Scope

**Options**

* **Api Key (String)**- The API key used for authenticating to the Computer Vision server. This field supports only strings or String variables. This property is synchronized across all CV Scopes in the workflow.
* **Server URL (String)**- URL of the server that performs the analysis. This property is synchronized across all CV Scopes in the workflow.
* **Use Local Server (Boolean)**- Determining if CV should use a local server.
