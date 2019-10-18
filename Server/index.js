const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

app.listen(4000, () => {
	console.log('Server Works !!! At port 4000');
});

app.get('/downloadmp3', (req,res) => {
	var url = req.query.url;
	res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
	ytdl(url, {
		format: 'mp3',
		filter: 'audioonly'
	}).pipe(res);
});

app.get('/downloadmp4', (req,res) => {
	var url = req.query.url;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(url, {
		format: 'mp4'
	}).pipe(res);
});