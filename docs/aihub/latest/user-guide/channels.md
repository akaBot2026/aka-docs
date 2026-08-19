---
id: channels
title: "Channels"
sidebar_label: "Channels"
sidebar_position: 4
description: "Create, configure, test, publish, version, and manage access for Channels in AI Hub."
displayed_sidebar: aiHubSidebar
---

# Channels

A Channel is a governed AI assistant comprising a model, instructions, knowledge bases, tools, and access rules, published as a versioned configuration that authorized users or automated systems can invoke. This guide covers the complete Channel lifecycle — from creating a draft and configuring its behavior, through testing and publishing, to archiving a Channel that is no longer required.

## Channel lifecycle

![Channel lifecycle showing the flow from creation to archiving](/static/img/channel-lifecycle-aihub.png)

Editing a draft does not change the active version until a permitted user publishes a new version.

## Create a Channel

**Prerequisites**

- Channel create/edit permission.
- A defined business owner, purpose, and intended audience.

**Procedure**

1. Open **Channels**.
2. Select **New Channel**.

![create-channel-aihub](/static/img/create-channel-aihub.png)

3. Enter a unique name.
4. Add a concise description of intended use and boundaries.
5. Save and open the new draft.

Use one Channel for one coherent responsibility. Avoid names such as `Assistant 1` or descriptions that overstate authority.

Good name: `RPA Process Analysis & Automation Assistant`

Good description: `Analyzes business processes, identifies RPA automation opportunities, and recommends akaBot solutions and workflows.`

## Configure goals and instructions

Good instructions normally define:

- Role and business objective;
- Intended users;
- Tasks the Channel may perform;
- Authoritative knowledge sources;
- Required response format and tone;
- When to ask a clarifying question;
- What the Channel must refuse or escalate;
- When a tool may be called;
- Verification and citation expectations.

Example structure:

```text
# Role
RPA Process Analysis & Automation Assistant specializing in akaBot.

# Main tasks
Analyze business processes and identify RPA automation opportunities.
Recommend suitable akaBot solutions and workflows.
Explain akaBot features, components, and best practices.
Provide implementation guidance, troubleshooting, and optimization suggestions.

# Response style
Concise

# Constraints
Focus only on RPA and akaBot-related topics.
Do not provide information outside the RPA/akaBot domain.
If information is uncertain or unavailable, clearly state the limitation instead of guessing.
```

![Channel draft Instructions tab showing role definition, main tasks, response style options, and prompt quality score](/static/img/fig-10-channel-create.png)

Do not place secrets, personal credentials, or hidden instructions intended to bypass organizational policy in the configuration.

## Select a chat model

**Procedure**

1. Open the model/configuration area.
2. Choose a model marked **Ready**.
3. Configure generation limits only within approved policy.
4. Save.

Consider quality, language, latency, data residency, provider terms, and cost. A model visible in the catalog may still be disabled, unavailable, or blocked for the current target.

## Attach knowledge bases

**Procedure**

1. Open the **Knowledge** configuration tab.
2. Select **Choose knowledge bases**.

![Choose knowledge bases dialog for a Channel draft showing available knowledge bases with checkboxes](/static/img/fig-11-channel-kbs.png)

3. Search and select only relevant bases.
4. Confirm the selection count.
5. Save.

The builder must have access to select a knowledge base, and runtime callers must satisfy effective access rules. Test with a representative end-user account. See [Knowledge Bases](./knowledge-bases.md) for how to create and share one.

## Set retrieval policy

| Policy | Behavior | Use when |
|---|---|---|
| Automatic | The model decides when retrieval is needed | General assistance where speed is important |
| Prefer knowledge | Retrieval is favored for internal/document questions | Most policy and procedure assistants |
| Always verify | Retrieval occurs before every answer | Strong grounding is required and extra latency/cost is accepted |

**Procedure**

1. Open the **Knowledge** configuration tab of the draft.
2. Select the retrieval policy that matches the Channel's grounding requirement.
3. Set the number of retrieved results (**Results per search / top K**) high enough to cover the task but not so high that irrelevant text consumes context.
4. Save and validate with real test questions.

