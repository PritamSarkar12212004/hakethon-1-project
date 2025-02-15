import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const ProfileHeader = () => {
  return (
    <View className="w-full h-96 bg-[#212121] pt-10">
      <View className="w-full flex items-center justify-center">
        <View className="w-48 h-48 rounded-full bg-white relative ">
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg",
            }}
            className="w-full h-full rounded-full"
            resizeMode="cover"
          />
          <TouchableOpacity className="h-10 absolute bottom-5 right-5 w-10 bg-white rounded-full flex items-center justify-center">
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text className="text-3xl font-semibold text-white mt-3">
          Pritam Sarkar
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
