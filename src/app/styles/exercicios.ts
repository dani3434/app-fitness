import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import styled from 'styled-components/native';

export const ContainerScroll = styled(ScrollView)``;

export const VoltarButton = styled.TouchableOpacity`
  background-color: #d60a3d;
  margin-left: 16px;
  margin-right: 16px;
  position: absolute;
  border-radius: 9999px;
  height: ${hp(5.5)}px;
  width: ${hp(5.5)}px;
  margin-top: ${hp(7)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4px;
`;
export const ContainerInfo = styled.ScrollView`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 12px;
`;

export const InfoName = styled.Text`
  font-size: ${hp(3)}px;
  font-weight: 600;
  color: rgb(64 64 64);
`;

export const ContainerList = styled.View`
  margin-bottom: 40px;
`;
