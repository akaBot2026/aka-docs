---
id: akabot-center-security-overview
title: Akabot Center Security Overview
sidebar_label: Center Security Overview
sidebar_position: 3
description: How Akabot Center protects access, credentials, and data, and which security responsibilities belong to the Customer.
displayed_sidebar: centerSidebar
---

# Akabot Center Security Overview

**Document purpose:** Customer security overview  
**Product:** Akabot Center  

## 1. Overview

Akabot Center is the centralized orchestration and management platform for Akabot automation. Its security model uses multiple layers to protect access to the platform, automation credentials, operational data, and administrative functions.

This document is intended for the security, risk, and IT teams of Customers who evaluate or operate Akabot Center. Default settings and available features can differ between versions, so check the [release notes](../release-notes.md) for the version you run.

The principal controls are:

- authenticated and time-limited access using signed tokens;
- role-based and resource-level authorization;
- organization-unit data separation;
- one-way password hashing and encryption of selected secrets;
- support for TLS-protected communications and external secret managers;
- configurable multi-factor authentication, password policy, and account lockout;
- security-focused browser headers; and
- authentication and business-data audit trails.

Some controls are completed by the environment in which Akabot Center is deployed. These include TLS termination, database encryption, storage encryption, key custody, backup protection, and network segmentation. Section 12 identifies these shared responsibilities.

How Akabot develops, tests, releases, and supports its products is described in the [Secure Product Development Process](./secure-product-development.md). The architecture, data flows, and responsibilities of the wider Akabot system are described in the [Technical Security and Data Flow Description](../../../legal/latest/technical-security-and-data-flow-description.md).

## 2. Security Architecture at a Glance

| Security objective | Applied technique | Customer benefit |
|---|---|---|
| Protect accounts | Password hashing, a configurable password policy, optional multi-factor authentication, and account lockout | Lowers the risk of password disclosure and account takeover |
| Authenticate requests | Signed access tokens with an expiry time, and managed API tokens | Helps prevent unauthenticated use of protected APIs |
| Limit user capabilities | Roles with a permission level for each resource | Supports least-privilege access |
| Separate business data | Organization units | Keeps users within the data they are authorized to use |
| Protect sensitive stored values | Encryption of selected credentials, and integration with external secret managers | Lowers the exposure of operational credentials |
| Protect network traffic | Support for HTTPS (TLS) | Protects data in transit when TLS is deployed correctly |
| Support accountability | Authentication events and a history of changes to business data | Helps Customers investigate access and operational changes |
| Harden the browser interface | Browser security headers | Reduces common browser-based attack paths |

## 3. Authentication and Session Security

### 3.1 Supported authentication methods

Akabot Center supports several ways to sign in, so that it can fit the Customer's identity architecture:

- local Akabot Center accounts;
- LDAP or Active Directory integration;
- managed API tokens for system-to-system access, as described in [Managed Token](../user-guide/managed-token.md); and
- dedicated robot identities for communication between Akabot Center and automation agents.

Which identity integrations are used depends on the deployment. The Customer should configure them according to its own identity and access-management policy.

### 3.2 Password protection

Local user passwords are not stored in plain text. Akabot Center stores a salted, one-way hash of each password and compares a submitted password with that hash, so a password cannot be decrypted from the database.

Administrators can set a password policy on the [Password Policy](../user-guide/how-to-use-by-function/operation-functions/administration/password-policy.md) screen. The policy can include:

- a minimum password length;
- required uppercase and lowercase letters, numbers, and special characters;
- a check for predictable keyboard sequences;
- a check against a list of restricted words;
- password expiry;
- prevention of reusing recent passwords;
- a required password change after the first login or an administrator reset; and
- account lockout after repeated failed login attempts.

In the standard configuration, passwords must have a minimum length and contain uppercase letters, lowercase letters, numbers, and special characters. Account lockout is turned on. The other controls are optional, and the Customer should turn them on according to its own password policy.

### 3.3 Multi-factor authentication

