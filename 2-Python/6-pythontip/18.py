# 题目描述：
# 我们经常遇到的问题是给你两个数，要你求最大公约数和最小公倍数。今天我们反其道而行之，给你两个数a和b，计算出它们分别是哪两个数的最大公约数和最小公倍数。输出这两个数，小的在前，大的在后，以空格隔开。若有多组解，输出它们之和最小的那组。注：所给数据都有解，不用考虑无解的情况。
# 例如：a=3, b = 60
# 则输出：12 15

a = 3
b = 60

resultArr = []
for i in range(a, b+1, 1):
    for j in range(i, b+1, 1):
        # 计算i和j的最大公约数
        m = -1
        for x in range(i, 0, -1):
            if i % x == 0 and j % x == 0:
                m = x
                break
        if m != a:
            continue
        # 计算i和j的最小公倍数
        n = -1
        for x in range(j, b+1):
            if x % i == 0 and x % j == 0:
                n = x
                break
        if n == b:
            resultArr.append((i, j))

sums = []
for item in resultArr:
    sums.append(item[0]+item[1])
result = resultArr[sums.index(min(sums))]
print(result[0], result[1])