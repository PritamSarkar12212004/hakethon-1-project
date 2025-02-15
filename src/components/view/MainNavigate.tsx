import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
const MainNavigate = ({ title }: any) => {
  const navigate = useNavigation();
  return (
    <View className="w-full flex-row items-center justify-between ">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate.goBack()}
        className="h-14 w-14 rounded-full bg-zinc-200 flex items-center justify-center"
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text className="text-2xl ">{title}</Text>
      </View>
      <View className="h-14 w-14"></View>
    </View>
  );
};

export default MainNavigate;
