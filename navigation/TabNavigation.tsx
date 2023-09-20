import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NavigationBar from "expo-navigation-bar";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/theme";
import { TabIcon } from "../components";
import { Home, Chat, Location, Profile } from "../screens";

NavigationBar.setBackgroundColorAsync("#fff");
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.primaryMuted,
            tabBarShowLabel: false,
         }}
      >
         {/* Home */}
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarStyle: styles.tabBar,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     title="Home"
                     focused={focused}
                     icon={
                        <Ionicons
                           name={focused ? "home" : "home-outline"}
                           color={focused ? COLORS.primary : COLORS.primaryMuted}
                           size={25}
                        />
                     }
                  />
               ),
            }}
         />
         {/* Location */}
         <Tab.Screen
            name="Location"
            component={Location}
            options={{
               tabBarStyle: styles.tabBar,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     title="Location"
                     focused={focused}
                     icon={
                        <Ionicons
                           name={focused ? "location" : "location-outline"}
                           color={focused ? COLORS.primary : COLORS.primaryMuted}
                           size={25}
                        />
                     }
                  />
               ),
            }}
         />
         {/* Chats */}
         <Tab.Screen
            name="Chat"
            component={Chat}
            options={{
               tabBarStyle: styles.tabBar,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     title="Chats"
                     focused={focused}
                     icon={
                        <Ionicons
                           name={focused ? "chatbox" : "chatbox-outline"}
                           color={focused ? COLORS.primary : COLORS.primaryMuted}
                           size={25}
                        />
                     }
                  />
               ),
            }}
         />
         {/* Profile */}
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarStyle: styles.tabBar,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon
                     title="Profile"
                     focused={focused}
                     icon={
                        <Ionicons
                           name={focused ? "person" : "person-outline"}
                           color={focused ? COLORS.primary : COLORS.primaryMuted}
                           size={25}
                        />
                     }
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
      paddingTop: 10,
      paddingBottom: 10,
   },
});

export default TabNavigation;
