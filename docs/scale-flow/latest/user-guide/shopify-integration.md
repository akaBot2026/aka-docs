---
id: shopify-integration
title: "Shopify Integration"
sidebar_label: "Shopify"
sidebar_position: 14
description: "Guide to connect your Shopify store to ScaleFlow using Client ID, Client Secret, and Store URL."
displayed_sidebar: scaleFlowSidebar
---

# Shopify Integration

Connecting Shopify allows ScaleFlow to access your e-commerce store's data, such as products, orders, and customer information. This enables your AI Agents to retrieve real-time data to answer customer inquiries or automate tasks.

To connect Shopify, you will need your Shopify **Store URL**, a **Client ID**, and a **Client Secret** (API secret key) generated from a Shopify Custom App.

---

## **Before you start**

Make sure you have:

- A Shopify store with an active plan.
- Administrator access to the Shopify admin dashboard of the store.
- Permission in ScaleFlow to manage integrations.

---

## **Step-by-step connection guide**

### Step 1: Find your Shopify Store URL

Your Shopify Store URL is the primary `.myshopify.com` domain for your store.

1. Access [https://admin.shopify.com/](https://admin.shopify.com/) and log in to your store.
2. In the left navigation bar, click on **Settings** at the bottom.

   ![Shopify Sidebar Settings](/static/img/image_shopify_7.png)

3. In the Settings page (or from the store switcher dropdown), find the `.myshopify.com` domain of your store.

   ![Shopify Store URL](/static/img/image_shopify_2.png)

4. Copy the domain part, which is **`your-store-name.myshopify.com`**.
   > **Note:** Only enter the domain part (e.g., `your-store-name.myshopify.com`) in the Store URL field in ScaleFlow. Do not include `https://` or trailing slashes.

### Step 2: Configure App Settings (Scopes and Redirect URLs)

1. Access [https://partners.shopify.com/](https://partners.shopify.com/) and log in to your Shopify Partners account. In the left navigation menu, click on **Apps** to open your developer dashboard.

   ![Shopify Partners Apps Menu](/static/img/image_shopify_3.jpg)

2. On the Apps page, click **Create app**. Enter the **App name** (e.g., `ScaleFlow Integration`) and click **Create** to confirm.

   ![Shopify Create App](/static/img/image_shopify_4.jpg)

3. In the left navigation menu of your app, click on **App distribution**.
   - Under the **Distribution type** section, select **Custom distribution**.
   - Confirm the distribution method by clicking **Choose distribution**.

   ![Shopify App Distribution](/static/img/image_shopify_8.png)

4. In the left navigation menu, click on **API access requests**.

   ![Shopify Request API Access](/static/img/image_shopify_9.png)

5. On the **API access requests** page, click on **Protected customer data access** and click **Request access**.

   ![Shopify Protected Customer Data Access](/static/img/image_shopify_10.png)

6. In the control panel/modal that appears, click the **Select** button under the **Protected customer data** section, check/tick **Customer service** and **App functionality**, and then click **Save**.

   ![Shopify Customer Data Selection](/static/img/image_shopify_11.png)
   ![Shopify Customer Data Selection](/static/img/image_shopify_12.png)

7. In the left navigation menu of your app, click on the **Configuration** tab (or **App configuration**).
   - Under the **Access** section:
     - Check/tick the **Use legacy install flow** checkbox.
     - Leave the **Scopes** and **Optional scopes** fields blank (no need to enter scopes here).
   - Under the **App URL** section:
     - Enter your **App URL**.
     - In the **Allowed redirection URL(s)** field, enter the redirect URL provided by ScaleFlow (e.g., `https://your-scaleflow-domain.com/api/v1/integrations/shopify/callback`).
8. Click **Release** (or **Save configuration**) to apply changes.

   ![Shopify App Configuration](/static/img/image_shopify_15.png)

### Step 3: Retrieve API Credentials

1. In the app settings menu on the left, click on **Settings**.
2. Under the **Client credentials** section, find your credentials:
   - **Client ID**: Copy the value from the **Client ID** field.
   - **Client Secret**: Click **Reveal client secret** (eye icon) and copy the value from the **Client secret** field.
     > **Important Note:** Treat the Client Secret as a password. Store it securely and never share it publicly.

   ![Shopify API Credentials](/static/img/image_shopify_6.png)

---

## **Connecting Shopify in ScaleFlow**

Once you have gathered the three required parameters (Store URL, Client ID, Client Secret), complete the connection in ScaleFlow:

1. In ScaleFlow, open **Integrations** from the left navigation menu.
2. Click on the **Shopify** card and click **Connect**.
3. Fill in the connection form:

\* indicates required fields.

- **Store URL (String)**\*: The primary domain of your Shopify store (retrieved in Step 1).  
  Example: `"your-store-name.myshopify.com"`
- **Client ID (String)**\*: The Client ID from your Shopify Partners App Settings (retrieved in Step 3).  
  Example: `"your_shopify_client_id"`
- **Client Secret (String)**\*: The Client Secret from your Shopify Partners App Settings (retrieved in Step 3).  
  Example: `"your_shopify_client_secret"`

4. Click **Connect** to save.
5. ScaleFlow will redirect you to your Shopify store admin to authorize and install the app. Click **Install app** to complete the connection.

---

## **Quick troubleshooting**

### Error: Invalid Store URL

- Ensure you entered the `.myshopify.com` domain. Do not use your custom domain (like `www.mycustomdomain.com`) unless specified.
- Do not include `https://`, `http://`, or `/admin` in the field.

### Error: Unauthorized or Connection Failed

- Check that your Redirect URLs in Shopify Partners match ScaleFlow's callback URL exactly.
- Verify that you copied the **Client ID** and **Client Secret** correctly from the App Settings page in Shopify Partners.
- **Check if you have ticked the "Use legacy install flow" checkbox**: Go to the **Configuration** tab, scroll to the **Access** section, and verify that the **Use legacy install flow** checkbox is checked (Step 2, sub-step 7). If this option is not checked, the installation redirect will fail.

### Error: Data Synchronization Failures (Missing Customer or Order Details)

- **Check if you have requested access**: Ensure that you went to **API access requests** -> **Protected customer data access** and clicked **Request access** (Step 2, sub-steps 5 & 6).
- **Check data reasons selection**: Verify that you clicked the **Select** button under **Protected customer data**, checked **Customer service** and **App functionality**, and clicked **Save** to apply the configuration.
- If using a developer store or Custom distribution, ensure you have selected your data reasons so the data can be accessed without a formal App Store review submission.
