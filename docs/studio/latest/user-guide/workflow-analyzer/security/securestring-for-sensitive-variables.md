---
id: securestring-for-sensitive-variables
title: ST-SEC-008 - SecureString for Sensitive Variables
sidebar_label: "SecureString for Sensitive Variables"
sidebar_position: 8
description: ST-SEC-008 - SecureString for Sensitive Variables
displayed_sidebar: studioSidebar
---
# ST-SEC-008 - SecureString for Sensitive Variables

**Rule ID:** ST-SEC-008

**Scope:** Activity

## Description

Ensures that variables containing sensitive keywords (like 'password') are of type `System.Security.SecureString`. This string type should be used for storing potentially sensitive strings.

Read more about SecureString [here](https://learn.microsoft.com/en-us/dotnet/api/system.security.securestring).

![st-sec-008](/static/img/st-sec-008.png)

## Recommendation

Change the variable type to `SecureString` for credentials or sensitive data.

The `SecureString` type should not be used for any purpose other than the intended one. The scope of such variables should be very limited, ideally in the same scope where they were created. Variables containing credentials should be defined at the narrowest scope possible.

Once a `SecureString` is retrieved, it should be used to log into applications by using the **Type Secure Text** activity for regular applications.

## Parameters

*   **Keywords:** A list of keywords to identify sensitive variables. Default values: `password,secret,token,cre`...

![st-sec-008-rtd](/static/img/st-sec-008-rtd.png)

