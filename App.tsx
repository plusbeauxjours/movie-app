import React from "react";
import { StatusBar, Platform } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppNavigation from "./navigation/AppNavigation";

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
      return (
        <React.Fragment>
          {Platform.OS === "ios" && <StatusBar barStyle={"light-content"} />}
          <AppNavigation />
        </React.Fragment>
      );
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
        ...Ionicons.font
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
