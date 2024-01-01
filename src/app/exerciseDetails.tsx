import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExercisesDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();

  return (
    <Container>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
          backgroundColor: '#e5e5e5',
          borderRadius: 40,
        }}
      >
        <Image
          source={item.gifUrl}
          contentFit="cover"
          style={{
            width: wp(100),
            height: wp(100),
            borderBottomLeftRadius: 45,
            borderBottomRightRadius: 45,
          }}
        />
      </View>
      <FecharButton onPress={() => router.back()}>
        <Icon name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </FecharButton>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <AnimatedDetailsTitulo entering={FadeInDown.duration(300).springify()}>
          {item.name}
        </AnimatedDetailsTitulo>

        <AnimatedDetailsEquipamento
          entering={FadeInDown.delay(100).duration(300).springify()}
        >
          Equipamento:{' '}
          <Text style={{ fontWeight: 'bold', color: 'rgb(38 38 38)' }}>
            {item.equipment}
          </Text>
        </AnimatedDetailsEquipamento>

        <AnimatedDetailsEquipamento
          entering={FadeInDown.delay(200).duration(300).springify()}
        >
          Músculos Secundários:{' '}
          <Text style={{ fontWeight: 'bold', color: 'rgb(38 38 38)' }}>
            {item.secondaryMuscles}
          </Text>
        </AnimatedDetailsEquipamento>

        <AnimatedDetailsEquipamento
          entering={FadeInDown.delay(300).duration(300).springify()}
        >
          Alvo:{' '}
          <Text style={{ fontWeight: 'bold', color: 'rgb(38 38 38)' }}>
            {item.target}
          </Text>
        </AnimatedDetailsEquipamento>

        <AnimatedDetailsTitulo
          entering={FadeInDown.delay(400).duration(300).springify()}
        >
          Instruções:
        </AnimatedDetailsTitulo>
        <Animated.Text
          entering={FadeInDown.delay(500).duration(300).springify()}
          style={{
            color: 'rgb(38 38 38)',
            marginBottom: 15,
            marginTop: 8,
            lineHeight: 20,
          }}
        >
          {item.instructions}
        </Animated.Text>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex: 1;
  margin-top: 30px;
`;
const FecharButton = styled.TouchableOpacity`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  position: absolute;
  right: 0px;
  border-radius: 9999px;
`;

const ScrollView = styled.ScrollView`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 15px;
`;
const DetailsTitulo = styled.Text`
  font-size: ${hp(3.5)}px;
  font-weight: 600;
  color: rgb(38 38 38);
  margin-top: 8px;
`;
export const AnimatedDetailsTitulo =
  Animated.createAnimatedComponent(DetailsTitulo);

const DetailsEquipamento = styled.Text`
  font-size: ${hp(2)}px;
  color: rgb(38 38 38);
  margin-top: 12px;
`;
export const AnimatedDetailsEquipamento =
  Animated.createAnimatedComponent(DetailsEquipamento);
