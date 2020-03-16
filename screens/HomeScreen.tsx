import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Dimensions, View } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import LoadingContainer from "../components/LoadingContainer";
import apiCall from "../apiCall";
import SliderPoster from "../components/SliderPoster";
import ScrollingSection from "../components/ScrollingSection";
import MovieCircle from "../components/MovieCircle";

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = height / 3;

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`;

const HomeScreen: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<any>([]);
  const [popularMovies, setPopularMovies] = useState<any>([]);
  const [upcoming, setUpcoming] = useState<any>([]);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const nowPlayingData = await Axios.get(
          apiCall("movie/now_playing", "language=en-US&page=1")
        );
        const upcomingData = await Axios.get(
          apiCall("movie/upcoming", "language=en-US&page=2")
        );
        const popularMoviesData = await Axios.get(
          apiCall("movie/popular", "language=en-US&page=1")
        );
        setNowPlaying(nowPlayingData.data.results);
        setUpcoming(upcomingData.data.results);
        setPopularMovies(popularMoviesData.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDataAsync();
  }, []);
  if (loading) {
    return <LoadingContainer />;
  } else {
    return (
      <Container>
        <Swiper
          height={SLIDE_HEIGHT}
          showsPagination={false}
          autoplay={true}
          autoplayTimeout={3}
        >
          {nowPlaying
            .filter(movie => movie.backdrop_path && movie.poster_path)
            .map(movie => (
              <View style={{ flex: 1 }} key={movie.id}>
                <SliderPoster
                  posterUrl={movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                  coverUrl={movie.poster_path}
                  rating={movie.vote_average}
                />
              </View>
            ))}
        </Swiper>
        <ScrollingSection
          title={"Popular Movies"}
          items={popularMovies
            .filter(movie => movie.poster_path)
            .map(movie => (
              <MovieCircle
                key={movie.id}
                coverUrl={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
              />
            ))}
        />
      </Container>
    );
  }
};

export default HomeScreen;
