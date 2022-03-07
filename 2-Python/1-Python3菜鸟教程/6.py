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

f = open("./tmp/foo.txt", "r")
for line in f:
    print(line, end="")
f.close()