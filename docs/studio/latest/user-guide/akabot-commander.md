---
id: akabot-commander
title: akaBot Commander (Command Line)
sidebar_label: akaBot Commander
sidebar_position: 4.6
description: Install, check and remove the akaBot Web Extension, and run other machine setup tasks, from the command line with Commander.exe.
displayed_sidebar: studioSidebar
---

# akaBot Commander (Command Line)

**Commander.exe** is the command-line tool that akaBot Studio uses behind **Options > Extensions**. IT administrators can run it directly to:

- install, check and remove the akaBot Web Extension for Chrome, Edge and Firefox in **User**, **Policy** or **Policy (Offline)** mode, for example from a deployment script on many robot machines;
- turn the Java Access Bridge on or off;
- manage Windows child sessions and start a program.

For what each installation mode does and which policies it writes, see [Browser Group Policies](./browser-group-policies.md).

## 1. Before you start

### 1.1 Location

Commander.exe is in the akaBot Studio installation folder. With the default installation:

| File | Default location |
|---|---|
| Commander | `C:\Program Files\FPT Software\akaBot Platform\Commander.exe` |
| Extension packages | `C:\Program Files\FPT Software\akaBot Platform\akaBot\MV3\` |
| Native messaging host files | `C:\Program Files\FPT Software\akaBot Platform\akaBot\NativeHost\` |

The extension packages are named `akaBot-Chrome-<version>.crx`, `akaBot-Edge-<version>.crx` and `akaBot-Firefox-<version>.xpi`. To see which versions are shipped with your installation, run:

```bat
dir /b "C:\Program Files\FPT Software\akaBot Platform\akaBot\MV3"
```

### 1.2 Administrator rights

| Command | Run as administrator |
|---|---|
| `install-…` / `remove-…` with `--scope:user` | No. Run it as the Windows user who uses the browser — it changes that user's settings only. |
| `install-…` / `remove-…` with `--scope:policy` or `--scope:policyoffline` | **Yes.** Open **Command Prompt** with **Run as administrator**. |
| `status-…` | No |
| `install-java` / `remove-java` | Yes, when Java is installed in `C:\Program Files` |
| `child-session --enable` / `--disable` | Yes |

### 1.3 Syntax

```text
Commander.exe <command> --<option>:<value> --<option>:<value> ...
```

- Options use a colon (`:`) between the name and the value. Option names are not case-sensitive.
- Put values that contain spaces in quotes: `--file:"C:\Program Files\...\akaBot-Chrome-3.0.3.crx"`.
- Boolean options need an explicit value: `--silent:true`, not `--silent`.
- Run `Commander.exe --help` to print the list of commands.
- Messages are written to the console. The result is the **exit code** (see [section 6](#6-exit-codes)). In Command Prompt, read it with `echo %ERRORLEVEL%`; in PowerShell, with `$LASTEXITCODE`.

> **Tip:** Run the examples in this guide from the Commander folder, so that the relative paths `akaBot\MV3\...` and `akaBot\NativeHost\...` work:
>
> ```bat
> cd /d "C:\Program Files\FPT Software\akaBot Platform"
> ```

## 2. Extension identifiers

Every extension command needs the extension ID and the native messaging host of the browser.

| Browser | `--id` | `--nativeHostId` | `--fileNativeHost` |
|---|---|---|---|
| Chrome | `pflniglmkbjhmlcpcgpnhnpicdfalkjb` | `com.akarpa.chromenativemsg` | `akaBot\NativeHost\com.akarpa.chromenativemsg.json` |
| Edge | `idcmnficjddehpcjmkfcmomijikkgdgh` | `com.akarpa.edgenativemsg` | `akaBot\NativeHost\com.akarpa.edgenativemsg.json` |
| Firefox | `support@akabot.com` | `com.akarpa.firefoxnativemsg` | `akaBot\NativeHost\com.akarpa.firefoxnativemsg.json` |

## 3. Install the extension

```text
Commander.exe install-chrome | install-edge | install-firefox
    --scope:<user|policy|policyoffline>
    --id:<extension id>
    --version:<version>
    --file:<path to .crx or .xpi>
    --nativeHostId:<native host id>
    --fileNativeHost:<path to native host .json>
    [--silent:<true|false>]
    [--noConfirm:<true|false>]
