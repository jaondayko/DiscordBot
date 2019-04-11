const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'Insert Key Here'

const path = require('path');
const sqlite = require('sqlite');



bot.registry.registerGroup('music', 'Music')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(path.join(__dirname + '/commands'));

global.currentTeamMembers = [];
global.servers = {};

bot.on('ready',function(){
    console.log("Bot Started!")
});

bot.on('message', function(message){
    if(message.content == "Is the bot working")
    {
        message.channel.send("Yes I am currently working I think");
    }
    if(message.content == "BOT STUCK")
    {
        message.channel.send("oh shit oh fuck");
    }

});

bot.login(TOKEN);
