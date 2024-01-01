import React from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { sliderImages } from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function ImageSlider() {
  SplashScreen.preventAutoHideAsync();

  if (!sliderImages) {
    return null;
  }
  SplashScreen.hideAsync();
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={({ item }, parallaxProps: any = {}) => (
        <View style={{ width: wp(100) - 70, height: hp(25) }}>
          <ParallaxImage
            source={item}
            containerStyle={{ borderRadius: 30, flex: 1 }}
            style={{ resizeMode: 'contain' }}
            parallaxFactor={1}
            {...parallaxProps}
          />
        </View>
      )}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
  );
}
