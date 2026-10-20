---
id: upload-and-track
title: "文書のアップロードと Job の追跡"
sidebar_label: "アップロードと追跡"
sidebar_position: 1
description: "文書をアップロードし、対応するファイルを確認して、Job の追跡、再試行、キャンセルを行います。"
displayed_sidebar: akaXtractSidebar
---

# 文書のアップロードと Job の追跡

## 文書をアップロードする

**事前に必要なもの：** Pipeline に Published バージョンがあること、文書を送信する権限があること、十分なクォータがあること。

1. Pipeline を開き、`Documents` -> `Upload Document` を選択します。
2. `Document File` を選択し、`Upload Document` を選択します。アップロードは 1 回につき 1 ファイルです。1 つのファイルに複数の文書を含めることができます。

![Pipeline の Documents タブ](/static/img/scale-xtract-documents-list.png)

![Upload Document ダイアログ](/static/img/scale-xtract-upload-document.png)

**結果：** 文書が一覧に表示され、処理が開始されます。アップロードのメッセージは、抽出が成功したことを意味するものではありません。

文書を探すには、検索、ステータス、日付範囲、`Filter` を使用します。新しい文書が表示されない場合は、フィルターを解除してください。

<a id='files-and-limits'></a>

## 対応ファイルと制限

| 項目 | 詳細 |
| --- | --- |
| 処理できるファイル形式 | PDF、PNG、JPG/JPEG、TIFF、TXT、DOCX、XML、CSV |
| Excel（XLS、XLSX） | まだ処理できません。アップロードする前に、PDF または CSV に変換してください |
| 最大ファイル サイズ | 25 MB |
| ファイル名 | 255 文字まで。ファイルが空でないこと |
| 1 つのファイルに複数の文書を含める | 対応しています。異なる文書タイプが混在していてもかまいません |
| `Create Auto` 用のサンプル | PDF、PNG、JPG/JPEG、または XML（25 MB まで） |

:::note
受け付けられたファイルでも、プレビューや抽出に失敗する場合があります。プレビューは、主に PDF、画像、XML で動作します。検証を通過する目的でファイルの拡張子を変更しないでください。暗号化されたファイル、破損したファイル、サイズが大きすぎるファイルは、組織が承認しているツールで作り直してください。
:::

## Job を追跡する

`Jobs` を開くと、すべての処理の実行を確認できます。Job ID または文書名で検索でき、Pipeline、バージョン、ステータスで絞り込めます。一覧を更新するには `Refresh Jobs` を選択します。

![Jobs 一覧](/static/img/scale-xtract-jobs-list.png)

![Job のステータス フィルター](/static/img/scale-xtract-jobs-status-filter.png)

| Job のステータス | 意味と次の対応 |
| --- | --- |
| `Uploading` | ファイルを受信中です。お待ちください |
| `Upload Failed` | ファイルと接続を確認してから、もう一度アップロードしてください |
| `Processing`、`Running`、`Waiting for External Service` | Job を実行中です。再送信せずにお待ちください |
| `Waiting for Review` | レビュー担当者による結果の確定が必要です。`To Review` または `Reviewing` の Document を探してください |
| `Completed` | 実行が終了しました。Document には `Confirmed` または `Rejected` と表示されます |
| `Failed`、`Timed Out` | `Error Message` を確認し、原因を解消してから再試行してください |
| `Cancelled` | Job はキャンセルされており、再試行できません |

Document のステータスは、文書とその結果の状態を表します。Job のステータスは、処理の実行の状態を表します。Document のステータスは、`Uploading`、`Upload Failed`、`Processing`、`To Review`、`Reviewing`、`Confirmed`、`Rejected`、`Failed`、`Cancelled` のいずれかになります。

## Job を再試行またはキャンセルする

- `Failed` または `Timed Out` の Job を**再試行**する場合：原因を解消し、行メニューを開いて `Retry` を選択します。Job は `Processing` に戻り、Pipeline のバージョンは維持されます。修正に、新しく公開した設定が必要な場合は、文書を新しい Job として再度アップロードしてください。
- `Uploading`、`Processing`、`Running`、`Waiting for External Service` の Job を**キャンセル**する場合：`Cancel` を選択し、必要に応じて `Cancellation Reason` を入力して、`Cancel Job` を選択します。

:::note
`Waiting for Review` の Job はキャンセルできません。結果の可否は Review で決定してください。`Completed` の Job もキャンセルできません。また、キャンセルしても、AI プロバイダーにすでに送信したリクエストは取り消されません。
:::

操作が失敗した場合は、Job の状態がすでに変わっている可能性があるため、まずステータスを更新して確認してください。
