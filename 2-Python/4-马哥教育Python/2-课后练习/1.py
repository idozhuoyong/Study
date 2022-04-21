# 九九乘法表

# 方式一
# for i in range(1, 10):
#     for j in range(1, i+1):
#         print("{}*{}={:<2}".format(j, i, i*j), end=" ")
#     print()

# 方式二
# for i in range(1, 10):
#     for j in range(1, i+1):
#         print("{}*{}={:<2}".format(j, i, i*j), end='\n' if i == j else ' ')

# 扩展题
for i in range(1, 10):
    for j in range(1, 10):
        if i <= j:
            print("{}*{}={:<2}".format(i, j, i*j), end='\n' if j == 9 else ' ')
        else:
            print("    {:<2}".format(' ', ' ', ' '), end=' ')