var title = document.querySelector("#title1")
var plot = document.querySelector("#plot1")


var movieApiUrl = 'http://www.omdbapi.com';

var movieApiKey = 'e830d49f';


const searchTerm = 'action';
const type = 'movie';
const page = '100';

const url = `http://www.omdbapi.com/?apikey=${movieApiKey}&s=${searchTerm}&type=${type}&page=80&plot=full`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)];
    var movieId = randomMovie.imdbID;

    // Get the title and plot of the random movie
    return fetch(url);
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    title = data.Title;
    plot = data.Plot;

    // Populate the HTML code with the title and plot
    
    for (var i = 0; i < title.length; i++) {
        title[i].textContent = title;
    }

    
    for (var i = 0; i < plot.length; i++) {
        plot[i].textContent = moviePlot;
        plot[i].setAttribute('id', 'plot');
    }
  })
  .catch(function(error) {
    console.error(error);
  });

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.Search);
  })
  .catch(error => {
    console.log(error);
  });



var giphyApiUrl = 'https://api.giphy.com/v1/gifs';
var giphyApiKey = 'PFNgMPROG1VflMj5EkACFURISlFAli0D';
