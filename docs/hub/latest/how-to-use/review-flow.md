---
id: review-flow
title: Review Flow
sidebar_label: Review Flow
sidebar_position: 5
description: Review Flow.
displayed_sidebar: hubSidebar
---

## Review Flow
Depending on the way it was shared, the idea undergoes trough different review phases
## 1. Review an Idea
**a. An Idea Approver reviews the idea**

After an idea has been shared with akaBot Hub, an Idea Approver will review the idea by accessing the **Workspace -> Automation Pipeline**, Idea Approver can either Approve, Mark as Duplicate or Reject it. Idea after being approved will transfer to the Assessment phase with Awaiting Review status and can be accessed in **Workspace -> Automation Pipeline**

![image-20230223092408-1.png](/static/img/image-20230223092408-1.png)

> **Note:** Before approving an Idea, please check whether the idea is assigned to Process Owner or not. If not, please access the detail idea, go to Edit then scroll down to the bottom of idea to assign Process Owner

**b. The Process Owner fills the detailed information for idea**

Once an idea is approved, the Process Owner assigned to it receives an Assessment Invitation requesting them to complete a Detailed Assessment. The detailed assessment tasks are sent to Incomplete - My Task of Process Owner. On the other hand, the Process Owner can find the idea needed to be reviewed in the Automation Pipeline of the Workspace. After the Process Owner clicks Submit Assessment, the idea's phase is updated to the Qualification phase, and its status changes to Awaiting Review.

![image-20230223093939-2.gif](/static/img/image-20230223093939-2.gif)

**c. The Program Manager reviews the idea and decides whether it will move further to the Implementation phase or not**

Based on the complexity of the work required for the idea implementation, the Program Manager can choose between the following two actions:

- **Approve for CoE**: The idea needs to be developed by a CoE implementation team
- **Approve for Citizen Developer**: The idea which has low-risk, simple or medium tasks can be developed by Citizen Developer

![image-20230223094550-3.png](/static/img/image-20230223094550-3.png)

**d. Based on the flow chosen by the Program Manager, there can two cases:**

**Approve for CoE**

The idea is updated to the Qualification phase, status Approved. The Program Manager needs to add a Project Manager as Collaborator.

![image-20230223095132-4.png](/static/img/image-20230223095132-4.png)

The assigned Project Manager can perform the actions related to that specific idea in the desired order:

- Adding additional collaborators, like users with “Business Analyst” and “RPA Developer” role

![image-20230223095313-5.png](/static/img/image-20230223095313-5.png)

- Updating the phase and status of the idea from dropdowns available in the Edit view of Automation Profile – About section

![image-20230223095932-8.png](/static/img/image-20230223095932-8.png)

- Creating a project plan and keeping  track of the cost estimates in the Cost-Benefit Analysis section

![image-20230223101602-13.png](/static/img/image-20230223101602-13.png)

- Encourage the collaborators to bring the relevant documentation in the idea: AS IS, TO BE documentation (PDD, SDD, DSD)

![image-20230223101938-14.gif](/static/img/image-20230223101938-14.gif)

- Encourage the RPA developers to explore the gallery of reusable components and upload their own components.
  - Reuse component

![image-20230223102414-15.gif](/static/img/image-20230223102414-15.gif)

    - Upload their own components by accessing Workspace -> My Component -> Upload Component.
- Perform updates on the automation potential %, the costs, and project plan, once the implementation is over, to reflect the reality of the project. This is done by editing the Cost Benefit Analysis and bringing the most recent information into there
- As soon as the required Implementation phases are completed the Project Manager updated the idea phase to Live to reflect that the automation implementation is finalized

![image-20230223103332-16.gif](/static/img/image-20230223103332-16.gif)

## 2. Approve for Citizen Developer
- The idea’s phase is updated to Development status Not Started available in the Implementation view

![image-20230223103639-17.png](/static/img/image-20230223103639-17.png)
- A Citizen Developer accesses the Implementation view and chooses the idea in order to develop it further by choosing Starting Development.

![image-20230223104347-19.gif](/static/img/image-20230223104347-19.gif)
- As soon as the development is completed the idea, he will upload to the Document tab and then click to Move to Technical Review
![image-20230223105848-20.gif](/static/img/image-20230223105848-20.gif)
- Technical Reviewers performs the code review and if no updates are required, they approve the automation and change its phase to Live

![image-20230223110009-22.gif](/static/img/image-20230223110009-22.gif)

##  3. Idea Review Flow Graphic

## 4. Review a CoE-driven idea 
**a. The Process Owner verifies the detail information for idea**

As soon as the CoE-driven idea is submitted, an Assessment Invitation is sent to the Process Owner who is assigned to that idea, asking them to verify the correction of information in the Detailed Assessment. The Process Owner access idea from **My-task – Incomplete section.** As soon as Process Owner clicks Submit Assessment, the phase of the idea will be updated to Qualification and its status Awaiting Review

**b. The Program Manager reviews the idea and decides whether it will move to further to the Implementation phase or not**

Based on the complexity of the work required for the idea implementation, the Program Manager can choose between the following two actions:

- Approve for CoE: The idea needs to be developed by a CoE implementation team
- Approve for Citizen Developer: The idea which has low-risk, simple or medium tasks can be developed by Citizen Developer

**c. Based on the flow chosen by the Program Manager, there can two cases:**

**1. Approve for CoE**

The idea is updated to the Qualification phase, status Approved. The Program Manager needs to add a Project Manager as Collaborator.

The assigned Project Manager can perform the actions related to that specific idea in the desired order:

- Adding additional collaborators, like users with “Business Analyst” and “RPA Developer” role
- Updating the phase and status of the idea from dropdowns available in the Edit view of Automation Profile – About section
- Creating a project plan and keeping  track of the cost estimates in the Cost-Benefit Analysis section
- Encourage the collaborators to bring the relevant documentation in the idea: AS IS, TO BE documentation (PDD, SDD, DSD).
- Encourage the RPA developers to explore the gallery of reusable components and upload their own components.
- Perform updates on the automation potential %, the costs, and project plan, once the implementation is over, to reflect the reality of the project. This is done by Editing the Cost Benefit Analysis and bringing the most recent information in there
- As soon as the required Implementation phases are completed the Project Manager updated the idea phase to Live to reflect that the automation implementation is finalized

**2. Approve for Citizen Developer**

- The idea’s phase is updated to Development status Not Started available in the Implementation view
- A Citizen Developer accesses the Implementation view and chooses the idea in order to further develop it
- As soon as the development is completed the idea, it will be moved to Technical Review
- Technical Review performs the code review and if no updates are required, the approve the automation and change its phase to Live

## 5. Review an Automation

**a. Business Reviewer review automation in terms of business**

After automation has been submitted, it will move to the Business Review phase to review whether the automation can adapt to the current business or not by Business Reviewer. By accessing the **Workspace -> Automation Pipeline**, the Business Reviewer can either Approve, Put On Hold, Reject or Move to Technical Review. If the Business Reviewer approves it and move it to the Technical Review, the automation will move to Technical Review phase with status Awaiting Review

**b. Technical Reviewer reviews automation in terms of technique**

In Technical Review, the Technical Reviewer is responsible for reviewing automation in terms of technique by accessing the **Workspace -> Automation Pipeline**

- If the Technical Reviewer approves it, the automation will come to the Live phase with the status In Production and that automation is ready for everyone to use it
- If the Technical Reviewer needs that automation rework-required, the Program Manager will re-consider and decide which way that automation should be reworked and the automation will be moved to the Qualification phase. Moreover, the development flow of automation will depend on the way that Program Manager develops it