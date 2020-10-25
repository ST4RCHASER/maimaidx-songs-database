import { JPDatabase, ENDatabase } from '../../../../../database/index.js';
import _ from 'underscore';
export default function(title,title_kana,artist,category,){
    let find_cat;
    switch (category) {
        case 'chunithm':
            find_cat = 'オンゲキCHUNITHM';
            break;
        case 'ongeki':
            find_cat = 'オンゲキCHUNITHM';
            break;
        case 'touhou':
            find_cat = '東方Project';
            break;
        case 'touhou_project':
            find_cat = '東方Project';
            break;
        case 'pop':
            find_cat = 'POPSアニメ';
            break;
        case 'anime':
            find_cat = 'POPSアニメ';
            break;
        case 'niconico':
            find_cat = 'niconicoボーカロイド';
            break;
        case 'vocaloid':
            find_cat = 'niconicoボーカロイド';
            break;
        case 'game':
            find_cat = 'ゲームバラエティ';
            break;
        case 'variety':
            find_cat = 'ゲームバラエティ';
            break;
        default:
            find_cat = category;
    }
    let filter = {};
    if (title) filter.title = title;
    if (artist) filter.artist = artist;
    if (category) filter.catcode = find_cat;
    if (title_kana) filter.title_kana = title_kana;
    let return_value = _.where(JPDatabase,filter);
    return return_value;
}