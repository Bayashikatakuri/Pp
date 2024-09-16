//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "27747815326,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR051WEdPWFJDSUF2VmhOU1RIeDVoOXNCMnNXL3dZM0w5UkpTVHozTm9VQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVJ1REc5WlQrRUpHaU80dlJOQi95TDViaVRJT2Z5bUl0ejhiN0g3aFZBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQVpidFgwZUZsRkM2U2tUcnZodWxBc3NRTzhUQ09RVWwyNWlENzEvc0VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZXBrcmlWSG5kMWVYYTNNZnk0ZFpBeUFLTHRzaHNxNW5yNk9rRGtJZHlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCR2U1RENlWlZSTHJnSmRrV01IYy9wc0RDNFpIZ1ZuMWNzd3hMRWNwa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo3aGxhWGlYYUpBbjdmTjBHc2RhQkw4aGF5c1JwK2RSdy9LcFJYSFc0RW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhmWWtSRGtmTDdvOXR4QWlmUlg3SjBjUU1NMVpqcFdrM3JEeWl2NkVFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTVDYW9VRmpNbkgvaUJ3VWJlNUNtcVp4azJqWUx0b2M2dXJKMWp5eVhGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQTDJWRW5Jc2szTEkzNkR6a1puWEF2RjNhQ1VYaWEzQ3N1ZmdDc2VuSW8xZTRIV2Rxd0pMOUNoNnFvT0VZRWJmaEdjdjlrNEhpdzgrSGV0Q3J1d0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiIzeWJ3WjhxamNrNWZubVVLSGZPU2FIWmR6UkphV0tHYW41YWRxb3J2akdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRa25QWWxhN1JULUd2ZlhOU2R0Y2ZBIiwicGhvbmVJZCI6ImI0ODhiN2Y0LWZlNzUtNGMyYi1iYjgzLTM4MWZhN2JmZjYzMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNc1k3NE9INUZGNk9xa1lGeEVrSXZTRXhaZXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkJZQVA3OWltdGdIdEVEekwzb2c3Q0VsMGxVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQyRFpDN1ZMIiwibWUiOnsiaWQiOiIyMjg5NjM0MjQzNDo4NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjgJRPRyBDSEFNUOOAleG0hcm04bSAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV1A4UG9GRUpmYW9iY0dHQjBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBTzdmTUROSy8vREFPMk84VUxnaHZMK0Y1YndMVWhUdXE1N05LbzZvUVZRPSIsImFjY291bnRTaWduYXR1cmUiOiJ1NERGL2duQzZBcUl1SmlNY0Fac1Y4dWVndDF6NnBwM3NsUkVydGQ1UWpFNlVMeVNmNGRnWmpIRXdmTlViWWI2RXpBZXBYK290dFlsZ3NNOWFFR2pBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaVNUcU5YZ1dJWWp3R2l6STNGcHpkK3dpRGZJTk12blZQUmtPMUtYUG94R2FHRUw2ck1IdG5KazlaUFVSQ1pUZFhiVC9vb0oxZDd1YitVb1R1YVZnQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5NjM0MjQzNDo4NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRRHUzekF6U3Yvd3dEdGp2RkM0SWJ5L2hlVzhDMUlVN3F1ZXpTcU9xRUZVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NTA4MzI1fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ";",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
