---
id: browser-workflow
title: "ブラウザ ワークフロー"
sidebar_label: "ブラウザ ワークフロー"
sidebar_position: 1
description: "ブラウザ コンテナー アクティビティが akaBot Studio で Web 自動化セッションをどのように確立・管理するかを説明します。"
displayed_sidebar: activitiesSidebar
---

# ブラウザ ワークフロー

akaBot Studio で Web アプリケーションを自動化するには、まずブラウザ セッションを確立する必要があります。akaBot は**コンテナー ベースのモデル**を採用しています。親のコンテナー アクティビティがブラウザとの接続を確立し、その内部に配置されたすべてのアクティビティが、確立されたセッションを引き継いで実行されます。

このガイドでは、コンテナー アクティビティの種類、それぞれの使い分け、およびブラウザ ワークフローの管理方法を説明します。

---

## コンテナー アクティビティの比較

akaBot には、ブラウザ セッションを管理するための主要なコンテナー アクティビティが 3 つあります。

| コンテナー | 目的 | 使用場面 |
| :--- | :--- | :--- |
| **[ブラウザを開く (Open Browser)](../activities/open-browser.md)** | 新しいブラウザ インスタンスを起動します。 | ほとんどのワークフローの開始点として使用します。指定した URL で新しいタブ/ウィンドウを開きます。 |
| **[ブラウザを接続する (Attach Browser)](../activities/attach-browser.md)** | すでに実行中の既存のブラウザ インスタンスに接続します。 | すでに開いているブラウザをロボットに操作させる場合に使用します。 |
| **[ブラウザのスコープ (Browser Scope)](../activities/browser-scope.md)** | 稼働中のブラウザ セッションを、別のブロックで再利用します。 | 複雑な自動化ワークフローを複数のシーケンスに分割しながら、同じタブ/セッションを維持する場合に使用します。 |

---

## コンテナーのワークフロー

### 1. ブラウザを開く (Open Browser) ワークフロー
最も一般的な Web 自動化ワークフローです。新しいブラウザ ウィンドウを開き、シーケンス内のアクションを実行し、完了時 (設定されている場合) にブラウザを自動的に閉じます。

#### ワークフローの構造:
```
Open Browser 
   │
   └── Do (Session Context)
         ├── Navigate To 
         ├── Click 
         └── Type Into 
```

---

### 2. ブラウザを接続する (Attach Browser) ワークフロー
すでに実行中のブラウザを操作する場合に使用します。通常は **アタッチ用のブラウザを起動します (Start Browser For Attach)** と組み合わせて、デバッグが有効な Chrome ウィンドウを自動化します。

#### ワークフローの構造:
```
Start Browser For Attach (Launches a Chrome instance for attachment)
   │
   └── Attach Browser (Connects to the running browser)
         │
         └── Do (Session Context)
               ├── Navigate To ("https://google.com")
               └── Type Into (Search Box)
```

---

### 3. ブラウザのスコープ (Browser Scope) ワークフロー
`Browser` 変数を使用して、ワークフローの異なる部分でブラウザ セッションを再利用します。

ブラウザを開く (Open Browser) はブラウザ セッションを作成し、それを `Browser` 変数に格納します。ブラウザのスコープ (Browser Scope) は、同じ `Browser` 変数を使用して、既存のブラウザ セッションで自動化を継続します。

#### ワークフローの構造:
```
Open Browser (Url: "https://akabot.com" ── Output Browser: myBrowser)
   │
   └── Do (First block actions)
         └── Click (Contact Us)

... (other workflow activities) ...

Browser Scope (Input Browser: myBrowser)
   │
   └── Do (Second block actions)
         └── Click (Free Trial)
```

> [!NOTE]
> 複数のブラウザ コンテナー間でブラウザが閉じてしまうのを防ぐには、各コンテナーの「プロパティ (Properties)」パネルで **Quit Browser on Completed or Faulted** チェック ボックスをオフにします。

---

## 次のステップ

ブラウザ セッションを確立したら、**[Web 要素の操作](./working-with-web-elements.md)** で Web 要素を操作する方法を確認してください。

---

## 関連情報

### ブラウザ アクティビティ
* **[ブラウザを開く (Open Browser)](../activities/open-browser.md)**
* **[アタッチ用のブラウザを起動します (Start Browser For Attach)](../activities/start-browser-for-attach.md)**
* **[ブラウザを接続する (Attach Browser)](../activities/attach-browser.md)**
* **[ブラウザのスコープ (Browser Scope)](../activities/browser-scope.md)**
* **[ナビゲート先 (Navigate To)](../activities/navigate-to.md)**
* **[戻る (Go Back)](../activities/go-back.md)**
* **[前進する (Go Forward)](../activities/go-forward.md)**
* **[リフレッシュ (Refresh)](../activities/refresh.md)**
* **[タブを閉じる (Close Tab)](../activities/close-tab.md)**
* **[切り替え先 (Switch To)](../activities/switch-to.md)**
* **[ブラウザを終了する (Quit Browser)](../activities/quit.md)**

### チュートリアル
* **[Google 検索のユースケース](./google-search.md)**
* **[JavaScript アラートの処理](./tabs-alerts-management.md)**
