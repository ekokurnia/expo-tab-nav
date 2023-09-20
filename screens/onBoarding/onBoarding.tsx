import { FlatList } from "react-native";

import { Slides, SlideProps } from "../../components";

const OnBoarding = () => {
   // Onboarding slides
   const slides: ArrayLike<SlideProps> = [
      {
         id: 1,
         image: require("../../assets/images/onboard1.png"),
         title: "Discover new places",
      },
      {
         id: 2,
         image: require("../../assets/images/onboard2.png"),
         title: "One day trip",
      },
      {
         id: 3,
         image: require("../../assets/images/onboard3.png"),
         title: "Virtual tour",
         isLast: true,
      },
   ];

   // NavigationBar.setBackgroundColorAsync(COLORS.background);

   return (
      <FlatList
         pagingEnabled
         horizontal
         showsHorizontalScrollIndicator={false}
         data={slides}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item }) => <Slides item={item} />}
      />
   );
};

export default OnBoarding;
