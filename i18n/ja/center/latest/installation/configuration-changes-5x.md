---
id: configuration-changes-5x
title: "バージョン別の設定変更（5.x）"
sidebar_label: "バージョン別の設定変更（5.x）"
sidebar_position: 24
description: "Center を 4.x から 5.x にアップグレードする際の、バージョンごとの設定変更と必要な対応です。"
displayed_sidebar: centerSidebar
---

# バージョン別の設定変更（5.x）

このページでは、各 V5 リリースで追加された変更と、対象バージョンに応じて確認すべき設定を示します。基準は **Center 4.0.0.14** です。準備手順、キー/値の完全な比較、共通の移行作業、AI の設定、YAML の例については、[設定リファレンス](/docs/center/latest/installation/configuration-migration-4x-to-5x.md)を参照してください。まず共通の変更を適用してください。後続の系列が、別の系列のすべての設定を含むとは限りません。

**必須（Required）** 列は、キー名が変更されたかどうかではなく、アップグレード時に対応が必要かどうかを示します。

- **条件付き:** 更新条件に一致し、かつ対象 V5 のプロファイル/設定がその要件をまだ満たしていない場合にのみ更新します。互換性のない上書き、実際のデータベース設定、HA/AI、必要な監視動作が該当します。キー名が変更されていても、同梱の値が適切であれば新たに宣言する必要はありません。
- **必須（確認）:** 同梱の dev/prod プロファイルはクリーンアップを有効にしているため、初回起動前にワークフローリテンションを確認します。適切であれば値を維持し、クリーンアップが許可されない場合のみ変更します。必須なのは確認であり、無条件に値を変更することではありません。
- **不要:** アップグレードのためだけに必須となる変更はありません。適切な値を維持します。オプションのチューニング、社内ヘルプ URL、推奨される旧設定の整理は引き続き記載しています。既存の有効な環境固有の設定は維持する必要があります。

キーやサンプル値が変更されたというだけで、すべてのデプロイで値の変更が必要になる行はありません。有効なプロファイルと外部の上書きをあわせて確認してください。ベース YAML の値は、dev/prod ファイル、環境変数、サービスオプションによって上書きされることがあります。

旧宣言については、記載された移行手順に従って対象の YAML に合わせてください。この分類は、すべての旧キーが起動失敗を引き起こすことを意味するものではありません。オプションの値は、運用上異なる動作が必要になった場合に関係します。グループ化された行は、すべての設定を無条件に適用するのではなく、参照先の各設定の条件を確認してください。

<a id="thay-doi"></a>

## **1. バージョン別の設定変更**

