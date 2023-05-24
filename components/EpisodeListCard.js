import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export const EpisodeListCard = ({ episodeNumber, title, airDate, series, season, photo }) => {
  const [loaded] = useFonts({
    StarNext: require('../assets/fonts/StarNext.otf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!loaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.series} numberOfLines={1}>{series}</Text>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.episode}>Season {season} Episode {episodeNumber}</Text>
      <Text style={styles.airDate}>Air date: {airDate}</Text>
      <Image source={{ uri: photo }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    width: '100%',
  },
  series: {
    fontSize: 18,
     marginBottom: 8,
    overflow: 'hidden',
    fontFamily: 'StarNext',
    color:'#0047AB'
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
    color:'#0047AB'
  },
  episode: {
    fontSize: 14,
    marginBottom: 8,
    color:'#0047AB'
  },
  airDate: {
    fontSize: 14,
    marginBottom: 8,
    color:'#0047AB'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
  },
});
