import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenNavigationProps } from "../../type";
import { Button, globalStyles } from "../../components";

const Profile = () => {
   const navigation = useNavigation<ScreenNavigationProps>();
   return (
      <SafeAreaView style={globalStyles.container}>
         <View>
            <Text>Please Login or Register</Text>
            <View style={styles.buttonWrapper}>
               <Button
                  text="Login"
                  onPress={() => navigation.navigate("Login")}
                  style={{ flex: 1 }}
               />
               <Button
                  text="Register"
                  variant="outline"
                  onPress={() => {}}
                  style={{ flex: 1 }}
               />
            </View>
         </View>
      </SafeAreaView>
   );
};

export default Profile;

const styles = StyleSheet.create({
   buttonWrapper: {
      marginTop: 20,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      gap: 5,
   },
});
