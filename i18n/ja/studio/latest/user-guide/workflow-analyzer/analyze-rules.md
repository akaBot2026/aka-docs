---
title: 解析ルール
sidebar_label: 解析ルール
sidebar_position: 2
description: 解析ルール
displayed_sidebar: studioSidebar
---
# ワークフロー アナライザー ルール

このドキュメントは、ワークフロー アナライザーで定義されている解析ルールの概要を提供します。

## 命名ルール (ST-NMG-...)

| ルール名 | ルール ID | スコープ |
| :--- | :--- | :--- |
| [変数の命名](./naming/variable-naming.md) | ST-NMG-001 | アクティビティ |
| [引数の命名](./naming/argument-naming.md) | ST-NMG-002 | ワークフロー |
| [表示名の重複](./naming/display-name-duplication.md) | ST-NMG-004 | ワークフロー |
| [変数のスコープ](./naming/variable-shadowing.md) | ST-NMG-005 | アクティビティ |
| [変数のシャドウイング](./naming/variable-shadowing.md) | ST-NMG-005 | ワークフロー |
| [変数と引数の衝突](./naming/variable-argument-collision.md) | ST-NMG-006 | ワークフロー |
| [変数の長さ](./naming/variable-length.md) | ST-NMG-008 | アクティビティ |
| [DataTable 変数のプレフィックス](./naming/prefix-datatable-variables.md) | ST-NMG-009 | アクティビティ |
| [DataTable 引数のプレフィックス](./naming/prefix-datatable-arguments.md) | ST-NMG-011 | ワークフロー |
| [引数の長さ](./naming/argument-length.md) | ST-NMG-016 | ワークフロー |

## 設計ベスト プラクティス (ST-DBP-...)

| ルール名 | ルール ID | スコープ |
| :--- | :--- | :--- |
| [引数のメトリクス](./design-best-practices/high-arguments-count.md) | ST-DBP-002 | ワークフロー |
| [空の Catch ブロック](./design-best-practices/empty-catch-block.md) | ST-DBP-003 | アクティビティ |
| [フローチャートのネスト](./design-best-practices/flowchart-nesting.md) | ST-DBP-007 | ワークフロー |
| [空のワークフロー](./design-best-practices/empty-workflow.md) | ST-DBP-023 | ワークフロー |
| [遅延アクティビティの使用](./design-best-practices/delay-activity-usage.md) | ST-DBP-026 | アクティビティ |

## 保守性ルール (ST-MRD-...)

| ルール名 | ルール ID | スコープ |
| :--- | :--- | :--- |
| [アクティビティの命名](./maintainability/activity-name.md) | ST-MRD-002 | アクティビティ |
| [冗長なシーケンス](./maintainability/redundant-sequences.md) | ST-MRD-005 | アクティビティ |
| [ネストされた If](./maintainability/nested-if.md) | ST-MRD-007 | ワークフロー |
| [空のシーケンス](./maintainability/empty-sequence.md) | ST-MRD-008 | アクティビティ |
| [深くネストされたアクティビティ](./maintainability/deeply-nested-activities.md) | ST-MRD-009 | ワークフロー |
| [不完全な If](./maintainability/incomplete-if.md) | ST-MRD-017 | アクティビティ |

## パフォーマンス ルール (ST-PRR-...)

| ルール名 | ルール ID | スコープ |
| :--- | :--- | :--- |
| [ハードコードされた遅延](./performance/hardcoded-delay-activity.md) | ST-PRR-004 | アクティビティ |

## セキュリティ ルール (ST-SEC-...)

| ルール名 | ルール ID | スコープ |
| :--- | :--- | :--- |
| [機密引数の SecureString](./security/securestring-for-sensitive-arguments.md) | ST-SEC-007 | ワークフロー |
| [機密変数の SecureString](./security/securestring-for-sensitive-variables.md) | ST-SEC-008 | アクティビティ |

## 使用ルール (ST-USG-...)

| ルール名 | ルール ID | スコープ |
| :--- | :--- | :--- |
| [未使用の依存関係](./usage/unused-dependencies.md) | ST-USG-010 | プロジェクト |
| [パッケージ制限](./usage/package-restrictions.md) | ST-USG-014 | プロジェクト |
| [ログ メッセージの最小数](./usage/minimum-log-messages.md) | ST-USG-020 | ワークフロー |
| [アクティビティ制限](./usage/activity-restrictions.md) | ST-USG-026 | アクティビティ |
| [必須パッケージ](./usage/required-packages.md) | ST-USG-027 | プロジェクト |

## プロジェクト構成ルール (ST-ANA-...)

| ルール名 | ルール ID | スコープ |
| :--- | :--- | :--- |
| [プロジェクト ワークフロー数](./project-anatomy/project-workflow-count.md) | ST-ANA-003 | プロジェクト |
| [メイン ワークフローの存在](./project-anatomy/main-workflow-exists.md) | ST-ANA-006 | プロジェクト |
