const express = require('express');
const redis = require('redis');
const app = express();

//Provide DNS name/IP address and port
const client = redis.createClient({
  host: 'my-redis-server',
  port: 6379
});

app.get('/', (req, res) => {

  //Read key from the database
  client.get('visitors', (err, visitors) => {

    //Convert the value into integer
    var currVisits = parseInt(visitors);

    //If visitors is not present in database then initilize 1
    if(isNaN(currVisits)) {
      currVisits = 1;
    }

    //Send the response back to the user
    res.send('You are visitor: ' + currVisits);

    //Increment and save the new value to the database
    client.set('visitors', currVisits + 1);
  });

});

app.listen(9999, () => {
  console.log('visitorsapp started on port 9999');
});
