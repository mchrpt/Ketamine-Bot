const { MessageEmbed, Presence} = require("discord.js");
module.exports = {
  emoji: "😸", //OPTIONAL
  name: "user",
  description: "Shows user related info!", //OPTIONAL
  async execute(client, message, args) {
    const guild = client.guilds.cache.get("539244614201245704");
    //CHECKING IF A USER HAS BEEN MENTIONED OR AN ID HAS BEEN PROVIDED
    if (!message.mentions.users.first() && !args[0])
      return message.channel.send(
        `\`❌\` **${message.author} - You need to \`mention\` a user of give me their \`user id\`**`
      );

    //FETCHING THE USER IF AN ONLY ID HAS BEEN PROVIDED
    let user;
    let game;
    let activity;
    if (args[0] && !message.mentions.users.first()) {
      user = await client.users
        .fetch(args[0])
        .catch((error) => client.error(error, message.channel));
      if (!user) return;
    } else if (message.mentions.users.first())
      user = message.mentions.users.first();

    let fetchedMembers = await guild.members.fetch({withPresences: true});
      // Now you have a collection with all online member objects in the totalOnline variable
    fetchedMembers.forEach(member => {
        if (member.id === args[0]) {
          activity = member.presence?.activities.find(activity => activity.type === 'PLAYING');
        }
    });

    if(typeof activity == 'undefined' || typeof activity === 'undefined'){
      activity = 'None';
      game = 'None';
    }else{
      game = activity.name;
    }

    //FORMAT user.createdAt DATE
    var dd = user.createdAt.getDate();
    var mm = user.createdAt.getMonth() + 1;
    var yyyy = user.createdAt.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    var createdAt = dd + "/" + mm + "/" + yyyy;
    const user_embed = new MessageEmbed()
      .setTitle(`${user.tag}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }) || null)
      .setColor("DARK_GREEN")
      .setDescription(
        `\`🤖\` \`Bot\` **- \`${
          user.bot ? "✔️" : "❌"
        }\`**\n\`📆\` \`Created\` **- \`${createdAt}\`**\n\n\`🔧\` \`ID\` **- \`${
          user.id
        }\` **- \n\`🎮\` \`Game\` ** - \`${game}\` **- `
      )
      .setFooter("UwU");
    return message.channel.send({ embeds: [user_embed] });

    //HERE'S EVERYTHING THE USER OBJECT GIVES YOU:
    //https://discord.com/developers/docs/resources/user
  },
};
