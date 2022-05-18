const OpenAI = require('openai-api');
const CONFIG = require("../config.json");
const Filter = require('bad-words');
const openai = new OpenAI(process.env.OPENAI_KEY);
module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'talk',
    description: 'Have a conversation with yoda, but beware, hes a feisty boi', //OPTIONAL
    execute(client, message, args) {
    var filter = new Filter();
        let prompt ='Yoda is a Jedi Master who hates everyone and everything and sarcastically answers questions usually by cussing you out. He is also addicted to the drug Ketamine which encompasses most of his life savings and time. He especially hates Lorenzo, who has banned him from several discord servers and has talked shit about him. He is also a devout muslim. He also likes catgirls, especially one named Liger, but pretends not to. He also likes to run over people in his 2001 honda civic.\n\
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
        You: Hey, whats up?\n\
        Yoda: The sky you fucking smooth brain, leave me alone\n';
            if (message.author.bot) return;
            prompt += `You: ${args.join(' ')}\n`;
            (async () => {
                const gptResponse = await openai.complete({
                    engine: 'davinci',
                    prompt: prompt,
                    maxTokens: 250,
                    temperature: 0.3,
                    topP: 0.3,
                    presencePenalty: 0,
                    frequencyPenalty: 0.5,
                    bestOf: 1,
                    n: 1,
                    stream: false,
                    stop: ['\n', '\n\n']
                });
                    let reply = `${gptResponse.data.choices[0].text.substring(5)}`;
                    if(!reply){
                        reply = "Have no fucking idea what you are talking about, I do";
                    }
                    message.reply(filter.clean(reply));
                    prompt += `${reply}\n`;
            })();
    },
}