import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { Card, CardSection, Button } from "./common";

const { width, height } = Dimensions.get("screen");
const SPACING = 20;

const screens = [
  { screen: "Pexels", buttonText: "Double Flatlist" },
  { screen: "Rolodex", buttonText: "Animated Scroll" },
  { screen: "BlurredCarousel", buttonText: "Blurred Carousel" },
  { screen: "ThreeDCarousel", buttonText: "3D Carousel" },
  { screen: "StickyFooter", buttonText: "Sticky Footer" },
  { screen: "ZaraMobile", buttonText: "Zara Mobile 3D Carousel" },
  { screen: "Parallax", buttonText: "Parallax Carousel" },
  { screen: "Onboarding", buttonText: "Animated Onboarding" },
  { screen: "AnimatedTabs", buttonText: "Animated Tabs" },
  { screen: "FlatlistPicker", buttonText: "FlatList Picker" },
  { screen: "StackCarousel", buttonText: "Stack Carousel" },
  { screen: "MovieCarousel", buttonText: "Movie Carousel" },
  { screen: "Headphones", buttonText: "Headphones Carousel" },
  { screen: "PhotoCompare", buttonText: "Photo Compare" },
  { screen: "BankingSlider", buttonText: "Banking Slider" },
  // { screen: "Timer", buttonText: "Timer" },
  // { screen: "ProgressBar", buttonText: "Progress Bar" },
  // { screen: "LongPress", buttonText: "Long Press Button" },
  // { screen: "CallLog", buttonText: "Call Log" },
  // { screen: "SmartRoom", buttonText: "Smart Room" },
  // { screen: "MoreButton", buttonText: "More Button" },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        keyExtractor={(item) => item.screen}
        contentContainerStyle={{
          padding: SPACING,
          paddingBottom: 200,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Card key={index}>
              <CardSection>
                <Button onPress={() => navigation.navigate(item.screen)}>
                  {item.buttonText}
                </Button>
              </CardSection>
            </Card>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
