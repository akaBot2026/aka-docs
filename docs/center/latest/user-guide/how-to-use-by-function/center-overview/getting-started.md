---
id: getting-started
title: "Getting Started with akaBot Center"
sidebar_label: "Getting Started with akaBot Center"
sidebar_position: 1
description: "Getting Started with akaBot Center documentation."
displayed_sidebar: centerSidebar
---

Welcome to akaBot Center — the centralized management platform for your RPA operations. This guide walks you through the initial steps required to access and configure the system so your team can begin deploying and managing automation workflows. Before proceeding, ensure that an instance of akaBot Center has been installed and is accessible, and that you have received valid login credentials from your system administrator.

To begin, open a supported web browser and navigate to the URL of your akaBot Center instance (for example, `http://your-server:8080`). Log in using your assigned username and password. Upon first login, you may be prompted to change your default password. Once authenticated, you will land on the Center Home dashboard, which provides a summary of current automation activity including running jobs, pending schedules, and agent availability.

After logging in, the recommended setup sequence for new deployments is to first register your agents, then organize them into groups or pools, then upload your automation packages, and finally configure workflows and schedules. This order ensures all execution resources are available before you begin orchestrating automation jobs.

## Initial Setup Checklist

- [ ] Access the akaBot Center web interface and log in
- [ ] Change default password (if first login)
- [ ] Register at least one akaBot Agent
- [ ] Create an Agent Group or Agent Pool (optional but recommended)
- [ ] Upload an automation Package via the Studio
- [ ] Create a Workflow linking the package to an agent or pool
- [ ] Configure a Schedule or Trigger to automate execution
- [ ] Review the Home dashboard to verify job execution

## System Requirements for Accessing Center

| Requirement | Recommended |
|---|---|
| Browser | Chrome 90+, Edge 90+, Firefox 88+ |
| Network | Access to Center server on configured port (default 8080) |
| Account | Valid user account with at least Viewer role |
| Screen Resolution | 1280 x 720 or higher |
