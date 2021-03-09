import React from 'react'
import { View, Text } from 'react-native'
import layouts from '../../assets/styles/layouts'
import sizes from '../../assets/styles/sizes'

export default function CustomOverlayLabel({ label, color }){
  return(
    <View style={[ layouts.flexCenter,  { borderColor: color }]}>
      <Text style={[ sizes.fs20, layouts.textAlignCenter, { color }]}>{label}</Text>
    </View>
  )
}