import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
   Onboard: undefined;
   Main: undefined;
   Search: undefined;
   CountryDetails: undefined;
   Recomendations: undefined;
   Login: undefined;
};

export type ScreenNavigationProps = NativeStackScreenProps<
   RootStackParamList,
   "Onboard",
   "Main",
   "Search",
   "CountryDetails",
   "Recomendations",
   "Login"
>;
