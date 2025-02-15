import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCon from "../constant/ImageCon";

const Header = () => {
  return (
    <View className="w-full  gap-5 justify-between bg-[#212121] pb-24 px-3 pt-2">
      <Text className="text-[#4477CE] text-lg font-semibold">
        <Text className=" text-[#CD1818] text-2xl">B</Text>uyNStay
      </Text>
      <View className="w-full flex gap-3">
        <Text className="text-white  font-extrabold ">HIGH CLASS</Text>
        <Text className="text-white  font-extrabold text-4xl">
          DISCOVER <Text className="text-[#96FC04]">MOST SUITABLE </Text>
          PROPERTY
        </Text>
        <Text className="text-white   font-extrabold text-4xl"></Text>
      </View>
      <View className="w-full relative flex items-center justify-center">
        <Image
          source={ImageCon.logo}
          className="w-full h-56 mt-36 absolute top-[-170] rounded-[40px] border-[10px] border-[#212121]  "
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Header;
