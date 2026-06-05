---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Active Directory activity package"
displayed_sidebar: activitiesSidebar
---
# はじめに

**Active Directory アクティビティ**パッケージには、**Active Directory**の自動化プロジェクトを作成する際に使用するすべての**基本アクティビティ**が含まれています。

このパッケージを使用して Active Directory の自動化を行う場合、ブラウザドライバーに特別な要件はありません。システムに既にインストールされているブラウザドライバーを使用できます。

これらのアクティビティにより、ロボットは次のことが可能になります:

* 基本的な Active Directory の自動化のために、マウスやキーボードコマンドの実行、テキストの入力や抽出など、人間の操作を**シミュレート**すること。
* アプリケーションの動作に基づく**トリガー**を作成し、特定のイベントがマシンで発生したときにロボットが特定のアクションを実行できるようにすること。
* **Active Directory** の操作を実行すること。

**ターゲット要素の選択**

UI 要素に対してアクションを実行するアクティビティは、デザイナー内のアクティビティ本文にある**ターゲット要素を選択 (Pick target element)** ボタンを使用してデザイン時に構成できます。

**注意：**
Active Directory 上の要素を指示するには、[Active Directory 拡張機能をインストール](/docs/studio/latest/installation/active-directory-extension.md)する必要があります。

**ターゲット要素を選択 (Pick target element)** ボタンをクリックすると **Selector Editor** ウィザードが開きます。

![image-20220509131533-1.png](/static/img/20dec3_image-20220509131533-1.png)

**ターゲット要素を選択 (Pick target element)** ボタンをクリックした後、現在指示している項目は **Indicate** フィールドに表示されます。ウィザードが初めて開かれたときは、**Target**（ターゲット）を指定する必要があります。利用可能な場合、ウィザードは各可能なターゲットに対して自動的にアンカーを選択します。

以下は Active Directory 上で要素を指示した後の例です:

![image-20220509131542-2.png](/static/img/23460f_image-20220509131542-2.png)

