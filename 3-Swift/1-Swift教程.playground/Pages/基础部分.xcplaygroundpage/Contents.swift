//: [Previous](@previous)

import Foundation
/**
 基础部分
 */
// 1.常量
let l1 = "abc"
//l1 = "efg" // 会报错，常量赋值之后不能改变

// 2.变量
var v1 = "abc"
v1 = "efg"

// 3.输出
print(l1)

// 4.注释
// 单行注释
/* 多行
 注释
 /* 嵌套多行注释 */
 // 嵌套单行注释
 */

// 5.分号，语句可选分号结尾
let cat0 = "猫0"
let cat1 = "猫1";
let cat2 = "猫2"; let cat3 = "猫3" // 同一行多条语句，必须分号分隔

// 6.整数，没有小数部分的数字(8/16/32/64位整数)
Int8.min
Int8.max
UInt8.min
UInt8.max
// Int 随平台决定整数的长度（UInt特性和Int类似）
// 在32位平台上，Int和Int32长度相同
// 在64位平台上，Int和Int64长度相同

// 7.浮点数，有小数部分的数字
// Double 64位浮点数，精度更高
// Float 32位浮点数

// 8.类型安全和类型推断
// 类型安全：在编译时会进行类型检查，不匹配的类型会抛出语法错误
// 类型推断：在编译时，会自动推断出表达式的类型(浮点型，会默认推断为Double)
let meaningOfLine = 42 // meaningOfLine 会被推断为 Int 类型
type(of: meaningOfLine)

// 9.数值型字面量
let decimalInteger = 17

// 10.数值类型转换
let n1 = 3
let n2 = 0.1415926
let pi1 = Double(n1) + n2
let n3 = Int(pi1) // 3
Int(3.56) // 3
Int(-3.9) // -3

// 11.类型别名
typealias CustomUInt8 = UInt8
CustomUInt8.min
CustomUInt8.max

// 12. 布尔值(true/false)
if true {
    print("true")
} else {
    // print("false")
}

// 13. 元组(tuples)，元组内的值可以是任意类型
let http404Error = (404, "Not Found")
let (statusCode, StatusMessage) = http404Error // 元组分解
statusCode
StatusMessage
let (statusCode2, _) = http404Error // 元组分解，忽略不需要的部分
http404Error.0 // 利用下标访问元组内容
let http200Status = (statusCode: 200, StatusMessage: "OK") // 定义元组的时候给单个元素命名
http200Status.statusCode // 通过元素命名访问元组内容
http200Status.StatusMessage

// 14.可选类型(Optional)
let convertedNumber = Int("123")
type(of: convertedNumber)
if convertedNumber != nil {
    print("convertedNumber contains some integer values")
}

// 强制解析
convertedNumber!

// 可选绑定
if let num = convertedNumber {
    print(num)
    type(of: num)
}

// 隐式可选类型
let str1: String! = "aaa"
type(of: str1)
let str2: String = str1
type(of: str2)


// 15. 错误处理
func canThrowAnError() throws {
    
}

do {
    try canThrowAnError()
    // 没有错误信息抛出
} catch {
    // 有错误信息抛出
}

// 16. 断言和先决条件
// 在运行时来检查条件是否满足
// 断言仅在测试环境运行，先决条件会在测试生产环境都运行
// 断言
//let age = -3
//assert(age >= 0, "A person's cannot be less than zero")

// 先决条件
//precondition(age >= 0)
