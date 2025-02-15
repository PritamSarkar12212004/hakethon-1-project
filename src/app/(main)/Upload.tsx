import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Upload = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-[#CEEACA] relative">
      <View className="w-full h-full relative bg-[#CEEACA] flex items-center pt-40  ">
        <View className="w-full flex items-center justify-center pt-3 absolute left-[-50] z-50 ">
          <View className="w-full relative flex items-center justify-center mt-10">
            <View className="w-52 h-80 rounded-[90px] gap-6 bg-[#72C788] flex items-center justify-between py-14">
              <View className="h-32 w-32 bg-white/50 rounded-full flex items-center justify-center">
                <Entypo name="images" size={50} color="black" />
              </View>
              <View className="w-full gap-4 flex items-center justify-center">
                <View className="w-full flex items-center justify-center">
                  <Text className="text-xl font-extrabold text-black">
                    Prop.Image
                  </Text>
                </View>
                <View className="w-full flex  items-center justify-center px-7">
                  <View className="w-full flex  justify-center bg-white h-2  rounded-full">
                    <View className="w-[70%] flex items-center justify-center bg-black hite px-5  rounded-full">
                      <Text></Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="w-full flex items-center justify-center pt-3 absolute right-[-50] top-28 z-0 ">
          <View className="w-full relative flex items-center justify-center mt-10">
            <View className="w-52 h-80 rounded-[90px] gap-6 bg-[#9c80d7] flex items-center justify-between py-14">
              <View className="h-32 w-32 bg-white/50 rounded-full flex items-center justify-center">
                <Ionicons name="document" size={50} color="white" />
              </View>
              <View className="w-full gap-4 flex items-center justify-center">
                <View className="w-full flex items-center justify-center">
                  <Text className="text-xl font-extrabold text-white">
                    Doc.Image
                  </Text>
                </View>
                <View className="w-full flex  items-center justify-center px-7">
                  <View className="w-full flex  justify-center bg-white h-2  rounded-full">
                    <View className="w-[70%] flex items-center justify-center bg-black hite px-5  rounded-full">
                      <Text></Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="w-full flex items-center justify-center absolute bottom-64  z-0 ">
        <Text className="text-3xl font-extrabold">Upload & Share</Text>
        <Text className="text-center mt-3 font-semibold leading-tight tracking-tighter">
          Showcase your property with high-quality images and verified documents
          to get the best deals.
        </Text>
        <View className="flex w-full px-10 items-center mt-5 justify-center">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/(upload")}
            className="w-full py-5 flex items-center justify-center rounded-3xl bg-[#7C73E6]"
          >
            <Text className="text-2xl font-bold text-white">Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Upload;
