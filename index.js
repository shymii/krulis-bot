require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

let beautifulTimeout = null;
//let waterChannel = '680468339952189525';
let waterChannel = '811917843771817994';

let lastCiekawostka = null
let ciekawostki = [
{content: 'czy wiedziałeś, że Ziemia jest jedyną planeta w układzie słonecznym której nazwa nie pochodzi od imienia boga', photo: null, pName: null}, 
{content: 'pięknie dziś wyglądasz:3', photo: null, pName: null}, 
{content: 'czy wiedziałeś, że jedna sekunda to tysiąc milisekund?', photo: null, pName: null}, 
{content: 'nie zapomnij o napiciu się wody!', photo: './images/woda.jpg', pName: 'woda.jpg'},
{content: 'hej, napij się wody prosze...', photo: null, pName: null},
{content: 'musisz wiedzieć, że wyglądasz dziś epicko :flushed:', photo: null, pName: null}, 
{content: 'w filmie "alicja w krainie czarów" wkradł się błąd, ponieważ na początku filmu główna bohaterka mówi, że nienawidzi pończoch i noszenie ich jest głupie. jednak na końcu filmu gdy tańczy futterwacking widać, że ma je na sobie.', photo: './images/alicja.jpg', pName: 'alicja.jpg'},
{content: '"alicja w krainie czarów" jest szóstym filmem, który przekroczył 1 miliard dolarów dochodu.', photo: null, pName: null},
{content: 'dwa minusy dają plus', photo: null, pName: null},
{content: 'Δ=b²-4ac', photo: null, pName: null},
{content: 'gdy ci smutno, gdy ci źle, chodź do rio, przytul się', photo: './images/rio.jpg', pName: 'rio.jpg'},
{content: 'gapisz się jej na bebech?', photo: './images/edzia_bebech.jpg', pName: 'edzia_bebech.jpg'},
{content: 'bóbr jest największym gryzoniem zamieszkującym europę', photo: './images/bobr.jpg', pName: 'bobr.jpg'},
{content: '', photo: './images/mieciu.jpg', pName: 'mieciu.jpg'},
{content: '', photo: './images/krulis.gif', pName: 'krulis.gif'},
{content: '', photo: './images/krulisie_flower.jpg', pName: 'krulisie_flower.jpg'},
{content: '', photo: './images/jajuwa.jpg', pName: 'jajuwa.jpg'},
{content: 'hi u lil sweetie, smile more!' , photo: './images/lisek.jpg', pName: 'lisek.jpg'},
{content: 'bóbr potrafi wstrzymać oddech nawet na kwadrans, co czyni go wyśmienitym nurkiem.', photo: null, pName: null},
{content: 'dzięki wibrysom (włosom czuciowym) na pysku, boberki świetnie sobie radzą także w zanieczyszczonej, mętnej wodzie. :sweat_drops', photo: null, pName: null},
{content: 'bóbr jest raczej małomówny – komunikaty głosowe wydaje bardzo rzadko. przed niebezpieczeństwem ostrzega innych członków stada poprzez głośne uderzanie ogonem o wodę.', photo: './images/boberki_woda.jpg', pName: 'boberki_woda.jpg'},
{content: 'rzuciłbys coś ten :point_right: :point_left:', photo: './images/rio_rzucaj.jpg', pName: 'rio_rzucaj.jpg'},
{content: '', photo: './images/bunny_pie.jpg', pName: 'bunny_pie.jpg'},
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
{content: '', photo: './images/maklowicz_pjes_plaza.jpg', pName: 'maklowicz_pjes_plaza.jpg'},
{content: 'halo dzwoni kuzyn', photo: './images/edzia_dzwoni.jpg', pName: 'edzia_dzwoni.jpg'},
{content: '', photo: './images/krulis_hug.jpg', pName: 'krulis_hug.jpg'},
{content: '', photo: './images/krulis_namiot.jpg', pName: 'krulis_namiot.jpg'},
{content: 'dance monkey d(-__-)b', photo: './images/dance_monkey.gif', pName: 'dance_monkey.gif'},
{content: '\***** \*** i konfederacje', photo: null, pName: null},
{content: '', photo: './images/gorgeous_reminder.jpg', pName: 'gorgeous_reminder.jpg'},
{content: '', photo: './images/whol1.jpg', pName: 'whol1.jpg'},
{content: '', photo: './images/whol2.jpg', pName: 'whol2.jpg'},
{content: '', photo: './images/whol3.jpg', pName: 'whol3.jpg'},
{content: '', photo: './images/whol4.jpg', pName: 'whol4.jpg'},
{content: '', photo: './images/whol5.jpg', pName: 'whol5.jpg'},
{content: '', photo: './images/whol6.jpg', pName: 'whol6.jpg'},
{content: '', photo: './images/whol7.jpg', pName: 'whol7.jpg'},
{content: '', photo: './images/whol8.jpg', pName: 'whol8.jpg'},
{content: 'szopy i wydry to epickie stworzenia', photo: './images/szop_wydra.jpg', pName: 'szop_wydra.jpg'},
{content: 'weźże przykład z otta i poucz się trochę', photo: './images/otto_uczonko.jpg', pName: 'otto_uczonko.jpg'},
{content: '', photo: './images/mieciu_herbata.jpg', pName: 'mieciu_herbata.jpg'},
{content: 'siema, masz może jakąś gałąź? ;pp', photo: './images/filip_galaz.jpg', pName: 'filip_galaz.jpg'},
{content: 'buziol', photo: './images/filip_buziol.jpg', pName: 'filip_buziol.jpg'},
{content: 'pobudka', photo: './images/filip_pobudka.jpg', pName: 'filip_pobudka.jpg'},
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
        .setColor('#DD9ECD');
        if(ciekawostka.photo){

            embed.attachFiles([ciekawostka.photo]).setImage(`attachment://${ciekawostka.pName}`)
        }
        bot.channels.cache.get(waterChannel).send(embed);
        urBeautiful();
    }, Math.floor(Math.random() * 25200000) + 36000000);
}

