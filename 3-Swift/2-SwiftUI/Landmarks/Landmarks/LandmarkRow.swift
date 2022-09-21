//
//  LandmarkRow.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/9/1.
//

import SwiftUI

struct LandmarkRow: View {
    var landmark: Landmark
    
    var body: some View {
        HStack(alignment: .center, spacing: 0) {
            landmark.image
                .resizable()
                .frame(width: 50, height: 50)
            Text(landmark.name)
                .padding()
            Spacer()
            
            if landmark.isFavorite {
                Image(systemName: "star.fill")
                    .imageScale(.medium)
                    .foregroundColor(.yellow)
            }
        }
    }
}

struct LandmarkRow_Previews: PreviewProvider {
    static var previews: some View {
        LandmarkRow(landmark: landmarkData[0])
    }
}
