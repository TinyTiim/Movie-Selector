var movieApiUrl = "http://www.omdbapi.com/";
var movieApiKey = "e830d49f";
const rating ="g"
var giphyApiUrl = 'https://api.giphy.com/v1/gifs';
var giphyApiKey = 'PFNgMPROG1VflMj5EkACFURISlFAli0D';
const url4 = `${giphyApiUrl}?apikey=${giphyApiKey}&type=gif&rating=${rating}`;

const searchInput = document.getElementById("search");

window.onload = function () {
  // Get search term from local storage
  const searchTerm = localStorage.getItem("searchTerm");
  console.log("you have entered " + searchTerm);

  // If search term exists, set input value and call searchMovies()
  if (searchTerm) {
    searchInput.value = searchTerm;
    searchMovies();
  }
};

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
      var gifWidth = 100;
      var gifHeight = 100;
      return fetch(`${giphyApiUrl}/search?api_key=${giphyApiKey}&q=${encodeURIComponent(movieTitle)}&rating=${rating}&limit=1&width=${gifWidth}&height=${gifHeight}`);
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    // Get the GIF URL and display it
    
    var gifUrl = data.data[0].images.original.url;
    
    var gifElement = document.getElementById("img-src");
    gifElement.setAttribute("src", gifUrl);
    })
    .catch(function (error) {
    console.error(error);
    });
    }