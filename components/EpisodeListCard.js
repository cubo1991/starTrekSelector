import React from 'react'
import { Button, ScrollView, Text, View } from 'react-native';
export const EpisodeListCard = ({episodeNumber, title, airDate,  series,  season}) => {
  

  return (
 <View>
  <Text> Serie: {series}</Text>
  <Text> Title: {title} </Text>
  <Text> {season} Episode {episodeNumber}</Text>
  <Text> Air date: {airDate}</Text>
  <Text></Text>
 </View>
  )
}
