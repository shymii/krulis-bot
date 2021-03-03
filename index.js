require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

let beautifulTimeout = null;
let waterTimeout = null;
let waterChannel = '680468339952189525';


let lastCiekawostka = null
let ciekawostki = 
[{content: 'czy wiedziałeś, że Ziemia jest jedyną planeta w układzie słonecznym której nazwa nie pochodzi od imienia boga', photo: null}, 
{content: 'pięknie dziś wyglądasz:3', photo: null}, 
{content: 'czy wiedziałeś, że jedna sekunda to tysiąc milisekund?', photo: null}, 
{content: 'nie zapomnij o napiciu się wody!', photo: './woda.jpg'}, 
{content: 'musisz wiedzieć, że wyglądasz dziś epicko :flushed:', photo: null}, 
{content: 'w filmie "alicja w krainie czarów" wkradł się błąd, ponieważ na początku filmu główna bohaterka mówi, że nienawidzi pończoch i noszenie ich jest głupie. jednak na końcu filmu gdy tańczy futterwacking widać, że ma je na sobie.', photo: './alicja.jpg'},
{content: '"alicja w krainie czarów" jest szóstym filmem, który przekroczył 1 miliard dolarów dochodu.', photo: null},
{content: 'dwa minusy dają plus', photo: null},
{content: 'Δ=b²-4ac', photo: null},
{content: 'gdy ci smutno, gdy ci źle, chodź do rio, przytul się', photo: './imgaes/rio.jpg'},
{content: 'gapisz się jej na bebech?', photo: './images/edzia_bebech.jpg'},
{content: 'bóbr jest największym gryzoniem zamieszkującym europę', photo: './images/bobr.jpg'},
{content: null, photo: './images/mieciu.jpg'},
{content: null, photo: './images/krulis.gif'},
{content: null, photo: './images/krulisie_flower.jpg'},
{content: null, photo: './images/jajuwa.jpg'},
{content: 'hi u lil sweetie, smile more!' , photo: './images/lisek.jpg'},
{content: 'bóbr potrafi wstrzymać oddech nawet na kwadrans, co czyni go wyśmienitym nurkiem.', photo: null},
{content: 'dzięki wibrysom (włosom czuciowym) na pysku, boberki świetnie sobie radzą także w zanieczyszczonej, mętnej wodzie. :sweat_drops'},
{content: 'bóbr jest raczej małomówny – komunikaty głosowe wydaje bardzo rzadko. przed niebezpieczeństwem ostrzega innych członków stada poprzez głośne uderzanie ogonem o wodę.', photo: './images/boberki_woda.jpg'},
{content: 'rzucilbys coś ten :point_right: :point_left:', photo: './imgaes/rio_rzucaj.jpg'},
{content: null, photo: './images/bunny_pie.jpg'},
{content: 'miłego dnia tobie :dog:', photo: './images/milego_pjes.jpg'},
{content: 'smacznej kawusi i jebać kapusi', photo: './images/kawunia.jpg'},
{content: 'smacznej kawusi i jebać kapusi', photo: null},
{content: ':poop: :stuck_out_tongue:', photo: './images/lis_wtf.jpg'}];

const losujCiekawostke = function(){
    let ciekawostkaLos = ciekawostki[Math.floor(Math.random() * ciekawostki.length)];
    if(ciekawostka == lastCiekawostka){
        losujCiekawostke();
    } else {
        return ciekawostkaLos;
    }
}


const urBeautiful = () => {
    beautifulTimeout = setTimeout(() => {
        let ciekawostka = losujCiekawostke();
        bot.channels.cache.get(waterChannel).send(new Discord.MessageEmbed()
        .setTitle(ciekawostka.content)
        .setImage(ciekawostka.photo)
        .setColor('#DD9ECD'));
        urBeautiful();
    }, Math.floor(Math.random() * 25200000) + 36000000);
}

   

const waterReminder = () => {
    bot.channels.cache.get(waterChannel).send('hej, napij się wody prosze...');
    waterTimeout = setTimeout(() => {
        waterReminder();
    }, Math.floor(Math.random() * 25200000) + 36000000)
}

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}`)
    bot.channels.cache.get(waterChannel).send('hej, od dziś będę twoim przypomnieniem o nawodnieniu organizmu i dzienną dawką ciekawostek. do zoba!');
    urBeautiful();
    waterReminder();
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