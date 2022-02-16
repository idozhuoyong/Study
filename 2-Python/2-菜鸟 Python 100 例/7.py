"""
题目：将一个列表的数据复制到另一个列表中。
"""

arr1 = [1, 2, 3, 4, 5]
arr2 = arr1[:] # 利用列表切割进行复制
arr2.append(6)

print(arr1)
print(arr2)