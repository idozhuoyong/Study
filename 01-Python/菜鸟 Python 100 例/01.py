""" 题目：有四个数字：1、2、3、4，能组成多少个互不相同且无重复数字的三位数？各是多少？ """
nums = []
for v1 in range(1, 5):
    for v2 in range(1, 5):
        for v3 in range(1, 5):
            if v1 != v2 and v2 != v3 and v1 != v3:
                num = str(v1) + str(v2) + str(v3)
                nums.append(num)

print(len(nums))
print(nums)