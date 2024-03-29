var movieApiUrl = "http://www.omdbapi.com/";
var movieApiKey = "e830d49f";
var giphyApiUrl = "https://api.giphy.com/v1/gifs";
var giphyApiKey = "PFNgMPROG1VflMj5EkACFURISlFAli0D";
const searchTerm = "horror";
const romance = "romance";
const comedy = "comedy";
const action = "action";
const type = "movie";
const rating = "g";
const url = `${movieApiUrl}?apikey=${movieApiKey}&s=${searchTerm}&type=${type}&page=3`;
const url1 = `${movieApiUrl}?apikey=${movieApiKey}&s=${romance}&type=${type}`;
const url2 = `${movieApiUrl}?apikey=${movieApiKey}&s=${comedy}&type=${type}`;
const url3 = `${movieApiUrl}?apikey=${movieApiKey}&s=${action}&type=${type}`;
const url4 = `${giphyApiUrl}?apikey=${giphyApiKey}&type=gif&rating=${rating}`;

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
      var gifWidth = 100;
      var gifHeight = 100;

      return fetch(
        `${giphyApiUrl}/search?api_key=${giphyApiKey}&q=${encodeURIComponent(
          movieTitle
        )}&rating=${rating}&limit=1&width=${gifWidth}&height=${gifHeight}`
      );
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Get the GIF URL and display it

      var gifUrl = data.data[0].images.original.url;

      var gifElement = document.getElementById("poster" + num);
      gifElement.setAttribute("src", gifUrl);
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

function getRomance(num) {
  const romanceButton = document.getElementById("romance");
  romanceButton.addEventListener("click", function () {
    console.log("Romance button clicked!");
    fetch(url1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Wrap all below code with for loop 6 times
        console.log(data);
        var randomMovie = data.Search[num];
        var movieId = randomMovie.imdbID;

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
        var gifWidth = 100;
        var gifHeight = 100;
        return fetch(
          `${giphyApiUrl}/search?api_key=${giphyApiKey}&q=${encodeURIComponent(
            movieTitle
          )}&rating=${rating}&limit=1&width=${gifWidth}&height=${gifHeight}`
        );
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Get the GIF URL and display it

        var gifUrl = data.data[0].images.original.url;

        var gifElement = document.getElementById("poster" + num);
        gifElement.setAttribute("src", gifUrl);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

getRomance(1);
getRomance(2);
getRomance(3);
getRomance(4);
getRomance(5);
getRomance(6);

function getComedy(num) {
  const comedyButton = document.getElementById("comedy");
  comedyButton.addEventListener("click", function () {
    console.log("comedy button clicked!");
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Wrap all below code with for loop 6 times
        console.log(data);
        var randomMovie = data.Search[num];
        var movieId = randomMovie.imdbID;

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
        var gifWidth = 100;
        var gifHeight = 100;
        return fetch(
          `${giphyApiUrl}/search?api_key=${giphyApiKey}&q=${encodeURIComponent(
            movieTitle
          )}&rating=${rating}&limit=1&width=${gifWidth}&height=${gifHeight}`
        );
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Get the GIF URL and display it

        var gifUrl = data.data[0].images.original.url;

        var gifElement = document.getElementById("poster" + num);
        gifElement.setAttribute("src", gifUrl);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

getComedy(1);
getComedy(2);
getComedy(3);
getComedy(4);
getComedy(5);
getComedy(6);

function getAction(num) {
  const actionButton = document.getElementById("action");
  actionButton.addEventListener("click", function () {
    console.log("action button clicked!");
    fetch(url3)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Wrap all below code with for loop 6 times
        console.log(data);
        var randomMovie = data.Search[num];
        var movieId = randomMovie.imdbID;
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
        var gifWidth = 100;
        var gifHeight = 100;
        return fetch(
          `${giphyApiUrl}/search?api_key=${giphyApiKey}&q=${encodeURIComponent(
            movieTitle
          )}&rating=${rating}&limit=1&width=${gifWidth}&height=${gifHeight}`
        );
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Get the GIF URL and display it

        var gifUrl = data.data[0].images.original.url;

        var gifElement = document.getElementById("poster" + num);
        gifElement.setAttribute("src", gifUrl);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

getAction(1);
getAction(2);
getAction(3);
getAction(4);
getAction(5);
getAction(6);

const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    localStorage.setItem("searchTerm", searchInput.value);
    window.location = "./index2.html";
  }
});

window.onload = function () {
  // Get search term from local storage
  const searchTerm = localStorage.getItem("searchTerm");
  console.log("you have entered " + searchTerm);
};
