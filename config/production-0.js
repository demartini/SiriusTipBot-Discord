const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  bot: {
    token: process.env.BOT_TOKEN,
    prefix: process.env.BOT_PREFIX,
    debug: process.env.BOT_DEBUG
  },
  siriusd: {
    host: process.env.RPC_HOST,
    port: process.env.RPC_PORT,
    username: process.env.RPC_USER,
    password: process.env.RPC_PASS
  },
  botspamchannel: process.env.BOT_SPAMCHANNEL
}