Akabot Center supports multi-factor authentication (MFA) with time-based one-time passwords (TOTP), using standard authenticator apps such as Google Authenticator or Microsoft Authenticator. Before MFA is activated, the user confirms the setup with codes from the authenticator app. The user also receives backup codes to use if the authenticator app is not available. If a user loses access to both the authenticator app and the backup codes, an administrator can reset the user's MFA.

Administrators choose how MFA is applied:

- **Allow users to enable MFA.** MFA is optional. Users or administrators turn it on for individual accounts.
- **Enforce MFA for all users.** Every user must set up MFA before they can use the system.

In the standard configuration, MFA is available but not required. Akabot recommends enforcing MFA, in particular for administrators. In Akabot Center Cloud, two-step verification is required for every account. For the steps, see [Two-Step Verification for Center Cloud](../user-guide/how-to-use-by-function/center-overview/two-step-verification.md).

### 3.4 Token security

After a successful sign-in, Akabot Center issues a signed JSON Web Token (JWT) that the client sends with each request. Akabot Center:

- signs each token and checks the signature and expiry time on every protected request;
- includes the user's permissions in the token; and
- checks the state of the account, so that relevant account changes can end earlier access.

Token lifetimes are configurable. A longer lifetime applies when a user chooses to stay signed in. Customers should shorten token lifetimes where their risk policy requires it.

## 4. Roles, Permissions, and Least Privilege

Akabot Center controls access with roles. A role is a set of permissions on resources, and users receive access only through the roles assigned to them. For details, see [Role Management](../user-guide/how-to-use-by-function/operation-functions/administration/role-management.md) and [User Management](../user-guide/how-to-use-by-function/operation-functions/administration/user-management.md).

### 4.1 Standard roles

| Role | Intended use |
|---|---|
| Administrator (ROLE_ADMIN) | Platform administration. By default, this role has all rights on all resources, and this cannot be changed. |
| User (ROLE_USER) | Human access to business and automation functions. The default rights can be edited. |
| Robot (ROLE_ROBOT) | A restricted identity for an automation agent. The default rights can be edited. |

Administrators can also create their own roles.

### 4.2 Resource and action permissions

Permissions are set for each resource. The resources are Admin, Environment, Robot, Package, Workflow, Job, Schedule, Organization Unit, Asset, Queue, and Log. For each resource, a role has one of the following levels:

| Level | What the user can do |
|---|---|
| None | The resource is not shown in the interface. |
| View | See the resource, without changing it. |
| Edit | See and edit the resource. |
| Create | See and create new resources. |
| Delete | Delete the resource. |

Protected operations are checked on the server. Hiding a feature in the interface is not the only control, because the API also checks the permissions of the signed-in user before it runs a protected operation.

Administrators have broad access by design. Customers should limit administrator membership, use named administrator accounts, enable MFA for them, and review administrative activity.

## 5. Organization-Unit Data Separation

Organization units (OUs) divide Akabot Center into separate tenants for designated users. What a user sees in Akabot Center depends on the organization unit the user belongs to and on the roles assigned to the user. A user who is not assigned to an organization unit has no access to resources. An agent cannot be provisioned in two organization units, and resources cannot be moved from one unit to another. For details, see [Organization Unit](../user-guide/how-to-use-by-function/operation-functions/administration/organization-unit.md).

Akabot Center checks on the server that the user, API token, or robot is permitted to act in the relevant organization unit.

This control gives logical separation inside one Akabot Center deployment. It does not replace separate infrastructure where a Customer needs physical or database-level isolation between tenants.

## 6. Encryption and Protection of Data at Rest

Akabot Center protects different types of data in different ways.

### 6.1 Application-protected values

| Data type | Protection |
|---|---|
| Local user passwords | One-way hashing. Passwords cannot be decrypted from the stored hash. |
| Credentials stored as [Assets](../user-guide/how-to-use-by-function/operation-functions/assets.md) and selected robot and integration credentials | Encrypted with the AES-256 algorithm. |
| MFA secrets and backup codes | Stored in encrypted form. |
| Sensitive values in configuration files | Encrypted values are supported. |
| Credentials kept in an external secret manager | HashiCorp Vault and AWS Secrets Manager are supported. See section 9. |

