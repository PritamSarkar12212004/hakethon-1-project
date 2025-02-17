import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { userContext } from "../context/ContextApi";

const NavHeader = () => {
  const { user } = userContext();

  return (
    <View className="w-full   flex-row items-center justify-between px-3 py-3">
      <Text className="text-2xl font-thin ">Hello, Pritam</Text>
      <TouchableOpacity className="h-12 w-12 rounded-full bg-orange-500">
        <Image
          source={{
            uri: user.userImage,
          }}
          className="h-full w-full rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavHeader;
