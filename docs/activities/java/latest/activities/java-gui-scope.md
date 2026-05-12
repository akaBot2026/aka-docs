---
id: java-gui-scope
title: "Java Gui Scope"
sidebar_label: "Java Gui Scope"
sidebar_position: 7
description: "Java Gui Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Java Gui Scope

RCA.Activities.Java.JavaGuiScope

## **Description**

This activity allows you to initialize a Java library and provide a scope for all subsequent activities.

[![java gui scope.png](/img/e5212f_java-gui-scope.png)](/bin/download/Activities/Java/Activities/Java%20Gui%20Scope/WebHome/java%20gui%20scope.png?rev=1.1)  
(\* is mandatory)

## **Properties**

**Input**

* **Process Path (String)**\* - The file path you want to execute. String supported only.  
  Eg: “C:/Apps/Agent.java”
* **Selector (String)**\* - You can add selectors here. String supported only.  
  Eg:

Text

`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Java Gui Scope

**Options**

* **Dispose On Completed Or Faulted (Checkbox)** - Specifies whether the Java Application Window is closed when execution is finished or faulted. This option is checked by default.

**Output**

* **Java Access Bridge (JavaElement)** : Object allow view and manipulate information about GUI elements in a Java application. Output in JavaElement variable only.