let lastBanan = null;
let banany = [
    {content: 'nom opierdolilem se banana i co się wkurzasz??', photo: './images/filip_banan.jpg', pName: 'filip_banan.jpg'},
    {content: 'DAWAJ KURWA BANANA', photo: './images/filip_krzyk.jpg', pName: 'filip_krzyk.jpg'},
    {content: 'ale bym se opierdolil banana', photo: './images/filip_ale_by_se_dal_banan.jpg', pName: 'filip_ale_by_se_dal_banan.jpg'},
    {content: 'gdzie ten banan?????????', photo: './images/filip_gdzie_banan.jpg', pName: 'filip_gdzie_banan.jpg'},
    {content: 'hi, im looking for banana, do u hav som?', photo: './images/filip_szuka_banan.jpg', pName: 'filip_szuka_banan.jpg'},
    {content: 'czy ktoś powiedział b a n a n??', photo: './images/filip_czy_ktos_banan.jpg', pName: 'filip_czy_ktos_banan.jpg'},
    {content: 'na zakupy typu bananowe', photo: './images/filip_zakupy.jpg', pName: 'filip_zakupy.jpg'},
    {content: 'we mi zamów jakiegoś banana ten', photo: './images/filip_we_zamow.jpg', pName: 'filip_we_zamow.jpg'},
]

const losujBanan = function(){
    let bananLos = banany[Math.floor(Math.random() * banany.length)];
    if(bananLos == lastBanan){
        losujBanan();
    } else {
        return bananLos;
    }
}

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}`)
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
            if(msgContent == 'banan'){
                let resp = losujBanan();
                let embed = new Discord.MessageEmbed()
                .setTitle(resp.content)
                .setColor('#DD9ECD')
                .attachFiles([resp.photo])
                .setImage(`attachment://${resp.pName}`)
                msg.channel.send(embed)
            }
            if(msgContent == 'frens'){
                let embed = new Discord.MessageEmbed()
                .setDescription('Frens to suchy pokarm do rozsądnego karmienia piesków. Jest hipoalergiczny, bezglutenowy i bezzbożowy, to znaczy, że idealny także dla czworonogów z wrażliwym żołądkiem. Karma Frens skomponowana została w oparciu o białko pochodzące z larw owadów. To sprawia, że proces produkcyjny jest bardziej etyczny i ekologiczny niż w przypadku karm mięsnych - oszczędza zwierzęta hodowlane i znaczące ilości wody. Karma produkowana i pakowana jest u naszych niemieckich sąsiadów według rygorystycznych standardów, z wyłącznie naturalnych i atestowanych składników.')
                .setColor('#DD9ECD')
                msg.channel.send(embed)
            }
        }
    }
    
})
