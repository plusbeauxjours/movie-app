import React from "react";
import styled from "styled-components/native";
import {
  withNavigation,
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
import { apiImage } from "../apiCall";
import { GREY_COLOR } from "../colors";
import MovieCover from "./MovieCover";

const Touchable = styled.TouchableWithoutFeedback``;

const Container = styled.View`
  margin-right: 25px;
  width: 120px;
  align-items: center;
`;

const CircleImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  height: 20px;
`;

const Score = styled.Text`
  color: ${GREY_COLOR};
  font-size: 10px;
`;

interface IProps {
  coverUrl: string;
  title: string;
  rating: string;
  circle?: boolean;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Movie: React.FunctionComponent<IProps> = ({
  navigation,
  coverUrl,
  title,
  rating,
  circle
}) => (
  <Touchable
    onPress={() =>
      navigation.navigate("Detail", {
        title,
        posterUrl: coverUrl,
        rating
      })
    }
  >
    <Container>
      {circle ? (
        <CircleImage source={{ uri: apiImage(coverUrl) }} />
      ) : (
        <MovieCover imageUrl={apiImage(coverUrl)} />
      )}
      <Title>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Score>
        ⭐️ {rating}
        /10
      </Score>
    </Container>
  </Touchable>
);

export default withNavigation(Movie);