以下の表には、各バージョンで追加された変更のみを記載しています。詳細列は、設定リファレンスの該当項目にリンクしています。更新条件と対応は各バージョンの表に含まれています。V4 から直接アップグレードする場合は、[直接アップグレードのガイド](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#phien-ban)もあわせて参照してください。

<a id="version-v5.0.0.0"></a>

### **1.1. v5.0.0.0**

| Configuration Key | 変更の種類 | V5 YAML の値 | 必須（Required） | 更新条件 | 対応 | 詳細 |
| --- | --- | --- | --- | --- | --- | --- |
| `spring.cloud.gateway.mvc.routes` → `spring.cloud.gateway.server.webmvc.routes` | キー名の変更 | V4 と同じ 3 つのルート | 条件付き | 外部設定が、維持すべき V4 のルートをまだ定義している場合。対象 V5 のルート一覧が適切であれば変更は不要です。 | 必要なルート一覧を `spring.cloud.gateway.server.webmvc.routes` に移し、URI、predicates、filters を維持します。5.1 で AI を使用する場合は、C066 に記載された AI ルートとフィルターもマージします。プロファイルでの上書きはルート一覧全体を置き換えます。 | [C001](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c001) |
| `spring.jpa.hibernate.naming.implicit-strategy` | 値の変更 | org.springframework.boot.hibernate.SpringImplicitNamingStrategy（同梱 YAML） | 条件付き | 外部の上書きが V4 のクラスを明示的に参照している場合。対象 V5 パッケージには新しいクラスが同梱されています。 | 旧の上書きを `org.springframework.boot.hibernate.SpringImplicitNamingStrategy` に置き換えるか、同梱の値で要件を満たす場合は上書きを削除します。テーブルと列のマッピングを確認してください。 | [C002](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c002) |
| `spring.datasource.driverClassName` | 値の変更 | com.mysql.cj.jdbc.Driver（同梱 YAML） | 条件付き | 既存のドライバーがデプロイ済みのデータベースと一致しない、または対象 V5 パッケージでサポートされていない場合。 | MySQL では `com.mysql.cj.jdbc.Driver` を使用します。MariaDB では `org.mariadb.jdbc.Driver` を、`jdbc:mariadb:` の URL および MariaDB の方言とあわせて使用します。その他のデータベースでは適切なドライバーを維持します。 | [C003](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c003) |
| `spring.datasource.password` | サンプル値の変更 | [変更後の本番サンプル値は非表示] | 不要 | 本番データベース接続を設定する場合。 | 実際の環境のパスワードは、シークレットストア/Vault で維持します。Git 上のサンプル値で置き換えないでください。 | [C004](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c004) |
| `spring.jpa.database-platform` | 設定例の更新 | org.hibernate.dialect.MySQLDialect（dev/prod） | 条件付き | 設定された方言が、実際のデータベースまたは対象 V5 パッケージと互換性がない場合。方言を宣言しているだけでは変更は不要です。 | 実際のエンジンに対応する方言を維持します。V5 パッケージがサポートする方言を使用します（例: 該当エンジンでは `org.hibernate.dialect.SQLServerDialect` または `org.hibernate.dialect.OracleDialect`）。正しい方言を MySQL のサンプル値で置き換えないでください。 | [C005](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c005) |
| `spring.jpa.database` | 設定例の更新 | MYSQL（dev/prod） | 条件付き | 明示的に設定された JPA のデータベースタイプが、デプロイ済みのデータベースエンジンと一致しない場合。 | SQL Server では `SQL_SERVER`、Oracle では `ORACLE`、MySQL/MariaDB では `MYSQL` を使用します。サンプル YAML に合わせるためにデータベースエンジンを変更しないでください。 | [C006](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c006) |
| `management.metrics.export.prometheus.enabled` → `management.prometheus.metrics.export.enabled` | 本番上書きキー名の変更 | base: true、prod: false | 条件付き | 有効な V5 プロファイルの値が必要な監視設定と異なる場合、または必要な外部の本番上書きがまだ V4 のキーを使用している場合。 | ベース YAML は V4 と V5 の両方で `management.prometheus.metrics.export.enabled=true` を宣言しており、V5 の本番プロファイルが `false` に上書きします。必要な旧の本番上書きは V5 のキーに移行し、意図した値を維持します。同梱のプロファイル値が適切であれば維持します。キー名が変わっただけでは新たな宣言は不要です。 | [C007](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c007) |
| `management.endpoint.jhimetrics.enabled` → `management.endpoint.jhimetrics.access` | キーと値の型の変更 | unrestricted（アクセスレベル） | 条件付き | 外部の V4 上書きで、同梱の V5 アクセスレベルとは異なるエンドポイントアクセスポリシーを維持する必要がある場合。 | 意図したポリシーを維持できる、対象バージョンがサポートするアクセスレベルで `management.endpoint.jhimetrics.access` を使用します。同梱の `unrestricted` はサンプルの enabled=true に相当します。以前無効化または制限していたエンドポイントにそのまま使用しないでください。SecurityConfiguration のエンドポイント認可は維持します。 | [C008](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c008) |
| `management.health.tags.application` → `management.metrics.tags.application` | キー名の変更 | `${spring.application.name}` | 条件付き | 外部の上書きで独自のアプリケーションメトリクスラベルを維持する必要がある場合。同梱のアプリケーション名ラベルを使う場合は宣言不要です。 | 独自のラベルが必要な場合は `management.metrics.tags.application` を使用します。`${spring.application.name}` で問題なければ、旧の名前空間が変わったという理由だけで上書きを追加せず、同梱の値を維持します。 | [C009](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c009) |
| `management.health.distribution.percentiles-histogram.all` | YAML から宣言を削除 | 未宣言 | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | `management.health` 配下のキーを削除します。ヒストグラムの設定が必要な場合は、V4 と V5 の両方に存在する `management.metrics.distribution.percentiles-histogram.all` を使用します。 | [C010](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c010) |
| `management.health.distribution.percentiles.all` | YAML から宣言を削除 | 未宣言 | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | `management.health` 配下のキーを削除します。パーセンタイルの設定が必要な場合は、V4 と V5 の両方に存在する `management.metrics.distribution.percentiles.all` を使用します。 | [C011](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c011) |
| `management.health.web.server.request.autotime.enabled` | YAML から宣言を削除 | 未宣言 | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除します。依存ライブラリの代替プロパティは確認されていません。新しいキーを独自に作らないでください。 | [C012](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c012) |
| `management.metrics.data.repository.autotime.enabled` | YAML から宣言を削除 | 未宣言 | 不要 | 外部の設定ファイルがまだこのキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除します。リポジトリの自動計測の代替は確認されていません。 | [C013](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c013) |
| `management.health.elasticsearch.enabled` | YAML の並び替え | false（同梱 YAML） | 不要 | 更新は不要です。 | 適切であれば既存のキーと値を維持します。YAML の並び順が変わっただけで、有効な設定は変わりません。 | [C014](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c014) |
| `spring.jackson.serialization.write_dates_as_timestamps` → `spring.jackson.datatype.datetime.WRITE_DATES_AS_TIMESTAMPS` | キー名の変更 | false（同梱 YAML） | 条件付き | 外部の上書きで、同梱の false とは異なる JSON の日付/時刻出力を制御する必要がある場合、またはその上書きを維持する場合。 | 明示的な上書きを維持する場合は `spring.jackson.datatype.datetime.WRITE_DATES_AS_TIMESTAMPS` を使用し、必要な真偽値を維持します。文字列で出力する場合は `false` を維持します。同梱の値が適切であれば追加の宣言は不要です。クライアントとの JSON を確認してください。旧キーの互換性は確認されていません。 | [C015](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c015) |
| `spring.jackson.use-jackson2-defaults` | 追加 | true（同梱 YAML） | 不要 | 同梱の V5 YAML を使用する場合、追加の宣言は不要です。 | Jackson 3 で Jackson 2 互換のデフォルトを使用するため、`true` を維持します。 | [C016](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c016) |
| `spring.jackson.serialization.indent_output` → `spring.jackson.serialization.INDENT_OUTPUT` | キー表記の変更 | true（dev プロファイル） | 不要 | V4 から引き継いだ開発用の設定を別途管理している場合。 | `INDENT_OUTPUT` の V5 キーを使用します。値は `true` のままです。対象の依存ライブラリで旧表記が同等にバインドされるかは確認されていません。 | [C017](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c017) |
| `server.servlet.encoding.charset` → `spring.servlet.encoding.charset` | キー名の変更 | utf-8（同梱 YAML） | 条件付き | 別の本番用上書きが V4 のキーを使用しており、その文字セットを維持する必要がある場合。同梱の utf-8 を使う場合は新たな上書きは不要です。 | 維持する上書きのキー名を `spring.servlet.encoding.charset` に変更し、必要な文字セットを維持します。例に合わせるためだけに、意図的に設定した独自の文字セットを `utf-8` に置き換えないでください。 | [C018](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c018) |
| `server.servlet.encoding.force-response` → `spring.servlet.encoding.force-response` | キー名の変更 | true（同梱 YAML） | 条件付き | 別の本番用上書きが V4 のキーを使用しており、その force-response の動作を維持する必要がある場合。同梱の true を使う場合は新たな上書きは不要です。 | 維持する上書きのキー名を `spring.servlet.encoding.force-response` に変更し、必要な真偽値を維持します。同梱の本番値は `true` です。意図的に設定した false の上書きを、確認せずに置き換えないでください。 | [C019](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c019) |
| `spring.servlet.multipart.enabled` | YAML に明示的な宣言を追加 | true（同梱 YAML） | 不要 | 同梱の V5 YAML を使用する場合、追加の宣言は不要です。 | マルチパートアップロードを有効にするため、`true` を維持します。同梱のファイル/リクエストサイズの上限は 200MB のままです。 | [C020](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c020) |
| `spring.mvc.pathmatch.matching-strategy` | YAML から宣言を削除 | 未宣言 | 不要 | 別のファイルがまだ V4 のマッチャーキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除し、新しいマッチャーでワイルドカード URL をテストします。旧キーに対する依存ライブラリのサポートは確認されていません。 | [C021](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c021) |
| `spring.jpa.properties.hibernate.id.new_generator_mappings` | YAML から宣言を削除 | 未宣言 | 不要 | 別のファイルがまだこのジェネレーターキーを宣言している場合。 | V5 の YAML に合わせて宣言を削除します。データベースのシーケンスや ID 生成を独自に変更しないでください。 | [C022](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c022) |
| `spring.devtools.livereload.enabled` | YAML から宣言を削除 | 未確認（依存ライブラリのデフォルト） | 不要 | 新しいキーは不要です。別のファイルにこの行が残っている場合のみ対応します。 | V5 の YAML に合わせて宣言を削除できます。削除したからといって、依存ライブラリが LiveReload をサポートしなくなったことを意味するわけではありません。 | [C023](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c023) |
| `spring.profiles.group.dev` | プロファイルグループの更新 | ベース: dev,api-docs。個別のプロファイルではグループを宣言しない | 不要 | V4 の dev/prod プロファイルファイルを再利用する場合に推奨します。 | dev グループはベース YAML に残し、旧本番プロファイルの重複した dev グループを削除します。誤った dev/prod 設定が有効にならないよう、実行時のプロファイルを明示的に指定してください。 | [C024](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c024) |
| `spring.liquibase.contexts` | 処理の変更 | dev: dev, faker、prod: prod | 不要 | 既存のコンテキストが環境に合っていれば変更は不要です。 | V5 は Liquibase の bean を作成する際に、contexts/label-filter のリストを文字列に変換します。適切な dev/prod のコンテキストを維持します。V5 のスキーマ/シードの移行が適用される前に Liquibase を無効にしないでください。 | [C025](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c025) |
| `application.default-export.sort-log` | 追加 | id,desc（dev/prod） | 不要 | 同梱の並び順で問題なければ新しいキーは不要です。 | `id,desc` を維持します。変更する場合は、`id`、`timeStamp`、`level` などの有効な Log フィールドを使って field,direction の形式で指定します。この設定はログのエクスポートにのみ影響します。 | [C026](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c026) |
| `password-policy.keyboard-threshold` | 追加 | dev: 3、prod: 未宣言 | 不要 | データベースのポリシーでキーボード連続入力のチェックが有効になっている場合。 | しきい値を揃える必要がある場合は、dev と prod に同じ値を宣言します。このキーは、キーボード連続入力のチェックが有効な場合にのみ検証に影響します。 | [C027](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c027) |
| `password-policy.login-security.cleanup-schedule-cron` | 追加 | 0 0/5 * * * *（dev プロファイル） | 不要 | 本番にこのキーを追加する必要はありません。 | このキーは開発用 YAML に存在しますが、読み取り箇所は見つかっていません。実際のクリーンアップスケジュールは `mfa-config.cleanup-schedule-cron` を読み取ります。 | [C028](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c028) |
| `retention.workflow.enable` | 追加 | dev と prod で true | 必須（確認） | V5 の初回起動前に、クリーンアップが許可されるかを確認します。同梱の有効化ポリシーが適切でない場合にのみ値の変更が必要です。 | Java プロパティのデフォルトは false ですが、同梱の dev/prod プロファイルはクリーンアップを明示的に有効にしています。起動前にポリシーを確認してください。クリーンアップが許可される場合のみ `true` を維持し、それ以外は `false` に設定します。必須なのは判断であり、無条件に値を変更することではありません。`false` にすると、Quartz ジョブが保存されたままでもクリーンアップは実行されません。 | [C031](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c031) |
| `retention.workflow.cron` | 追加 | 0 0 2 * * ?（dev/prod） | 不要 | 02:00 がメンテナンス時間帯に適さない場合。 | Quartz cron を負荷の低い時間帯に設定し、WORKFLOW_RETENTION_CLEANUP がアプリケーションのタイムゾーンで登録されていることを確認します。 | [C032](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c032) |
| `retention.workflow.default-days` | 追加 | 30（dev/prod） | 不要 | ワークフローフォームのリテンション期間の初期値を変更する場合。 | この値は UI の初期値にのみ使われます。希望する日数を設定します。既存の各ワークフローのポリシーは個別に更新してください。デフォルトを変更しても既存のワークフローは更新されません。 | [C033](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c033) |
| `retention.workflow.default-states` | 追加 | SUCCESSFUL,FAULTED,STOPPED（dev/prod） | 不要 | ワークフローフォームでデフォルトで選択される状態を変更する場合。 | このリストは UI の初期値にのみ使われます。`RUNNING` を除く有効な JobState 名を使用します。保存済みのポリシーで新しいリストを使う場合は、個別に更新してください。 | [C034](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c034) |
| `retention.workflow.default-log-only` | 追加 | true（dev/prod） | 不要 | フォームの初期値として、ログのみのクリーンアップかジョブ全体のクリーンアップかを選ぶ場合。 | この値は UI の初期値にのみ使われます。ログのみをデフォルトにする場合は `true` を維持します。`false` で保存されたポリシーは、引き続きジョブとセッション/パラメーターのデータを削除できます。 | [C035](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c035) |
| `retention.workflow.job-batch-size` | 追加 | 100（dev/prod） | 不要 | クリーンアップ中のデータベース負荷を調整する場合。 | 正の数を使用します。`<=0` の値ではサービスが候補ジョブを取得しません。バッチサイズを増やす前に負荷テストを行ってください。 | [C036](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c036) |
| `retention.workflow.log-batch-size` | 追加 | 200（dev/prod） | 不要 | トランザクションあたりに削除するログ数を調整する場合。 | 正の数を使用します。値を増やすとトランザクション/ロックが長くなる可能性があるため、まずステージングでテストしてください。 | [C037](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c037) |
| `retention.workflow.max-cleanup-iterations` | 未使用キーの追加 | dev/prod で 1000。サービスでは使用されない | 不要 | クリーンアップを制限するためにこのキーを変更する必要はありません。 | サービスはこのプロパティを読み取らず、現在はコード内の `maxBatches=1000` を使用しています。キーを変更しても実行上限は変わりません。 | [C038](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c038) |
| `retention.workflow.max-log-cleanup-iterations` | 追加 | 10000（dev/prod） | 不要 | ジョブのログが多い場合、またはクリーンアップが反復上限に達する場合。 | log-batch-size とあわせて調整します。すべてのログが削除される前に上限に達すると、ジョブのクリーンアップは完了しません。 | [C039](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c039) |
| `retention.workflow.max-excluded-jobs` | 追加 | 900（dev/prod） | 不要 | データベースの SQL パラメーター上限により、ID 数を減らす必要がある場合。 | クエリの除外リストを制限するため、データベースに適した正の値を使用します。 | [C040](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c040) |


<a id="version-v5.0.0.1"></a>

### **1.2. v5.0.0.1**

| Configuration Key | 変更の種類 | V5 YAML の値 | 必須（Required） | 更新条件 | 対応 | 詳細 |
| --- | --- | --- | --- | --- | --- | --- |
| `logging.level.ROOT` | 値の変更 | ERROR（同梱 YAML） | 不要 | 本番の監視で INFO ログが必要な場合に推奨します。 | ERROR で十分であれば維持します。Center の INFO イベントが必要な場合は `logging.level.aka.rpa.orchestrator=INFO` を設定します。ROOT を変更するだけでは、同梱のアプリケーションロガーのレベル ERROR は上書きされません。INFO を Center のログファイルに出力する必要がある場合は、`logback-spring.xml` の FILE アペンダーの ThresholdFilter も ERROR から INFO に下げます。本番のデフォルトを DEBUG にしないでください。 | [C041](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c041) |

<a id="version-v5.0.0.2"></a>

### **1.3. v5.0.0.2**

| Configuration Key | 変更の種類 | V5 YAML の値 | 必須（Required） | 更新条件 | 対応 | 詳細 |
| --- | --- | --- | --- | --- | --- | --- |
| `cache.mode` | 動作の変更 | dev/prod で 0 | 条件付き | v5.0.0.2/.4/.5 または v5.1.0.1 で HA をデプロイする場合。 | Redis と分散連携には cache.mode=1 を設定します。ノード間で WebSocket 通知を行うには、`application.web-socket.sync-event=true` も設定します（[C073](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c073) を参照）。cache.mode だけでは通知の配信は有効になりません。同じクラスター内のノードは、正しい共有 Redis/ブローカーを使用する必要があります。単一ノードでは 0 のままで構いません。 | [C042](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c042) |
| `application.web-socket.sync-event` | 追加 | 実行時のデフォルト: false。YAML ではコメントアウトされた例のみ | 条件付き | クライアントが異なる Center ノードに接続する HA 構成をデプロイする場合。 | ノード間で WebSocket 通知を配信するため、`cache.mode=1` と共有ブローカーとあわせて、すべてのノードで `true` を設定します。 | [C073](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c073) |
| `spring.jpa.properties.hibernate.search.backend.type` | 動作の変更 | lucene（dev/prod） | 不要 | 検索とアセットのエクスポートに Elasticsearch を使用する場合。 | デプロイ済みのバックエンドを維持します。`elasticsearch` ではアセットのエクスポートは 10000 行に制限されます。`lucene` などの他のバックエンドでは 65530 行の上限が維持されます。エクスポートの上限をテストしてください。上限を回避するためだけにバックエンドを切り替えないでください。 | [C043](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c043) |

<a id="version-v5.0.0.4"></a>

### **1.4. v5.0.0.4**

| Configuration Key | 変更の種類 | V5 YAML の値 | 必須（Required） | 更新条件 | 対応 | 詳細 |
| --- | --- | --- | --- | --- | --- | --- |
| `settings.audit-logs.max-filter-days` | 追加 | 60（application.yml） | 不要 | 同梱の監査日付範囲で問題なければ新しいキーは不要です。 | このパラメーターは監査 UI に提供されるもので、すべての REST クライアントが制限されることを意味しません。60 を維持するか、UI の要件/エクスポート負荷に合わせて調整します。 | [C044](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c044) |
| `settings.audit-logs.default-filter-days` | 追加 | 30（application.yml） | 不要 | デフォルトで選択される監査の日付範囲を変更する場合。 | max-filter-days を超えないようにします。この監査範囲のグループは v5.1.0.1 にはありません。 | [C045](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c045) |
| `help.support-tickets` | 追加 | https://support.akabot.com（dev/prod） | 不要 | 環境からデフォルトのサポート URL にアクセスできない場合。 | アクセス可能な社内サポートポータルを使用します。このヘルプグループは v5.1.0.1 にはありません。 | [C046](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c046) |
| `help.documentation` | 追加 | https://docs.akabot.com（dev/prod） | 不要 | 社内またはオフラインのドキュメントが必要な場合。 | 許可されたドキュメント URL を使用します。同梱の URL が使用できれば追加のキーは不要です。 | [C047](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c047) |
| `help.studio-agent-download` | 追加 | https://docs.akabot.com/studio/latest/downloads（dev/prod） | 不要 | 社内の Studio/Agent ダウンロードリポジトリを使用する場合。 | 社内のダウンロード URL を使用します。デフォルトの URL が使用できれば変更は不要です。 | [C048](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c048) |
| `help.center-download` | 追加 | https://docs.akabot.com/center/latest/downloads（dev/prod） | 不要 | 社内の Center ダウンロードリポジトリを使用する場合。 | 社内のダウンロード URL を使用します。デフォルトの URL が使用できれば変更は不要です。 | [C049](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c049) |
| `help.center-release-notes` | 追加 | https://docs.akabot.com/center/latest/release-notes（dev/prod） | 不要 | 社内でホストしているリリースノートを使用する場合。 | 社内のドキュメント URL を使用します。デフォルトの URL は、特定のバージョンがリリースされたことを示すものではありません。 | [C050](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c050) |
| `calendar-setting.make-up-workday.sync-cron` | 追加 | 0 5 0 * * *（dev/prod） | 不要 | 00:05 の同期時刻が適さない場合（v5.0.0.4/.5 のみ）。 | 適切な Spring cron を設定し、振替出勤日トリガーの同期を確認します。 | [C051](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c051) |
| `calendar-setting.make-up-workday.time-zone` | 追加 | 空文字列。バックグラウンドのスケジュールはシステムのタイムゾーンを使用 | 不要 | バックグラウンド同期に固定のタイムゾーンが必要な場合（v5.0.0.4/.5 のみ）。 | IANA タイムゾーンを設定します。これはバックグラウンドタスクのスケジュールを変更するもので、各プロセススケジュールのタイムゾーンは変更しません。 | [C052](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c052) |
| `calendar-setting.make-up-workday.lookahead-days` | 追加 | 14（dev/prod） | 不要 | 14 日より先のトリガーを準備する必要がある場合。 | 正の日数を使用し、タイムゾーンの境界付近の日付をテストします。このカレンダーグループは v5.1.0.1 にはありません。 | [C053](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c053) |
| `server.activemq.consumer.agent-pool.prefetch-size` | 動作の変更 | YAML では引き続き 1000。.4/.5 のプルコンシューマーは実際には 0 を使用 | 不要 | v5.0.0.4/.5 のプルコンシューマーを制御するためにキーを変更する必要はありません。 | コードは受信前に prefetch=0 を強制します。YAML の値 1000 は、このコンシューマーが 1000 件のメッセージをバッファリングすることを意味しません。v5.1.0.1 は引き続きプッシュコンシューマーを使用するため、この結論は当てはまりません。 | [C054](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c054) |

<a id="version-v5.0.0.5"></a>

### **1.5. v5.0.0.5**

**v5.0.0.4 と比べて、新しいキー、キー名の変更、削除、デプロイ時のデフォルト値の変更は確認されていません。** 変更点は FIFO/PENDING の処理と、スケジュール/休日の待機に関するものです。v5.0.0.4 の設定を維持し、1 つのエージェントでの複数スケジュールと `POSTPONE_NEXT_WORKING_DAY` をテストしてください。

<a id="version-v5.1.0.0"></a>

### **1.6. v5.1.0.0**

v5.0.0.2 に記載した cache.mode、WebSocket 通知の同期、検索バックエンドのエクスポート上限の変更は、v5.1.0.0 にはまだ適用されません。

| Configuration Key | 変更の種類 | V5 YAML の値 | 必須（Required） | 更新条件 | 対応 | 詳細 |
| --- | --- | --- | --- | --- | --- | --- |
| `ai-service.enabled` | 追加 | false（dev/prod） | 条件付き | v5.1 で AI 連携をデプロイする場合。 | このフラグでは静的なゲートウェイルートは削除されません。エンドポイント/HMAC の準備が整ってから有効にしてください。本番では `AI_SERVICE_ENABLED` を使用します。開発用 YAML にはリテラルの false が記載されています。 | [C055](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c055) |
| `ai-service.frontend-url` | 追加 | dev: http://localhost:3001、prod: `${AI_SERVICE_FRONTEND_URL:http://localhost:3001}` | 条件付き | AI UI を使用する場合。 | 本番では、`AI_SERVICE_FRONTEND_URL` にブラウザーからアクセスできる http(s) URL を設定します。Kubernetes ネットワーク内でしか名前解決できないサービス名は使用しないでください。 | [C056](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c056) |
| `ai-service.backend-url` | 追加 | dev: http://localhost:3000、prod: `${AI_SERVICE_BACKEND_URL:http://ai-service:3000}` | 条件付き | AI を使用する場合。カスタムプロファイルでも、ルートを解決するためにこの URL が必要です。 | 本番では、`AI_SERVICE_BACKEND_URL` に Center から到達できる AI バックエンドの URL を設定します。静的ルートは enabled=false の場合でもこのプロパティを参照します。 | [C057](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c057) |
| `ai-service.webhook-path` | 追加 | /api/v1/center-lifecycle-events（dev/prod） | 条件付き | AI バックエンドが異なる Webhook パスを使用する場合のみ変更します。 | 適切であればデフォルトのパスを維持します。そうでない場合は、プロパティを明示的に設定し、HMAC 署名付きの Webhook をテストします。 | [C058](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c058) |
| `ai-service.hmac-key-id` | 追加 | dev のサンプル値は非表示。prod は余分な } を含む形で AI_SERVICE_HMAC_KEY_ID を参照 | 条件付き | `ai-service.enabled=true` の場合。 | AI 側と一致する `AI_SERVICE_HMAC_KEY_ID` を指定します。本番テンプレートには余分な } が含まれているため、プロパティを直接上書きし、HMAC 署名付きリクエストをテストしてください。AI の設定ガイドを参照してください。 | [C059](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c059) |
| `ai-service.hmac-secret` | 追加 | dev のサンプル値は非表示。prod は余分な } を含む形で AI_SERVICE_HMAC_SECRET を参照 | 条件付き | `ai-service.enabled=true` の場合。 | AI 側と一致する専用の `AI_SERVICE_HMAC_SECRET` を指定します。本番のプレースホルダーに含まれる余分な } を避けるため、プロパティを直接上書きします。開発用のサンプル値は使用しないでください。 | [C060](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c060) |
| `ai-service.internal-auth.key-id` | 追加 | dev のサンプル値は非表示。prod は CENTER_INTERNAL_HMAC_KEY_ID を使用し、未設定の場合は空 | 条件付き | `ai-service.enabled=true` の場合。 | AI 側が Center へのリクエストの署名に使う ID と一致する `CENTER_INTERNAL_HMAC_KEY_ID` を指定します。 | [C061](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c061) |
| `ai-service.internal-auth.hmac-secret` | 追加 | dev のサンプル値は非表示。prod は CENTER_INTERNAL_HMAC_SECRET を使用し、未設定の場合は空 | 条件付き | `ai-service.enabled=true` の場合。 | AI の署名シークレットと一致する `CENTER_INTERNAL_HMAC_SECRET` を指定します。開発用のサンプル値は使用しないでください。 | [C062](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c062) |
| `ai-service.internal-auth.allowed-clock-skew-seconds` | 追加 | 60（dev/prod） | 不要 | 60 秒の時刻のずれで問題なければ追加の宣言は不要です。 | 両システムの時刻を同期させてください。許容値を変更する場合は `CENTER_INTERNAL_ALLOWED_CLOCK_SKEW_SECONDS` を使用します。フィルターは最小 1 秒を強制します。 | [C063](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c063) |
| `ai-service.dispatcher-max-attempts` | 追加 | 10（dev/prod） | 不要 | ライフサイクルイベントの配信試行回数の上限を変更する場合。 | `AI_SERVICE_DISPATCHER_MAX_ATTEMPTS` を使用します。上限に達した後は outbox の状態を監視してください。 | [C064](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c064) |
| `ai-service.dispatcher-retry-seconds` | 追加 | 5（dev/prod） | 不要 | ライフサイクルイベント配信の再試行までの待ち時間を変更する場合。 | `AI_SERVICE_DISPATCHER_RETRY_SECONDS` を使用します。バックエンド障害時の動作と再試行の負荷をテストしてください。 | [C065](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c065) |
| `spring.cloud.gateway.server.webmvc.routes` | ルートとフィルターの追加 | 3 つのサービスルートと 4 つの AI ルート、CORS フィルター付き | 条件付き | AI を使用し、外部/プロファイルのルート一覧に対象の AI ルートまたはフィルターが含まれていない場合。同梱の 5.1 のルート一覧を使う場合は重複した上書きは不要です。 | カスタムの一覧を使用する場合は、対象 5.1 のルート定義をマージします。3 つのサービスルートを維持し、4 つの AI ルートと必要なレスポンス CORS フィルターを追加します。各 AI ルートは /ai-service を取り除き、対象 YAML で定義された 2 つの CORS レスポンスヘッダーを削除します。プロファイルの一覧はルート一覧全体を置き換えます。 | [C066](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c066) |
| `spring.servlet.multipart.resolve-lazily` | 追加 | true（同梱 YAML） | 条件付き | AI へのアップロードを使用し、外部の上書きがマルチパートの遅延解析を無効にしている場合。同梱の AI 用 YAML を使う場合は新たな宣言は不要です。 | multipart.enabled=true と必要なサイズ上限とあわせて `true` を維持します。Center への直接アップロードと AI ゲートウェイ経由のアップロードの両方をテストしてください。 | [C067](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c067) |
| `rate-limit.filters[1].url` | 追加 | /internal/ai/v1/token/introspect（同梱 YAML） | 条件付き | イントロスペクションのレート制限が有効で、カスタムのフィルター一覧にこの URL ルールが含まれていない場合。同梱の一覧を維持する場合は新しいルールは不要です。 | フィルター一覧を置き換える場合は、/api/authenticate を維持し、適切な capacity、duration、refill-capacity とともに /internal/ai/v1/token/introspect を含めます。[1] はサンプル内の位置を示すもので、固定のインデックスではありません。レート制限を有効にするだけで、同梱のルールを重複させる必要はありません。 | [C068](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c068) |
| `rate-limit.filters[1].capacity` | 追加 | 100（同梱 YAML） | 不要 | レート制限を有効にし、イントロスペクションの負荷を調整する場合。 | duration/refill-capacity とあわせてバケットの容量を設定します。リミッターはデフォルトで無効です。 | [C069](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c069) |
| `rate-limit.filters[1].duration` | 追加 | PT1M（同梱 YAML） | 不要 | レート制限を有効にし、補充間隔を変更する場合。 | PT1M などの有効な Duration を使用し、capacity/refill-capacity とあわせて調整します。 | [C070](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c070) |
| `rate-limit.filters[1].refill-capacity` | 追加 | 100（同梱 YAML） | 不要 | レート制限を有効にし、補充ごとのトークン数を変更する場合。 | 実際の負荷に合わせて capacity/duration とあわせて調整します。リミッターが無効の間は効果がありません。 | [C071](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c071) |
| `jhipster.security.content-security-policy` | 動作の変更 | 元の CSP 文字列。AI を有効にする場合は AI のオリジンを追加 | 条件付き | AI UI を使用し、有効な Center/リバースプロキシの CSP がそのオリジンをブロックしている場合。有効なポリシーですでに許可されている場合は、追加の CSP 上書きは不要です。 | リバースプロキシのポリシーも含め、有効な CSP で AI UI の正確なオリジンを許可し、ブラウザーで iframe をテストします。既存のディレクティブは維持します。ワイルドカードのオリジンは避けてください。enabled=false では AI のオリジンは追加されません。 | [C072](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c072) |

