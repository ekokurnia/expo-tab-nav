import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { ScreenNavigationProps } from "../../type";
import {
   Places,
   globalStyles,
   HeightSpacer,
   LoadingScreen,
   Recomendations,
} from "../../components";
import { COLORS } from "../../constants/theme";
import NearbyHotels from "../../components/Home/NearbyHotels";

interface User {
   id: number;
   name: string;
   email: string;
}

const Home = () => {
   const navigation = useNavigation<ScreenNavigationProps>();
   const [loading, setIsLoading] = useState(true);
   const [data, setData] = useState<User[]>([]);

   useEffect(() => {
      const getData = async () => {
         try {
            setIsLoading(true);
            const { data } = await axios.get(
               "https://jsonplaceholder.typicode.com/users"
            );
            setData(data);
            setIsLoading(false);
         } catch (error) {
            console.log("Error oncured");
         }
      };
      getData();
   }, [Home]);

   if (loading) {
      return <LoadingScreen />;
   }

   return (
      <SafeAreaView style={globalStyles.container}>
         <View style={globalStyles.rowWrap}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Hi, {data[0].name}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
               <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                  <AntDesign name="search1" size={25} color={COLORS.text} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                  <AntDesign name="setting" size={25} color={COLORS.text} />
               </TouchableOpacity>
            </View>
         </View>
         <HeightSpacer height={25} />
         <ScrollView showsVerticalScrollIndicator={false}>
            <Places />
            <HeightSpacer height={25} />
            <Recomendations />
            <HeightSpacer height={25} />
            <NearbyHotels />
         </ScrollView>
      </SafeAreaView>
   );
};

export default Home;
