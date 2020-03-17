import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components/native";
import LoadingContainer from "components/LoadingContainer";
import apiCall from "../apiCall";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const TVScreen: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [airingToday, setAiringToday] = useState<any>([]);
  const [toRated, setToRated] = useState<any>([]);
  const [airingThisWeek, setAiringThisWeek] = useState<any>([]);
  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const airingToday = await Axios.get(
          apiCall("tv/airing_today", "language=en-US&page=1")
        );
        const toRated = await Axios.get(
          apiCall("tv/top_rated", "language=en-US&page=1")
        );
        const airingThisWeek = await Axios.get(
          apiCall("tv/on_the_air", "language=en-US&page=1")
        );
        setAiringToday(airingToday.data.results);
        setToRated(toRated.data.results);
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
  return <Container />;
};

export default TVScreen;
