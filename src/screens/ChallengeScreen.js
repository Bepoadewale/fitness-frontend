import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Sound from 'react-native-sound';

const ChallengeScreen = () => {
  useEffect(() => {
    const sound = new Sound('encouragement.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      sound.play();
    });
  }, []);

  return (
    <View>
      <Text>Complete your workout challenge!</Text>
      <Button title="Complete Challenge" onPress={() => alert('Challenge Completed!')} />
    </View>
  );
};

export default ChallengeScreen;