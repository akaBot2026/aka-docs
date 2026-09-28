---
id: ai-services-and-data-processing-addendum
title: AI Services and Data Processing Addendum
sidebar_label: AI Services Addendum
sidebar_position: 4
description: Additional terms for AI features and the data shared with AI providers.
displayed_sidebar: legalSidebar
---

# AI SERVICES & DATA PROCESSING ADDENDUM

**Version:** 1.0  
**Last updated:** 01/10/2026  
**Effective date:** 01/10/2026  
**Provider:** FPT IS COMPANY LIMITED
---

## 1. Purpose

This Addendum sets out additional terms that apply when the Customer uses AI features provided or integrated into Akabot Products.

## 2. AI Providers

Products may connect to one or more AI providers (“AI Providers”), including but not limited to:

- OpenAI;
- Google Gemini;
- Microsoft Azure OpenAI;
- Anthropic;
- other AI Providers supported in the future.

The list of AI Providers may change without requiring a change to the general Terms of Use.

## 3. Customer-Selected AI Providers

When a Product allows the Customer to select a provider, model, or API endpoint, the Customer is responsible for selecting a configuration that meets its requirements for:

- security;
- privacy;
- data residency;
- retention;
- compliance;
- cost; and
- performance.

## 4. AI Credentials

Depending on the service model, the API key or AI token may:

- be owned and provided by the Customer;
- be provided by Akabot under the agreement; or
- be managed through an intermediary service.

Responsibility for billing, quotas, and credentials must be determined by the applicable agreement or service configuration.

## 5. AI Data Flow

Typical processing flow:

**Customer Environment  
→ Akabot AI Component  
→ AI Provider API  
→ AI Model  
→ Akabot AI Component  
→ Customer Environment**

When external AI is used, data sent to the AI Provider is no longer processed entirely within the on-premises environment.

## 6. Data That May Be Sent to AI Providers

Depending on the use case, data may include:

- prompts;
- system instructions;
- workflow context;
- business data;
- extracted text;
- documents;
- images;
- metadata;
- conversation history;
- model parameters; and
- user instructions.

Akabot transmits only the data necessary for the feature and configuration used by the Customer.

## 7. Data Minimization

The Customer should limit the data sent to an AI Provider to what is necessary.

In particular, the Customer should consider removing or masking:

- passwords;
- API keys;
- access tokens;
- private keys;
- financial credentials;
- personal identifiers;
- sensitive personal data; and
- unnecessary confidential business information.

## 8. Provider Terms

Once sent to an AI Provider, data is subject to that provider's:

- terms of service;
- privacy policy;
- API terms;
- data processing terms;
- retention policy; and
- geographic processing policies of the applicable AI Provider.

Akabot does not make any representation on behalf of an AI Provider that data will not be stored, processed outside a particular country, or used for any purpose, unless Akabot has a written agreement authorizing it to make that representation.

## 9. Model Training

Akabot does not use Customer Data to train its own AI models or models shared with other customers, except where:

- the Customer has given explicit consent; or
- a separate written agreement provides otherwise.

Whether an AI Provider uses data to improve or train models depends on the provider, service type, account plan, and configuration in effect at the time of use.

## 10. Provider Retention

An AI Provider's retention practices may vary by:

- provider;
- account;
- free or paid tier;
- API endpoint;
- model;
- feature;
- region; and
- data-control configuration.

Accordingly, Akabot does not specify a single default retention period that applies to all AI Providers.

Current information should be confirmed with the relevant provider before deploying a use case with strict retention requirements.

## 11. Cross-Border Processing

An AI Provider may process data in countries or regions other than where the Customer deploys the Product.

The Customer must assess data residency and cross-border transfer requirements before enabling the relevant provider.

## 12. AI Output

AI outputs may:

- be inaccurate;
- be incomplete;
- contain hallucinations;
- contain bias;
- vary between executions; or
- be unsuitable for a particular use case.

The Customer is responsible for verifying AI outputs before using them for significant decisions or actions.

## 13. Human-in-the-Loop

For high-impact use cases, the Customer should require human review or approval before a workflow takes action.

Examples include:

- payments;
- financial transactions;
- contract approvals;
- employment decisions;
- customer eligibility decisions;
- deletion of important data;
- legal decisions; and
- security configuration changes.

## 14. Prohibited Uses

The Customer must not use AI features for unlawful purposes or in violation of an AI Provider's usage policies.

## 15. Prompt Injection and AI Security

The Customer acknowledges that AI systems may be exposed to risks such as:

- prompt injection;
- malicious documents;
- unintended data disclosure;
- manipulated model outputs; and
- insecure tool invocation.

For AI Agents capable of taking actions, the Customer should implement:

- least privilege;
- tool allowlists;
- approval controls;
- input validation;
- output validation;
- logging;
- monitoring; and
- separation of duties.

## 16. Changes to AI Providers

Akabot may:

- add a provider;
- discontinue support for a provider;
- change a model;
- change an integration; or
- change an API implementation

to meet technical or security requirements or to respond to changes made by an AI Provider.

Changes that materially affect data flows should be reflected in the corresponding Technical Security and Data Flow documentation.
