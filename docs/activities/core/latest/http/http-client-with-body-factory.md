---
id: http-client-with-body-factory
title: "HTTP Client with Body Factory"
sidebar_label: "HTTP Client with Body Factory"
sidebar_position: 1
description: "HTTP Client with Body Factory activity documentation."
displayed_sidebar: activitiesSidebar
---
# HTTP Client with Body Factory

## **Description**

This HTTP Client with Body Factory activity enables you to perform HTTP requests to a specified web API. When first dragging this activity to the Designer panel, the HTTP Request Wizard window is displayed, providing an easier way of building requests and previewing server responses.

[![HTTP Client with.jpg](/img/63bea1_http-client-with.jpg)](/bin/download/Activities/HTTP/Activities/HTTP%20Client%20with%20Body%20Factory/WebHome/HTTP%20Client%20with.jpg?rev=1.1)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **TimeOut MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 6000 (milliseconds).  
  Ex: 6000

**Input**

* **Accepted Format (AcceptedHeaderType)**- The format in which to receive the web server's response. The following options are supported:  
  ・ANY (default value)  
  ・XML  
  ・JSON.
* **End Point (String)**\* - The URL to which you want to make the request.  
  Ex: https://akabot.com/
* **Method (Dropdown List)** – The request method to be used when calling the API. The following HTTP verbs are supported: **GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH** and **MERGE.**  
  By default, the **GET** method is selected.

**OAuth1**

* **Consumer Key (String)**- The consumer key to be used if the API you are making requests to is based on the OAuth1 authentication protocol.
* **Consumer Secret (String)** - The consumer secret to be used if the API you are making requests to is based on the OAuth1 authentication protocol.
* **OAuth1 Token (String)**- The access token to be used if the API you are making requests to is based on the OAuth1 authentication protocol, after an authorization request for the consumer has been approved.
* **OAuth1Token Secret (String)** - The secret to be used if the API you are making requests to is based on the OAuth1 authentication protocol, after an authorization request for the consumer has been approved.

**OAuth2**

* **OAuth2Token (String)**- The access token to be used if the API you are making requests to is based on the OAuth2 authentication protocol.

**Options**

* **Attachments (String)** - Allow you to attach files to requests. Click the Ellipsis button to open the Attachments window and add all the required files.
* **Body (String)**- The body of the request.
* **Body Format (String)**- The format in which the body has to be. By default, it is filled in with application/XML.
* **Cookies (String)**- The cookies in the HTTP Request.
* **Headers (String)**- Allow you to include custom headers in the HTTP request.
* **Parameters (String)** - The request parameters.
* **Resource Path (String)** - A file path at which the response should be saved. This field supports strings and string variables.  
  **Ex**: “ D:\Users\
* **Url Segments\***- Indicates that the line added is a fragment or the URL provided in the Endpoint field

**Output**

* **Result (String)**\* - The response received from the HTTP request, as a string variable.
* **Status Code (Int32)**- The status code received from the HTTP request, as an integer variable.  
  Ex: 200

**Proxy**

* **Http Proxy**- IP address of the site you’re trying to access. It is a string, so it has to be encased in quotation marks.  
  Ex: “127.0.0.0”
* **Proxy Username** - Username of the user account used to access the proxy. It is a string, so it has to be encased in quotation marks.  
  Ex: “admin”
* **Proxy Password** - Password of the user account used to access the proxy. It is a string, so it has to be encased in quotation marks.  
  Ex: “abcd23”

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [35413123123] Http Request

**Simple Authentication**

* **Password (String)**\* - Indicates that the web service uses simple authentication and enables you to input your password. Adding a password is also required. This property supports strings and string variables.  
  Ex: admin@123
* **Username (String)**\* - Indicates that the web service uses simple authentication and enables you to input your username. Adding a username is also required. This property supports strings and string variables.  
  Ex: user
