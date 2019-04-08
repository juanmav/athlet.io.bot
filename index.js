const dotenv = require('dotenv');
dotenv.config();
const Telegraf = require('telegraf');
const fetch = require('node-fetch');
const endPoint = process.env.ENDPOINT;
const filterProducts = require('./filterProducts');

console.log('Corriendo bot :)');

const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN);
bot.start((ctx) => ctx.reply('Para pedir stock escribi /stock o /stock [filtro]'));
bot.help((ctx) => ctx.reply('Work in progress'));
bot.command('/stock', (ctx) => {
    console.info('Pedido de stock entrante!');
    console.log("filter: " + ctx.message.text.split('/stock')[1].trim());
    let stringFilter = ctx.message.text.split('/stock')[1].trim().toLocaleLowerCase();

    fetch(endPoint)
        .then(response => response.json())
        .then( data => {
            const labels = filterProducts(data, stringFilter);
            return ctx.reply('Resultado: \n' + labels);
        })
});



bot.on('message', (ctx) => {
    console.info('Pedido entrante!');
    ctx.reply('mensaje');
});

bot.launch();