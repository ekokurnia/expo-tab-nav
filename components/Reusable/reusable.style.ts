import { StyleSheet, ViewStyle } from "react-native";

const globalStyles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 5,
      paddingTop: 15,
      marginHorizontal: 15,
   },
   rowWrap: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   title1: {
      fontSize: 19,
      fontWeight: "bold",
   },
});

export default globalStyles;
