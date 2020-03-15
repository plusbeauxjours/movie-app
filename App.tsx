import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import * as Icon from "@expo/vector-icons";

interface IProps {}
interface IState {
  loadCompleted: boolean;
}
export default class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      loadCompleted: false
    };
  }

  public render() {
    const { loadCompleted } = this.state;
    if (loadCompleted) {
      return <View />;
    } else {
      return (
        <AppLoading
          startAsync={this._loadAssets}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
  }
  public _loadAssets = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font
      })
    ]);
  };

  public _handleLoadingError = error => {
    console.warn(error);
  };

  public _handleFinishLoading = () => {
    this.setState({ loadCompleted: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
