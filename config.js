const fs = require('fs');
const path = require('path');
const { color } = require('./nothing-ben/myfunc');

//OWNER OFF BOT
global.owner = '+93744215959'
//OWNER OFF BOT NUMBER
global.nomerowner = ["+93744215959"]
//CHANNEL JID
global.channelChatId = "0029Vasu3qP9RZAUkVkvSv32";
//WATERMARK BOT NAME AND STICKER
global.packname = process.env.OWNER;
global.author = '𝑩𝑬𝑵_𝑩𝑶𝑻'
//SOON
global.apilinode = '' // apikey vps account linode
global.apitokendo = ''
//SOON 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url
//SOON
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}
//RPG LIMIT
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//AUTO FUNCTIONER DONT CHANGE IT
global.antilink = false; //Global Auto Antilink
global.antilinkremove = false; //Global Auto Antilink Remove
global.antilinkwarn = false; //Global Auto Antilink warnings
global.antibot = false; //Global Auto Antibot
global.autoTyping = false; //Global auto typing
global.autoRecord = false; //Global auto recording
global.autoViewStatus = false; //Global Auto Statusview
global.autoStatusDownload = false; //Global Auto status download
global.autoviewreactstatus = true; //Global Auto Status react
global.autobio = false; //Global Auto bio
global.welcome = false; //Global Auto welcome in Group
global.unavailable = false; //Global Auto unavailable
global.available = false; //Global Auto available
global.autoreadmessages = false; //Global Auto Read
global.chatbot = false; //Global Auto chatbot
global.autoreact = false; //Global Auto react message
global.prefix = '.'; //Global Auto prefix
global.commands = "1000+"; //Global All commands
global.version = "V1"; //Global Auto version bot

//DONT CHANGE IT IS API KEY
global.api = {
    screenshotapi: 'd539a7b1cd55ebccba702c2a0f96eff9',
    fgmods: 'm2XBbNvz',
    screenshotapiv2: '054b4800d6664f8fb79e63e419b3c834',
    removebg: '829301093',
};

//—————「 DEADLINE 」—————//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});