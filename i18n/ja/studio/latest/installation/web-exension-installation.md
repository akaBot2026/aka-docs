---
id: web-exension-installation
title: "Web 拡張機能のインストール"
sidebar_position: 8
sidebar_label: "Web 拡張機能のインストール"
description: "ブラウザ自動化のために akaBot Web 拡張機能をインストールします。"
displayed_sidebar: studioSidebar
---

## Web 拡張機能のインストール

akaBot Web 拡張機能は、アクティビティ パッケージのネイティブ ブラウザーを使用するときに、akaBot Studio または Agent が Web ブラウザーと対話するのに役立ちます。

アクティビティ パッケージ ブラウザーを使用して Web オートメーションを実行し、ブラウザーが新しいバージョンに更新されている場合は、新しいブラウザー ドライバーの更新が必要になる場合があります。

akaBot は 4 種類のブラウザをサポートしています。

- クロム
- エッジ
- Firefox
- インターネットエクスプローラー

akaBot Web 拡張機能をインストールするには、以下の手順に従ってください。

**ステップ 1** - Web ブラウザで **拡張機能ページ** を開きます。

例: Chrome の場合

1. 「その他」アイコンをクリックします
2. 「その他のツール」メニューを選択します
3. 「拡張機能」を選択します

![image-20230718152046-1.png](/static/img/image-20230718152046-1.png)

**ステップ 2** - **開発者モードをオンにして**、**「解凍してロード」** をクリックします

![image-20230718152046-2.png](/static/img/image-20230718152046-2.png)

![image-20230718152046-3.png](/static/img/image-20230718152046-3.png)

**ステップ 3** - akaBot ブラウザ拡張機能フォルダーを参照します。

x64 Windows で、フォルダーを開きます: **「C:\Program Files\FPT Software\akaBot Platform\akaBot」**

x86 Windows では、フォルダーを開きます: **「C:\Program Files (x86)\FPT Software\akaBot Platform\akaBot」**

フォルダーを選択してください:


| ネイティブブラウザパッケージのバージョン | サポートされているマニフェスト | 拡張フォルダー |
|---|---|---|
| **< 5.x.x.x** | マニフェスト V2 | `BrowserExtensions` |
| **>= 5.x.x.x** | マニフェスト V3 | `BrowserExtensionsV3` |

![1714117769354-697.png](/static/img/1714117769354-697.png)

![1714113443408-531.png](/static/img/1714113443408-531.png)

ブラウザ名という名前のフォルダーを選択し、**フォルダーの選択** をクリックします。

![1714098313555-668.png](/static/img/1714098313555-668.png)

- **インストールが成功**すると、**ブラウザ拡張機能リスト**に akaBot Web 拡張機能が表示されます。

![1714117398210-725.png](/static/img/1714117398210-725.png)
