import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  background-color: white;
  margin-top: 20px;
`;

export const Cabecalho = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;
export const DivCabecalho = styled.View`
  margin-top: 8px;
`;
export const TituloCabecalho = styled.Text`
  font-size: ${hp(4.5)}px;
  font-weight: bold;
  color: rgb(64 64 64);
`;
export const TituloCabecalho2 = styled.Text`
  font-size: ${hp(4.5)}px;
  font-weight: bold;
  color: #d60a3d;
`;

export const DivAvatar = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const AvatarDiv = styled.Image`
  width: ${hp(7)}px;
  height: ${hp(7)}px;
  border-radius: 9999px;
`;
export const DivIcon = styled.View`
  margin-top: 8px;
  background-color: rgb(229 229 229);
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${hp(5.5)}px;
  width: ${hp(5.5)}px;
  border-color: rgb(212 212 212);
  border-width: 3px;
`;
export const ContainerSlider = styled.View``;
export const ContainerListExercicios = styled.View`
  flex: 1;
  margin-top: 15px;
`;
