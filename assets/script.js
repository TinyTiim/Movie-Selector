var movieApiUrl = "http://www.omdbapi.com/";
var movieApiKey = "e830d49f";
const searchTerm = "action";
const type = "movie";
const url = `${movieApiUrl}?apikey=${movieApiKey}&s=${searchTerm}&type=${type}`;
// Wrap whole fetch call that takes in url and a random number.
function getMovie(num) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Wrap all below code with for loop 6 times
      console.log(data);
      var randomMovie = data.Search[num];
      var movieId = randomMovie.imdbID;

      // Get the title and plot of the random movie
      return fetch(
        `${movieApiUrl}/?apikey=${movieApiKey}&i=${movieId}&plot=short`
      );
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var movieTitle = data.Title;
      var moviePlot = data.Plot;

      var titleElement = document.getElementById("title" + num);

      titleElement.textContent = movieTitle;

      var plotElement = document.getElementById("plot" + num);

      plotElement.textContent = moviePlot;
      plotElement.setAttribute("id", "plot");
    })
    .catch(function (error) {
      console.error(error);
    });
}

getMovie(1);
getMovie(2);
getMovie(3);
getMovie(4);
getMovie(5);
getMovie(6);
