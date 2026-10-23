---
id: akabot-commander
title: "akaBot Commander (コマンド ライン)"
sidebar_label: "akaBot Commander"
sidebar_position: 4.6
description: "Commander.exe を使用して、コマンド ラインから akaBot Web 拡張機能のインストール、確認、削除、およびその他のコンピューター設定を行います。"
displayed_sidebar: studioSidebar
---

# akaBot Commander (コマンド ライン)

**Commander.exe** は、akaBot Studio が **オプション > 拡張機能** の内部で使用しているコマンド ライン ツールです。IT 管理者は直接実行して、次の操作を行うことができます。

- Chrome、Edge、Firefox 用の akaBot Web 拡張機能を **User**、**Policy**、**ポリシー (オフライン)** モードでインストール、確認、削除する (多数のロボット コンピューターへの展開スクリプトなど)
- Java Access Bridge をオンまたはオフにする
- Windows の子セッションを管理し、プログラムを起動する

各インストール モードの動作と書き込まれるポリシーについては、[ブラウザーのグループ ポリシー](./browser-group-policies.md) を参照してください。

## 1. 始める前に {#1-before-you-start}

### 1.1 場所 {#11-location}

Commander.exe は akaBot Studio のインストール フォルダーにあります。既定のインストールの場合:

| ファイル | 既定の場所 |
|---|---|
| Commander | `C:\Program Files\FPT Software\akaBot Platform\Commander.exe` |
| 拡張機能パッケージ | `C:\Program Files\FPT Software\akaBot Platform\akaBot\MV3\` |
| ネイティブ メッセージング ホストのファイル | `C:\Program Files\FPT Software\akaBot Platform\akaBot\NativeHost\` |

拡張機能パッケージの名前は `akaBot-Chrome-<version>.crx`、`akaBot-Edge-<version>.crx`、`akaBot-Firefox-<version>.xpi` です。インストールに同梱されているバージョンを確認するには、次を実行します。

```bat
dir /b "C:\Program Files\FPT Software\akaBot Platform\akaBot\MV3"
```

### 1.2 管理者権限 {#12-administrator-rights}

| コマンド | 管理者として実行 |
|---|---|
| `--scope:user` を指定した `install-…` / `remove-…` | 不要。ブラウザーを使用する Windows ユーザーとして実行します。そのユーザーの設定のみ変更されます。 |
| `--scope:policy` または `--scope:policyoffline` を指定した `install-…` / `remove-…` | **必要。** **コマンド プロンプト** を **管理者として実行** で開きます。 |
| `status-…` | 不要 |
| `install-java` / `remove-java` | Java が `C:\Program Files` にインストールされている場合は必要 |
| `child-session --enable` / `--disable` | 必要 |

### 1.3 構文 {#13-syntax}

```text
Commander.exe <command> --<option>:<value> --<option>:<value> ...
```

- オプションの名前と値はコロン (`:`) で区切ります。オプション名の大文字と小文字は区別されません。
- スペースを含む値は引用符で囲みます: `--file:"C:\Program Files\...\akaBot-Chrome-3.0.3.crx"`。
- ブール型のオプションには値を明示する必要があります: `--silent` ではなく `--silent:true`。
- `Commander.exe --help` を実行すると、コマンドの一覧が表示されます。
- メッセージはコンソールに出力されます。結果は **終了コード** で返されます ([セクション 6](#6-exit-codes) を参照)。コマンド プロンプトでは `echo %ERRORLEVEL%`、PowerShell では `$LASTEXITCODE` で確認します。

> **ヒント:** 相対パス `akaBot\MV3\...` と `akaBot\NativeHost\...` が機能するように、このガイドの例は Commander のフォルダーから実行してください。
>
> ```bat
> cd /d "C:\Program Files\FPT Software\akaBot Platform"
> ```

## 2. 拡張機能の識別子 {#2-extension-identifiers}

拡張機能のすべてのコマンドには、ブラウザーの拡張機能 ID とネイティブ メッセージング ホストが必要です。

| ブラウザー | `--id` | `--nativeHostId` | `--fileNativeHost` |
|---|---|---|---|
| Chrome | `pflniglmkbjhmlcpcgpnhnpicdfalkjb` | `com.akarpa.chromenativemsg` | `akaBot\NativeHost\com.akarpa.chromenativemsg.json` |
| Edge | `idcmnficjddehpcjmkfcmomijikkgdgh` | `com.akarpa.edgenativemsg` | `akaBot\NativeHost\com.akarpa.edgenativemsg.json` |
| Firefox | `support@akabot.com` | `com.akarpa.firefoxnativemsg` | `akaBot\NativeHost\com.akarpa.firefoxnativemsg.json` |

## 3. 拡張機能をインストールする {#3-install-the-extension}

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

| オプション | 必須 | 説明 |
|---|---|---|
| `--scope` | はい | インストール モード: `user`、`policy`、`policyoffline` (Chrome と Edge)。Firefox は `user` と `policy` をサポートします。 |
| `--id` | はい | 拡張機能 ID (セクション 2)。 |
| `--version` | はい | パッケージのバージョン (例: `3.0.3`)。パッケージ ファイルと一致する必要があります。 |
| `--file` | はい | 拡張機能パッケージ: Chrome と Edge は `.crx`、Firefox は `.xpi`。`policyoffline` の場合、パッケージは同じ `--id` の akaBot 拡張機能である必要があります。 |
| `--nativeHostId` | はい | ネイティブ メッセージング ホスト (セクション 2)。 |
| `--fileNativeHost` | はい | ネイティブ メッセージング ホストのマニフェスト (`.json`)。 |
| `--silent` | いいえ | `true`: ダイアログを一切表示しません。現在のユーザーの実行中のブラウザー プロセスは確認なしで終了します。展開スクリプトで使用します。既定値 `false`: インストールの確認と、ブラウザーを閉じる前の確認を表示します。 |
| `--noConfirm` | いいえ | `true`: 「拡張機能をインストールしますか?」の確認のみを省略します。ブラウザーを閉じる確認は引き続き表示されます。Chrome と Edge のみ。 |

> **注:** インストール中はブラウザーを閉じる必要があります。インストール コマンドを実行する前に、ブラウザーでの作業を保存してください。

### 3.1 例: User モード (現在のユーザー、管理者権限不要) {#31-example-user-mode-current-user-no-administrator-rights}

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-chrome --scope:user --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --version:3.0.3 --file:"akaBot\MV3\akaBot-Chrome-3.0.3.crx" --nativeHostId:com.akarpa.chromenativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.chromenativemsg.json"
```

