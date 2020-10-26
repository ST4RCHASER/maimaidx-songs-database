import cors from 'cors';
import express from 'express';
import { maimai } from './routes/index.js';
const server = express();
const PORT = process.env.PORT || 80;
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
server.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running on " + PORT, "color: green");
});

export default server;