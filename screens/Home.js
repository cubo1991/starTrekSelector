import React from 'react';
import { Button, Text, View } from 'react-native';

export const Home = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Random Episode"
        onPress={() => props.navigation.navigate('Episode')}
      />
    </View>
  );
};
