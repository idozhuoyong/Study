"""
题目：斐波那契数列。
"""

def fib(n):
    if n == 1:
        return [1]
    elif n == 2:
        return [1, 1]
    
    fibs = [1, 1]
    for idx in range(2, n):
        fibs.append(fibs[idx-1] + fibs[idx-2])
    return fibs

print(fib(10))