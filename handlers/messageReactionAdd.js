const { client } = require("../index");

client.on("messageReactionAdd", async (reaction, member) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (member.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === 'channel id') {
        if (
            reaction.message.id === 'message id' &&
            reaction.emoji.id === 'emoji id'
        ) {
            await reaction.message.guild.members.cache
                .get(member.id)
                .roles.add('role id');
        }
    }
});
