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
