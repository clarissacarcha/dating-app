import React from 'react'
import { View, Text, Image } from 'react-native'
import sizes from '../../assets/styles/sizes'
import layouts from '../../assets/styles/layouts'
import colors from '../../assets/styles/colors'

export default function CustomCard({ card }){
  let { name, url } = card,
    splitCardUrl = url.split('/'),
    image = `https://pokeres.bastionbot.org/images/pokemon/${splitCardUrl[splitCardUrl.length - 2]}.png`

  return(
    <View style={[ sizes.ph20, sizes.h100, colors.bgWhite, layouts.flexCenter, sizes.br5, layouts.borderShadowAndroid, layouts.borderShadowIOS ]} >
      <Text style={[ sizes.pt20, layouts.textAlignCenter, sizes.fs20, colors.textBlack ]}>
        { name }
      </Text>
      <Image style={[ sizes.br5, layouts.flex1, sizes.w100Percent ]} source={{ uri: image, cache: 'reload' }} resizeMode='contain' />
    </View>
  )
}