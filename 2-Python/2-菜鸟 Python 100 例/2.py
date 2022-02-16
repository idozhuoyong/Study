"""
题目：企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，从键盘输入当月利润I，求应发放奖金总数？
"""

while True:
    tips = "请输入当月利润，输入'q'结束\n"
    input_text = input(tips)
    if input_text == 'q':
        break
    
    # 方式一
    i = float(input_text)
    print('方式一，当月利润：' + str(i))
    bonus = 0 # 奖金
    
    # 高于100万时，可提成1%
    if i > 1000000:
        bonus = bonus + (i - 1000000)*0.01
    
    # 60万到100万之间时，可提成1.5%
    if i > 600000:
        if i > 1000000:
            bonus = bonus + (1000000 - 600000)*0.015
        else:
            bonus = bonus + (i - 600000)*0.015

    # 40万到60万之间时，可提成3%
    if i > 400000:
        if i > 600000:
            bonus = bonus + (600000 - 400000)*0.03
        else:
            bonus = bonus + (i - 400000)*0.03

    # 20万到40万之间时，可提成5%
    if i > 200000:
        if i > 400000:
            bonus = bonus + (400000 - 200000)*0.05
        else:
            bonus = bonus + (i - 200000)*0.05

    # 10万到20万之间时，可提成7.5%
    if i > 100000:
        if i > 200000:
            bonus = bonus + (200000 - 100000)*0.075
        else:
            bonus = bonus + (i - 100000)*0.075

    # 利润(I)低于或等于10万元时，奖金可提10%
    if i > 100000:
        bonus = bonus + 100000*0.1
    else:
        bonus = bonus + i*0.1
    
    print('方式一，应发放奖金总数为：' + str(bonus))


    # 方式二
    arr = [1000000, 600000, 400000, 200000, 100000, 0]
    rat = [0.01, 0.015, 0.03, 0.05, 0.075, 0.1]
    i = float(input_text)
    print('方式二，当月利润：' + str(i))
    bonus = 0 # 奖金
    for idx in range(0, 6):
        if i > arr[idx]:
            bonus = bonus + (i - arr[idx]) * rat[idx]
            # print((i - arr[idx]) * rat[idx])
            i = arr[idx]
    print('方式二，应发放奖金总数为：' + str(bonus))