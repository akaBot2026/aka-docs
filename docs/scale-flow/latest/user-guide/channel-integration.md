---
id: channel-integration
title: Channel Integration
sidebar_label: Channel Integration
sidebar_position: 4
description: Connect Facebook, Zalo, and additional channels to centralize customer conversations.
displayed_sidebar: scaleFlowSidebar
---

# Channel Integration

This guide covers how to connect external communication channels so all messages flow into one inbox.

## Supported channel types

- Facebook Page
- Zalo Official Account
- Web chat widget
- Other connector-based channels available in your deployment

## Before you connect

- Ensure you have admin access to the external channel account.
- Prepare API/app credentials where required.
- Define channel naming conventions (for example: `vn-facebook-sales`).

## Connect Facebook

1. Open **Settings > Channels > Add Channel**.
2. Choose **Facebook**.
3. Sign in to Facebook and grant required permissions.
4. Select the target page to connect.
5. Map the channel to the correct team or queue.
6. Send a test message and verify it appears in the inbox.

## Connect Zalo

1. Open **Settings > Channels > Add Channel**.
2. Choose **Zalo**.
3. Enter OA credentials and required callback/webhook settings.
4. Complete authorization and sync settings.
5. Assign default queue and routing rules.
6. Send a test message from Zalo to validate inbound flow.

## Configure additional channels

1. Select the connector type.
2. Enter authentication details.
3. Map message fields to standard inbox fields.
4. Configure retry and error handling behavior.
5. Save and run a channel health check.

## Post-integration checklist

- Inbound messages arrive within expected latency.
- Agent assignment rules trigger correctly.
- Customer identity matching links messages to existing contacts.
- Failed delivery and webhook errors are visible in channel logs.

## Best practices

- Separate channels by purpose (sales, support, operations).
- Use consistent naming to simplify reporting.
- Revalidate channel permissions after credential changes.
