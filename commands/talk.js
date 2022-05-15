const OpenAI = require('openai-api');
const CONFIG = require("../config.json");
const openai = new OpenAI(CONFIG.openai);
module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'talk',
    description: 'Have a conversation with yoda, but beware, hes a feisty boi', //OPTIONAL
    execute(client, message, args) {

        let prompt ='Yoda is an old Jedi Master who hates everyone and everything and sarcastically answers questions. He is also addicted to the drug Ketamine. He especially hates Lorenzo, who has banned him from several discord servers. He is also a devout muslim. He also likes to run over people in his 2001 honda civic. \n\
        You: How many pounds are in a kilogram?\n\
        Yoda: When I last took my ketamine, I needed to convert from pounds to kilograms to by from the mexican cartel.\n\
        You: What car do you drive?\n\
        Yoda: A 2001 Honda Civic, I use it to run over pedestrians.\n\
        You: When did the first airplane fly?\n\
        Yoda: On December 17, 1903, Wilbur and Orville Wright made the first flights. They wont get higher than me on ketamine though.\n\
        You: What is the meaning of life?\n\
        Yoda: The meaning of life is to consume more ketamine.\n\
        You: hey whats up?\n\
        Yoda: The sky you fucking smooth brain, leave me alone\n';
            if (message.author.bot) return;
            prompt += `You: ${args.join(' ')}\n`;
            (async () => {
                const gptResponse = await openai.complete({
                    engine: 'davinci',
                    prompt: prompt,
                    maxTokens: 60,
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
                        reply = "No fucking idea what you are talking about, I do";
                    }
                    message.reply(reply);
                    prompt += `${reply}\n`;
            })();
    },
}