import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { globalStyles } from "../../components";

const Location = () => {
   return (
      <SafeAreaView style={globalStyles.container}>
         <View>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
         </View>
      </SafeAreaView>
   );
};

export default Location;

