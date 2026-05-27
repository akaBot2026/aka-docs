---
id: high-density-agents
title: "高密度エージェント"
sidebar_label: "高密度エージェント"
sidebar_position: 4
description: "高密度エージェントのドキュメント。"
displayed_sidebar: agentSidebar
---
# 高密度エージェント

マシンのコンピューティング能力を有効に活用するために、エージェントを高密度モードで構成できます。この方法は、マシンの Windows Server バージョンに関係なく行われます。複数のユーザーがいる場合は、各ユーザーの下にエージェントを登録して、そのマシンで利用可能なコンピューティング能力を最大限に活用できます。

高密度環境には次の利点があります。

* Windows Server (2012 R2、2016、または 2019) オペレーティング システムを搭載したマシンの場合:
  + すべてのエージェントで同じプロセスを同時に実行できます。
  + すべてのエージェントで異なるプロセスを同時に実行できます。

注: 同じマシン上で、すべてのユーザーをエージェントとして同じマシン名で Center に接続する必要があります。

akaBot Agent サービスを実行しているマシン上の Center に新しいエージェントを登録する場合、サービスを再起動する必要はありません。ハートビートが送信されるまで最大 30 秒待つことをお勧めします。

Windows Server マシンに高密度エージェントをセットアップするには、[Setting Up Windows Server for High-Density Agents](/i18n/ja/agent/latest/installation/high-density-agents.md)および[High-Density Agents Setup](/i18n/ja/agent/latest/user-guide/high-density-agents.md)を参照してください。

すべてのエージェントを 1 台のマシンから同じ組織単位および同じ環境に接続することをお勧めします。