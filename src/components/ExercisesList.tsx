import React from 'react';
import {
  AnimatedContainerExercisesItem,
  ButtonExercisesItem,
  Container,
  Lista,
} from './styles/exerciseslist';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Text, View } from 'react-native';
import { Router } from 'expo-router/build/types';
import { FadeInDown } from 'react-native-reanimated';

interface ExecisesList {
  name: string;
  gifUrl: string;
}

type ExercisesList = ExecisesList[];

interface ExerciseCardProps {
  router: Router;
  item: ExecisesList;
  index: number;
}

export default function ExercisesList({ data }: { data: ExercisesList }) {
  const router = useRouter();
  return (
    <Container>
      <Lista
        data={data}
        numColumns={2}
        keyExtractor={(item: unknown) => {
          const itemList = item as ExecisesList;
          return itemList.name;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard
            index={index}
            item={item as ExecisesList}
            router={router}
          />
        )}
      />
    </Container>
  );
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ router, item, index }) => {
  return (
    <AnimatedContainerExercisesItem
      entering={FadeInDown.duration(400)
        .delay(index * 300 + 200)
        .springify()
        .damping(3)}
    >
      <ButtonExercisesItem
        onPress={() =>
          router.push({ pathname: '/exerciseDetails', params: item })
        }
      >
        <View
          style={{
            backgroundColor: '#e5e5e5',
            borderRadius: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
          }}
        >
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
          />
        </View>
        <Text
          style={{
            fontSize: hp(1.7),
            color: '#404040',
            fontWeight: '600',
            marginLeft: 4,
          }}
        >
          {item?.name?.length > 20 ? item.name.slice(0, 18) + '...' : item.name}
        </Text>
      </ButtonExercisesItem>
    </AnimatedContainerExercisesItem>
  );
};
