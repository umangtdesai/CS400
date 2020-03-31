const express = require('express');
const router = express.Router();
const pugDisplay = require('pug')
// /const display = pugDisplay.compileFile('../views/ps4Pug.pug');
const request = require('../node_modules/requests');

router.route('/')

    .get(function (req, res, next) {
            // API key for Musixmatch -- to get song lyrics
            const key = '738ccb4368c53ac30338df0bf1e32807';
            // Ed Sheeran song
            const artist = 'Ed Sheeran'
            const songName = 'Cold Coffee';
            const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=cold%20coffee&q_artist=ed%20sheeran&apikey=738ccb4368c53ac30338df0bf1e32807`;


           // res.render('ps4Pug', {songLine: 'hello'});

            // this doesn't work
            request(url, function(err, response, bodytext)  {
                if (err) {
                    console.log('An error occured', err);
                    res.render('ps4Pug', { songLine: 'ERROR IN CALL' });
                }
                else {
                    console.log('in else case');
                    let result = JSON.parse(bodytext);
                    // Is this correct?
                    const lyrics = result.body.lyrics.lyrics_body;
                    // extract the lyrics and pug render
                    res.render('ps4Pug', { songLine: lyrics});
                    console.log(lyrics);

                }
            }
            );
        }
        );

module.exports = router;

