---
id: automation-of-fields
title: Automation of Fields
sidebar_label: Automation of Fields
sidebar_position: 4
description: Explain what the green and grey ticks displayed on the validation screen mean and how they work.
displayed_sidebar: visionSidebar
---

# Automation of Fields
You have probably already noticed the green and grey ticks displayed on the validation screen. In this article, we will explain more what they mean and how they work.

## Fields validated by AI
When you open a newly imported document in akaBot Vision, you can see that some fields have a grey tick. Such fields were already validated by the AI and they are considered correct. Currently, akaBot Vision’s AI Engine has multiple ways to estimate that a captured value should be correct. akaBot Vision can decide based on:

- Built-in checks – we perform Data Integrity checks based on values found on the document. Such checks could be validating the total sum based on other total related values, etc. See a complete list of the built-in checks and find out more technical details.
- Confidence score – akaBot Vision captures every value with some confidence level. Values that have sufficiently high confidence levels can be marked with a grey tick and can be used for automating the whole document.

In order to find out why the values were validated, you can hover over the tick and you will be able to find out more information.

## Fields validated by humans
Anytime you leave a field in the validation screen, we turn the field green. Additionally, when hovering over the tick you would see “Human” key among the checks passed on the field.

In most cases, akaBot Vision users have to ensure that all the captured values on the document are 100% correct. Therefore, it only makes sense to highlight those values to the user.

Moreover, seeing the values validated by users makes it easier to check if the users actually review all the values, etc.

## Fields needing validation
In order to focus on the most problematic fields, you should be focusing on fields that do not have a tick next to the field’s label and are written in white.

If you trust the akaBot Vision’s AI you can navigate to the next fields to be validated by pressing ENTER.

After saving the Extraction schema you should be seeing the message for the required fields with no captured value.

