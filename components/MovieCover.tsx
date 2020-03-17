import React from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 120px;
  height: 160px;
  margin-bottom: 10px;
  border-radius: 2.5px;
`;

interface IProps {
  imageUrl: string;
}

const MovieCover: React.FunctionComponent<IProps> = ({ imageUrl }) => (
  <Image source={{ uri: imageUrl }} resizeMode={"contain"} />
);
export default MovieCover;
