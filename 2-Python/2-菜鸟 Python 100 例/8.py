"""
题目：输出 9*9 乘法口诀表。
"""

for n in range(1, 10):
    for m in range(1, n+1):
        print(str(n) + " * " + str(m) + " = " + str(n*m), end="\t")
    print()