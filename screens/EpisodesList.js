 import React, { useEffect } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../Redux/actions'

 
 export const EpisodesList = () => {

      
const dispatch = useDispatch()
let episodes = useSelector((state) => state.episodes)
useEffect(() => {
 dispatch(getEpisodes())
}, []);
console.log(episodes) 
   return (
    <View>
        <ScrollView>
        <Button title="Engage" onPress={() => alert('Simple Button pressed')} ></Button>
        </ScrollView>
        
    </View>
   )
 }
 