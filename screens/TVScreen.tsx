import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components/native";
import LoadingContainer from "../components/LoadingContainer";
import apiCall from "../apiCall";
import ScrollingSection from "../components/ScrollingSection";
import Movie from "../components/Movie";
import SectionTitle from "../components/SectionTitle";
import MovieDetailed from "../components/MovieDetailed";

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`;

const RowContainer = styled.View`
  margin-top: 30px;
`;

const TVScreen: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [airingToday, setAiringToday] = useState<any>([]);
  const [topRated, setTopRated] = useState<any>([]);
  const [airingThisWeek, setAiringThisWeek] = useState<any>([]);
  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const airingToday = await Axios.get(
          apiCall("tv/airing_today", "language=en-US&page=1")
        );
        const topRated = await Axios.get(
          apiCall("tv/top_rated", "language=en-US&page=1")
        );
        const airingThisWeek = await Axios.get(
          apiCall("tv/on_the_air", "language=en-US&page=2")
        );
        setAiringToday(airingToday.data.results);
        setTopRated(topRated.data.results);
        setAiringThisWeek(airingThisWeek.data.results);
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
  }
  return (
    <Container contentContainerStyle={{ paddingBottom: 50 }}>
      <RowContainer>
        <ScrollingSection
          title={"Airing Today"}
          items={airingToday
            .filter(show => show.poster_path)
            .map(show => (
              <Movie
                key={show.id}
                coverUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                id={show.id}
                isMovie={false}
              />
            ))}
        />
      </RowContainer>
      <RowContainer>
        <ScrollingSection
          title={"Airing this Week"}
          items={airingThisWeek
            .filter(show => show.poster_path)
            .map(show => (
              <Movie
                key={show.id}
                coverUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                id={show.id}
                isMovie={false}
              />
            ))}
        />
      </RowContainer>
      <RowContainer>
        <SectionTitle title={"Top Rated"} />
        {topRated
          .filter(show => show.poster_path)
          .map(show => (
            <MovieDetailed
              key={show.id}
              coverUrl={show.poster_path}
              title={show.original_name}
              overview={show.overview}
              id={show.id}
              isMovie={false}
            />
          ))}
      </RowContainer>
    </Container>
  );
};

export default TVScreen;
