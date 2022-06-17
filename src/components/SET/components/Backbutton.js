import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Backbutton = ({ onPress }) => {
  return (
    <AntDesign
      name="arrowLeft"
      size={24}
      style={{ padding: 12 }}
      color="#333"
      onPress={onPress}
    />
  );
};

export default Backbutton;
