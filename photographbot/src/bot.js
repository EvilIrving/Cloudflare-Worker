import { Bot } from 'grammy';

let bot = null;

export function initBot(env) {
	if (bot) {
		return bot;
	}
	bot = new Bot(env.TG_TOKEN, { botInfo: JSON.parse(env.BOT_INFO) });
	return bot;
}

export { bot };
