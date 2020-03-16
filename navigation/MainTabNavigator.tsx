import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TVScreen from "../screens/TVScreen";
import TabBarIcon from "../components/TabBarIcon";
import { BG_COLOR, TINT_COLOR, INACTIVE_COLOR } from "../colors";
import { createAppContainer } from "react-navigation";

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

export default createAppContainer(MainNavigation);
