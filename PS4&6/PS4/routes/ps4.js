const express = require('express');
const router = express.Router();
//const pugDisplay = require('pug')
const request = require('../node_modules/request');
const fs = require('fs');

router.route('/')

    .get(function (req, res, next) {
            // API key for Musixmatch -- to get song lyrics
            const key = '738ccb4368c53ac30338df0bf1e32807';
            const artist = 'Ed Sheeran'
            const songName = 'Cold Coffee'

            // make sure format = json and not jsonp
            const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=${songName}&q_artist=${artist}&apikey=${key}`;

            request(url, function(err, response, body)  {
                if (err) {
                    console.log('An error occured', err);
                    res.render('ps4Pug', { songLine: 'ERROR IN CALL' });
                }
                else {

                    //console.log('in else case');
                    const result = JSON.parse(body);


                    var jsonContent = JSON.stringify(result);
                    console.log(jsonContent);

                    fs.writeFile("output.json", body, 'utf8', function (err) {
                        if (err) {
                            console.log("An error occured while writing JSON Object to File.");
                            return console.log(err);
                        }

                        console.log("JSON file has been saved.");
                    });



                    const lyrics = result.message.body.lyrics.lyrics_body;
                    //console.log(lyrics);
                    // extract the lyrics and pug render
                    res.render('ps4Pug', { songLine: lyrics});
                }
            }
            );
        }
        );

module.exports = router;

