# 题目描述：
# 给你一个字符串 a， 请你输出逆序之后的a。
# 例如：a = 'xydz'
# 则输出：zdyx

a = 'xydz'
resultArr = []
for i in range(len(a)):
    resultArr.append(a[i])
resultArr.reverse()
print(''.join(resultArr))