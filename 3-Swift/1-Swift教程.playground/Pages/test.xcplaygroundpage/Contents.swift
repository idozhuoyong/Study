//: [Previous](@previous)

import Foundation

enum CompassPoint: String {
    case north
    case south
    case ease
    case west
}

var directionToHead = CompassPoint.west

switch directionToHead {
case .north:
    print("north")
case .south:
    print("south")
case .ease:
    print("ease")
//case .west:
//    print("west")
default:
    print("default")
}
print(directionToHead.rawValue)

enum Beverage: CaseIterable {
    case coffee, tea, juice
}
for beverage in Beverage.allCases {
    print(beverage)
}

