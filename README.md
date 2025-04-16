# Pushover Bot

A Discord bot that forwards messages from specific Discord channels to various notification services including Pushover, Discord webhooks, and ntfy.

## Features

- Monitor specific Discord channels for new messages
- Forward messages to Pushover notifications
- Forward messages to Discord webhooks
- Forward messages to ntfy notifications
- Configurable notification settings

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- Discord account with a token
- Pushover account (optional)
- ntfy server (optional)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/59n/pushover-bot.git
   cd pushover-bot
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

## Environment Variables

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

## Usage

The bot will automatically start monitoring the specified Discord channels once it's running. It will forward messages according to your configuration in the `.env` file.

You can enable or disable different notification methods by changing the corresponding environment variables:

- `ENABLE_PUSHOVER`: Set to `true` to enable Pushover notifications
- `ENABLE_DISCORD_NOTIF`: Set to `true` to enable Discord webhook notifications
- `ENABLE_NTFY`: Set to `true` to enable ntfy notifications

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This bot uses discord.js-selfbot-v13 which is not officially supported by Discord. Use at your own risk as it may violate Discord's Terms of Service.
