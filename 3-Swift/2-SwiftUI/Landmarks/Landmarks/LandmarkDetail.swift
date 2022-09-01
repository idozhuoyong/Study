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
    
    var body: some View {
        VStack() {
            
            MapView(coordinate: CLLocationCoordinate2D(latitude: 34.011_286, longitude: -116.166_868))
                .edgesIgnoringSafeArea(.top)
                .frame(height: 300)
            
            CircleImage(image: Image("turtlerock"))
                .offset(x: 0, y: -130)
                .padding(.bottom, -130)
            
            VStack(alignment: .leading, spacing: 0) {
                Text("Turtle Rock")
                    .font(.title)
                HStack(alignment: .top, spacing: 0) {
                    Text("Joshua Tree National Park")
                        .font(.subheadline)
                    Spacer()
                    Text("California")
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
        LandmarkDetail()
    }
}
