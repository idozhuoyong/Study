# 九九乘法表

# 方式一
# for i in range(1, 10):
#     for j in range(1, i+1):
#         print("{}*{}={:<2}".format(j, i, i*j), end=" ")
#     print()

# 方式二
for i in range(1, 10):
    for j in range(1, i+1):
        print("{}*{}={:<2}".format(j, i, i*j), end='\n' if i == j else ' ')