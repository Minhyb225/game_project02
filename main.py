import mysql.connector
connection = mysql.connector.connect(
         host='127.0.0.1',
         port= 3306,
         database='flight_game',
         user='root',
         password='********',
         autocommit=True
         )

# Now the screen name needs to be received somehow.
# For purposes of this example we use default screen name:
screen_name = "Heini"

# to fetch the previous co2_consumed from sql:
sql = "SELECT co2_consumed FROM game WHERE screen_name='" + screen_name + "';"
cursor = connection.cursor()
cursor.execute(sql)
result_2 = cursor.fetchall()
result_2 = str(result_2)
result_2 = result_2[2:-3]
result_2 = int(result_2)

# In the beginning Heini has consumed 2000 c02, and she is located in Helsinki.
# The latest travelled distance is received/assumed somehow. For now let's assume that:
latest_distance = 400

def carbon(co):
    if co < 550:
        co += co + co * 0.1
        return co
    else:
        co += co + 50
        return co

latest_carbon = carbon(latest_distance)
co2_consumed = result_2 + latest_carbon
co2_consumed = str(co2_consumed)
print(co2_consumed)

# after calculating co2 the result is updated to sql:
sql = "UPDATE game SET co2_consumed ='" + co2_consumed + "' WHERE screen_name ='" + screen_name + "';"
cursor = connection.cursor()
cursor.execute(sql)



"""
# Calculating the distance using the geopy library:

import geopy
from geopy import distance
global distance
def Distance(icao1, icao2):
    sql = "SELECT latitude_deg FROM airport WHERE ident='" + icao1 + "'"
    cursor = connection.cursor()
    cursor.execute(sql)
    lat1 = cursor.fetchone()
    sql = "SELECT longitude_deg FROM airport WHERE ident='" + icao1 + "'"
    cursor = connection.cursor()
    cursor.execute(sql)
    long1 = cursor.fetchone()
    sql = "SELECT latitude_deg FROM airport WHERE ident='" + icao2 + "'"
    cursor = connection.cursor()
    cursor.execute(sql)
    lat2 = cursor.fetchone()
    sql = "SELECT longitude_deg FROM airport WHERE ident='" + icao2 + "'"
    cursor = connection.cursor()
    cursor.execute(sql)
    long2 = cursor.fetchone()

    lat1 = str(lat1)
    long1 = str(long1)
    lat2 = str(lat2)
    long2 = str(long2)

    lat1 = lat1[1:-2]
    long1 = long1[1:-2]
    lat2 = lat2[1:-2]
    long2 = long2[1:-2]

    lat1 = float(lat1)
    long1 = float(long1)
    lat2 = float(lat2)
    long2 = float(long2)

    distance = distance.distance((lat1, long1), (lat2, long2)).km
    distance = int(distance)
    print(f"Distance between places is {distance} km.")
"""