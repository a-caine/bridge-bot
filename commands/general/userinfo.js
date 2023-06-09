const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Provides information about the user.'),
    async execute(interaction) {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined the server on ${interaction.member.joinedAt}.`);
    },
};