---
id: configure-automation-type-for-pipeline
title: Configure Automation Type for Pipeline
sidebar_label: Configure Automation Type for Pipeline
sidebar_position: 3
description: Configure automation type for pipeline in Akabot Vision.
displayed_sidebar: visionSidebar
---

# Configure Automation Type for Pipeline

**Configure Automation Type for pipeline**

Staff can configure the Automation Type for each pipeline by following these steps

**Step 1:** Go to Pipeline's configuration, choose "Automation & Fields" tab

![image-20221024171223-1.png](/static/img/image-20221024171223-1.png)

**Step 2:** Choose Automation Type and set conditions for required fields and data formats 

- The Automation Type will have 3 options:
  - NEVER: Enforce human review for every document processed by akaBot Vision. It means that all documents need to be reviewed and confirmed by human
  - CONFIDENT: On CONFIDENT automation type, staff need to choose threshold scores for the documents and the fields whose confidence scores are over this score threshold will be automated by the akaBot Vision
  - ALWAYS: Use the "Always" setting if staff want to confirm all the documents automatically.
- Bypass missed required fields: All the documents with the missed required fields inside will be moved to "To review" tab in the pipeline. Even when you choose "Always" settings, you need to review these later. If you turn this mode on, all the missed required fields will be bypassed
- Bypass wrong data formats: All the documents with wrong data formats inside will be moved to the "To review" tab in the pipeline. Even when you choose "Always" settings, you need to review these later. If you turn this mode on, all the wrong data formats will be bypassed

![image-20221024171419-2.png](/static/img/image-20221024171419-2.png)

**Step 3:** Click [Save] to save setting

![image-20221026141928-1.png](/static/img/image-20221026141928-1.png)

# Configure confident score for specific fields

Staff can configure the confident score level for specific fields and this score will override the overall confidence score level of pipeline. It means that the confident score of fields should be more than the confident score level then document can move from "To-review" tab to "Confirmed" tab automatically

Please follow these steps to know how to configure confident score for each field

**Step 1:** Go to Pipeline's configuration, choose "Automation & Fields" tab

![image-20221024171223-1.png](/static/img/image-20221024171223-1.png)

**Step 2:** With Automation Type, choose CONFIDENT option then choose confident score level for pipeline

![image-20221026152015-2.png](/static/img/image-20221026152015-2.png)

**Step 3:** Go to fields that staff want to set confident score, click "Edit" button

![image-20221026152338-3.png](/static/img/image-20221026152338-3.png)

**Step 4:** Turn on "Custom confident score" toggle

![image-20221026152655-4.png](/static/img/image-20221026152655-4.png)

**Step 5:** Input confident score that staff want to set then click "OK" button

![image-20221026154359-5.png](/static/img/image-20221026154359-5.png)
