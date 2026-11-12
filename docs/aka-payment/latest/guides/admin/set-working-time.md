---
title: "Configure working hours"
description: "Administrators want to adjust working hours and days off used to calculate processing deadlines."
id: set-working-time
sidebar_label: Configure working hours
sidebar_position: 11
displayed_sidebar: akaPaymentSidebar
---

# Configure working hours

Administrators want to adjust working hours and days off used to calculate processing deadlines.

**When to use:**

- Processing deadlines are calculated incorrectly because working hours or holidays are incorrect.
- Administrators want to change working days and holidays.


Working hours and days off are used to calculate response deadlines and committed completion deadlines.


## How to

- [Set working hours and holidays](how-to/set-working-time.md) — Under Working Time, select the working days and time slots for the week, add holidays or compensatory workdays to the calendar, then click Save.

## Steps

[Set working hours and holidays](how-to/set-working-time.md)

1. [Set working hours and holidays](how-to/set-working-time.md)
   1. In the sidebar, under **Administration**, open **Working Time** (1) (administrators only).
      ![Working Time page: (1) Working Time in the sidebar, (2) Weekly Working Hours tab with Working Days set to Monday through Friday, time slots from 08:00–12:00 and 13:00–17:00, Add time slot button and weekly grid; Save button in the upper-right corner](/static/img/aka-payment-latest-admin-set-working-time.webp)
   2. In the **Weekly Working Hours** tab (2): under **Working Days**, select the days from Monday through Sunday; under **Working Hours**, edit the shared time slots (default: 08:00–12:00 and 13:00–17:00), and click **Add time slot** (2) if needed.
   3. To set different hours for a specific day, use the weekly grid below: drag across an empty area to add hours, drag a block to move it, drag a block edge to change its duration, or click a block to edit **From**/**To** or **Delete time slot**, then click **Done**.
   4. In the **Holidays and Compensatory Workdays** tab: on the calendar (view by **Year** or **Month**), click **Add day** or drag to select days; enter **Name**, **Date**, and **Type** (Holiday or Compensatory workday), then click **Apply**. Click an existing day to edit or delete it.
   5. Click **Save** (in the upper-right corner). Changes apply only to processing deadlines calculated after saving; previously calculated deadlines remain unchanged.

## Troubleshooting

### [Set working hours and holidays](how-to/set-working-time.md)

- **Save** is disabled: read the red message at the top of the page ("At least one day of the week must have working hours." or time slots ending before they start, overlapping time slots, or a missing day name); the tab with an error is marked "This tab has an error".