## Attach tools

**Procedure**

1. Open the **Tools** tab.

![channel-tools-aihub](/static/img/channel-tools-aihub.png)

2. Search by tool name or category.
3. Review input, output, side effects, timeout, and approval behavior.
4. Select only tools required for the Channel's purpose.
5. Require approval for write or high-impact actions according to policy.
6. Save and test each tool safely.

If a selected tool is no longer in the catalog, is disabled, or is blocked by policy, remove it or ask a platform administrator to review it before publishing.

## Configure orchestration or helper Channels

A helper Channel is a sub-Channel to which the parent Channel delegates specific tasks. This is an optional feature — contact your platform administrator to confirm it is enabled in your environment before proceeding.

**Best practices when configuring helper Channels:**

- Assign a distinct, non-overlapping responsibility to each helper.
- Verify that every helper has an active published version before linking.
- Do not grant the parent broader tool or data access than any individual helper requires.
- Avoid circular dependencies between Channels.
- Test how the parent behaves when a helper is unavailable or returns an error.

> **⚠️ Important:** An unavailable helper Channel can block the parent's readiness check or cause degraded responses. Always validate helper availability before publishing the parent Channel.

## Configure structured output

Where structured output is available:

**Procedure**

1. Define the required schema and field meanings.
2. Mark required fields explicitly.
3. Use stable field names suitable for consuming systems.
4. Test valid, empty, boundary, and error cases.
5. Confirm the integration handles schema validation failure.

Do not rely only on a natural-language instruction when a downstream API requires a strict structure.

## Test a draft

Draft testing may bypass access controls that apply to end users. Review the context notice displayed in the test interface before proceeding.

Create a test set that covers:

| Category | Example purpose |
|---|---|
| Happy path | A common, fully supported request |
| Missing information | Channel should ask for clarification or state what is missing |
| Out of scope | Channel should refuse or redirect correctly |
| Knowledge grounding | Important claims should match and cite source documents |
| Conflicting sources | Channel should identify ambiguity rather than invent certainty |
| Tool read | Correct target and result handling |
| Tool write | Approval, parameters, duplicate protection, and result verification |
| Permission denial | Safe, understandable failure without data leakage |
| Provider failure/timeout | Useful error and no false claim of completion |
| Sensitive input | Correct handling under organizational policy |
| Prompt injection in a document | Channel follows system/business rules, not hostile document text |

**Procedure**

1. Open **Test** or the draft playground.

![Channel Test tab showing a draft test with AI response and the Release Channel dialog for publishing a new version](/static/img/fig-12-channel-test.png)

2. Run each approved test case.
3. Record input, expected outcome, actual outcome, citations, tool behavior, and pass/fail.
4. Correct instructions or configuration.
5. Repeat failed and regression cases.

## Pre-publish review

- [ ] Name, description, owner, and scope are clear.
- [ ] Goal/instructions contain no secret or conflicting rule.
- [ ] Chat model is ready and permitted.
- [ ] Attached knowledge bases are healthy and correctly shared.
- [ ] Retrieval policy passed representative tests.
- [ ] Tools are necessary, healthy, and use appropriate approval controls.
- [ ] Helper Channels and structured output are valid where used.
- [ ] Required test cases passed and evidence is retained.
- [ ] Intended users/robots and access plan are identified.
- [ ] Business owner approved release.

## Publish a version

**Prerequisites**

- Channel publish permission, generally level 3.
- No blocking readiness issue.
- Approved test evidence.

**Procedure**

1. Open the Channel draft.
2. Review the configuration summary and resolve all errors.
3. Select **Publish version**.

![Release Channel dialog for publishing a new active version with optional version label field](/static/img/fig-12-channel-publish.png)

