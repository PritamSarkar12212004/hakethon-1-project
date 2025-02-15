import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const PopularArea = () => {
  return (
    <View className="w-full flex  px-3 mt-5">
      <Text className="text-2xl font-bold">Popular Area</Text>
      <View className="w-full mt-10">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className=" flex-row gap-3">
            <TouchableOpacity className="w-64 p-10 rounded-[40px] h-96 bg-[#FCCEB4]">
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-64 p-10 rounded-[40px] h-96 bg-[#FCCEB4]">
              <Text>1</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PopularArea;