Encryption by the application is applied to selected secrets. It does not mean that every column of business data is encrypted by the application.

### 6.2 Database, files, indexes, logs, and backups

Encrypting the whole database volume, file storage, search indexes, logs, snapshots, and backups is the responsibility of the environment where Akabot Center runs. Customers should use the encryption-at-rest features of their database, cloud platform, storage system, or operating system, and manage the keys in an approved key-management service.

For high-assurance deployments, Akabot recommends that production encryption keys and secret-manager credentials are:

- supplied outside the application package and outside source control;
- available only to the service identity that needs them; and
- rotated under an approved procedure.

## 7. Protection of Data in Transit

### 7.1 Browser and API traffic

Akabot Center supports HTTPS (TLS) for browser and API traffic. When HTTPS is enabled on the application server or on a reverse proxy or load balancer, TLS protects credentials, access tokens, requests, and responses from interception and modification. When a browser has reached the service over HTTPS, an HTTP Strict Transport Security (HSTS) policy tells it to use HTTPS for later visits.

TLS is set up in the Customer's deployment. Production installations should terminate TLS with a trusted certificate and allow only current protocol versions and approved cipher suites. The [high-availability deployment guides](../installation/ha-model-windows-server.md) show an example reverse-proxy configuration.

### 7.2 Database and service connections

Connections from Akabot Center to the database, an LDAP directory, a message broker, a cache, and other integrated services depend on the products the Customer chooses and on their connection settings. In production, the Customer should configure each of these connections to use TLS.

### 7.3 Center-to-Agent communication

Akabot Center communicates with automation agents using dedicated robot identities, as described in section 3.1. The Customer should protect the network connection between Akabot Center and its agents with TLS, as described in section 7.1.

## 8. API and Web Application Protections

Akabot Center applies these controls at the web layer:

- Business APIs require authentication, unless an endpoint is intended for sign-in, activation, health checks, static content, or another public purpose.
- Administrator APIs and the API documentation require administrator authority.
- Sensitive management endpoints, such as those for runtime environment, configuration, logs, thread dumps, and cache administration, are not available through the public interface.
- Cross-Origin Resource Sharing (CORS) is off by default, and it can be restricted when it is turned on.
- Selected endpoints can be rate-limited by client IP address. This is off in the standard configuration. Customers should turn it on for sign-in endpoints that are reachable from untrusted networks, and add rate limiting at an API gateway or web application firewall.

### 8.1 Browser security headers

Akabot Center uses these browser security headers:

- **Content-Security-Policy** limits the sources of scripts, frames, images, fonts, and network connections.
- **X-Frame-Options** prevents the interface from being shown inside a frame, which reduces the risk of clickjacking.
- **X-Content-Type-Options** prevents browsers from guessing content types.
- **Strict-Transport-Security** tells browsers to use HTTPS.
- **Referrer-Policy** limits how much referrer information is shared.
- **Permissions-Policy** turns off browser capabilities that Akabot Center does not need, such as camera, microphone, and location.

## 9. Secrets Management

Akabot Center can obtain sensitive values, such as application settings and automation credentials, from HashiCorp Vault and AWS Secrets Manager, so that they are fetched when needed and not kept in ordinary configuration files. For setup, see [Configure Akabot Center to use Vault](../installation/configure-vault.md).

Customers who use an external secret manager should:

- give Akabot Center its own workload identity;
- allow access only to the secret paths that are required;
- use TLS and validate the certificate of the secret manager;
- rotate credentials and encryption keys on a defined schedule;
- audit reads of secrets and administrative changes; and
- restrict access to any local or in-memory cache used by the service.

## 10. Auditability and Monitoring

Akabot Center keeps two kinds of audit records:

