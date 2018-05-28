(function () {

  const API_BASE_URL = 'http://localhost:5000'
  //document.getElementById('submit_movie').addEventListener('click', getNewMovie())
  document.getElementById('addMovie').addEventListener('submit', addMovie)
  /**
   * Render a given movie list as HTML
   * @param {Array} movies list of movies to render
   */
  function renderMovieList(movies) {
    let html = '';

    movies.forEach(function (movie) {
      html += `
          <div class="single-movie">
          <img class="movie-image" src="${movie.Image}">
          <div class="movie-details">
            <h1>${movie.Name}</h1>
            <h4>Description: ${movie.Description}</h4>
            <h4>Director: ${movie.Director}</h4>
            <h4>Release Date: ${movie.ReleaseDate}</h4>
            <h4>Runtime: ${movie.RunningTime}</h4>
            <h4>Rating: ${movie.StarRating}/5</h4>
          </div>
      </div>
      `
    })
    document.getElementById('movies').innerHTML = html
  }

  /**
   * Get movie list from API
   */
  function getMovieList() {
    fetch(`${API_BASE_URL}/api/movies`)
      .then(function (response) {
        return response.json();
      })
      .then(function (movies) {
        renderMovieList(movies)
      });
  }


  function addMovie(e) {
    e.preventDefault();
    let name = document.getElementById("Name").value;
    let description = document.getElementById("Description").value;
    let genre = document.getElementById("Genre").value;
    let releasedate = document.getElementById("ReleaseDate").value;
    let director = document.getElementById("Director").value;
    let runningtime = document.getElementById("RunningTime").value;
    let starrating = document.getElementById("StarRating").value;
    let image = document.getElementById("Image").value;

    fetch(`${API_BASE_URL}/api/movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'description': description,
        'genre': genre,
        'releaseDate': releasedate,
        'director': director,
        'runningTime': runningtime,
        'starRating': starrating,
        'image': image
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

    getMovieList()
  }

  window.addEventListener("load", getMovieList())
})();

