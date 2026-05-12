---
id: deserialize-json-array
title: "Deserialize JSON Array"
sidebar_label: "Deserialize JSON Array"
sidebar_position: 1
description: "Deserialize JSON Array activity documentation."
displayed_sidebar: activitiesSidebar
---
# Deserialize JSON Array

RCA.Activitites.Core.DeserializeJsonArray

## **Description**

This activity allows you to deserialize the JSON array string to a JSON Array Object.

TODO: add image here

(\* for Mandatory)

**In the body of activity**

* **JSON String (String)\***- This contains the JSON string you want to deserialize. The JSON should be written without idents, and between double quotes. Each String within the array should be written with single quotes.  
  E.g: `[{'Name': 'Maria 1'}, {'Name': 'Maria 2'}]`

## **Properties**

**Input**

* **JSON String (String)\***- This contains the JSON string you want to deserialize. The JSON should be written without idents, and between double quotes. Each String within the array should be written with single quotes.  
  E.g: `[{'Name': 'Maria 1'}, {'Name': 'Maria 2'}]`

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Deserialize JSON Array

**Output**

* **JSON Array (Newtonsoft.Json.Linq.JArray)**- The reserialized JSON Array is stored in a variable.
