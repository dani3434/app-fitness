import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View``;
export const Lista = styled.FlatList``;
export const ContainerExercisesItem = styled.View``;
export const AnimatedContainerExercisesItem = Animated.createAnimatedComponent(
  ContainerExercisesItem,
);

export const ButtonExercisesItem = styled.TouchableOpacity`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 8px;
`;
