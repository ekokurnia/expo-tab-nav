import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnBoarding } from "./screens";
import ButtonTabNavigation from "./navigation/ButtonTabNavigation";

// Ref : https://stackoverflow.com/questions/68779417/navigation-navigatehome-showing-some-error-in-typescript
export type RootStackParamList = {
   Onboard: undefined;
   Main: undefined;
};

const Stack = createNativeStackNavigator();

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
               component={ButtonTabNavigation}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
