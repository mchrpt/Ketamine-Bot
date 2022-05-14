module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'randommessage',
    description: 'Send a random message to a random user', //OPTIONAL
    async execute(client, message, args) {
        const guild = client.guilds.cache.get("539244614201245704");

        const fetchedMembers = await guild.members.fetch({withPresences: true});
        // Now you have a collection with all online member objects in the totalOnline variable
        let randomElement = Array.from(fetchedMembers)[Math.floor(Math.random() * fetchedMembers.size)];
        console.log(randomElement.id);
        client.users.cache.get(randomElement.id).send('UwU rawr XD');

        if (!args.length) return message.channel.send(randomElement.displayName + "got a random message UwU");
    },
}