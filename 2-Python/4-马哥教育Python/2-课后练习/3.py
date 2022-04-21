# 求10万内的所有素数
n = 100
count = 0
# 方式一
# for i in range(2, n):
#     flag = True
#     for j in range(2, i):
#         if i % j == 0:
#             flag = False
#             break
#     if flag:
#         print(i)
#         count += 1
# print('count = {}'.format(count))

# 方式二
for i in range(2, n):
    for j in range(2, i):
        if i % j == 0:
            break
    else:
        print(i)
        count += 1
print('count = {}'.format(count))