<a id="version-v5.1.0.1"></a>

### **1.7. v5.1.0.1**

このバージョンには、v5.0.0.2 の cache.mode、WebSocket 通知の同期、検索バックエンドのエクスポート上限の変更が含まれます。v5.0.0.4/.5 の audit/help/calendar のキーは含まれません。

| Configuration Key | 変更の種類 | V5 YAML の値 | 必須（Required） | 更新条件 | 対応 | 詳細 |
| --- | --- | --- | --- | --- | --- | --- |
| `cache.mode` | 動作の変更 | dev/prod で 0 | 条件付き | v5.0.0.2/.4/.5 または v5.1.0.1 で HA をデプロイする場合。 | Redis と分散連携には cache.mode=1 を設定します。ノード間で WebSocket 通知を行うには、`application.web-socket.sync-event=true` も設定します（[C073](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c073) を参照）。cache.mode だけでは通知の配信は有効になりません。同じクラスター内のノードは、正しい共有 Redis/ブローカーを使用する必要があります。単一ノードでは 0 のままで構いません。 | [C042](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c042) |
| `application.web-socket.sync-event` | 追加 | 実行時のデフォルト: false。YAML ではコメントアウトされた例のみ | 条件付き | クライアントが異なる Center ノードに接続する HA 構成をデプロイする場合。 | ノード間で WebSocket 通知を配信するため、`cache.mode=1` と共有ブローカーとあわせて、すべてのノードで `true` を設定します。 | [C073](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c073) |
| `spring.jpa.properties.hibernate.search.backend.type` | 動作の変更 | lucene（dev/prod） | 不要 | 検索とアセットのエクスポートに Elasticsearch を使用する場合。 | デプロイ済みのバックエンドを維持します。`elasticsearch` ではアセットのエクスポートは 10000 行に制限されます。`lucene` などの他のバックエンドでは 65530 行の上限が維持されます。エクスポートの上限をテストしてください。上限を回避するためだけにバックエンドを切り替えないでください。 | [C043](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c043) |

