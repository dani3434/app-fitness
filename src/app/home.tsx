import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  AvatarDiv,
  Cabecalho,
  Container,
  ContainerListExercicios,
  ContainerSlider,
  DivAvatar,
  DivCabecalho,
  DivIcon,
  TituloCabecalho,
  TituloCabecalho2,
} from './styles/home';
import AvatarImage from '../assets/images/avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

export default function Home() {
  return (
    <Container edges={['top']}>
      <StatusBar style="dark" />

      <Cabecalho>
        <DivCabecalho>
          <TituloCabecalho>Pronto Para</TituloCabecalho>
          <TituloCabecalho2>O Treino?</TituloCabecalho2>
        </DivCabecalho>

        <DivAvatar>
          <AvatarDiv source={AvatarImage} />

          <DivIcon>
            <Icon name="notifications" size={25} color="gray" />
          </DivIcon>
        </DivAvatar>
      </Cabecalho>

      {/* Slide */}
      <ContainerSlider>
        <ImageSlider />
      </ContainerSlider>

      <ContainerListExercicios>
        <BodyParts />
      </ContainerListExercicios>
    </Container>
  );
}
