import React, { useState } from "react";
import Axios from "axios";
import { Text } from "react-native";
import styled from "styled-components";
import LoadingContainer from "../components/LoadingContainer";
import apiCall from "../apiCall";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<any>([]);
  const [latestMovies, setLatestMovies] = useState<any>([]);
  const [upcoming, setUpcoming] = useState<any>([]);
  if (loading) {
    return <LoadingContainer />;
  } else {
    return (
      <Container>
        <Text>Movies</Text>
      </Container>
    );
  }
  useEffect(async () => {
    try {
      const {
        data: { results: nowPlaying }
      } = await Axios.get(
        apiCall("movie/now_playing", "language=en-US&page=1&region=kr")
      );
      const {
        data: { results: latestMovies }
      } = await Axios.get(apiCall("movie/latest", "language=en-US"));
      const {
        data: { results: upcoming }
      } = await Axios.get(apiCall("movie/upcoming", "language=en-US&page=2"));
      this.setState({
        nowPlaying,
        latestMovies,
        upcoming,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
};
