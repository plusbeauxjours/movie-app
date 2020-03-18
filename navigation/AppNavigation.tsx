import { createStackNavigator } from "react-navigation-stack";
import MainTabNavigator from "./MainTabNavigator";
import DetailScreen from "../screens/DetailScreen";
import { HeaderStyles } from "../config";
import { createAppContainer } from "react-navigation";

const AppNavigation = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: { header: null }
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    navigationOptions: {
      ...HeaderStyles
    }
  }
);

export default createAppContainer(AppNavigation);
