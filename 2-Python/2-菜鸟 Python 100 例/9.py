"""
题目：暂停一秒输出。
"""
import time

myD = {1: 'a', 2: 'b'}
for key, value in myD.items():
    time.sleep(1)
    print("key: " + str(key) + ", value: " + value)