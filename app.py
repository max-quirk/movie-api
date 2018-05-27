from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

movies = []

fight_club = {'Name': 'Fight Club',
              'Description': 'Amazing Movie',
              'Genre': 'Drama',
              'ReleaseDate': '11 November 1999',
              'Director': 'David Fincher',
              'RunningTime': '2h 31m',
              'StarRating': '5',
              'Image': '/static/images/fight_club.jpg'
              }

dumb_and_dumber = {'Name': 'Dumb and Dumber',
                   'Description': 'Funniest movie ever',
                   'Genre': 'Comedy',
                   'ReleaseDate': '11 November 1999',
                   'Director': 'Peter Farrelly',
                   'RunningTime': '1h 46m',
                   'StarRating': '4.5',
                   'Image': '/static/images/dumb_and_dumber.jpg'
                   }

movies.append(fight_club)
movies.append(dumb_and_dumber)


@app.route('/api/movies', methods=['GET'])
def getAll():
    return jsonify(movies)


@app.route('/', methods=['GET'])
def render():
    return render_template('index.html')


@app.route('/api/movies', methods=['POST'])
def addOne():
    movie = {'Name': request.json['name'],
             'Description': request.json['description'],
             'Genre': request.json['genre'],
             'ReleaseDate': request.json['release date'],
             'Director': request.json['director'],
             'RunningTime': request.json['running time'],
             'StarRating': request.json['star rating']
             }

    movies.append(movie)
    return jsonify(movies)


if __name__ == '__main__':
    app.run(debug=True)
