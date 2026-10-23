---
id: browser-group-policies
title: "ブラウザーのグループ ポリシー"
sidebar_label: "ブラウザーのグループ ポリシー"
sidebar_position: 4.5
description: "akaBot Web 拡張機能 (Chrome、Edge、Firefox) に影響するグループ ポリシー設定と、ポリシーによる拡張機能の展開方法。"
displayed_sidebar: studioSidebar
---

# ブラウザーのグループ ポリシー

Google Chrome、Microsoft Edge、Mozilla Firefox をグループ ポリシー (GPO)、Intune などの MDM ツールで管理している組織では、気付かないうちに akaBot Web 拡張機能がブロックされることがあります。このページでは、拡張機能に影響するポリシー、akaBot が必要とする値、および多数のコンピューターにポリシーで拡張機能を展開する方法を説明します。

コンピューターで有効になっているポリシーは、次のページで確認できます。

- Chrome: `chrome://policy`
- Edge: `edge://policy`
- Firefox: `about:policies`

次の例は、拡張機能を **Policy** モードでインストールした後の `chrome://policy` です (セクション 3)。

![Policy モードで akaBot 拡張機能をインストールした後の chrome://policy](/static/img/chrome-policy-akabot-policy-mode.png)

このページのポリシーはすべて `HKEY_LOCAL_MACHINE` に保存されるコンピューター ポリシーです。変更には管理者権限が必要で、ブラウザーは **すべての** ブラウザー プロセスが終了した後にのみポリシーを適用します ([バックグラウンド プロセス](#7-background-processes) を参照)。

## 1. akaBot 拡張機能の識別子 {#1-akabot-extension-identifiers}

以下のポリシーを設定するときは、次の値を使用します。

| ブラウザー | 拡張機能 ID | ネイティブ メッセージング ホスト | ポリシーのレジストリ キー |
|---|---|---|---|
| Google Chrome | `pflniglmkbjhmlcpcgpnhnpicdfalkjb` | `com.akarpa.chromenativemsg` | `HKLM\SOFTWARE\Policies\Google\Chrome` |
| Microsoft Edge | `idcmnficjddehpcjmkfcmomijikkgdgh` | `com.akarpa.edgenativemsg` | `HKLM\SOFTWARE\Policies\Microsoft\Edge` |
| Mozilla Firefox | `support@akabot.com` | `com.akarpa.firefoxnativemsg` | `HKLM\SOFTWARE\Policies\Mozilla\Firefox` |

拡張機能は、ネイティブ メッセージング ホスト (`Aka.RPA.NativeMessagingHost`) を介して akaBot Studio および akaBot Agent と通信します。ブラウザーがネイティブ ホストをブロックすると、拡張機能はインストールされていても、**Indicate**、レコーディング、ブラウザー アクティビティはブラウザーにアクセスできません。

## 2. インストール モード {#2-installation-modes}

akaBot Studio は、拡張機能を 3 つのモードのいずれかでインストールします (**オプション > 拡張機能**)。モードによって、akaBot が書き込むポリシーが決まります。

| モード | ブラウザー | 対象 | 拡張機能の取得元 | 管理者権限 |
|---|---|---|---|---|
| **User** | Chrome、Edge、Firefox | 現在の Windows ユーザー | akaBot Studio に同梱のパッケージ | 不要 |
| **Policy** | Chrome、Edge、Firefox | コンピューターのすべてのユーザー | Chrome ウェブストア / Edge アドオン (Chrome、Edge)、akaBot Studio に同梱の `.xpi` (Firefox) | 必要 |
| **ポリシー (オフライン)** | Chrome、Edge | コンピューターのすべてのユーザー | akaBot Studio に同梱の `.crx` を `C:\ProgramData\akaBot\Extensions` にコピー (ストアへのアクセス不要) | 必要 |

組織のポリシーにより User モードのインストールがブロックされる場合は、**Policy** または **ポリシー (オフライン)** を使用します (セクション 4 を参照)。ロボット コンピューターから Chrome ウェブストアや Edge アドオンにアクセスできない場合は、**ポリシー (オフライン)** を使用します。

> **注:** Windows 上の Chrome と Edge は、**管理対象** のコンピューター (Active Directory ドメインに参加しているか、Intune などのデバイス管理 (MDM) に登録されているコンピューター) でのみ、ストア以外から強制インストールされた拡張機能を読み込みます。Chrome は Chrome Browser Cloud Management に登録されたコンピューターも受け入れます。それ以外のコンピューターでは、akaBot はポリシー (オフライン) モードでのインストールを拒否します。代わりに **Policy** を使用してください。

手順については、[Akabot Web 拡張機能をインストールする方法](./how-to-install-akabot-web-extension.md) を参照してください。

## 3. akaBot が書き込むポリシー (Chrome と Edge) {#3-policies-akabot-writes-chrome-and-edge}

**Policy** または **ポリシー (オフライン)** モードでインストールすると、akaBot はブラウザーのポリシー キー (セクション 1) の下に次の値を書き込みます。各リストは、値の名前が `1`、`2`、`3`… のキーです。akaBot は自身のエントリを再利用し、他の製品のエントリは削除しません。組織がこれらのポリシーを GPO で展開する場合は、GPO にも同じ値を含める必要があります。含めないと、次回の更新時に GPO によって上書きされます。

| ポリシー (レジストリ キー) | Chrome の値 | 目的 |
|---|---|---|
| `ExtensionInstallForcelist` | **Policy:** `pflniglmkbjhmlcpcgpnhnpicdfalkjb;https://clients2.google.com/service/update2/crx`<br/>**ポリシー (オフライン):** `pflniglmkbjhmlcpcgpnhnpicdfalkjb;file:///C:/ProgramData/akaBot/Extensions/chrome/update.xml` | すべてのユーザーに拡張機能を強制インストールします。ユーザーはオフにしたり削除したりできません。 |
| `ExtensionInstallAllowlist` | `pflniglmkbjhmlcpcgpnhnpicdfalkjb` | 拡張機能を `ExtensionInstallBlocklist` の対象外にします。 |
| `NativeMessagingAllowlist` | `com.akarpa.chromenativemsg` | akaBot のネイティブ ホストを `NativeMessagingBlocklist` の対象外にします。 |
| `DeveloperToolsAvailabilityAllowlist` | `chrome-extension://pflniglmkbjhmlcpcgpnhnpicdfalkjb` | akaBot 拡張機能に対してのみ開発者ツール API を許可します。 |
| `DeveloperToolsAvailabilityBlocklist` | `https://akabot-devtools-blocklist-placeholder.invalid/` | プレースホルダー エントリです。Chrome と Edge は、ブロックリストも設定されている場合にのみ許可リストを適用します。 |

Edge の場合は、Edge の拡張機能 ID `idcmnficjddehpcjmkfcmomijikkgdgh`、ネイティブ ホスト `com.akarpa.edgenativemsg`、および次の値を使用します。

- **Policy:** `idcmnficjddehpcjmkfcmomijikkgdgh;https://edge.microsoft.com/extensionwebstorebase/v1/crx`
- **ポリシー (オフライン):** `idcmnficjddehpcjmkfcmomijikkgdgh;file:///C:/ProgramData/akaBot/Extensions/msedge/update.xml`

また、akaBot はネイティブ ホストをコンピューター全体に登録します (ポリシーではありません)。

| レジストリ キー | 既定値 |
|---|---|
| `HKLM\SOFTWARE\Google\Chrome\NativeMessagingHosts\com.akarpa.chromenativemsg` | `C:\Program Files\FPT Software\akaBot Platform\akaBot\NativeHost\com.akarpa.chromenativemsg.json` |
| `HKLM\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.akarpa.edgenativemsg` | `C:\Program Files\FPT Software\akaBot Platform\akaBot\NativeHost\com.akarpa.edgenativemsg.json` |

上記のパスは既定のインストール フォルダーの場合です。キーは 64 ビットと 32 ビットの両方のレジストリ ビューに書き込まれます。

### 3.1 ポリシー (オフライン) のファイル {#31-policy-offline-files}

**ポリシー (オフライン)** モードでは、akaBot は拡張機能パッケージをコンピューターにコピーし、`ExtensionInstallForcelist` が参照する更新マニフェストを書き込みます。

```text
C:\ProgramData\akaBot\Extensions\
    chrome\
        akabot-<version>.crx
        update.xml
    msedge\
        akabot-<version>.crx
        update.xml
```

`update.xml` の内容 (Chrome の例):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gupdate xmlns="http://www.google.com/update2/response" protocol="2.0">
  <app appid="pflniglmkbjhmlcpcgpnhnpicdfalkjb">
    <updatecheck codebase="file:///C:/ProgramData/akaBot/Extensions/chrome/akabot-3.0.3.crx" version="3.0.3" />
  </app>
</gupdate>
```

- `Extensions` フォルダーを変更できるのは **Administrators** と **SYSTEM** のみで、ユーザーは読み取りのみ可能です。これらのフォルダーが既に存在し、管理者が作成したものでない場合、akaBot はそのフォルダーを使用しません。フォルダーを削除してから再度インストールしてください。
- パッケージは akaBot 拡張機能 (同じ拡張機能 ID) である必要があります。akaBot はポリシーを書き込む前にこれを確認します。
- これらのファイルを削除しないでください。パッケージがない場合、ブラウザーは次回の起動時に拡張機能を削除します。

## 4. 拡張機能をブロックする可能性があるポリシー (Chrome と Edge) {#4-policies-that-can-block-the-extension-chrome-and-edge}

コンピューターに次のポリシーのいずれかが設定されていると、拡張機能がインストールされない、または動作しない場合があります。ほとんどの場合、**Policy** または **ポリシー (オフライン)** モードでインストールすると、許可リストのエントリが自動的に書き込まれるため解決します。組織が GPO でポリシーを設定している場合は、IT 管理者に値を GPO に追加するよう依頼してください。

### 4.1 ExtensionInstallForcelist

ブラウザーがすべてのユーザーにインストールする拡張機能の一覧です。akaBot は Policy モードで自身のエントリを追加します (セクション 3)。GPO がこの一覧を管理していて akaBot のエントリが含まれていない場合、次回のグループ ポリシー更新時に GPO によって削除されます。GPO に akaBot のエントリを追加してください。

- ストアにアクセスできるコンピューター: `pflniglmkbjhmlcpcgpnhnpicdfalkjb;https://clients2.google.com/service/update2/crx`
- ストアにアクセスできない管理対象コンピューター: `pflniglmkbjhmlcpcgpnhnpicdfalkjb;file:///C:/ProgramData/akaBot/Extensions/chrome/update.xml` (セクション 3.1 のファイルを作成するため、各コンピューターで一度 **ポリシー (オフライン)** モードでインストールします)。

> **注:** 拡張機能が GPO で強制インストールされているものの、セクション 3 の他の値が不足している場合、akaBot Studio の **オプション > 拡張機能** のブラウザーの下に「*この拡張機能は組織によって追加されていますが、セットアップが完了していないため Indicate が動作しません。*」と表示されます。**[インストール]** をクリックしてセットアップを完了してください。

![オプション > 拡張機能 の未完了ポリシー セットアップの警告](/static/img/studio-extension-policy-incomplete.png)

### 4.2 NativeMessagingBlocklist

ネイティブ メッセージング ホストをブロックします。値が `*` の場合、`NativeMessagingAllowlist` にないすべてのホスト (akaBot のネイティブ ホストを含む) がブロックされます。

**対処:** akaBot のネイティブ ホストを `NativeMessagingAllowlist` に追加します (セクション 4.3)。

### 4.3 NativeMessagingAllowlist

ネイティブ メッセージング ホストを `NativeMessagingBlocklist` の対象外にします。

**対処:** `com.akarpa.chromenativemsg` (Chrome) または `com.akarpa.edgenativemsg` (Edge) を追加します。

### 4.4 NativeMessagingUserLevelHosts

`0` (false) に設定されている場合、ブラウザーは現在のユーザーのみに登録されたネイティブ ホスト (`HKCU`) を無視します。その場合、**User** モードでインストールした拡張機能は akaBot にアクセスできません。

**対処:** ネイティブ ホストをコンピューター (`HKLM`) に登録する **Policy** または **ポリシー (オフライン)** モードでインストールするか、このポリシーを `1` に設定します。

### 4.5 ExtensionInstallBlocklist

拡張機能のインストールをブロックします。値が `*` の場合、`ExtensionInstallAllowlist` にないすべての拡張機能がブロックされます。

**対処:** **Policy** または **ポリシー (オフライン)** モードでインストールするか、`pflniglmkbjhmlcpcgpnhnpicdfalkjb` (Chrome) / `idcmnficjddehpcjmkfcmomijikkgdgh` (Edge) を `ExtensionInstallAllowlist` に追加します。

### 4.6 BlockExternalExtensions

`1` (true) に設定されている場合、拡張機能はポリシーでのみインストールでき、**User** モードは動作しません。

**対処:** **Policy** または **ポリシー (オフライン)** モードでインストールするか、このポリシーを `0` に設定します。

### 4.7 ExtensionAllowedTypes

設定されている場合、一覧にある種類の拡張機能のみインストールできます。

**対処:** 一覧に `extension` を追加します。

### 4.8 ExtensionSettings

すべての拡張機能をブロックする (`"*": { "installation_mode": "blocked" }`) か、akaBot の拡張機能 ID に対するルールを設定できます。

**対処:** **Policy** または **ポリシー (オフライン)** モードでインストールするか、akaBot の拡張機能 ID を `ExtensionInstallAllowlist` に追加します。`ExtensionSettings` に akaBot の拡張機能 ID のエントリがある場合、その `installation_mode` を `blocked` または `removed` にしないでください。

### 4.9 DeveloperToolsAvailability、DeveloperToolsAvailabilityAllowlist、DeveloperToolsAvailabilityBlocklist

akaBot 拡張機能は、ブラウザーの開発者ツール API (`chrome.debugger`) を使用します。`DeveloperToolsAvailability` が `2` (開発者ツールをブロック) の場合、拡張機能は動作しません。

**対処 (推奨):** 他のすべてに対しては開発者ツールのブロックを維持し、akaBot 拡張機能に対してのみ許可します。**両方** のリストを設定します。

| ポリシー | Chrome | Edge |
|---|---|---|
| `DeveloperToolsAvailabilityAllowlist` | `chrome-extension://pflniglmkbjhmlcpcgpnhnpicdfalkjb` | `chrome-extension://idcmnficjddehpcjmkfcmomijikkgdgh` |
| `DeveloperToolsAvailabilityBlocklist` | `https://akabot-devtools-blocklist-placeholder.invalid/` | `https://akabot-devtools-blocklist-placeholder.invalid/` |

**Policy** または **ポリシー (オフライン)** モードでインストールすると、これらの値が書き込まれます。拡張機能が強制インストールされている場合、`DeveloperToolsAvailability` が設定されていなくても、これらの値が必要です。

または、`DeveloperToolsAvailability` を `1` (許可) に設定します。この場合、すべてのサイトと拡張機能に開発者ツールが許可されます。

> **注:** GPO によってこれらのリストがリセットされると、akaBot の修正は維持されません。その場合、ブラウザー環境チェックで「*開発者ツール ポリシーがまだありません。グループ ポリシーで上書きされた可能性があります。*」と表示されます。2 つの値を GPO に追加してください。

## 5. Firefox のポリシー {#5-firefox-policies}

Firefox は **User** と **Policy** モードをサポートします。**Policy** モードでは、akaBot Studio に同梱の `.xpi` ファイルから拡張機能がインストールされるため、コンピューターから Firefox アドオン サイトにアクセスする必要はありません。Firefox には別のポリシー (オフライン) モードはありません。

akaBot は `HKLM\SOFTWARE\Policies\Mozilla\Firefox` の下に次の値を書き込みます。

| ポリシー (レジストリ キー) | 値 | 目的 |
|---|---|---|
| `Extensions\Install` | `file:///C:/Program%20Files/FPT%20Software/akaBot%20Platform/akaBot/MV3/akaBot-Firefox-<version>.xpi` | すべてのユーザーに拡張機能をインストールします。 |
| `Extensions\Locked` | `support@akabot.com` | ユーザーが拡張機能をオフにしたり削除したりできないようにします。 |
| `NativeMessagingAllowlist` | `com.akarpa.firefoxnativemsg` | akaBot のネイティブ ホストを許可します。 |

また、ネイティブ ホストを `HKLM\SOFTWARE\Mozilla\NativeMessagingHosts\com.akarpa.firefoxnativemsg` に登録します。

組織が `ExtensionSettings` ポリシーまたは `policies.json` ファイルで拡張機能をブロックしている場合は、`support@akabot.com` を許可してください。

## 6. 多数のコンピューターに拡張機能を展開する {#6-deploy-the-extension-to-many-machines}

ポリシーで拡張機能を展開する方法は 2 つあります。

- **akaBot Commander (推奨)。** 各コンピューターで、akaBot のインストール フォルダーにある `Commander.exe` を管理者として実行します (ソフトウェア展開ツールなどから)。セクション 3 (または 5) のすべての値を書き込み、ネイティブ ホストを登録し、ポリシー (オフライン) の場合はパッケージを配置します。

  ```bat
  cd "C:\Program Files\FPT Software\akaBot Platform"
  Commander.exe install-chrome --scope:policyoffline --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --version:<version> --silent:true ^
    --file:"akaBot\MV3\akaBot-Chrome-<version>.crx" ^
    --nativeHostId:com.akarpa.chromenativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.chromenativemsg.json"
  ```

  - `--scope`: `user`、`policy`、`policyoffline` (Chrome と Edge)、`user` または `policy` (Firefox)。
  - Edge の場合は Edge の値で `install-edge` を、Firefox の場合は `.xpi` ファイルで `install-firefox` を使用します。
  - `--silent:true` を指定すると、実行中のブラウザー プロセスを確認なしで終了します。
  - 結果は `Commander.exe status-chrome --id:<拡張機能 ID> --nativeHostId:<ネイティブ ホスト>` で確認し、`remove-chrome --scope:<モード> --id:<拡張機能 ID> --nativeHostId:<ネイティブ ホスト>` で削除します。
  - ポリシー (オフライン) モードでは、終了コード `14` はコンピューターが管理対象でないこと (セクション 2)、`15` はパッケージを `C:\ProgramData\akaBot\Extensions` にコピーできなかったことを示します。

  すべてのオプションと終了コードについては、[akaBot Commander (コマンド ライン)](./akabot-commander.md) を参照してください。

- **独自の GPO。** セクション 3 の値を GPO (Chrome と Edge の管理用テンプレート) に追加します。ネイティブ ホストもコンピューターに登録されている必要があります (セクション 3)。これは akaBot Studio または Commander から一度 Policy モードでインストールすると行われます。**ポリシー (オフライン)** の場合は、セクション 3.1 のファイルも各コンピューターに必要です。

akaBot Platform のセットアップでも、`/EXTMODE` パラメーター (例: `/EXTMODE=policy`、`/EXTMODE=edge-policy,chrome-policy`) で User または Policy モードで拡張機能をインストールできます。ポリシー (オフライン) は akaBot Studio または Commander から設定します。

## 7. バックグラウンド プロセス {#7-background-processes}

Chrome と Edge は起動時にのみポリシーを読み込みます。ブラウザーがバックグラウンドで実行を続けている場合 (Edge の **スタートアップ ブースト**、または **… を閉じた後もバックグラウンド アプリの実行を続行する**)、ウィンドウを閉じても変更したポリシーは適用されません。すべてのブラウザー プロセスを終了するか (タスク マネージャー、またはブラウザー環境チェックの **[すべてのプロセスを終了]** ボタンを使用)、これらの設定をオフにしてください。対応するポリシーは `StartupBoostEnabled` (Edge) と `BackgroundModeEnabled` です。

## 8. ブラウザー環境チェック {#8-browser-environment-check}

**Indicate** が Chrome または Edge にアクセスできない場合、akaBot Studio はブラウザー環境チェックを開きます (Common アクティビティ パッケージ v4.9.0.1 以降)。インストール モード (User、Policy、ポリシー (オフライン)) を検出し、このページに記載されている拡張機能をブロックするポリシーを一覧表示し、可能な場合は修正します (**[今すぐ修正 (管理者権限が必要)]**)。値が組織の GPO によるもので、コンピューター上で修正できない場合は、IT 管理者に渡すレジストリ キーを表示します。無人ロボットは結果をログに書き込むだけです。
