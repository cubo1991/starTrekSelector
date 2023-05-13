import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';


export const SeasonSelect = () => {
    const [selectedSeason, setselectedSeason] = useState();

   console.log(selectedSeason)
  return (
 <Picker
  selectedValue={selectedSeason}
  onValueChange={(itemValue, itemIndex) =>
    setselectedSeason(itemValue)
  }>
    <Picker.Item label="All" value="null" />
  <Picker.Item label="The Original Serie" value="SEMA0000097474" />
  <Picker.Item label="The Animated Series" value="SEMA0000034504" />
  <Picker.Item label="The Next Generation" value="SEMA0000062876" />  
  <Picker.Item label="Deep Space Nine" value="SEMA0000073238" />
  <Picker.Item label="Voyager" value="SEMA0000000029" />
  <Picker.Item label="Enterprise" value="SEMA0000103435" />
  <Picker.Item label="Discovery" value="SEMA0000201665" />
  <Picker.Item label="Picard" value="SEMA0000238047" />
  <Picker.Item label="Lower Decks" value="SEMA0000240166" />
  <Picker.Item label="Prodigy" value="SEMA0000242790" />
  <Picker.Item label="Strange New Worlds" value="SEMA0000255370" />  
</Picker>

  )
}
