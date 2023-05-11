import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes, randomEpisode } from '../Redux/actions';

export const EpisodesList = () => {
  let dispatch = useDispatch();
  let episodesRedux = useSelector((state) => state.episodes);
  let randomEpisodeValue = useSelector((state) => state.randomEpisode);
  

  let episodes = episodesRedux?.episodes || [];

  console.log(episodes.length);
  console.log(episodes[0])

  const episodeRandom = () => {
    if (episodes.length > 0) {
      let episodeMathRandom = Math.floor(Math.random() * episodes.length);
      console.log(episodeMathRandom);
      dispatch(randomEpisode(episodeMathRandom));
    }
  };

  if (episodes.length === 0) {
    return null; // No renderizar nada si episodes está vacío
  }

  return (
    <View>
      <ScrollView>
        <Button title="Engage" onPress={() => episodeRandom()}></Button>
      </ScrollView>
    </View>
  );
};


