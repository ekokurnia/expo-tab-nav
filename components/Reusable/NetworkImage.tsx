import { View, StyleSheet, Image } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";

import { useState } from "react";

interface NetworkImageProps {
   url: string;
}

const MyLoader = (props: any) => (
   <ContentLoader
      speed={1.5}
      width={100}
      height={100}
      viewBox="0 0 100 100"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}
   >
      <Rect x="0" y="0" rx="10" ry="10" width="100" height="100" />
   </ContentLoader>
);
const NetworkImage = ({ url }: NetworkImageProps) => {
   const [loading, setLoading] = useState(true);
   const handleLoadStart = () => {
      setLoading(true);
   };

   const handleLoadEnd = () => {
      setLoading(false);
   };
   return (
      <View style={{ position: "relative", width: 100, height: 100 }}>
         {loading && <MyLoader />}
         <Image
            style={{
               width: 100,
               height: 100,
               borderRadius: 10,
               resizeMode: "cover",
               position: "absolute",
            }}
            source={{ uri: url }}
            onLoadStart={handleLoadStart}
            onLoadEnd={handleLoadEnd}
         />
      </View>
   );
};

export default NetworkImage;

const styles = StyleSheet.create({});