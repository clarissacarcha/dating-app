import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator} from 'react-native';
import { getPokemonList } from '../../reducers/pokemonListReducer';
import CustomButton from '../../components/CustomButton';
import layouts from '../../assets/styles/layouts';
import { CANCEL_ICON, HEART_ICON, STAR_ICON } from './constants';
import sizes from '../../assets/styles/sizes';
import CustomCard from '../../components/CustomCard';
import CustomOverlayLabel from '../../components/CustomOverylayLabel';
import Swiper from 'react-native-deck-swiper';

const Home = ({ getPokemonListDispatch, getPokemonListState }) => {

  const [data, setData] = useState([])
  const useSwiper = useRef(null)
  const handleOnSwipedLeft = () => useSwiper.current.swipeLeft()
  const handleOnSwipedRight = () => useSwiper.current.swipeRight()

  useEffect(() => {
    getPokemonListDispatch()
  }, [])

  useEffect(() => {
    let { results } = getPokemonListState
    if(results && results.length > 0){ setData(results) }
  }, [getPokemonListState])

  if(data.length === 0){ return(
    <View style={[ layouts.flexCenter, layouts.flex1 ]}>
      <ActivityIndicator size='large' color='black' />
    </View>
  )}
  return(
    <View style={[ layouts.flex1, layouts.justifyContentSpaceBetween ]}>
      <View />
      <Swiper
        ref={useSwiper}
        backgroundColor='white'
        containerStyle={{ flex: 1, backgroundColor: 'white' }}
        animateCardOpacity
        cards={data}
        renderCard={(card) => <CustomCard card={card} />}
        cardIndex={0}
        stackSize={2}
        showSecondCards
        animateOverlayLabelsOpacity
        useViewOverflow={false}
        overlayLabels={{
          left: {
            element: <CustomOverlayLabel label='NOPE' color='red' />,
            style: { wrapper: [ layouts.alignItemsFlexEnd, layouts.justifyContentFlexStart, sizes.p20 ] }
          },
          right: {
            element: <CustomOverlayLabel label='LIKE' color='green' />,
            style: { wrapper: [ layouts.flexStart, sizes.p20 ] }
          },
        }}
      />
      <View style={[ sizes.pb50, layouts.justifyContentSpaceBetween, layouts.alignItemsCenter, layouts.flexDirectionRow, sizes.ph15Percent ]}>
        <CustomButton image={CANCEL_ICON} onPress={() => handleOnSwipedLeft() } />
        <CustomButton image={STAR_ICON} onPress={() => handleOnSwipedRight() } />
        <CustomButton image={HEART_ICON} onPress={() => handleOnSwipedRight() }/>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    getPokemonListState: state.pokemonListReducer.getPokemonListState,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPokemonListDispatch: () => dispatch(getPokemonList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
