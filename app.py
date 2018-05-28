from flask import Flask, jsonify, request, render_template
from movies import *

app = Flask(__name__)


@app.route('/api/movies', methods=['GET'])
def getAll():
    """Returns list of movie dictionaries
    Returns:
        movies [list]: List of dictionaries with details of movies
    """
    return jsonify(sortMovies(movies))


@app.route('/', methods=['GET'])
def render():
    """Returns rendered HTML file"""
    return render_template('index.html')


@app.route('/api/movies', methods=['POST'])
def addOne():
    """Adds a movie dictionary to the movies list
    Returns:
        movies [list]: List of movie dictionaries
    """
    movie = {'Name': request.json['name'],
             'Description': request.json['description'],
             'Genre': request.json['genre'],
             'ReleaseDate': request.json['releaseDate'],
             'Director': request.json['director'],
             'RunningTime': request.json['runningTime'],
             'StarRating': request.json['starRating'],
             'Image': request.json['image']
             }

    movies.append(movie)

    return jsonify(movies)


def sortMovies(movies):
    """Sort movies alphabetically based on their name
    Parametres:
        movies (list): List of movie dictionaries
    
    Returns:
        movies (list): Sorted list of movie dictionaries
    """
    return sorted(movies, key=lambda k: k['Name'])

if __name__ == '__main__':
    app.run(debug=True)


