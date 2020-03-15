import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TVScreen from "../screens/TVScreen";
import TabBarIcon from "../components/TabBarIcon";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? `ios-film` : "md-film"}
        />
      )
    }
  }
);

const TVStack = createStackNavigator(
  {
    Home: {
      screen: TVScreen
    }
  },
  {
    navigationOptions: {
      tabBarLabel: "TV",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? `ios-tv` : "md-tv"}
        />
      )
    }
  }
);

const SearchStack = createStackNavigator(
  {
    Home: {
      screen: SearchScreen
    }
  },
  {
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? `ios-tv` : "md-tv"}
        />
      )
    }
  }
);

export default createBottomTabNavigator(
  {
    HomeStack,
    TVStack,
    SearchStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#2c3e50"
      },
      activeTintColor: "white",
      inactiveTintColor: "#7f8c8d"
    }
  }
);
