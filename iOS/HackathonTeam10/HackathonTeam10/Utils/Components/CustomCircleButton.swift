//
//  CurstomCircleButton.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI

struct CustomCircleButton: View {
    let action: () -> Void
    let imageName: String

    var body: some View {
        Button(action: action) {
            ZStack {
                Circle()
                    .frame(width: 44, height: 44)
                    .foregroundColor(Color(.button))
                    .overlay(
                        Circle()
                            .stroke(Color.white, lineWidth: 1)
                    )
                
                Image(systemName: imageName) 
                    .foregroundStyle(Color(.white))
                    .frame(width: 44, height: 44)
            }
        }
        .shadow(color: Color(.secondary).opacity(1), radius: 30)
    }
}