---
id: webhooks
title: Send Results by Webhook
sidebar_label: Webhooks
sidebar_position: 1
description: Send results to another system automatically and check each delivery.
displayed_sidebar: akaXtractSidebar
---

# Send Results by Webhook

A Webhook sends the result of each processed document to a URL that you provide.

**Before you begin:** you need permission to manage Webhooks, a Pipeline that processes real documents, and the receiver's address.

## Set Up a Webhook

1. Open the Pipeline, select `Webhook`, and turn on `Enable Webhook`.
2. Enter `Callback URL` and choose the `HTTP Method` your receiver needs. Use a valid address that your network policy allows. HTTPS is recommended.
3. Optional: select `Add Header` to add headers, for example `x-api-key` for authentication. Header names cannot repeat.
4. Optional: reshape the data. `Body (Custom JSON)` must be a valid JSON object. Use `Quick Insert` to add placeholders. `Result Mapping (TypeScript)` changes the result before it is sent. Leave it blank to send the original result.
5. Select `Save Webhook`, then reopen it to check the saved values.

![Webhook configuration with Enable Webhook, Callback URL, HTTP Method, Headers, and Result Mapping](/static/img/scale-xtract-webhook-config-full.png)

![Quick Insert placeholders and Body (Custom JSON)](/static/img/scale-xtract-webhook-config-body.png)

**Result:** the configuration is saved. Saving does not send a test.

Available placeholders include `$jobId`, `$fileId`, `$pipelineId`, `$pipelineVersion`, `$status`, `$result`, `$metadata`, `$errorCode`, `$errorMessage`, `$retryCount`, and `$completedAt`.

## When a Webhook Is Sent

- The Webhook sends results and processing errors.
- If the Pipeline needs Human Review, the result is sent after the reviewer selects `Confirm`. A rejected result is not sent.
- `Test Pipeline` does not send Webhooks.

## Check Deliveries

Open `Webhook History`, filter by Job ID, status, or method, and select `View` to see the request, the response, the HTTP status, and any error.

![Webhook History tab with delivery attempts](/static/img/scale-xtract-webhook-history.png)

![Webhook Call Details dialog](/static/img/scale-xtract-webhook-call-details.png)

| Status | Meaning |
| --- | --- |
| `SUCCESS` | The receiver returned an HTTP 2xx status. Check the receiver's own record to confirm |
| `FAILED` | One attempt failed |
| `EXHAUSTED` | All attempts are used |

If the receiver returns a status other than 2xx, AkaXtract retries automatically, up to 3 times, 1 minute apart. Correct the address or the authentication, and agree with your integration team how to resend and reconcile.

:::note
A result can be delivered more than once, so make the receiver handle duplicates. Do not retry a successful Job only to resend a Webhook.
:::
