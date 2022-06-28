//: [Previous](@previous)

import Foundation

// 1.单行字符串
let singleLineString = "single line string"
// 2.多行字符串
let multilineString = """
Multi
line
stirng
"""

// 3.扩展字符串分隔符
let str1 = #"sfsf\"afsf\n"# // 此时 \"、\n 不是转义字符，会被原样输出

// 4.空字符串
let str2 = ""
str2.isEmpty
let str3 = String()
str3.isEmpty

// 5.字符
let c1: Character = "a"
var str4 = "b"
str4.append(c1)
str2 + String(c1)

// 6.字符串插值
let num1 = 1
"\(num1) * 2 = \(num1 * 2)"

// 7.计算字符数量
var word = " cafe "
word.count

// 8.访问和修改字符串

