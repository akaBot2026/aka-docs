---
id: install-remote-runtime-from-command-line
title: Install akaBot Remote Runtime from the Command Line
sidebar_label: Install Remote Runtime from Command Line
sidebar_position: 4.45
description: Install akaBot Remote Runtime on a Remote Desktop host or Citrix VDA from the command line, choose how the browser extensions are registered, and use the Remote Runtime setup tool.
displayed_sidebar: studioSidebar
---

# Install akaBot Remote Runtime from the Command Line

akaBot needs two parts to automate applications inside a Remote Desktop or Citrix session:

| Part | Where it is installed | Installed by |
|---|---|---|
| **Remote Runtime** (server and browser extensions used inside the session) | The **remote machine**: the Remote Desktop host or the Citrix VDA | `akaBotRemoteRuntime-<version>-x64.exe` (this page) |
| **Remote Desktop / Citrix extension** (client DLL) | The machine that **opens** the session, where Studio or Robot runs | The Studio installer. See [Remote Desktop and Citrix extensions](./install-akabot-platform-from-command-line.md#remote-desktop-and-citrix-extensions-remoteext) and [akaBot Commander](./akabot-commander.md#74-remote-desktop-and-citrix-extensions). |

The Remote Runtime installer does **not** install the Remote Desktop or Citrix client DLL.

## 1. Installer options

### 1.1 `/EXTMODE`: browser extensions

`/EXTMODE=<list>` chooses which browser extensions are registered on the remote machine, and how.

| Value | Chrome | Edge |
|---|---|---|
| `user` | User mode | User mode |
| `policy` | Policy mode | Policy mode |
| `policyoffline` | Policy offline | Policy offline |
| `none` | No extension | No extension |
| `chrome-user` / `chrome-policy` / `chrome-policyoffline` | The chosen mode | — |
| `edge-user` / `edge-policy` / `edge-policyoffline` | — | The chosen mode |

- Separate values with a comma, without spaces. For example: `/EXTMODE=chrome-policy,edge-user`.
- If a browser is given several modes, `policyoffline` wins over `policy`, and `policy` wins over `user`.
- Without `/EXTMODE`, the **Chrome** and **Edge** components selected in the wizard (or with `/COMPONENTS`) are registered in **user** mode.
- Write `policyoffline` **without a hyphen**. The Studio installer accepts `policy-offline`, but the Remote Runtime installer does not. A value it does not recognize registers **no** extension for that browser.

| Mode | Meaning |
|---|---|
| `user` | Registered for every Windows user at their first sign-in (Active Setup), and for the user running setup now. |
| `policy` | A browser policy that installs the extension from the store, once, for the whole machine. |
| `policyoffline` | A browser policy that installs the package staged in `C:\ProgramData`, with no store. Only for a machine that is domain-joined or enrolled in MDM. On any other machine the registration fails and Setup shows an error. |
| `none` | No browser extension. |

For what each mode writes, see [Browser Group Policies](./browser-group-policies.md).

### 1.2 Standard Inno Setup options

| Option | Effect |
|---|---|
| `/COMPONENTS="server,chrome,edge"` | Chooses the components. `server` is always included. `/EXTMODE` overrides it for the extensions. |
| `/SILENT`, `/VERYSILENT` | No wizard. The runtime still starts in the session of the user who installs it, unless Setup runs as **SYSTEM**. The "Citrix VDA detected" allow-list message is not shown. |
| `/SUPPRESSMSGBOXES` | Also hides the "extensions could not be registered" error. The error is still written to the log. |
| `/LOG="<file>"` | Writes the setup log to this file. Logging is already on by default. |
| `/DIR="<path>"` | Install folder. Default: `C:\Program Files\FPT Software\akaBot Remote Runtime`. |
| `/NOCLOSEAPPLICATIONS` | Does not close applications that hold files being replaced. By default, Setup closes them. |

### 1.3 Example

In an elevated PowerShell window:

```powershell
.\akaBotRemoteRuntime-3.3.0.0-x64.exe /VERYSILENT /SUPPRESSMSGBOXES /EXTMODE=chrome-policy,edge-user /LOG="C:\Temp\rr-setup.log"
```

This installs Remote Runtime without a wizard, registers the Chrome extension in policy mode and the Edge extension in user mode, and writes the log to `C:\Temp\rr-setup.log`.

> **Citrix VDA:** a silent install does not show the allow-list message. Add this entry to the Citrix policy **Virtual channel allow list**, then restart the machine:
> `AKABOT,C:\Program Files\FPT Software\akaBot Remote Runtime\AkaBot.RemoteRuntime.Server.exe` (use the install folder if you changed it with `/DIR`).

## 2. Setup tool (after installation)

The setup tool is `{app}\Setup\AkaBot.RemoteRuntime.Setup.exe`, where `{app}` is the install folder. The installer runs it for you. You can also run it by hand, for example to repair or check a registration.

| Command | Purpose |
|---|---|
| `runtime install\|validate [--exe <AkaBot.RemoteRuntime.Server.exe>]` | Creates or checks the sign-in task and the Citrix VDA allow-list entry. Needs administrator rights. |
| `runtime uninstall [--exe <AkaBot.RemoteRuntime.Server.exe>]` | Removes the sign-in task. |
| `extension install\|uninstall --type <chrome\|edge\|java\|all>[,...] --scope <user\|machine\|policy\|policyoffline> [--app <dir>]` | Registers or removes extensions. `java` needs no `--scope`. |
| `extension uninstall --type recorded` | Removes what the installer registered with `/EXTMODE`. The uninstaller runs this command. |
| `extension validate [--type <chrome\|edge>[,...]] [--scope <...>]` | Checks the registration and prints the reason for any failure. Without `--scope`, it checks the scope it finds. |

| `--scope` | Meaning |
|---|---|
| `user` | This Windows user (HKCU). No administrator rights. |
| `machine` | All users (HKLM external extension). Administrator. |
| `policy` | Browser policy, extension from the store. Administrator. |
| `policyoffline` | Browser policy, package staged in `C:\ProgramData`. Domain-joined or MDM-enrolled machines only. Administrator. |

Without `--exe` or `--app`, the tool uses the Remote Runtime installed in the folder above it.

Example: check the Chrome extension registered in policy mode.

```bat
"C:\Program Files\FPT Software\akaBot Remote Runtime\Setup\AkaBot.RemoteRuntime.Setup.exe" extension validate --type chrome --scope policy
```

### 2.1 Exit codes

| Code | Meaning |
|---|---|
| `0` | Success. |
| `1` | Failure. The reason is written to standard error. |
| `2` | Invalid command line. |
| `3` | `policyoffline` on a machine that is not domain-joined or enrolled in MDM. Use `policy` or `user` instead. |
