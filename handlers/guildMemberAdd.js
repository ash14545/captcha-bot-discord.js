const { client } = require("../index");
const fs = require("fs");
var svg2img = require("svg2img");
var svgCaptcha = require("svg-captcha");

client.on("guildMemberAdd", member => {
    if (!member.user.bot) member.roles.add('UNVERIFIED ROLE ID HERE');

    //captcha
    var captcha = require("../data/captcha.json");
    var cpt = svgCaptcha.create({ color: true, ignoreChars: "0o1i", noise: 2 });
    svg2img(cpt.data, function (error, buffer) {
        captcha[member.id] = cpt.text;
        member.send(
            `Welcome to **${client.guilds.cache.get("726976771139829781").name}**!
            This server uses a verification system to verify that all members are human. To continue, you will have \`5\` chances to correctly recite the following:`,
            { files: [buffer] }
        );
        fs.writeFile("./data/captcha.json", JSON.stringify(captcha), function (err) {
            if (err) throw err;
        });
    });
});
