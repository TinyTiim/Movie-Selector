var movieApiUrl = "http://www.omdbapi.com/";
var movieApiKey = "e830d49f";


const searchInput = document.getElementById("search");

// Add event listener for key press on search input
searchInput.addEventListener("keyup", function(event) {
  // Check if enter key is pressed (keyCode 13)
  if (event.keyCode === 13) {
    // Call your function here
    searchMovies(event);
    
  }
});

function searchMovies() {
  const searchTerm = searchInput.value;
  console.log("you have entered " + searchTerm);
  
  const apiUrl = `${movieApiUrl}?apikey=${movieApiKey}&s=${searchTerm}&plot=full`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the movie information from the response
      const movieTitle = data.Search[0].Title;
      const moviePlot = data.Search[0].Plot;

      // Display the movie information on the page
      const titleElement = document.getElementById("title-src");
      titleElement.textContent = movieTitle;

      const plotElement = document.getElementById("plot-src");
      plotElement.textContent = moviePlot;

      
    })
    .catch(error => console.error(error));
}