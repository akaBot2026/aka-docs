---
id: production-vs-test-environment-setup
title: Production vs. Test Environment
sidebar_label: Prod vs. Test Environment
sidebar_position: 4
description: Best practices for separating test and production environments.
displayed_sidebar: visionSidebar
---

# Production Vs. Test Environment Setup
Getting started with akaBot Vision takes only a few clicks: go to http://idp.akabot.com, enter your email address, fill out a simple form – and voila, you can try out our platform and our technology.

If you’ve tested the basics and you want to get serious about akaBot Vision, you’re probably wondering what’s the best practice for having a test environment with akaBot Vision and how you’ll migrate from test to prod environment in the future.

## Setting up production and test environment

When you register an account at **http://idp.akabot.com/account/register**, you create your akaBot Vision account in the cloud. We call this a tenant. It is a basic unit that you can divide further to accommodate different document processing workflows or even environments.

To separate your test environment from your production environment, you have 2 main options:

* Create two PipelineGroups within one tenant, and designate one of the PipelineGroups as Test and the other as Prod.
* Create two separate tenants from the signup page and designate one of them as Test and the other as Prod.

In both cases, you initially have access to the same akaBot Vision cloud and the same features and capabilities of the platform. There are subtle differences between the two approaches, though, and you’ll want to consider them for the long term.

|  |  |  |
| --- | --- | --- |
|  | **Two separate tenants** | **Two PipelineGroups in one tenant** |
| User access | You create an akaBot Vision user by adding their email address to the tenant. If you need the same person to be part of both environments, they’ll have to use an alias email for the second one and have a different username (such as [support@akabot.com](/cdn-cgi/l/email-protection)) | You can easily manage user access per pipeline with a tenant. A user may have access to all pipelines in Test and no pipelines in Prod. Note that admin users have access to all pipelines across all PipelineGroups. |
| Migrate setup | Objects cannot be moved between tenants, so if you need a replica of a test pipeline in your production tenant, you’ll have to recreate the schema, pipeline setup | You can copy the schema between pipelines or move pipelines between PipelineGroupgroups easily. |
| Data integrity controls | Users will access production and test with a different set of credentials, which minimizes the risk of human error affecting prod. | Users with admin access have complete visibility and unlimited access to all PipelineGroups, pipelines, and documents. |
| Features | You can use any and all features available on your subscription, both in test and in production PipelineGroups. If you have 2 separate organizations for that, please discuss any features you need in Test, with your Customer Success Manager. | You can easily set up the same features in both PipelineGroups. |

## Switching to production (paid) subscription

If you choose to have a single tenant with multiple PipelineGroups serving as different environments, the entire organization will be associated with your paid subscription in our billing system.

If you choose to have a separate test tenant, it will be a trial tenant, which you can use free of charge for up to 200 documents per month. If you exceed this limit your test tenant may be blocked. To ensure you have access to the capabilities you need in your test tenant, please inform your Customer Success Manager at akaBot Vision about all tenants you use.

Migration to a paid subscription happens silently in the background and won’t impact your experience on the app in any way.