```

| Option | Required | Description |
|---|---|---|
| `--scope` | Yes | Installation mode: `user`, `policy` or `policyoffline` (Chrome and Edge). Firefox supports `user` and `policy`. |
| `--id` | Yes | Extension ID (section 2). |
| `--version` | Yes | Version of the package, for example `3.0.3`. Must match the package file. |
| `--file` | Yes | Extension package: `.crx` for Chrome and Edge, `.xpi` for Firefox. For `policyoffline`, the package must be the akaBot extension with the same `--id`. |
| `--nativeHostId` | Yes | Native messaging host (section 2). |
| `--fileNativeHost` | Yes | Native messaging host manifest (`.json`). |
| `--silent` | No | `true`: no dialog at all — running browser processes of the current user are closed without asking. Use it in deployment scripts. Default `false`: Commander asks to confirm the installation and asks before closing the browser. |
| `--noConfirm` | No | `true`: skip only the "install extension?" confirmation; closing the browser is still asked. Chrome and Edge only. |

> **Note:** The browser must be closed during installation. Save your work in the browser before you run an install command.

### 3.1 Example: User mode (current user, no administrator rights)

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-chrome --scope:user --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --version:3.0.3 --file:"akaBot\MV3\akaBot-Chrome-3.0.3.crx" --nativeHostId:com.akarpa.chromenativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.chromenativemsg.json"
```

