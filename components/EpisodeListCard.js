import React from 'react';
import { Button, ScrollView, Text, View, Image, StyleSheet } from 'react-native';

export const EpisodeListCard = ({ episodeNumber, title, airDate, series, season, photo }) => {
  console.log(photo);

  return (
    <View style={styles.container}>
      <Text style={styles.series} numberOfLines={1}>{series}</Text>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.episode}>Season {season} Episode {episodeNumber}</Text>
      <Text style={styles.airDate}>Air date: {airDate}</Text>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    width: '100%',
  },
  series: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
  },
  episode: {
    fontSize: 14,
    marginBottom: 8,
  },
  airDate: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
  },
});
