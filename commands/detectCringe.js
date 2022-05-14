const fetch = require("node-fetch");
module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'detectcringe',
    description: 'CHRIS STOP PLAYING BRAWLHALLA', //OPTIONAL
    async execute(client, message, args) {
        const guild = client.guilds.cache.get("539244614201245704");
        message.channel.send("Is anyone playing cringe on this holy christian server?");
        let game;
        let activity;

        let fetchedMembers = await guild.members.fetch({withPresences: true});
        // Now you have a collection with all online member objects in the totalOnline variable
        let detectedCringe = false;
        fetchedMembers.forEach(member => {
            activity = member.presence?.activities.find(activity => activity.type === 'PLAYING');

            if (!(typeof activity == 'undefined' || typeof activity === 'undefined')) {
                game = activity.name;

                if (game == "League of Legends" || game == "Brawlhalla") {

                    member.timeout(60000, 'You dare to play ' + game + ' in MY CHRISTIAN SERVER!!!! Smh')
                        .then(console.log)
                        .catch(console.error);

                    detectedCringe = true;
                    if (!args.length) return message.channel.send(member.displayName + " is playing " + game + ", THEY MUST BE PUNISHED!");

                    message.channel.send(`${args.join(' ')}`);
                }


            }


        });

        if (!detectedCringe) {
            if (!args.length) return message.channel.send("No cringe detected...");
        }

    }
}