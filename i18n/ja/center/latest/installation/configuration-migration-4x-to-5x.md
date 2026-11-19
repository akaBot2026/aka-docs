---
id: configuration-migration-4x-to-5x
title: "4.x から 5.x への設定移行"
sidebar_label: "設定移行（4.x から 5.x）"
sidebar_position: 23
description: "Akabot Center の設定を 4.x から 5.x へ確認・移行します。プロパティ名の変更、リテンション、HA、オプションの AI 連携を含みます。"
displayed_sidebar: centerSidebar
---

# 4.x から 5.x への設定移行

> 本ガイドでは、**Akabot Center 4.0.0.14** を **5.0.0.0、5.0.0.1、5.0.0.2、5.0.0.4、5.0.0.5、5.1.0.0、または 5.1.0.1** にアップグレードする際に確認すべき設定変更を示します。まず共通の変更を適用し、次に対象バージョンと有効にする機能に応じた設定を適用してください。

サーバーのインストール、ソフトウェアの前提条件、新しい Windows サーバーへのデータ移行については、[サーバー移行と 5.x へのアップグレード](/docs/center/latest/installation/migrate-server-upgrade-5x.md)を参照してください。

## **1. 設定の準備**

1. 対象バージョンを正確に確認します。5.0 系で追加された設定が 5.1 系に含まれるとは限りません。
2. データベース、ライセンス、ワークフローファイル、既存の `application.yml`、`application-dev.yml`、`application-prod.yml` をバックアップします。外部設定ファイルとサービスオプションも含めます。
3. **対象 V5 パッケージ**に同梱された設定を起点にします。V5 のファイルを V4 のファイルで丸ごと置き換えるのではなく、V4 の環境固有の値をマージしてください。
4. `application.yml` またはサービスの Java オプションで、有効な Spring プロファイルを確認します。本番用の値は、そのプロファイルで実際に読み込まれる設定に適用します。
5. 環境のデータベース URL と認証情報、ブローカーと Redis の接続、サービス URL、ストレージパス、シークレット参照を維持します。サンプル値が変更されていても、既存の認証情報やデータベースエンジンを変更する必要はありません。

WAR デプロイの場合、同梱の設定は Tomcat ディレクトリの `webapps\ROOT\WEB-INF\classes\config` にあります。設定を外部から読み込んでいる場合は、その設定も更新してください。

**注意:** 同梱の V5 の値が要件を満たさない場合にのみ、設定を追加または上書きします。以下の YAML 例は設定の断片です。トップレベルのキーを重複させたり、関係のない設定を置き換えたりせずに、既存のセクションにマージしてください。

