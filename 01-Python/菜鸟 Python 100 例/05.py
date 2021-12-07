"""
题目：输入三个整数x,y,z，请把这三个数由小到大输出。
"""
x = int(input("x: "))
y = int(input("y: "))
z = int(input("z: "))

arr = [x, y, z] # 把输入值处理成数组
arr.sort() # 数组排序
print(arr)