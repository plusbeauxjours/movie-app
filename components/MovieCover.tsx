import React from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 110px;
  height: 160px;
  margin-bottom: 10px;
  border-radius: 2.5px;
`;

interface IProps {
  imageUrl: string;
}

const MovieCover: React.FunctionComponent<IProps> = ({ imageUrl }) => (
  <Image source={{ uri: imageUrl }} resizeMode={"stretch"} />
);
export default MovieCover;
