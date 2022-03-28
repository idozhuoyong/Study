# 题目描述：
# 银行在打印票据的时候，常常需要将阿拉伯数字表示的人民币金额转换为大写表示，现在请你来完成这样一个程序。
# 在中文大写方式中，0到10以及100、1000、10000被依次表示为：    零 壹 贰 叁 肆 伍 陆 柒 捌 玖 拾 佰 仟 万
# 以下的例子示范了阿拉伯数字到人民币大写的转换规则：
# 1	壹圆
# 11	壹拾壹圆
# 111	壹佰壹拾壹圆
# 101	壹佰零壹圆
# -1000	负壹仟圆
# 1234567	壹佰贰拾叁万肆仟伍佰陆拾柒圆
# 现在给你一个整数a(|a|<100000000), 请你打印出人民币大写表示.
# 例如：a=1
# 则输出：壹圆

# 1234567	壹佰贰拾叁万肆仟伍佰陆拾柒圆
# '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', 佰 仟 万

def getUpperMoney(money):
    if money == 0:
        return '零圆'

    nums1 = { '0': '零', '1': '壹', '2': '贰', '3': '叁', '4': '肆', '5': '伍', '6': '陆', '7': '柒', '8': '捌', '9': '玖' }
    nums2 = ['', '拾', '佰', '仟']
    resutArr = []
    flag = True
    
    if money < 0:
        flag = False
        money = -money

    moneystr = str(money)
    for i in range(len(moneystr)-1, -1, -1):
        if (len(moneystr)-1-i) % 4 == 0 and len(moneystr)-1-i > 0:
            resutArr.insert(0, '万')
        else:
            resutArr.insert(0, nums2[(len(moneystr)-1-i)%4])
        resutArr.insert(0, nums1[moneystr[i]])
    resutArr.append('圆')
    resutStr = ''.join(resutArr)

    resutStr = resutStr.replace('零万', '万').replace('零仟', '零').replace('零佰', '零').replace('零拾', '零').replace('零圆', '圆')
    while '零零' in resutStr:
        resutStr = resutStr.replace('零零', '零')
    resutStr = resutStr.replace('零万', '万').replace('零圆', '圆').replace('万万', '亿')

    if not flag:
        resutStr = '负' + resutStr

    return resutStr

print(getUpperMoney(0))
print(getUpperMoney(1))
print(getUpperMoney(11))
print(getUpperMoney(111))
print(getUpperMoney(101))
print(getUpperMoney(-1000))
print(getUpperMoney(1234567))
print(getUpperMoney(100000000))
