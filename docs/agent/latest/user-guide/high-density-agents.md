---
id: high-density-agents
title: "High-Density Agents"
sidebar_label: "High-Density Agents"
sidebar_position: 4
description: "High-Density Agents documentation."
displayed_sidebar: agentSidebar
---
# High-Density Agents

For a better use of a machines's computing power, Agents can be configured in High-Density mode. This way, regardless of the machine's Windows Server version. If you have multiple users on it, a Agent can be registered under each user so that you can make the most out of the computing power available on that machine.

The High-Density environment has the following advantages:

* On a machine with a Windows Server (2012 R2, 2016 or 2019) operating system:
  + you can run the same process with all Agents at the same time;
  + you can run different processes with all Agents at the same time.

Note: On the same machine, you have to connect all users as Agents to Center with the same Machine Name

If you register a new Agent to Center on a machine running the akaBot Agent service, you do not have to restart the service. It is recommended to wait at most 30 seconds for the heartbeat to be submitted.

To set up High-Density Agents on Windows Server machine, please see the [Setting Up Windows Server for High-Density Agents](https://docs.akabot.com/bin/view/akaBot%20Agent/%5B3%5D%20Agent%20Installation/Setting%20Up%20Windows%20Server%20for%20High-Density%20Agents/) and [High-Density Agents Setup](https://docs.akabot.com/bin/view/akaBot%20Center/Center%20Installation/Installation/%5B6%5D%20High-Density%20Agents%20Setup/)

It is recommended to connect all the Agents from one machine to the same Organization Unit and in the same environment