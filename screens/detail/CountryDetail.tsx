import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";

import { countryProps } from "../../components";
import { globalStyles } from "../../components";

const CountryDetails = () => {
   const route = useRoute<RouteProp<{ item: countryProps }>>();
   const { name, urlImage } = route.params;
   return (
      // <SafeAreaView style={globalStyles.container}>
      <View>
         <Text>{name}</Text>
      </View>
      // </SafeAreaView>
   );
};

export default CountryDetails;

const styles = StyleSheet.create({});
