---
id: setup-aws-secrets-guideline
title: "AWS Secret ガイドラインのセットアップ"
sidebar_label: "AWS Secret ガイドラインのセットアップ"
sidebar_position: 5
description: "AWS Secrets Guideline ドキュメントをセットアップします。"
displayed_sidebar: dataServiceSidebar
---
# AWS Secret ガイドラインのセットアップ

## **1.はじめに**

このドキュメントでは、データ サービスの AWS シークレットを設定する方法について説明します。

## **2.構成**

![1776046792188-824.png](/static/img/9eab26_1776046792188-824.png)

bootstrap.yml ファイルを開きます。次のように構成を更新します。

![1776046872552-583.png](/static/img/55e952_1776046872552-583.png)

AWS シークレットの使用を有効にするには

**リージョン:** AWS リージョン

**AWS Secrets Manager を使用する場合:**

**キー**: /prod/akabot/dataservice

**セットアップ:**

**プレフィックス**: /prod/akabot

**デフォルトコンテキスト:** データサービス

## **3.役割**

ケース 1: IAM ロールの使用 (推奨)

アプリケーションが EC2 インスタンス、ECS タスク、または AWS Secrets Manager へのアクセス許可を持つ IAM ロールがアタッチされた環境で実行されている場合、追加の設定は必要ありません。

サービスは通常、IAM ロールの認証情報を使用して開始されます。

ケース 2: AWS アクセス キーと秘密キーを使用する

Linux:

IAM ロールの代わりに AWS アクセス キーとシークレット キーを使用してサービスを実行する必要がある場合は、akabotdata.service ファイルをサービスに追加します。

【サービス】

環境="AWS\_ACCESS\_KEY\_ID=アクセスキー"

環境 = "AWS\_SECRET\_ACCESS\_KEY=あなたの秘密キー"

環境 = "AWS\_REGION=ap-southeast-1"

ウィンドウズ:

パラメータをファイルに更新: win-install.bat

## **4.パラメータの使用**

通常の環境変数の使用:`${param}`

![1776047326889-829.png](/static/img/a746bd_1776047326889-829.png)

パスワードは AWS Secrets Manager から取得されます。パスワードは Secret の値です。