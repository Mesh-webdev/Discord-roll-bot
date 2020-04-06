const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
  if (message.content === '/roll') {
    let rolled = Math.floor(Math.random() * Math.floor(100));

    if (rolled < 10) {
      message.channel.send(
        message.author.username + ' Rolled:' + '\n [' + '00' + rolled + ']'
      );
    }

    if (rolled >= 10 && rolled < 100) {
      message.channel.send(
        message.author.username + ' Rolled:' + '\n [' + '0' + rolled + ']'
      );
    }

    if (rolled === 100) {
      message.channel.send(
        message.author.username + ' Rolled:' + '\n [' + rolled + ']'
      );
    }
  }

  if (message.content === '/reset') resetBot(message.channel);
});

function resetBot(channel) {
  channel
    .send('Resetting...')
    .then((msg) => client.destroy())
    .then(() => client.login('your token here'))
    .then(() => client.user.setActivity('/roll from 0 to 100'))
    .then(channel.send('Done!'));
}

client.once('ready', () => {
  client.user.setActivity('/roll from 0 to 100');
  console.log('Ready!');
});

client.login('your token here');
