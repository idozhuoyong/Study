//: [Previous](@previous)

import Foundation

// 1. 术语
// 一元运算符： -a
// 二元运算符：a+b
// 三元运算符： a ? b : c

// 2. 赋值运算符
let b = 10
var a = 5
a = b

// 3. 算术运算符
// 加法(+)、减法(-)、乘法(*)、除法(/)、求余(%)
1 + 2
3 - 2
2 * 3
6 / 4
6 / 4.0
6.0 / 4
6.0 / 4.0
"hello " + "world"
6 % 4
6 % -4

// 4.组合运算符
var a1 = 2
a1 += 3


// 5.比较运算符
// 等于(==)、不等于(!=)、小于(<)、大于(>)
// 小于等于(<=)、大于等于(>=)

// 6.三目运算符

// 6.空合运算符(??)
let defaultColorName = "red"
var userDefinedColorName: String?   //默认值为 nil

var colorNameToUse = userDefinedColorName != nil ? userDefinedColorName! : defaultColorName
// 上面的三目运算形式，可简化为下面的空合运算符
colorNameToUse = userDefinedColorName ?? defaultColorName

// 7.区间运算符
// 闭区间运算符 (a...b) 从a到b，包含a和b
// 半开区间运算符 (a..<b) 从a到b，包含a，不包含b
let range = 1...5

// 8.逻辑运算符
// 非(!)，与(&&)，或(||)
// 或和与的优先顺序是左结合的
