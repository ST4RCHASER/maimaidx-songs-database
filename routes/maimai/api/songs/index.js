import express from 'express';
import songObject from './functions/songObject.js';
import songFinder from './functions/songFinder.js';
import { JPDatabase, ENDatabase } from '../../../../database/index.js';
const router = express.Router();
router.get('/', (req, res) => {
    let songs = [];
    const category = req.query.category;
    const artist = req.query.artist;
    const title = req.query.title;
    const title_kana = req.query.title_kana;
    songFinder(title,title_kana,artist,category).forEach(item => {
        songs.push(songObject(item.title));
    });
    return res.status(200).json({
        success: true,
        code: 201,
        message: 'Songs obtained',
        jp_total: JPDatabase.length,
        en_total: ENDatabase.length,
        data: songs
    });
});
router.all('/', (_, res) => {
    return res.status(405).json({
        success: false,
        code: 404,
        message: "invalid method"
    });
});
export default router;