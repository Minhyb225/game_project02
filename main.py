
# for example if:
result_2 = 350
def Carbon(km_latest):
    if km_latest < 550:
        co = km_latest
        co += (co + co * 0.1) * 2
        return co
    else:
        co = km_latest
        co += (co + 50) * 2
        return co
# here we call this function:
co2_consumed = Carbon(result_2)
print(co2_consumed)


