const Discord = require('discord.js');

const frens = [
    {content: 'Frens to suchy pokarm do rozsądnego karmienia piesków. Jest hipoalergiczny, bezglutenowy i bezzbożowy, to znaczy, że idealny także dla czworonogów z wrażliwym żołądkiem. Karma Frens skomponowana została w oparciu o białko pochodzące z larw owadów. To sprawia, że proces produkcyjny jest bardziej etyczny i ekologiczny niż w przypadku karm mięsnych - oszczędza zwierzęta hodowlane i znaczące ilości wody. Karma produkowana i pakowana jest u naszych niemieckich sąsiadów według rygorystycznych standardów, z wyłącznie naturalnych i atestowanych składników.', photo: null, pName: null},
    {content: 'Frens to suchy pokarm do rozsądnego karmienia piesków. Jest hipoalergiczny, bezglutenowy i bezzbożowy, to znaczy, że idealny także dla czworonogów z wrażliwym żołądkiem. Karma Frens skomponowana została w oparciu o białko pochodzące z larw owadów. To sprawia, że proces produkcyjny jest bardziej etyczny i ekologiczny niż w przypadku karm mięsnych - oszczędza zwierzęta hodowlane i znaczące ilości wody. Karma produkowana i pakowana jest u naszych niemieckich sąsiadów według rygorystycznych standardów, z wyłącznie naturalnych i atestowanych składników.', photo: './imgaes/frens.gif', pName: 'frens.gif'},
    {content: '', photo: './imgaes/frens_piona.png', pName: 'frens_piona.png'},
]

let lastFrens = null;
const losujFrens = function(){
    let frensLos = frens[Math.floor(Math.random() * frens.length)];
    if(frensLos == lastFrens){
        return losujFrens();
    } else {
        lastFrens = frensLos;
        return frensLos;
    }
}

const dajFrens = () => {
    let fren = losujFrens();
    let embed = new Discord.MessageEmbed()
            .setDescription(fren.content)
            .setColor('#DD9ECD');
    if(fren.photo){
        embed.attachFiles([fren.photo]).setImage(`attachment://${fren.pName}`)
    }
    return embed;
}

module.exports = {
    name: 'frens',
    execute(message, args){
        message.channel.send(dajFrens())
    },
}