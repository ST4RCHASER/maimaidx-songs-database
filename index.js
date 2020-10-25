import cors from 'cors';
import express from 'express';
import { maimai } from './routes/index.js';
const server = express();
server.use(cors());
server.use('/maimai', maimai);
server.get('/', async (_, res) => {
    return res.status(200).json({
        success: true,
        code: 201,
        message: 'Welcome!',
        github: 'https://github.com/ST4RCHASER/maimai-songs-database'
    })
});
server.all('*', (req, res) => {
    return res.status(405).json({
        success: false,
        code: 404,
        message: "route '/" + req.url.split('/').slice(-1).pop() + "' not found"
    });
})
server.listen(80, () => {
    console.log('Server listen at port 80')
});

export default server;