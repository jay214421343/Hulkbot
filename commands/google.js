module.exports.run = (bot, message, args, discord) => {
  var google = require('google')

google.resultsPerPage = 25
var nextCounter = 0

google(args[0], function (err, res) {
  if (err) console.error(err)

  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    let e = new discord.RichEmbed()
    .setTitle("Hulkbot Google")
    .setDescription(link.title + "-" + link.href)
    .addField(link.description)
    .setThumbnail(bot.avatarURL)
    .setColor('RANDOM')
    message.channel.send({ e })
  }

  if (nextCounter < 4) {
    nextCounter += 1
    if (res.next) res.next()
  }
})
}

module.exports.help = {
  name: "search"
}