const Discord = require('discord.js');

module.exports = {
    name: 'frens',
    execute(message, args){
        let embed = new Discord.MessageEmbed()
                .setDescription('Frens to suchy pokarm do rozsądnego karmienia piesków. Jest hipoalergiczny, bezglutenowy i bezzbożowy, to znaczy, że idealny także dla czworonogów z wrażliwym żołądkiem. Karma Frens skomponowana została w oparciu o białko pochodzące z larw owadów. To sprawia, że proces produkcyjny jest bardziej etyczny i ekologiczny niż w przypadku karm mięsnych - oszczędza zwierzęta hodowlane i znaczące ilości wody. Karma produkowana i pakowana jest u naszych niemieckich sąsiadów według rygorystycznych standardów, z wyłącznie naturalnych i atestowanych składników.')
                .setColor('#DD9ECD')
                message.channel.send(embed)
    },
}