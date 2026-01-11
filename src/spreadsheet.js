import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const credentials = require("../credenciales.json");

// let googleId = "1Zj21cKMiFy1DmQz_Y0Tbv04igR8ODbM1FBNC5kdTWaY";
let googleId = "1b0QrnAKfuWII1RIiQt8on04v2hrw00Km2n1uCMZhVgc";

export async function getGoogleSheet() {
    const serviceAccountAuth = new JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(googleId, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[5];
    const rows = await sheet.getRows();

    console.log(rows);
    return sheet;
}

getGoogleSheet();