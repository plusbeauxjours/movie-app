import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Dimensions, View } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import LoadingContainer from "../components/LoadingContainer";
import apiCall from "../apiCall";
import SliderPoster from "../components/SliderPoster";

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = height / 3;

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`;

const HomeScreen: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<any>([]);
  const [latestMovies, setLatestMovies] = useState<any>([]);
  const [upcoming, setUpcoming] = useState<any>([]);
  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const nowPlayingData = await Axios.get(
          apiCall("movie/now_playing", "language=en-US&page=1&region=kr")
        );
        setNowPlaying(nowPlayingData.data.results);
        const latestMoviesData = await Axios.get(
          apiCall("movie/latest", "language=en-US")
        );
        setLatestMovies(latestMoviesData.data.results);
        const upcomingData = await Axios.get(
          apiCall("movie/upcoming", "language=en-US&page=2")
        );
        setUpcoming(upcomingData.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataAsync();
  }, []);
  if (loading) {
    return <LoadingContainer />;
  } else {
    return (
      <Container>
        <Swiper height={SLIDE_HEIGHT} showsPagination={false} autoplay={true}>
          {nowPlaying
            .filter(movie => movie.backdrop_path)
            .map(movie => (
              <View style={{ flex: 1 }} key={movie.id}>
                <SliderPoster
                  posterUrl={movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                />
              </View>
            ))}
        </Swiper>
      </Container>
    );
  }
};

export default HomeScreen;
