---
id: troubleshooting
title: "Troubleshooting & Support"
sidebar_label: "Troubleshooting & Support"
sidebar_position: 7
description: "Diagnose common AI Hub error messages, prepare an effective support request, and follow the security and responsible-use checklist."
displayed_sidebar: aiHubSidebar
---

# Troubleshooting & Support

Look up an error message below, follow the safe response, and escalate to support with the template if the problem persists.

## User-facing error guide

| Message or symptom | Likely cause | Safe response |
|---|---|---|
| Session expired | Akabot Center token missing or expired | Sign in again through Akabot Center and reopen the app |
| Permission denied | Wrong organization or insufficient resource permission | Confirm organization and request the precise permission |
| No Channels assigned | No active Channel assignment | Contact the Channel owner/access administrator |
| Model unavailable | Connection down, model disabled, or policy denial | Choose an approved ready model or contact platform admin |
| Quota exhausted | Monthly subject limit reached | Review quota and contact the budget owner |
| Knowledge base unhealthy | No ready documents or processing failures | Open document status and resolve ingestion issues |
| Document awaiting indexing | Embedding model missing/unavailable | Configure or select a ready embedding model |
| Text scan needs confirmation | Scanned/image document has insufficient text | Review and choose OCR or existing text |
| Tool approval required | Policy requires human confirmation | Review parameters and approve/reject within authority |
| Tool blocked | Permission, governance, or safety control denied it | Correct the underlying rule; do not bypass the control |
| Source preview unavailable | Document removed, inaccessible, or no preview | Open the knowledge base or contact its owner |
| Data could not be loaded | Temporary connectivity or dependency problem | Retry once; report the support reference if repeated |
| Run timed out | Provider/tool exceeded its allowed duration | Check target status before retrying a write operation |

## Before contacting support

1. Confirm the active organization.
2. Retry only safe, read-only actions — and only once.
3. Record the exact time and time zone.
4. Record the page, action, Channel/knowledge-base name, and expected result.
5. Copy the **Support reference**/`correlationId`.
6. Capture a screenshot with personal and confidential data hidden.
7. Do not include JWTs, API keys, passwords, or provider credentials.

## Support request template

```text
Environment: <PRODUCTION/UAT>
User role and active organization: <ROLE / OU>
Time and time zone: <TIMESTAMP>
Page/function: <PAGE>
Action performed: <STEPS>
Expected result: <EXPECTED>
Actual result: <ACTUAL>
Business impact: <IMPACT>
Support reference/correlationId: <ID>
Recent known change: <CHANGE OR NONE>
Attachment classification: <CLASSIFICATION>
```

See [Support information](./quick-reference.md#support-information) for where to send this request.

## Security and responsible-use checklist

- [ ] I am working in the correct organization.
- [ ] I have authority to use the selected data, Channel, and tool.
- [ ] My prompt contains no credential or prohibited sensitive data.
- [ ] The sharing scope is no broader than necessary.
- [ ] I reviewed citations for important claims.
- [ ] I understand the effect before approving a tool.
- [ ] I verified important changes in the target system.
- [ ] I followed retention and deletion requirements.
- [ ] I will report suspected exposure or unauthorized behavior immediately.
