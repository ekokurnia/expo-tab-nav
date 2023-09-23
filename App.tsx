import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { countryProps } from "./components";
import { RootStackParamList } from "./type";
// Screens
import { OnBoarding, CountryDetails, Search, Recomendations } from "./screens";
import TabNavigation from "./navigation/TabNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
   const [fontLoaded] = useFonts({
      light: require("./assets/fonts/light.ttf"),
      regular: require("./assets/fonts/regular.ttf"),
      medium: require("./assets/fonts/medium.ttf"),
      semibold: require("./assets/fonts/semibold.ttf"),
      bold: require("./assets/fonts/bold.ttf"),
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontLoaded]);

   if (!fontLoaded) {
      return null;
   }
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Onboard"
               component={OnBoarding}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Main"
               component={TabNavigation}
               options={{ headerShown: false, animation: "fade" }}
            />
            <Stack.Screen
               name="Search"
               component={Search}
               options={{
                  headerShown: true,
                  animation: "fade_from_bottom",
               }}
            />
            <Stack.Screen
               name="CountryDetails"
               component={CountryDetails}
               options={({ route }: { route: any }) => ({
                  headerShown: true,
                  title: route.params?.name ?? "Country Details",
                  animation: "fade_from_bottom",
               })}
            />
            <Stack.Screen
               name="Recomendations"
               component={Recomendations}
               options={{
                  headerShown: true,
                  title: "Recomendations",
                  animation: "fade_from_bottom",
               }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
