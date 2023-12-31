import { View, Text, Image, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { styles } from "./slides.style";
import Button from "../Button/Button";

export interface SlideProps {
   id: number;
   image: ImageSourcePropType;
   title: string;
   isLast?: boolean;
}

// Ref : https://stackoverflow.com/questions/68779417/navigation-navigatehome-showing-some-error-in-typescript
type mainScreenProps = StackNavigationProp<RootStackParamList, "Main">;

const Slides = ({ item }: { item: SlideProps }) => {
   const navigation = useNavigation<mainScreenProps>();
   return (
      <View style={styles.container}>
         <Image source={item.image} style={styles.image} />
         <Text style={styles.title}>{item.title}</Text>
         <View style={styles.stack}>
            {item.isLast && (
               <Button
                  text="Get Started"
                  onPress={() => navigation.navigate("Main")}
                  variant="primary"
               />
            )}
         </View>
      </View>
   );
};

export default Slides;
