# if it is anything like in the first version of the game:
# result_2 = result[2]
# ,but for now:
result_2 = 1000
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
