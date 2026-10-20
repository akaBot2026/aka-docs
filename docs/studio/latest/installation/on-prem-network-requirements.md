---
id: on-prem-network-requirements
title: "Configure akaBot Center/Studio/Agent in an on-premises network with an internet proxy"
sidebar_label: "On-premises network requirements"
sidebar_position: 9
description: "How to configure akaBot Center/Studio/Agent in an on-premises network with an internet proxy."
displayed_sidebar: studioSidebar
---
# Configure akaBot in an on-premises network with an internet proxy

This guide explains how to configure akaBot Studio, Agent, and Executor when akaBot Center is hosted inside the company network and internet access is available only through a forward proxy.

| Connection | Route |
|---|---|
| Studio/Agent to akaBot Center | Direct connection inside the on-premises network |
| Studio/Executor to GitLab and NuGet.org | Through the enterprise proxy |
| Center to Studio/Agent | No inbound connection is required |

> Use HTTPS for Center and internet services. Replace the example host names with values supplied by your IT administrator.

## 1. Network requirements

Configure DNS, firewall, and proxy rules before configuring the applications.

### Required services

| Service name | URL | Domain | IP address | Port | Purpose |
|---|---|---|---|---|---|
| akaBot Center | `https://center.company.local/` | Customer-defined Center host | Customer-defined Center IP or load-balancer VIP | TCP 443 (recommended), or the port specified in the Center URL | Authentication, heartbeat, jobs, logs, workflow publishing, assets, and workflow package download |
| Enterprise proxy | `http://proxy.company.local:8080` (example) | Customer-defined proxy host | Customer-defined proxy IP or VIP | Customer-defined TCP port | Provides controlled access to the internet services below |
| akaBot GitLab package feed | `https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json` | `gitlab.com` | Dynamic; do not use a fixed IP allowlist | TCP 443 | Downloads akaBot activity packages and their metadata |
| NuGet.org package service | `https://api.nuget.org/v3/index.json` | `api.nuget.org` | Dynamic; do not use a fixed IP allowlist | TCP 443 | Resolves dependencies and downloads public NuGet packages |
| NuGet.org search | `https://azuresearch-usnc.nuget.org/` and `https://azuresearch-ussc.nuget.org/` | `azuresearch-usnc.nuget.org`, `azuresearch-ussc.nuget.org` | Dynamic; do not use a fixed IP allowlist | TCP 443 | Searches and autocompletes packages in Studio Package Manager |
| NuGet.org website | `https://www.nuget.org/` | `www.nuget.org` | Dynamic; do not use a fixed IP allowlist | TCP 443 | Opens package information and related links; optional for workflow execution |

Public package services use load-balanced and CDN addresses. Allow them by FQDN/SNI instead of resolving and pinning their current IP addresses.

### Center ports

| Direction | Source | Destination | Port | Requirement |
|---|---|---|---|---|
| Outbound | Studio workstation | akaBot Center | TCP 443, or the port in the configured Center URL | Required |
| Outbound | Agent host | akaBot Center | TCP 443, or the port in the configured Center URL | Required |
| Inbound | akaBot Center | Studio or Agent | None | Not required |

Studio and Agent initiate all Center communication. Local communication among Agent, Executor, and other akaBot processes uses Windows named pipes and does not require a network firewall port.

## 2. Configure routing and the proxy

Ask the network administrator to apply these rules:

1. Make the Center host name resolvable from every Studio and Agent computer.
2. Allow Studio and Agent computers to connect directly to the Center URL.
3. Exclude the Center host from the enterprise proxy. In a PAC file, return `DIRECT` for the Center FQDN before the general proxy rule.
4. Allow the proxy to create HTTPS connections to the GitLab and NuGet.org domains listed above.
5. If TLS inspection is enabled, install the organization’s trusted root certificate for both interactive users and unattended Agent accounts.

Example PAC behavior:

```text
center.company.local  -> DIRECT
gitlab.com            -> PROXY proxy.company.local:8080
*.nuget.org           -> PROXY proxy.company.local:8080
```

Do not configure Center by raw IP when its HTTPS certificate is issued to a DNS name.

## 3. Configure akaBot Agent

1. Disconnect Agent from Center if it is currently connected.
2. Open **Agent Settings**, then select **Network**.
3. Select **Manual Proxy**. This is recommended for networks that require a proxy.
4. Enter the proxy type, server address, and port supplied by the network administrator.
5. If the proxy requires authentication, select the authentication option and enter the assigned account.
6. In the exception addresses field, add the Center host. Separate multiple entries with semicolons, for example:

   ```text
   center.company.local;*.company.local
   ```

7. Select **Do not use the proxy server for local intranet addresses** when it matches the organization’s network policy.
8. Save the settings, restart Agent, and reconnect it to Center.

For unattended execution, configure proxy access for the Windows account that runs Agent/Executor. Interactive-user proxy credentials may not be available to that account.

## 4. Configure akaBot Studio

Studio inherits its Center connection settings from akaBot Agent.

1. Configure Agent as described in the previous section.
2. Confirm that Agent can connect to Center successfully.
3. Start Studio under the same Windows user session as Agent.
4. Confirm that Studio can retrieve Center resources such as environments and assets.

