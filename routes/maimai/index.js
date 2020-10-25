import express from 'express';
import { songs } from './api/index.js';
import schedule from 'node-schedule'
import updater from '../../functions/update.js'

const router = express.Router();
router.use('/songs', songs);
router.get('/', async (_, res) => {
    return res.status(200).json({
        success: true,
        code: 201,
        message: 'Welcome!',
        github: 'https://github.com/ST4RCHASER/maimai-songs-database'
    })
});
updater();
//Auto update database every midnight
schedule.scheduleJob('0 0 * * *', () => {
    updater();
});

export default router;