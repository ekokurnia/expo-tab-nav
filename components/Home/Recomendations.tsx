import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { ScreenNavigationProps } from "../../type";
import globalStyles from "../Reusable/reusable.style";
import NetworkImage from "../Reusable/NetworkImage";
import HeightSpacer from "../Reusable/HeightSpacer";
import { COLORS } from "../../constants/theme";

const Recomendations = () => {
   const navigation = useNavigation<ScreenNavigationProps>();

   const data = [
      {
         id: 1,
         urlImage:
            "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
         country: "Indonesia",
         name: "Ulun Danu Beratan Temple, Bali",
      },
      {
         id: 2,
         urlImage:
            "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
         country: "Japan",
         name: "Fuji Mountain",
      },
   ];
   return (
      <View>
         <View style={styles.title}>
            <Text style={globalStyles.title1}>Recomendations</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Recomendations")}>
               <Ionicons name="list" size={25} />
            </TouchableOpacity>
         </View>
         <HeightSpacer height={15} />
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            data={data}
            renderItem={({ item }) => (
               <View style={styles.card}>
                  <View>
                     <NetworkImage url={item.urlImage} width={75} height={75} />
                  </View>
                  <View style={styles.cardText}>
                     <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.cardTitle}
                     >
                        {item.name}
                     </Text>
                     <Text style={styles.cardTextMuted}>{item.country}</Text>
                     <View style={styles.cardReview}>
                        <AntDesign name="star" color={"orange"} size={15} />
                        <Text style={styles.cardTextMuted}>4.5 (114 review)</Text>
                     </View>
                  </View>
               </View>
            )}
         />
      </View>
   );
};

export default Recomendations;

const styles = StyleSheet.create({
   title: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   // Recommendation card
   card: {
      display: "flex",
      flexDirection: "row",
      padding: 10,
      marginRight: 15,
      backgroundColor: "white",
      width: 275,
      height: 100,
      borderRadius: 10,
      gap: 15,
   },
   cardText: {
      flex: 1,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingBottom: 10,
   },
   cardTextMuted: {
      color: COLORS.textMuted,
      fontSize: 13,
   },
   cardTitle: {
      fontWeight: "700",
   },
   cardReview: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
   },
});
