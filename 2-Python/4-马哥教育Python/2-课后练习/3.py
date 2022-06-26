# 求10万内的所有素数
import imp


n = 100000
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
# for i in range(2, n):
#     for j in range(2, i):
#         if i % j == 0:
#             break
#     else:
#         print(i)
#         count += 1
# print('count = {}'.format(count))

# 方式三
# import datetime
# start = datetime.datetime.now()
# for i in range(2, n):
#     for j in range(2, int(i ** 0.5) + 1):
#         if i % j == 0:
#             break
#     else:
#         print(i)
#         count += 1
# delta = (datetime.datetime.now() - start).total_seconds()
# print('count = {}, delta = {}'.format(count, delta))

# import datetime
# start = datetime.datetime.now()
# for i in range(3, n, 2):
#     for j in range(3, int(i ** 0.5) + 1, 2):
#         if i % j == 0:
#             break
#     else:
#         print(i)
#         count += 1
# delta = (datetime.datetime.now() - start).total_seconds()
# print('count = {}, delta = {}'.format(count, delta))


# import datetime

# n = 100000
# start = datetime.datetime.now()
# count = 2
# primenumbers = [3]
# for x in range(5, n+1, 2):
#     flag = False
#     edge = int(x ** 0.5)
#     for i in primenumbers:
#         if i > edge: # 是质数
#             flag = True
#             break
#         if x % i == 0: # 是合数
#             flag = False
#             break
#     if flag:
#         count += 1
#         primenumbers.append(x)
# delta = (datetime.datetime.now() - start).total_seconds()
# print(count, delta)
# print('-' * 30)


import datetime

n = 100
for x in (6, n+1, 6):
    pass
