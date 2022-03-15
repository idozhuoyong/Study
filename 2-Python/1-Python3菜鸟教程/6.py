# f = open('./tmp/foo.txt', "w")
# f.write("Python 是一个非常好的语言。\n是的，的确非常好！！\n")
# f.close()

# f = open("./tmp/foo.txt", "r")
# str = f.read()
# print(str)
# f.cloese()

# f = open("./tmp/foo.txt", "r")
# str = f.readline()
# print(str)
# f.close()

# f = open("./tmp/foo.txt", "r")
# str = f.readlines()
# print(str)
# f.close()

# f = open("./tmp/foo.txt", "r")
# for line in f:
#     print(line, end="")
# f.close()

# while True:
#     try:
#         num = int(input("请输入一个数字："))
#         print(num)
#         break
#     except ValueError:
#         print("您输入的不是数字")

# x = 10
# if x > 5:
#     raise Exception('x 不能大于 5。x 的值为：{}'.format(x))

# class MyError(Exception):
#     def __init__(self, value) -> None:
#         super().__init__()
#         self.value = value
    
#     def __str__(self) -> str:
#         return repr(self.value)

# try:
#     raise MyError(2*2)
# except MyError as e:
#     print('My exception occurred, value: ', e.value)

# raise MyError('oops!')