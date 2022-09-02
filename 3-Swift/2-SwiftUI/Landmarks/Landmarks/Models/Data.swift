//
//  Data.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/9/1.
//

import Foundation
import UIKit
import SwiftUI

let landmarkData: [Landmark] = load(fileName: "landmarkData.json")


/**
 load 方法
 */
func load<T: Decodable>(fileName: String) -> T {
    let data: Data
    
    guard let fileUrl = Bundle.main.url(forResource: fileName, withExtension: nil) else {
        fatalError("Couldn't find \(fileName) in main bundle.")
    }
    do {
        data = try Data(contentsOf: fileUrl)
    } catch {
        fatalError("Couldn't load \(fileName) from main bundle:\n\(error)")
    }
    
    do {
        let decoder = JSONDecoder()
        return try decoder.decode(T.self, from: data)
    } catch {
        fatalError("Couldn't parse \(fileName) as \(T.self):\n\(error)")
    }
}

final class ImageStore {
    static var shared = ImageStore()
    
    typealias _ImageDictionary = [String: CGImage]
    fileprivate var images: _ImageDictionary = [:]
    fileprivate static var scale = 2
    
    func image(name: String) -> Image {
        let index = _guaranteeImage(name: name)
        
        return Image(images.values[index], scale: CGFloat(ImageStore.scale), label: Text(name))
    }
    
    static func loadImage(name: String) -> CGImage {
        guard
            let url = Bundle.main.url(forResource: name, withExtension: "jpg"),
            let imageSource = CGImageSourceCreateWithURL(url as NSURL, nil),
            let image = CGImageSourceCreateImageAtIndex(imageSource, 0, nil)
        else {
            fatalError("Couldn't load image \(name).jpg from main bundle.")
        }
        return image
    }
    
    fileprivate func _guaranteeImage(name: String) -> _ImageDictionary.Index {
        if let index = images.index(forKey: name) { return index }
        
        images[name] = ImageStore.loadImage(name: name)
        return images.index(forKey: name)!
    }
}
