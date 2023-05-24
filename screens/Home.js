import React,{useEffect} from 'react';
import * as Font from 'expo-font';
import { Button, Text, View } from 'react-native';

export const Home = (props) => {
  


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#000000' }}>
   
      <Button
        style={{ fontFamily: 'StarNext', fontSize: 24 }}
        title="Random Episode"
        onPress={() => props.navigation.navigate('Episode')}
      />
    </View>
  );
};
