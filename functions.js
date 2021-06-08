const fs = require("fs");
const path = require("path");

module.exports = client => {
    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return;
        jsfiles.forEach((f, i) => {
            require(`./handlers/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
        });
    });

    function walk(dir, callback) {
        fs.readdir(dir, function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                var filepath = path.join(dir, file);
                fs.stat(filepath, function (err, stats) {
                    if (stats.isDirectory()) {
                        walk(filepath, callback);
                    } else if (stats.isFile() && file.endsWith(".js")) {
                        let props = require(`./${filepath}`);
                        client.commands.set(props.name, props);
                        props.aliases.forEach(alias => {
                            client.aliases.set(alias, props.name);
                        });
                    }
                });
            });
        });
    }
    walk(`./commands/`);
};
