import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme";

export const styles = StyleSheet.create({
   container: {
      backgroundColor: COLORS.background,
      flex: 1,
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
   },
   image: {
      alignContent: "center",
      width: SIZES.width,
   },
   stack: {
      position: "absolute",
      bottom: (SIZES.height - 100) / 5,
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      zIndex: 999,
   },
   title: {
      position: "absolute",
      color: COLORS.text,
      fontWeight: "900",
      bottom: (SIZES.height - 50) / 3.2,
      textAlign: "center",
      fontSize: SIZES.xxl,
   },
});
