import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 0px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

interface IProps {
  title: string;
}

const SectionTitle: React.FunctionComponent<IProps> = ({ title }) => {
  return <Title> {title}</Title>;
};

export default SectionTitle;
