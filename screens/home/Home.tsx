import { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";

import { RootStackParamList } from "../../App";
import { Styles } from "../../components";
import { COLORS } from "../../constants/theme";

interface User {
   id: number;
   name: string;
   email: string;
}

type mainScreenProps = StackNavigationProp<RootStackParamList, "Search">;

const Home = () => {
   const navigation = useNavigation<mainScreenProps>();
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
      return (
         <SafeAreaView
            style={[
               Styles.container,
               {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
               },
            ]}
         >
            <ActivityIndicator size={45} color={"#3151ff"} />
            <Text style={{ textAlign: "center" }}>Loading..</Text>
         </SafeAreaView>
      );
   }

   return (
      <SafeAreaView style={Styles.container}>
         <View style={Styles.rowWrap}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hi, {data[0].name} !</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
               <AntDesign name="search1" size={25} color={COLORS.text} />
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

export default Home;
