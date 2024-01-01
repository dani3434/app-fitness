import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  margin-left: 16px;
  margin-right: 16px;
`;
export const Titulo = styled.Text`
  font-size: ${hp(3)}px;
  font-weight: 600;
  color: rgb(64 64 64);
  margin-bottom: 10px;
`;
export const Lista = styled.FlatList``;

export const DivBotao = styled.View``;
export const AnimatedDivBotao = Animated.createAnimatedComponent(DivBotao);
export const BotaoExercicios = styled.TouchableOpacity`
  width: ${wp(44)}px;
  height: ${wp(52)}px;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  /* padding-left: 0; */
  margin-bottom: 15px;
`;
