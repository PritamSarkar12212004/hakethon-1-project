import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import ViewHeader from "@/src/components/view/ViewHeader";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { AntDesign } from "@expo/vector-icons";
import { userContext } from "@/src/context/ContextApi";

const LandRentScreen = () => {
  const { temoData,user } = userContext();
  return (
    <View className="w-full h-full bg-white relative">
      <ScrollView>
        {/* Header */}
        <View className="w-full absolute top-12 z-50">
          <ViewHeader />
        </View>

        {/* Cover Image */}
        <Image
          source={{
            uri: temoData.maiImage,
          }}
          className="w-full h-96 rounded-b-[40px]"
          resizeMode="cover"
        />

        {/* Profile & Info */}
        <View className="w-full flex px-5 pt-7">
          <Text className="text-black text-3xl font-bold">
            {temoData.nameOwner}
          </Text>
          <View className="flex-row items-center justify-between mt-2">
            <View className="flex-row items-center gap-2">
              <FontAwesome6 name="location-dot" size={20} color="gray" />
              <Text className="text-zinc-500 font-semibold">
                {temoData.productAddress}
              </Text>
            </View>
            <Image
              source={{
                uri: user.userImage,
              }}
              className="h-12 w-12 rounded-full"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Land Details */}
        <View className="px-5 pt-5">
          <Text className="text-xl font-bold text-black">Land Details</Text>
          <Text className="text-gray-500 mt-2">
            • 5000 sq. ft. | Agricultural Land
          </Text>
          <Text className="text-gray-500">
            • Available for lease | 10 years
          </Text>
          <Text className="text-gray-500">
            • Facilities: Water, Electricity, Road Access
          </Text>
          <Text className="text-gray-500">• Soil Type: Fertile Loamy Soil</Text>
          <Text className="text-gray-500">
            • Suitable for: Farming, Greenhouse, Warehouse
          </Text>
        </View>

        {/* Pricing */}
        <View className="px-5 pt-5">
          <Text className="text-xl font-bold text-black">Rental Price</Text>
          <Text className="text-green-600 text-lg font-semibold">
            ₹15,000 / Month
          </Text>
          <Text className="text-gray-500 mt-2">
            • Negotiable based on lease duration
          </Text>
          <Text className="text-gray-500">
            • Discounts available for long-term contracts
          </Text>
        </View>

        {/* Additional Features */}
        <View className="px-5 pt-5">
          <Text className="text-xl font-bold text-black">
            Additional Features
          </Text>
          <Text className="text-gray-500 mt-2">• Nearby Market: 2 km</Text>
          <Text className="text-gray-500">
            • Transport: Well-connected by roads
          </Text>
          <Text className="text-gray-500">
            • Security: Fenced boundary, CCTV surveillance
          </Text>
          <Text className="text-gray-500">
            • Accessibility: Close to National Highway
          </Text>
          <Text className="text-gray-500">
            • Climate: Moderate with good rainfall
          </Text>
        </View>

        {/* Contact Button */}
        <View className="px-5 pt-7 pb-10">
          <TouchableOpacity className="bg-blue-600 p-4 rounded-xl flex-row items-center justify-center">
            <AntDesign name="phone" size={24} color="white" />
            <Text className="text-white text-lg font-semibold ml-2">
              Contact Owner
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LandRentScreen;
