import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import ImageCon from "../constant/ImageCon";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)");
    }, 200);
  }, []);
  return (
    <View className="w-full h-full bg-blue-600 flex justify-center items-center">
      <Image source={ImageCon.logo} className="w-56 h-56" />
    </View>
  );
};

export default index;
