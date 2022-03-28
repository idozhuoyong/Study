# 题目描述：
# 给你一个字符串 a， 输出a中奇数位置字符构成的字符串（位置编号从1开始）。
# 例如：a=‘xyzwd’
# 则输出:xzd

a = 'xyzwd'
res = ''
for i in range(0, len(a), 2):
    res += a[i]
print(res)