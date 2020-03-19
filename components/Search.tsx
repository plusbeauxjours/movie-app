import React from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import { GREY_COLOR, INACTIVE_COLOR } from "../colors";

const { width, height } = Dimensions.get("window");

const Input = styled.TextInput`
  background-color: black;
  width: ${Platform.OS === "ios" ? width - 100 : width - 10};
  padding: 10px;
  font-size: 16px;
  margin-left: ${Platform.OS === "ios" ? 0 : "10px"};
  border-radius: 5px;
  color: white;
  text-align: center;
`;

interface IProps {
  value: string;
  onChange: (text: string) => void;
  onSubmitEditing: () => void;
}

const Search: React.FunctionComponent<IProps> = ({
  value,
  onChange,
  onSubmitEditing
}) => (
  <Input
    value={value}
    onChangeText={onChange}
    placeholder="Search here"
    underlineColorAndroid={"black"}
    returnKeyType={"search"}
    onSubmitEditing={onSubmitEditing}
    placeholderTextColor={"white"}
  />
);

export default Search;
