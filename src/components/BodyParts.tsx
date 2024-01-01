import React from 'react';
import {
  AnimatedDivBotao,
  BotaoExercicios,
  Container,
  Lista,
  Titulo,
} from './styles/bodyparts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Router } from 'expo-router/build/types';
import { FadeInDown } from 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';

interface ItemList {
  name: string;
  image: number;
}
interface BodyPartCardProps {
  item: ItemList;
  index: number;
  router: Router;
}
export default function BodyParts() {
  const router = useRouter();
  SplashScreen.preventAutoHideAsync();

  if (!bodyParts) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <Container>
      <Titulo>Exercícios</Titulo>

      <Lista
        data={bodyParts as ItemList[]}
        numColumns={2}
        keyExtractor={(item: unknown) => {
          const itemList = item as ItemList;
          return itemList.name;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item as ItemList} router={router} />
        )}
      />
    </Container>
  );
}

const BodyPartCard = ({ item, router, index }: BodyPartCardProps) => {
  return (
    <AnimatedDivBotao
      entering={FadeInDown.duration(400)
        .delay(index * 300 + 200)
        .springify()
        .damping(3)}
    >
      <BotaoExercicios
        onPress={() => router.push({ pathname: '/exercicios', params: item })}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: wp(44),
            height: wp(52),
            borderRadius: 35,
            position: 'absolute',
          }}
        />

        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.952)']}
          style={{
            width: wp(44),
            height: hp(15),
            position: 'absolute',
            bottom: 0,
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 35,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <Text
          style={{
            fontSize: hp(2.3),
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          {item?.name}
        </Text>
      </BotaoExercicios>
    </AnimatedDivBotao>
  );
};
