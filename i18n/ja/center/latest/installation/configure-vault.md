---
id: configure-vault
title: "Vault を使用するように akaBot Center を構成する"
sidebar_label: "Vault を使用するように設定する"
sidebar_position: 16
description: "Vault ドキュメントを使用するように akaBot Center を構成します。"
displayed_sidebar: centerSidebar
---
# Vault を使用するように akaBot Center を構成する

# **1.前提条件**

* Windows OS。

* akaBot Center v2.2.x.x 以降のバージョン。

* HashiCorp Vault ソフトウェア (リンク: https://releases.bashicorp.com/vault)

# **2. akaBot Center をインストールします**

このリンクのガイドラインに従って、akaBot Center**[Instruction](/i18n/ja/center/latest/installation/center-3x-mysql-windows.md)** をインストールします。

# **3. Vault のインストールと構成**

**3.1. HashiCorp Vault をインストールします**

**ステップ 1:** **[https://releases.hashicorp.com/vault/1.8.8/](https://releases.hashicorp.com/vault/1.8.8/)** から Vault 1.8.8 をダウンロードします。

**ステップ 2:** パッケージを **C:\vault\** に抽出します。

**ステップ 3:**Vault を PATH 環境変数に追加する

setx PATH "%PATH%;C:\vault"

**ステップ 4:** 次のコマンドを使用してインストールを確認します。

ボールトのバージョン

**ステップ 5:** 以下の内容を含む構成ファイル **C:\vault\config.hcl** を作成します。

```hcl
storage "file" { path = "C:/vault/data" }
listener "tcp" { address = "127.0.0.1:8200" tls_disable = 1 }
ui = true
```

**ステップ 6:** Vault サーバーを起動します。

ボールト サーバー -config=C:\vault\config.hcl

**ステップ 7:** ボールトを初期化します:

VAULT\_ADDR=http://127.0.0.1:8200 を設定します
ボールトオペレータの初期化

**ステップ 8:** 封印解除キーを使用して Vault の封印を解除します。

Vault Operator unseal (異なるキーで 3 回実行)

**ステップ 9:** ルート トークンを使用してログインします。

ボールトへのログイン

**3.2. Vault を構成し、資格情報を追加します。**

**ステップ 1:** KV シークレット エンジンを有効にします:

ボールト シークレットを有効にする -path=secret kv-v2

![1774320665510-975.png](/static/img/737397_1774320665510-975.png)

**ステップ 2:** サンプル認証情報を追加します:

vault kv put secret/app/dev/db ユーザー名=dbuser パスワード=dbpass123

![1774320731488-504.png](/static/img/08d11b_1774320731488-504.png)

**ステップ 3:** 資格情報を確認します:

vault kv get Secret/app/dev/db

**ステップ 4:** AppRole 認証を有効にします:

ボールト認証有効化approle

**ステップ 5:** ロールを作成します:

vault write auth/approle/role/akabot token\_policies="default" token\_ttl=1h token\_max\_ttl=4h

**ステップ 6:**ロール ID とシークレット ID を取得します:

ボールト読み取り auth/approle/role/akabot/role-id
vault write -f auth/approle/role/akabot/secret-id

# **4. Vault を使用するように akaBot Center を構成する**

* **application.yml (**パス: C:\Program files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config\application.yml) を開いて、Vault 設定を更新します。

保管庫:
有効: true
URL: http://127.0.0.1:8200
アプリの役割:
ロールID: \<role-id\>
シークレットID: \<secret-id\>
資格情報:
ユーザーマッピング: ユーザー名
パスマッピング: パスワード
ルートパスアセット: Secret/data/app/dev

![1774322286585-674.png](/static/img/421075_1774322286585-674.png)

* akaBot (ローカルホスト) にアクセスし、「エージェント」タブに移動します
* 「新規作成」をクリックしてパスを選択し、「保存」をクリックします。

![1774323194905-839.png](/static/img/34a242_1774323194905-839.png)

![1774323309236-613.png](/static/img/6dc0f7_1774323309236-613.png)

![1774323324582-290.png](/static/img/84b288_1774323324582-290.png)