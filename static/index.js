(function () {

  const API_BASE_URL = 'http://localhost:5000'

  /**
   * Render a given movie list as HTML
   * @param {Array} movies list of movies to render
   */
  function renderMovieList(movies) {
    let html = '';

    movies.forEach(function (movie) {
      html += `
          <li>
            <img src="${movie.Image}">
            <h1>${movie.Name}</h1>
            <h4>Description: ${movie.Description}</h4>
            <h4>Release Date: ${movie.ReleaseDate}</h4>
            <h4>Director: ${movie.Director}</h4>
            <h4>Runtime: ${movie.RunningTime}</h4>
            <h4>Rating: ${movie.StarRating}/5</h4>
          </li>
      `
    })
    document.getElementById('movies').innerHTML = html
  }

  /**
   * Get movie list 
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
})();


// // function doFirst() {
// //   document.getElementById('get_movies').addEventListener('click', getMovie)
// // }

// function getMovie() {

// }


// window.addEventListener('load', doFirst, false)
