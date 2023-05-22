import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes, randomEpisode } from '../Redux/actions';
import { EpisodeListCard } from '../components/EpisodeListCard';
import { SeasonSelect } from '../components/SeasonSelect';

export const EpisodesList = () => {
  let dispatch = useDispatch();
  let episodesRedux = useSelector((state) => state.episodes);
  let episodeFiltered = useSelector((state) => state.filteredEpisodes);
  let randomEpisodeValue = useSelector((state) => state.randomEpisode);
  let season = useSelector((state) => state.season);
  let series = useSelector((state) => state.series);
  const [episode, setEpisode] = useState(null);
  const [infoSerie, setInfoSerie] = useState(null);

  useEffect(() => {
    let chooseSerie;
    if (episode) {
      if (series[2]) {
        series[2].Title = 'Star Trek: The Original Series';
      }
      chooseSerie = series.find((e) => e.Title === episode.series.title);
      setInfoSerie(chooseSerie);
    }
  }, [episode, series]);

  const episodeRandom = () => {
    if (episodesRedux.length > 0 && season === 'all') {
      let episodeMathRandom = Math.floor(Math.random() * episodesRedux.length);
      dispatch(randomEpisode(episodeMathRandom));
      setEpisode(episodesRedux[episodeMathRandom]);
    }
    if (episodeFiltered.length > 0) {
      let episodeMathRandom = Math.floor(Math.random() * episodeFiltered.length);
      dispatch(randomEpisode(episodeMathRandom));
      setEpisode(episodeFiltered[episodeMathRandom]);
    }
  };

  if (randomEpisodeValue.length === 0) {
    return null; // No renderizar nada si episodes está vacío
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SeasonSelect />
        {episode ? (
          <EpisodeListCard
            title={episode.title}
            episodeNumber={episode.episodeNumber}
            airDate={episode.usAirDate}
            series={episode.series.title}
            season={episode.season.title}
            photo={infoSerie?.Poster}
          />
        ) : (
          <Text>Press to boldly go where no one has gone before</Text>
        )}
      </ScrollView>
      <View style={{ width: '100%', paddingHorizontal: 20, marginBottom: 20 }}>
        <Button title="Engage" onPress={() => episodeRandom()} />
      </View>
    </View>
  );
};
