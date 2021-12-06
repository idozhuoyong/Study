"""
题目：输入某年某月某日，判断这一天是这一年的第几天？
"""

year = int(input('year:\n'))
month = int(input('month:\n'))
day = int(input('day:\n'))

days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if month < 1 and month > 12:
    print('月份输入有误')
else:
    sum = 0
    # 月份天数相加
    for idx in range(0, month-1):
        sum += days[idx]
    # 当月天数
    sum += day
    # 闰年（能被400整除 或者 能被4整除但是不能被100整除）处理
    if ((year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)):
        sum += 1

    print('it is the ' + str(sum) + 'th day.')
