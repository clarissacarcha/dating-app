import { StyleSheet, Dimensions } from 'react-native'
const { height } = Dimensions.get('window')

export default StyleSheet.create({

  //FONT SIZES
  fs20: {
    fontSize: 20
  },

  //BORDER RADIUS SIZES
  br5: {
    borderRadius: 5
  },
  br50: {
    borderRadius: 50
  },

  //WIDTH
  w100Percent: {
    width: '100%'
  },

  //HEIGHT
  h100Percent: {
    height: '100%'
  },
  h100: {
    height: height - 300
  },

  //HEIGHT AND WIDTH
  w70h70: {
    height: 60,
    width: 60
  },
  
  //LEFT SIZES FOR POSITION ABSOLUTE
  left10: {
    left: 10
  },

  //LEFT SIZES FOR POSITION ABSOLUTE
  bottom10: {
    bottom: 10
  },

  //TEXT SHADOW RADIUS
  textShadowRadius10: {
    textShadowRadius: 10
  },

  //PADDING TOP
  pt20: {
    paddingTop: 10
  },

  //PADDING HORIZONTAL
  ph20: {
    paddingHorizontal: 20
  },
  ph15Percent: {
    paddingHorizontal: '15%'
  },

  //PADDING
  p20: {
    padding: 20
  },

  //PADDING BOTTOM
  pb50: {
    paddingBottom: 50
  },

  //BORDERWITH
  borderWidth1: {
    borderWidth: 1
  }
})