# 多个变量赋值
# 方式一
# a = b = c = 1
# 方式二
# a, b, c = 1, 2, 3
# print(a)
# print(b)
# print(c)

"""
标准数据类型：
    Number
    String
    List []
    Tuple ()
    Set {}
    Dictionary {key:value}
不可变数据类型： Number、String、Tuple
可变数据类型： List、Set、Dictionary
"""
# a = 111
# isinstance(a, int)
# b = 'abcd'
# isinstance(b, string)

# type 和 isinstance 的区别：
# type: 子类不是父类的类型
# isinstance: 子类也是父类的类型

# sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu'}
# print(sites)

# 成员测试
# if 'Runoob' in sites:
#     print('Runoob 在集合中')
# else:
#     print('Runoob 不在集合中')


# 列表推导式
# [表达式 for 变量 in 列表] 或
# [表达式 for 变量 in 列表 if 条件]

# 字典推导式
# {key表达式: vlaue表达式 for value in collection} 或
# {key表达式: vlaue表达式 for value in collection if 条件}

# 集合推导式
# {表达式 for 变量 in 列表}
# {表达式 for 变量 in 列表 if 条件}

# 元组推导式
# (表达式 for 变量 in 列表) 或
# (表达式 for 变量 in 列表 if 条件)