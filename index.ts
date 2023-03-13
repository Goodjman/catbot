import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

client.once('ready', () => {
  console.log('the bot is ready');
});

client.on('message', async (message) => {
  if (message.content.includes('si' || 'си')) {
    message.reply(
      'Владимир Хиль уже заждался =>  https://vladimirkhil.com/si/online/'
    );
  }

  if (message.content.includes('дота' || 'dota')) {
    message.reply('крип крипочек');
  }

 /* const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "How are you today?",
  });
  message.channel.send(completion.data.choices[0].text ?? 'No message to send.');*/
});

client.login(process.env.TOKEN);
