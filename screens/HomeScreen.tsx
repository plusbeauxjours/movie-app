import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import LoadingContainer from "../components/LoadingContainer";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  if (loading) {
    return <LoadingContainer />;
  } else {
    return (
      <Container>
        <Text>Movies</Text>
      </Container>
    );
  }
};
