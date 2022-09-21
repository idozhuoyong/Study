//
//  UserData.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/9/21.
//

import Combine
import SwiftUI

final class UserData: ObservableObject {
    @Published var showFavoritesOnly = false
    @Published var landmarks = landmarkData
}
