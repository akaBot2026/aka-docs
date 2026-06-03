---
id: channel-integration
title: "チャネルの統合"
sidebar_label: "チャネルの統合"
sidebar_position: 4
description: "Zalo OA、Facebook、WhatsApp、および Telegram を ScaleFlow に接続するための初心者向けガイド。"
displayed_sidebar: scaleFlowSidebar
---

# チャネルの統合

チャネルとは、Zalo OA、Facebook Messenger、WhatsApp、Telegram など、顧客があなたのビジネスにメッセージを送信する場所です。

チャネルを接続すると、ScaleFlow がこれらのメッセージを 1 つの共有[Inbox](./inbox-usage)に収集できるようになります。その後、スタッフと[AI Assistant](./ai-assistant)が 1 か所から顧客に応答できるようになります。

## 始める前に知っておくべきこと

- 接続したいチャネルのビジネス アカウントにアクセスする必要があります。
- チャネルを管理するには、ScaleFlow での権限が必要です。
- 自動 AI サポートをオンにする前に、チャネルを接続する必要があります。
- 接続後、テスト メッセージを送信して、メッセージが受信トレイに表示されることを確認します。

## サポートされているチャンネル

- ザロOA
- メッセンジャー (Facebook)
- WhatsApp ビジネス API
- 電報

他のチャンネルがリストに表示される場合もありますが、**近日公開**と表示されます。

## チャンネルページを開く

このガイドのほとんどの手順は **チャンネル** から始まります。 ScaleFlow で、メイン ナビゲーションから **チャネル** を開き、リストからチャネル (Zalo、Messenger、WhatsApp、または Telegram) を選択します。

![Open Channels from the main navigation](/static/img/open-channel.png)

## Zalo OAとは何ですか?

Zalo OA とは **Zalo 公式アカウント** を意味します。これは、企業が顧客とメッセージを送受信できるようにする Zalo のビジネス アカウントです。

顧客が通常 Zalo を通じて連絡する場合は、Zalo OA を使用します。たとえば、診療所、学校、e コマース ショップ、または地元のサービス企業は、Zalo OA を使用して質問に答え、最新情報を送信し、顧客をサポートできます。

## Zalo OAアカウントの作成方法

あなたのビジネスにまだ Zalo OA がない場合:

1. Zalo公式アカウントのWebサイトにアクセスします。
2. ビジネスアカウントを管理する必要がある Zalo アカウントでサインインします。
3. 新しい公式アカウントを作成します。
4. ビジネスに合ったアカウントの種類を選択してください。
5. 事業所名、連絡先、必要事項をご記入ください。
6. Zalo が検証を求めた場合は、レビューのために送信します。
7. アカウントの準備ができたら、ScaleFlow に戻って接続します。

Zalo OA の所有者が不明な場合は、接続する前にマーケティング、カスタマー サービス、またはビジネス管理チームに問い合わせてください。

## Zalo OA を段階的に接続する

Zalo 公式アカウントからの顧客メッセージを ScaleFlow 受信箱に表示する場合は、このセクションを使用します。

接続する前に、次のことを確認してください。

- Zalo OA を管理する Zalo アカウントにサインインできます。
- ビジネスがどの Zalo OA に接続したいかはわかっています。
- Zalo OA はビジネス メッセージングに使用する準備ができています。一部の Zalo 権限には、検証済みまたはアップグレードされた OA が必要な場合があります。

### ステップ 1: Zalo チャンネルページを開く

1. ScaleFlow で、**チャネル**を開きます。
2. チャンネルリストから **Zalo** を選択します。
3. [**接続されているアカウント**] 領域を確認します。
4. アカウントがまだ接続されていない場合は、[**接続**] をクリックします。

![Click Connect to start Zalo OA connection](/static/img/zalo-connect-button.png)

### ステップ 2: Zalo にサインインする

[**接続**] をクリックすると、Zalo はサインイン ウィンドウを開きます。

1. ビジネス Zalo OA を管理する Zalo アカウントでサインインします。
2. Zalo に QR コードが表示された場合は、携帯電話で Zalo アプリを開いて QR コードをスキャンします。
3. Zalo に許可画面が表示されるまで続行します。

![Zalo login QR code screen](/static/img/zalo-login-qr.png)

ヒント: 間違った Zalo アカウントが表示された場合は、ウィンドウを閉じて、正しいアカウントで再度サインインしてください。

### ステップ 3: 正しい Zalo OA を選択し、アクセスを承認する

Zalo は、ScaleFlow が公式アカウントに接続できるようにするよう求めます。

