import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-componenets";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color="white" />
  </Container>
);
