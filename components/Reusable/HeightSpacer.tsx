import React from "react";
import { View } from "react-native";

interface HeightSpacerProps {
   height: number;
}
const HeightSpacer = ({ height }: HeightSpacerProps) => {
   return <View style={{ height }} />;
};

export default HeightSpacer;
