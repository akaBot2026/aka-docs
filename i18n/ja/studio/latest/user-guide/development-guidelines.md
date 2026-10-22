---
id: development-guidelines
title: 開発ガイドライン
sidebar_label: 開発ガイドライン
sidebar_position: 10
description: akaBot Studio でオートメーション プロジェクトを構築する際の推奨ルールです。プロジェクトの設定、ワークフローの設計、命名、セキュリティ、ログ、セレクター、ワークフロー アナライザーによる品質チェックを扱います。
displayed_sidebar: studioSidebar
---

# 開発ガイドライン

このガイドでは、akaBot Studio でオートメーション プロジェクトを構築する際に守るべきルールを説明します。これらのルールに従うことで、チームメンバー、レビュー担当者、管理者など、エージェントを保守、レビュー、実行する人々がエージェントを読みやすく、理解しやすくなります。

このガイドのルールの多くは、[ワークフロー アナライザー](./workflow-analyzer/about-workflow-analyzer.md)によって自動的にチェックされます。ワークフロー アナライザーで適用されるルールには、`ST-MRD-009` のようなルール ID と既定値を記載しています。

**必須**と記載されたルールは必ず守ってください。それ以外のルールは推奨事項です。

### 必須ルール

| # | 必須ルール | セクション |
| --- | --- | --- |
| 1 | 組織が提供するインストーラーとライセンスのみを使用する。 | [1.1](#11-activate-your-license) |
| 2 | 既定のパッケージ ソースと組織が提供するもの以外のパッケージ ソースを追加しない。 | [1.2](#12-check-your-package-sources) |
| 3 | 組織の命名形式でプロジェクトに名前を付ける。 | [2.1](#21-project) |
| 4 | アクティビティを 7 階層を超えてネストしない。 | [2.2](#22-workflow) |
| 5 | 1 つの Sequence に含めるアクティビティは 30 個以下にする。 | [2.3](#23-activity) |
| 6 | 変数と引数には、意味のある名前と、取り決めたプレフィックスを付ける。 | [2.4](#24-variables-and-arguments) |
| 7 | ID とパスワードをワークフローに直接入力しない。 | [2.5](#25-credentials-and-sensitive-data) |
| 8 | 機密情報や個人データをログに書き込まない。 | [2.7](#27-practices-to-avoid) |
| 9 | 承認、提出、メール送信を自動化しない。 | [2.7](#27-practices-to-avoid) |
| 10 | エージェントがファイルを更新する前に、そのファイルをバックアップする。 | [2.7](#27-practices-to-avoid) |
| 11 | ワークフロー アナライザーのエラーが残っているプロジェクトを公開しない。 | [3.2](#32-check-your-project-with-workflow-analyzer) |
| 12 | 自動化リストに登録される前のエージェントを本番環境で実行しない。 | [4.1](#41-register-the-process-in-your-automation-list) |

## 対象読者

このガイドは、akaBot Studio を使用してオートメーション プロジェクトを構築する開発者とシチズン オートメーターを対象としています。以下の図で赤枠で示した **Lv1 (シチズン開発)** を中心に説明しますが、これらのルールは上位レベルにも適用されます。

![オートメーション レベルと開発可能なプロセス: Lv1 と Lv2 はシチズン開発、Lv3 と Lv4 はプロフェッショナル開発](/static/img/dev-guidelines-automation-levels.png)

プロジェクトを実行するエージェントは、有人 (Attended) または無人 (Unattended) のいずれかです。

| | 有人 (Attended) | 無人 (Unattended) |
| --- | --- | --- |
| **強み** | 個々のユーザーの小規模で反復的な作業を支援し、人と協力して長時間のプロセスを完了します。 | 人の操作なしで長時間のプロセスを実行します。 |
| **開始方法** | ユーザー、または特定のユーザー イベントがプロセスを開始します。 | エージェントにタスクが割り当てられ、akaBot センターを通じて実行がスケジュールされます。 |
| **エージェントの実行場所** | ユーザーが日常業務を行うのと同じマシン上。 | akaBot センターに接続されている任意のマシン上。 |

詳細については、[有人 - 無人エージェント](/docs/agent/latest/user-guide/attended-unattended.md)を参照してください。

## 1. 開始する前に \{#1-before-you-start}

エージェントを構築する前に、環境をセットアップしてください。このセットアップにもルールがあります。ライセンス、パッケージ ソース、拡張機能、サポートの入手先です。

### 1.1. ライセンスをアクティベートする \{#11-activate-your-license}

akaBot Studio を使用するには、ライセンスが必要です。環境に合ったアクティベーション方法を選択してください。

- **オンライン アクティベーション**: インターネットに接続されたコンピューターでの Standard ライセンス用。
- **オフライン アクティベーション**: インターネットに接続されていないコンピューターでの Standard ライセンス用。
- **akaBot センターを通じたアクティベーション**: Enterprise (ネットワーク) ライセンス用。Studio コンピューターから akaBot センターに接続できる必要があります。

Studio の起動時に、Standard ライセンスの場合は **LMS (License Management System)**、Enterprise (ネットワーク) ライセンスの場合は **akaBot Center** を選択します。Standard ライセンスの場合は、続いてオンラインまたはオフラインのアクティベーションを選択します。

![akaBot のアクティベーション ウィンドウでライセンスの種類を選択する](/static/img/image-20230717142628-1.png)

![オンラインまたはオフラインのアクティベーションを選択する](/static/img/image-20230717142628-2.png)

ネットワークがプロキシ サーバー経由でインターネットまたは akaBot センターに接続している場合は、アクティベーションの前にプロキシ情報を準備してください。詳細な手順については、[ライセンスのアクティベーション](../installation/activation.md)を参照してください。

**必須:** 組織が提供する akaBot のインストーラーとライセンスのみを使用してください。トライアル版や個人用ライセンスなど、他の入手元のものを業務のためにインストールまたは使用しないでください。

### 1.2. パッケージ ソースを確認する \{#12-check-your-package-sources}

Studio は、パッケージ ソースからアクティビティ パッケージをインストールします。既定では、Studio は次のソースを使用します。

| ソース | 場所 |
| --- | --- |
| 現在のユーザー用のローカル フォルダー | `%localappdata%\akaBot\Packages` |
| マシン用のローカル フォルダー | `%programdata%\akaBot\Packages` |
| NuGet.org | `https://api.nuget.org/v3/index.json` |
| GitLab 上の akaBot パッケージ フィード | `https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json` |

**ホーム**タブの **Package Manager** で、独自のパッケージ ソースを追加することもできます。各ソースには、一意の名前と、アドレスまたはローカル フォルダーのいずれかが必要です。

**必須:** 既定のパッケージ ソースと組織が提供するもの以外のパッケージ ソースを追加しないでください。他のソースのパッケージが必要な場合は、自動化チーム (CoE) に相談してください。

ネットワークがプロキシ サーバー経由でインターネットに接続している場合は、GitLab と NuGet.org のアドレスへのアクセスを許可してください。[インターネット プロキシがあるオンプレミス ネットワークでの akaBot の構成](../installation/on-prem-network-requirements.md)を参照してください。

組織は、ワークフロー アナライザーのルール [Package Restrictions](./workflow-analyzer/usage/package-restrictions.md) (`ST-USG-014`) と [Required Packages](./workflow-analyzer/usage/required-packages.md) (`ST-USG-027`) を使用して、パッケージを制限したり、必須にしたりできます。

### 1.3. akaBot Web Extension をインストールする \{#13-install-the-akabot-web-extension}

Web サイトを自動化するには、ブラウザーに akaBot Web Extension をインストールします。akaBot は、Chrome、Edge、Firefox の拡張機能をサポートしています。

1. akaBot Studio で **オプション** を開き、**拡張機能** を選択します。
2. お使いのブラウザーのセクションで、**インストール** をクリックします。
3. ブラウザーが実行中の場合、Studio はブラウザーを閉じるよう求めます。**OK** をクリックして続行します。
4. ブラウザーを再度開き、プロンプトが表示されたら拡張機能を有効にします。ブラウザーの拡張機能ページから有効にすることもできます。

![オプション > 拡張機能から akaBot 拡張機能をインストールする](/static/img/9453eb_1773283802504-331.png)

詳細な手順については、[akaBot Web Extension のインストール方法](./how-to-install-akabot-web-extension.md)を参照してください。

Java アプリケーションを自動化するには、Java Access Bridge をインストールして有効にします。[Java Access Bridge のインストールと有効化](/docs/activities/java/latest/introduction.md)を参照してください。

SAP GUI を自動化するには、PC と SAP サーバーの両方で SAP GUI スクリプトを有効にします。[SAP Logon](/docs/activities/sap/latest/activities/sap-logon.md)を参照してください。

Citrix またはリモート デスクトップを自動化するには、リモート マシンに akaBot Remote Runtime をインストールして、ネイティブ セレクターを使用します。CV セレクターまたは画像セレクターを使用することもできます。[適切なセレクターの種類を選択する](#choose-the-right-selector-type)を参照してください。

ブラウザーが自動更新されると、ブラウザー ドライバーがブラウザーのバージョンと一致しなくなり、エージェントが実行時に失敗する可能性があります。[ブラウザー ドライバーの構成](../installation/configure-browser-driver.md)の説明に従ってドライバーを更新し、Studio の **オプション > 実行 > ブラウザー バージョン** で **自動検出** をオンにしてください。

### 1.4. サポートの入手先 \{#14-where-to-find-help}

- akaBot ドキュメント: [Studio ユーザー ガイド](./how-to-use.md)ではインターフェイスと一般的なタスクを説明しており、アクティビティのセクションでは各アクティビティとそのプロパティを説明しています。また、各ワークフロー アナライザー ルールには、説明と推奨事項があります。
- [デバッガー](./how-to-use-debugger.md)と**ホーム**タブの **ログを開く** ボタンは、エージェントが何を行ったかを調査するのに役立ちます。
- [AkaNinja](./how-to-use-akaninja.md) は Studio に組み込まれた AI アシスタントで、アクティビティとそのプロパティの説明、エラー メッセージの分析と解決方法の提案、VB.NET または C# の式の生成を行います。使用する前に、**オプション > AI 統合** で AI プロバイダーを構成してください。

  たとえば、デザイナーでアクティビティを選択し、そのアクティビティについて AkaNinja に質問します。AkaNinja は、下の赤枠で示した選択項目の表示名と種類を受け取り、そのアクティビティの役割と構成すべきプロパティを説明します。

  ![選択した Assign アクティビティを説明する AkaNinja](/static/img/dev-guidelines-example-akaninja.png)
- [akaBot Academy](https://akademy.akabot.com/courses) ではコースを提供しており、[コミュニティ フォーラム](https://community.akabot.com/)では他の akaBot ユーザーに質問できます。
- akaBot サポート チーム ([support@akabot.com](mailto:support@akabot.com)) に問い合わせることもできます。

## 2. 基本的な開発ルール \{#2-basic-development-rules}

自分だけでなく、チームメンバー、レビュー担当者、管理者が読んで理解できるエージェントを構築してください。

### 2.1. プロジェクト \{#21-project}

- すべてのプロジェクトには、ルート フォルダーに `Main.xaml` という名前のファイルが必要です。このファイルはプロジェクトのエントリ ポイントです。公開したプロジェクトを akaBot センターまたはエージェントから実行すると、実行は `Main.xaml` から開始されます。`Main.xaml` が存在しない場合、ワークフロー アナライザーはエラーとして報告します (`ST-ANA-006`)。
- メイン ワークフローの名前が異なる場合は、`Main.xaml` に名前を変更するか、**プロジェクト** パネルで右クリックして **メインとして設定** を選択します。

![ワークフロー アナライザーの Main Workflow Exists ルール](/static/img/st-ana-006.png)

- プロジェクトを作成するときは、名前と説明を入力します。説明は必須で、250 文字以内で入力します。プロジェクトを公開すると、akaBot センターの **パッケージ** ページの **説明** 列に表示されるため、プロセスの内容を要約して記載してください。

![名前、場所、説明のフィールドがある新規プロジェクト ウィンドウ](/static/img/image-20220506161409-4.png)

#### プロジェクト名のルール \{#project-name-rules}

プロジェクト名は、プロジェクトを公開するときにパッケージ ID になります。そのため、Studio はプロジェクトの作成時に、NuGet のパッケージ ID のルールに照らして名前をチェックします。プロジェクト名は、次のルールに従う必要があります。

- 使用できるのは、文字、数字、アンダースコア (`_`)、ピリオド (`.`)、ハイフン (`-`) のみです。
- 半角、全角を問わず、スペースは使用しないでください。
- 名前の先頭と末尾にピリオドやハイフンを使用しないでください。
- `..`、`--`、`.-` を連続して使用しないでください。
- 50 文字以内にしてください。

| 有効な名前 | 無効な名前 |
| --- | --- |
| `Invoice_Check` | `Invoice Check` (スペースを含む) |
| `RPA00301-1` | `-Invoice` (ハイフンで始まる) |
| `Invoice.Check_01` | `Invoice..Check` (ピリオドが 2 つ連続している) |
| | `請求書、チェック` (日本語の句読点 `、` を含む) |

「文字」には、英語以外の文字も含まれます。Studio は、`Hóa_Đơn_Kiểm_Tra` のようなベトナム語の発音区別符号を含む名前や、`請求書チェック` のような日本語の文字を含む名前を受け付けます。これらの言語の句読点 (`、` や `。` など) は受け付けられません。名前はパッケージ ID やファイル パスにも使用されるため、たとえば `HoaDon_KiemTra` のように、発音区別符号のない英字を使用することをお勧めします。ご自身の言語での名前は、代わりに説明に記載してください。

#### 推奨される命名形式 \{#recommended-naming-format}

Studio は命名形式を強制しません。プロジェクトを探しやすく、レビューしやすく、レポートしやすくするために、組織内で 1 つの形式を取り決めてください。

**必須:** すべてのプロジェクトに、組織の命名形式で名前を付けてください。組織にまだ命名形式がない場合は、次の形式を使用してください。

`Department_Team_ID_ProcessName_AgentType`

| 部分 | 例 | 備考 |
| --- | --- | --- |
| Department | `SLS` | 部門の短縮コード |
| Team | `SLS1` | チームの短縮コード |
| ID | `0001` | 自動化リストにおけるプロセス ID |
| ProcessName | `DailyReport` | プロセスの内容 (PascalCase) |
| AgentType | `AA` または `UA` | 有人エージェントは `AA`、無人エージェントは `UA` |

例: `SLS_SLS1_0001_DailyReport_AA`。名前は 50 文字以内にしてください。また、プロジェクトを公開した後に名前を変更しないでください。新しい名前で akaBot センターに新しいパッケージが作成されるためです。

### 2.2. ワークフロー \{#22-workflow}

#### ワークフローの種類を選択する \{#choose-the-workflow-type}

| 種類 | 使用する場合 |
| --- | --- |
| **Sequence** | プロセスが線形で、1 つのアクティビティから次のアクティビティへと進む場合。 |
| **Flowchart** | ビジネス ロジックが複雑で、判断や複数の分岐が必要な場合。 |
| **State Machine** | プロジェクトが非常に大規模で、遷移条件によって切り替わる多数の状態がある場合。 |

3 つの種類はすべて、**ホーム**タブの **新規** ボタンから作成できます。

![Sequence、Flowchart、State Machine がある新規メニュー](/static/img/dev-guidelines-new-menu.png)

プロセスに複数の分岐やループがある場合は、**Flowchart** を使用してください。多数の分岐やループがある **Sequence** も正しく実行されますが、読みにくく、保守が困難になります。

たとえば、次の Flowchart には赤枠で示した 2 つの判断があります。これらの判断により、プロセスは Success、Business Rule Exception、System Error の 3 つの分岐に分かれます。

![2 つの判断が Success、Business Rule Exception、System Error に分岐する Flowchart](/static/img/dev-guidelines-example-flowchart.png)

#### ワークフローを浅く、モジュール化して保つ \{#keep-workflows-shallow-and-modular}

**必須:** アクティビティを 7 階層を超えてネストしないでください。

深くネストされたロジックは、読みにくく、テストと保守が困難です。複雑なロジックは小さなワークフローに分割し、**Invoke Workflow File** アクティビティで呼び出してください。ワークフロー アナライザーは、既定で次の制限をチェックします。値は **分析設定** で変更できます。

| チェック対象 | ルール ID | 既定値 |
| --- | --- | --- |
| 相互にネストされたアクティビティ | `ST-MRD-009` | 7 階層 |
| 相互にネストされた `If` アクティビティ | `ST-MRD-007` | 3 階層 |
| Flowchart のレイヤー | `ST-DBP-007` | 1 レイヤー |
| 1 つのワークフロー内の引数 | `ST-DBP-002` | 20 |
| プロジェクト内のワークフロー ファイル | `ST-ANA-003` | 情報のみ、制限なし |

![Flowchart Nesting ルールと MaxLayers パラメーター](/static/img/st-dbp-007.png)

ワークフローが 1 つか 2 つしかないプロジェクトは、デバッグしにくい 1 つの大きなファイルになる可能性があります。一方、小さなワークフローが数十個あるプロジェクトは、追跡しにくくなる可能性があります。ワークフローの数は、コード レビューの際の参考として使用してください。

### 2.3. アクティビティ \{#23-activity}

- **各アクティビティに意味のある表示名を付けます。** `Click` や `Type Into` のような既定の名前をそのまま使用しないでください。`Click Login Button` や `Enter Username` のように、プロセスにおけるアクティビティの役割を記述します (`ST-MRD-002`)。このルールは、既定では `Sequence`、`Flowchart`、`StateMachine` をチェックしません。この一覧は **ExcludedActivities** パラメーターで変更できます。

  ![ExcludedActivities パラメーターがある Activity Naming ルール](/static/img/st-mrd-002.png)

  | 避ける | 代わりに使用する |
  | --- | --- |
  | `Click` | `Click Login Button` |
  | `Assign` | `Set Report Date` |
  | `Type Into` | `Enter Employee ID` |
  | `Sequence` | `Log In to Attendance System` |
  | `Excel Application Scope` | `Read Weekly Attendance File` |
- **ワークフロー内の各アクティビティに一意の表示名を付けます** (`ST-NMG-004`)。
- **各 Sequence と Flowchart に注釈を追加し**、表示名に加えて、その処理内容を簡潔に記述します。
- **必須:** 1 つの Sequence に含めるアクティビティは 30 個以下にしてください。それより長い Sequence は追いにくくなります。一部を別のワークフローに移し、**Invoke Workflow File** で呼び出してください。
- **不要なものを削除します。** ワークフロー アナライザーは、次のケースを報告します。
  - 子アクティビティがない `Sequence` (`ST-MRD-008`)。
  - アクティビティが 1 つだけの `Sequence` (`ST-MRD-005`)。
  - `Then` と `Else` の両方の分岐が空の `If` (`ST-MRD-017`)。
  - 実行可能なアクティビティがないワークフロー ファイル (`ST-DBP-023`)。

  不要になったものは削除するか、ロジックを完成させてください。意図的に分岐を空にする場合は、その理由を説明する `Comment` アクティビティを追加してください。

#### 修正が必要な例 \{#examples-to-fix}

次のワークフローでは、赤枠で示したアクティビティが **Get Agent Credential**、**Convert SecureString**、**Select File** などの既定の名前のままになっています。これらの名前では、プロセスにおける各アクティビティの役割がわかりません。たとえば `Get Login Credential` のように、それぞれ名前を変更してください。

![アクティビティが既定の表示名のままになっている Sequence](/static/img/dev-guidelines-example-default-names.png)

次のワークフローでは、メインの Sequence に注釈がなく、その中の Flowchart が既定の名前のままになっています。ワークフローの処理内容を記述する注釈を追加し、Flowchart にはそのロジックを表す名前を付けてください。

![注釈がなく、Flowchart が既定の名前のままになっているワークフロー](/static/img/dev-guidelines-example-no-annotation.png)

### 2.4. 変数と引数 \{#24-variables-and-arguments}

**必須:** すべての変数と引数に、保持する内容がわかる名前と、組織で取り決めたプレフィックスを付けてください。`a`、`temp`、`test` のような名前は避けてください。

名前、メール アドレス、コメントなどの短いテキストには `String` を、数値には `Int32` を使用します。アクティビティが必要とする場合は、`Boolean` や `DataTable` などの他の型を使用します。

#### 変数 \{#variables}

| ルール | ルール ID | 既定 |
| --- | --- | --- |
| 変数名が命名規則に従っている。 | `ST-NMG-001` | プレフィックス `v_` (例: `v_Result`)。Regex は既定では空で、構成できます。 |
| DataTable 変数の名前が `dt_` で始まる。 | `ST-NMG-009` | プレフィックス `dt_` (例: `dt_EmployeeData`)。 |
| 変数名が長すぎない。 | `ST-NMG-008` | 20 文字 |
| 変数が引数と同じ名前を共有していない。 | `ST-NMG-006` | — |
| 内側のスコープの変数が、外側のスコープの変数の名前を再利用していない。 | `ST-NMG-005` | — |

プレフィックスと Regex は、組織の規則に合わせて **分析設定** で変更できます。たとえば、`str_`、`int_`、`bool_`、`list_`、`dict_` のように、データ型ごとのプレフィックスを使用できます。

![Regex と Prefix パラメーターがある Variable Naming ルール](/static/img/st-nmg-01.png)

#### 引数 \{#arguments}

引数名は 30 文字を超えないようにしてください (`ST-NMG-016`)。引数を作成するときは、方向として **In**、**Out**、**In/Out**、**Property** のいずれかを選択します。

![方向リストがある引数パネル](/static/img/dev-guidelines-arguments-panel.png)

#### 式の言語 \{#expression-language}

akaBot Studio は、プロジェクトの式の言語として VB.NET と C# の両方をサポートしています。C# プロジェクトについては、[C# 式エディターと IntelliSense](./csharp-expression-editor.md) を参照してください。

### 2.5. 認証情報と機密データ \{#25-credentials-and-sensitive-data}

**必須:** ID とパスワードをワークフローに直接入力しないでください。認証情報ストアに保存し、実行時に取得してください。akaBot Studio では、次のオプションを利用できます。

| オプション | 仕組み |
| --- | --- |
| **akaBot センターのアセット** | タイプが **Credential** のアセットに、ユーザー名とパスワードを保存します。センターに保存された認証情報は AES 256 アルゴリズムで暗号化され、その値を開発者に対して非表示にできます。**Get Agent Credential** アクティビティは、アセット名で認証情報を取得し、ユーザー名を `String`、パスワードを `SecureString` として返します。[アセット](/docs/center/latest/user-guide/how-to-use-by-function/operation-functions/assets.md)を参照してください。 |
| **Windows 資格情報マネージャー** | **Add Credential** アクティビティで認証情報を保存します。**Get Secure Credential** アクティビティは、ターゲット名で認証情報を取得し、ユーザー名を `String`、パスワードを `SecureString` として返します。これらのアクティビティは **Core > Credentials** にあります。[認証情報](/docs/activities/core/latest/credential/credential.md)を参照してください。 |
| **SecureString** | `System.Security.SecureString` 型は、機密テキストをメモリ内に保持します。アプリケーションに入力するには、**Type Secure Text** アクティビティを使用します。 |

エージェントの種類に応じて、ストアを選択してください。

| エージェント | 推奨ストア | 理由 |
| --- | --- | --- |
| **無人 (Unattended)** | akaBot センターの Credential アセットと **Get Agent Credential** | 認証情報を 1 か所で管理でき、その値を開発者に対して非表示にでき、各エージェント マシンで設定する必要がありません。 |
| **有人 (Attended)** | Windows 資格情報マネージャーと **Get Secure Credential** | 各ユーザーが、自分のマシンに自分の認証情報を保持します。 |

Windows 資格情報マネージャーの認証情報は、1 台のマシン上の 1 人の Windows ユーザーに属します。無人エージェントがその認証情報を読み取れるのは、そのマシン上で、エージェントが実行されている Windows アカウントで作成された場合のみです。

akaBot センターで Credential アセットを作成するには、**アセット** ページを開き、**新規作成** をクリックして、タイプとして **Credential** を選択します。

![akaBot センターの新規アセット作成ウィンドウ](/static/img/8eaeee_image-20221101105313-7.png)

機密性の高い値を扱う際は、次のルールに従ってください。

- パスワードは `SecureString` 型で保持してください。**Get Credential** はパスワードをプレーンな `String` として返すため、**Get Credential** の代わりに **Get Secure Credential** を使用してください。
- 名前に機密性の高いキーワードを含む引数と変数には、`SecureString` 型を使用してください。既定では、ワークフロー アナライザーは `password`、`secret`、`token`、`credential`、`pass`、`apikey` をチェックします。違反は **エラー** として報告されます (引数は `ST-SEC-007`、変数は `ST-SEC-008`)。キーワードの一覧は、ルールの **Keywords** パラメーターで編集できます。
- 認証情報を含む変数は、可能な限り最も狭いスコープで定義してください。
- 認証情報をあるワークフローから別のワークフローへ渡すために、引数を使用しないでください。
- 認証情報や個人データを扱うアクティビティで **Public** を選択しないでください。[ログに含まれる内容](#what-the-logs-contain)を参照してください。

![Keywords パラメーターがある SecureString for Sensitive Variables ルール](/static/img/st-sec-008.png)

#### 例 \{#examples}

**推奨:** 認証情報ストアから認証情報を取得します。次のワークフローは、まず akaBot センターから Credential アセットを取得します。それに失敗した場合は、Windows 資格情報マネージャーから認証情報を取得します。ワークフローには ID もパスワードも記述されていません。

![最初に akaBot センターから、次に Windows 資格情報マネージャーから認証情報を取得するワークフロー](/static/img/dev-guidelines-example-credential-store.png)

**避ける:** 次の例には、赤枠で示した 2 つの誤りがあります。

- ユーザー名とパスワードが、`in_username` 引数と `in_password` 引数の既定値として入力されています。
- パスワードが `String` 変数 `NewPass` に変換され、**Message Box** に表示されています。

![引数の既定値として入力されたユーザー名とパスワード、および Message Box に表示されたパスワード](/static/img/dev-guidelines-example-hardcoded-credentials.png)

### 2.6. ログとエラー処理 \{#26-logging-and-error-handling}

- エージェントの動作を記録するには、**Log Message** を使用します。レベルは `Trace`、`Info`、`Warn`、`Error`、`Fatal` の 5 つです。ログ メッセージは akaBot センターにも送信され、**ログ** ページに表示されます。そのため、メッセージに機密データを含める前に、データ セキュリティを考慮してください。

  ![レベルとメッセージのフィールドがある Log Message アクティビティ](/static/img/b26e3e_image-20220505092805-1.jpeg)
- 各ワークフローに、少なくとも 2 つの **Log Message** アクティビティを追加します (`ST-USG-020`、`MinLogs` の既定値は 2)。開始時、終了時、重要な判断の箇所でログを記録してください。

  ![MinLogs パラメーターがある Minimum Log Messages ルール](/static/img/st-usg-020.png)

  たとえば、次のワークフローは、開始時と終了時に Log Message を書き込みます。各メッセージにはワークフロー ファイル名が含まれているため、ログで実行を追跡できます。

  ![開始時と終了時に Log Message があるワークフロー](/static/img/dev-guidelines-example-start-end-logs.png)
- `Catch` ブロックを空のままにしないでください (`ST-DBP-003`)。空の `Catch` はエラーを隠してしまい、エージェントは痕跡を残さずに失敗します。少なくとも **Log Message** アクティビティを追加して、エラーの詳細を記録してください。
- 既定では、ログには `Info` レベル以上のメッセージが表示されます。より詳細な情報を確認するには、**エージェント設定** を開き、**センター** タブを選択して **ログ レベル** を変更します。たとえば `Verbose` レベルでは、**Log Message** で `Trace` レベルで書き込んだメッセージも含まれます。[エージェント ログ](/docs/agent/latest/user-guide/logs.md)を参照してください。
- ログ ファイルが格納されているフォルダーを開くには、**ホーム**タブの **ログを開く** をクリックします。ログ ファイルは `%localappdata%\akaBot\Logs\` に保存されます。

#### ログに含まれる内容 \{#what-the-logs-contain}

| ログ エントリ | レベル | 含まれる内容 |
| --- | --- | --- |
| **Log Message** | 選択したレベル (既定は `Info`) | **Message** プロパティのテキストが、記述したとおりに記録されます。メッセージ内のどの部分もマスクされません。 |
| 各アクティビティの開始と終了 | `Verbose` | アクティビティの表示名と状態 (例: `Click Login Button Executing` や `Closed`)。アクティビティが **Public** でない限り、値は含まれません。 |
| **Public** アクティビティの開始と終了 | `Verbose` | アクティビティのすべての入力引数と出力引数の値、およびそのスコープ内のすべての変数の値。 |
| ワークフローを停止させるエラー | `Error` | アクティビティのエラー メッセージ。プロパティ値は自動的には追加されませんが、一部のアクティビティのエラー メッセージには、URL やファイル パスなどの値が含まれます。 |

すべてのログ エントリには、プロセス名とバージョン、ジョブ ID、エージェント名、マシン名、Windows ユーザー、ワークフロー ファイル名に加えて、**Add Log Fields** で追加したフィールドも含まれます。

**Public** は、すべてのパッケージのすべてのアクティビティにあるオプションです。これを選択すると、Studio はアクティビティの表示名の前に `Public: ` を追加します。**Public** アクティビティの値は `Verbose` レベルで書き込まれるため、ログ レベルが `Verbose` の場合にのみログに記録されます。

次の点に注意してください。

- akaBot は、名前に基づいて値を隠すことはしません。`password` という名前の `String` 変数は、そのまま書き込まれます。`SecureString` の値は、読み取り可能な形式では書き込まれません。
- akaBot エージェントは、ログ エントリを書き込まれたとおりに akaBot センターへ送信します。その内容をマスクしたりフィルターしたりすることはありません。

### 2.7. 避けるべきこと \{#27-practices-to-avoid}

エージェントがエラーに遭遇したときに、セキュリティ インシデントや重大な障害が発生するリスクを減らすために、次のことは避けてください。

#### 機密情報や個人データをログに書き込まない \{#do-not-write-confidential-information-or-personal-data-to-logs}

**必須:** 機密情報や個人データをログに書き込むと、セキュリティ インシデントにつながる可能性があります。パスワード、トークン、個人データを **Log Message** に含めないでください。また、それらを扱うアクティビティで **Public** オプションを選択しないでください。[認証情報と機密データ](#25-credentials-and-sensitive-data)および[ログに含まれる内容](#what-the-logs-contain)を参照してください。

危険なログ メッセージの例:

| メッセージ | 問題 |
| --- | --- |
| `"Login: " + v_UserName + " / " + v_PasswordText` | パスワード (機密情報) を書き込んでいる |
| `"Customer: " + v_FullName + ", phone: " + v_Phone` | 個人データを書き込んでいる |

#### 不要なログを大量に出力しない \{#do-not-output-large-amounts-of-unnecessary-logs}

ログは、プロセスがどのように実行されたかを確認し、インシデントを調査するために使用されます。特にループ内では、不要なログ メッセージを書き込みすぎないようにしてください。

#### 承認、提出、メール送信を自動化しない \{#do-not-automate-the-approval-submission-or-sending-of-an-email}

**必須:** 自動化の範囲は、承認、提出、またはメール送信の直前のステップまでに限定してください。最終ステップは人が実行します。これにより、エージェントが何らかの理由で失敗した場合に、重大なインシデントが発生するリスクを抑えられます。

たとえば、顧客にメールを送信するプロセスでは、エージェントは次のステップを行い、メールは人が送信します。

1. Excel ファイルからデータを読み取る。
2. システム内のデータを確認し、取得する。
3. 顧客宛てのメールを作成する。

#### バックアップなしでファイルを直接更新しない \{#do-not-update-a-file-directly-without-a-backup}

**必須:** 対象ファイルを編集または更新する前に、たとえば **Copy File** アクティビティなどでバックアップ コピーを作成してください。処理エラーが発生した場合に、ファイルを元の状態に復元できます。

## 3. 高度な開発ルール \{#3-advanced-development-rules}

基本ルールに慣れてくると、それらでは対応できないケースに遭遇することがあります。そのようなケースは、これらの高度なルールの範囲内で構築してください。

### 3.1. 要素の待機と特定 \{#31-waiting-for-and-locating-elements}

#### 固定の遅延を避ける \{#avoid-fixed-delays}

固定の **Delay** は、オートメーションを脆弱にする可能性があります (`ST-DBP-026`)。代わりに、条件を待機してください。たとえば、Native Browser パッケージには **Wait Element Vanishes**、**Wait Page Load Complete**、**Wait Page Title**、**Wait Page URL**、**Wait Web Attribute** があり、**Element Exist** アクティビティは要素が存在するかどうかを確認します。

**Delay** を使用せざるを得ない場合は、時間をアクティビティに直接入力しないでください (`ST-PRR-004`)。変数、引数、または構成ファイルに保存して、ワークフローを編集せずに、テストと本番で異なる値を使用できるようにしてください。

**避ける:** 次のワークフローでは、各ステップの前に 5 秒間の固定の **Delay** が実行されます。アプリケーションの処理が遅い場合、5 秒では足りないかもしれません。処理が速い場合、待機時間は無駄になります。

![各ステップの前に固定時間の Delay アクティビティがある](/static/img/dev-guidelines-example-fixed-delay.png)

**推奨:** 次のワークフローでは、**Element Exist** アクティビティがログイン フォームを確認し、**If** アクティビティはフォームが存在する場合にのみ処理を続行します。

![Element Exist アクティビティと、その結果を確認する If アクティビティ](/static/img/dev-guidelines-example-element-exists.png)

#### 画像認識を避ける \{#avoid-image-recognition}

**Image Click** や **Image Found** など、画像で要素を検索するアクティビティは、セレクターを使用するアクティビティに比べて安定性が低くなります。画像の精度を上げると改善しますが、不安定さがなくなるわけではありません。既定のセレクターで要素が見つからない場合は、まず [UI Explorer](./how-to-use-UI-Explorer.md) でセレクターを調整し、他に方法がない場合にのみ画像認識を使用してください。

#### 値をハードコードしない \{#do-not-hard-code-values}

ファイル パス、URL、しきい値をアクティビティに直接入力しないでください。構成ファイルまたは akaBot センターのアセットに保存して、ワークフローを編集せずにエージェントを別の環境へ移行できるようにしてください。

| 次の代わりに | 次を使用する |
| --- | --- |
| **Image Click**、**Image Found** | UI Explorer で調整したセレクター |
| 固定の **Delay** (例: 3 秒) | **On Element Appear**、**Wait Element Exist**、または **Wait Page Load Complete** |
| アクティビティに入力したパス、URL、しきい値 | 構成ファイル、または akaBot センターのアセット |

#### 適切なセレクターの種類を選択する \{#choose-the-right-selector-type}

画面上の要素を指定すると、Studio は複数の種類のセレクターを生成できます。複数の種類を有効にすることもできます。実行時に、Studio はそれらを順番に試し、最初のセレクターで要素が見つからない場合は次のセレクターにフォールバックします。

![選択オプション ウィンドウ](/static/img/selection-options.png)

| セレクターの種類 | 使用する場合 |
| --- | --- |
| **Strict selector** | アプリケーションの構造がクリーンで安定しており、信頼できる属性がある場合。最も高速で、最も正確な方法です。 |
| **Fuzzy selector** | 要素の属性にわずかな違いや動的なトークンがある場合。0.4 から 1.0 (既定は 0.5) の **精度** の値を使用して、属性を比較します。 |
| **Image** | 要素にアクセス可能な技術的属性がない場合、または仮想化、キャンバス、リモート デスクトップ環境にある場合。0.5 から 1.0 (既定は 0.8) の **精度** の値を使用します。 |
| **CV selector** | 要素ツリーを利用できない Citrix、リモート デスクトップ、または画像中心のインターフェイスを自動化する場合。 |
| **Semantic selector** | Web ページが頻繁に変更される場合。`Button Save` のように、要素を平易な英語で記述します。 |

セマンティック セレクターには、Computer Vision (CV) サーバーへの接続が必要です。システム管理者がプロジェクト フォルダー内の `cvsettings.json` ファイルにサーバー アドレスを設定し、アクティビティを **Open/Attach Application** または **Open/Attach Browser** スコープ内に配置する必要があります。

詳細については、[セレクター ガイド](/docs/activities/common/latest/user-guide/selector-guide.md)、[セマンティック セレクターの使用開始](/docs/activities/common/latest/user-guide/semantic-selector-howto.md)、[UI Explorer の使い方](./how-to-use-UI-Explorer.md)を参照してください。

### 3.2. ワークフロー アナライザーでプロジェクトをチェックする \{#32-check-your-project-with-workflow-analyzer}

ワークフロー アナライザーは、ワークフローを実行せずに分析します。開発中は定期的に実行し、公開する前にはプロジェクト全体に対して実行してください。

1. まず、すべてのアクティビティの検証エラーを解決します。ワークフロー アナライザーは、有効なワークフローのみを分析できます。
2. **ホーム**タブで **分析** をクリックし、**ファイルを分析**、**プロジェクトを分析**、**分析設定** のいずれかを選択します。
3. **分析結果** ウィンドウで結果を確認します。結果をフィルターしたり、レポートを HTML または CSV 形式でエクスポートしたりできます。

![分析結果ウィンドウ](/static/img/managing-errors.png)

![akaBot Studio の分析メニュー](/static/img/about-workflow-analyzer.png)

**必須:** ワークフロー アナライザーが **エラー** を報告している間は、プロジェクトを公開しないでください。

各ルールには重大度があります。

| 重大度 | 意味 |
| --- | --- |
| **エラー** | プロジェクトを実行、公開、またはデプロイする前に解決してください。 |
| **警告** | コードの品質または保守性に関する推奨される改善事項です。 |
| **情報** | 参考情報のガイダンスです。 |

既定では、すべてのルールが有効です。akaBot Studio 3.2.4.0 では、次のルールが既定で **エラー** として報告されます。それ以外のルールは **警告** または **情報** として報告されます。

| ルール ID | ルール |
| --- | --- |
| `ST-ANA-006` | Main Workflow Exists |
| `ST-SEC-007` | SecureString for Sensitive Arguments |
| `ST-SEC-008` | SecureString for Sensitive Variables |
| `ST-USG-014` | Package Restrictions |

**分析設定** で、ルールの有効化と無効化、重大度の変更、パラメーターの変更ができます。

![重大度のドロップダウンがあるルール一覧](/static/img/severity-levels.png)

ルールの全一覧については、[ワークフロー アナライザー ルール](./workflow-analyzer/analyze-rules.md)を参照してください。コマンド ラインから分析を実行するには、[ワークフロー アナライザーについて](./workflow-analyzer/about-workflow-analyzer.md)を参照してください。

### 3.3. デバッグと公開 \{#33-debug-and-publish}

- 公開する前に、Studio がインストールされているマシンでプロジェクトをデバッグしてください。[デバッガーの使い方](./how-to-use-debugger.md)を参照してください。

![ブレークポイント、ステップ イン、ステップ オーバー、スロー ステップのアクションがあるデバッグ タブ](/static/img/debug-actions-ribbon.png)

- **ホーム**タブからプロジェクトを公開します。公開先は **センター** または **ローカル** を選択できます。センターに公開する場合は、Studio とエージェントがセンターに接続されており、アカウントに必要な権限が付与されている必要があります。リリース ノートを追加でき、バージョンは自動的に生成されます。バージョンを編集する場合は、`x.x.x.x` の形式で、現在のバージョンより大きい値にする必要があります。[akaBot Studio の使い方](./how-to-use.md#publish-package)を参照してください。

![公開先、新しいバージョン、リリース ノートのフィールドがある公開ウィンドウ](/static/img/image-20230413154502-2.png)

## 4. 業務プロセスの整理 \{#4-organizing-the-business-process}

エージェントを構築する前に、現在人が行っている業務を整理し、そのうちエージェントが担当する部分を決定してください。事前に整理されていないプロセスは、開発の妨げとなり、運用でエラーを引き起こすことが少なくありません。

### 4.1. プロセスを自動化リストに登録する \{#41-register-the-process-in-your-automation-list}

自動化するプロセスの情報を書き出し、組織の自動化リストに登録します。このリストは、組織全体でのエージェントの使用状況を報告するためにも使用されます。

**必須:** 自動化リストに登録され、自動化チーム (CoE) の管理下に置かれる前に、エージェントを本番環境で実行しないでください。テスト実行は例外です。

エントリの例:

| 項目 | 例 |
| --- | --- |
| エージェント ID | `01` |
| エージェント名 | `SLS_SLS1_0001_Attendance_AA` |
| プロセス | 勤務時間を確認し、残業が上限に近づいたら警告する |
| 入力 → 出力 | 勤怠データ → メール |
| ユーザー | 営業部 1 |
| スケジュール | 毎週 9:00 |
| システム | Chrome (勤怠システム) |
| ステータス | 開発中 |

### 4.2. プロセス フローを描く \{#42-draw-the-process-flow}

開発する前に、紙、Excel、または PowerPoint にプロセス フローを描いてください。

- 各分岐とループの条件を明確にします。条件が不明確な場合は、自分で決定するか、上長に確認してください。
- エージェントが行うステップと、人が行うステップを分けます。

たとえば、請求書プロセスでは、エージェントが請求書ファイルが存在するかを確認し、請求書 CSV を読み取り、システムにデータを入力します。人が内容を確認し、メールを送信します。請求書ファイルがない場合、エージェントはログ エントリを書き込んで停止します。

プロフェッショナル プロジェクトの場合は、プロセス定義書 (PDD) にプロセスを詳細に記述してください。レベル 1 のプロジェクトでは、簡単なフローで十分です。

## 関連トピック \{#related-topics}

- [akaBot Studio の使い方](./how-to-use.md)
- [ワークフロー アナライザー ルール](./workflow-analyzer/analyze-rules.md)
- [デバッガーの使い方](./how-to-use-debugger.md)
- [セレクター ガイド](/docs/activities/common/latest/user-guide/selector-guide.md)
