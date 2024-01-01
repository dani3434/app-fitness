import { Stack } from 'expo-router';
import React from 'react';

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="exercicios"
        options={{ presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{ presentation: 'modal' }}
      />
    </Stack>
  );
}
