import React from "react";
import styled from "styled-components/native";
import MovieCover from "./MovieCover";
import { apiImage } from "../apiCall";
import { INACTIVE_COLOR, GREY_COLOR } from "../colors";
import { MONTHS } from "../config";

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
  coverUrl: string;
  title: string;
  overview: string;
  releaseDate?: string;
}

const MovieDetailed: React.FunctionComponent<IProps> = ({
  coverUrl,
  title,
  overview,
  releaseDate = ""
}) => {
  const date = new Date(
    releaseDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
  );
  return (
    <Container>
      <MovieCover imageUrl={apiImage(coverUrl)} />
      <Content>
        <Title>{title}</Title>
        {releaseDate ? (
          <ReleaseDate>{`${date.getDate()} ${
            MONTHS[date.getMonth()]
          } ${date.getFullYear()}
        `}</ReleaseDate>
        ) : null}
        <Overview>
          {overview.length > 90 ? `${overview.substring(0, 89)}...` : overview}
        </Overview>
      </Content>
    </Container>
  );
};

export default MovieDetailed;