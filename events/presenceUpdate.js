module.exports = (client, oldPresence, newPresence) => {
    let activity = newPresence.activities?.find(activity => activity.type === 'PLAYING');
    let game;
    let member;
    if(!(typeof activity == 'undefined' || typeof activity === 'undefined')){
        game = activity.name
        member = newPresence.member
        if(game == "League of Legends" || game == "Brawlhalla"){
            client.channels.cache.get('544572769971732505').send(member.displayName + " is playing " + game + ", THEY MUST BE PUNISHED!");
            member.timeout(60000, 'You dare to play ' + game + ' in MY CHRISTIAN SERVER!!!! Smh')
                .then(console.log)
                .catch(console.error);
        }
    }
}
