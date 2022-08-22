const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with "Coringando com o Course!!"'),
	async execute(interaction) {
		await interaction.reply(
			`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
	},
};
