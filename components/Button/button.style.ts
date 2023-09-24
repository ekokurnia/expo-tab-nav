import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
   text: {
      textAlign: "center",
      color: "#fff",
      fontWeight: "600",
      fontSize: SIZES.md,
   },
   button: {
      height: 45,
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
   },
   primaryButton: {
      backgroundColor: COLORS.primary,
   },
   secondaryButton: {
      backgroundColor: COLORS.secondary,
   },
   outlineButton: {
      borderColor: COLORS.primary,
      borderWidth: 2,
   },
});
