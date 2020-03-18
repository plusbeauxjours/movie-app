import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import MovieCover from "./MovieCover";
import {
  withNavigation,
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
import { apiImage } from "../apiCall";
import { INACTIVE_COLOR, GREY_COLOR } from "../colors";
import { formatDate } from "../config";

const Container = styled.View`
  padding: 0 20px;
  margin-bottom: 10px;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.View`
  margin-left: 20px;
  width: 70%;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
  width: 90%;
`;
const ReleaseDate = styled.Text`
  color: ${INACTIVE_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  margin-bottom: 10px;
  color: ${GREY_COLOR};
  width: 90%;
  font-weight: 300;
`;

interface IProps {
  id: string;
  coverUrl: string;
  title: string;
  overview: string;
  isMovie?: boolean;
  releaseDate?: string;
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default withNavigation<IProps>(
  ({
    id,
    coverUrl,
    title,
    overview,
    isMovie = true,
    releaseDate = "",
    navigation
  }) => {
    const date = new Date(
      releaseDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
    );
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Detail", {
            isMovie,
            id,
            coverUrl,
            title,
            overview
          })
        }
      >
        <Container>
          <MovieCover imageUrl={apiImage(coverUrl)} />
          <Content>
            <Title>{title}</Title>
            {releaseDate ? (
              <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
            ) : null}
            <Overview>
              {overview.length > 90
                ? `${overview.substring(0, 89)}...`
                : overview}
            </Overview>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
);
