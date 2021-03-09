import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import sizes from '../../assets/styles/sizes'

export default function CustomButton({ image, onPress }){
 
  return(
    <TouchableOpacity onPress={onPress} style={[ sizes.borderWidth1, sizes.br50 ]} >
      <Image source={image} style={[ sizes.w70h70 ]} resizeMode='contain' />
    </TouchableOpacity>
  )
}