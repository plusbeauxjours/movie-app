import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import TVScreen from "../screens/TVScreen";
import SearchScreen from "../screens/SearchScreen";
import TabBarIcon from "../components/TabBarIcon";
import { BG_COLOR, TINT_COLOR, INACTIVE_COLOR } from "../colors";
import { HeaderStyles } from "../config";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Movies",
      ...HeaderStyles
    }
  }
});
HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-film` : "md-film"}
    />
  )
};

const TVStack = createStackNavigator({
  TV: {
    screen: TVScreen,
    navigationOptions: {
      title: "TV",
      ...HeaderStyles
    }
  }
});
TVStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
    />
  )
};

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      ...HeaderStyles
    }
  }
});
SearchStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-search` : "md-search"}
    />
  )
};
const TabNavigation = createBottomTabNavigator(
  {
    HomeStack,
    TVStack,
    SearchStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      },
      activeTintColor: TINT_COLOR,
      inactiveTintColor: INACTIVE_COLOR
    }
  }
);

const MainNavigation = createStackNavigator(
  { TabNavigation },
  { headerMode: "none" }
);

export default MainNavigation;
