import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  AnimatedDivButton,
  AnimatedDivText,
  ButtonIndex,
  Container,
  ImageBackground,
  TextButtonIndex,
  TituloColorido,
  TituloIndex,
} from './styles/inicio';
import BackgroundImage from '../assets/images/welcome.png';
import { LinearGradient } from 'expo-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen'; // Substitui o AppLoading

export default function App() {
  const router = useRouter();
  SplashScreen.preventAutoHideAsync();

  if (!BackgroundImage) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <Container>
      <ImageBackground source={BackgroundImage} />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{
          width: wp(100),
          height: hp(75),
          display: 'flex',
          justifyContent: 'flex-end',
          paddingBottom: 50,
          marginTop: 32,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <AnimatedDivText entering={FadeInDown.delay(100).springify()}>
          <TituloIndex>
            Melhores <TituloColorido>Treinos</TituloColorido>
          </TituloIndex>

          <TituloIndex>para Você</TituloIndex>
        </AnimatedDivText>

        <AnimatedDivButton entering={FadeInDown.delay(200).springify()}>
          <ButtonIndex onPress={() => router.push('home')}>
            <TextButtonIndex>Começar</TextButtonIndex>
          </ButtonIndex>
        </AnimatedDivButton>
      </LinearGradient>
      <StatusBar style="light" />
    </Container>
  );
}
