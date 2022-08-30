//
//  ContentView.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/8/29.
//

import SwiftUI

struct ContentView: View {
    @State private var inputMessage = ""
    
    var body: some View {
        VStack() {
            
            MapView()
                .edgesIgnoringSafeArea(.top)
                .frame(height: 300)
            
            CircleImage()
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
            
            TextField("inputPlaceHolder", text: $inputMessage, onEditingChanged: { changeState in
                print(changeState)
            }, onCommit: {
                print("commit")
            })
                .padding()
                //.keyboardType(.decimalPad)
                .textFieldStyle(.roundedBorder)                
            
            Spacer()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
