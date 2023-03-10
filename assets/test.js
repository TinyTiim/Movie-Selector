var movieApiUrl = "http://www.omdbapi.com/";
var movieApiKey = "e830d49f";
const searchTerm = "action";
const type = "movie";
const url = `${movieApiUrl}?apikey=${movieApiKey}&s=${searchTerm}&type=${type}`;
var counter = 0;

fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i <= 6; i++) {
      // Inside for loop set counter ++
      var randomMovie =
        data.Search[Math.floor(Math.random() * data.Search.length)];
      var movieId = randomMovie.imdbID;

      // Get the title and plot of the random movie
      fetch(
        `${movieApiUrl}/?apikey=${movieApiKey}&i=${movieId}&plot=short`
      ).then(function (response) {
        var movieTitle = response.Title;
        var moviePlot = response.Plot;

        var plotElements = document.getElementById("#plot" + i);
        var titleElements = document.getElementById("#title" + i);
        titleElements.textContent = movieTitle;
        plotElements.textContent = moviePlot;
        plotElements.setAttribute("id", "plot");
      });
    }
  })
  .catch(function (error) {
    console.error(error);
  });
