const { Client } = require('discord.js-selfbot-v13');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
    checkUpdate: false,
	// See other options here
	// https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
	// All partials are loaded automatically
});

// Load notification settings from environment variables
const pushover = process.env.ENABLE_PUSHOVER === 'true';
const discord_notif = process.env.ENABLE_DISCORD_NOTIF === 'true';
const ntfy = process.env.ENABLE_NTFY === 'true';

client.on('ready', async () => {

  console.log(`${client.user.username} is ready!`);
  client.user.setStatus('idle');

})


async function sendPushNotification(token, user, text, optionalParams = {}) {
    const url = 'https://api.pushover.net/1/messages.json';

    // Required parameters
    const data = {
        token: token,
        user: user,
        message: text,
    };

    // Optional parameters
    Object.assign(data, optionalParams);

    try {
        // Send the HTTPS POST request
        const response = await axios.post(url, data);

        // Print the response from the server
        console.log(response.data);
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
    }
}

// Helper function to pause execution
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

client.on('messageCreate', async (message) => {
    // fix this "RangeError [MESSAGE_CONTENT_TYPE]: Message content must be a non-empty string."
    if (!message.content) {
        return;
    }
    if (message.channel.type === 'DM' || message.channel.type === 'GROUP_DM') {
        return;
    }
    if (message.guild.id !== process.env.GUILD_ID) {
        return;
    }
    try {
        let forwardChannelId;
        let webhookurl;

        // Set the forward channel ID from environment variables
        forwardChannelId = process.env.FORWARD_CHANNEL_ID;

        // Determine which webhook URL to use based on the source channel
        if (message.channel.id === process.env.CHANNEL_ID_ONE) { // FWRD CHANNEL 1
            webhookurl = process.env.CHANNEL_ID_ONE_WEBHOOK;
        } else if (message.channel.id === process.env.CHANNEL_ID_TWO) { // FWRD CHANNEL 2
            webhookurl = process.env.CHANNEL_ID_TWO_WEBHOOK;
        } else if (message.channel.id === process.env.CHANNEL_ID_THREE) { // FWRD CHANNEL 3
            webhookurl = process.env.CHANNEL_ID_THREE_WEBHOOK;
        } else {
            return;
        }
        const forwardChannel = client.channels.cache.get(forwardChannelId);
        if (!forwardChannel) {
            console.error(`Cannot find the forward channel with ID ${forwardChannelId}`);
            return;
        }

        try {
            if (discord_notif == true) {
                // console.log('discord')
                const { WebhookClient } = require('discord.js-selfbot-v13');
                const webhookClient = new WebhookClient({ url: webhookurl });
                const avatar = message.author.avatarURL();
                const username = message.author.username;
                const content = message.content;
                await webhookClient.send({avatarURL: avatar,username: username,content: content,});
            } else {
            }

            if (ntfy == true) {
                // console.log('ntfy')
                const url = process.env.NTFY_URL;
                const channel_name = message.channel.name;
                const data = `${message.author.username}: ` + message.content;
                const headers = {
                    "Title": channel_name.replace(/[^\x20-\x7E]/g, ''), // Remove invalid characters
                    // "Priority": "urgent",
                    "Tags": "computer"
                };
                await sleep(3000); // Sleep for 3 seconds
                axios.post(url, data, { headers: headers })
                    .then(() => {
                        // Handle success
                        // console.log('Notification sent successfully');
                    })
                    .catch(error => {
                        // Handle error
                        console.error(error);
                    });


            } else {
            }

            if (pushover == true) {
                // console.log('pushover')
                const token = process.env.PUSHOVER_TOKEN;
                const user = process.env.PUSHOVER_USER;
                const text = `${message.author.username}: ` + message.content;
                const channel_name = message.channel.name;
                const optionalParams = {
                    priority: 1,
                    title: channel_name,
                    // url: 'https://example.com',
                    // url_title: 'Visit Example',
                };

                sendPushNotification(token, user, text, optionalParams);
            } else {
                return;
            }

        } catch (error) {
            console.error('Error sending message:', error);
        }

    } catch (error) {
        console.error('Error processing message:', error);
        return;
    }
});




client.login(process.env.DISCORD_TOKEN);
