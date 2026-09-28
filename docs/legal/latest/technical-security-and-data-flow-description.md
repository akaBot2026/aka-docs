---
id: technical-security-and-data-flow-description
title: Technical Security and Data Flow
sidebar_label: Technical Security and Data Flow
sidebar_position: 5
description: Akabot's reference architecture, data locations, external connections, and security controls.
displayed_sidebar: legalSidebar
---

# TECHNICAL SECURITY & DATA FLOW DESCRIPTION

**Version:** 1.0  
**Last updated:** 01/10/2026  
**Effective date:** 01/10/2026  
**Provider:** FPT IS COMPANY LIMITED

> This document describes the current architecture and may be updated independently of the Terms of Use when the architecture or Products change.

---

## 1. Scope

This document describes:

- deployment architecture;
- data locations;
- external connections;
- AI data flows;
- security controls;
- responsibility boundaries.

The actual architecture may vary by version and by each Customer's deployment design.

## 2. Current Reference Architecture

The main components may include:

**Akabot Center**

Manages Agents, users, workflows, scheduling, assets, monitoring, and operational information.

**AI Hub**

Manages AI Provider connections, credentials, model access, quotas, and related AI functions.

**Data Service**

Provides capabilities for managing or exchanging data used by automation.

**Akabot Studio**

The workflow development application installed on a user's computer.

**Akabot Agent**

The runtime that executes workflows on a computer or server designated by the Customer.

These components may change in future versions.

## 3. Deployment Boundary

Reference architecture:

**CUSTOMER ENVIRONMENT**

Users  
↓  
Studio / Client Applications  
↓  
Center / AI Hub / Data Service  
↓  
Agent  
↓  
Customer Applications / Database / Files / APIs

When external AI is used:

Customer Environment  
↓  
AI Hub / AI-enabled Component  
↓  
Internet / HTTPS  
↓  
External AI Provider  
↓  
AI Response  
↓  
Customer Environment

## 4. Data Location Matrix

| Data Category | Default Location | External Transfer |
|---|---|---|
| User/account data | Customer environment | Normally No |
| Workflow | Customer environment | Normally No |
| Agent configuration | Customer environment | Normally No |
| Business data | Customer environment | Depends on workflow |
| Operational logs | Customer environment | Normally No |
| Audit logs | Customer environment | Normally No |
| AI prompt | Customer environment / AI Provider | Yes when external AI is used |
| AI response | AI Provider → Customer environment | Yes |
| Documents sent to AI | Customer environment / AI Provider | Yes |
| API credentials | Customer environment | Used to authenticate external requests |
| Support files | Customer → Akabot when explicitly provided | Only when provided for support |

“Normally No” does not mean that data cannot leave the environment. A workflow configured by the Customer may send data to external systems.

## 5. Network Connections

Depending on the configuration, connections may include:

### Internal

- Studio → Center;
- Agent → Center;
- Center → Database;
- AI Hub → internal services;
- application → Data Service.

### External

- AI Hub → AI Provider;
- licensing service;
- update/package repository;
- external APIs used by workflows; and
- email, web, or application services configured by the Customer.

## 6. Encryption in Transit

HTTP connections carrying sensitive data should use HTTPS/TLS.

The Customer is responsible for configuring certificates and TLS for endpoints in its infrastructure.

Connections to external providers use the security mechanisms supported by those providers.

## 7. Encryption at Rest

Encryption at rest depends on:

- database configuration;
- operating system;
- disk/storage configuration;
- Kubernetes/storage platform;
- cloud/private-cloud configuration.

If required, the Customer is responsible for enabling and managing encryption at rest at the infrastructure layer.

## 8. Authentication

Depending on the version and configuration, Products may support authentication methods suitable for enterprise environments.

The Customer is responsible for:

- managing the user lifecycle;
- password policies;
- the identity provider;
- MFA, where configured;
- administrator accounts; and
- service accounts.

## 9. Authorization

Products apply role-based access control or an equivalent mechanism for supported functions.

The Customer must apply the principle of least privilege.

Administrator access should be granted only to personnel who need it.

## 10. Secrets Management

The following information must be treated as secrets:

- password;
- database credentials;
- API key;
- AI Provider key;
- access token;
- private key;
- client secret.

