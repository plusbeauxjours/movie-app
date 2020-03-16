import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Text } from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import LoadingContainer from "../components/LoadingContainer";
import apiCall from "../apiCall";
import SliderPoster from "../components/SliderPoster";

const { height } = Dimensions.get("window");

const SLIDE_HEIGHT = height / 3;

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`;

interface IResults {
  results?: string;
}
interface IFetchData {
  data?: IResults;
}

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<any>([]);
  const [latestMovies, setLatestMovies] = useState<any>([]);
  const [upcoming, setUpcoming] = useState<Array<string>>([]);
  useEffect(() => {
    const fetchDataAsync = async (
      url: string,
      query: string
    ): Promise<IFetchData> => {
      return await Axios.get(apiCall(url, query));
    };
    try {
      const {
        data: { results: nowPlaying }
      } = fetchDataAsync(
        "movie/now_playing",
        "language=en-US&page=1&region=kr"
      );
      {
        nowPlaying && console.log(nowPlaying);
      }
      const {
        data: { results: latestMovies }
      } = fetchDataAsync("movie/latest", "language=en-US");
      const {
        data: { results: upcoming }
      } = fetchDataAsync("movie/upcoming", "language=en-US&page=2");
      console.log(nowPlaying);
      setLoading(false);
      setNowPlaying(nowPlaying);
      setLatestMovies(latestMovies);
      setUpcoming(upcoming);
    } catch (error) {
      console.log(error);
    }
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
          index={-1}
        >
          {nowPlaying
            .filter(movie => movie.backdrop_path)
            .map(movie => (
              <SliderPoster
                key={movie.id}
                posterUrl={movie.backdrop_path}
                title={movie.original_title}
                overview={movie.overview}
              />
            ))}
        </Swiper>
      </Container>
    );
  }
};
