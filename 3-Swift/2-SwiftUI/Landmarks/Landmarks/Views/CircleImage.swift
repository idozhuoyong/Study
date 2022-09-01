//
//  CircleImage.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/8/29.
//

import SwiftUI

struct CircleImage: View {
    let image: Image
    var body: some View {
        //Image("turtlerock")
        image
            .interpolation(.none) // 插值
            .antialiased(true) // 抗锯齿
            //.resizable(capInsets: EdgeInsets(), resizingMode: .tile)
            //.frame(height: 40)
            .clipShape(Circle()) // 裁剪
            //.mask(Circle())
            //.cornerRadius(15)
            .overlay(Circle().stroke(Color.white, lineWidth: 4))
            .shadow(radius: 10) // 阴影
    }
}

struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage(image: Image("turtlerock"))
    }
}
