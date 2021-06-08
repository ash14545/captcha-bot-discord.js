const { Client, Collection } = require("discord.js");

module.exports = class extends Client {
  constructor(config) {
    super({
      disableMentions: "everyone",
      partials: ['MESSAGE', 'REACTION']
    });

    this.developer = {
      id: 'developer id'
    }

    this.commands = new Collection();

    this.aliases = new Collection();

    this.cooldowns = new Collection();

    this.config = config;
  }
};
