import { StyleSheet, Text, View, VirtualizedList } from "react-native";

import globalStyles from "../Reusable/reusable.style";
import HeightSpacer from "../Reusable/HeightSpacer";
import Country from "../Tiles/Country";

interface countries {
   id: number;
   name: string;
   urlImage: string;
}
const Places = () => {
   const countries: countries[] = [
      {
         id: 1,
         name: "Indonesia",
         urlImage:
            "https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
         id: 2,
         name: "Japan",
         urlImage:
            "https://images.unsplash.om/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
         id: 3,
         name: "USA",
         urlImage:
            "https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      },
      {
         id: 4,
         name: "England",
         urlImage:
            "https://images.unsplash.com/photo-1543832923-44667a44c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1944&q=80",
      },
      {
         id: 5,
         name: "France",
         urlImage:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      },
      {
         id: 6,
         name: "Italy",
         urlImage:
            "https://plus.unsplash.com/premium_photo-1661962292128-879bb496ce17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
         id: 7,
         name: "Spain",
         urlImage:
            "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
         id: 8,
         name: "Canada",
         urlImage:
            "https://images.unsplash.com/photo-1513564774965-ac25ddf81e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
      {
         id: 9,
         name: "Australia",
         urlImage:
            "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
      },
      {
         id: 10,
         name: "Brazil",
         urlImage:
            "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
   ];
   return (
      <View>
         <Text style={globalStyles.title1}>Places</Text>
         <HeightSpacer height={15} />
         <VirtualizedList
            horizontal
            data={countries}
            keyExtractor={(item: countries) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            getItemCount={(data) => data.length}
            getItem={(data, index) => data[index]}
            renderItem={({ item }) => (
               <View style={{ marginRight: 15 }}>
                  <Country name={item.name} urlImage={item.urlImage} />
               </View>
            )}
         />
      </View>
   );
};

export default Places;

const styles = StyleSheet.create({});
