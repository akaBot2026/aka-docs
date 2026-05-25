---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Custom activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

## **Description**

Activities are the core unit of behavior in Windows Workflow Foundation. The execution logic of an activity can be implemented in managed code or it can be implemented by using other activities. This topic demonstrates how to create an activity.

**There are two steps required to create a custom activity:**

1. Writing the custom activity code.
2. Package your activity
3. Register the assembly (.dll) to akaBot Platform.

📘 **Prerequisites**

Visual Studio 2013 or newer with installed components:

* Windows Workflow Foundation (WF).
* Windows Workflow Communication Foundation (WCF).  
  NET framework 4.5.2.  
  akaBot Platform.

## **Write Activity Code**

**To develop your custom activity, you will need to use Microsoft Visual Studio with WF extension package installed and do the following steps:**

1. Open Microsoft Visual Studio.
2. In the New Project dialog, under the Installed category, select Visual C# > Workflow (or Visual Basic > Workflow).
3. Select the Activity Library project template. Type "RCA.Activities.Demo" in the Name box. Select .NET Framework 4.5.2 and then click OK.
4. Right-click Activity1.xaml in Solution Explorer and choose Delete. Click OK to confirm.
5. Choose Add New Item from the Project menu.
6. In the Installed > Common Items node, select Workflow. Select Code Activity from the Workflow list.
7. Type SumInt into the Name box and then click Add.
8. Replace the existing SumInt definition with the following definition.
9. Click Build Solution. You should see no error and there is an assembly file RCA.Activities.Demo.dll in build output directory.

```csharp
using System.Activities;
namespace RCA.Activities.Demo
{
    public sealed class SumInt : CodeActivity
    {
        public InArgument<int> Number1 { get; set; }
        public InArgument<int> Number2 { get; set; }
        public OutArgument<int> Total { get; set; }

        protected override void Execute(CodeActivityContext context)
        {
            int num1 = context.GetValue(this.Number1);
            int num2 = context.GetValue(this.Number2);

            context.SetValue(Total, num1 + num2);
        }
    }
}
```

## **Package Your Activity**

To package your activity, please complete the following steps:

1. Download nuget.exe  
    Download nuget.exe from [https://dist.nuget.org/win-x86-commandline/latest/nuget.exe](https://dist.nuget.org/win-x86-commandline/latest/nuget.exe)
2. Generate .nupkg file

* Open command prompt at your project folder

![image-20230427181814-5.png](/static/img/58878f_image-20230427181814-5.png)

*Figure 1 Click on address bar -> type 'cmd' -> press Enter*

* Use following command to generate **.nuspec** file : **%PATH%\nuget spec** (**%PATH%** is the directory where **nuget.exe** file is placed).
* Open created **.nuspec** file, remove all example data and input at least **Author, Description**

![image-20230427181835-6.png](/static/img/f56d6c_image-20230427181835-6.png)

*Figure 2 Edit Author, Description*

* Add file element for any file the user desires to be copied

![image-20230427181849-7.png](/static/img/85d7ca_image-20230427181849-7.png)

*Figure 3 Add additional files to be copied*

* Use following command to generate **.nupkg** file : **%PATH%\nuget pack**(**%PATH%** is the directory where **nuget.exe** file is placed).

## **Register your package**

To register your package, you need to copy generated .nupkg file to **ProgramData** Folder: C:\ProgramData\akaBot\Packages\

## **Install Your Package**

To install your package, please complete the following steps:

1. Open Package Manager

![image-20230427181917-8.png](/static/img/0ac700_image-20230427181917-8.png)

*Figure 4 Open Package Manager*

2. Select your package from Local tab -> select version -> click install -> click save

![image-20230427181932-9.png](/static/img/c8f0d4_image-20230427181932-9.png)

*Figure 5 Choose Package from list -> select version -> click install -> click save*

3. Confirm restart studio

![image-20230427182048-10.png](/static/img/c588a3_image-20230427182048-10.png)

4. Custom activities would appear in the toolbox

![image-20230427182135-11.png](/static/img/f16aab_image-20230427182135-11.png)
