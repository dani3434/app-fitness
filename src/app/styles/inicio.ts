import Animated from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const ImageBackground = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const DivText = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const AnimatedDivText = Animated.createAnimatedComponent(DivText);
export const TituloIndex = styled.Text`
  color: white;
  font-size: ${hp(5)}px;
  font-weight: bold;
`;
export const TituloColorido = styled.Text`
  color: #d60a3d;
`;

export const DivButton = styled.View``;
export const AnimatedDivButton = Animated.createAnimatedComponent(DivButton);

export const ButtonIndex = styled.TouchableOpacity`
  height: ${hp(7)}px;
  width: ${wp(80)}px;
  background-color: #d60a3d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  border-radius: 9999px;
  border: 2px solid white;
`;
export const TextButtonIndex = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${hp(3)}px;
`;
