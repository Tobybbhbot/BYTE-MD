
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xzem1hYUN0ckR0bHA4Uk82TzByOW9HK2hLbmJBQWliNUhzazVidHRHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk85TDBuaExXS1NsU29XemdUNGI0RjZBTXJmWXlHeEhmQlU0WEk5dDhDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSHdXZlZHZG15Nk81WlRyVm8zOXRxNW4xYzhPbnRUWnlqVjh1ekNmWEdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQlFvZHhTS3BqRS83eDlzUmEzV3ZZR0dpMVFUci9maGVQajNaMjBnSmlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDMWhYWUYwR3haalJMalU5U1hpblk5MFlYaVhFL3FaQklQbXRDdU1SbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1sME95KzZ5d2FxVGd0Zkg0Z1lsb2hXQjR4Y0g2YjB1UHQvd2FNSXMyVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtEdXE4ZklnVnB2TXhVaXBOemdidm91cGgzZFhNVkhBR2N1OHF5NTRtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBXUWF1elRGWERZckpFdlNtQkRtQWZoMXphRG5sdC8wQUdXdEMyZTMwaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild3N250bmUzYk1vK1hkZUFVVHF4QS9NdkphUll0MHBwS250ZkV0VExmSVpreWxRNk9qQVJhUDEvOGN5WUV2SmFoVVp4UHFYcUF5djdoQlJqS2c1SWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IjZBaFhXVXkxU0lyQnpVak9MQXdVTnZqaFJTTzUxRWxaZGlBZ1pwSGVqUE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjQ5MDIwNjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkMwRjNCRTgyRjRFQ0Y4MUY4NDhBRDFDQTk4MTA5MDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQ0NTQ3NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidUFjZ1JpUzVSR2lVZU9Kc1pwMTNBdyIsInBob25lSWQiOiJkODAwNzk4OC04MWI5LTQ4ZGItYTUwYy02YzViMTI2YTJkYTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGg5bjlMdzNOc2pCYTFWUkxuUUllamkvMm40PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitsY3oxbXhFSzJFVkQ0bGUxaWxYTHhpQy9pTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKNVA0SllGVCIsIm1lIjp7ImlkIjoiOTQ3MjQ5MDIwNjE6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCLXG7wnZCOXG7wnZCKXG7wnZCUXG5cbvCdkJZcbvCdkIdcbvCdkIhcbvCdkJNcbvCdkIRcblxu8J2Qg1xu8J2QhFxu8J2QlVxu8J2QiFxu8J2Qi1xuXG5cbi48VEhFIEVORD4uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTDZxNW9GRU5MWTdMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjMmt5bVJlb0VSOE5uSXc2R2t5dktkRG92Y1llTFVvZDBpNXdpVGFTNmp3PSIsImFjY291bnRTaWduYXR1cmUiOiI4KzlhcDUyOElGazhPQWdiUWVNdGg3VXpsc3V1d05WRm5Dbko2anY4L2t5czNJR1h2Zk92a1VuVGZnS1ZhaFFqRTRPMWczbFNVNDA4dVRxVEw4Ym5CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQTB4Vkw3Z3g1d25UdW1uNzlJYWdMY01ydytxa0tkNjJPMll0cVFaWGo1b1RlVm03ZERvQXUvdFZ4MWNFQUlzZmFFVWNsZ0IxNTV2elRtcFo2V3hyaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNDkwMjA2MToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhOcE1wa1hxQkVmRFp5TU9ocE1yeW5RNkwzR0hpMUtIZEl1Y0lrMmt1bzgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0NDU0NzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTS9kIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
