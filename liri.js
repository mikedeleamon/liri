//liri.js

var fs = require("fs");
var omdb = require('omdb');
var twitter = require('twitter');
var spotifyWebApi = require('spotify-web-api-node');


var command= process.argv[2];

var desire = process.argv;


var comArray = [];


// Here we create a for-loop that starts with **3** so we skip the path and node command from the command line.
// We will use this for loop to build an array of numbers.
for (var i=3; i<desire.length; i++){

	// We then "push" (add) each of these numbers to our numArray.
	// We need to convert these numbers to "floats" (numbers with decimals) otherwise, node will treat our input as strings.
	comArray.push(desire[i]));

}


// Then we print the original numbers
console.log(numArray);


switch(command){

	case "my-tweets":
		showTweet(desire);
		break;
	case "spotify-this-song":
		spotifySong(desire);
		break;
	case "movie-this":
		showMovie(desire);
		break;
	case "do-what-it-says";
		break;

}

function showTweet(desire){
	//display recent 20 tweets

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});
 
// You can also get the stream in a callback if you prefer. 
client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});

}

function spotifySong(desire){
	//show the song
	spotifyApi.searchTracks('artist:' + desire)
  .then(function(data) {
    console.log('Search tracks by' + desire +" in the artist name", data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  });

}

function showMovie(desire){
	//display movie info

omdb.search(desire, function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
        console.log('%s (%d)', movie.title, movie.year);
    });


}

