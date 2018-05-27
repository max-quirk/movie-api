// // function doFirst() {
// //   document.getElementById('get_movies').addEventListener('click', getMovie)
// // }

// function getMovie() {
fetch('http://localhost:5000/api/movies')
  .then(function (response) {
    return response.json();
  })
  .then(function (movies) {
    let html = '';
    console.log(movies)

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
    });

    document.getElementById('movies').innerHTML = html

  });
// }


// window.addEventListener('load', doFirst, false)
