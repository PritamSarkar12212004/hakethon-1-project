import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainCard = () => {
  return (
    <TouchableOpacity className="w-full bg-[#F0F9FF] pb-4 rounded-2xl shadow-lg">
      {/* Image Section */}
      <View className="relative">
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/df/8e/1d/df8e1d340cd546049630294aa74207c2.jpg",
          }}
          className="w-full h-64 rounded-t-2xl"
        />
        <View className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
          <AntDesign name="heart" size={20} color="red" />
        </View>
      </View>

      {/* Details Section */}
      <View className="w-full px-3 pt-2">
        <Text className="text-xl text-black font-bold tracking-wide">
          Land for Rent - 25 Acres
        </Text>

        {/* Location and Price */}
        <View className="flex-row justify-between items-center mt-1">
          <View className="flex-row items-center gap-1">
            <Fontisto name="map-marker-alt" size={20} color="green" />
            <Text className="text-base text-green-700 font-semibold">Nagpur</Text>
          </View>
          <Text className="text-base font-semibold text-black">
            ₹30,000/<Text className="text-green-500">Month</Text>
          </Text>
        </View>

        {/* Land Details */}
        <View className="mt-2">
          <View className="flex-row items-center gap-2">
            <MaterialCommunityIcons name="sprout" size={20} color="#008000" />
            <Text className="text-base text-black font-semibold">Soil: Alluvial</Text>
          </View>
          <View className="flex-row items-center gap-2 mt-1">
            <Ionicons name="water" size={20} color="blue" />
            <Text className="text-base text-black font-semibold">Water: Borewell</Text>
          </View>
          <View className="flex-row items-center gap-2 mt-1">
            <MaterialCommunityIcons name="road-variant" size={20} color="brown" />
            <Text className="text-base text-black font-semibold">
              Road: Highway Connected
            </Text>
          </View>
        </View>

        {/* Best Use Cases */}
        <View className="mt-2">
          <Text className="text-base text-gray-600 font-bold underline">
            Suitable For:
          </Text>
          <View className="flex-row gap-2 mt-1">
            <View className="bg-green-500 px-2 py-1 rounded-md">
              <Text className="text-white text-xs font-semibold">Farming</Text>
            </View>
            <View className="bg-blue-500 px-2 py-1 rounded-md">
              <Text className="text-white text-xs font-semibold">Warehouse</Text>
            </View>
            <View className="bg-yellow-500 px-2 py-1 rounded-md">
              <Text className="text-white text-xs font-semibold">Industrial</Text>
            </View>
          </View>
        </View>

        {/* Share and Contact */}
        <View className="mt-3 flex-row justify-between items-center">
          <TouchableOpacity className="flex-row items-center gap-1 bg-orange-500 px-3 py-2 rounded-md">
            <AntDesign name="sharealt" size={18} color="white" />
            <Text className="text-white text-xs font-semibold">Share</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-600 px-3 py-2 rounded-md">
            <Text className="text-white text-xs font-semibold">Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MainCard;
