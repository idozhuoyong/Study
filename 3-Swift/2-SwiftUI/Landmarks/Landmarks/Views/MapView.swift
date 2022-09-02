//
//  MapView.swift
//  Landmarks
//
//  Created by  hrxj_csii_ios on 2022/8/30.
//

import SwiftUI
import MapKit

struct MapView: UIViewRepresentable {
    let coordinate: CLLocationCoordinate2D
    
    func makeUIView(context: Context) -> MKMapView {
        MKMapView(frame: .zero)
    }
    
    func updateUIView(_ uiView: MKMapView, context: Context) {
        //let coordinate = CLLocationCoordinate2D(latitude: 34.011_286, longitude: -116.166_868)
        // 设置经纬度跨度，越小越详细
        let span = MKCoordinateSpan(latitudeDelta: 0.02, longitudeDelta: 0.02)
        // 设置经纬度区域
        let region = MKCoordinateRegion(center: coordinate, span: span)
        // 设置地图显示区域
        uiView.setRegion(region, animated: true)
    }
}

struct MapView_Previews: PreviewProvider {
    static var previews: some View {
        MapView(coordinate: CLLocationCoordinate2D(latitude: 34.011_286, longitude: -116.166_868))
    }
}
