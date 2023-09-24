import { TouchableOpacity, Text, ViewStyle } from "react-native";

import { styles } from "./button.style";

export interface ButtonProps {
   onPress: () => void;
   text: string;
   variant?: "primary" | "secondary" | "outline";
   style?: ViewStyle;
}
const Button: React.FC<ButtonProps> = ({ onPress, text, style, variant = "primary" }) => {
   const buttonVariant = () => {
      if (variant === "primary") {
         return styles.primaryButton;
      } else if (variant === "secondary") {
         return styles.secondaryButton;
      } else {
         return styles.outlineButton;
      }
   };
   return (
      <TouchableOpacity onPress={onPress} style={[styles.button, buttonVariant(), style]}>
         <Text
            style={[
               styles.text,
               variant === "outline" ? { color: "black", fontWeight: "300" } : null,
            ]}
         >
            {text}
         </Text>
      </TouchableOpacity>
   );
};

export default Button;
