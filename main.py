from flask import Flask, request    # this is needed for the HTTP server
from flask_cors import CORS         # this is needed if you want JavaScript access
import mysql.connector              # this is needed if you need SQL database
from geopy import distance
import requests
import json
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

db_connection = mysql.connector.connect(
    host='127.0.0.1',
    port=3306,
    database='flight_game',
    user='root',
    password='Nu151200',
    autocommit=True
)

def fetch_airport_names_by_icao_code(icao):
    sql  = "SELECT latitude_deg,longitude_deg FROM airport"
    sql += " WHERE ident='" + icao + "'"
    db_cursor = db_connection.cursor()
    db_cursor.execute(sql)
    query_result = db_cursor.fetchall()
    for row in query_result:        # get only the first match
        return row[1], row[2]

    return "", ""
@app.route('/airportdistance/<a>/<b>')
def calculate_distance_between_airports(a,b):
#    args = request.args
#   a = fetch_airport_names_by_icao_code(args.get("start"))
#    b = fetch_airport_names_by_icao_code(args.get("end"))

    mycursor = db_connection.cursor()
    mycursor.execute(f"select latitude_deg, longitude_deg from airport where ident = '{a}' or ident = '{b}';")
    listDeg = []
    for x in mycursor:
        listDeg.append(x)
    d = distance.distance(listDeg[0], listDeg[1]).km
    return {"dist": d
    }


@app.route('/<cityId>')
def weather(cityId):
    complete_api_link = f"https://api.openweathermap.org/data/2.5/weather?id={cityId}&appid=daf7a8ec18540e7c2412006de1036a97"
    api_link = requests.get(complete_api_link).json()
    return json.dumps(api_link)

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5001)