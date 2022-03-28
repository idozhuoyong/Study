# 给你两个正整数a,b,  输出它们公约数的个数
a = 24
b = 36

temp = min(a, b)
count = 0
for i in range(a, 0, -1):
    if a % i == 0 and b % i == 0:
        count += 1
print(count)