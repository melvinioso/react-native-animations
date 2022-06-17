import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import SLIDER_DATA from '../../../../config/data/data';
import { ITEM_WIDTH, width, SPACING } from '../../../../config/theme';

const MarketingSlider = () => {
  return (
    <FlatList 
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
    />
  );
}