---
id: build-your-first-form
title: "最初のフォームを作成する"
sidebar_label: "最初のフォームを作成する"
sidebar_position: 1
description: "akaBot Studio ワークフローでフォームを設計・表示するためのステップバイステップチュートリアル。"
displayed_sidebar: activitiesSidebar
---

# 最初のフォームを作成する

このチュートリアルでは、Basic、Advanced、Layout、Data の 4 グループのコンポーネントを使った登録フォームの作成方法を示します。ワークフローはあらかじめ従業員 ID を埋め、フォームを表示して入力を受け取り、送信されたデータをログに記録します。

1. Form Builder を開きます。
   
   a. akaBot Studio で [Display Form](/docs/activities/form-builder/latest/activities/display-form.md) をワークフローにドラッグします。

   b. アクティビティ本文内の **Open Form Builder** ボタンをクリックしてエディタを起動します。

2. レイアウトに見出しを追加します。
   a. 左側パネルで **Layout** カテゴリを展開します。

   b. [Content](/docs/activities/form-builder/latest/form/components/layout.md) コンポーネントをキャンバスに追加し、表示テキストを入力して保存します。

3. 個人情報フィールドを追加します（Basic / Advanced グループ）。

   a. フルネームフィールド（Text Field）を追加し、Property Name を `fullName` に設定します。

   b. 会社メール（Email）を追加し、Property Name を `email` に設定します。

   c. 電話番号フィールド（Phone Number）を追加し、Property Name を `phone` に設定します。

4. 勤務情報フィールドを追加します。

   a. 部署（Select）を追加し、Options に `IT`, `Finance`, `HR`, `Sales` を設定、Property Name を `department` にします。

   b. 雇用形態（Radio）を追加し、`Full-time`, `Part-time` を選択肢として設定、Property Name を `employmentType` にします。

   c. 開始日（Date / Time）を追加し、Property Name を `startDate` にします。

5. スキーマを保存します。
   a. Form Builder の上部ツールバーで **Save** をクリックします。
   b. プロジェクト内に `employee_registration.json` として保存します。

6. ワークフローに戻り、`Display Form` の入力にスキーマファイルを指定して実行します。

詳しいスクリーンショットやサンプルプロジェクトはドキュメント内のリンクを参照してください。

