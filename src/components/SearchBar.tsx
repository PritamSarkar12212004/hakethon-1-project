import { View, Text, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View className="w-full h-16  flex flex-row items-center justify-center px-5 relative">
      <View className="absolute top-5  z-50 right-10">
        <AntDesign name="search1" size={30} color="black" />
      </View>
      <TextInput
        focusable
        autoFocus
        className="w-full text-lg font-semibold z-0 h-16 mt-2 bg-gray-200 rounded-full px-4"
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;
