const { client } = require("../index");

client.on("ready", async () => {
    console.log(
        `✔ ${client.user.username} has successfully started ✔\nCurrent prefix is: ${prefix}`
    );
});
