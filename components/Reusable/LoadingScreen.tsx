import { Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./reusable.style";

interface LoadingScreenProps {
   text?: string;
}

const LoadingScreen = ({ text }: LoadingScreenProps) => {
   return (
      <SafeAreaView
         style={[
            styles.container,
            {
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               gap: 10,
            },
         ]}
      >
         <ActivityIndicator size={45} color={"#3151ff"} />
         <Text style={{ textAlign: "center" }}>{text ? text : "Loading..."}.</Text>
      </SafeAreaView>
   );
};

export default LoadingScreen;
