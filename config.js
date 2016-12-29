module.exports = {

  // Your bot name. Typically, this is your bot's username without the discriminator.
  // i.e: if your bot's username is MemeBot#0420, then this option would be MemeBot.
  name: "Legion",

  // The bot's command prefix. The bot will recognize as command any message that begins with it.
  // i.e: "-legion foo" will trigger the command "foo",
  //      whereas "Legion foo" will do nothing at all.
  prefix:  "#",

  // Your bot's user token. If you don't know what that is, go here:
  // https://discordapp.com/developers/applications/me
  // Then create a new application and grab your token.
  token: "MjYzODQ1NDcwNDA3NzUzNzI5.C0X8wQ.pqdQebPT_vh14iNi296S5KE7Jds",

  // If this option is enabled, the bot will delete the message that triggered it, and its own
  // response, after the specified amount of time has passed.
  // Enable this if you don't want your channel to be flooded with bot messages.
  // ATTENTION! In order for this to work, you need to give your bot the following permission:
  // MANAGE_MESSAGES - 	0x00002000
  // More info: https://discordapp.com/developers/docs/topics/permissions
  deleteAfterReply: {
    enabled: true,
    time: 2000, // In milliseconds
  }
};