'''
斐波拉契数列
'''
# a, b = 0, 1
# while b < 1000:
#     print(b, end=', ')
#     a, b = b, a+b
# print()

# for i in range(5, 9):
#     print(i)


def change(la):
    print('a1: ', la)
    la[2] = 10
    print('a2: ',la)

la = [1, 2, 3, 4]
print('b1: ', la)
change(la)
print('b2: ', la)