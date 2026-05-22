---
id: get-results-via-api-output
title: "API出力経由で結果を取得"
sidebar_label: "API出力"
sidebar_position: 2
description: "Webhook / API 出力経由で抽出結果を自動的に受け取ります。"
displayed_sidebar: visionSidebar
---
# API出力経由で結果を取得
ユーザーは API 出力経由で akaBot Vision のドキュメントの抽出結果を受け取ることができます。 akaBot Vision からユーザーのシステムに直接接続する API を設定することで、ユーザーは抽出結果を取得できます。この記事では、API 出力の設定方法を説明します。

**ステップ 1**: パイプラインの構成に移動します

![image-20230210174521-1.png](/static/img/image-20230210174521-1.png)

**ステップ 2**: 特定のパイプライン構成の [出力] タブに移動します。

![image-20221021145204-26.png](/static/img/image-20221021145204-26.png)

**ステップ 3:** API URL を入力します

![image-20221021153100-27.png](/static/img/image-20221021153100-27.png)

**ステップ 4**: 認証タイプを選択します。認可には No Auth と Bear Token の 2 種類があります。

![image-20221021153310-28.png](/static/img/image-20221021153310-28.png)

スタッフが認証タイプをベアトークンとして選択した場合、スタッフは「トークン」ボックスにトークンを入力する必要があります。

![image-20221021153636-38.png](/static/img/image-20221021153636-38.png)

**ステップ 5**: [保存] ボタンをクリックします。

![image-20221021154027-40.png](/static/img/image-20221021154027-40.png)

API URL を保存すると、akaBot Vision は以下のテンプレートに従ってリクエストを API に送信します。

