import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TVScreen from "../screens/TVScreen";
import TabBarIcon from "../components/TabBarIcon";
import { BG_COLOR } from "../colors";

const StachHeaderStyles = {
  headerStyle: {
    backgroundColor: BG_COLOR
  },
  headerTitleStyle: {
    color: "white"
  }
};

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Movies",
      ...StachHeaderStyles
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
      ...StachHeaderStyles
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
      title: "Search",
      ...StachHeaderStyles
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

export default createBottomTabNavigator(
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
      activeTintColor: "white",
      inactiveTintColor: "#7f8c8d"
    }
  }
);
