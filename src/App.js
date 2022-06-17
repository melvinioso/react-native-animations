import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";

import Pexels from "./components/animations/Pexels";
import Rolodex from "./components/animations/Rolodex";
import BlurredCarousel from "./components/animations/BlurredCarousel";
import ThreeDCarousel from "./components/animations/ThreeDCarousel";
import StickyFooter from "./components/animations/StickyFooter";
import ZaraMobile from "./components/animations/ZaraMobile";
import Parallax from "./components/animations/Parallax";
import Onboarding from "./components/animations/Onboarding";
import AnimatedTabs from "./components/animations/AnimatedTabs";
import FlatlistPicker from "./components/animations/FlatlistPicker";
import StackCarousel from "./components/animations/StackCarousel";
import MovieCarousel from "./components/animations/MovieCarousel";
import Headphones from "./components/animations/Headphones";
import PhotoCompare from "./components/animations/PhotoCompare";
import BankingSlider from "./components/animations/BankingSlider";
// import Timer from "./components/animations/Timer";
// import ProgressBar from "./components/animations/ProgressBar";
// import LongPress from "./components/animations/LongPress";
// import CallLog from "./components/animations/CallLog";
// import SmartRoom from "./components/animations/SmartRoom";
// import MoreButton from "./components/animations/MoreButton";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pexels" component={Pexels} />
        <Stack.Screen name="Rolodex" component={Rolodex} />
        <Stack.Screen name="BlurredCarousel" component={BlurredCarousel} />
        <Stack.Screen name="ThreeDCarousel" component={ThreeDCarousel} />
        <Stack.Screen name="StickyFooter" component={StickyFooter} />
        <Stack.Screen name="ZaraMobile" component={ZaraMobile} />
        <Stack.Screen name="Parallax" component={Parallax} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="AnimatedTabs" component={AnimatedTabs} />
        <Stack.Screen name="FlatlistPicker" component={FlatlistPicker} />
        <Stack.Screen name="StackCarousel" component={StackCarousel} />
        <Stack.Screen name="MovieCarousel" component={MovieCarousel} />
        <Stack.Screen name="Headphones" component={Headphones} />
        <Stack.Screen name="PhotoCompare" component={PhotoCompare} />
        <Stack.Screen name="BankingSlider" component={BankingSlider} />
        {/* <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="ProgressBar" component={ProgressBar} />
        <Stack.Screen name="LongPress" component={LongPress} />
        <Stack.Screen name="CallLog" component={CallLog} />
        <Stack.Screen name="SmartRoom" component={SmartRoom} />
        <Stack.Screen name="MoreButton" component={MoreButton} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
