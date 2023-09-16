import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
   container: ViewStyle;
   rowWrap: (
      justifyContent: "space-between" | "center" | "flex-start" | "flex-end"
   ) => ViewStyle;
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 5,
      marginHorizontal: 15,
   },
   rowWrap: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
});

export default styles;