[**設定の詳細一覧**](#cau-hinh) · [**バージョン別の変更**](/docs/center/latest/installation/configuration-changes-5x.md#thay-doi) · [V4 からの直接アップグレード](#phien-ban)。

<a id="cau-hinh"></a>

## **2. 設定の詳細一覧**

この表は、V4 から V5 へのアップグレード時に確認すべき YAML 設定を、変更内容、適用バージョン、更新手順とともにまとめたものです。デプロイ環境に条件が一致する変更のみを適用してください。

**表の凡例:** Configuration Key (V5) 列には対象のプロパティのみを記載します。削除された宣言で代替キーが確認されていないものは `—` で示し、V4 のキーは変更前後の列に残します。代替キーが確認されている場合は明記します。適用バージョン列には本ガイドの対象バージョンを記載しており、後続の系列がすべての変更を引き継ぐことを前提としていません。

**必須（Required）** 列は、キー名が変更されたかどうかではなく、アップグレード時に対応が必要かどうかを示します。

- **条件付き:** 更新条件に一致し、かつ対象 V5 のプロファイル/設定がその要件をまだ満たしていない場合にのみ更新します。互換性のない上書き、実際のデータベース設定、HA/AI、必要な監視動作が該当します。キー名が変更されていても、同梱の値が適切であれば新たに宣言する必要はありません。
- **必須（確認）:** 同梱の dev/prod プロファイルはクリーンアップを有効にしているため、初回起動前にワークフローリテンションを確認します。適切であれば値を維持し、クリーンアップが許可されない場合のみ変更します。必須なのは確認であり、無条件に値を変更することではありません。
- **不要:** アップグレードのためだけに必須となる変更はありません。適切な値を維持します。オプションのチューニング、社内ヘルプ URL、推奨される旧設定の整理は引き続き記載しています。既存の有効な環境固有の設定は維持する必要があります。

キーやサンプル値が変更されたというだけで、すべてのデプロイで値の変更が必要になる行はありません。有効なプロファイルと外部の上書きをあわせて確認してください。ベース YAML の値は、dev/prod ファイル、環境変数、サービスオプションによって上書きされることがあります。

旧宣言については、記載された移行手順に従って対象の YAML に合わせてください。この分類は、すべての旧キーが起動失敗を引き起こすことを意味するものではありません。オプションの値は、運用上異なる動作が必要になった場合に関係します。グループ化された行は、すべての設定を無条件に適用するのではなく、参照先の各設定の条件を確認してください。

| ID | Configuration Key (V5) | 目的 | 変更の種類 | アップグレード前後の設定 | 適用バージョン | 必須（Required） | 更新条件 | 更新手順 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="nen-tang"></a><a id="c001"></a>**C001** | `spring.cloud.gateway.server.webmvc.routes` | サービスへのリクエストをルーティングします | キー名の変更 | `spring.cloud.gateway.mvc.routes` → `spring.cloud.gateway.server.webmvc.routes`<br />既存のルートの URI、predicates、filters は変更されません。 | 本ガイド対象のすべての V5 バージョン | 条件付き | 外部設定が、維持すべき V4 のルートをまだ定義している場合。対象 V5 のルート一覧が適切であれば変更は不要です。 | 必要なルート一覧を `spring.cloud.gateway.server.webmvc.routes` に移し、URI、predicates、filters を維持します。5.1 で AI を使用する場合は、C066 に記載された AI ルートとフィルターもマージします。プロファイルでの上書きはルート一覧全体を置き換えます。 |
| <a id="c002"></a>**C002** | `spring.jpa.hibernate.naming.implicit-strategy` | JPA のテーブル名と列名の暗黙的な命名を定義します | 値の変更 | `org.springframework.boot.orm.jpa.hibernate.SpringImplicitNamingStrategy` → `org.springframework.boot.hibernate.SpringImplicitNamingStrategy` | 本ガイド対象のすべての V5 バージョン | 条件付き | 外部の上書きが V4 のクラスを明示的に参照している場合。対象 V5 パッケージには新しいクラスが同梱されています。 | 旧の上書きを `org.springframework.boot.hibernate.SpringImplicitNamingStrategy` に置き換えるか、同梱の値で要件を満たす場合は上書きを削除します。テーブルと列のマッピングを確認してください。 |
| <a id="c003"></a>**C003** | `spring.datasource.driverClassName` | Center がデータベース接続に使用する Java ドライバーを選択します。 | 値の変更 | org.mariadb.jdbc.Driver（同梱 YAML）→ com.mysql.cj.jdbc.Driver（同梱 YAML） | 本ガイド対象のすべての V5 バージョン | 条件付き | 既存のドライバーがデプロイ済みのデータベースと一致しない、または対象 V5 パッケージでサポートされていない場合。 | MySQL では `com.mysql.cj.jdbc.Driver` を使用します。MariaDB では `org.mariadb.jdbc.Driver` を、`jdbc:mariadb:` の URL および MariaDB の方言とあわせて使用します。その他のデータベースでは適切なドライバーを維持します。 |
| <a id="c004"></a>**C004** | `spring.datasource.password` | 本番データベースへの認証を行います。 | サンプル値の変更 | [本番サンプル値は非表示] → [変更後の本番サンプル値は非表示] | 本ガイド対象のすべての V5 バージョン | 不要 | 本番データベース接続を設定する場合。 | 実際の環境のパスワードは、シークレットストア/Vault で維持します。Git 上のサンプル値で置き換えないでください。 |
| <a id="c005"></a>**C005** | `spring.jpa.database-platform` | Hibernate がデータベースエンジンに使用する SQL 方言を選択します。 | 設定例の更新 | 変更なし: org.hibernate.dialect.MySQLDialect（dev/prod） | 本ガイド対象のすべての V5 バージョン | 条件付き | 設定された方言が、実際のデータベースまたは対象 V5 パッケージと互換性がない場合。方言を宣言しているだけでは変更は不要です。 | 実際のエンジンに対応する方言を維持します。V5 パッケージがサポートする方言を使用します（例: 該当エンジンでは `org.hibernate.dialect.SQLServerDialect` または `org.hibernate.dialect.OracleDialect`）。正しい方言を MySQL のサンプル値で置き換えないでください。 |
| <a id="c006"></a>**C006** | `spring.jpa.database` | JPA のデータベースタイプを指定します。 | 設定例の更新 | 変更なし: `MYSQL`（dev/prod） | 本ガイド対象のすべての V5 バージョン | 条件付き | 明示的に設定された JPA のデータベースタイプが、デプロイ済みのデータベースエンジンと一致しない場合。 | SQL Server では `SQL_SERVER`、Oracle では `ORACLE`、MySQL/MariaDB では `MYSQL` を使用します。サンプル YAML に合わせるためにデータベースエンジンを変更しないでください。 |
| <a id="c007"></a>**C007** | `management.prometheus.metrics.export.enabled` | 本番環境で Prometheus メトリクスをエクスポートします。 | 本番上書きキー名の変更 | 本番の上書き: `management.metrics.export.prometheus.enabled` → `management.prometheus.metrics.export.enabled`。<br />V4/V5 のベース YAML はすでに V5 のキーで `true` を使用しており、V5 の本番プロファイルが `false` に上書きします。 | 本ガイド対象のすべての V5 バージョン | 条件付き | 有効な V5 プロファイルの値が必要な監視設定と異なる場合、または必要な外部の本番上書きがまだ V4 のキーを使用している場合。 | ベース YAML は V4 と V5 の両方で `management.prometheus.metrics.export.enabled=true` を宣言しており、V5 の本番プロファイルが `false` に上書きします。必要な旧の本番上書きは V5 のキーに移行し、意図した値を維持します。同梱のプロファイル値が適切であれば維持します。キー名が変わっただけでは新たな宣言は不要です。 |
| <a id="c008"></a>**C008** | `management.endpoint.jhimetrics.access` | JHipster メトリクスエンドポイントへのアクセスを制御します。 | キーと値の型の変更 | `management.endpoint.jhimetrics.enabled` → `management.endpoint.jhimetrics.access`<br />`true`（有効フラグ）→ `unrestricted`（アクセスレベル） | 本ガイド対象のすべての V5 バージョン | 条件付き | 外部の V4 上書きで、同梱の V5 アクセスレベルとは異なるエンドポイントアクセスポリシーを維持する必要がある場合。 | 意図したポリシーを維持できる、対象バージョンがサポートするアクセスレベルで `management.endpoint.jhimetrics.access` を使用します。同梱の `unrestricted` はサンプルの enabled=true に相当します。以前無効化または制限していたエンドポイントにそのまま使用しないでください。SecurityConfiguration のエンドポイント認可は維持します。 |
| <a id="c009"></a>**C009** | `management.metrics.tags.application` | メトリクスにアプリケーションラベルを付与します。 | キー名の変更 | `management.health.tags.application` → `management.metrics.tags.application`<br />変更なし: `${spring.application.name}` | 本ガイド対象のすべての V5 バージョン | 条件付き | 外部の上書きで独自のアプリケーションメトリクスラベルを維持する必要がある場合。同梱のアプリケーション名ラベルを使う場合は宣言不要です。 | 独自のラベルが必要な場合は `management.metrics.tags.application` を使用します。`${spring.application.name}` で問題なければ、旧の名前空間が変わったという理由だけで上書きを追加せず、同梱の値を維持します。 |
| <a id="c010"></a>**C010** | `management.metrics.distribution.percentiles-histogram.all` | health 名前空間配下のヒストグラム宣言が削除されました。 | YAML から宣言を削除 | `management.health.distribution.percentiles-histogram.all` → V5 の YAML から宣言を削除。<br />`true`（同梱 YAML）→ 未宣言<br />必要な場合は、V4 と V5 の両方に存在する `management.metrics.distribution.percentiles-histogram.all` を使用します。 | 本ガイド対象のすべての V5 バージョン | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | `management.health` 配下のキーを削除します。ヒストグラムの設定が必要な場合は、V4 と V5 の両方に存在する `management.metrics.distribution.percentiles-histogram.all` を使用します。 |
| <a id="c011"></a>**C011** | `management.metrics.distribution.percentiles.all` | health 配下のパーセンタイル宣言が削除されました。 | YAML から宣言を削除 | `management.health.distribution.percentiles.all` → V5 の YAML から宣言を削除。<br />0, 0.5, 0.75, 0.95, 0.99, 1.0（同梱 YAML）→ 未宣言<br />必要な場合は、V4 と V5 の両方に存在する `management.metrics.distribution.percentiles.all` を使用します。 | 本ガイド対象のすべての V5 バージョン | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | `management.health` 配下のキーを削除します。パーセンタイルの設定が必要な場合は、V4 と V5 の両方に存在する `management.metrics.distribution.percentiles.all` を使用します。 |
| <a id="c012"></a>**C012** | — | HTTP リクエストの旧来の自動計測。 | YAML から宣言を削除 | `management.health.web.server.request.autotime.enabled`<br />`true`（同梱 YAML）→ 未宣言 | 本ガイド対象のすべての V5 バージョン | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除します。依存ライブラリの代替プロパティは確認されていません。新しいキーを独自に作らないでください。 |
| <a id="c013"></a>**C013** | — | リポジトリ操作の旧来の自動計測。 | YAML から宣言を削除 | `management.metrics.data.repository.autotime.enabled`<br />`true`（同梱 YAML）→ 未宣言 | 本ガイド対象のすべての V5 バージョン | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除します。リポジトリの自動計測の代替は確認されていません。 |
| <a id="c014"></a>**C014** | `management.health.elasticsearch.enabled` | Elasticsearch のヘルスチェックを有効または無効にします。 | YAML の並び替え | 変更なし: `false`（同梱 YAML） | 本ガイド対象のすべての V5 バージョン | 不要 | 更新は不要です。 | 適切であれば既存のキーと値を維持します。YAML の並び順が変わっただけで、有効な設定は変わりません。 |
| <a id="c015"></a>**C015** | `spring.jackson.datatype.datetime.WRITE_DATES_AS_TIMESTAMPS` | JSON の日付/時刻出力をタイムスタンプにするか文字列にするかを選択します。 | キー名の変更 | `spring.jackson.serialization.write_dates_as_timestamps` → `spring.jackson.datatype.datetime.WRITE_DATES_AS_TIMESTAMPS`<br />変更なし: `false`（同梱 YAML） | 本ガイド対象のすべての V5 バージョン | 条件付き | 外部の上書きで、同梱の false とは異なる JSON の日付/時刻出力を制御する必要がある場合、またはその上書きを維持する場合。 | 明示的な上書きを維持する場合は `spring.jackson.datatype.datetime.WRITE_DATES_AS_TIMESTAMPS` を使用し、必要な真偽値を維持します。文字列で出力する場合は `false` を維持します。同梱の値が適切であれば追加の宣言は不要です。クライアントとの JSON を確認してください。旧キーの互換性は確認されていません。 |
| <a id="c016"></a>**C016** | `spring.jackson.use-jackson2-defaults` | Jackson 3 の実行時に Jackson 2 互換のデフォルトを使用します。 | 追加 | 未宣言 → `true`（同梱 YAML） | 本ガイド対象のすべての V5 バージョン | 不要 | 同梱の V5 YAML を使用する場合、追加の宣言は不要です。 | Jackson 3 で Jackson 2 互換のデフォルトを使用するため、`true` を維持します。 |
| <a id="c017"></a>**C017** | `spring.jackson.serialization.INDENT_OUTPUT` | 開発環境で読みやすい JSON 整形を有効にします。 | キー表記の変更 | `spring.jackson.serialization.indent_output` → `spring.jackson.serialization.INDENT_OUTPUT`<br />変更なし: `true`（dev プロファイル） | 本ガイド対象のすべての V5 バージョン | 不要 | V4 から引き継いだ開発用の設定を別途管理している場合。 | `INDENT_OUTPUT` の V5 キーを使用します。値は `true` のままです。対象の依存ライブラリで旧表記が同等にバインドされるかは確認されていません。 |
| <a id="c018"></a>**C018** | `spring.servlet.encoding.charset` | HTTP レスポンスの文字セットを選択します。 | キー名の変更 | `server.servlet.encoding.charset` → `spring.servlet.encoding.charset`<br />変更なし: utf-8（同梱 YAML） | 本ガイド対象のすべての V5 バージョン | 条件付き | 別の本番用上書きが V4 のキーを使用しており、その文字セットを維持する必要がある場合。同梱の utf-8 を使う場合は新たな上書きは不要です。 | 維持する上書きのキー名を `spring.servlet.encoding.charset` に変更し、必要な文字セットを維持します。例に合わせるためだけに、意図的に設定した独自の文字セットを `utf-8` に置き換えないでください。 |
| <a id="c019"></a>**C019** | `spring.servlet.encoding.force-response` | HTTP レスポンスに設定した文字セットを強制します。 | キー名の変更 | `server.servlet.encoding.force-response` → `spring.servlet.encoding.force-response`<br />変更なし: `true`（同梱 YAML） | 本ガイド対象のすべての V5 バージョン | 条件付き | 別の本番用上書きが V4 のキーを使用しており、その force-response の動作を維持する必要がある場合。同梱の true を使う場合は新たな上書きは不要です。 | 維持する上書きのキー名を `spring.servlet.encoding.force-response` に変更し、必要な真偽値を維持します。同梱の本番値は `true` です。意図的に設定した false の上書きを、確認せずに置き換えないでください。 |
| <a id="c020"></a>**C020** | `spring.servlet.multipart.enabled` | マルチパートアップロードを有効にします。 | YAML に明示的な宣言を追加 | 未確認（V4 の YAML では未宣言）→ `true`（同梱 YAML） | 本ガイド対象のすべての V5 バージョン | 不要 | 同梱の V5 YAML を使用する場合、追加の宣言は不要です。 | マルチパートアップロードを有効にするため、`true` を維持します。同梱のファイル/リクエストサイズの上限は 200MB のままです。 |
| <a id="c021"></a>**C021** | — | 旧設定における HTTP パスのマッチング方式を選択します。 | YAML から宣言を削除 | `spring.mvc.pathmatch.matching-strategy`<br />ant_path_matcher（同梱 YAML）→ 未宣言 | 本ガイド対象のすべての V5 バージョン | 不要 | 別のファイルがまだ V4 のマッチャーキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除し、新しいマッチャーでワイルドカード URL をテストします。旧キーに対する依存ライブラリのサポートは確認されていません。 |
| <a id="c022"></a>**C022** | — | 旧 Hibernate 設定における ID ジェネレーターのマッピングを選択します。 | YAML から宣言を削除 | `spring.jpa.properties.hibernate.id.new_generator_mappings`<br />`true`（同梱 YAML）→ 未宣言 | 本ガイド対象のすべての V5 バージョン | 不要 | 別のファイルがまだこのジェネレーターキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除します。データベースのシーケンスや ID 生成を独自に変更しないでください。 |
| <a id="c023"></a>**C023** | — | プロファイルから LiveReload の宣言が削除されました。 | YAML から宣言を削除 | `spring.devtools.livereload.enabled`<br />`false`（同梱 YAML）→ 未確認（依存ライブラリのデフォルト） | 本ガイド対象のすべての V5 バージョン | 不要 | 新しいキーは不要です。別のファイルにこの行が残っている場合のみ対応します。 | V5 の YAML に合わせて宣言を削除できます。削除したからといって、依存ライブラリが LiveReload をサポートしなくなったことを意味するわけではありません。 |
| <a id="c024"></a>**C024** | `spring.profiles.group.dev` | dev で有効化される Spring プロファイルをグループ化します。 | プロファイルグループの更新 | ベース/dev: dev,api-docs。prod でも dev→prod,webpack,api-docs を宣言 → ベース: dev,api-docs。個別のプロファイルではグループを宣言しない | 本ガイド対象のすべての V5 バージョン | 不要 | V4 の dev/prod プロファイルファイルを再利用する場合に推奨します。 | dev グループはベース YAML に残し、旧本番プロファイルの重複した dev グループを削除します。誤った dev/prod 設定が有効にならないよう、実行時のプロファイルを明示的に指定してください。 |
| <a id="c025"></a>**C025** | `spring.liquibase.contexts` | 適用する Liquibase の changelog コンテキストを選択します。 | 処理の変更 | 変更なし: dev = dev, faker、prod = prod | 本ガイド対象のすべての V5 バージョン | 不要 | 既存のコンテキストが環境に合っていれば変更は不要です。 | V5 は Liquibase の bean を作成する際に、contexts/label-filter のリストを文字列に変換します。適切な dev/prod のコンテキストを維持します。V5 のスキーマ/シードの移行が適用される前に Liquibase を無効にしないでください。 |
| <a id="c026"></a>**C026** | `application.default-export.sort-log` | ログエクスポートのレコード順を選択します。 | 追加 | 未宣言 → id,desc（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | 同梱の並び順で問題なければ新しいキーは不要です。 | `id,desc` を維持します。変更する場合は、`id`、`timeStamp`、`level` などの有効な Log フィールドを使って field,direction の形式で指定します。この設定はログのエクスポートにのみ影響します。 |
| <a id="c027"></a>**C027** | `password-policy.keyboard-threshold` | パスワードポリシーで拒否するキーボード連続入力の長さを設定します。 | 追加 | 未宣言 → dev: 3、prod: 未宣言 | 本ガイド対象のすべての V5 バージョン | 不要 | データベースのポリシーでキーボード連続入力のチェックが有効になっている場合。 | しきい値を揃える必要がある場合は、dev と prod に同じ値を宣言します。このキーは、キーボード連続入力のチェックが有効な場合にのみ検証に影響します。 |
| <a id="c028"></a>**C028** | `password-policy.login-security.cleanup-schedule-cron` | ログイン試行のクリーンアップを意図した cron 宣言です。実際に使用されていることは確認されていません。 | 追加 | 未宣言 → 0 0/5 * * * *（dev プロファイル） | 本ガイド対象のすべての V5 バージョン | 不要 | 本番にこのキーを追加する必要はありません。 | このキーは開発用 YAML に存在しますが、読み取り箇所は見つかっていません。実際のクリーンアップスケジュールは `mfa-config.cleanup-schedule-cron` を読み取ります。 |
| <a id="c031"></a>**C031** | `retention.workflow.enable` | ワークフローリテンションとポリシーに基づくクリーンアップを有効または無効にします。 | 追加 | 未宣言 → dev と prod で `true` | 本ガイド対象のすべての V5 バージョン | 必須（確認） | V5 の初回起動前に、クリーンアップが許可されるかを確認します。同梱の有効化ポリシーが適切でない場合にのみ値の変更が必要です。 | Java プロパティのデフォルトは false ですが、同梱の dev/prod プロファイルはクリーンアップを明示的に有効にしています。起動前にポリシーを確認してください。クリーンアップが許可される場合のみ `true` を維持し、それ以外は `false` に設定します。必須なのは判断であり、無条件に値を変更することではありません。`false` にすると、Quartz ジョブが保存されたままでもクリーンアップは実行されません。 |
| <a id="c032"></a>**C032** | `retention.workflow.cron` | Quartz cron でリテンションのクリーンアップをスケジュールします。 | 追加 | 未宣言 → 0 0 2 * * ?（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | 02:00 がメンテナンス時間帯に適さない場合。 | Quartz cron を負荷の低い時間帯に設定し、WORKFLOW_RETENTION_CLEANUP がアプリケーションのタイムゾーンで登録されていることを確認します。 |
| <a id="c033"></a>**C033** | `retention.workflow.default-days` | ワークフロー UI でリテンション期間の初期値を設定します。 | 追加 | 未宣言 → 30（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | ワークフローフォームのリテンション期間の初期値を変更する場合。 | この値は UI の初期値にのみ使われます。希望する日数を設定します。既存の各ワークフローのポリシーは個別に更新してください。デフォルトを変更しても既存のワークフローは更新されません。 |
| <a id="c034"></a>**C034** | `retention.workflow.default-states` | UI でポリシーに選択されるジョブ状態の初期値を設定します。 | 追加 | 未宣言 → SUCCESSFUL,FAULTED,STOPPED（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | ワークフローフォームでデフォルトで選択される状態を変更する場合。 | このリストは UI の初期値にのみ使われます。`RUNNING` を除く有効な JobState 名を使用します。保存済みのポリシーで新しいリストを使う場合は、個別に更新してください。 |
| <a id="c035"></a>**C035** | `retention.workflow.default-log-only` | UI の初期値を、ジョブを残してログのみ削除する設定にします。 | 追加 | 未宣言 → `true`（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | フォームの初期値として、ログのみのクリーンアップかジョブ全体のクリーンアップかを選ぶ場合。 | この値は UI の初期値にのみ使われます。ログのみをデフォルトにする場合は `true` を維持します。`false` で保存されたポリシーは、引き続きジョブとセッション/パラメーターのデータを削除できます。 |
| <a id="c036"></a>**C036** | `retention.workflow.job-batch-size` | 各クリーンアップバッチで取得する候補ジョブ数を制限します。 | 追加 | 未宣言 → 100（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | クリーンアップ中のデータベース負荷を調整する場合。 | 正の数を使用します。`<=0` の値ではサービスが候補ジョブを取得しません。バッチサイズを増やす前に負荷テストを行ってください。 |
| <a id="c037"></a>**C037** | `retention.workflow.log-batch-size` | 1 回のトランザクションで削除するログ数を制限します。 | 追加 | 未宣言 → 200（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | トランザクションあたりに削除するログ数を調整する場合。 | 正の数を使用します。値を増やすとトランザクション/ロックが長くなる可能性があるため、まずステージングでテストしてください。 |
| <a id="c038"></a>**C038** | `retention.workflow.max-cleanup-iterations` | ジョブのクリーンアップ反復回数の制限を意図したプロパティです。 | 未使用キーの追加 | 未宣言 → dev/prod で 1000。サービスでは使用されない | 本ガイド対象のすべての V5 バージョン | 不要 | クリーンアップを制限するためにこのキーを変更する必要はありません。 | サービスはこのプロパティを読み取らず、現在はコード内の `maxBatches=1000` を使用しています。キーを変更しても実行上限は変わりません。 |
| <a id="c039"></a>**C039** | `retention.workflow.max-log-cleanup-iterations` | ジョブごとのログクリーンアップ反復回数を制限します。 | 追加 | 未宣言 → 10000（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | ジョブのログが多い場合、またはクリーンアップが反復上限に達する場合。 | log-batch-size とあわせて調整します。すべてのログが削除される前に上限に達すると、ジョブのクリーンアップは完了しません。 |
| <a id="c040"></a>**C040** | `retention.workflow.max-excluded-jobs` | 期限切れジョブを照会する際の除外 ID 数を制限します。 | 追加 | 未宣言 → 900（dev/prod） | 本ガイド対象のすべての V5 バージョン | 不要 | データベースの SQL パラメーター上限により、ID 数を減らす必要がある場合。 | クエリの除外リストを制限するため、データベースに適した正の値を使用します。 |
| <a id="ha-search"></a><a id="c041"></a>**C041** | `logging.level.ROOT` | 本番のルートログレベルを設定します。 | 値の変更 | `DEBUG`（同梱 YAML）→ `ERROR`（同梱 YAML） | 5.0.0.1, 5.0.0.2, 5.0.0.4, 5.0.0.5, 5.1.0.0, 5.1.0.1 | 不要 | 本番の監視で INFO ログが必要な場合に推奨します。 | ERROR で十分であれば維持します。Center の INFO イベントが必要な場合は `logging.level.aka.rpa.orchestrator=INFO` を設定します。ROOT を変更するだけでは、同梱のアプリケーションロガーのレベル ERROR は上書きされません。INFO を Center のログファイルに出力する必要がある場合は、`logback-spring.xml` の FILE アペンダーの ThresholdFilter も ERROR から INFO に下げます。本番のデフォルトを DEBUG にしないでください。 |
| <a id="c042"></a>**C042** | `cache.mode` | ローカルキャッシュか Redis キャッシュかを選択します。V5 ではノード間の連携も追加されました。 | 動作の変更 | 変更なし: dev/prod で 0 | 5.0.0.2, 5.0.0.4, 5.0.0.5, 5.1.0.1 | 条件付き | v5.0.0.2/.4/.5 または v5.1.0.1 で HA をデプロイする場合。 | Redis と分散連携には cache.mode=1 を設定します。ノード間で WebSocket 通知を行うには、`application.web-socket.sync-event=true` も設定します（[C073](#c073) を参照）。cache.mode だけでは通知の配信は有効になりません。同じクラスター内のノードは、正しい共有 Redis/ブローカーを使用する必要があります。単一ノードでは 0 のままで構いません。 |
| <a id="c073"></a>**C073** | `application.web-socket.sync-event` | 共有ブローカー経由で WebSocket 通知を配信し、他の Center ノードが接続中のクライアントに届けられるようにします。 | 追加 | V4 では未宣言。V5 の YAML ではコメントアウトされた例のみ。実行時のデフォルト: `false` | 5.0.0.2, 5.0.0.4, 5.0.0.5, 5.1.0.1 | 条件付き | クライアントが異なる Center ノードに接続する HA 構成をデプロイする場合。 | `cache.mode=1` と共有ブローカーとあわせて、すべてのノードで `true` を設定します。デフォルトの `false` では、ロボット/ジョブ/スケジュールなどの WebSocket 通知は送信元のノードでのみ配信されます。単一ノードでは `false` のままで構いません。 |
| <a id="c043"></a>**C043** | `spring.jpa.properties.hibernate.search.backend.type` | 検索バックエンドを選択し、アセットのエクスポート上限を決定します。 | 動作の変更 | 変更なし: lucene（dev/prod） | 5.0.0.2, 5.0.0.4, 5.0.0.5, 5.1.0.1 | 不要 | 検索とアセットのエクスポートに Elasticsearch を使用する場合。 | デプロイ済みのバックエンドを維持します。`elasticsearch` ではアセットのエクスポートは 10000 行に制限されます。`lucene` などの他のバックエンドでは 65530 行の上限が維持されます。エクスポートの上限をテストしてください。上限を回避するためだけにバックエンドを切り替えないでください。 |
| <a id="v50-bo-sung"></a><a id="c044"></a>**C044** | `settings.audit-logs.max-filter-days` | 監査 UI の日付範囲を制限します。 | 追加 | 未宣言 → 60（application.yml） | 5.0.0.4, 5.0.0.5 | 不要 | 同梱の監査日付範囲で問題なければ新しいキーは不要です。 | このパラメーターは監査 UI に提供されるもので、すべての REST クライアントが制限されることを意味しません。60 を維持するか、UI の要件/エクスポート負荷に合わせて調整します。 |
| <a id="c045"></a>**C045** | `settings.audit-logs.default-filter-days` | 監査 UI のデフォルトの日付範囲を設定します。 | 追加 | 未宣言 → 30（application.yml） | 5.0.0.4, 5.0.0.5 | 不要 | デフォルトで選択される監査の日付範囲を変更する場合。 | max-filter-days を超えないようにします。この監査範囲のグループは v5.1.0.1 にはありません。 |
| <a id="c046"></a>**C046** | `help.support-tickets` | サポート URL を設定します。 | 追加 | 未宣言 → https://support.akabot.com（dev/prod） | 5.0.0.4, 5.0.0.5 | 不要 | 環境からデフォルトのサポート URL にアクセスできない場合。 | アクセス可能な社内サポートポータルを使用します。このヘルプグループは v5.1.0.1 にはありません。 |
| <a id="c047"></a>**C047** | `help.documentation` | ドキュメント URL を設定します。 | 追加 | 未宣言 → https://docs.akabot.com（dev/prod） | 5.0.0.4, 5.0.0.5 | 不要 | 社内またはオフラインのドキュメントが必要な場合。 | 許可されたドキュメント URL を使用します。同梱の URL が使用できれば追加のキーは不要です。 |
| <a id="c048"></a>**C048** | `help.studio-agent-download` | Studio/Agent のダウンロード URL を設定します。 | 追加 | 未宣言 → https://docs.akabot.com/studio/latest/downloads（dev/prod） | 5.0.0.4, 5.0.0.5 | 不要 | 社内の Studio/Agent ダウンロードリポジトリを使用する場合。 | 社内のダウンロード URL を使用します。デフォルトの URL が使用できれば変更は不要です。 |
| <a id="c049"></a>**C049** | `help.center-download` | Center のダウンロード URL を設定します。 | 追加 | 未宣言 → https://docs.akabot.com/center/latest/downloads（dev/prod） | 5.0.0.4, 5.0.0.5 | 不要 | 社内の Center ダウンロードリポジトリを使用する場合。 | 社内のダウンロード URL を使用します。デフォルトの URL が使用できれば変更は不要です。 |
| <a id="c050"></a>**C050** | `help.center-release-notes` | リリースノートの URL を設定します。 | 追加 | 未宣言 → https://docs.akabot.com/center/latest/release-notes（dev/prod） | 5.0.0.4, 5.0.0.5 | 不要 | 社内でホストしているリリースノートを使用する場合。 | 社内のドキュメント URL を使用します。デフォルトの URL は、特定のバージョンがリリースされたことを示すものではありません。 |
| <a id="c051"></a>**C051** | `calendar-setting.make-up-workday.sync-cron` | 振替出勤日トリガーの同期をスケジュールします。 | 追加 | 未宣言 → 0 5 0 * * *（dev/prod） | 5.0.0.4, 5.0.0.5 | 不要 | 00:05 の同期時刻が適さない場合（v5.0.0.4/.5 のみ）。 | 適切な Spring cron を設定し、振替出勤日トリガーの同期を確認します。 |
| <a id="c052"></a>**C052** | `calendar-setting.make-up-workday.time-zone` | 振替出勤日の同期タスクのタイムゾーンを選択します。 | 追加 | 未宣言 → 空文字列。バックグラウンドのスケジュールはシステムのタイムゾーンを使用 | 5.0.0.4, 5.0.0.5 | 不要 | バックグラウンド同期に固定のタイムゾーンが必要な場合（v5.0.0.4/.5 のみ）。 | IANA タイムゾーンを設定します。これはバックグラウンドタスクのスケジュールを変更するもので、各プロセススケジュールのタイムゾーンは変更しません。 |
| <a id="c053"></a>**C053** | `calendar-setting.make-up-workday.lookahead-days` | 振替出勤日の先読み期間を設定します。 | 追加 | 未宣言 → 14（dev/prod） | 5.0.0.4, 5.0.0.5 | 不要 | 14 日より先のトリガーを準備する必要がある場合。 | 正の日数を使用し、タイムゾーンの境界付近の日付をテストします。このカレンダーグループは v5.1.0.1 にはありません。 |
| <a id="c054"></a>**C054** | `server.activemq.consumer.agent-pool.prefetch-size` | agent-pool のコンシューマーがプリフェッチできるメッセージ数を設定します。 | 動作の変更 | application.yml で 1000 → YAML では引き続き 1000。.4/.5 のプルコンシューマーは実際には 0 を使用 | 5.0.0.4, 5.0.0.5 | 不要 | v5.0.0.4/.5 のプルコンシューマーを制御するためにキーを変更する必要はありません。 | コードは受信前に prefetch=0 を強制します。YAML の値 1000 は、このコンシューマーが 1000 件のメッセージをバッファリングすることを意味しません。v5.1.0.1 は引き続きプッシュコンシューマーを使用するため、この結論は当てはまりません。 |
| <a id="ai"></a><a id="c055"></a>**C055** | `ai-service.enabled` | AI UI 連携、ディレクトリ API、HMAC、ディスパッチャーを有効にします。 | 追加 | 未宣言 → `false`（dev/prod） | 5.1.0.0, 5.1.0.1 | 条件付き | v5.1 で AI 連携をデプロイする場合。 | このフラグでは静的なゲートウェイルートは削除されません。エンドポイント/HMAC の準備が整ってから有効にしてください。本番では `AI_SERVICE_ENABLED` を使用します。開発用 YAML にはリテラルの false が記載されています。 |
| <a id="c056"></a>**C056** | `ai-service.frontend-url` | ブラウザーが AI の iframe に読み込む URL を設定します。 | 追加 | 未宣言 → dev: http://localhost:3001、prod: `${AI_SERVICE_FRONTEND_URL:http://localhost:3001}` | 5.1.0.0, 5.1.0.1 | 条件付き | AI UI を使用する場合。 | 本番では、`AI_SERVICE_FRONTEND_URL` にブラウザーからアクセスできる http(s) URL を設定します。Kubernetes ネットワーク内でしか名前解決できないサービス名は使用しないでください。 |
| <a id="c057"></a>**C057** | `ai-service.backend-url` | Center がプロキシリクエストと Webhook に使用する AI バックエンドの URL を設定します。 | 追加 | 未宣言 → dev: http://localhost:3000、prod: `${AI_SERVICE_BACKEND_URL:http://ai-service:3000}` | 5.1.0.0, 5.1.0.1 | 条件付き | AI を使用する場合。カスタムプロファイルでも、ルートを解決するためにこの URL が必要です。 | 本番では、`AI_SERVICE_BACKEND_URL` に Center から到達できる AI バックエンドの URL を設定します。静的ルートは enabled=false の場合でもこのプロパティを参照します。 |
| <a id="c058"></a>**C058** | `ai-service.webhook-path` | ライフサイクル Webhook を受信する AI エンドポイントのパスを設定します。 | 追加 | 未宣言 → /api/v1/center-lifecycle-events（dev/prod） | 5.1.0.0, 5.1.0.1 | 条件付き | AI バックエンドが異なる Webhook パスを使用する場合のみ変更します。 | 適切であればデフォルトのパスを維持します。そうでない場合は、プロパティを明示的に設定し、HMAC 署名付きの Webhook をテストします。 |
| <a id="c059"></a>**C059** | `ai-service.hmac-key-id` | Center から AI へのリクエストに使う署名キーを識別します。 | 追加 | 未宣言 → dev のサンプル値は非表示。prod は余分な } を含む形で AI_SERVICE_HMAC_KEY_ID を参照 | 5.1.0.0, 5.1.0.1 | 条件付き | `ai-service.enabled=true` の場合。 | AI 側と一致する `AI_SERVICE_HMAC_KEY_ID` を指定します。本番テンプレートには余分な } が含まれているため、プロパティを直接上書きし、HMAC 署名付きリクエストをテストしてください。AI の設定ガイドを参照してください。 |
| <a id="c060"></a>**C060** | `ai-service.hmac-secret` | Center から AI へのリクエストに使う署名シークレットを設定します。 | 追加 | 未宣言 → dev のサンプル値は非表示。prod は余分な } を含む形で AI_SERVICE_HMAC_SECRET を参照 | 5.1.0.0, 5.1.0.1 | 条件付き | `ai-service.enabled=true` の場合。 | AI 側と一致する専用の `AI_SERVICE_HMAC_SECRET` を指定します。本番のプレースホルダーに含まれる余分な } を避けるため、プロパティを直接上書きします。開発用のサンプル値は使用しないでください。 |
| <a id="c061"></a>**C061** | `ai-service.internal-auth.key-id` | AI から Center へのリクエストに使う認証キーを識別します。 | 追加 | 未宣言 → dev のサンプル値は非表示。prod は CENTER_INTERNAL_HMAC_KEY_ID を使用し、未設定の場合は空 | 5.1.0.0, 5.1.0.1 | 条件付き | `ai-service.enabled=true` の場合。 | AI 側が Center へのリクエストの署名に使う ID と一致する `CENTER_INTERNAL_HMAC_KEY_ID` を指定します。 |
| <a id="c062"></a>**C062** | `ai-service.internal-auth.hmac-secret` | AI から Center へのリクエストに使う認証シークレットを設定します。 | 追加 | 未宣言 → dev のサンプル値は非表示。prod は CENTER_INTERNAL_HMAC_SECRET を使用し、未設定の場合は空 | 5.1.0.0, 5.1.0.1 | 条件付き | `ai-service.enabled=true` の場合。 | AI の署名シークレットと一致する `CENTER_INTERNAL_HMAC_SECRET` を指定します。開発用のサンプル値は使用しないでください。 |
| <a id="c063"></a>**C063** | `ai-service.internal-auth.allowed-clock-skew-seconds` | HMAC リクエストで許容する時刻のずれ（秒）を設定します。 | 追加 | 未宣言 → 60（dev/prod） | 5.1.0.0, 5.1.0.1 | 不要 | 60 秒の時刻のずれで問題なければ追加の宣言は不要です。 | 両システムの時刻を同期させてください。許容値を変更する場合は `CENTER_INTERNAL_ALLOWED_CLOCK_SKEW_SECONDS` を使用します。フィルターは最小 1 秒を強制します。 |
| <a id="c064"></a>**C064** | `ai-service.dispatcher-max-attempts` | ライフサイクルイベントの最大配信試行回数を設定します。 | 追加 | 未宣言 → 10（dev/prod） | 5.1.0.0, 5.1.0.1 | 不要 | ライフサイクルイベントの配信試行回数の上限を変更する場合。 | `AI_SERVICE_DISPATCHER_MAX_ATTEMPTS` を使用します。上限に達した後は outbox の状態を監視してください。 |
| <a id="c065"></a>**C065** | `ai-service.dispatcher-retry-seconds` | ライフサイクルイベントの再試行間隔（秒）を設定します。 | 追加 | 未宣言 → 5（dev/prod） | 5.1.0.0, 5.1.0.1 | 不要 | ライフサイクルイベント配信の再試行までの待ち時間を変更する場合。 | `AI_SERVICE_DISPATCHER_RETRY_SECONDS` を使用します。バックエンド障害時の動作と再試行の負荷をテストしてください。 |
| <a id="c066"></a>**C066** | `spring.cloud.gateway.server.webmvc.routes` | AI のゲートウェイルートとレスポンスフィルターを定義します。 | ルートとフィルターの追加 | 3 つのサービスルート、AI ルートなし → 3 つのサービスルートと 4 つの AI ルート、CORS フィルター付き | 5.1.0.0, 5.1.0.1 | 条件付き | AI を使用し、外部/プロファイルのルート一覧に対象の AI ルートまたはフィルターが含まれていない場合。同梱の 5.1 のルート一覧を使う場合は重複した上書きは不要です。 | カスタムの一覧を使用する場合は、対象 5.1 のルート定義をマージします。3 つのサービスルートを維持し、4 つの AI ルートと必要なレスポンス CORS フィルターを追加します。各 AI ルートは /ai-service を取り除き、対象 YAML で定義された 2 つの CORS レスポンスヘッダーを削除します。プロファイルの一覧はルート一覧全体を置き換えます。 |
| <a id="c067"></a>**C067** | `spring.servlet.multipart.resolve-lazily` | マルチパートの解析を遅延させ、ゲートウェイがアップロード本文をそのまま AI に転送できるようにします。 | 追加 | 未宣言 → `true`（同梱 YAML） | 5.1.0.0, 5.1.0.1 | 条件付き | AI へのアップロードを使用し、外部の上書きがマルチパートの遅延解析を無効にしている場合。同梱の AI 用 YAML を使う場合は新たな宣言は不要です。 | multipart.enabled=true と必要なサイズ上限とあわせて `true` を維持します。Center への直接アップロードと AI ゲートウェイ経由のアップロードの両方をテストしてください。 |
| <a id="c068"></a>**C068** | `rate-limit.filters[1].url` | イントロスペクションのレート制限ルールに一致させる URL を設定します。 | 追加 | 未宣言 → /internal/ai/v1/token/introspect（同梱 YAML） | 5.1.0.0, 5.1.0.1 | 条件付き | イントロスペクションのレート制限が有効で、カスタムのフィルター一覧にこの URL ルールが含まれていない場合。同梱の一覧を維持する場合は新しいルールは不要です。 | フィルター一覧を置き換える場合は、/api/authenticate を維持し、適切な capacity、duration、refill-capacity とともに /internal/ai/v1/token/introspect を含めます。[1] はサンプル内の位置を示すもので、固定のインデックスではありません。レート制限を有効にするだけで、同梱のルールを重複させる必要はありません。 |
| <a id="c069"></a>**C069** | `rate-limit.filters[1].capacity` | イントロスペクションのバケットの最大トークン数を設定します。 | 追加 | 未宣言 → 100（同梱 YAML） | 5.1.0.0, 5.1.0.1 | 不要 | レート制限を有効にし、イントロスペクションの負荷を調整する場合。 | duration/refill-capacity とあわせてバケットの容量を設定します。リミッターはデフォルトで無効です。 |
| <a id="c070"></a>**C070** | `rate-limit.filters[1].duration` | イントロスペクションのトークン補充間隔を設定します。 | 追加 | 未宣言 → PT1M（同梱 YAML） | 5.1.0.0, 5.1.0.1 | 不要 | レート制限を有効にし、補充間隔を変更する場合。 | PT1M などの有効な Duration を使用し、capacity/refill-capacity とあわせて調整します。 |
| <a id="c071"></a>**C071** | `rate-limit.filters[1].refill-capacity` | 補充ごとに追加されるトークン数を設定します。 | 追加 | 未宣言 → 100（同梱 YAML） | 5.1.0.0, 5.1.0.1 | 不要 | レート制限を有効にし、補充ごとのトークン数を変更する場合。 | 実際の負荷に合わせて capacity/duration とあわせて調整します。リミッターが無効の間は効果がありません。 |
| <a id="c072"></a>**C072** | `jhipster.security.content-security-policy` | CSP によってブラウザーが読み込めるコンテンツを制御します。 | 動作の変更 | YAML の CSP 文字列のとおり → 元の CSP 文字列。AI を有効にする場合は AI のオリジンを追加 | 5.1.0.0, 5.1.0.1 | 条件付き | AI UI を使用し、有効な Center/リバースプロキシの CSP がそのオリジンをブロックしている場合。有効なポリシーですでに許可されている場合は、追加の CSP 上書きは不要です。 | リバースプロキシのポリシーも含め、有効な CSP で AI UI の正確なオリジンを許可し、ブラウザーで iframe をテストします。既存のディレクティブは維持します。ワイルドカードのオリジンは避けてください。enabled=false では AI のオリジンは追加されません。 |

