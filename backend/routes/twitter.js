// const express = require('express')
// const Twitter = require('twit');
// const cors = require('cors')

// users.use(cors())

// const client = new Twitter({
//     consumer_key: 'CONSUMER_KEY',
//     consumer_secret: 'CONSUMER_SECRET',
//     access_token: 'ACCESS_TOKEN',
//     access_token_secret: 'ACCESS_TOKEN_SECRET'
//   });


// app.get('/home_timeline', (req, res) => {
//     const params = { tweet_mode: 'extended', count: 10 };
   
//     client
//       .get(`statuses/home_timeline`, params)
//       .then(timeline => {
         
//         res.send(timeline);
//       })
//       .catch(error => {
//       res.send(error);
//     });
      
// });


// app.get('/mentions_timeline', (req, res) => {
//     const params = { tweet_mode: 'extended', count: 10 };
   
//     client
//       .get(`statuses/mentions_timeline`, params)
//       .then(timeline => {
       
//         res.send(timeline);
//       })
//       .catch(error => {
//       res.send(error);
//     });
      
// });


// app.post('/post_tweet', (req, res) => {
 
//     tweet = req.body;
     
//       client
//         .post(`statuses/update`, tweet)
//         .then(tweeting => {
//           console.log(tweeting);
           
//           res.send(tweeting);
//         })
   
//        .catch(error => {
//         res.send(error);
//       });
         
      
//   });


