# Discord Pushover Selfbot

## 📱 Discord to Mobile Notifications Bridge

A powerful Discord selfbot that forwards messages from specific Discord channels directly to your mobile device through Pushover, Discord webhooks, or ntfy notifications. Never miss important messages again!

## 🚀 Key Features

- **Multi-Channel Monitoring**: Track messages from specific Discord channels
- **Real-Time Notifications**: Get instant mobile alerts via Pushover
- **Flexible Configuration**: Choose between Pushover, Discord webhooks, or ntfy
- **Customizable Settings**: Control which notifications you receive
- **Easy Setup**: Simple environment variable configuration

## 💡 Perfect For

- Community moderators who need to stay informed
- Team members who can't miss critical discussions
- Anyone who wants important Discord messages delivered directly to their phone
- Users who need to monitor channels without staying active on Discord

## 🔧 Highly Configurable

Easily customize which channels to monitor, where to send notifications, and what information to include in alerts. The bot is designed to be flexible and adapt to your specific notification needs.

## 📊 Lightweight & Efficient

Built with performance in mind, this bot uses minimal resources while providing reliable notification delivery. It's designed to run continuously with low overhead.

## 📋 Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- Discord account with a token
- Pushover account (optional)
- ntfy server (optional)

## 🔧 Installation

1. Clone this repository:
   ```
   git clone https://github.com/59n/discord-pushover-selfbot.git
   cd discord-pushover-selfbot
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your configuration (see Environment Variables section below).

4. Start the bot:
   ```
   node client.js
   ```

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Discord Bot Configuration
DISCORD_TOKEN=your_discord_token

# Guild and Channel IDs
GUILD_ID=your_guild_id
FORWARD_CHANNEL_ID=your_forward_channel_id

# Channel IDs to monitor
GENERAL_CHANNEL_ID=your_general_channel_id
BEGINNERS_CHANNEL_ID=your_beginners_channel_id
ACTIVE_CHANNEL_ID=your_active_channel_id

# Discord Webhook URLs
GENERAL_WEBHOOK_URL=your_general_webhook_url
BEGINNERS_WEBHOOK_URL=your_beginners_webhook_url
ACTIVE_WEBHOOK_URL=your_active_webhook_url

# Notification Settings (true/false)
ENABLE_PUSHOVER=true
ENABLE_DISCORD_NOTIF=false
ENABLE_NTFY=false

# Pushover Configuration
PUSHOVER_TOKEN=your_pushover_token
PUSHOVER_USER=your_pushover_user_key

# NTFY Configuration
NTFY_URL=your_ntfy_url
```

## 🚀 Usage

The bot will automatically start monitoring the specified Discord channels once it's running. It will forward messages according to your configuration in the `.env` file.

You can enable or disable different notification methods by changing the corresponding environment variables:

- `ENABLE_PUSHOVER`: Set to `true` to enable Pushover notifications
- `ENABLE_DISCORD_NOTIF`: Set to `true` to enable Discord webhook notifications
- `ENABLE_NTFY`: Set to `true` to enable ntfy notifications

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⚠️ Disclaimer

**Important**: This bot uses discord.js-selfbot-v13 which interacts with user accounts. Please be aware of Discord's Terms of Service when using selfbots.
