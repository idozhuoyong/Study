//
//  Landmark.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/9/1.
//

import CoreLocation
import SwiftUI

struct Landmark: Hashable, Codable, Identifiable {
    var id: Int
    var name: String
    fileprivate var imageName: String
    fileprivate var coordinates: Coordinates
    var state: String
    var park: String
    var category: Category
    var city: String
    
    var locationCoordinate: CLLocationCoordinate2D {
        CLLocationCoordinate2D(latitude: coordinates.latitude, longitude: coordinates.longitude)
    }
    
    var image: Image {
        ImageStore.shared.image(name: imageName)
    }
    
    enum Category: String, CaseIterable, Hashable, Codable {
        case featured = "Featured"
        case lakes = "Lakes"
        case rivers = "Rivers"
    }
}

struct Coordinates: Hashable, Codable {
    var longitude: Double
    var latitude: Double
}
