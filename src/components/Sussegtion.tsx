import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Sussegtion = () => {
  return (
    <View className="w-full flex items-center justify-between px-3 flex-row mt-5">
      <View className=" flex items-center justify-center gap-1">
        <TouchableOpacity className=" h-20  w-20 flex items-center justify-center rounded-full bg-white ">
          <Entypo name="bar-graph" size={24} color="orange" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-700">Best Price</Text>
      </View>
      <View className=" flex items-center justify-center gap-1">
        <TouchableOpacity className=" h-20  w-20 flex items-center justify-center rounded-full bg-white ">
          <FontAwesome6 name="location-dot" size={30} color="red" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-700">NearBy</Text>
      </View>
      <View className=" flex items-center justify-center gap-1">
        <TouchableOpacity className=" h-20  w-20 flex items-center justify-center rounded-full bg-white ">
          <MaterialIcons name="verified" size={30} color="green" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-700">Verified</Text>
      </View>
      <View className=" flex items-center justify-center gap-1">
        <TouchableOpacity className=" h-20  w-20 flex items-center justify-center rounded-full bg-white ">
          <MaterialCommunityIcons name="key-chain" size={30} color="gray" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-700">Rental</Text>
      </View>
    </View>
  );
};

export default Sussegtion;
