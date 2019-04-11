const Commando = require('discord.js-commando');

class LeaveChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leaves the voice channel of person'
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("I'm not even in a FREAKING CHANNEL WHAT THE FRICK");
        }
    }
}

module.exports = LeaveChannelCommand;