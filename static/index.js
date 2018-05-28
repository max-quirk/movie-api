(function () {

  const API_BASE_URL = 'http://localhost:5000'

  const addMovieBtn = document.getElementById('addMovie');
  const modal = document.getElementById('simpleModal');
  const modalBtn = document.getElementById('modalBtn');
  const closeBtn = document.getElementsByClassName('closeBtn')[0];
  const submitBtn = document.getElementById('submit_movie');

  addMovieBtn.addEventListener('submit', addMovie);
  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outsideClick);
  submitBtn.addEventListener('click', closeModal);

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
            <h4>Description:&nbsp</h4> <p>${movie.Description}</p>
            <h4>Director:&nbsp</h4> <p>${movie.Director}</p>
            <h4>Release Date:&nbsp</h4> <p>${movie.ReleaseDate}</p>
            <h4>Runtime:&nbsp</h4> <p>${movie.RunningTime}</p>
            <h4>Rating:&nbsp</h4> <p>${movie.StarRating}/5</p>
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
      .then(function (data) {
        console.log(data)
        renderMovieList(data.data)
      });
  }

  /**
   * Handle add movie form submission and perform API POST request
   * @param {ev} e 
   */
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
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        getMovieList()
      });

  }

  /**
   * Function to open modal
   */
  function openModal() {
    modal.style.display = 'block';
  }

  /**
   * Function to close modal
   */
  function closeModal() {
    modal.style.display = 'none';
  }

  /**
   * Function to open modal if click outside modal
   */
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }

  window.addEventListener("load", getMovieList())
})();

