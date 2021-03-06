const Discord = require('discord.js');

let lastBanan = null;
let banany = [
    {content: 'nom opierdolilem se banana i co się wkurzasz??', photo: './images/filip_banan.jpg', pName: 'filip_banan.jpg'},
    {content: 'DAWAJ KURWA BANANA', photo: './images/filip_krzyk.jpg', pName: 'filip_krzyk.jpg'},
    {content: 'ale bym se opierdolil banana', photo: './images/filip_ale_by_se_dal_banan.jpg', pName: 'filip_ale_by_se_dal_banan.jpg'},
    {content: 'gdzie ten banan?????????', photo: './images/filip_gdzie_banan.jpg', pName: 'filip_gdzie_banan.jpg'},
    {content: 'hi, im looking for banana, do u hav som?', photo: './images/filip_szuka_banan.jpg', pName: 'filip_szuka_banan.jpg'},
    {content: 'czy ktoś powiedział b a n a n??', photo: './images/filip_czy_ktos_banan.jpg', pName: 'filip_czy_ktos_banan.jpg'},
    {content: 'na zakupy typu bananowe', photo: './images/filip_zakupy.jpg', pName: 'filip_zakupy.jpg'},
    {content: 'we mi zamów jakiegoś banana ten', photo: './images/filip_we_zamow.jpg', pName: 'filip_we_zamow.jpg'}
];

const losujBanan = function(){
    let bananLos = banany[Math.floor(Math.random() * banany.length)];
    if(bananLos == lastBanan){
        return losujBanan();
    } else {
        lastBanan = bananLos;
        return bananLos;
    }
};

module.exports = {
    name: 'banan',
    execute(message, args){
        let resp = losujBanan();
        let embed = new Discord.MessageEmbed()
                .setTitle(resp.content)
                .setColor('#DD9ECD')
                .attachFiles([resp.photo])
                .setImage(`attachment://${resp.pName}`)
        message.channel.send(embed);
    },
};