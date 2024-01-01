import React, { useEffect, useState } from 'react';
import {
  ContainerInfo,
  ContainerList,
  ContainerScroll,
  InfoName,
  VoltarButton,
} from './styles/exercicios';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import ExercisesList from '../components/ExercisesList';

interface ItemParams extends Record<string, string | string[]> {
  image: string;
  name: string;
}
export default function Exercicios() {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);
  const item = useLocalSearchParams<ItemParams>();

  useEffect(() => {
    if (item && typeof item.name === 'string') {
      getExercises(item.name);
    }
  }, [item]);

  const getExercises = async (bodypart: string) => {
    let data = await fetchExercisesByBodypart(bodypart);
    setExercises(data);
  };
  const bodyPartItem = bodyParts.find(part => part.name === item.name);
  return (
    <ContainerScroll>
      <StatusBar style="light" />
      <Image
        source={bodyPartItem ? bodyPartItem.image : null}
        style={{
          width: wp(100),
          height: hp(45),
          borderBottomLeftRadius: 45,
          borderBottomRightRadius: 45,
        }}
      />

      <VoltarButton onPress={() => router.back()}>
        <Icon name="caret-back-outline" size={25} color="white" />
      </VoltarButton>

      {/* Exercicios  */}
      <ContainerInfo>
        <InfoName>{item.name} exercises</InfoName>

        <ContainerList>
          <ExercisesList data={exercises} />
        </ContainerList>
      </ContainerInfo>
    </ContainerScroll>
  );
}
