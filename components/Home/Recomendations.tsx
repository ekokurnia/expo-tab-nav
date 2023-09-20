import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import globalStyles from "../Reusable/reusable.style";

const Recomendations = () => {
   return (
      <View>
         <View style={styles.title}>
            <Text style={globalStyles.title1}>Recomendations</Text>
            <Ionicons name="list" size={25} />
         </View>
      </View>
   );
};

export default Recomendations;

const styles = StyleSheet.create({
   title: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
});
