import React from 'react'
import { Button, Text, View} from 'react-native'


export const Home = (props) => {
 
  return (
<View>
<Button title='Random Episode' onPress={() => props.navigation.navigate('Episode')}></Button>

 </View>
  )
}
