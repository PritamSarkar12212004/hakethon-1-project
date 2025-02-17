import { View, Text, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import ImageCon from "../constant/ImageCon";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
  const router = useRouter();
  const cheker = async () => {
    AsyncStorage.removeItem("temp");
    const temp = await AsyncStorage.getItem("temp");
    const auth = await AsyncStorage.getItem("auth");
    const MainAut = JSON.parse(auth);

    if (temp == "true") {
      router.replace("/(setup)");
    } else if (!MainAut) {
      router.replace("/(auth)");
    } else {
      router.replace("/(main)");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      cheker();
    }, 200);
  }, []);
  return (
    <>
      <StatusBar hidden />
      <View className="w-full h-full bg-blue-600 flex justify-center items-center">
        <Image source={ImageCon.logo} className="w-56 h-56" />
      </View>
    </>
  );
};

export default index;
