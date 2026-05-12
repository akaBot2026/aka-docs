---
id: http-task
title: How to Create an HTTP Task in a Process
sidebar_label: How to Create an HTTP Task in a Process
sidebar_position: 5
displayed_sidebar: collaborationSidebar
---

# How to Create an HTTP Task in a Process

The HTTP Task in akaBot Center enables a process to call external REST API endpoints directly from the process engine, without requiring a bot agent to handle the integration. This is useful for lightweight integrations such as sending a webhook notification, fetching reference data from an external system, submitting a form to a third-party service, or triggering an action in another platform. HTTP Tasks support all standard HTTP methods and can handle both JSON and form-encoded request bodies.

The HTTP Task executes synchronously within the process flow: the process pauses at the HTTP Task, sends the configured request, waits for the response, and then continues. Response data — including status code, response headers, and body — can be captured into process variables and used by subsequent tasks. If the HTTP call fails (network error, non-2xx status code), the task can be configured to retry or route to an error path.

For secure APIs, the HTTP Task supports several authentication mechanisms including API key injection (via header or query parameter), Bearer token, and Basic authentication. Sensitive credentials such as tokens and passwords should be stored as secure process constants rather than hard-coded in the task configuration to prevent exposure in logs or the process designer UI.

## HTTP Task Configuration Panel

| Property | Description | Required |
|---|---|---|
| Task Name | Display name for this task | Yes |
| URL | The full endpoint URL (supports variable interpolation) | Yes |
| HTTP Method | GET, POST, PUT, PATCH, DELETE | Yes |
| Headers | Key-value pairs for request headers | No |
| Query Parameters | Key-value pairs appended to the URL | No |
| Authentication Type | None, API Key, Bearer Token, Basic Auth | No |
| Request Body Type | None, JSON, Form Data, Raw | No |
| Request Body | The body content or template | No |
| Response Status Variable | Variable to store the HTTP response status code | No |
| Response Body Variable | Variable to store the parsed response body | No |
| Timeout (seconds) | Maximum wait time for a response | Yes |
| Retry Count | Number of retries on failure | No |
| On Failure | Error path or terminate | Yes |

## Steps to Add an HTTP Task

1. Open the process in the **Process Designer**.
2. Drag the **HTTP Task** element from the Task Palette onto the canvas.
3. Connect it within the process flow.
4. Click the HTTP Task node to open its **Properties** panel.
5. Enter a **Task Name**.
6. In the **URL** field, enter the endpoint. Use `${variableName}` syntax to embed process variables (e.g., `https://api.example.com/invoices/${invoiceId}`).
7. Select the **HTTP Method**.
8. Add any required **Headers** (e.g., `Content-Type: application/json`).
9. If the API requires authentication, select the **Authentication Type** and provide the credentials or token variable reference.
10. For POST/PUT/PATCH methods, select the **Request Body Type** and enter the request body template.
11. Map the **Response Status Variable** and **Response Body Variable** to process variable names.
12. Set an appropriate **Timeout** value.
13. Configure **Retry Count** and the **On Failure** routing.
14. Click **Save**.

## Example: Calling a Webhook

```json
URL: https://hooks.example.com/services/notify
Method: POST
Headers:
  Content-Type: application/json
Body:
{
  "processId": "${instanceId}",
  "status": "${approvalStatus}",
  "message": "Process step completed"
}
```
