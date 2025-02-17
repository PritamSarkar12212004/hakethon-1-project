import { View, Text, TouchableOpacity, Image, Touchable } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { userContext } from "../context/ContextApi";

const MainCard = ({ data }: any) => {
  const [pop, setpop] = useState(false);
  const func = (item) => {
    setpop(item._id);
  };
  const router = useRouter();
  const routerFun = () => {
    router.push("/(view)");
  };

  const { temoData, settemoData } = userContext();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => func(item)}
            activeOpacity={0.8}
            className="w-full h-80 relative"
          >
            <View className="w-full absolute top-0 px-10 py-4 z-50  flex items-end justify-end">
              <View className="h-16 w-16 rounded-full bg-zinc-600/10 flex items-center justify-center">
                <AntDesign name="hearto" size={24} color="white" />
              </View>
            </View>
            <Image
              source={{
                uri: item.maiImage,
              }}
              className="w-full h-full rounded-[40px]"
              resizeMode="cover"
            />
            {item._id == pop ? (
              <View className="w-full flex h-20  absolute bottom-5 px-2 gap-2">
                <View className=" bg-zinc-900/50 w-full h-full backdrop-blur-xl flex-row px-2 items-center justify-between rounded-[40px] z-50 ">
                  <View className="h-full flex p-3">
                    <Text className="text-xl font-bold text-zinc-300">
                      {item.nameOwner}
                    </Text>
                    <View className="flex-row items-center gap-1">
                      <MaterialIcons
                        name="location-on"
                        size={15}
                        color="gray"
                      />
                      <Text className="text-gray-400">Kolkata, India</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      settemoData(item);
                      routerFun();
                    }}
                    className="h-16 w-16 rounded-full bg-black flex items-center justify-center"
                  >
                    <Feather name="arrow-up-right" size={24} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default MainCard;
