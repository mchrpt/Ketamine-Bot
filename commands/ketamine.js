module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'ketamine',
    description: 'Ketamine I need. Battery acid I will consume', //OPTIONAL
    execute(client, message, args) {
      
        if(!args.length) return message.channel.send("[Verse 1] \n\nCrush my cock with a rock I must. \n\nMaximum pain I must endure. \n\nOk, here we go. \n\n[Chorus] \n\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        message.channel.send(`${args.join(' ')}`)

    },
}