<a id="target-version"></a>

## **2. 対象バージョン別の追加設定**

| 対象バージョン | Configuration Key | 同梱の値 | 必須（Required） | 対応 / 更新条件 |
| --- | --- | --- | --- | --- |
| v5.0.0.1, v5.0.0.2, v5.0.0.4, v5.0.0.5, v5.1.0.0, v5.1.0.1 | `logging.level.ROOT` | 本番では ERROR | 不要 | 監視要件を満たしていれば ERROR を維持します。Center の INFO イベントが必要な場合は `logging.level.aka.rpa.orchestrator=INFO` を設定します。ROOT を変更するだけでは不十分です。INFO を Center のログファイルに出力するには、`logback-spring.xml` の FILE アペンダーの ThresholdFilter も INFO に下げます。[C041](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c041) を参照してください。 |
| v5.0.0.2, v5.0.0.4, v5.0.0.5, v5.1.0.1 | `cache.mode` | dev/prod で 0 | 条件付き | ローカルキャッシュには 0 を、Redis/分散連携をデプロイする場合は正しい Redis クラスター設定とあわせて 1 を使用します。ノード間で WebSocket 通知を行うには、下記のとおり `application.web-socket.sync-event` も有効にします。 |
| v5.0.0.2, v5.0.0.4, v5.0.0.5, v5.1.0.1 | `application.web-socket.sync-event` | 実行時は false。YAML ではコメントアウトされた例のみ | 条件付き | `cache.mode=1` と共有ブローカーとあわせて、すべての HA ノードで `true` を設定します。デフォルトの `false` では、通知は送信元のノードでのみ配信されます。[C073](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#c073) を参照してください。 |
| v5.0.0.2, v5.0.0.4, v5.0.0.5, v5.1.0.1 | `spring.jpa.properties.hibernate.search.backend.type` | dev/prod で lucene | 不要 | デプロイ済みのバックエンドを維持します。elasticsearch ではアセットのエクスポートは 10000 行に制限されます。この上限を回避するためだけにバックエンドを切り替えないでください。 |
| v5.0.0.4, v5.0.0.5 | `settings.audit-logs.max-filter-days`<br />`settings.audit-logs.default-filter-days` | 60 / 30 日 | 不要 | 同梱の値を維持するか、監査 UI の日付範囲を調整します。default-filter-days は max-filter-days を超えないようにしてください。 |
| v5.0.0.4, v5.0.0.5 | `help.support-tickets`<br />`help.documentation`<br />`help.studio-agent-download`<br />`help.center-download`<br />`help.center-release-notes` | YAML 内のサポート、ドキュメント、製品ダウンロードの URL | 不要 | 社内ポータルまたはダウンロードリポジトリが必要な場合のみ変更します。 |
| v5.0.0.4, v5.0.0.5 | `calendar-setting.make-up-workday.sync-cron`<br />`calendar-setting.make-up-workday.time-zone`<br />`calendar-setting.make-up-workday.lookahead-days` | cron `0 5 0 * * *`、time-zone は空、lookahead-days=14 | 不要 | 適切であれば同梱の値を維持します。実行時刻を固定する場合は IANA タイムゾーンを設定し、運用の要件に合わせて cron/先読み期間を調整します。 |
| v5.0.0.4, v5.0.0.5 | `server.activemq.consumer.agent-pool.prefetch-size` | YAML では 1000 | 不要 | プルコンシューマーは実際には prefetch=0 を使用するため、制御のためにキーを変更する必要はありません。この結論は v5.1.0.1 には当てはまりません。 |
| v5.1.0.0, v5.1.0.1 | `ai-service.*`<br />`spring.servlet.multipart.resolve-lazily`<br />`spring.cloud.gateway.server.webmvc.routes`<br />`jhipster.security.content-security-policy` | AI は無効、multipart.resolve-lazily=true、ルート/CSP は V5 YAML の定義どおり | 条件付き | AI を使用する場合は、[AI の設定](/docs/center/latest/installation/configuration-migration-4x-to-5x.md#ai-huong-dan)に記載のキーを指定します。ルートや CSP を明示的に設定している場合は、既存のサービスルートを維持し、AI ルートを追加して、AI UI の正確なオリジンを許可します。 |

v5.0.0.5 は v5.0.0.4 と同じ YAML のキー/デフォルト値を使用します。本ドキュメントの範囲では、audit/help/calendar のキーは v5.0.0.4 と v5.0.0.5 にのみ適用されます。v5.1.0.0 または v5.1.0.1 の必須の追加設定には含めないでください。
