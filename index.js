require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

let beautifulTimeout = null;
let waterTimeout = null;
let waterChannel = '680468339952189525';
let waterTimes = [28800000, 21600000];

let sayings = ['czy wiedziałeś, że Ziemia jest jedyną planeta w układzie słonecznym której nazwa nie pochodzi od imienia boga', 'hej, pięknie dziś wyglądasz:3'];

const urBeautiful = () => {
    bot.channels.cache.get(waterChannel).send(sayings[Math.floor(Math.random() * 2)]);
    beautifulTimeout = setTimeout(() => {
        urBeautiful();
    }, 39600000);
}

const waterReminder = () => {
    bot.channels.cache.get(waterChannel).send('hej, napij się wody prosze...');
    waterTimeout = setTimeout(() => {
        waterReminder();
    }, waterTimes[Math.floor(Math.random() * 2)])
}

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}`)
})

bot.on('message', msg => {
    if(msg.author.id != bot.user.id){
        if(msg.content.startsWith('!')){
            let msgContent = msg.content.substring(1)
            if(msgContent == 'water'){
                if(waterChannel){
                    clearTimeout(beautifulTimeout);
                    clearTimeout(waterTimeout);
                }
                waterChannel = msg.channel.id;
                waterReminder();
                urBeautiful();
                
            }
        }
    }
    
})