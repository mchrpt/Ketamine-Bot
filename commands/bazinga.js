module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'bazinga',
    description: 'B A Z I N G A', //OPTIONAL
    execute(client, message, args) {
        
        if(!args.length) return message.channel.send("Bazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga\nBazinga");
        message.channel.send(`${args.join(' ')}`)

    },
}