// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits} = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)

client.once(Events.ClientReady, c => {
	console.log(`Client ready! Logged in as ${c.user.tag}`);
});

// Log into discord with the token
client.login(token);