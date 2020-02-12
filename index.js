const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

bot.on('message', (message)=>{
    if(!message.guild) return;

    //variables
    var sender = message.author;
    var msg = message.content.toUpperCase();

    //ping-pong commands
    if(msg === 'ping'){
        message.reply('pong')//send pong
    }

    if(msg === 'k.clear'){
        message.reply('how many do you want to delete?');
        message.delete(message.content.toUpperCase());
        message.channel.send('message cleared!');
    }

    if(msg === 'k.join'){
        if(message.member.voiceChannel){
            message.member.voiceChannel.join().then(connection =>{
                message.reply('successfully connected to the Channel!');
            })
            .catch(console.log)
        }else {
            message.reply('You need to join a voice channel first!!!');
        }
    }

    if(msg === 'k.help') {
        const embed = new RichEmbed()
            .setTitle('Show commands')
            .setColor(0xFF0000)
    }
    
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-and-goodbye');
    if(!channel) return;
    channel.send('Welcome to ${server}, ${member}')
})


//login
acces_token = process.env["TOKEN"]
bot.login(acces_token);
