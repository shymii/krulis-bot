const Discord = require('discord.js');

module.exports = {
    name: 'help',
    execute(message, args){
        let embed = new Discord.MessageEmbed()
        .setColor('#DD9ECD')
        .setTitle('Hej, jestem kruliś. Widzę, że potrzebujesz pomocy. Poniżej możesz zobaczyć jakie mam funkcje.')
        .addFields(
            {name: '!banan :banana:', value: 'po wpisaniu tej komendy pokaże ci super krulika'},
            {name: '!frens :nauseated_face:', value: 'zerzygam sie'},
            {name: '!help :question:', value: 'no pomoc i wogule'}
        )
        .setTimestamp()
        message.channel.send(embed)
    },
}