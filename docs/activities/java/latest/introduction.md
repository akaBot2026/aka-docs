---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Java activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The **Java Activities Pack** contains several activities that help you harness the power of Java code. With the ** Java Scope** activity, you can initialize a Java library, thus providing a scope for all subsequent activities. All activities in this pack must be run inside the aforementioned scope.

# Install and Enable Java Access Bridge

## **1. Download Java Access Bridge**

Download Java Access Bridge 2.0.2 from the Java Access Bridge Home Page at the following URL
https://www.oracle.com/java/technologies/javase/javase-tech-access-bridge.html

## **2. Installing Java Access Bridge for Windows 64-Bit**

Copy the following files to the specified destination directories:

* %WINDOWSHOME% is the directory where Microsoft Windows is installed (for example, C:\WINDOWS).
* %JAVAHOME32% is the directory where your JDK or JRE for 32-bit systems is installed. The following are examples of directory names for Java SE 6 Update 24 for 32-bit systems:
  + § JDK: C:\Program Files (x86)\Java\jdk1.6.0\_24\jre
  + § JRE: C:\Program Files (x86)\Java\jre6

|  |  |
| --- | --- |
| **Java Access Bridge File** | ** Destination Directory** |
| WindowsAccessBridge-32.dll | %WINDOWSHOME%\SYSWOW64 |
| JavaAccessBridge-32.dll | %JAVAHOME32%\bin |
| accessibility.properties | %JAVAHOME32%\lib |
| access-bridge-32.jar | %JAVAHOME32%\lib\ext |
| jaccess.jar | %JAVAHOME32%\lib\ext |

## **3. How to enable Java Access Bridge**

* ### **Go to Control Panel, choose Optimize Visual Display**

![1776220943601-655.png](/img/79537f_1776220943601-655.png)

* ### **Check Enable Java Access Bridge**

![1776220993577-455.png](/img/81c1a7_1776220993577-455.png)

#### ***If it does not work then:***

**Step 1:** Open Java app, open Task Manager

![1776221297870-213.png](/img/bbfeaa_1776221297870-213.png)

**Step 2:** Right click the Java app, then choose Properties

![1776221348602-229.png](/img/684624_1776221348602-229.png)

**Step 3:** Copy the location

![1776221446698-706.png](/img/0ea230_1776221446698-706.png)

**Step 4:** From Control Panel > choose Edit system environment variables.

**Step 5:** Click Environment Variables…

**Step 6:** Add the Location above to Path

![1776221690665-464.png](/img/8f880b_1776221690665-464.png)

**Step 7:** Go to Command line,

**Step 8:** Change directory to the Location above: cd `<Location path from step 3>`

**Step 9:** Run command: “jabswitch –enable”

![1776221749325-594.png](/img/9a8d8a_1776221749325-594.png)