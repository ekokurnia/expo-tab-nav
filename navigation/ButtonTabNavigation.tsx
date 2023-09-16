import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NavigationBar from "expo-navigation-bar";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/theme";
import { Home, Chat, Location, Profile } from "../screens";

NavigationBar.setBackgroundColorAsync("#fff");
const Tab = createBottomTabNavigator();
const ButtonTabNavigation = () => {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.primaryMuted,
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarStyle: styles.tabBar,
               tabBarShowLabel: false,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <Ionicons
                     name={focused ? "home" : "home-outline"}
                     color={focused ? COLORS.primary : COLORS.primaryMuted}
                     size={25}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Location"
            component={Location}
            options={{
               tabBarStyle: styles.tabBar,
               tabBarShowLabel: false,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <Ionicons
                     name={focused ? "location" : "location-outline"}
                     color={focused ? COLORS.primary : COLORS.primaryMuted}
                     size={25}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Chat"
            component={Chat}
            options={{
               tabBarStyle: styles.tabBar,
               tabBarShowLabel: false,
               headerShown: false,
               tabBarIcon: ({ focused, size }) => (
                  <Ionicons
                     name={focused ? "chatbox" : "chatbox-outline"}
                     color={focused ? COLORS.primary : COLORS.primaryMuted}
                     size={size}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarStyle: styles.tabBar,
               tabBarShowLabel: false,
               headerShown: false,
               tabBarIcon: ({ focused, size }) => (
                  <Ionicons
                     name={focused ? "person" : "person-outline"}
                     color={focused ? COLORS.primary : COLORS.primaryMuted}
                     size={size}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const styles = StyleSheet.create({
   tabBar: {
      height: 70,
      paddingHorizontal: 10,
      opacity: 0.9,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      position: "absolute",
      // left: 5,
      // right: 5,
      // bottom: 10,
   },
});

export default ButtonTabNavigation;
