# 打印菱形

# rows = 7
# temp = rows//2 + 1
# # 打印上三角形
# for i in range(1, temp+1):
#     # 打印空格
#     print((temp-i)*' ', end='')
#     # 打印*
#     print((i*2-1)*"*")
# # 打印下三角形
# for i in range(temp-1, 0, -1):
#     # 打印空格
#     print((temp-i)*' ', end='')
#     # 打印*
#     print((i*2-1)*"*")

# rows = 7
# for i in range(1, 5):
#     print("{:^7}".format((2*i-1)*"*"))



# 打印对顶三角形
# n = 7
# e = n // 2
# for i in range(-e, n-e):
#     print('{:^{}}'.format('*'*(2*abs(i)+1), n))

# n = 7
# e = n // 2
# for i in range(-e, n-e):
#     print('{}{}'.format(' '*(e-abs(i)), '*'*(2*abs(i)+1)))

# 打印闪电
# n = 15
# e = n // 2
# x = n-e
# for i in range(-e, x):
#     if i < 0:
#         print(-i*' ' + (x+i) * '*')
#     elif i > 0:
#         print(e*' ' + (x-i) * '*')
#     else:
#         print('*' * n)


# 斐波拉契数列
a = 0
b = 1
index = 1
print('fib({}) = {}'.format(0, a))
print('fib({}) = {}'.format(1, b))

while True:
    c = a + b
    index += 1
    if c > 100:
        break
    print('fib({}) = {}'.format(index, c))
    a = b
    b = c