After a User-mode install, open Chrome and click **Enable extension** in the notification (see [How to install akaBot Web Extension](./how-to-install-akabot-web-extension.md#32-enable-extension-in-chrome)).

### 3.2 Example: Policy mode (all users, from the store)

In an elevated Command Prompt:

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-edge --scope:policy --id:idcmnficjddehpcjmkfcmomijikkgdgh --version:3.0.3 --file:"akaBot\MV3\akaBot-Edge-3.0.3.crx" --nativeHostId:com.akarpa.edgenativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.edgenativemsg.json" --silent:true
```

Edge downloads the extension from Edge Add-ons the next time it starts, so the machine needs access to the store.

### 3.3 Example: Policy (Offline) mode (all users, no store access)

In an elevated Command Prompt, on a machine joined to a domain or enrolled in MDM:

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-chrome --scope:policyoffline --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --version:3.0.3 --file:"akaBot\MV3\akaBot-Chrome-3.0.3.crx" --nativeHostId:com.akarpa.chromenativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.chromenativemsg.json" --silent:true
```

Commander copies the package to `C:\ProgramData\akaBot\Extensions\chrome` and force-installs it from there. If the command ends with exit code `14`, the machine is not managed — use `--scope:policy` instead. Exit code `15` means the package could not be copied: delete `C:\ProgramData\akaBot\Extensions` and run the command again.

### 3.4 Example: Firefox in Policy mode

In an elevated Command Prompt:

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-firefox --scope:policy --id:support@akabot.com --version:2.0.1 --file:"akaBot\MV3\akaBot-Firefox-2.0.1.xpi" --nativeHostId:com.akarpa.firefoxnativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.firefoxnativemsg.json" --silent:true
```

> **Note:** Replace the versions in the examples with a version from your `akaBot\MV3` folder (section 1.1).

## 4. Check the status

```text
Commander.exe status-chrome | status-edge | status-firefox --id:<extension id> --nativeHostId:<native host id>
```

Example:

```bat
Commander.exe status-chrome --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --nativeHostId:com.akarpa.chromenativemsg
echo %ERRORLEVEL%
```

| Output | Exit code | Meaning |
|---|---|---|
| `Installed. Scope: User` | `0` | Installed for the current user. |
| `Installed. Scope: Policy` | `0` | Force-installed from the store, and all required policies are present. |
| `Installed. Scope: PolicyOffline` | `0` | Force-installed from `C:\ProgramData\akaBot\Extensions`, and all required policies and files are present. |
| `Not installed` | `6` | The extension is not installed. |
| `Not installed. Scope: Policy (incomplete: ...)` | `6` | The extension is force-installed (for example by your organization's GPO), but something it needs is missing, so Indicate does not work. The text after `incomplete:` lists what is missing. Run `install-…` with the same scope as administrator to fix it. |

For Chrome and Edge, the status is what Indicate sees: when the extension is force-installed by policy, the policy installation is reported even if a User-mode installation also exists.

## 5. Remove the extension

```text
Commander.exe remove-chrome | remove-edge | remove-firefox --scope:<user|policy|policyoffline> --id:<extension id> --nativeHostId:<native host id>
```

Use the same scope as the installation (see `status-…`). Policy scopes require an elevated Command Prompt.

```bat
Commander.exe remove-chrome --scope:policyoffline --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --nativeHostId:com.akarpa.chromenativemsg
```

- Policy scopes remove only the akaBot entries from the policy lists; entries of other products are kept. `policyoffline` also deletes the files in `C:\ProgramData\akaBot\Extensions\<browser>`.
- The browser removes a force-installed extension the next time it starts.
- `remove-firefox` asks to close Firefox if it is running.

## 6. Exit codes

| Code | Name | Meaning |
|---|---|---|
| `0` | Success | The command succeeded. For `status-…`: the extension is installed. |
| `1` | CancelledByUser | You clicked **No** or **Cancel** in a confirmation dialog. Nothing was changed. |
| `2` | UnexpectedError | The command failed; the reason is printed. Common causes: a policy scope run without administrator rights, a missing option, or a package file that does not exist. |
| `6` | ExtensionNotInstalled | `status-…`: the extension is not installed, or its policy setup is incomplete. |
| `10` | OperationNotSupported | Unknown command. |
| `14` | MachineNotManaged | `--scope:policyoffline` on a machine that is not joined to a domain or enrolled in MDM. Nothing was changed. Use `--scope:policy`. |
| `15` | StagingFailed | `--scope:policyoffline`: the package could not be copied to `C:\ProgramData\akaBot\Extensions`, or the package is not the akaBot extension for this `--id`, or `--version` is missing. |

`child-session` commands use their own codes (section 7.2).

## 7. Other commands

### 7.1 Java Access Bridge

Turns the Java Access Bridge on or off for every Java installation found (`JAVA_HOME` and the folders under `C:\Program Files\Java` and `C:\Program Files (x86)\Java`). akaBot needs it to automate Java applications.

```bat
Commander.exe install-java
Commander.exe remove-java
```

Restart the Java application after running the command.

### 7.2 Child sessions

Manages Windows child sessions, used to run automations in a separate session on the same machine.

| Command | Description | Exit code on failure |
|---|---|---|
| `Commander.exe child-session --is-enable` | Prints `True` or `False`. | `10` |
| `Commander.exe child-session --get-id` | Prints the child session ID of the current user. | `11` |
| `Commander.exe child-session --enable` | Turns child sessions on (administrator). | `12` |
| `Commander.exe child-session --disable` | Turns child sessions off (administrator). | `13` |
| `Commander.exe child-session --logoff:<id>` | Signs out the given child session of the current user. | `14` |

### 7.3 Start a program

```text
Commander.exe run-program --path:<path\to\app.exe> [--arguments:<Base64>] [--working-dir:<folder>]
```

Starts a program without waiting for it. `--arguments` is the command line of the program, encoded in Base64 (UTF-8). The working folder defaults to the folder of the program.

Example — open `C:\Temp\report.txt` in Notepad. First encode the arguments in PowerShell:

```powershell
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('"C:\Temp\report.txt"'))
# IkM6XFRlbXBccmVwb3J0LnR4dCI=
```

Then run:

```bat
Commander.exe run-program --path:"C:\Windows\System32\notepad.exe" --arguments:IkM6XFRlbXBccmVwb3J0LnR4dCI=
```
