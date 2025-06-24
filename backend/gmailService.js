import fs from "fs";
import path from "path";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

const CREDENTIALS_PATH = path.join("credentials.json");
const TOKEN_PATH = path.join("token.json");

export const authenticateGmail = async () => {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.installed;

  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  }

  // If no token, generate auth URL
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  console.log("Authorize this app by visiting this URL:", authUrl);
  // After user authorizes, paste code here manually or automate this step
};
export const sendThankYouEmail = async (auth, toEmail, name) => {
  const gmail = google.gmail({ version: "v1", auth });

  const rawMessage = [
    `To: ${toEmail}`,
    "Subject: Thank you for contacting me!",
    "Content-Type: text/plain; charset=utf-8",
    "",
    `Hi ${name},\n\nThanks for reaching out! I’ll get back to you shortly.\n\nBest,\nYour Name`,
  ].join("\n");

  const encodedMessage = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage,
    },
  });
};
