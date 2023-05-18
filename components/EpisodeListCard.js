import React from 'react'
// import { Image } from 'expo-image';
import { Button, ScrollView, Text, View, Image } from 'react-native';
export const EpisodeListCard = ({episodeNumber, title, airDate,  series,  season, photo}) => {


  return (
 <View>
  <Text> Serie: {series}</Text>
  <Text> Title: {title} </Text>
  <Text> {season} Episode {episodeNumber}</Text>
  <Text> Air date: {airDate}</Text>
  <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
  <Text></Text>
 </View>
  )
}
