import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

  // FLEX STYLES
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  flexDirectionColumn: {
    flexDirection: 'column'
  },
  flex1WithDirectionRow: {
    flexDirection: 'row',
    flex: 1
  },
  flexShrink1: {
    flexShrink: 1
  },
  flex1: {
    flex: 1
  },
  flexStart: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  //JUSTIFY CONTENT
  justifyContentFlexEnd: {
    justifyContent: 'flex-end'
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start'
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },

  //ALIGN ITEMS
  alignItemsFlexStart: {
    alignItems: 'flex-start'
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
 
  // POSITIONS
  positionAbsolute: {
    position: 'absolute'
  },

  //TEXT ALIGNMENTS
  textAlignCenter: {
    textAlign: 'center'
  },

  //BORDER SHADOW
  borderShadowAndroid: {
    elevation: 5
  },
  borderShadowIOS: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  }
})