import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenNavigationProps } from "../../type";
import NetworkImage from "../Reusable/NetworkImage";

export interface countryProps {
   name: string;
   urlImage: string;
}

const Country = (item: countryProps) => {
   const navigation = useNavigation<ScreenNavigationProps>();
   return (
      <TouchableOpacity onPress={() => navigation.navigate("CountryDetails", item)}>
         <View>
            <NetworkImage height={75} width={75} url={item.urlImage} />
            <Text style={{ textAlign: "center", paddingTop: 2 }}>{item.name}</Text>
         </View>
      </TouchableOpacity>
   );
};

export default Country;

