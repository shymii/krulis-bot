require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');

const TOKEN = process.env.TOKEN;
const prefix = '!';

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

let ciekawostkiChannel = '680468339952189525';
//test channel
//let ciekawostkiChannel = '811917843771817994';
let ciekawostkaTimeout = null

const startCiekawostki = function(){
    client.channels.cache.get(ciekawostkiChannel).send(client.commands.get('ciekawostki').execute());
    ciekawostkaTimeout = setTimeout(() => {
        startCiekawostki()
    }, Math.floor(Math.random() * 25200000) + 36000000)
}

client.login(TOKEN);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}`)
    client.user.setActivity('!help')
    startCiekawostki();
})

client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try{
        command.execute(msg, args);
    } catch(error){
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }    
    
});
