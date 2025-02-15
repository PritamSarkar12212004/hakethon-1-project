import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const NavHeader = () => {
  return (
    <View className="w-full   flex-row items-center justify-between px-3 py-3">
      <Text className="text-2xl font-thin ">Hello, Pritam</Text>
      <TouchableOpacity className="h-12 w-12 rounded-full bg-orange-500">
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg",
          }}
          className="h-full w-full rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavHeader;
