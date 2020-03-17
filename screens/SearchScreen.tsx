import React, { useState } from "react";
import styled from "styled-components/native";
import LoadingContainer from "../components/LoadingContainer";

const Container = styled.View`
  background-color: black;
`;

const SearchScreen: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  if (loading) {
    return <LoadingContainer />;
  } else {
    return <Container />;
  }
};

export default SearchScreen;
