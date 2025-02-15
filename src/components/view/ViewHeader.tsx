import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

const ViewHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex px-3 items-center justify-between flex-row">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        className="h-12 w-12 rounded-full flex items-center justify-center bg-white/60"
      >
        <AntDesign name="arrowleft" size={27} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ViewHeader;
