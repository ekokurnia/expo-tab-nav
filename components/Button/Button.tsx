import { TouchableOpacity, Text } from "react-native";

import { styles } from "./button.style";

export interface ButtonProps {
   onPress: () => void;
   text: string;
   variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({ onPress, text, variant = "primary" }) => {
   const buttonStyle =
      variant === "primary" ? styles.primaryButton : styles.secondaryButton;
   return (
      <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
         <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
   );
};

export default Button;
