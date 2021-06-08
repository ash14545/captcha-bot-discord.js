module.exports = {
    maintenance: false,
    category: "",
    name: "helloWorld",
    aliases: [],
    description: "Hello world!",
    usage: "",
    cooldown: -1,
    clientPermissions: ['SEND_MESSAGES'],
    userPermissions: [],
    args: false,
    async execute(client, message, args) {
        message.channel.send('Hello world!!');
    }
};
