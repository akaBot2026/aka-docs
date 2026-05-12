---
id: deserialize-json-t
title: "Deserialize JSON `<T>`"
sidebar_label: "Deserialize JSON `<T>`"
sidebar_position: 2
description: "Deserialize JSON T activity documentation."
displayed_sidebar: activitiesSidebar
---
# Deserialize JSON `<T>`

RCA.Activities.Core.DeserializeJson

## **Description**

This activity allows you to deserialize the JSON string to a JObject.

![image-20220505145828-1.png](/img/916ee2_image-20220505145828-1.png)

(\* for Mandatory)

**In the body of activity**

* **JSON String (String)**\* - This contains the JSON string you want to deserialize. The JSON should be written without idents, and between double-quotes. Each String within the array should be written with single quotes.  
  E.g: `{'Name': 'Maria'}`

## **Properties**

**Input**

* **JSON String (String)\***- This contains the JSON string you want to deserialize. The JSON should be written without idents, and between double-quotes. Each String within the array should be written with single quotes.  
  E.g: `{'Name': 'Maria'}`

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Deserialize Json `<T>`
* **TypeArgument (Dropdown box)**- Enables you to choose different types of data that will be deserialized in the JSON String property.

**Output**

* **JSON Object (Newtonsoft.Json.Linq.JObject)** - The deserializaed JSON as a variable.
