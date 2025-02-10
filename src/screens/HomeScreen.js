import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Fitness App!</Text>
      <Button
        title="Start Challenge"
        onPress={() => navigation.navigate('Challenge')}
      />
    </View>
  );
}