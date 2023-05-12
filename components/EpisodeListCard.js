import React from 'react'
import { Button, ScrollView, Text, View } from 'react-native';
export const EpisodeListCard = (props) => {
  console.log(props.props)
  return (
 <View>
  <Text>
    <h2>`${props.title}`</h2>
  </Text>
 </View>
  )
}
