const stayonscreen = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
  
  BEM VINDO AO BOT DO ÁRABE
  ▒▒▒░░░░░░░░░░▄▐░░░░
▒░░░░░░▄▄▄░░▄██▄░░░
░░░░░░▐▀█▀▌░░░░▀█▄░
░░░░░░▐█▄█▌░░░░░░▀█▄
░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀
░░░░░▄▄▄██▀▀▀▀░░░░░
░░░░█▀▄▄▄█░▀▀░░░░░░
░░░░▌░▄▄▄▐▌▀▀▀░░░░░
░▄░▐░░░▄▄░█░▀▀░░░░░
░▀█▌░░░▄░▀█▀░▀░░░░░
░░░░░░░░▄▄▐▌▄▄░░░░░
░░░░░░░░▀███▀█░▄░░░
░░░░░░░▐▌▀▄▀▄▀▐▄░░░
░░░░░░░▐▀░░░░░░▐▌░░
░░░░░░░█░░░░░░░░█░░

◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MENU*
  │
  └─ ❏ ${prefix}afk`
}
exports.stayonscreen = stayonscreen
