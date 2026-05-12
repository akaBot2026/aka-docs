---
id: get-files
title: "Get Files"
sidebar_label: "Get Files"
sidebar_position: 6
description: "Get Files activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Files

RCA.Activities.Core.GetFiles

## **Description**

This activity allows you to return the names of files (including their paths) in a specified directory.

![image-20220513104343-1.png](/img/9d351e_image-20220513104343-1.png)

(\* for Mandatory)

## **Properties**

**Input**

* **Creation Time (From) (DateTime)** – Looks for files create from this date onward. Left blank if the created time is unknown.  
  E.g: 4/4/2021 9:00 AM
* **Creation Time (To) (DateTime)** – Looks for files that are created up to this date. Change to *DateTime.Now* to look for files up to the current run time of the bot.  
  E.g: 4/7/2021 9:34 PM
* **Directory (String)**\* - The path of the directory where the files are retrieved.  
  E.g: “C:\Users\Admin\Documents\Inputfolder”
* **Filter (String)** - Filter of the file. If It's blank, will look for files all type of file. Filter follow the regular expression rules.  
  E.g: “\*.mp4”
* **Search Option**(Drop down list)- Drop down with 2 search options. Select Top Directory if you want to search for the files in the current folder only or select AllDirectories if you want to search for the files in the sub-folder of the current folder too.

**Last Modified Date**

* **From (DateTime)** – Looks for files that have the last modification date and time from this date. If not specified, DateTime. MinValue is used.  
  E.g: 4/4/2021 9:00 AM
* **To (DateTime)** – Looks for files that have the last modification date and time up to this date. If not specified, DateTime.Now is used.  
  E.g: 4/7/2021 9:34 PM

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [997394815] Move File
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.

**Output**

* **Files (FileData)** - The data of the files you get is stored in an array of FileData. Loop through each files with For Each activity, argument type RCA.Activities.Core.FileData to process all the files.
