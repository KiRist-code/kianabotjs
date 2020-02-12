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
    
    if (message.content.startsWith('k.ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
        
    if (message.content.startsWith('k.kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
  
    
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-and-goodbye');
    if(!channel) return;
    channel.send('Welcome to the server!');
});


//login
acces_token = process.env["TOKEN"]
bot.login(acces_token);