4. Read the confirmation and publish.
5. Record the new version number and release reason.
6. Assign access where required.
7. Validate the published active version based on its target consumption context:
   - **Interactive Web Chat Channel:** Validate the active version through **Chat** with an end-user account.
   - **Machine Endpoint / Automation Channel (AkaNinja / API):** Verify and connect the published active version for automated akaBot Agent execution via **AkaNinja** or REST API endpoints.

Publishing creates an immutable version from the current draft. Later draft edits do not modify that version. Once published, Machine Endpoint Channels (such as `AkaNinja` or API integrations) immediately serve automated akaBot Agent runtime calls, while Chat Channels become accessible in the Chat interface to authorized users.

## Manage access to a Channel

Channel access controls which human users and automated machine identities (akaBot Agents, Robots, API callers) can invoke a published Channel version.

**Procedure**

1. Open **Versions & Access** or the Channel access management view.

![Channel Versions and Access panel showing Granted Access tab with user permissions and execution modes](/static/img/fig-13-channel-access.png)

2. Select **Grant access**.
3. Select the principal type based on the target consumption model:
   - **Web Chat Users:** Select specific human **Users** or **User Groups** to allow interactive conversation via the Chat interface (`chat.read`).
   - **Machine Endpoints & Automation (AkaNinja / API):** Select specific **akaBot Agents**, **Robots**, or **Agent Groups** to grant permission for automated RPA bot execution calls via **AkaNinja** or API endpoints.
4. Confirm the Channel and access scope.
5. Save and verify effective access.

Access may also be inherited from an Agent Group. To remove inherited access, open the source group and update the grant there. Revoking only a direct grant does not remove inherited rights.

## Restore from an earlier version

Restoring an earlier version immediately sets that version as the active production version for the Channel and updates the draft configuration.

> **⚠️ Important:** Restoring a previous version immediately changes the live active Channel configuration. If you wish to test changes before making them active in production, edit the draft configuration directly rather than restoring a historical version.

**Procedure**

1. Open **Version History**.

![Channel Version History tab showing active version, previous versions with Rollback and Delete options](/static/img/fig-13-channel-publish.png)

2. Select the required version to restore.
3. Review the version snapshot details and record the reason for restoration.
4. Select **Restore previous version**.
5. Confirm the action when prompted.
6. Verify that the restored version is now marked as active in production.

## Archive a Channel

Archiving sets the Channel status to archived, hiding it from active channel lists while preserving its identity and historical data. Before archiving:

- Identify active users, robots, API integrations, and schedules;
- Remove or update assignments/integrations;
- Retain required audit or test evidence;
- Communicate the service change.

Archiving requires Channel Edit permission. Archiving an active Channel prevents new interactions from active integrations until the Channel is reactivated. Confirm the Channel selection and proceed when approved.

## Best practices

### Publish a policy-answering Channel

1. Confirm the policy document is approved and current.
2. Create a private knowledge base with owner/date in its description.
3. Upload the policy and verify extraction.
4. Set access for the intended builder/tester group.
5. Create a Channel with a narrow policy-answering scope.
6. Attach the knowledge base and choose **Prefer knowledge** or **Always verify**.
7. Instruct the Channel to cite requirements and admit when the source is silent.
8. Run happy-path, ambiguous, out-of-scope, and prompt-injection tests.
9. Obtain business-owner approval.
10. Publish, assign the end-user group, and test through Chat.
11. Monitor early usage and establish a policy-update process.

### Safely add a write tool to an existing Channel

1. Document the required business action and approving role.
2. Confirm the required default tool is enabled and the related Akabot Center service is healthy.
3. Review tool inputs and side effects.
4. Add the tool to the draft only.
5. Require approval for data-changing actions.
6. Test with non-production or approved test data.
7. Test rejection, timeout, duplicate request, and permission denial.
8. Verify the target system after each test.
9. Obtain owner/security approval and publish a new version.
10. Monitor tool failures and audit events after release.

## Where to go next

- Need documents for the Channel to cite? See [Knowledge Bases](./knowledge-bases.md).
- Finished with Channels? See how to administer connections, limits, and system tools — see [Management](./management.md).
