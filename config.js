require('dotenv').config(); 
const fs = require('fs');
const path = require('path');

//ALL GLOBAL
global.owner = process.env.OWNER_NUMBER.split(','); 
global.channelChatId = process.env.CHANNEL_JID
global.botname = process.env.BOT_NAME
global.author = process.env.OWNER_NAME
global.packname = process.env.BOT_NAME
global.autoTyping = process.env.AUTO_TYPING
global.autoRecord = process.env.AUTO_RECORD
global.autoViewStatus = process.env.AUTO_VIEW_STATUS
global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.ANTICALL = process.env.ANTICALL === 'true';
global.antilink = process.env.ANTILINK
global.antilinkkick = process.env.ANTILINK_KICK
global.antilinkwarn = process.env.ANTILINK_WARN
global.antibot = process.env.ANTIBOT
global.autoStatusDownload = process.env.AUTOSTATUS_DL
global.autostatusreact = process.env.AUTOSTATUS_REACT
global.autolikeemoji = process.env.AUTO_LIKE_EMOJI
global.autobio = process.env.AUTO_BIO
global.welcome = process.env.WELCOME
global.unavailable = process.env.UNAVAILABLE
global.available = process.env.AVAILABLE
global.autoreadmessages = process.env.AUTO_READ_MESSAGES
global.chatbot = process.env.CHATBOT
global.autoreact = process.env.AUTO_REACT
global.prefix = process.env.PREFIX
global.commands = process.env.ALL_CMD
global.version = process.env.VERISION
global.sudoUsers = process.env.SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`);
//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url
//GLOBAL MESS
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};

//—————「 RUNNING 」—————//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});