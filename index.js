require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

let beautifulTimeout = null;
let waterChannel = '680468339952189525';


let lastCiekawostka = null
let ciekawostki = 
[{content: 'czy wiedziałeś, że Ziemia jest jedyną planeta w układzie słonecznym której nazwa nie pochodzi od imienia boga', photo: null, pName: null}, 
{content: 'pięknie dziś wyglądasz:3', photo: null, pName: null}, 
{content: 'czy wiedziałeś, że jedna sekunda to tysiąc milisekund?', photo: null, pName: null}, 
{content: 'nie zapomnij o napiciu się wody!', photo: './images/woda.jpg', pName: 'woda.jpg'},
{content: 'hej, napij się wody prosze...', photo: null, pName: null},
{content: 'musisz wiedzieć, że wyglądasz dziś epicko :flushed:', photo: null, pName: null}, 
{content: 'w filmie "alicja w krainie czarów" wkradł się błąd, ponieważ na początku filmu główna bohaterka mówi, że nienawidzi pończoch i noszenie ich jest głupie. jednak na końcu filmu gdy tańczy futterwacking widać, że ma je na sobie.', photo: './images/alicja.jpg', pName: 'alicja.jpg'},
{content: '"alicja w krainie czarów" jest szóstym filmem, który przekroczył 1 miliard dolarów dochodu.', photo: null, pName: null},
{content: 'dwa minusy dają plus', photo: null, pName: null},
{content: 'Δ=b²-4ac', photo: null, pName: null},
{content: 'gdy ci smutno, gdy ci źle, chodź do rio, przytul się', photo: './imgaes/rio.jpg', pName: 'rio.jpg'},
{content: 'gapisz się jej na bebech?', photo: './images/edzia_bebech.jpg', pName: 'edzia_bebech.jpg'},
{content: 'bóbr jest największym gryzoniem zamieszkującym europę', photo: './images/bobr.jpg', pName: 'bobr.jpg'},
{content: null, photo: './images/mieciu.jpg', pName: 'mieciu.jpg'},
{content: null, photo: './images/krulis.gif', pName: 'krulis.gif'},
{content: null, photo: './images/krulisie_flower.jpg', pName: 'krulisie_flower.jpg'},
{content: null, photo: './images/jajuwa.jpg', pName: 'jajuwa.jpg'},
{content: 'hi u lil sweetie, smile more!' , photo: './images/lisek.jpg', pName: 'lisek.jpg'},
{content: 'bóbr potrafi wstrzymać oddech nawet na kwadrans, co czyni go wyśmienitym nurkiem.', photo: null, pName: null},
{content: 'dzięki wibrysom (włosom czuciowym) na pysku, boberki świetnie sobie radzą także w zanieczyszczonej, mętnej wodzie. :sweat_drops', photo: null, pName: null},
{content: 'bóbr jest raczej małomówny – komunikaty głosowe wydaje bardzo rzadko. przed niebezpieczeństwem ostrzega innych członków stada poprzez głośne uderzanie ogonem o wodę.', photo: './images/boberki_woda.jpg', pName: 'boberki_woda.jpg'},
{content: 'rzucilbys coś ten :point_right: :point_left:', photo: './images/rio_rzucaj.jpg', pName: 'rio_rzucaj.jpg'},
{content: null, photo: './images/bunny_pie.jpg', pName: 'bunny_pie.jpg'},
{content: 'miłego dnia tobie :dog:', photo: './images/milego_pjes.jpg', pName: 'milego_pjes.jpg'},
{content: 'smacznej kawusi i jebać kapusi', photo: './images/kawunia.jpg', pName: 'kawunia.jpg'},
{content: 'smacznej kawusi i jebać kapusi', photo: null, pName: null},
{content: ':poop: :stuck_out_tongue:', photo: './images/lis_wtf.jpg', pName: 'lis_wtf.jpg'},
{content: 'tęcza nie obraża :rainbow:', photo: './images/golden_tecza.jpg', pName: 'golden_tecza.jpg'},
{content: 'gulnij se wody może co ;d', photo: './images/gulnij_wode.jpg', pName: 'gulnij_wode.jpg'},
{content: 'nie zapomniałeś o czymś?', photo: './images/woda_nie_zap.jpg', pName: 'woda_nie_zap.jpg'},
{content: 'dlaczego koty przyjmują pozycje bochenka? pozycja ta z jednej strony sugeruje, że kot jest zrelaksowany i czuje się bezpiecznie w danym momencie, ale z drugiej strony chce pozostać czujnym w razie koniecznosci szybkiego wstania.', photo: './images/edzia_bochen.jpg', pName: 'edzia_bochen.jpg'},
{content: 'smacznej herbatki dla całej rodzinki', photo: './images/rio_herbata.jpg', pName: 'rio_herbata.jpg'},
{content: 'elo, napiles się dziś wody?', photo: './images/edzia_woda.jpg', pName: 'edzia_woda.jpg'},
{content: 'jakiego masz windowsa', photo: './images/zeczak_windows.jpg', pName: 'zeczak_windows.jpg'},
{content: null, photo: './images/maklowicz_pjes_plaza.jpg', pName: 'maklowicz_pjes_plaza.jpg'},
{content: 'halo dzwoni kuzyn', photo: './images/edzia_dzwoni.jpg', pName: 'edzia_dzwoni.jpg'},
{content: null, photo: './images/krulis_hug.jpg', pName: 'krulis_hug.jpg'},
{content: null, photo: './images/krulis_namiot.jpg', pName: 'krulis_namiot.jpg'},
{content: 'dance monkey d(-__-)b', photo: './images/dance_monkey.gif', pName: 'dance_monkey.gif'},
{content: '\***** \*** i konfederacje', photo: null, pName: null},
{content: null, photo: './images/gorgeous_reminder.jpg', pName: 'gorgeous_reminder.jpg'},
{content: null, photo: './images/mieciu_herbata.jpg', pName: 'mieciu_herbata.jpg'}
];

const losujCiekawostke = function(){
    let ciekawostkaLos = ciekawostki[Math.floor(Math.random() * ciekawostki.length)];
    if(ciekawostkaLos == lastCiekawostka){
        losujCiekawostke();
    } else {
        return ciekawostkaLos;
    }
}


const urBeautiful = () => {
    beautifulTimeout = setTimeout(() => {
        let ciekawostka = losujCiekawostke();
        let embed = new Discord.MessageEmbed()
        .setTitle(ciekawostka.content)
        .attachFiles([ciekawostka.photo])
        .setImage(`attachment://${ciekawostka.pName}`)
        .setColor('#DD9ECD');
        bot.channels.cache.get(waterChannel).send(embed);
        urBeautiful();
    }, Math.floor(Math.random() * 25200000) + 36000000);
}

   


bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}`)
    bot.channels.cache.get(waterChannel).send('hej, jestem kruliś. robie wiele fajnych rzeczy jak np. przypominam o nawodnieniu organizmu albo daje dzienną dawkę ciekawostek. do zoba!');
    urBeautiful();
})

bot.on('message', msg => {
    if(msg.author.id != bot.user.id){
        if(msg.content.startsWith('!')){
            let msgContent = msg.content.substring(1)
            if(msgContent == 'water'){
                if(waterChannel){
                    clearTimeout(beautifulTimeout);
                }
                waterChannel = msg.channel.id;
                urBeautiful();
            }
        }
    }
    
})