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

console.log(episode)
  return (
    <View>
      <ScrollView>
       {episode ? <EpisodeListCard title={episode.title} episodeNumber={episode.episodeNumber} airDate={episode.usAirDate} series={episode.series.title} season={episode.season.title} /> : <Text>Press to boldly go where no onehas gone before</Text>}
        <Button title="Engage" onPress={() => episodeRandom()}></Button>
      </ScrollView>
    </View>
  );
};


