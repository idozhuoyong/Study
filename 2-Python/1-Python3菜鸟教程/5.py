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


# def change(la):
#     print('a1: ', la)
#     la[2] = 10
#     print('a2: ',la)

# la = [1, 2, 3, 4]
# print('b1: ', la)
# change(la)
# print('b2: ', la)

# def printinfo(name, age=18):
#     print("name: ", name)
#     print("age: ", age)
# printinfo('小红')

# def printinfo(a1, a2, *vartuple):
#     print(a1)
#     print(a2)
#     print(vartuple)
# printinfo(1, 2, 3, 4, 5)

# def printinfo(a1, a2, **vardict):
#     print(a1)
#     print(a2)
#     print(vardict)
# printinfo(1, 2, a=3, b=4, c=5)

# a = 10
# def f1():
#     print(a)
# f1()

# 匿名函数
sum = lambda a, b : a + b
print(sum(10, 20))