```json
{  
  "documentId": "2f204e1b-9937-4656-b947-6856a0efe648",  
  "documentName": "(Tax Invoice) Dubai Petroleum\_TOHS-1419-021 (Ramcharan, Ryan Thomas).pdf",  
  "pipelineName": "not split never auth",  
  "data": [  
    {  
      "fieldName": "Customer Name",  
      "fieldValue": "Dubai jPetroleum Establishment",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Customer Address",  
      "fieldValue": "1st Interchange, Shaikh Zayed Road Dubai, UAE, P.0. Box 2222",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Customer VAT code",  
      "fieldValue": "100356248300003",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Supplier Name",  
      "fieldValue": "TỈME OAK HOTEL & SUITES",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Supplier Address",  
      "fieldValue": "Abdulla Omran, Tayram St, ẠI Thanyah 1, Barsha Heights Dubai United Arab Emirates, 283634",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Supplier VAT code",  
      "fieldValue": "100271260000003",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Invoice Date",  
      "fieldValue": "08/11/2021",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Invoice No",  
      "fieldValue": "TOHS-1419-021",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Delivery Date",  
      "fieldValue": "",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Exchange rate",  
      "fieldValue": "",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Total Amount in Words",  
      "fieldValue": "Seven Hundred Ninety Five Dirhams and One Fils",  
      "tableValue": null  
    },  
    {  
      "fieldName": "VAT Rate",  
      "fieldValue": "5",  
      "tableValue": null  
    },  
    {  
      "fieldName": "PO No",  
      "fieldValue": "",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Agreement Number",  
      "fieldValue": "",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Table Description",  
      "fieldValue": null,  
      "tableValue": [  
  
      ]  
    },  
    {  
      "fieldName": "Table Quantity",  
      "fieldValue": null,  
      "tableValue": [  
  
      ]  
    },  
    {  
      "fieldName": "Table Unit Price",  
      "fieldValue": null,  
      "tableValue": [  
  
      ]  
    },  
    {  
      "fieldName": "Table Tax Rate",  
      "fieldValue": null,  
      "tableValue": [  
  
      ]  
    },  
    {  
      "fieldName": "Table Tax",  
      "fieldValue": null,  
      "tableValue": [  
  
      ]  
    },  
    {  
      "fieldName": "Table Total Base",  
      "fieldValue": null,  
      "tableValue": [  
  
      ]  
    },  
    {  
      "fieldName": "Table Total Amount",  
      "fieldValue": null,  
      "tableValue": [  
  
      ]  
    },  
    {  
      "fieldName": "Description\_1",  
      "fieldValue": null,  
      "tableValue": [  
        "Description",  
        "Room Charges",  
        "Ramcharan, Ryan Thomas 10% Service Charge",  
        "2 Ramcharan, Ryan Thomas 7% Municipality Fee",  
        "Ramcharan, Ryan Thomas Tourism Dirham Fee",  
        "Ramcharan, Ryan Thomas"  
      ]  
    },  
    {  
      "fieldName": "Quantity\_1",  
      "fieldValue": null,  
      "tableValue": [  
        "No. of Nights",  
        "",  
        "3",  
        "3",  
        "3",  
        "3"  
      ]  
    },  
    {  
      "fieldName": "Unit\_price\_1",  
      "fieldValue": null,  
      "tableValue": [  
        "Base Rate (Taxable)",  
        "",  
        "204.08",  
        "20.41",  
        "14.29",  
        "15.00"  
      ]  
    },  
    {  
      "fieldName": "Total\_base\_1",  
      "fieldValue": null,  
      "tableValue": [  
        "Sub Total (AED)",  
        "",  
        "612.24",  
        "61.23",  
        "42.87",  
        "45.00"  
      ]  
    },  
    {  
      "fieldName": "Tax\_1",  
      "fieldValue": null,  
      "tableValue": [  
        "VAT Amount (5%)",  
        "",  
        "30.61",  
        "3.06",  
        "",  
        ""  
      ]  
    },  
    {  
      "fieldName": "Total\_amount\_1",  
      "fieldValue": null,  
      "tableValue": [  
        "Total (AED)",  
        "",  
        "642.85",  
        "64.29",  
        "42.87",  
        "45.00"  
      ]  
    },  
    {  
      "fieldName": "Currency",  
      "fieldValue": null,  
      "tableValue": [  
        "AED"  
      ]  
    },  
    {  
      "fieldName": "Total Amount Before Tax",  
      "fieldValue": null,  
      "tableValue": [  
        "761.34"  
      ]  
    },  
    {  
      "fieldName": "Total Tax Amount",  
      "fieldValue": null,  
      "tableValue": [  
        "33.67"  
      ]  
    },  
    {  
      "fieldName": "Total Amount With Tax",  
      "fieldValue": null,  
      "tableValue": [  
        "795.01"  
      ]  
    },  
    {  
      "fieldName": "Discount",  
      "fieldValue": null,  
      "tableValue": [  
        ""  
      ]  
    },  
    {  
      "fieldName": "Iban Number",  
      "fieldValue": null,  
      "tableValue": [  
        "AE160570000011109569011"  
      ]  
    },  
    {  
      "fieldName": "Account Number",  
      "fieldValue": null,  
      "tableValue": [  
        "011109569011"  
      ]  
    },  
    {  
      "fieldName": "Account Currency",  
      "fieldValue": null,  
      "tableValue": [  
        ""  
      ]  
    },  
    {  
      "fieldName": "Bank Name",  
      "fieldValue": null,  
      "tableValue": [  
        "Ajman Bank"  
      ]  
    },  
    {  
      "fieldName": "Account Name",  
      "fieldValue": null,  
      "tableValue": [  
        "TIME Oak Hotel and Suites FZ- LLC"  
      ]  
    },  
    {  
      "fieldName": "Swift code",  
      "fieldValue": null,  
      "tableValue": [  
        "AJMNAEAJ"  
      ]  
    },  
    {  
      "fieldName": "Invoice Type",  
      "fieldValue": "tax invoice",  
      "tableValue": null  
    },  
    {  
      "fieldName": "Invoice Currency",  
      "fieldValue": "",  
      "tableValue": null  
    }  
  ]  
}