1. 選択した Zalo OA 名を注意深く確認してください。
2. ScaleFlow で使用したいビジネス OA であることを確認してください。
3. 要求された権限を確認します。
4. 続行するにはリクエストを承認してください。

![Zalo OA permission approval screen](/static/img/zalo-permission-approval.png)

簡単に言えば、この権限により、ScaleFlow が Zalo OA から顧客との会話を受信して管理できるようになります。選択した OA がビジネス アカウントではない場合は、接続を承認しないでください。

### ステップ 4: 成功メッセージを待ちます

承認後、ScaleFlow は接続ウィンドウに成功メッセージを表示します。

1. Zalo 公式アカウントが正常に接続されたことを示すメッセージが表示されることを確認します。
2. [**閉じる**] をクリックするか、ウィンドウを閉じます。
3. ScaleFlow チャネルのページに戻ります。

![Zalo authentication successful message](/static/img/zalo-auth-success.png)

### ステップ 5: アカウントが ScaleFlow に表示されることを確認する

ScaleFlow に戻ると、接続された Zalo OA が **接続されたアカウント** の下に表示されるはずです。

次の場合、接続は成功します。

- Zalo OA カードが表示されます。
- ステータスは **アクティブ** を示します。
- カードには、**テスト**、**再接続**、**削除**などのアクションがあります。

![Zalo OA connected successfully in ScaleFlow](/static/img/zalo-connected-success.png)

### ボタンの意味

- **テスト**: ScaleFlow がまだこの Zalo OA に到達できるかどうかを確認します。
- **再接続**: 接続の有効期限が切れたり、動作しなくなったりした場合にこれを使用します。
- **削除**: Zalo OA を ScaleFlow から削除します。この OA からの新しい顧客メッセージは受信トレイに受信されなくなります。

## Messengerに接続する

Messengerは、シンプルな接続フローに従います。

1. **チャンネル**を開きます。
2. 左側のパネルから **Messenger** を選択します。
3. [**接続**] をクリックします。
4. そのプラットフォームのビジネス アカウントでサインインします。
5. 要求されたアクセスを承認します。
6. ScaleFlow に戻り、確認を待ちます。
7. アカウントが [**接続されているアカウント**] に表示されたら、接続は成功です。

プロセスに時間がかかりすぎる場合は、[**キャンセル**] をクリックして再試行してください。

## WhatsApp Business APIに接続する

Messengerとは異なり、WhatsApp Business APIアカウントの接続には、いくつかの前提条件とセットアップ手順が必要です。

詳細な要件およびステップバイステップの手順については、専用の[WhatsApp Business APIアカウントの接続](./whatsapp/connecting-your-whatsapp-business-api-account)ガイドを参照してください。


## 電報に接続する

Telegram は **ボット** を使用します。ボットは、ビジネス用のメッセージを送受信できる Telegram アカウントです。 ScaleFlow は、ボットの作成時に Telegram から提供される **ボット トークン** を使用して接続します。

ボット トークンをパスワードのように扱います。トークンを持っている人は誰でもボットを制御できます。トークンが公開されたと思われる場合は、Telegram で **@BotFather** を開き、ボットを選択し、**/revoke** を使用して新しいトークンを発行します。

### ステップ 1: ScaleFlow で Telegram チャネル ページを開く

1. ScaleFlow で、**チャネル**を開きます。
2. チャンネルリストから**テレグラム**を選択します。
3. **チャネル設定**で、短いチェックリストを読み、**接続** (テレグラムパネルの右上) をクリックします。

セットアップ後に、下部にある **接続済みアカウント** を使用してボットを確認します。そこでは、他のチャネルと同じように、接続を**テスト**、**再接続**、または**削除**することができます。

![Telegram channel setup with Connect and Connected accounts](/static/img/connect_tele.png)

### ステップ 2: Telegram で公式 BotFather を見つける

ボットは、ScaleFlow 内ではなく、Telegram アプリ (電話またはデスクトップ) 内で作成します。

1. テレグラムアプリを開きます。
2. 検索フィールドをタップし、「**`@BotFather`**」と入力します。
3. **青い確認済みチェックマーク**が付いている **BotFather** という名前のアカウントを開きます。似た名前の非公式アカウントは無視してください。

![Search for official @BotFather in Telegram](/static/img/telegram-search-botfather.png)

### ステップ 3: ボットを作成し、ボット トークンをコピーする

