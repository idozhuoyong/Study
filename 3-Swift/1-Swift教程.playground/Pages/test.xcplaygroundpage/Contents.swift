//: [Previous](@previous)

import Foundation

var sampleInteger = 12
type(of: sampleInteger)
Int.init(bigEndian: 24)

var tmpDouble = 1.68
var doubleValue = 2 + tmpDouble

var keyNote:String = "someNote中国"
if !keyNote.isEmpty {
    print(keyNote)
}
keyNote.count
keyNote.hasPrefix("")
keyNote.hasSuffix("")

var myChar:Character = "$"


let animalString = "a:中国"
for codeUnit in animalString.utf8 {
    print(codeUnit)
}
print("---")
for codeUnit in animalString.utf16 {
    print(codeUnit)
}

print("===============")
var roundValue:Int? = 12
type(of: roundValue)
if let tempValue = roundValue {
    print(tempValue)
}

let nullValue:String! = "Not Null String"
type(of: nullValue)
print(nullValue!)

Int(12.4)
Int(12.5)
Int(12.6)

// 区间运算符
// ... 和 ...<
for i in 1..<4 {
    print(i)
}

var fruts = ["apples", "orange", "belaner"]
let icount = fruts.count
for i in 0 ..< icount {
    print(i)
}


var a = 1
var b = 0
if (a != 0) && (b != 0) {
    print("The product is \(a * b)")
} else {
    print("Product by zero")
}

var netStatusIsOk = false
var authorityNo = 8
if (authorityNo == 8 || authorityNo == 9) && netStatusIsOk {
   print("welocme manager")
} else {
    print("You have no authority")
}

var tmpBits = 0b11111111
~tmpBits

var oneBits = 1
oneBits << 1
oneBits << 3

var twoBits = 8
twoBits >> 1
twoBits >> 2
twoBits >> 3
//twoBits >> 4

UInt8.max &+ 1
UInt8.min &- 1
Int8.max &+ 1
Int8.min &- 1

struct CenterPointer {
    var x = 0, y = 0
}

func + (left:CenterPointer, right:CenterPointer) -> CenterPointer {
    return CenterPointer(x: left.x + right.x, y:left.y + right.y)
}

prefix func - (cPointer: CenterPointer) -> CenterPointer {
    return CenterPointer(x: -cPointer.x, y: -cPointer.y)
}

func += (left: inout CenterPointer, right:CenterPointer) {
    left = left + right
}

var zPointer = CenterPointer(x: 2, y: 3)
let yPointer = CenterPointer(x: 5, y: 3)
let xPointer = zPointer + yPointer
xPointer.x
xPointer.y
-xPointer.x
-xPointer.y
zPointer += yPointer
zPointer.x
zPointer.y

prefix operator +++
prefix func +++ (cPointer: inout CenterPointer) -> CenterPointer {
    cPointer += cPointer
    cPointer += CenterPointer(x: 1, y: 1)
    return cPointer
}
(+++zPointer).y


// 数组
var emptyArrar = [String]()
emptyArrar = Array<String>()
print(emptyArrar)

var brazilTeamMembers = [String]()
brazilTeamMembers.append("six")
brazilTeamMembers.insert("one", at: 0)
brazilTeamMembers += ["seven"]
brazilTeamMembers.isEmpty
brazilTeamMembers[1] = "newMar"
brazilTeamMembers.count
brazilTeamMembers.remove(at: 2)
brazilTeamMembers.removeLast()
brazilTeamMembers.removeAll()

// 字典
var emptyDict = Dictionary<String, Int>()
var myDict = [
    "apptype": "2dgame",
    "name": "2048",
    "company": "swift in action"
]
myDict["name"] = "2048 update"
myDict.updateValue("name", forKey: "4096")
myDict.removeValue(forKey: "4096")
myDict.keys
for item in myDict.keys {
    print(item)
}
myDict.values
for item in myDict.values {
    print(item)
}

// 结构体
//struct 
