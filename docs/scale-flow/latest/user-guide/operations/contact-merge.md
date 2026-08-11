---
id: contact-merge
title: Merge contacts
sidebar_label: Merge contacts
sidebar_position: 8
description: Beginner-friendly guide to combine duplicate customer profiles into one contact.
displayed_sidebar: scaleFlowSidebar
---

# Merge Contacts

Sometimes the same customer appears as **two or more contacts** — for example one profile from Zalo and another from Facebook, or two imports with the same phone number.

**Merge** combines them into **one** contact so your team sees a single history and one set of details.

---

## When to merge

Merge when you are confident two profiles belong to the **same person**, such as:

- Same phone number on different contacts
- Same email on different contacts
- A customer told you they messaged from two channels

**Do not merge** if you are unsure — it is harder to undo than to wait and confirm.

---

## How ScaleFlow finds duplicates

ScaleFlow can suggest duplicates when contact fields match (for example phone or email). You may see merge suggestions:

- On a **contact detail** page
- In the **contact panel** inside [Inbox](./inbox-usage)

Click **Review merge** (or similar) to open the merge screen.

![Duplicates contact](/static/img/duplicates-contact.png)

---

## Open the merge page

1. Go to **Contacts** and open the main contact you want to keep (the **primary** contact).
2. Start merge from a suggestion, or open the merge link with the duplicate contacts selected.
3. You arrive at the **Merge contacts** page with:
   - **Left:** list of duplicate contacts to include
   - **Right:** preview of the merged result

![Merge page](/static/img/merge-page.png)

---

## Choose which contact to keep

- The contact you opened first is usually the **primary** (the one that survives after merge).
- Check the boxes for **secondary** contacts you want to fold into the primary.
- ScaleFlow may auto-select all detected phone/email duplicates so you do not miss a match.

---

## Pick the best value for each field

For each piece of information (name, phone, email, company, stages, labels, …), choose which contact’s value should win.

| Situation | Simple rule |
|-----------|-------------|
| One side is empty | Pick the side that has data |
| Both have different phones | Ask the customer which is current, then pick that row |
| Labels / lists on both | Preview shows the combined result — check it before confirming |

Use the preview panel to read the final profile before you commit.

---

## Confirm merge

1. Review the preview one last time.
2. Click **Merge** (or **Confirm merge**).
3. Wait for the success message.
4. You return to the single merged contact.

Conversations and history from secondary contacts move under the primary contact.

---

## After merging

- Open the merged contact in **Contacts** or from **Inbox**.
- Check labels, lifecycle stage, and linked conversations.
- If [Broadcasts](./broadcast-usage) or lists used the old duplicate, confirm the audience still looks correct.

---

## Tips

1. Merge during quiet hours if the customer has an active chat — staff should know which thread continues.
2. Fix typos in phone/email **before** merge when possible; bad data creates false duplicate suggestions.
3. Teach the team to merge instead of creating a third duplicate profile.

---

## Related guides

- [Contact Management](./contact-management)
- [Inbox](./inbox-usage)