1. **@BotFather** とチャットを開始します。
2. **`/newbot`** を送信し、質問 (表示名とユーザー名) に答えます。
3. ユーザー名は **`bot`** で終わる必要があります (例:`MyShopSupport_bot`)。名前が使用されると、BotFather は別の名前を要求します。
4. 作成が成功すると、BotFather は **HTTP API トークン** (真ん中にコロン`:`がある長い文字列) を含むメッセージを送信します。 **完全なトークンをコピー**し、非公開にしておきます。

![BotFather success message with Bot Token](/static/img/telegram-botfather-token.png)

### ステップ 4: ScaleFlow にトークンを貼り付けて確認する

[**Connect Telegram Bot**] ウィンドウはステップ 1 から開いたままになっているはずです。ウィンドウを閉じた場合は、Telegram チャネル ページでもう一度 [**Connect**] をクリックします。

1. トークンを **ボット トークン** に貼り付けます。
2. 必要に応じて、「**トークンを取得するには?」を使用します。 @BotFather** リンクをリマインダーとして使用します。
3. **Verify Token** をクリックすると、ScaleFlow が Telegram でトークンを確認できるようになります。

![Connect Telegram Bot: enter token and Verify Token](/static/img/telegram-modal-enter-token.png)

### ステップ 5: ボット名を確認して終了します

トークンが有効な場合は、緑色の **ボットが見つかりました** というメッセージとボットのハンドル (`@YourBot_bot`など) が表示されます。

1. ハンドルが BotFather で作成したボットと一致することを確認します。
2. [**接続**] をクリックして、ScaleFlow に接続を保存します。

![Bot Found confirmation before Connect](/static/img/telegram-modal-bot-found.png)

### ステップ 6: ScaleFlow でアカウントを確認する

**チャネル** > **テレグラム**に戻ると、ステップ 1 のスクリーンショットのカードと同様に、ボットが **接続済みアカウント** の下に **アクティブ** のステータスで表示されます。 **テスト**を使用してメッセージが ScaleFlow に到達できることを確認し、リンクを更新または削除する必要がある場合は **再接続** または **削除** します。

![Telegram — Connected accounts after successful connection](/static/img/telegram-connected-accounts.png)

## 接続されているアカウントを管理する

接続後、各アカウントは [**接続されているアカウント**] に表示されます。次のことができます。

- **テスト**: チャネルがまだ到達可能かどうかを確認します。
- **再接続**: 接続が機能しなくなった場合は、再度サインインします。
- **削除**: ScaleFlow から接続を削除します (そのチャネルからの新しいメッセージは停止します)。

## 動作確認方法

1. 新しく接続されたアカウントで [**テスト**] をクリックします。
2. そのチャネル (Zalo/Facebook/WhatsApp/Telegram) から実際のテスト メッセージを送信します。
3. **受信箱**を開き、メッセージが到着していることを確認します。

### 電報: 電話中の顧客、受信トレイ内のチーム

Telegram の場合、同じ会話が 2 つの場所に表示されます。顧客は Telegram アプリで **ボット**とチャットし、チーム (または[AI Assistant](./ai-assistant)) は ScaleFlow **受信箱**から作業します。受信バブルには **Telegram** ラベルが表示されるため、メッセージがどのチャネルを使用したかを常に知ることができます。

1. 電話で Telegram を開き、ボットを起動して、何か (**`/start`** と短い質問など) を送信します。
2. ScaleFlow で[Inbox](./inbox-usage)を開き、会話を選択し、同じテキストが表示されることを確認します。 [**返信**] ボックスから返信することも、**AI スマート ライティング** が有効になっている場合は使用することもできます。

![Customer sends messages to your bot in the Telegram app](/static/img/telegram-test-chat-mobile.png)

![The same thread in ScaleFlow Inbox with Telegram labels and a reply draft](/static/img/telegram-test-chat-inbox.png)

## 現実世界のワークフロー

1. 顧客が Zalo OA に「保証はありますか?」というメッセージを送信します。
2. メッセージは[Inbox](./inbox-usage)に表示されます。
3. [AI Assistant](./ai-assistant)は保証知識を確認して返信します。
4. お客様が修理ケースを要求した場合、スタッフは[Ticket](./ticket-usage)を作成します。
5. チケットは修理が完了するまで扱います。

## 次に何をすべきか

少なくとも 1 つのチャネルが接続された後:

1. ビジネスの回答を[Knowledge](./knowledge-usage)に追加します。
2. 最初の[AI Agent](./ai-agent-usage)を構築します。
3. 準備ができたら、[AI Assistant](./ai-assistant)をオンにします。

テストが失敗した場合:

- **再接続**をお試しください。
- チャンネル アカウントがまだアクティブであることを確認してください。
- それでもメッセージが届かない場合は、管理者に助けを求めてください。
