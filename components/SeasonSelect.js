import React, { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { episodeSeason } from '../Redux/actions';
import { useDispatch } from 'react-redux';


export const SeasonSelect = () => {
    const [selectedSeason, setselectedSeason] = useState();
let dispatch = useDispatch()

useEffect(() => {
  if(selectedSeason){
  dispatch(episodeSeason(selectedSeason))}
}, [selectedSeason]);
  return (
 <Picker
  selectedValue={selectedSeason}  
style={{backgroundColor: 'black', borderColor: '#0047AB', color:'#0047AB'}}
  onValueChange={(itemValue, itemIndex) =>
   [ setselectedSeason(itemValue),
   ]
  }>
    <Picker.Item label="All" color='#0047AB' value="all" />
  <Picker.Item label="The Original Serie"  color='#0047AB' value="SEMA0000097474" />
  <Picker.Item label="The Animated Series"  color='#0047AB' value="SEMA0000034504" />
  <Picker.Item label="The Next Generation"  color='#0047AB' value="SEMA0000062876" />  
  <Picker.Item label="Deep Space Nine"  color='#0047AB' value="SEMA0000073238" />
  <Picker.Item label="Voyager"  color='#0047AB' value="SEMA0000000029" />
  <Picker.Item label="Enterprise"  color='#0047AB' value="SEMA0000103435" />
  <Picker.Item label="Discovery"  color='#0047AB' value="SEMA0000201665" />
  <Picker.Item label="Picard"  color='#0047AB' value="SEMA0000238047" />
  <Picker.Item label="Lower Decks"  color='#0047AB' value="SEMA0000240166" />
  <Picker.Item label="Prodigy"  color='#0047AB' value="SEMA0000242790" />
  <Picker.Item label="Strange New Worlds"  color='#0047AB' value="SEMA0000255370" />  
</Picker>

  )
}

