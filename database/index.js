import fs from 'fs';
let jp_db_file = fs.readFileSync('./database/json/jp.json');
let en_db_file = fs.readFileSync('./database/json/en.json');
let video_db_file = fs.readFileSync('./database/json/video.json');
let JPDatabase = JSON.parse(jp_db_file);
let ENDatabase = JSON.parse(en_db_file);
let VideoDatabase = JSON.parse(video_db_file);
export {JPDatabase,ENDatabase,VideoDatabase};