import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import SectionTitle from "./SectionTitle";

const Container = styled.View``;

interface IProps {
  title: string;
  items: any;
}

const ScrollingSection: React.FunctionComponent<IProps> = ({
  title,
  items
}) => (
  <Container>
    <SectionTitle title={title} />
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
