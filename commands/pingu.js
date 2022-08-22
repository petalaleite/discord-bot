const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingu')
		.setDescription('Replies with "Estou ablubluble da cabeça"'),
	async execute(interaction) {
		await interaction.reply('Estou ablubluble da cabeça');
	},
};