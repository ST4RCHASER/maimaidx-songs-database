import http from 'https'; 
import fs from 'fs'; 
let jp_db_path = './database/json/jp.json';
let en_db_path = './database/json/en.json';
export default function() {
    console.log("Starting update database...")
    try {
        fs.unlinkSync(en_db_path)
    } catch (err) {
        console.error("Error: unable to delete database (EN): " + err)
    }
    http.get("https://maimai.sega.jp/data/DXsongs.json", function (response) {
        if (response.statusCode === 200 || response.statusCode === 304) {
            try {
                fs.unlinkSync(jp_db_path)
            } catch (err) {}
            response.pipe(fs.createWriteStream(jp_db_path));
            console.log("JP database updated")
        }else {
            console.error("Error: unable to update database (JP): " + response.statusCode)
        }
    });
    http.get("https://maimai.sega.com/data/DXsongs.json", function (response) {
        if (response.statusCode === 200 || response.statusCode === 304) {
            try {
                fs.unlinkSync(en_db_path)
            } catch (err) {}
            response.pipe(fs.createWriteStream(en_db_path));
            console.log("EN database updated")
        }else {
            console.error("Error: unable to update database (EN): " + response.statusCode)
        }
    });
}
