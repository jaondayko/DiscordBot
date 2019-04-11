const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');
const request = require('request');



class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Bot joins the channel and adds the song'
        });
    }
 
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("I am in!");
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