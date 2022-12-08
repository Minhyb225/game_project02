# to fetch the previous co2_consumed from sql:
import mysql.connector
connection = mysql.connector.connect(
         host='127.0.0.1',
         port= 3306,
         database='flight_game',
         user='root',
         password='********',
         autocommit=True
         )
# where do I get the screen name from?
# The data can also be cleaned after each game, if needed.
# For purposes of this example:
screen_name = 'Ilkka'

sql = "SELECT co2_consumed FROM game WHERE screen_name=' + screen_name + ';"
cursor = connection.cursor()
cursor.execute(sql)
result_2 = cursor.fetchall()
print(f"{result_2}.")

def Carbon(km_latest):
    if km_latest < 550:
        co = km_latest
        co += (co + co * 0.1) * 10
        return co
    else:
        co = km_latest
        co += (co + 50) * 10
        return co
# here we call this function:
co2_consumed = Carbon(result_2)
print(co2_consumed)


# after calculating co2:
sql = "UPDATE game SET co2_consumed =' + co2_consumed + ' WHERE screen_name =' + screen_name + ';"
cursor = connection.cursor()
cursor.execute(sql)



import winsound
def Sound(file):
    if file == 1:
        choice = 'sounds/Choise1.wav'
        winsound.PlaySound(choice, winsound.SND_FILENAME)
    elif file == 2:
        bummer = 'sounds/Bummer.wav'
        winsound.PlaySound(bummer, winsound.SND_FILENAME)
    elif file == 3:
        progress = 'sounds/Progress1.wav'
        winsound.PlaySound(progress, winsound.SND_FILENAME)
    elif file == 4:
        loopy = 'sounds/Loopy tune.wav'
        winsound.PlaySound(loopy, winsound.SND_FILENAME)
Sound(1)
Sound(2)
Sound(3)
Sound(4)
