import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import HeightSpacer from "../Reusable/HeightSpacer";
import { COLORS } from "../../constants/theme";
import globalStyles from "../Reusable/reusable.style";
import NetworkImage from "../Reusable/NetworkImage";
const NearbyHotels = () => {
   const data = [
      {
         id: 1,
         name: "Nusa Kencana Hotel",
         urlImage:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
         id: 2,
         name: "Garuda Hotel",
         urlImage:
            "https://images.unsplash.om/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      },
   ];

   return (
      <View>
         <View style={globalStyles.rowWrap}>
            <Text style={globalStyles.title1}>Nearby Hotels</Text>
            <TouchableOpacity>
               <Ionicons name="list" size={25} />
            </TouchableOpacity>
         </View>
         <HeightSpacer height={15} />
         <View>
            <FlatList
               horizontal
               showsHorizontalScrollIndicator={false}
               data={data}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => (
                  <View style={styles.card}>
                     <View>
                        <NetworkImage url={item.urlImage} width={155} height={120} />
                     </View>
                     <View style={styles.cardText}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <View style={styles.cardReview}>
                           <AntDesign name="star" color={"orange"} size={15} />
                           <Text style={styles.cardTextMuted}>4.5 (114 review)</Text>
                        </View>
                     </View>
                  </View>
               )}
            />
         </View>
      </View>
   );
};

export default NearbyHotels;

const styles = StyleSheet.create({
   title: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   // Recommendation card
   card: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
      marginRight: 35,
      backgroundColor: "white",
      width: 175,
      height: 200,
      borderRadius: 10,
      justifyContent: "center",
      gap: 10,
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