Access to secrets must be restricted. They should not be stored in plaintext where an appropriate protection mechanism is available.

## 11. Logging

The system may generate:

- application logs;
- error logs;
- audit logs;
- Agent logs;
- workflow logs;
- AI request metadata.

The Customer is responsible for determining:

- log retention;
- log access;
- backup;
- SIEM integration; and
- monitoring.

Credentials or unnecessary sensitive data should not be written to logs.

## 12. AI Data Flow

### 12.1 Request

User/Workflow  
→ AI-enabled Feature  
→ AI Hub  
→ AI Provider API.

### 12.2 Processing

The AI Provider receives the necessary input and performs inference according to the selected service.

### 12.3 Response

AI Provider  
→ AI Hub  
→ Calling Application/Workflow  
→ Customer Environment.

## 13. AI Data Controls

The Customer should assess:

- the provider;
- API endpoint;
- model;
- region;
- retention policy;
- training policy;
- availability of Zero Data Retention;
- logging configuration; and
- account type.

The Customer should not assume that every model or API endpoint from the same provider has the same retention policy.

## 14. External AI Provider Matrix

| Provider | Data Sent | Purpose | Provider-controlled Retention |
|---|---|---|---|
| OpenAI | Prompt/context/files as configured | AI inference | According to applicable OpenAI API policy and configuration |
| Google Gemini | Prompt/context/files as configured | AI inference | According to applicable Gemini API policy and configuration |
| Other Provider | As configured | AI inference | According to provider policy |

This matrix should be updated when Akabot adds a provider.

## 15. Network Security

The Customer should implement:

- firewalls;
- network segmentation;
- allowlists;
- restricted outbound connections;
- IDS/IPS, where appropriate;
- TLS;
- secure DNS; and
- controlled administrative access.

For environments with high security requirements, outbound traffic to AI Providers may be restricted to approved domains or endpoints.

## 16. Vulnerability Management

Akabot performs security testing and vulnerability management activities appropriate to its Product development processes.

The Customer is responsible for vulnerability management for:

- operating systems;
- databases;
- network equipment;
- hypervisors;
- Kubernetes infrastructure; and
- third-party software managed by the Customer.

## 17. Backup and Disaster Recovery

For on-premises deployments, the Customer has primary responsibility for:

- backup schedules;
- backup retention;
- restore testing;
- disaster recovery;
- RPO; and
- RTO.

Specific HA/DC-DR requirements should be defined in the solution architecture or agreement.

## 18. Support Access

By default, Akabot does not have persistent administrative access to the Customer's environment.

When remote support is requested:

1. The Customer approves the access;
2. access is limited to what is needed;
3. access activity follows the Customer's procedures; and
4. access should be revoked after support is complete.

## 19. Responsibility Matrix

| Control | Akabot | Customer | External Provider |
|---|---|---|---|
| Product source-code security | Primary | - | - |
| Customer infrastructure | - | Primary | - |
| OS security | Guidance | Primary | - |
| Network/firewall | Guidance | Primary | - |
| Customer database | Product compatibility | Primary | - |
| User access configuration | Capability | Primary | - |
| Workflow design | Platform | Primary | - |
| Customer data legality | - | Primary | - |
| Backup/DR | Guidance | Primary | - |
| AI integration | Primary | Configuration/approval | API service |
| AI Provider infrastructure | - | Provider selection | Primary |
| AI Provider retention | - | Provider/config selection | Primary |
| AI Output verification | - | Primary | Model generation |
| API credentials | Secure capability | Primary | Authentication service |

## 20. Security Incident Responsibility

Incidents involving Akabot Products are handled under Akabot's incident response process.

Incidents involving the Customer's infrastructure are handled by the Customer.

Incidents involving an AI Provider or external service are handled under the relevant provider's policies.

The parties will coordinate when an incident affects multiple areas of responsibility.

## 21. Architecture Changes

This document may be updated when:

- a Product is added or discontinued;
- an AI Provider is added;
- data flows change;
- the deployment architecture changes;
- cloud services are added; or
- security controls change.

Updating this technical document does not, by itself, change ownership of Customer Data or the legal obligations set out in the agreement.

## 22. Security Contact

Security issues:

**[support@akabot.com]**

Privacy/Data Protection:

**[support@akabot.com]**

Technical Support:

**[support@akabot.com]**
