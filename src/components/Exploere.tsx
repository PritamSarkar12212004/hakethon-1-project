import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
const Exploere = () => {
  return (
    <View className="w-full flex-row  mt-5 items-center justify-between px-3">
      <TouchableOpacity className="bg-[#96FC04]  w-40 h-16 flex items-center justify-center rounded-xl ">
        <Text className="text-xl font-semibold">Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exploere;
