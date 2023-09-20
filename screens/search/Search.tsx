import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { globalStyles } from "../../components";

const Search = () => {
   return (
      <SafeAreaView style={globalStyles.container}>
         <View>
            <Text>Search</Text>
         </View>
      </SafeAreaView>
   );
};

export default Search;

const styles = StyleSheet.create({});
