---
id: about-insight
title: About akaBot Insight
sidebar_label: About akaBot Insight
sidebar_position: 1
description: Introduction to akaBot Insight analytics and data modeling for RPA.
displayed_sidebar: insightSidebar
---
# Insights data model
## Introduction

**akaBot Insights** is a web application that serves as a platform for data modeling and analytics using a combination of available business metrics and operational insights. With pre-loaded dashboard Templates as well as user-defined dashboards to visualize company data across desired metrics, it enables you to discover new analytical insights, track performance indicators, and be alerted of errors.

The **Insights** homepage displays all available dashboards to which the user has access. By default, all users have access to the Agent**s**, **Processes**, **Queues, and Business** default dashboard that are included with the product. Each dashboard can be customized, as well as downloaded in various formats.

![1](/static/img/screenshot.png)

## 

## Data Ingestion for Insights

When you enable Insights on a tenant, any historical data that is present in the Center database will be ingested and available in Insights within a few minutes.

Following this initial setup, new data from Center will be ingested approximately every 20 minutes. Agent logs will also be ingested approximately every 20 minutes. Note that all Agent logs will be ingested, not only the last records and error logs.

NOTE: Data that has been ingested into Insights is historical and cannot be modified, so if changes are made on Center to processes, queues, or robots (ie. changing the name), that will not affect existing data.
