import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes, randomEpisode } from '../Redux/actions';
import { EpisodeListCard } from '../components/EpisodeListCard';


export const EpisodesList = () => {
  let dispatch = useDispatch();
  let episodesRedux = useSelector((state) => state.episodes);
  let randomEpisodeValue = useSelector((state) => state.randomEpisode);
  const [episode, setEpisode] = useState(null);

  
console.log(episode)

  const episodeRandom = () => {
    if (episodesRedux.length > 0) {
      let episodeMathRandom = Math.floor(Math.random() * episodesRedux.length);
      console.log(episodeMathRandom);
      dispatch(randomEpisode(episodeMathRandom));
      setEpisode(episodesRedux[episodeMathRandom])
    }
  };

  if (randomEpisodeValue.length === 0) {
    return null; // No renderizar nada si episodes está vacío
  }

  return (
    <View>
      <ScrollView>
        <EpisodeListCard props={episode} />
        <Button title="Engage" onPress={() => episodeRandom()}></Button>
      </ScrollView>
    </View>
  );
};


