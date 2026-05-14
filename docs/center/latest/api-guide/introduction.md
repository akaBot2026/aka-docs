---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction documentation."
displayed_sidebar: centerSidebar
---
# Introduction

## **1.  Overview**

This is an REST API that exposes entities and their relationships using well defined access, navigation and modification rules. The akaBot Center API Guide is meant to help you easily access and manage all resources available in the Center web interface.

Node: All examples have been built using the http://botcenter.akabot.io Center address. Please use your own Center address when building requests.

## **2. Authentication**

### 2.1. Robot

The authentication system for the akaBot Center API uses a bearer token. It requires you to use the robotKey and machineName.

To authenticate to the akaBot Center API do the following:

a. Make a POST request to the http://botcenter.akabot.io/api/Account URL

![image-20230306180029-1.png](/static/img/9ab32c_image-20230306180029-1.png)

Request

![image-20230306180029-2.png](/static/img/994d3b_image-20230306180029-2.png)

![image-20230306180029-3.png](/static/img/98c264_image-20230306180029-3.png)

Response

![image-20230306180029-4.png](/static/img/41d5eb_image-20230306180029-4.png)

b. Copy to the Clipboard the token from the HTTP response, from the "id\_token"

c. The token must be used in all future requests, in the following format:

![image-20230306180029-5.png](/static/img/7359f6_image-20230306180029-5.png)

### 2.2. Acount

The authentication system for the akaBot Center API uses a bearer token. It requires you to use the username and password.

To authenticate to the akaBot Center API do the following:

a. Make a POST request to the http://botcenter.akabot.io/api/authenticate URL

![image-20230306180029-6.png](/static/img/7c1661_image-20230306180029-6.png)

Request

![image-20230306180029-7.png](/static/img/27d353_image-20230306180029-7.png)

![image-20230306180029-8.png](/static/img/2e6ef6_image-20230306180029-8.png)

Response

![image-20230306180029-9.png](/static/img/df5f37_image-20230306180029-9.png)

a. Copy to the Clipboard the token from the HTTP response, from the "id\_token"

b. The token must be used in all future requests, in the following format:

![image-20230306180029-10.png](/static/img/f9492d_image-20230306180029-10.png)