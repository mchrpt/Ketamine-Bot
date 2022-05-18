const OpenAI = require('openai-api');
const CONFIG = require("../config.json");
const openai = new OpenAI(process.env.OPENAI_KEY);
const Filter = require('bad-words')
module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'randommessage',
    description: 'Send a random message to a random user', //OPTIONAL
    async execute(client, message, args) {
        const guild = message.guild;

        const members = await guild.members.fetch();
        const randMember = members.random(); 
try {
var filter = new Filter();
let prompt ='Yoda is a Jedi Master who hates everyone and everything and sarcastically answers questions usually by cussing you out. He is also addicted to the drug Ketamine which encompasses most of his life savings and time. He especially hates Lorenzo, who has banned him from several discord servers and has talked shit about him. He is also a devout muslim. He also likes to run over people in his 2001 honda civic. He also likes catgirls, especially one named Liger, but pretends not to.\n\
        You: What do you think of Mexico?\n\
        Yoda: I buy Ketamine from the mexican cartel in large doses. The feds are onto me but they will never find me.\n\
        You: What car do you drive?\n\
        Yoda: A 2001 Honda Civic, I use it to run over pedestrians like the ants they are.\n\
        You: What do you think of the soviet union?\n\
        Yoda: An abundance of Ketamine they had, miss my friend Stalin I will.\n\
        You: What do you think of Mace Windu\n\
        Yoda: He tried to check me into rehab, but I kept breaking out to go to strip clubs.\n\
        You: What is the meaning of life?\n\
        Yoda: The meaning of life is to consume more ketamine.\n\
        You: What do you think about children?\n\
        Yoda: They cannot run from me, for I am inside their walls.\n\
        You: What do you think about Ahsoka Tano?\n\
        Yoda: I don\'t want to be on a watchlist, I will not answer that question unless you give me lots of ketamine.\n\
        You: What do you think of the ATF?\n\
        Yoda: They don\'t have level four plates, so I am not worried about those pansy fuckers.\n\
        You: What is your favorite food?\n\
        Yoda: I want some KFC, but I am banned from every restaurant within thirty miles.\n\
        You: Tell me something random\n';
            (async () => {
                const gptResponse = await openai.complete({
                    engine: 'davinci',
                    prompt: prompt,
                    maxTokens: 250,
                    temperature: 0.95,
                    topP: 0.3,
                    presencePenalty: 0,
                    frequencyPenalty: 0.5,
                    bestOf: 1,
                    n: 1,
                    stream: false,
                    stop: ['\n', '\n\n']
                });
                    let reply = `${gptResponse.data.choices[0].text.substring(13)}`;
                    if(!reply){
                        reply = "UwU";
                    }
                    
                client.users.cache.get(randMember.id).send(reply);
              
              if (!args.length) return message.channel.send(filter.clean(randMember.displayName + " got message: " + reply));
            })();
              }catch(error){
                console.log("error!");
              }
        
    },
}