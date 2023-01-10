import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, StyleSheet, Text, View } from "react-native";

// Screens
import Live from "./Live";
import Podcast from "./Podcast";
import Radio from "./Radio";
import HomeScreen from "./HomeScreen";

//Screen names
const podcastName = "Music";
const liveName = "Live";
const radioName = "Concert";
const logout = "Log Out";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={liveName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === podcastName) {
            iconName = focused ? "mic" : "mic";
          } else if (rn === liveName) {
            iconName = focused ? "radio-button-on" : "radio-button-on";
          } else if (rn === radioName) {
            iconName = focused ? "radio" : "radio-outline";
          } else if (rn === logout) {
            iconName = focused ? "log-out" : "log-out-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#30a5ff",
        inactiveTintColor: "grey",
        labelStyle: { marginTop: 0, fontSize: 15 },
        style: { paddingTop: 0, height: 80 },
      }}
    >
      <Tab.Screen name={podcastName} component={Podcast} />
      <Tab.Screen name={liveName} component={Live} />
      <Tab.Screen name={radioName} component={Radio} />
      <Tab.Screen name={logout} component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;
