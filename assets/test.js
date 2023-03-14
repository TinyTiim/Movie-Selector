var movieApiUrl = "http://www.omdbapi.com/";
var movieApiKey = "e830d49f";

const searchInput = document.getElementById("search");

// Add event listener for key press on search input
searchInput.addEventListener("keyup", function (event) {
  // Check if enter key is pressed (keyCode 13)
  if (event.keyCode === 13) {
    // Call your function here
    // window.location = "./index2.html";
    searchMovies();
  }
});

function searchMovies() {
  var searchTerm = searchInput.value;
  //var movieId = searchInput.value;
  console.log("you have entered " + searchTerm);

 var apiUrl = `${movieApiUrl}?apikey=${movieApiKey}&t=${searchTerm}`;
  //var apiurl = `${movieApiUrl}?apikey=${movieApiKey}&s=$`
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract the movie information from the response
      var movieTitle = data.Title;
      var moviePlot = data.Plot;

      // Display the movie information on the page
      var titleElement = document.getElementById("title-src");
      titleElement.textContent = movieTitle;

      var plotElement = document.getElementById("plot-src");
      plotElement.textContent = moviePlot;
      console.log(moviePlot);
    })
}
