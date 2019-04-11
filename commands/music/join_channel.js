const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');
const request = require('request');
var queue = [];
 
function Play(connection, message)
{
    var server = servers[message.guild.id];
    console.log(server.queue[0]);
    if(server.queue[0].indexOf("youtube.com") > -1){
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
        server.dispatcher.setVolume(0.5);
    }
    server.queue.shift();
    server.dispatcher.on('end', function(){
        if(server.queue[0])
        {

            Play(connection,message);
            console.log("I am here");
        }
        else
        {
            console.log(server.queue[0]);
            console.log("I am over here");
            connection.disconnect();
        }
    });
 
}
 
class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'add',
            group: 'music',
            memberName: 'add',
            description: 'Bot joins the channel and adds the song'
        });
    }
 
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                servers[message.guild.id] = {queue: []};
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        server.queue.push(args);
                        message.reply("Now playing: " + args);
                        Play(connection, message);
                    })
            }
        }
        else
        {
            message.reply("You must be in a voice channel!");
        }
    }
}
 
module.exports = JoinChannelCommand;