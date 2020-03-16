import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 50px;
`;

const Title = styled.Text`
  padding: 0px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

interface IProps {
  title: string;
  items: any;
}

const ScrollingSection: React.FunctionComponent<IProps> = ({
  title,
  items
}) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {items}
    </ScrollView>
  </Container>
);

export default ScrollingSection;