If the Center address, proxy, or proxy exception list changes, update the settings in Agent, reconnect Agent to Center, and then restart Studio.

This inherited connection applies to Center communication. Internet package access used by Studio and Executor must still be configured as described in the next section.

## 5. Configure package sources and package proxy access

Studio uses the current Windows user’s package configuration. Executor uses the package configuration of the Windows account under which the workflow runs.

Confirm that these package sources are enabled in Studio Package Manager:

| Package source | Address |
|---|---|
| akaBot packages | `https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json` |
| Public packages | `https://api.nuget.org/v3/index.json` |

The proxy setting on the Studio or Agent Network page does not configure every NuGet package request. Configure the Windows/.NET or NuGet proxy for each account that designs or executes workflows. The user package configuration is stored at:

```text
%LocalAppData%\akaBot\PackageManager.User.config
```

### Add the package proxy to `PackageManager.User.config`

Perform these steps while signed in as the Windows user who will run Studio or Executor:

1. Close Studio and stop any workflow executions for that user.
2. Back up `%LocalAppData%\akaBot\PackageManager.User.config`.
3. Keep the existing `<packageSources>` section and add a `<config>` section inside the root `<configuration>` element:

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <configuration>
     <packageSources>
       <add key="CurrentUser" value="%localappdata%\akaBot\Packages" />
       <add key="akaBotGitlab" value="https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json" />
       <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
     </packageSources>
     <config>
       <add key="http_proxy" value="http://proxy.company.local:8080" />
       <add key="http_proxy.user" value="COMPANY\package-user" />
       <add key="http_proxy.password" value="ENCRYPTED_PASSWORD_GENERATED_BY_NUGET" />
     </config>
   </configuration>
   ```

4. Replace the proxy URL and username with values supplied by the network administrator.
5. Generate the encrypted password value with NuGet CLI. Run the command as the same Windows user and on the same computer that will use the configuration:

   ```powershell
   nuget.exe config -Set "http_proxy=http://proxy.company.local:8080" -Set "http_proxy.user=COMPANY\package-user" -Set "http_proxy.password=<proxy-password>" -ConfigFile "$env:LOCALAPPDATA\akaBot\PackageManager.User.config"
   ```

6. Reopen the configuration file and confirm that the three proxy entries are present. NuGet writes the password in encrypted form; do not replace that value with plain text.
7. Start Studio or Agent again and validate package search and dependency restoration.

The encrypted password is protected for the Windows user and computer that created it. Repeat this configuration for every attended or unattended execution account and on every applicable computer. If integrated proxy authentication is available, omit `http_proxy.user` and `http_proxy.password` and allow Windows to supply the signed-in account’s credentials.

If the organization manages proxy settings centrally, apply them to:

- Each user who runs Studio.
- The account used for attended workflow execution.
- Every service or unattended account used by Agent/Executor.

Avoid placing a plain-text proxy password in the package configuration. Prefer integrated proxy authentication, centrally managed operating-system settings, or an internal package repository.

### Recommended option for restricted environments

For environments with strict internet controls, mirror approved packages from GitLab and NuGet.org to an internal NuGet v3 repository. Point Studio and Executor to the internal repository and disable the public sources. This improves reliability and allows the organization to approve package versions before deployment.

## 6. Validate the configuration

Perform these checks from a Studio computer and from the Windows account used by Agent/Executor.

| Test | Expected result |
|---|---|
| Open the configured Center URL | The Center site responds without a proxy authentication or certificate warning |
| Connect Studio to Center | Authentication succeeds and environments/assets can be retrieved |
| Connect Agent to Center | Agent becomes available in Center and continues to send heartbeat updates |
| Open `https://api.nuget.org/v3/index.json` through the approved proxy | A JSON service index is returned |
| Open the configured GitLab package-feed URL through the approved proxy | The feed responds; an authentication response is acceptable if the feed requires credentials |
| Search in Studio Package Manager | Results appear without a timeout |
| Install or restore a test dependency that is not already cached | The package and its dependencies download successfully |
| Run the workflow through Agent | Center downloads the workflow package and Executor restores any missing activity dependencies |

## 7. Troubleshooting

| Symptom | Check |
|---|---|
| Studio or Agent cannot connect to Center | Verify Center DNS, TCP port, HTTPS certificate trust, and that the Center host bypasses the proxy |
| Studio connects to Center but package search is empty | Allow both NuGet search domains through the proxy and verify Studio’s proxy settings |
| Package search works but workflow dependency restore fails | Configure proxy access for the Windows account running Executor; do not assume the interactive Studio proxy setting applies to it |
| Agent works interactively but unattended jobs fail | Verify the unattended account’s proxy, certificate trust, package configuration, and access to the package cache |
| Proxy repeatedly requests credentials | Use an approved service account or integrated authentication and confirm the account is permitted by proxy policy |
| HTTPS requests fail only when TLS inspection is enabled | Install the enterprise inspection CA in the trust store used by the affected user or service account |
| Access fails intermittently after public IPs are allowlisted | Replace IP rules with FQDN/SNI rules for GitLab and NuGet.org |

The destinations required by customer workflows or optional activity packages are outside this list. For example, a workflow that uses email, FTP, a browser, or a third-party API also requires access to that service.
