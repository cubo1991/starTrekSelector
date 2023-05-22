import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import loader from '../assets/loading.gif';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={loader} style={styles.loader} />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: width,
    height: height,
  },
});
