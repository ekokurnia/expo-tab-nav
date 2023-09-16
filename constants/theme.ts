import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
   // primary: "#8497fd",
   primary: "#3151ff",
   secondary: "#ffb32c",
   background: "#faeed8",
   primaryMuted: "#778aff",
   text: "#110d0b",
};
const SIZES = {
   xs: 10,
   sn: 12,
   md: 16,
   lg: 20,
   xl: 24,
   xxl: 30,
   xxxl: 44,
   width,
   height,
};

export { SIZES, COLORS };
