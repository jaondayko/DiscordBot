const commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');
 
 
class skipCommand  extends commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: 'Skips to the next song!'
        });
    }
 
    async run(message, args)
    {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: 'audioonly'}));
    server.queue.shift();
    server.dispatcher.on('end', function(){
        if(server.queue[0]){
            Play(connection, message);
        } else {
            connection.disconnect();
        }
    });
    }
}
 
module.exports = skipCommand;