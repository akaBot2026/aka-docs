---
id: package-folders
title: "Configure Package Folders"
sidebar_label: "Package Folders"
sidebar_position: 10
description: "Share one package folder between the users of a machine, and use read-only fallback folders so akaBot Studio and Agent do not download packages from the internet."
displayed_sidebar: studioSidebar
---
# Configure Package Folders

akaBot Studio and Agent install every activity package a workflow needs before they open or run it. This page explains where those packages go and how an administrator can change that:

| Setting | Use it when | How |
|---|---|---|
| [Shared package folder](#shared-package-folder) | Several users work on the same machine (Windows Server, SBC, high-density Agents) and disk space is limited | Setup `/PACKAGESDIR`, or `packagesInstallationFolder` in `PackageManager.config` |
| [Fallback package folders](#fallback-package-folders) | The machine has no internet access, or you want every machine to take packages from one prepared folder | Setup `/FALLBACKDIRS`, `fallbackPackageFolders` in `PackageManager.config`, or the `AKABOT_FALLBACK_PACKAGES` environment variable |

Both settings apply to the whole machine: Studio, Agent and every user. Workflow (process) packages and projects are not affected; they stay in each user's profile.

## Default folders

| Folder | Content |
|---|---|
| `%LOCALAPPDATA%\akaBot\Packages\Installed` | Packages installed for the user. Studio and Executor load the activities from here. |
| `%USERPROFILE%\.nuget\packages` | Download cache of packages that came from online sources |
| `C:\ProgramData\akaBot\Packages` | Packages shipped with the akaBot installer (the **LocalMachine** package source) |

When a package is needed, akaBot looks for it in this order and installs it from the first source that has it:

1. **LocalMachine**: the packages shipped with the installer
2. **Fallback folders**, if configured
3. The other package sources, for example akaBot GitLab and NuGet.org
4. Packages already installed

## Shared package folder

By default every user installs their own copy of each package. On a machine with many users, a shared folder keeps only one copy:

| Folder | Content |
|---|---|
| `<folder>\Installed` | Installed packages, shared by all users |
| `<folder>\NuGetCache` | Download cache, shared by all users |
| `<folder>\Feed` | Packages shipped with the installer, when the folder was set during setup |

akaBot gives the local **Users** group *Modify* permission on the folders it creates. When two users need the same package at the same time, one installs it and the other waits until it is ready.

### Set it during installation

Run the installer from an elevated command prompt:

```bat
akaBotPlatform-x64.exe /VERYSILENT /PACKAGESDIR="C:\akaBot\Packages"
```

- Upgrades keep the folder; you do not need to pass `/PACKAGESDIR` again.
- `/PACKAGESDIR=` (empty) switches the machine back to per-user folders.
- Uninstalling akaBot removes the setting. The `Installed` folder is kept, except the akaBot activity packages.

### Set it after installation

Add a `config` section to `C:\ProgramData\akaBot\PackageManager.config`, inside `<configuration>`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <config>
    <add key="packagesInstallationFolder" value="C:\akaBot\Packages" />
  </config>
  <packageSources>
    <add key="LocalMachine" value="%programdata%\akaBot\Packages" />
  </packageSources>
</configuration>
```

:::caution
Keep the file valid XML: `<config>` must be inside `<configuration>`. If the file cannot be read, Studio becomes slow to open projects and the setting is ignored.
:::

If both are set, the folder set by setup (`/PACKAGESDIR`) wins over `packagesInstallationFolder`.

### Requirements and limits

- **Local folders only**, for example `C:\akaBot\Packages`. Network paths (`\\server\share`) and mapped drives (`Z:\`) are not supported for the shared folder, because two machines must never install into the same folder.
- After a change, restart Studio. Robots use the new setting from the next job, because every job starts a new Executor.
- The first time each package is needed after a change, akaBot installs it again into the new folder. Projects open more slowly once, then as fast as before.
- Before upgrading or uninstalling akaBot on a machine with several users, ask them to sign out. The installer cleans the akaBot activity packages of the shared folder.

## Fallback package folders

A fallback folder is a **read-only** folder that akaBot searches for packages **before** the online sources. When a package is found there, akaBot installs it from that folder and does not download it. Use fallback folders to:

- run Studio and Agent on machines without internet access, or behind a proxy that blocks the package feeds
- prepare one set of packages and use it on every machine, instead of each machine downloading the same packages

akaBot never writes to a fallback folder. Packages found there are still installed into the `Installed` folder (per user, or the shared package folder).

### Supported folder layouts

A fallback folder can contain packages in any of these layouts, so you can copy the folders of a machine that already has the packages:

| Layout | Example | Copy it from |
|---|---|---|
| Hierarchical (recommended) | `rca.activities.excel\3.4.0.2\rca.activities.excel.3.4.0.2.nupkg` | `%USERPROFILE%\.nuget\packages`, or `NuGetCache` of a shared package folder |
| Flat list of `.nupkg` files | `RCA.Activities.Excel.3.4.0.2.nupkg` | `C:\ProgramData\akaBot\Packages`, or `Feed` of a shared package folder |
| One folder per package | `RCA.Activities.Excel.3.4.0.2\RCA.Activities.Excel.3.4.0.2.nupkg` | `%LOCALAPPDATA%\akaBot\Packages\Installed` |

Every package needs its `.nupkg` file. A folder that contains only the extracted files of a package is not found.

For a folder on a network share, use the hierarchical layout: akaBot then goes straight to the package instead of listing every file of the share.

### Set them during installation

Separate the folders with `;`:

```bat
akaBotPlatform-x64.exe /VERYSILENT /FALLBACKDIRS="\\fileserver\akaBot\Packages;D:\akaBotPackages"
```

- Upgrades keep the folders; you do not need to pass `/FALLBACKDIRS` again.
- `/FALLBACKDIRS=` (empty) removes the folders set by setup.
- Uninstalling akaBot removes the folders set by setup. Folders you added by hand in `PackageManager.config` are kept.

### Set them after installation

Use one of the following. Both apply to the whole machine.

**Option 1: `PackageManager.config`**

Add a `fallbackPackageFolders` section to `C:\ProgramData\akaBot\PackageManager.config`, inside `<configuration>`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <fallbackPackageFolders>
    <add key="Share" value="\\fileserver\akaBot\Packages" />
    <add key="Copy" value="D:\akaBotPackages" />
  </fallbackPackageFolders>
  <packageSources>
    <add key="LocalMachine" value="%programdata%\akaBot\Packages" />
  </packageSources>
</configuration>
```

- Folders are searched in the order they are listed.
- A relative path is relative to `C:\ProgramData\akaBot`.
- Entries whose key starts with `Setup ` are managed by the installer. Use other keys for the entries you add by hand.

**Option 2: environment variable**

Create the **system** environment variable `AKABOT_FALLBACK_PACKAGES` with the folders separated by `;`, for example `\\fileserver\akaBot\Packages;D:\akaBotPackages`. Paths must be absolute.

When `AKABOT_FALLBACK_PACKAGES` is set, the `fallbackPackageFolders` section is ignored.

:::note
akaBot ignores the NuGet variable `NUGET_FALLBACK_PACKAGES`. That variable also changes how Visual Studio and `dotnet` restore packages, so akaBot uses its own variable.
:::

### Check the configuration

- In Studio, open **Package Manager > Settings**. The fallback folders in use are listed, read-only, under **Default package sources**.
- When a package is installed, the Studio or Executor log shows where it came from, for example:

  `Installed RCA.Activities.Excel 3.4.0.2 from 'Fallback 1' (\\fileserver\akaBot\Packages)`

### Requirements and limits

- **Network shares** (`\\server\share`) are supported. Mapped drives (`Z:\`) are not: the Agent service and other users do not see your drive mappings.
- **Permissions:** the Windows accounts that run Studio and robots need **read** access to the folder. Robots run as the Windows user configured for the Agent, not as the computer account. Local Windows accounts cannot authenticate to a domain share: use domain accounts, or give read access to a group those accounts belong to.
- A folder that does not exist or cannot be reached when Studio or the Agent starts is skipped, with a warning in the log.
- Fallback folders are used for activity packages and their dependencies only. Workflow (process) packages are still downloaded from akaBot Center.
- After a change, restart Studio. Robots use a changed `PackageManager.config` from the next job, because every job starts a new Executor. After changing `AKABOT_FALLBACK_PACKAGES`, also restart the **akaBotSvc** service (or the machine) so that robots see the new value.

## Example: machines without internet access

1. On a computer with internet access, install akaBot, then open (or run) each workflow once so that all its packages are installed.
2. Copy `%USERPROFILE%\.nuget\packages` and `C:\ProgramData\akaBot\Packages` of that computer to a share, for example `\\fileserver\akaBot\Packages` and `\\fileserver\akaBot\Feed`.
3. Install akaBot on the other machines with:

   ```bat
   akaBotPlatform-x64.exe /VERYSILENT /FALLBACKDIRS="\\fileserver\akaBot\Packages;\\fileserver\akaBot\Feed"
   ```

4. Give the users who run Studio and robots read access to the share.
5. Open a workflow on one of the machines. The log shows `from 'Fallback 1'` or `from 'Fallback 2'` for each installed package, and nothing is downloaded.

When you add packages or new versions, copy them to the share again; the machines use them the next time they need them.