- **Authentication and security events**, such as successful and failed sign-ins and sessions; and
- **Entity change history**, which records create, update, and delete actions on business data such as users and tasks.

Audit records include details such as who performed the action, when, and what was changed. Access to the audit functions is controlled by permissions. On the [Clean Data](../user-guide/how-to-use-by-function/operation-functions/administration/clean-data.md) screen, administrators can set how long audit records and other operational data are kept, so that retention follows the Customer's policy.

Customers should forward the logs of Akabot Center, the operating system, the reverse proxy, the database, and the secret manager to a protected central monitoring or SIEM platform. Access to audit records and to the retention settings should be limited to authorized staff.

## 11. Penetration Testing

Akabot Center is subject to the security testing described in [Security Testing](./secure-product-development.md#51-security-testing), which includes penetration testing. Security issues found in testing are fixed in product releases, and the fixes are listed in the [release notes](../release-notes.md).

A penetration test is an assessment at one point in time. It complements secure configuration, patching, monitoring, access reviews, and regular reassessment by the Customer.

## 12. Shared Security Responsibilities

Akabot Center provides application controls. The Customer, or the operator that hosts Akabot Center, secures the environment in which it runs.

| Area | Akabot Center provides | The Customer or hosting operator is responsible for |
|---|---|---|
| Identity | Authentication, token validation, roles and permissions, optional MFA | Security of the identity provider, account lifecycle, enforcing MFA, regular review of access |
| Network | Support for HTTPS, protected APIs, browser security headers | A trusted TLS certificate, protocol and cipher policy, firewall, network segmentation, web application firewall or API gateway |
| Stored data | Password hashing, encryption of selected secrets | Encryption of the database, storage, and backups, key management, backup access, and recovery testing |
| Secrets | Encrypted configuration values, support for Vault and AWS Secrets Manager | Availability of the secret manager, access policy, key custody, and rotation |
| Platform | Authorization and audit functions in the application | Patching and hardening of the operating system, database, Java runtime, containers, and proxy |
| Monitoring | Application and audit events | Central log collection, alerting, incident response, clock synchronization, and log retention |
| Availability | Configurable data retention | Resilient architecture, capacity, database high availability, disaster recovery, and restore testing |

## 13. Recommended Production Security Baseline

Before Akabot Center is made available to production users, Akabot recommends that the Customer takes the following steps.

1. Publish the service only over HTTPS, with a trusted certificate.
2. Encrypt the database, storage volumes, logs, snapshots, and backups.
3. Keep production keys and credentials in a managed secret store and rotate them.
4. Enforce MFA, in particular for administrators.
5. Review token lifetimes and avoid long-lived sessions where they are not needed.
6. Keep account lockout on, and enable rate limiting that suits the expected traffic.
7. Connect LDAP and other infrastructure services over TLS.
8. Grant only the minimum role, resource, and organization-unit permissions that each user needs.
9. Restrict network access to health and monitoring endpoints that do not need to be public.
10. Collect audit and security logs centrally and set alerts for suspicious activity.
11. Apply supported updates of Akabot Center and its dependencies promptly.
12. Run regular vulnerability scans and penetration tests, in particular after major changes.

## 14. Reporting a Security Issue

To report a security issue in Akabot Center, contact **support@akabot.com**. How Akabot assesses and responds to reported vulnerabilities is described in [Responding to Vulnerabilities](./secure-product-development.md#72-responding-to-vulnerabilities-and-which-versions-receive-fixes).

## 15. Related Documents

- [Secure Product Development Process](./secure-product-development.md)
- [Technical Security and Data Flow Description](../../../legal/latest/technical-security-and-data-flow-description.md)
- [Role Management](../user-guide/how-to-use-by-function/operation-functions/administration/role-management.md)
- [User Management](../user-guide/how-to-use-by-function/operation-functions/administration/user-management.md)
- [Organization Unit](../user-guide/how-to-use-by-function/operation-functions/administration/organization-unit.md)
- [Password Policy](../user-guide/how-to-use-by-function/operation-functions/administration/password-policy.md)
