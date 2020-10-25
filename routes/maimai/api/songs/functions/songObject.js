import { JPDatabase, ENDatabase, VideoDatabase } from '../../../../../database/index.js';
export default function (title) {
    //Image url (JP Version): https://maimai.sega.jp/storage/DX_jacket/<image>.jpg
    //Image url (EN Version): https://maimai.sega.com/storage/DX_jacket/<image>.jpg
    let song_jp, song_en, return_value;
    JPDatabase.forEach(item => {
        if (item.title === title) {
            song_jp = item;
            song_jp.jacket = 'https://maimai.sega.jp/storage/DX_jacket/'+song_jp.image_url;
            delete song_jp.image_url;
        }
    });
    ENDatabase.forEach(item => {
        if (item.title === title) {
            song_en = item;
            song_en.jacket = 'https://maimai.sega.com/storage/DX_jacket/'+song_en.image_url;
            delete song_en.image_url;
        }
    });
    let video;
    VideoDatabase.videos.forEach(item => {
        if (item.song_id === parseInt(song_jp.id)) {
            video = item;
            delete video.song_id;
        }
    });
    return_value = {
        jp: song_jp,
        en: song_en,
        has_en: song_en ? true : false,
        video: video
    }
    return return_value;
}