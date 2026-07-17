---
id: how-to-use-recorder
title: How to Use Recorder
sidebar_label: How to Use Recorder
sidebar_position: 4
description: Record actions in applications and web browsers to generate automation activities in akaBot Studio.
displayed_sidebar: studioSidebar
---

# How to Use Recorder

## About the App/Web Recorder

Recording can help you save a lot of time when automating your tasks. The Recorder captures your actions as you perform them on the screen and generates an Application/Browser activity containing a series of activities based on your actions.

All user interface elements are highlighted while you record so that you can be sure the correct buttons, fields, or menus are selected. The Recorder captures a default action for each type of UI element and also allows you to manually choose the desired action before performing it.

The Recorder displays a real-time preview of the activities that will be added to your project. The preview includes informative screenshots that are also added to the activities in the automation project. You can collapse the preview section by clicking the **Recorded Steps** header.

Each recorded action generates an activity. The following table lists the actions you can record and the activities generated for them. Some actions are recorded automatically, while others must be selected manually before they are recorded.

| Automatically Recorded Actions | Actions That Must Be Selected Before Recording |
| --- | --- |
| - Clicking buttons, links, icons, images, and other clickable elements (**Click** activity).<br />- Typing text into a text box or text area (**Type Into** activity).<br />- Selecting or clearing a check box (**Check/Uncheck** activity).<br />- Selecting an item from a drop-down list (**Select Item** activity). | - Copying text using the **Get Text** activity.<br />- Hovering over an element using the **Hover** activity.<br />- Sending keyboard shortcuts (**Send Hot Key** activity).<br />- Selecting multiple items using the **Select Multiple Items** activity. |

## Recording Your Actions

1. Open the application or web browser page that you want to automate.

2. Click **Recorder** in the Studio ribbon.

   ![Recorder in the ribbon](/static/img/record-ribbon.png)

   The Recorder window opens.

   ![Recorder window](/static/img/record-window.png)

3. Click **Record** in the **Record Window**. The Recorder is then ready to capture your actions. To pause recording, click **Recording**. To resume recording, click **Record** again.

   By default, after you indicate the UI element to interact with, the target selection scope is set automatically.

4. Indicate the element on which you want to perform an action by clicking it. Individual elements in the window are highlighted as you move the mouse over them.

   - To record the default action for the UI element, click the target element.
   - To perform an action that the Recorder does not capture automatically, such as **Get Text** or **Hover**, stop recording and select the appropriate option from the **Element** menu next to the **Record** button. Select the desired action, then click the target element in the application or browser.

   ![Selected recording action](/static/img/record-action-selected.png)

5. Some actions require your input before an activity is generated. Provide the necessary information when prompted, then press **Enter** on your keyboard or click **Confirm**. For example, if you select a text box, a **Type Into** action is detected and you are prompted to enter the text to type.

6. When you finish recording your actions, click **Save & Exit** to close the Recorder and add the activities to your project.

   ![Recording actions](/static/img/recording.gif)

### Managing Recorded Steps

While recording, you can pause recording at any time by clicking **Recording**. To resume recording, click **Record** again.

Manage the activities already added using the preview under **Recorded Steps**. To remove an activity, click the **Recycle Bin** icon in the upper-right corner of the action.

To insert an action after an existing recorded action, click the action in the recorded actions list. The selected action is highlighted. Then choose whether to add a new action using automatic recording or by manually selecting an action from the Recorder menu. The new action is inserted after the highlighted action.

The Recorder window allows you to select the **Input Mode** used to perform recorded actions, both during recording and at runtime when the workflow is executed. This allows you to test the input method on specific elements in real time. If a recorded action does not seem to be performed, try changing the input method to **UI Automation**, as the element may not support other input methods.

Click the input mode menu to select **Default**, **UI Automation**, or **Active Accessibility**. By default, the input method is set to **Default**, which automatically detects the best input method.

## Automatically Generated Activities

The following activities are generated automatically when the corresponding action is detected. If needed, you can update the activity properties after completing the recording.

- **Click** — Generated when you select a button or link while recording. The click type and mouse button are also recorded.

- **Type Into** — Generated when you select a text box or another editable UI element while recording.

  ![Type Into action](/static/img/action-type-into.png)

- **Select Item** — Generated when you select a drop-down list or combo box while recording. After selecting the drop-down list, you are prompted to select an item from the list to complete the action.

  ![Select Item action](/static/img/action-select-item.png)

- **Check/Uncheck** — Generated when you select a radio button or check box. The default action for a check box is **Toggle**.

  ![Check/Uncheck action](/static/img/action-check.png)

## Manually Generated Activities

In some situations, you must manually choose the action to perform before recording the action and generating the activity.

The following actions cannot be recorded automatically:

- Copy text from an application or web browser using the **Get Text** activity. After choosing the action and selecting the target element, enter the name of the variable in which to store the text.
- Hover over a UI element using the **Hover** activity.

The action recorded automatically may not be the desired action. For example, you may click a text area in Notepad intending to type into it, but the default recorded action is **Click**. In this case, delete the action added by default and manually add the intended activity.

You can manually select an action from the menu that appears next to UI elements during recording.
