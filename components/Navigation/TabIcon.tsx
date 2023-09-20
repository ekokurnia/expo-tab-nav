import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/theme";

interface TabIconProps {
   focused: boolean;
   icon: React.JSX.Element;
   title: string;
}
const TabIcon = ({ focused, icon, title }: TabIconProps) => {
   return (
      <View style={styles.wrapper}>
         {icon}
         <Text
            style={[
               focused ? styles.tabBarLabelFocused : styles.tabBarLabel,
               {
                  color: focused ? COLORS.primary : COLORS.primaryMuted,
                  textAlign: "center",
               },
            ]}
         >
            {title}
         </Text>
      </View>
   );
};

export default TabIcon;

const styles = StyleSheet.create({
   wrapper: {
      display: "flex",
      paddingVertical: 10,
      alignItems: "center",
   },
   tabBarLabel: {
      fontSize: 11,
      fontWeight: "400",
   },
   tabBarLabelFocused: {
      fontSize: 11,
      fontWeight: "800",
   },
});
