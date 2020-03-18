import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import LoadingContainer from "../components/LoadingContainer";
import { apiImage } from "../apiCall";

const { width, height } = Dimensions.get("window");

const Container = styled.ScrollView`
  background-color: black;
`;

const Backdrop = styled.Image`
  height: ${height / 3};
  width: ${width};
  flex: 1;
`;

interface IState {
  loading: boolean;
  coverUrl: string;
  overview: string;
  posterUrl: string;
  rating: string;
  title: string;
}

export default class DetailScreen extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { coverUrl, overview, posterUrl, rating, title }
        }
      }
    } = props;
    this.state = {
      loading: true,
      coverUrl,
      overview,
      posterUrl,
      rating,
      title
    };
  }
  static navigationOptions = ({ navigation }) => {
    const {
      state: {
        params: { title }
      }
    } = navigation;
    return {
      title
    };
  };
  render() {
    const {
      loading,
      coverUrl,
      overview,
      posterUrl,
      rating,
      title
    } = this.state;
    return (
      <Container>
        <Backdrop source={{ uri: apiImage(posterUrl, 500) }} />
      </Container>
    );
  }
}
