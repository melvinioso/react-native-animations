import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HIT_SLOP = {
  top: 20,
  right: 20,
  left: 20,
  bottom: 20,
};

function BackButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.backButton} hitSlop={HIT_SLOP}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 60,
    height: 60,
  },
});

export { BackButton };
