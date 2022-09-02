//
//  LandmarkDetail.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/9/1.
//

import SwiftUI
import CoreLocation

struct LandmarkDetail: View {
    @State private var inputMessage = ""
    
    let landmark: Landmark
    
    var body: some View {
        VStack() {
            
            MapView(coordinate: landmark.locationCoordinate)
                .edgesIgnoringSafeArea(.top)
                .frame(height: 300)
            
            CircleImage(image: landmark.image)
                .offset(x: 0, y: -130)
                .padding(.bottom, -130)
            
            VStack(alignment: .leading, spacing: 0) {
                Text(landmark.name)
                    .font(.title)
                HStack(alignment: .top, spacing: 0) {
                    Text(landmark.park)
                        .font(.subheadline)
                    Spacer()
                    Text(landmark.state)
                        .font(.subheadline)
                }
            }
            .padding()
            
            //TextField("inputPlaceHolder", text: $inputMessage, onEditingChanged: { changeState in
            //    print(changeState)
            //}, onCommit: {
            //    print("commit")
            //})
            //    .padding()
            //    //.keyboardType(.decimalPad)
            //    .textFieldStyle(.roundedBorder)
            
            Spacer()
        }
    }
}

struct LandmarkDetail_Previews: PreviewProvider {
    static var previews: some View {
        LandmarkDetail(landmark: landmarkData[0])
    }
}
