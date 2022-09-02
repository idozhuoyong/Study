//
//  LandmarksList.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/9/1.
//

import SwiftUI

struct LandmarksList: View {
    var body: some View {
        NavigationView {
            List(landmarkData) { landmark in
                NavigationLink {
                    LandmarkDetail(landmark: landmark)
                } label: {
                    LandmarkRow(landmark: landmark)
                }

            }
            .navigationBarTitle(Text("Landmarks"))
        }
    }
}

struct LandmarksList_Previews: PreviewProvider {
    static var previews: some View {
        LandmarksList()
    }
}
