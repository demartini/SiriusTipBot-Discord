const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  bot: {
    token: process.env.BOT_TOKEN,
    prefix: process.env.BOT_PREFIX,
    debug: process.env.BOT_DEBUG
  },
  siriusd: {
    port: process.env.RPC_PORT,
    user: process.env.RPC_USER,
    pass: process.env.RPC_PASS
  },
  botspamchannel: process.env.BOT_SPAMCHANNEL
}
