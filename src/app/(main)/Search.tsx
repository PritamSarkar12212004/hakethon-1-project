import { View, Text } from "react-native";
import React from "react";
import NavHeader from "@/src/components/NavHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/src/components/SearchBar";
import Sussegtion from "@/src/components/Sussegtion";
import PopularArea from "@/src/components/PopularArea";

const Search = () => {
  
  return (
    <SafeAreaView className="w-full h-full bg-[#F8F2EF]">
      <View className="w-full h-full">
        <NavHeader />
        <SearchBar />
        <Sussegtion />
        <PopularArea />
      </View>
    </SafeAreaView>
  );
};

export default Search;
