---
id: securestring-for-sensitive-arguments
title: ST-SEC-007 - SecureString for Sensitive Arguments
sidebar_label: "SecureString for Sensitive Arguments"
sidebar_position: 7
description: ST-SEC-007 - SecureString for Sensitive Arguments
displayed_sidebar: studioSidebar
---
# ST-SEC-007 - SecureString for Sensitive Arguments

**Rule ID:** ST-SEC-007

**Scope:** Workflow

## Description

Ensures that arguments containing sensitive keywords (like 'password') are of type `System.Security.SecureString`. This string type should be used for storing potentially sensitive strings.

Read more about SecureString [here](https://learn.microsoft.com/en-us/dotnet/api/system.security.securestring).

![st-sec-007](/static/img/st-sec-007.png)

## Recommendation

Change the argument type to `SecureString` for credentials or sensitive data.

The `SecureString` type should not be used for any purpose other than the intended one. This means that arguments should not be used to pass credentials from one workflow to another. Variables containing credentials should be defined at the narrowest scope possible.

Once a `SecureString` is retrieved, it should be used to log into applications by using the **Type Secure Text** activity for regular applications.

## Parameters

*   **Keywords:** A list of keywords to identify sensitive arguments. Default values: `password,secret,token,cre`...

![st-sec-007-rtd](/static/img/st-sec-007-rtd.png)
