---
id: configure-ask-ai
title: Configure Ask AI
sidebar_label: Configure Ask AI
sidebar_position: 7
description: Learn how to configure the network connection for Ask AI service in akaBot Studio.
displayed_sidebar: studioSidebar
---

# Configure Ask AI

This document guides users and IT Administrators on how to inspect, configure, and resolve network connection issues when using the **Ask AI** service (an intelligent assistant feature that supports code generation, expression explanation, and direct chat) on **akaBot Studio** in enterprise environments.

---

## 1. Step-by-Step Inspection and Troubleshooting

**Note**: In enterprise environments, Internet access is often strictly monitored by Firewalls, Proxy servers, or internal security policies (Group Policy). Follow the steps below to isolate and resolve issues.

**Step 1: Verify the Ask AI Configuration URL**

First, determine which AI server address (URL) your Studio client is pointing to.

1. Locate and open the configuration file `RCAStudio.exe.config`. Default file path: `"C:\Program Files\FPT Software\akaBot Platform\RCAStudio.exe.config"`

![rcastudio-config](/static/img/rcastudio-config.png)

2. Search for the configuration key: **`AskAIWorkerApiUrl`** and retrieve its value (e.g., `https://akabot-chatbot-worker.buianhdat305.workers.dev`).

![askAiWorkerApiUrl](/static/img/askAiWorkerApiUrl.png)

3. Open **PowerShell** on the user's machine and run the following command to check if the workstation can reach the AI server address:

```powershell
# Example AI server URL: https://akabot-chatbot-worker.buianhdat305.workers.dev

# Verify domain name resolution and connection to Port 443 (HTTPS)
Test-NetConnection -ComputerName akabot-chatbot-worker.buianhdat305.workers.dev -Port 443
```

- **If `TcpTestSucceeded : True`**: The transport layer (TCP) connection is functioning normally.
- **If `TcpTestSucceeded : False` or timeout error**: The network connection is being blocked.

![powershell](/static/img/powershell.png)

---

**Step 2: Configure Enterprise Proxy Settings**

If your organization requires internet traffic to go through a proxy server, you must configure the proxy settings for akaBot Studio.

### Steps to configure via UI:

Open akaBot Agent -> Go to **Network** tab -> Configure **Proxy**

1. **AutoDetect (Recommended for enterprise networks)**: Automatically inherits proxy settings from the Windows operating system (Internet Options).

![auto-detect](/static/img/auto-detect.png)

2. **ManualProxy**: Manually input the proxy server hostname, port, and credentials.

![manual-proxy](/static/img/manual-proxy.png)

3. **NoProxy**: Bypasses the proxy (direct connection).

![no-proxy](/static/img/no-proxy.png)

---

**Step 3: Request Firewalls / Web Filters Whitelisting**

If the network access is blocked by security policies, contact your organization's IT or Network Administrator and request they add the following addresses and ports to the allowlist:

| Destination Type | Address / Domain Name                                                                                     | Port  | Protocol | Purpose                                                     |
| :--------------- | :-------------------------------------------------------------------------------------------------------- | :---- | :------- | :---------------------------------------------------------- |
| **AI Server**    | The address configured under `AskAIWorkerApiUrl` (e.g., `akabot-chatbot-worker.buianhdat305.workers.dev`) | `443` | HTTPS    | Sends analysis requests and receives responses from the AI. |

### Specific API Endpoints of the AI Service that must be allowed through:

- `POST /device/enroll` - Registers and enrolls device identification for the first time.
- `POST /chat` - Sends and receives messages to/from the AI.
- `POST /device/quota` - Checks the usage quota of the account/device.
- `POST /expression/generate` - Automatically generates conditional expressions for activities.
- `POST /session/upload` - Uploads feedback data for self-learning and response quality assessment.