<a id="phien-ban"></a>

## **3. V4 から直接アップグレードする場合の設定ガイド**

V4 から直接アップグレードする場合は、セクション 3.1 の共通の調整を適用します。その後、[対象バージョン別の設定](/docs/center/latest/installation/configuration-changes-5x.md#target-version)を適用します。AI 連携を使用する場合は、セクション 4 も実施してください。

<a id="hanh-dong"></a>

### **3.1. すべての V5 バージョンで確認する設定**

環境の個別の設定ファイルで宣言されているキーのみを更新します。同梱の V5 YAML を使用し、その値が適切であれば、改めて宣言する必要はありません。

| Configuration Key | 必須（Required） | 更新条件 | アップグレード時の対応 | 詳細 |
| --- | --- | --- | --- | --- |
| `spring.cloud.gateway.mvc.routes` | 条件付き | 外部設定が、維持すべき V4 のルートをまだ定義している場合。対象 V5 のルート一覧が適切であれば変更は不要です。 | 必要なルート一覧を `spring.cloud.gateway.server.webmvc.routes` に移し、URI、predicates、filters を維持します。5.1 で AI を使用する場合は、C066 に記載された AI ルートとフィルターもマージします。プロファイルでの上書きはルート一覧全体を置き換えます。 | [C001](#c001) |
| `spring.jpa.hibernate.naming.implicit-strategy` | 条件付き | 外部の上書きが V4 のクラスを明示的に参照している場合。対象 V5 パッケージには新しいクラスが同梱されています。 | 旧の上書きを `org.springframework.boot.hibernate.SpringImplicitNamingStrategy` に置き換えるか、同梱の値で要件を満たす場合は上書きを削除します。テーブルと列のマッピングを確認してください。 | [C002](#c002) |
| `spring.datasource.driverClassName`<br />`spring.jpa.database-platform`<br />`spring.jpa.database` | 条件付き | 個別のデータベース設定を使用している場合、またはサンプルの MySQL 以外のデータベースを使用している場合 | 環境の URL と認証情報を維持し、適切なドライバー、方言、データベースタイプを選択します。サンプル YAML に合わせるためにデータベースエンジンを変更しないでください。 | [C003](#c003), [C005](#c005), [C006](#c006) |
| `spring.jackson.serialization.write_dates_as_timestamps` | 条件付き | 外部の上書きで、同梱の false とは異なる JSON の日付/時刻出力を制御する必要がある場合、またはその上書きを維持する場合。 | 明示的な上書きを維持する場合は `spring.jackson.datatype.datetime.WRITE_DATES_AS_TIMESTAMPS` を使用し、必要な真偽値を維持します。文字列で出力する場合は `false` を維持します。同梱の値が適切であれば追加の宣言は不要です。クライアントとの JSON を確認してください。旧キーの互換性は確認されていません。 | [C015](#c015) |
| `server.servlet.encoding.charset`<br />`server.servlet.encoding.force-response` | 条件付き | 別の本番用ファイルに 2 つの V4 キーが残っている場合 | それぞれ `spring.servlet.encoding.charset` と `spring.servlet.encoding.force-response` にキー名を変更し、値を維持します。 | [C018](#c018), [C019](#c019) |
| `management.metrics.export.prometheus.enabled` | 条件付き | 有効な V5 プロファイルの値が必要な監視設定と異なる場合、または必要な外部の本番上書きがまだ V4 のキーを使用している場合。 | ベース YAML は V4 と V5 の両方で `management.prometheus.metrics.export.enabled=true` を宣言しており、V5 の本番プロファイルが `false` に上書きします。必要な旧の本番上書きは V5 のキーに移行し、意図した値を維持します。同梱のプロファイル値が適切であれば維持します。キー名が変わっただけでは新たな宣言は不要です。 | [C007](#c007) |
| `management.endpoint.jhimetrics.enabled` | 条件付き | 外部の V4 上書きで、同梱の V5 アクセスレベルとは異なるエンドポイントアクセスポリシーを維持する必要がある場合。 | 意図したポリシーを維持できる、対象バージョンがサポートするアクセスレベルで `management.endpoint.jhimetrics.access` を使用します。同梱の `unrestricted` はサンプルの enabled=true に相当します。以前無効化または制限していたエンドポイントにそのまま使用しないでください。SecurityConfiguration のエンドポイント認可は維持します。 | [C008](#c008) |
| `management.health.tags.application` | 条件付き | 外部の上書きで独自のアプリケーションメトリクスラベルを維持する必要がある場合。同梱のアプリケーション名ラベルを使う場合は宣言不要です。 | 独自のラベルが必要な場合は `management.metrics.tags.application` を使用します。`${spring.application.name}` で問題なければ、旧の名前空間が変わったという理由だけで上書きを追加せず、同梱の値を維持します。 | [C009](#c009) |
| `spring.profiles.group.dev` | 不要 | V4 のプロファイルファイルを再利用する場合 | dev グループは application.yml に残し、旧 application-prod.yml の重複した dev グループを削除します。 | [C024](#c024) |
| `retention.workflow.enable` | 必須（確認） | V5 の初回起動前に、クリーンアップが許可されるかを確認します。同梱の有効化ポリシーが適切でない場合にのみ値の変更が必要です。 | Java プロパティのデフォルトは false ですが、同梱の dev/prod プロファイルはクリーンアップを明示的に有効にしています。起動前にポリシーを確認してください。クリーンアップが許可される場合のみ `true` を維持し、それ以外は `false` に設定します。必須なのは判断であり、無条件に値を変更することではありません。`false` にすると、Quartz ジョブが保存されたままでもクリーンアップは実行されません。 | [C031](#c031) |
| `retention.workflow.cron` | 不要 | 02:00 がメンテナンス時間帯に適さない場合 | 同梱のプロファイルは cron=`0 0 2 * * ?` を使用します。変更する場合は、負荷の低い時間帯の Quartz cron を設定します。 | [C032](#c032) |
| `management.health.distribution.*`<br />`management.health.web.server.request.autotime.enabled`<br />`management.metrics.data.repository.autotime.enabled` | 不要 | 個別の YAML ファイルに旧メトリクスの宣言が残っている場合 | V5 の YAML で省略された宣言を削除します。ヒストグラム/パーセンタイルには `management.metrics.distribution` 配下の対応するキーを使用します。autotime の代替キーを独自に作らないでください。 | [C010](#c010)–[C013](#c013) |
| `spring.mvc.pathmatch.matching-strategy`<br />`spring.jpa.properties.hibernate.id.new_generator_mappings`<br />`spring.devtools.livereload.enabled` | 不要 | 個別の YAML ファイルにこれらの V4 の宣言が残っている場合 | V5 の YAML に合わせて行を削除し、アップグレード後にカスタム URL をテストします。宣言を削除しても、依存ライブラリが記載のすべてのキーのサポートを終了したことを意味するわけではありません。 | [C021](#c021)–[C023](#c023) |

ログエクスポートの並び順、パスワード検証のしきい値、クリーンアップのバッチサイズなど、その他の新しい設定は一覧表に記載しています。使用する機能で同梱とは異なる設定が必要な場合にのみ、値を変更してください。

<a id="ai-huong-dan"></a>

## **4. v5.1.0.0 および v5.1.0.1 の AI 設定**

AI を使用しない場合は `ai-service.enabled=false` を維持します。HMAC の認証情報は不要です。AI を使用する場合は、機能を有効にする前に以下の値を準備してください。

| Configuration Key | 必須（Required） | AI を有効にする場合の要件 | 指定する値 |
| --- | --- | --- | --- |
| `ai-service.enabled` | 条件付き | 有効にする必要があります | URL と HMAC の認証情報を指定した後に `true` を設定します。 |
| `ai-service.frontend-url` | 条件付き | URL の確認が必要です | AI UI を開くために、ユーザーのブラウザーからアクセスできる http(s) URL。 |
| `ai-service.backend-url` | 条件付き | URL の確認が必要です | Center から到達できる AI バックエンドのアドレス。ブラウザー向けの URL と異なる場合があります。 |
| `ai-service.hmac-key-id` | 条件付き | 必須 | Center がライフサイクル Webhook の署名に使うキー ID。AI 側がこの ID を認識できる必要があります。 |
| `ai-service.hmac-secret` | 条件付き | 必須 | Center と受信側の AI システムの間で合意した、ライフサイクル Webhook の署名シークレット。 |
| `ai-service.internal-auth.key-id` | 条件付き | 必須 | AI が Center へのリクエストの署名に使うキー ID。 |
| `ai-service.internal-auth.hmac-secret` | 条件付き | 必須 | 受信側の Center システムと合意した、AI リクエストの認証シークレット。 |
| `ai-service.webhook-path` | 条件付き | バックエンドが異なるパスを使用する場合のみ変更します | AI がこのパスで Webhook を受信する場合は `/api/v1/center-lifecycle-events` を維持します。 |
| `ai-service.internal-auth.allowed-clock-skew-seconds` | 不要 | 同梱の値を維持できます | 60 秒。Center と AI の時刻を同期させてください。 |
| `ai-service.dispatcher-max-attempts`<br />`ai-service.dispatcher-retry-seconds` | 不要 | 同梱の値を維持できます | 試行回数 10 回、再試行間隔 5 秒。運用上異なる値が必要な場合のみ調整します。 |

**本番環境の設定について:** HMAC のサンプル値は、AI システムと合意した認証情報に置き換えてください。本番 YAML の `ai-service.hmac-key-id` と `ai-service.hmac-secret` のプレースホルダーには余分な `}` が含まれています。この 2 つのプロパティの値を明示的に指定し、使用前に双方向の HMAC リクエストを確認してください。開発用のサンプルシークレットは使用しないでください。

ゲートウェイは `ai-service.enabled=false` の場合でも `ai-service.backend-url` を参照します。カスタムプロファイルを使用する場合は、backend-url に有効な値を設定してください。enabled フラグによって、ゲートウェイ設定から AI ルートが自動的に削除されることはありません。

## **5. 設定例**

以下の断片は V5 の構文を示しています。有効なプロファイルで読み込まれる設定にマージし、関係のない設定を維持して、YAML のキーが重複しないようにしてください。

### **5.1. 命名戦略、JSON、エンコーディング、アップロード**

環境のデータベース設定は維持します。以下の断片は、更新された命名戦略のクラスと、JSON/サーブレットのプロパティ名前空間を示しています。環境で異なる値が必要な場合は、アップロードの上限を調整してください。

```yaml
spring:
  jpa:
    hibernate:
      naming:
        implicit-strategy: org.springframework.boot.hibernate.SpringImplicitNamingStrategy
  jackson:
    use-jackson2-defaults: true
    datatype:
      datetime:
        WRITE_DATES_AS_TIMESTAMPS: false
  servlet:
    encoding:
      charset: utf-8
      force-response: true
    multipart:
      enabled: true
      max-file-size: 200MB
      max-request-size: 200MB
```

### **5.2. 初回起動前にワークフローのクリーンアップを無効にする**

同梱の V5 の開発用および本番用プロファイルは、ワークフローリテンションを有効にしています。クリーンアップがまだ許可されていない場合は、Center を起動する前に以下の値を設定してください。これにより、Quartz ジョブがデータベースに保存されたままでもクリーンアップは実行されません。

```yaml
retention:
  workflow:
    enable: false
```

クリーンアップを有効にする前に、各ワークフローの保存済みリテンションポリシーを確認してください。default-days、default-states、default-log-only の各プロパティはフォームの初期値にのみ使われ、変更しても保存済みのポリシーは更新されません。

### **5.3. AI の URL と HMAC プレースホルダーの修正**

5.1.0.0 または 5.1.0.1 で AI を有効にしてデプロイする場合は、以下のすべての環境変数を指定し、この断片を読み込まれる設定にマージします。正しい形式の HMAC プレースホルダーにより、本番テンプレートにある余分な閉じ括弧を回避できます。開発用のサンプルシークレットではなく、AI システムと合意した認証情報を使用してください。

```yaml
ai-service:
  enabled: ${AI_SERVICE_ENABLED:false}
  frontend-url: ${AI_SERVICE_FRONTEND_URL}
  backend-url: ${AI_SERVICE_BACKEND_URL}
  hmac-key-id: ${AI_SERVICE_HMAC_KEY_ID}
  hmac-secret: ${AI_SERVICE_HMAC_SECRET}
  internal-auth:
    key-id: ${CENTER_INTERNAL_HMAC_KEY_ID}
    hmac-secret: ${CENTER_INTERNAL_HMAC_SECRET}
```

使用前に、双方向の署名付きリクエストを確認してください。この断片は、対象 V5 のゲートウェイのルート一覧や CSP の設定を置き換えるものではありません。それらはセクション 4 と設定表の説明に従って適用してください。