User モードでインストールした後、Chrome を開き、通知で **拡張機能を有効にする** をクリックします ([Akabot Web 拡張機能をインストールする方法](./how-to-install-akabot-web-extension.md#32-enable-extension-in-chrome) を参照)。

### 3.2 例: Policy モード (すべてのユーザー、ストアから) {#32-example-policy-mode-all-users-from-the-store}

管理者として開いたコマンド プロンプトで:

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-edge --scope:policy --id:idcmnficjddehpcjmkfcmomijikkgdgh --version:3.0.3 --file:"akaBot\MV3\akaBot-Edge-3.0.3.crx" --nativeHostId:com.akarpa.edgenativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.edgenativemsg.json" --silent:true
```

Edge は次回の起動時に Edge アドオンから拡張機能をダウンロードするため、コンピューターからストアにアクセスできる必要があります。

### 3.3 例: ポリシー (オフライン) モード (すべてのユーザー、ストアへのアクセス不要) {#33-example-policy-offline-mode-all-users-no-store-access}

ドメインに参加しているか MDM に登録されているコンピューターで、管理者として開いたコマンド プロンプトで:

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-chrome --scope:policyoffline --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --version:3.0.3 --file:"akaBot\MV3\akaBot-Chrome-3.0.3.crx" --nativeHostId:com.akarpa.chromenativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.chromenativemsg.json" --silent:true
```

Commander はパッケージを `C:\ProgramData\akaBot\Extensions\chrome` にコピーし、そこから強制インストールします。終了コード `14` で終了した場合、コンピューターは管理対象ではありません。代わりに `--scope:policy` を使用してください。終了コード `15` はパッケージをコピーできなかったことを示します。`C:\ProgramData\akaBot\Extensions` を削除してから、コマンドを再度実行してください。

### 3.4 例: Firefox の Policy モード {#34-example-firefox-in-policy-mode}

管理者として開いたコマンド プロンプトで:

```bat
cd /d "C:\Program Files\FPT Software\akaBot Platform"

Commander.exe install-firefox --scope:policy --id:support@akabot.com --version:2.0.1 --file:"akaBot\MV3\akaBot-Firefox-2.0.1.xpi" --nativeHostId:com.akarpa.firefoxnativemsg --fileNativeHost:"akaBot\NativeHost\com.akarpa.firefoxnativemsg.json" --silent:true
```

> **注:** 例のバージョンは、`akaBot\MV3` フォルダーにあるバージョン (セクション 1.1) に置き換えてください。

## 4. 状態を確認する {#4-check-the-status}

```text
Commander.exe status-chrome | status-edge | status-firefox --id:<extension id> --nativeHostId:<native host id>
```

例:

```bat
Commander.exe status-chrome --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --nativeHostId:com.akarpa.chromenativemsg
echo %ERRORLEVEL%
```

| 出力 | 終了コード | 意味 |
|---|---|---|
| `Installed. Scope: User` | `0` | 現在のユーザーにインストールされています。 |
| `Installed. Scope: Policy` | `0` | ストアから強制インストールされ、必要なポリシーがすべて揃っています。 |
| `Installed. Scope: PolicyOffline` | `0` | `C:\ProgramData\akaBot\Extensions` から強制インストールされ、必要なポリシーとファイルがすべて揃っています。 |
| `Not installed` | `6` | 拡張機能はインストールされていません。 |
| `Not installed. Scope: Policy (incomplete: ...)` | `6` | 拡張機能は強制インストールされていますが (組織の GPO など)、必要なものが不足しているため Indicate が動作しません。`incomplete:` の後に不足しているものが表示されます。管理者として同じスコープで `install-…` を実行して修正します。 |

Chrome と Edge の状態は、Indicate から見た状態です。拡張機能がポリシーで強制インストールされている場合は、User モードのインストールが存在していてもポリシーのインストールが報告されます。

## 5. 拡張機能を削除する {#5-remove-the-extension}

```text
Commander.exe remove-chrome | remove-edge | remove-firefox --scope:<user|policy|policyoffline> --id:<extension id> --nativeHostId:<native host id>
```

インストール時と同じスコープを使用します (`status-…` で確認)。ポリシーのスコープには、管理者として開いたコマンド プロンプトが必要です。

```bat
Commander.exe remove-chrome --scope:policyoffline --id:pflniglmkbjhmlcpcgpnhnpicdfalkjb --nativeHostId:com.akarpa.chromenativemsg
```

- ポリシーのスコープでは、ポリシー リストから akaBot のエントリのみを削除し、他の製品のエントリは残します。`policyoffline` では `C:\ProgramData\akaBot\Extensions\<browser>` のファイルも削除します。
- 強制インストールされた拡張機能は、ブラウザーの次回の起動時に削除されます。
- `remove-firefox` は、Firefox が実行中の場合に閉じるかどうかを確認します。

## 6. 終了コード {#6-exit-codes}

| コード | 名前 | 意味 |
|---|---|---|
| `0` | Success | コマンドが成功しました。`status-…` の場合: 拡張機能はインストールされています。 |
| `1` | CancelledByUser | 確認ダイアログで **いいえ** または **キャンセル** をクリックしました。何も変更されていません。 |
| `2` | UnexpectedError | コマンドが失敗しました。理由が出力されます。主な原因: 管理者権限なしでポリシーのスコープを実行した、オプションが不足している、パッケージ ファイルが存在しない。 |
| `6` | ExtensionNotInstalled | `status-…`: 拡張機能がインストールされていないか、ポリシーのセットアップが完了していません。 |
| `10` | OperationNotSupported | 不明なコマンドです。 |
| `14` | MachineNotManaged | ドメインに参加しておらず MDM にも登録されていないコンピューターで `--scope:policyoffline` を実行しました。何も変更されていません。`--scope:policy` を使用してください。 |
| `15` | StagingFailed | `--scope:policyoffline`: パッケージを `C:\ProgramData\akaBot\Extensions` にコピーできなかった、パッケージがこの `--id` の akaBot 拡張機能ではない、または `--version` が指定されていません。 |

`child-session` コマンドは独自のコードを使用します (セクション 7.2)。

## 7. その他のコマンド {#7-other-commands}

### 7.1 Java Access Bridge {#71-java-access-bridge}

検出されたすべての Java インストール (`JAVA_HOME`、および `C:\Program Files\Java` と `C:\Program Files (x86)\Java` の下のフォルダー) で Java Access Bridge をオンまたはオフにします。akaBot で Java アプリケーションを自動化するには、Java Access Bridge が必要です。

```bat
Commander.exe install-java
Commander.exe remove-java
```

コマンドの実行後、Java アプリケーションを再起動してください。

### 7.2 子セッション {#72-child-sessions}

同じコンピューター上の別のセッションで自動化を実行するために使用する、Windows の子セッションを管理します。

| コマンド | 説明 | 失敗時の終了コード |
|---|---|---|
| `Commander.exe child-session --is-enable` | `True` または `False` を出力します。 | `10` |
| `Commander.exe child-session --get-id` | 現在のユーザーの子セッション ID を出力します。 | `11` |
| `Commander.exe child-session --enable` | 子セッションをオンにします (管理者)。 | `12` |
| `Commander.exe child-session --disable` | 子セッションをオフにします (管理者)。 | `13` |
| `Commander.exe child-session --logoff:<id>` | 現在のユーザーの指定した子セッションをサインアウトします。 | `14` |

### 7.3 プログラムを起動する {#73-start-a-program}

```text
Commander.exe run-program --path:<path\to\app.exe> [--arguments:<Base64>] [--working-dir:<folder>]
```

プログラムを起動し、終了を待ちません。`--arguments` はプログラムのコマンド ラインを Base64 (UTF-8) でエンコードしたものです。作業フォルダーの既定値はプログラムのフォルダーです。

例: `C:\Temp\report.txt` をメモ帳で開きます。まず PowerShell で引数をエンコードします。

```powershell
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('"C:\Temp\report.txt"'))
# IkM6XFRlbXBccmVwb3J0LnR4dCI=
```

次に、以下を実行します。

```bat
Commander.exe run-program --path:"C:\Windows\System32\notepad.exe" --arguments:IkM6XFRlbXBccmVwb3J0LnR4dCI=
```
