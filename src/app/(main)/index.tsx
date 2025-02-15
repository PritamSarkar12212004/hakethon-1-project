import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/Header";
import Exploere from "@/src/components/Exploere";
import MainCard from "@/src/components/MainCard";

const index = () => {
  return (
    <SafeAreaView className="bg-[#212121]">
      <ScrollView>
        <View className="w-full   bg-white ">
          <Header />
          <View className=" mt-36 w-full  px-2 text-center">
            <Text className="text-black text-center  text-sm font-thin">
              A Smart & Secure way to Buy , Sell , and rent land . We'll provide
              insight to help you make the informed decision .
            </Text>
          </View>
          <View className="w-full">
            <Exploere />
          </View>
          <View className="w-full mt-10 px-2 gap-5 flex items-center justify-center mb-36">
            <MainCard />
            <MainCard />
            <MainCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
