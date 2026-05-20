---
id: introduction
title: "はじめに"
sidebar_label: "はじめに"
sidebar_position: 1
description: "カスタム アクティビティ パッケージの概要"
displayed_sidebar: activitiesSidebar
---
# はじめに

## **説明**

アクティビティは、Windows Workflow Foundation の動作の中核単位です。アクティビティの実行ロジックは、マネージ コードで実装することも、他のアクティビティを使用して実装することもできます。このトピックでは、アクティビティの作成方法を説明します。

**カスタム アクティビティを作成するには 2 つの手順が必要です。**

1. カスタム アクティビティ コードを作成します。
2. アクティビティをパッケージ化する
3. アセンブリ (.dll) を akaBot プラットフォームに登録します。

📘 **前提条件**

コンポーネントがインストールされている Visual Studio 2013 以降:

* Windows ワークフロー財団 (WF)。
* Windows ワークフロー コミュニケーション財団 (WCF)。
NET フレームワーク 4.5.2。
別名ボットプラットフォーム。

## **アクティビティコードの書き込み**

**カスタム アクティビティを開発するには、WF 拡張パッケージがインストールされた Microsoft Visual Studio を使用し、次の手順を実行する必要があります。**

1. Microsoft Visual Studioを開きます。
2. [新しいプロジェクト] ダイアログの [インストール済み] カテゴリで、 [Visual C#] > [ワークフロー] (または [Visual Basic] > [ワークフロー]) を選択します。
3. アクティビティ ライブラリ プロジェクト テンプレートを選択します。 [名前] ボックスに「RCA.Activities.Demo」と入力します。 「.NET Framework 4.5.2」を選択し、「OK」をクリックします。
4. ソリューション エクスプローラーで Activity1.xaml を右クリックし、 [削除] を選択します。 「OK」をクリックして確認します。
5. 「プロジェクト」メニューから「新しい項目の追加」を選択します。
6. [インストール済み] > [共通項目] ノードで、[ワークフロー] を選択します。 「ワークフロー」リストから「コード アクティビティ」を選択します。
7. 「名前」ボックスに「SumInt」と入力し、「追加」をクリックします。
8. 既存の SumInt 定義を次の定義に置き換えます。
9. 「ソリューションの構築」をクリックします。エラーは表示されず、ビルド出力ディレクトリにアセンブリ ファイル RCA.Activities.Demo.dll が存在します。

```csharp
using System.Activities;
namespace RCA.Activities.Demo
{
    public sealed class SumInt : CodeActivity
    {
        public InArgument<int> Number1 { get; set; }
        public InArgument<int> Number2 { get; set; }
        public OutArgument<int> Total { get; set; }

        protected override void Execute(CodeActivityContext context)
        {
            int num1 = context.GetValue(this.Number1);
            int num2 = context.GetValue(this.Number2);

            context.SetValue(Total, num1 + num2);
        }
    }
}
```

## **アクティビティをパッケージ化**

アクティビティをパッケージ化するには、次の手順を実行してください。

1. nuget.exeをダウンロードする
[https://dist.nuget.org/win-x86-commandline/latest/nuget.exe](https://dist.nuget.org/win-x86-commandline/latest/nuget.exe)から nuget.exe をダウンロードします。
2. .nupkg ファイルを生成する

* プロジェクトフォルダーでコマンドプロンプトを開きます

![image-20230427181814-5.png](/static/img/58878f_image-20230427181814-5.png)

*図 1 アドレス バーをクリック -> 「cmd」と入力 -> Enter キーを押します*

* 次のコマンドを使用して **.nuspec** ファイルを生成します: **%PATH%\nuget spec** (**%PATH%** は ** nuget.exe** ファイルが配置されているディレクトリです)。
* 作成した **.nuspec** ファイルを開き、すべてのサンプル データを削除し、少なくとも **作成者、説明** を入力します

![image-20230427181835-6.png](/static/img/f56d6c_image-20230427181835-6.png)

*図 2 作成者、説明の編集*

* ユーザーがコピーしたいファイルのファイル要素を追加します。

![image-20230427181849-7.png](/static/img/85d7ca_image-20230427181849-7.png)

*図 3 コピーするファイルを追加する*

* 次のコマンドを使用して **.nupkg** ファイルを生成します: **%PATH%\nuget Pack** (**%PATH%** は **nuget.exe** ファイルが配置されているディレクトリです)。

## **パッケージを登録します**

パッケージを登録するには、生成された .nupkg ファイルを **ProgramData** フォルダー: C:\ProgramData\akaBot\Packages\ にコピーする必要があります。

## **パッケージをインストールします**

パッケージをインストールするには、次の手順を実行してください。

1. パッケージマネージャーを開く

![image-20230427181917-8.png](/static/img/0ac700_image-20230427181917-8.png)

*図 4 パッケージ マネージャーを開く*

2. 「ローカル」タブからパッケージを選択 -> バージョンを選択 -> インストールをクリック -> 保存をクリック

![image-20230427181932-9.png](/static/img/c8f0d4_image-20230427181932-9.png)

*図 5 リストからパッケージを選択 -> バージョンを選択 -> インストールをクリック -> 保存をクリック*

3. スタジオの再起動を確認する

![image-20230427182048-10.png](/static/img/c588a3_image-20230427182048-10.png)

4. カスタムアクティビティがツールボックスに表示されます

![image-20230427182135-11.png](/static/img/f16aab_image-20230427182135-11.png)
