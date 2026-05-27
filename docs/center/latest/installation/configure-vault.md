---
id: configure-vault
title: "Configure akaBot Center to use Vault"
sidebar_label: "Configure to use Vault"
sidebar_position: 16
description: "Configure akaBot Center to use Vault documentation."
displayed_sidebar: centerSidebar
---
# Configure akaBot Center to use Vault

# **1. Prerequisites**

* Windows OS.

* akaBot Center v2.2.x.x or newer version.

* HashiCorp Vault software at link https://releases.hashicorp.com/vault

# **2. Install akaBot Center**

Follow the guideline in this link to install akaBot Center **[Instruction](/docs/center/latest/installation/center-3x-mysql-windows.md)**

# **3. Install and Configure Vault**

**3.1. Install HashiCorp Vault**

**Step 1:** Download Vault 1.8.8 from **[https://releases.hashicorp.com/vault/1.8.8/](https://releases.hashicorp.com/vault/1.8.8/)**

**Step 2:** Extract the package to **C:\vault\**

**Step 3:** Add Vault to PATH environment variable

    setx PATH "%PATH%;C:\vault"

**Step 4:** Verify installation using command:

     vault  version

**Step 5:** Create configuration file **C:\vault\config.hcl** with content below:

```hcl
storage "file" { path = "C:/vault/data" }
listener "tcp" { address = "127.0.0.1:8200" tls_disable = 1 }
ui = true
```

**Step 6:** Start Vault server:

    vault server -config=C:\vault\config.hcl

**Step 7:** Initialize Vault:

    set VAULT\_ADDR=http://127.0.0.1:8200   
    vault operator init

**Step 8:** Unseal Vault using unseal keys:

    vault operator unseal (run 3 times with different keys)

**Step 9:** Login using root token:

    vault login

**3.2. Configure Vault and add some credentials.**

**Step 1:** Enable KV secret engine:

    vault secrets enable -path=secret kv-v2

![1774320665510-975.png](/static/img/737397_1774320665510-975.png)

**Step 2:** Add sample credential:

    vault kv put secret/app/dev/db Username=dbuser Password=dbpass123

![1774320731488-504.png](/static/img/08d11b_1774320731488-504.png)

**Step 3:** Verify credential:

     vault kv get secret/app/dev/db

**Step 4:** Enable AppRole authentication:

    vault auth enable approle

**Step 5:** Create role:

    vault write auth/approle/role/akabot token\_policies="default" token\_ttl=1h token\_max\_ttl=4h

**Step 6:** Get Role ID and Secret ID:

    vault read auth/approle/role/akabot/role-id   
    vault write -f auth/approle/role/akabot/secret-id

# **4. Configure akaBot Center to use Vault**

* Open and update **application.yml** 
Path: C:\Program files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config\application.yml) with Vault configuration:

      vault:   
          enabled: true   
          url: http://127.0.0.1:8200   
          app-role:   
          role-id: \<role-id\>   
          secret-id: \<secret-id\>   
          credential:   
            user-mapping: Username   
            pass-mapping: Password   
            root-path-asset: secret/data/app/dev

![1774322286585-674.png](/static/img/421075_1774322286585-674.png)

* Access akaBot (local host) and navigate to Agent tab
* Click "Create new" and choose path then click "Save"

![1774323194905-839.png](/static/img/34a242_1774323194905-839.png)

![1774323309236-613.png](/static/img/6dc0f7_1774323309236-613.png)

![1774323324582-290.png](/static/img/84b288_1774323324582-290.png)