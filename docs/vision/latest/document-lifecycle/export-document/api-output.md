---
id: get-results-via-api-output
title: Get Results via API Output
sidebar_label: API Output
sidebar_position: 2
description: Receive extraction results automatically via webhook / API output.
displayed_sidebar: visionSidebar
---
# Get Results Via API Output
User can receive extraction results of documents in akaBot Vision via API Output. By configuring an API to directly connect from akaBot Vision to user's systems, user will get extraction results. In this article, we will show you how to configure API Output

**Step 1**: Go to Pipeline's Configuration

![image-20230210174521-1.png](/static/img/image-20230210174521-1.png)

**Step 2**: Go to the "Output" tab on the specific pipeline's configuration that

![image-20221021145204-26.png](/static/img/image-20221021145204-26.png)

**Step 3:** Input your API url

![image-20221021153100-27.png](/static/img/image-20221021153100-27.png)

**Step 4**: Choose authorization type. There are 2 type of authorization: No Auth and Bear Token

![image-20221021153310-28.png](/static/img/image-20221021153310-28.png)

If staff choose that Authorization Type is Bear Token, staff need to input the token into "Token" box

![image-20221021153636-38.png](/static/img/image-20221021153636-38.png)

**Step 5**: Click "Save" button

![image-20221021154027-40.png](/static/img/image-20221021154027-40.png)

After saving your API URL, akaBot Vision will send the request to your API following the template below:

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
