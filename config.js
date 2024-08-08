//watson code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5FampZRkZhaUUvT0dBWWF2NVF6WGpmMUtzZTVUa1JHbUZhWDI4RHcxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTBnZWtGRWwyc3ZhQzlqbUpGbHhxYll5VUpNMzVYcXBWT3lEd2ZqY29Cbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR3VoY3krRVdFSHl5a3JBZEVuRGE3a2pVY1pURkNCd2xma21udGhqWkVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTHZYbnFlaElVZUFSbEVhV0JLV05jTWd2M2pNNkV2ZlQ5MU44WUFaeXpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBbEFyRGtKcm9JZkxURExWc1JBWmN4RDF3Nk5sRHo3ZXZBbWZFaVJaRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV1WWhHRHh0eGhEby9paWkwT01mNy82MGpRNlZXdVBEaFpLM2NCaFBMeEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdsOG0yeG9meVZTd2lGbVNGbFl5MHIxcEtBcTZ4VWVYZUVGbUF2dmcxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1JkL012SW95eEJvQXd0bXViODZJYmY5UFlSTnlRSDVRUjlOam9xRFRTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGalc0eHRmUExXWWw3M2doSUphYjB2TU90TlhLbmtLM1JFQUl6N2FIbjlXOWNUb0pSRlAxV2V0a0lFUGY0eEl6MkUvNTZCOFFkRVZHSko1c1Z4dERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJmdVgxOUI2cnc2OXRSWElGY2g1MG8rYlhKbXlKV2F3aGJjbEE4M3lQR1lvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4MTMzMDc0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRDM1QjMwMTZCRkJERENEMjk2NEI2OEEwRUU3OTAwRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTM0NzE3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiRVI2QUdRNVMzQ0F4Q3pTVU5UVXJnIiwicGhvbmVJZCI6IjQ1OGZmZDk0LWI5OTUtNDYxNS1iYWMwLWQ1ODFkZTFkODIwMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmL0Y2TmNtVjJiZFpkYVIxNmZxUWk0WUpGNDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0crTldpaW5mVit4NEZ0R1lJdkNyN0xONzAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFCRVNSODlDIiwibWUiOnsiaWQiOiIyNjM3ODEzMzA3NDU6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm5UdkdBUTUrWFR0UVlZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOTRjd2lVdStHait4WDBpdXViV2VzV0MrZ0lSTVNSSGtMSG9xQ2VwV2VEaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWWVHNFNEZnlCdmJPM2VsQnZOa0ZQc2VXbzFtVEpONU5kZGZSck1yN3l5bGF3U0dyODAxYXBCUVVZTWY4dGU0TVg2TUZYQ1FGQnZ4MS9rZDhudzA3Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjVYandaa1RiWEhKZm0wQ2o3WjRkLzRGOHJ1THp0cVJBWHNuSklVSHd4ZmhtNExGRTRoZ281aXhodmRNLy9haDNtbk9zQVY2YmY5cTE5YzI5bGhrQURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzgxMzMwNzQ1OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmVITUlsTHZoby9zVjlJcnJtMW5yRmd2b0NFVEVrUjVDeDZLZ25xVm5nNSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzEzNDcxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLejIifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "263789622747";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/GhMPXS09/IMG-20240706-WA0126.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/NfTgXrKh/IMG-20240808-WA0006.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`WATSON-MD`",
  author: process.env.PACK_AUTHER || "WATSON-MD",
  packname: process.env.PACK_NAME || "Watsonxd",
  botname: process.env.BOT_NAME || "WATSON-MD",
  ownername: process.env.OWNER_NAME || "Watsonxd",
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
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Watson-xd/WATSON-MD-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajjzuB9sBI890YffB1b";
global.website = process.env.GURL || "https://chat.whatsapp.com/E0a2bl9wHYlCHuL35WBR88";
global.devs = "263789622747";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
