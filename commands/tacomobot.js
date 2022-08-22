const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tacomobot')
		.setDescription('Replies with "Coringando com o Course!!"'),
	async execute(interaction) {
		await interaction.reply('Coringando com o Course!!');
	},
};
